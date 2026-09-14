'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const engine = require('../assets/js/v6-instrument-engine.js');
const core = require('../assets/js/v6-core.js');

const html = fs.readFileSync('index.html','utf8');
const css = fs.readFileSync('assets/css/v6-instruments.css','utf8');

for (const token of [
  'assets/js/v6-instrument-engine.js',
  'id="cGNumber"','id="epsilonNumber"','id="deltaNumber"','id="zNumber"',
  'data-step-scope="lab"','data-step-scope="spectrum"','data-step-scope="rg"',
  'id="labRegimeLadder"','id="spectrumRegimeLadder"','id="rgRegimeLadder"',
  'id="spectrumThresholdNear"','id="spectrumThresholdNarrow"','id="spectrumThresholdOpen"',
  'class="model-lens"','data-capture-baseline="lab"','data-capture-baseline="spectrum"','data-capture-baseline="rg"'
]) assert.ok(html.includes(token), `missing phase5 token: ${token}`);

for (const token of [
  '.precision-toolbar{','.number-stepper{','.regime-console{','.regime-ladder{','.threshold-marker{','.model-lens{','@keyframes thresholdPulse','@keyframes chainCascade'
]) assert.ok(css.includes(token), `missing phase5 CSS contract: ${token}`);

assert.deepEqual(engine.STEP_MODES,{fine:0.001,standard:0.01,coarse:0.05});
assert.equal(engine.classifyLab({candidate:-0.1,gross:1,targetAvailable:false}).key,'negative');
assert.equal(engine.classifyLab({candidate:0,gross:1,targetAvailable:false}).key,'zero');
assert.equal(engine.classifyLab({candidate:0.2,gross:1,targetAvailable:false}).key,'blocked-positive');
assert.equal(engine.classifyLab({candidate:0.05,gross:1,targetAvailable:true}).key,'fragile-positive');
assert.equal(engine.classifyLab({candidate:0.2,gross:1,targetAvailable:true}).key,'moderate-positive');
assert.equal(engine.classifyLab({candidate:0.5,gross:1,targetAvailable:true}).key,'robust-positive');

assert.equal(engine.classifySpectrum(0).key,'closed');
assert.equal(engine.classifySpectrum(0.01).key,'near-zero');
assert.equal(engine.classifySpectrum(0.05).key,'narrow');
assert.equal(engine.classifySpectrum(0.2).key,'open');
assert.equal(engine.classifySpectrum(0.5).key,'wide');
assert.equal(engine.classifySpectrum(0.5,true).key,'linked-blocked');

assert.equal(engine.classifyRG({net:0.5,gross:1,defect:0.5,reflectionLicensed:false}).key,'structurally-blocked');
assert.equal(engine.classifyRG({net:0,gross:1,defect:1,reflectionLicensed:true}).key,'zero');
assert.equal(engine.classifyRG({net:0.05,gross:1,defect:0.95,reflectionLicensed:true}).key,'fragile-positive');
assert.equal(engine.classifyRG({net:0.2,gross:1,defect:0.8,reflectionLicensed:true}).key,'moderate-positive');
assert.equal(engine.classifyRG({net:0.5,gross:1,defect:0.5,reflectionLicensed:true}).key,'robust-positive');
assert.equal(engine.classifyRG({net:-0.05,gross:1,defect:1.05,reflectionLicensed:true}).key,'fragile-negative');
assert.equal(engine.classifyRG({net:-0.5,gross:1,defect:1.5,reflectionLicensed:true}).key,'strong-negative');

// Fine precision remains exact through the scientific core.
const fine = core.evaluateLab({cg:'0.651',lym:'1.003',r:'0.121'}, {});
assert.equal(core.formatFixed(fine.derived.gross),'0.652953');
assert.equal(core.formatFixed(fine.derived.candidate),'0.531953');

assert.ok(html.includes('Eşikler yalnız arayüzdeki T0 hassasiyet bantlarıdır; fiziksel kritik sabitler değildir.'), 'threshold disclaimer must remain explicit');
assert.ok(!html.includes('KTO'), 'ontology name must not be exposed in the public experiment UI');

console.log('v6 phase5 research-grade experiment checks passed.');
