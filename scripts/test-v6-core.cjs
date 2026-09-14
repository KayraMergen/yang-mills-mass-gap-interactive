'use strict';
const assert = require('node:assert/strict');
const core = require('../assets/js/v6-core.js');

function eq(actual, expected, message){ assert.equal(actual, expected, message); }

// Bare scenario preserves documented defaults instead of Number(null) => 0.
const bare = core.parseScenario(new URLSearchParams(''));
eq(bare.lab.cg, '0.650', 'bare cg default');
eq(bare.lab.lym, '1.000', 'bare lym default');
eq(bare.lab.r, '0.120', 'bare residual default');

// Explicit zeros are not treated as missing.
const zeros = core.parseScenario(new URLSearchParams('v=5&cg=0&lym=0&r=0'));
eq(zeros.lab.cg, '0.000'); eq(zeros.lab.lym, '0.000'); eq(zeros.lab.r, '0.000');

// Exact fixed-point boundary behavior.
let lab = core.evaluateLab({cg:'0.10',lym:'0.20',r:'0.02'}, {});
eq(core.formatFixed(lab.derived.candidate), '0.000000', '0.10*0.20-0.02 must be exact zero');
eq(lab.derived.sign, 'zero');
eq(lab.nodes[5], false, 'exact zero cannot license positive toy descendant');

lab = core.evaluateLab({cg:'0.01',lym:'0.01',r:'0.000'}, {});
eq(core.formatFixed(lab.derived.candidate), '0.000100');
eq(lab.derived.sign, 'positive');

lab = core.evaluateLab({cg:'0.10',lym:'0.20',r:'0.03'}, {});
eq(core.formatFixed(lab.derived.candidate), '-0.010000');
eq(lab.derived.sign, 'negative');

// Withholding premises blocks downstream logic without changing exact scalar arithmetic.
lab = core.evaluateLab({cg:'0.650',lym:'1.000',r:'0.120'}, {aReflect:false});
eq(core.formatFixed(lab.derived.candidate), '0.530000');
eq(lab.nodes[3], false); eq(lab.nodes[4], false); eq(lab.nodes[5], false);

lab = core.evaluateLab({cg:'0.650',lym:'1.000',r:'0.120'}, {aOS:false});
eq(lab.derived.sign, 'positive'); eq(lab.nodes[4], true); eq(lab.nodes[5], false);

// RG is a signed single-step budget, with faithful positive/zero/negative states.
let rg = core.evaluateRG({z:'0.85',ec:'0.80',epsr:'0.120'});
eq(core.formatFixed(rg.derived.gross), '0.680000'); eq(core.formatFixed(rg.derived.net), '0.560000'); eq(rg.derived.sign, 'positive');
rg = core.evaluateRG({z:'0.10',ec:'0.20',epsr:'0.02'});
eq(core.formatFixed(rg.derived.net), '0.000000'); eq(rg.derived.sign, 'zero');
rg = core.evaluateRG({z:'0.10',ec:'0.20',epsr:'0.03'});
eq(core.formatFixed(rg.derived.net), '-0.010000'); eq(rg.derived.sign, 'negative');

// Dependency registry is internally coherent and N4 cannot bypass N5.
const parity = core.dependencyParity();
assert.ok(parity.ok, 'claim deps and edge registry must agree');
assert.deepEqual(core.EDGES.map(e=>`${e.from}>${e.to}`), ['N1>N3','N2>N3','N3>N4','N4>N5','N5>N6']);

// v6 serialization carries the full current instrument state and keeps unrelated query params.
const params = core.serializeScenario(new URLSearchParams('utm_source=test'), {
  view:'rg', language:'en', node:'n4', failure:2,
  assumptions:Object.fromEntries(core.ASSUMPTION_IDS.map(id=>[id,true])),
  lab:{cg:'0.650',lym:'1.000',r:'0.120'},
  spectrum:{epsilon:'0.25',delta:'0.42',mode:'lab'},
  rg:{z:'0.85',ec:'0.80',epsr:'0.120'}
});
eq(params.get('v'),'6'); eq(params.get('view'),'rg'); eq(params.get('lang'),'en'); eq(params.get('node'),'n4');
eq(params.get('eps'),'0.25'); eq(params.get('delta'),'0.42'); eq(params.get('sm'),'lab'); eq(params.get('z'),'0.85'); eq(params.get('ec'),'0.80'); eq(params.get('epsr'),'0.120');
eq(params.get('utm_source'),'test');

const restored = core.parseScenario(params);
eq(restored.view,'rg'); eq(restored.language,'en'); eq(restored.node,'n4'); eq(restored.failure,2);
eq(restored.rg.z,'0.850'); eq(restored.spectrum.delta,'0.420'); eq(restored.spectrum.mode,'lab');

console.log('v6 core model/state regression checks passed.');
