'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const core = require('../assets/js/v6-core.js');

const html = fs.readFileSync('index.html','utf8');
const css = fs.readFileSync('assets/css/v6-instruments.css','utf8');

for (const token of [
  'assets/css/v6-instruments.css',
  'data-graph-mode="spatial"',
  'id="dependencyCards"',
  'id="dependencyOutline"',
  'id="labAlert"',
  'id="labChain"',
  'id="mixtureMeter"',
  'id="spectrumModeLab"',
  'id="spectrumStage"',
  'id="rgBudgetViz"',
  'id="rgGrossBar"',
  'id="rgDefectBar"',
  'id="rgNetBar"'
]) assert.ok(html.includes(token), `missing phase4 instrument token: ${token}`);

for (const token of [
  '.proof-svg .node.status-hyp',
  '.dependency-cards{',
  '.instrument-alert{',
  '.lab-chain{',
  '.mixture-meter{',
  '.spectrum-stage{',
  '.rg-budget-viz{',
  '@media (prefers-reduced-motion:reduce)'
]) assert.ok(css.includes(token), `missing phase4 CSS contract: ${token}`);

assert.ok(!html.includes('Run RG steps'), 'undefined staged RG animation must not return');
assert.ok(!html.includes('rgTimer'), 'RG timer must not return');

const q = core.serializeScenario(new URLSearchParams(), {
  view:'spectrum', language:'tr', node:'n4', failure:0,
  assumptions:Object.fromEntries(core.ASSUMPTION_IDS.map(id=>[id,true])),
  lab:{cg:'0.65',lym:'1.00',r:'0.12'},
  spectrum:{epsilon:'0.25',delta:'0.42',mode:'lab'},
  rg:{z:'0.85',ec:'0.80',epsr:'0.12'}
});
assert.equal(q.get('sm'),'lab');
assert.equal(core.parseScenario(q).spectrum.mode,'lab');

// The spatial graph must still be generated from exactly the authoritative registry.
const renderedEdges=[...html.matchAll(/data-edge="([N0-9>]+)"/g)].map(m=>m[1]).sort();
const authoritative=core.EDGES.map(e=>`${e.from}>${e.to}`).sort();
assert.deepEqual(renderedEdges,authoritative);

console.log('v6 phase4 interactive-instrument checks passed.');
