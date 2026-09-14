'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const analysis = require('../assets/js/v6-analysis-engine.js');

const html = fs.readFileSync('index.html','utf8');
const css = fs.readFileSync('assets/css/v6-analysis.css','utf8');
const ui = fs.readFileSync('assets/js/v6-analysis-ui.js','utf8');

for (const token of [
  'assets/js/v6-analysis-engine.js','assets/js/v6-analysis-ui.js','assets/css/v6-analysis.css',
  'id="analysisBtn"','id="analysisDrawer"','id="analysisParam"','id="sweepPlot"','id="analysisThresholds"','id="regimeMap"',
  'id="applyMapPointBtn"','data-analysis-open="lab"','data-analysis-open="spectrum"','data-analysis-open="rg"'
]) assert.ok(html.includes(token), `missing phase7 token: ${token}`);
for (const token of ['.analysis-drawer{','.sweep-line{','.regime-map .map-cell{','.analysis-threshold{','.analysis-status-band{']) assert.ok(css.includes(token), `missing phase7 CSS contract: ${token}`);
assert.ok(ui.includes('T0 interface analysis') || html.includes('T0 rejim haritası'), 'T0 analysis scope must remain explicit');

const allAssumptions={aGauge:true,aScale:true,aCoarse:true,aRG:true,aUniform:true,aOS:true};
assert.equal(typeof analysis.evaluate,'function','public analysis API must expose evaluate() for the UI');
const publicRg = analysis.evaluate('rg',{z:0.85,ec:0.8,epsR:0.12},allAssumptions,'supplied');
assert.equal(publicRg.net,0.56,'public evaluate() must dispatch to the RG evaluator');
const labSpec={instrument:'lab',param:'residual',min:0,max:1,samples:101,base:{cG:0.8,lambdaYM:1,residual:0.1},assumptions:allAssumptions,mode:'supplied'};
const lab=analysis.runSweep(labSpec);
assert.equal(lab.points.length,101);
assert.equal(lab.points.find(p=>Math.abs(p.x-0.8)<1e-12).y,0,'lab sweep must preserve exact zero sign boundary at r=cG*Lambda');
const labThresholds=analysis.criticalThresholds(labSpec);
assert.ok(labThresholds.some(t=>t.kind==='zero' && Math.abs(t.x-0.8)<1e-9),'lab exact zero threshold missing');
assert.equal(analysis.derivative('lab','residual',labSpec.base),-1);

const rgSpec={instrument:'rg',param:'epsR',min:0,max:1,samples:201,base:{z:0.85,ec:0.8,epsR:0.12},assumptions:allAssumptions,mode:'supplied'};
const rgThresholds=analysis.criticalThresholds(rgSpec);
assert.ok(rgThresholds.some(t=>t.kind==='zero' && Math.abs(t.x-0.68)<1e-9),'RG exact sign threshold must be Z*Ec');
assert.equal(analysis.derivative('rg','epsR',rgSpec.base),-1);

const spectrumSpec={instrument:'spectrum',param:'delta',min:0,max:1,samples:121,base:{delta:0.42,epsilon:0.25},assumptions:allAssumptions,mode:'supplied'};
const spectrumThresholds=analysis.criticalThresholds(spectrumSpec);
for (const x of [0.02,0.10,0.35]) assert.ok(spectrumThresholds.some(t=>Math.abs(t.x-x)<1e-9),`spectrum interface threshold ${x} missing`);
assert.equal(analysis.derivative('spectrum','epsilon',{epsilon:0.25}),0.5);

const labMap=analysis.runRegimeMap({...labSpec,cols:28,rows:18,xMin:0,xMax:1.2,yMin:0,yMax:1.2});
assert.equal(labMap.cells.length,28*18);
assert.equal(labMap.xParam,'cG');assert.equal(labMap.yParam,'residual');
assert.ok(new Set(labMap.cells.map(c=>c.key)).size>=3,'lab regime map should expose multiple interface regimes');
const spectrumMap=analysis.runRegimeMap({...spectrumSpec,cols:12,rows:10,xMin:0,xMax:1,yMin:0,yMax:1});
assert.ok(spectrumMap.cells.every(c=>c.key.includes('|')),'spectrum regime map must preserve gap and composition regime identities');
assert.match(analysis.csvFromSweep(lab),/^x,y,regime,tone/m);

assert.ok(!html.includes('physical phase measurement') || html.includes('not a physical phase diagram'), 'physical phase semantics must remain explicitly disclaimed');
console.log('v6 phase7 sweep/threshold/sensitivity/regime-map checks passed.');
