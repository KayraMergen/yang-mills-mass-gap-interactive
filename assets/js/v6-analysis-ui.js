(function(){
  'use strict';
  const A=window.YMAnalysisEngine;
  if(!A) return;
  const body=document.body;
  const isEn=()=>body.classList.contains('lang-en');
  const $=id=>document.getElementById(id);
  const drawer=$('analysisDrawer'), backdrop=$('analysisDrawerBackdrop');
  if(!drawer) return;

  const ui={ instrument:'lab', param:'residual', lastSweep:null, lastMap:null, selectedCell:null };
  const ids={
    lab:{cG:'cG',lambdaYM:'lambda',residual:'residual'},
    spectrum:{delta:'delta',epsilon:'epsilon'},
    rg:{z:'z',ec:'ec',epsR:'epsR'}
  };
  const params={lab:['cG','lambdaYM','residual'],spectrum:['delta','epsilon'],rg:['z','ec','epsR']};
  const labels={
    tr:{lab:'Varsayım laboratuvarı',spectrum:'Spektrum',rg:'RG transfer',candidate:'Aday alt sınır',net:'Net bütçe',delta:'Δ',orth:'Ortogonal ağırlık',derivative:'Yerel duyarlılık',nearest:'En yakın eşik',resolution:'Tarama çözünürlüğü',none:'Yok',current:'Mevcut rejim',map:'T0 rejim haritası'},
    en:{lab:'Assumption lab',spectrum:'Spectrum',rg:'RG transfer',candidate:'Candidate lower bound',net:'Net budget',delta:'Δ',orth:'Orthogonal weight',derivative:'Local sensitivity',nearest:'Nearest threshold',resolution:'Sweep resolution',none:'None',current:'Current regime',map:'T0 regime map'}
  };
  const L=()=>isEn()?labels.en:labels.tr;
  const fmt=(n,d=6)=>Number.isFinite(Number(n))?Number(n).toFixed(d):'—';

  function assumptions(){
    return {aGauge:$('aGauge')?.checked!==false,aScale:$('aScale')?.checked!==false,aCoarse:$('aCoarse')?.checked!==false,aRG:$('aRG')?.checked!==false,aUniform:$('aUniform')?.checked!==false,aOS:$('aOS')?.checked!==false};
  }
  function readValue(instrument,param){const id=ids[instrument][param];return Number($(id)?.value ?? 0);}
  function baseFor(instrument){const out={};params[instrument].forEach(p=>out[p]=readValue(instrument,p));return out;}
  function modeFor(instrument){if(instrument!=='spectrum')return 'supplied';return document.querySelector('.spectrum-mode.active')?.dataset.spectrumMode==='lab'?'linked':'supplied';}
  function controlDomain(instrument,param){
    const id=ids[instrument][param], el=$(id); const domain=A.DOMAINS[instrument][param];
    if(!el) return domain;
    const min=Number.isFinite(Number(el.min))?Number(el.min):domain[0], max=Number.isFinite(Number(el.max))?Number(el.max):domain[1];
    return [Math.min(min,readValue(instrument,param)),Math.max(max,readValue(instrument,param))];
  }

  function setInstrument(instrument){
    ui.instrument=instrument;
    document.querySelectorAll('[data-analysis-instrument]').forEach(b=>b.classList.toggle('active',b.dataset.analysisInstrument===instrument));
    const select=$('analysisParam');select.innerHTML='';
    params[instrument].forEach(p=>{const o=document.createElement('option');o.value=p;o.textContent=A.PARAM_LABELS[p]||p;select.appendChild(o);});
    ui.param=params[instrument][0]; if(instrument==='lab')ui.param='residual'; if(instrument==='rg')ui.param='epsR'; if(instrument==='spectrum')ui.param='delta';
    select.value=ui.param; syncRangeDefaults(); runAnalysis();
  }
  function syncRangeDefaults(){
    ui.param=$('analysisParam').value;
    const [min,max]=controlDomain(ui.instrument,ui.param);
    $('analysisMin').value=Number(min.toFixed(6)); $('analysisMax').value=Number(max.toFixed(6));
  }
  function currentSpec(){
    return {instrument:ui.instrument,param:ui.param,min:Number($('analysisMin').value),max:Number($('analysisMax').value),samples:Number($('analysisSamples').value),base:baseFor(ui.instrument),assumptions:assumptions(),mode:modeFor(ui.instrument)};
  }
  function toneClass(tone){return `analysis-regime-${String(tone||'neutral').replace(/[^a-z-]/g,'')}`;}
  const regimeNames={
    tr:{'strong-negative':'güçlü negatif','fragile-negative':'kırılgan negatif','zero':'sıfır','fragile-positive':'kırılgan pozitif','moderate-positive':'orta pozitif','robust-positive':'güçlü pozitif','structurally-blocked':'yapısal olarak bloke','closed':'kapalı','nearly-closed':'neredeyse kapalı','weakly-open':'zayıf açık','clearly-open':'belirgin açık','vacuum-dominant':'vakum baskın','mixed':'karışık','orthogonal-dominant':'ortogonal baskın'},
    en:{'strong-negative':'strong negative','fragile-negative':'fragile negative','zero':'zero','fragile-positive':'fragile positive','moderate-positive':'moderate positive','robust-positive':'robust positive','structurally-blocked':'structurally blocked','closed':'closed','nearly-closed':'nearly closed','weakly-open':'weakly open','clearly-open':'clearly open','vacuum-dominant':'vacuum dominant','mixed':'mixed','orthogonal-dominant':'orthogonal dominant'}
  };
  function regimeText(key){const k=String(key||'—');return (isEn()?regimeNames.en[k]:regimeNames.tr[k])||k.replaceAll('-',' ');}

  function renderMetrics(spec,sweep,thresholds){
    const current=A.evaluate(spec.instrument,spec.base,spec.assumptions,spec.mode);
    const metric=spec.instrument==='lab'?current.candidate:spec.instrument==='rg'?current.net:spec.param==='epsilon'?current.orthWeight:current.delta;
    const metricName=spec.instrument==='lab'?L().candidate:spec.instrument==='rg'?L().net:spec.param==='epsilon'?L().orth:L().delta;
    const nearest=thresholds.length?[...thresholds].sort((a,b)=>Math.abs(a.x-spec.base[spec.param])-Math.abs(b.x-spec.base[spec.param]))[0]:null;
    $('analysisMetricName').textContent=metricName;$('analysisMetricValue').textContent=fmt(metric,6);
    $('analysisDerivativeName').textContent=L().derivative;$('analysisDerivativeValue').textContent=sweep.derivative==null?'—':fmt(sweep.derivative,6);
    $('analysisNearestName').textContent=L().nearest;$('analysisNearestValue').textContent=nearest?`${A.PARAM_LABELS[spec.param]} = ${fmt(nearest.x,6)}`:L().none;
    $('analysisResolutionName').textContent=L().resolution;$('analysisResolutionValue').textContent=`${sweep.samples} × 1D`;
    const key=current.regime?.key||current.gapRegime?.key||'n/a';
    $('analysisStatus').className=`analysis-status-band ${current.regime?.tone==='negative'?'negative':current.regime?.tone==='conditional'?'conditional':current.regime?.tone?.includes('warning')?'warning':''}`;
    $('analysisStatus').innerHTML=isEn()?`<strong>${L().current}:</strong> ${regimeText(key)}. This is a T0 interface analysis, not a physical phase measurement or proof result.`:`<strong>${L().current}:</strong> ${regimeText(key)}. Bu yalnız T0 arayüz analizidir; fiziksel faz ölçümü veya kanıt sonucu değildir.`;
  }

  function renderSweep(spec,sweep,thresholds){
    const svg=$('sweepPlot'), W=720,H=330,p={l:55,r:18,t:22,b:48};
    const xs=sweep.points.map(p=>p.x), ys=sweep.points.map(p=>p.y);
    const x0=Math.min(...xs),x1=Math.max(...xs); let y0=Math.min(0,...ys),y1=Math.max(0,...ys);
    if(Math.abs(y1-y0)<1e-12){y0-=.5;y1+=.5;} const pad=(y1-y0)*.12;y0-=pad;y1+=pad;
    const X=x=>p.l+(x-x0)/(x1-x0||1)*(W-p.l-p.r), Y=y=>H-p.b-(y-y0)/(y1-y0||1)*(H-p.t-p.b);
    const path=sweep.points.map((pt,i)=>`${i?'L':'M'}${X(pt.x).toFixed(2)},${Y(pt.y).toFixed(2)}`).join(' ');
    let html='';
    for(let i=0;i<=4;i++){const y=y0+(y1-y0)*i/4;html+=`<line class="sweep-gridline" x1="${p.l}" y1="${Y(y)}" x2="${W-p.r}" y2="${Y(y)}"/><text class="sweep-label" x="${p.l-8}" y="${Y(y)+3}" text-anchor="end">${Number(y.toPrecision(4))}</text>`;}
    if(y0<=0&&y1>=0)html+=`<line class="sweep-zero" x1="${p.l}" y1="${Y(0)}" x2="${W-p.r}" y2="${Y(0)}"/>`;
    html+=`<line class="sweep-axis" x1="${p.l}" y1="${H-p.b}" x2="${W-p.r}" y2="${H-p.b}"/><line class="sweep-axis" x1="${p.l}" y1="${p.t}" x2="${p.l}" y2="${H-p.b}"/>`;
    [0,.25,.5,.75,1].forEach(f=>{const x=x0+(x1-x0)*f;html+=`<text class="sweep-label" x="${X(x)}" y="${H-20}" text-anchor="middle">${Number(x.toPrecision(4))}</text>`;});
    thresholds.forEach(t=>{if(t.x<x0||t.x>x1)return;html+=`<line class="sweep-threshold-line" x1="${X(t.x)}" y1="${p.t}" x2="${X(t.x)}" y2="${H-p.b}"/><circle class="sweep-threshold-dot" cx="${X(t.x)}" cy="${Y(0)}" r="4"/>`;});
    const baseX=spec.base[spec.param]; const nearest=sweep.points.reduce((a,b)=>Math.abs(b.x-baseX)<Math.abs(a.x-baseX)?b:a,sweep.points[0]);
    html+=`<path class="sweep-line" d="${path}"/><circle class="sweep-current" cx="${X(nearest.x)}" cy="${Y(nearest.y)}" r="5"/>`;
    html+=`<text class="sweep-label" x="${W-p.r}" y="${H-7}" text-anchor="end">${A.PARAM_LABELS[spec.param]}</text>`;
    svg.innerHTML=html;
  }

  function renderThresholds(thresholds){
    const root=$('analysisThresholds');root.innerHTML='';
    if(!thresholds.length){root.innerHTML=`<div class="record-empty">${isEn()?'No interface threshold found in this range.':'Bu aralıkta arayüz eşiği bulunmadı.'}</div>`;return;}
    thresholds.forEach(t=>{const d=document.createElement('div');d.className=`analysis-threshold ${t.kind==='zero'?'zero':''}`;d.innerHTML=`<code>${fmt(t.x,6)}</code><span>${t.kind==='zero'?(isEn()?'Exact sign boundary':'Tam işaret sınırı'):t.label||`${t.from} → ${t.to}`}</span>`;root.appendChild(d);});
  }

  function currentMapRanges(instrument,base){
    if(instrument==='lab') return {xMin:0,xMax:Math.max(1.2,base.cG*1.25),yMin:0,yMax:Math.max(1.2,base.residual*1.5)};
    if(instrument==='rg') return {xMin:0,xMax:Math.max(1.5,base.z*1.25),yMin:0,yMax:Math.max(1.5,base.epsR*1.5)};
    return {xMin:0,xMax:Math.max(1,base.delta*1.25),yMin:0,yMax:1};
  }

  function renderMap(spec,map){
    const svg=$('regimeMap'), W=720,H=360,p={l:55,r:18,t:20,b:50}; const innerW=W-p.l-p.r,innerH=H-p.t-p.b;
    const xMin=Math.min(...map.xs),xMax=Math.max(...map.xs),yMin=Math.min(...map.ys),yMax=Math.max(...map.ys);
    const cellW=innerW/map.cols,cellH=innerH/map.rows;
    let html='';
    map.cells.forEach((c,idx)=>{const col=idx%map.cols,row=Math.floor(idx/map.cols);const x=p.l+col*cellW,y=p.t+(map.rows-1-row)*cellH;html+=`<rect tabindex="0" role="button" aria-label="${A.PARAM_LABELS[map.xParam]} ${fmt(c.x,4)}, ${A.PARAM_LABELS[map.yParam]} ${fmt(c.y,4)}, ${c.key}" class="map-cell ${toneClass(c.tone)}" data-map-index="${idx}" x="${x}" y="${y}" width="${cellW+.25}" height="${cellH+.25}"/>`;});
    html+=`<line class="map-axis" x1="${p.l}" y1="${H-p.b}" x2="${W-p.r}" y2="${H-p.b}"/><line class="map-axis" x1="${p.l}" y1="${p.t}" x2="${p.l}" y2="${H-p.b}"/>`;
    [0,.25,.5,.75,1].forEach(f=>{const x=xMin+(xMax-xMin)*f,y=yMin+(yMax-yMin)*f;html+=`<text class="map-label" x="${p.l+innerW*f}" y="${H-22}" text-anchor="middle">${Number(x.toPrecision(4))}</text><text class="map-label" x="${p.l-8}" y="${H-p.b-innerH*f+3}" text-anchor="end">${Number(y.toPrecision(4))}</text>`;});
    html+=`<text class="map-label" x="${W-p.r}" y="${H-7}" text-anchor="end">${A.PARAM_LABELS[map.xParam]}</text><text class="map-label" x="12" y="${p.t}" transform="rotate(-90 12 ${p.t})">${A.PARAM_LABELS[map.yParam]}</text>`;
    const bx=clampTo(baseFor(map.instrument)[map.xParam],xMin,xMax), by=clampTo(baseFor(map.instrument)[map.yParam],yMin,yMax);
    const CX=p.l+(bx-xMin)/(xMax-xMin||1)*innerW,CY=H-p.b-(by-yMin)/(yMax-yMin||1)*innerH;html+=`<circle class="map-current" cx="${CX}" cy="${CY}" r="6"/>`;
    svg.innerHTML=html;ui.lastMap=map;ui.selectedCell=null;updateMapReadout(null);
    svg.querySelectorAll('.map-cell').forEach(cell=>{cell.addEventListener('mouseenter',e=>showCell(Number(cell.dataset.mapIndex),e));cell.addEventListener('mousemove',positionTooltip);cell.addEventListener('mouseleave',hideTooltip);cell.addEventListener('click',()=>selectCell(Number(cell.dataset.mapIndex)));cell.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectCell(Number(cell.dataset.mapIndex));}});});
  }
  function clampTo(v,a,b){return Math.max(a,Math.min(b,v));}
  function showCell(index,e){const c=ui.lastMap?.cells[index];if(!c)return;const tip=$('analysisTooltip');tip.innerHTML=`<b>${regimeText(c.key)}</b><code>${A.PARAM_LABELS[ui.lastMap.xParam]}=${fmt(c.x,4)} · ${A.PARAM_LABELS[ui.lastMap.yParam]}=${fmt(c.y,4)}</code>`;tip.classList.add('show');positionTooltip(e);}
  function positionTooltip(e){const wrap=$('regimeMapWrap'),tip=$('analysisTooltip');if(!e||!wrap)return;const r=wrap.getBoundingClientRect();tip.style.left=`${e.clientX-r.left}px`;tip.style.top=`${e.clientY-r.top}px`;}
  function hideTooltip(){$('analysisTooltip').classList.remove('show');}
  function selectCell(index){const c=ui.lastMap?.cells[index];if(!c)return;ui.selectedCell=c;updateMapReadout(c);$('applyMapPointBtn').disabled=false;}
  function updateMapReadout(c){
    $('mapXReadout').textContent=c?`${A.PARAM_LABELS[ui.lastMap.xParam]} = ${fmt(c.x,6)}`:'—';
    $('mapYReadout').textContent=c?`${A.PARAM_LABELS[ui.lastMap.yParam]} = ${fmt(c.y,6)}`:'—';
    $('mapRegimeReadout').textContent=c?regimeText(c.key):'—';$('applyMapPointBtn').disabled=!c;
  }

  function runAnalysis(){
    const spec=currentSpec();
    try{
      ui.lastSweep=A.runSweep(spec); const thresholds=A.criticalThresholds(spec); renderMetrics(spec,ui.lastSweep,thresholds);renderSweep(spec,ui.lastSweep,thresholds);renderThresholds(thresholds);
      const ranges=currentMapRanges(spec.instrument,spec.base); ui.lastMap=A.runRegimeMap({...spec,...ranges,cols:28,rows:18});renderMap(spec,ui.lastMap);
      $('analysisInstrumentLabel').textContent=L()[spec.instrument];
    }catch(err){$('analysisStatus').className='analysis-status-band negative';$('analysisStatus').textContent=(isEn()?'Analysis error: ':'Analiz hatası: ')+err.message;}
  }

  function setDomValue(instrument,param,value){const id=ids[instrument][param],el=$(id);if(!el)return;const min=Number(el.min),max=Number(el.max);const v=Number.isFinite(min)&&Number.isFinite(max)?clampTo(value,min,max):value;el.value=String(v);el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));}
  function applySelected(){if(!ui.selectedCell||!ui.lastMap)return;setDomValue(ui.instrument,ui.lastMap.xParam,ui.selectedCell.x);setDomValue(ui.instrument,ui.lastMap.yParam,ui.selectedCell.y);const nav=document.querySelector(`.navbtn[data-view="${ui.instrument==='spectrum'?'spectrum':ui.instrument}"]`);nav?.click();runAnalysis();}

  function download(name,text,type){const blob=new Blob([text],{type:type||'text/plain'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  function open(){drawer.classList.add('open');backdrop.classList.add('open');drawer.setAttribute('aria-hidden','false');const active=document.querySelector('.view.active')?.id?.replace('view-','');if(['lab','spectrum','rg'].includes(active))setInstrument(active);else runAnalysis();setTimeout(()=>$('closeAnalysisBtn').focus(),20);}
  function close(){drawer.classList.remove('open');backdrop.classList.remove('open');drawer.setAttribute('aria-hidden','true');$('analysisBtn')?.focus();}

  document.querySelectorAll('[data-analysis-instrument]').forEach(b=>b.addEventListener('click',()=>setInstrument(b.dataset.analysisInstrument)));
  $('analysisParam').addEventListener('change',()=>{ui.param=$('analysisParam').value;syncRangeDefaults();runAnalysis();});
  ['analysisMin','analysisMax','analysisSamples'].forEach(id=>$(id).addEventListener('change',runAnalysis));
  $('runSweepBtn').addEventListener('click',runAnalysis);$('refreshAnalysisBtn').addEventListener('click',()=>{syncRangeDefaults();runAnalysis();});
  $('applyMapPointBtn').addEventListener('click',applySelected);
  $('exportSweepCsvBtn').addEventListener('click',()=>ui.lastSweep&&download(`ym_${ui.instrument}_${ui.param}_sweep.csv`,A.csvFromSweep(ui.lastSweep),'text/csv'));
  $('exportSweepJsonBtn').addEventListener('click',()=>ui.lastSweep&&download(`ym_${ui.instrument}_${ui.param}_analysis.json`,JSON.stringify({schema:A.SWEEP_SCHEMA,generatedAt:new Date().toISOString(),scientificStatus:'T0 interface analysis; open problem; no proof claim.',sweep:ui.lastSweep,map:ui.lastMap},null,2),'application/json'));
  $('analysisBtn').addEventListener('click',open);$('closeAnalysisBtn').addEventListener('click',close);backdrop.addEventListener('click',close);document.addEventListener('keydown',e=>{if(e.key==='Escape'&&drawer.classList.contains('open'))close();});
  document.addEventListener('click',e=>{if(e.target.closest('[data-analysis-open]')){const scope=e.target.closest('[data-analysis-open]').dataset.analysisOpen;setInstrument(scope);open();}});
  window.addEventListener('ym-language-change',()=>runAnalysis());
  setInstrument('lab');
})();
