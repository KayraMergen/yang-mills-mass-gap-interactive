'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const records = require('../assets/js/v6-record-engine.js');

const html = fs.readFileSync('index.html','utf8');
const css = fs.readFileSync('assets/css/v6-records.css','utf8');

for (const token of [
  'assets/js/v6-record-engine.js','assets/css/v6-records.css','id="recordsBtn"','id="recordDrawer"','id="recordList"',
  'id="compareDeck"','id="thresholdEventLog"','data-capture-record="lab"','data-capture-record="spectrum"','data-capture-record="rg"',
  'id="exportLedgerBtn"','id="copyReviewPacketBtn"','id="copyComparisonBtn"'
]) assert.ok(html.includes(token), `missing phase6 token: ${token}`);

for (const token of ['.record-drawer{','.record-item{','.compare-deck{','.event-log{','.capture-record-btn{']) {
  assert.ok(css.includes(token), `missing phase6 CSS contract: ${token}`);
}

const basePayload = {
  instrument:'lab', scenarioSchema:6, contentRevision:'v6-instruments-r2', modelVersion:'lab-scalar-2', language:'tr',
  epistemic:{class:'T0',representation:'conditional scalar audit'}, assumptions:{aGauge:true,aScale:true},
  inputs:{cg:0.65,lambdaYM:1,residual:0.12}, derived:{gross:0.65,candidate:0.53,sign:'positive'},
  regime:{key:'robust-positive',tone:'positive-strong'}, scope:{openProblem:true,proofClaim:false}, selection:{node:'n3'}
};
const a = records.makeRecord(basePayload,'2026-09-14T03:00:00.000Z');
const sameLater = records.makeRecord(basePayload,'2026-09-14T03:00:01.000Z');
assert.equal(a.digest, sameLater.digest, 'scientific digest must ignore capture time');
assert.equal(a.id, sameLater.id, 'canonical state ID must be stable');
assert.notEqual(a.captureId, sameLater.captureId, 'observation capture IDs must remain distinct');
assert.equal(a.recordSchema, records.RECORD_SCHEMA);

const b = records.makeRecord({...basePayload, inputs:{...basePayload.inputs,residual:0.2}, derived:{gross:0.65,candidate:0.45,sign:'positive'}, regime:{key:'moderate-positive',tone:'positive'}},'2026-09-14T03:01:00.000Z');
const cmp = records.compareRecords(a,b);
assert.equal(cmp.compatible,true);
assert.equal(cmp.regimeChanged,true);
assert.ok(cmp.changes.some(x=>x.key==='inputs.residual' && Math.abs(x.delta-0.08)<1e-12));
assert.ok(cmp.changes.some(x=>x.key==='derived.candidate' && Math.abs(x.delta+0.08)<1e-12));

const spectrum = records.makeRecord({...basePayload,instrument:'spectrum',modelVersion:'spectrum-schematic-2'},'2026-09-14T03:02:00.000Z');
assert.equal(records.compareRecords(a,spectrum).compatible,false);
assert.match(records.recordSummary(a,'en'),/no proof claim/i);
assert.match(records.comparisonSummary(a,b,'en'),/T0 comparison only/i);

assert.ok(!html.includes('remote telemetry'), 'research ledger must remain local-only');
console.log('v6 phase6 reproducibility/record-ledger checks passed.');
