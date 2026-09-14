(function (root, factory) {
  let instrument = root && root.YMInstrumentEngine;
  if (typeof module === 'object' && module.exports) instrument = require('./v6-instrument-engine.js');
  const api = factory(instrument);
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.YMAnalysisEngine = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Instrument) {
  'use strict';

  const SWEEP_SCHEMA = 1;
  const MICRO = 1000000;
  const MAX_SAMPLES = 401;
  const DEFAULT_SAMPLES = 121;

  const DOMAINS = Object.freeze({
    lab: Object.freeze({ cG:[0,2], lambdaYM:[0,2], residual:[0,2] }),
    spectrum: Object.freeze({ delta:[0,1.8], epsilon:[0,1] }),
    rg: Object.freeze({ z:[0,1.5], ec:[0,2], epsR:[0,2] })
  });

  const PARAM_LABELS = Object.freeze({
    cG:'c_G', lambdaYM:'Λ_YM', residual:'r(a,L)', delta:'Δ', epsilon:'ε', z:'Z', ec:'𝓔_c', epsR:'ε_R'
  });

  function clamp(v,min,max){ return Math.max(min,Math.min(max,v)); }
  function toMicro(v){ return Math.round(Number(v)*MICRO); }
  function fromMicro(v){ return Number(v)/(MICRO*MICRO); }
  function exactProductMinus(a,b,c){
    const A=BigInt(toMicro(a)), B=BigInt(toMicro(b)), C=BigInt(toMicro(c));
    const raw=A*B-C*BigInt(MICRO);
    return Number(raw)/Number(BigInt(MICRO)*BigInt(MICRO));
  }
  function linspace(min,max,count){
    min=Number(min);max=Number(max);count=Math.max(2,Math.min(MAX_SAMPLES,Math.floor(Number(count)||DEFAULT_SAMPLES)));
    if(max<min)[min,max]=[max,min];
    if(max===min)return Array.from({length:count},()=>min);
    const step=(max-min)/(count-1);
    return Array.from({length:count},(_,i)=>i===count-1?max:Number((min+i*step).toFixed(6)));
  }
  function assumptionsLicensed(assumptions){
    const values=Object.values(assumptions||{});
    return values.length ? values.every(Boolean) : true;
  }

  function evaluateLab(base, assumptions){
    const cG=Number(base.cG), lambdaYM=Number(base.lambdaYM), residual=Number(base.residual);
    const gross=Number((BigInt(toMicro(cG))*BigInt(toMicro(lambdaYM))).toString())/(MICRO*MICRO);
    const candidate=exactProductMinus(cG,lambdaYM,residual);
    const targetAvailable=assumptionsLicensed(assumptions);
    const regime=Instrument.classifyLab({candidate,gross,targetAvailable});
    return {gross,candidate,targetAvailable,regime,metric:candidate,metricLabel:'candidate'};
  }

  function evaluateRG(base, assumptions){
    const z=Number(base.z), ec=Number(base.ec), epsR=Number(base.epsR);
    const gross=Number((BigInt(toMicro(z))*BigInt(toMicro(ec))).toString())/(MICRO*MICRO);
    const net=exactProductMinus(z,ec,epsR);
    const reflectionLicensed=assumptions ? assumptions.aRG !== false : true;
    const regime=Instrument.classifyRG({net,gross,defect:epsR,reflectionLicensed});
    return {gross,net,reflectionLicensed,regime,metric:net,metricLabel:'net'};
  }

  function evaluateSpectrum(base, assumptions, mode){
    const delta=Number(base.delta), epsilon=clamp(Number(base.epsilon),0,1);
    const linkedBlocked=mode==='linked' && !assumptionsLicensed(assumptions);
    const gapRegime=Instrument.classifySpectrum(delta,linkedBlocked);
    const composition=Instrument.classifyComposition(epsilon);
    return {
      delta,epsilon,orthWeight:epsilon*epsilon,vacuumWeight:Math.max(0,1-epsilon*epsilon),
      linkedBlocked,gapRegime,composition,
      regime:gapRegime,metric:delta,metricLabel:'delta'
    };
  }

  function evaluate(instrument, base, assumptions, mode){
    if(instrument==='lab') return evaluateLab(base,assumptions);
    if(instrument==='rg') return evaluateRG(base,assumptions);
    if(instrument==='spectrum') return evaluateSpectrum(base,assumptions,mode);
    throw new Error('Unsupported analysis instrument.');
  }

  function metricFor(instrument,param,result){
    if(instrument==='spectrum' && param==='epsilon') return result.orthWeight;
    return result.metric;
  }

  function derivative(instrument,param,base){
    if(instrument==='lab'){
      if(param==='cG') return Number(base.lambdaYM);
      if(param==='lambdaYM') return Number(base.cG);
      if(param==='residual') return -1;
    }
    if(instrument==='rg'){
      if(param==='z') return Number(base.ec);
      if(param==='ec') return Number(base.z);
      if(param==='epsR') return -1;
    }
    if(instrument==='spectrum'){
      if(param==='delta') return 1;
      if(param==='epsilon') return 2*Number(base.epsilon);
    }
    return null;
  }

  function runSweep(spec){
    const instrument=spec.instrument;
    const param=spec.param;
    if(!DOMAINS[instrument] || !DOMAINS[instrument][param]) throw new Error('Unsupported sweep parameter.');
    const [dmin,dmax]=DOMAINS[instrument][param];
    const min=clamp(Number(spec.min),dmin,dmax), max=clamp(Number(spec.max),dmin,dmax);
    const xs=linspace(min,max,spec.samples||DEFAULT_SAMPLES);
    const base={...(spec.base||{})};
    const points=xs.map(x=>{
      const inputs={...base,[param]:x};
      const result=evaluate(instrument,inputs,spec.assumptions||{},spec.mode||'supplied');
      return {x,y:metricFor(instrument,param,result),regime:result.regime.key,tone:result.regime.tone,result};
    });
    return Object.freeze({schema:SWEEP_SCHEMA,instrument,param,min,max,samples:points.length,base,mode:spec.mode||'supplied',points,derivative:derivative(instrument,param,base)});
  }

  function locateTransitions(spec){
    const coarse=runSweep({...spec,samples:Math.max(81,Math.min(201,spec.samples||121))});
    const transitions=[];
    for(let i=1;i<coarse.points.length;i++){
      const a=coarse.points[i-1], b=coarse.points[i];
      if(a.regime===b.regime) continue;
      let lo=a.x, hi=b.x, loKey=a.regime, hiKey=b.regime;
      for(let j=0;j<28;j++){
        const mid=(lo+hi)/2;
        const r=evaluate(spec.instrument,{...(spec.base||{}),[spec.param]:mid},spec.assumptions||{},spec.mode||'supplied');
        const key=r.regime.key;
        if(key===loKey) lo=mid; else {hi=mid;hiKey=key;}
      }
      const x=(lo+hi)/2;
      transitions.push({x:Number(x.toFixed(6)),from:loKey,to:hiKey});
    }
    return transitions;
  }

  function exactZeroThreshold(instrument,param,base){
    const b=base||{};
    if(instrument==='lab'){
      if(param==='residual') return Number(b.cG)*Number(b.lambdaYM);
      if(param==='cG') return Number(b.lambdaYM)!==0 ? Number(b.residual)/Number(b.lambdaYM) : null;
      if(param==='lambdaYM') return Number(b.cG)!==0 ? Number(b.residual)/Number(b.cG) : null;
    }
    if(instrument==='rg'){
      if(param==='epsR') return Number(b.z)*Number(b.ec);
      if(param==='z') return Number(b.ec)!==0 ? Number(b.epsR)/Number(b.ec) : null;
      if(param==='ec') return Number(b.z)!==0 ? Number(b.epsR)/Number(b.z) : null;
    }
    if(instrument==='spectrum' && param==='delta') return 0;
    return null;
  }

  function criticalThresholds(spec){
    const out=[];
    const zero=exactZeroThreshold(spec.instrument,spec.param,spec.base||{});
    const domain=DOMAINS[spec.instrument]?.[spec.param];
    if(zero!=null && Number.isFinite(zero) && (!domain || (zero>=domain[0] && zero<=domain[1]))) out.push({x:Number(zero.toFixed(6)),kind:'zero',label:'zero'});
    if(spec.instrument==='spectrum'){
      if(spec.param==='delta') [0.02,0.10,0.35].forEach((x,i)=>out.push({x,kind:'interface',label:['near-zero','narrow','open'][i]}));
      if(spec.param==='epsilon') [Math.sqrt(.10),Math.sqrt(.40),Math.sqrt(.60),Math.sqrt(.90)].forEach((x,i)=>out.push({x:Number(x.toFixed(6)),kind:'composition',label:['vacuum-strong','vacuum-major','balanced-high','orth-strong'][i]}));
    }
    locateTransitions(spec).forEach(t=>{
      if(!out.some(x=>Math.abs(x.x-t.x)<1e-5)) out.push({...t,kind:'regime',label:`${t.from}→${t.to}`});
    });
    return out.sort((a,b)=>a.x-b.x);
  }

  function regimeTone(regime){
    const r=String(regime||'');
    if(/strong-negative|negative|closed/.test(r)) return 'negative';
    if(/fragile-negative/.test(r)) return 'warning-negative';
    if(/zero|near-zero|narrow|fragile-positive/.test(r)) return 'warning';
    if(/blocked/.test(r)) return 'conditional';
    if(/robust-positive|wide/.test(r)) return 'positive-strong';
    if(/positive|open/.test(r)) return 'positive';
    return 'neutral';
  }

  function runRegimeMap(spec){
    const instrument=spec.instrument;
    const base={...(spec.base||{})};
    let xParam,yParam;
    if(instrument==='lab'){ xParam='cG';yParam='residual'; }
    else if(instrument==='rg'){ xParam='z';yParam='epsR'; }
    else if(instrument==='spectrum'){ xParam='delta';yParam='epsilon'; }
    else throw new Error('Unsupported regime map instrument.');
    const xd=DOMAINS[instrument][xParam], yd=DOMAINS[instrument][yParam];
    const cols=Math.max(8,Math.min(36,Number(spec.cols)||28));
    const rows=Math.max(6,Math.min(28,Number(spec.rows)||18));
    const xs=linspace(spec.xMin ?? xd[0],spec.xMax ?? xd[1],cols);
    const ys=linspace(spec.yMin ?? yd[0],spec.yMax ?? yd[1],rows);
    const cells=[];
    ys.forEach(y=>xs.forEach(x=>{
      const inputs={...base,[xParam]:x,[yParam]:y};
      const result=evaluate(instrument,inputs,spec.assumptions||{},spec.mode||'supplied');
      const key=instrument==='spectrum' ? `${result.gapRegime.key}|${result.composition.key}` : result.regime.key;
      const tone=instrument==='spectrum' ? result.gapRegime.tone : result.regime.tone;
      cells.push({x,y,key,tone,metric:result.metric,result});
    }));
    return Object.freeze({schema:SWEEP_SCHEMA,instrument,xParam,yParam,xs,ys,cells,cols:xs.length,rows:ys.length,base,mode:spec.mode||'supplied'});
  }

  function csvFromSweep(sweep){
    const rows=['x,y,regime,tone'];
    sweep.points.forEach(p=>rows.push([p.x,p.y,p.regime,p.tone].map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')));
    return rows.join('\n');
  }

  return Object.freeze({ SWEEP_SCHEMA, MICRO, MAX_SAMPLES, DEFAULT_SAMPLES, DOMAINS, PARAM_LABELS, linspace, evaluate, evaluateLab, evaluateRG, evaluateSpectrum, runSweep, locateTransitions, criticalThresholds, runRegimeMap, derivative, csvFromSweep, regimeTone });
});
