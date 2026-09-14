'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');

const html = fs.readFileSync('index.html','utf8');
const css = fs.readFileSync('assets/css/v6-research-shell.css','utf8');

for (const token of [
  'assets/css/v6-research-shell.css',
  'https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml-nofont.js',
  "font: 'mathjax-stix2'",
  'family=Inter:wght@400;500;600;700&family=STIX+Two+Text',
  'class="skip-link"',
  'id="research-main"',
  'nav-group-program',
  'nav-group-instruments',
  'nav-group-audit',
  'EQ-H1-COERCIVITY',
  'EQ-T0-MIXTURE',
  'EQ-H1-RG'
]) assert.ok(html.includes(token), `missing phase3 token: ${token}`);

assert.ok(!html.includes("if(e.key==='ArrowRight')switchView"), 'global ArrowRight navigation must remain removed');
assert.ok(!html.includes("if(e.key==='ArrowLeft')switchView"), 'global ArrowLeft navigation must remain removed');

for (const token of [
  '--shell-max:1680px',
  '--editorial:"STIX Two Text"',
  '.nav-group-label',
  '#view-overview .trust-grid{display:none!important}',
  '.proof-svg{width:100%;min-width:680px',
  '.lab-layout{',
  '#view-spectrum .grid2,#view-rg .grid2{',
  '@media (max-width:960px)',
  '@media (max-width:680px)'
]) assert.ok(css.includes(token), `missing phase3 CSS contract: ${token}`);

// Anti-density / scientific presentation invariants.
assert.ok(css.includes('border-right:1px solid rgba(232,237,242,.09)'), 'desktop research rail divider missing');
assert.ok(css.includes('grid-template-columns:minmax(290px,.72fr) minmax(0,1.58fr)'), 'lab analytical dominance missing');
assert.ok(css.includes('grid-template-columns:minmax(290px,.76fr) minmax(0,1.54fr)'), 'spectrum/RG analytical dominance missing');
assert.ok(css.includes('#view-overview .overview-primary h1{'), 'overview title contract missing');
assert.ok(css.includes('white-space:nowrap'), 'desktop overview title should remain on one line');


// Overview declutter contract (Phase 3.1).
for (const token of [
  'overview-refined',
  'overview-masthead',
  'overview-summary',
  'overview-spine',
  'Kütle aralığı, spektral bir alt sınır problemi.',
  'Mass gap as a spectral lower-bound problem.'
]) assert.ok(html.includes(token), `missing phase3.1 overview token: ${token}`);

for (const token of [
  '.overview-hero{',
  '.overview-summary-item{',
  '.overview-spine{',
  '#view-overview .pub-strip,#view-overview .hero-grid'
]) assert.ok(css.includes(token), `missing phase3.1 overview CSS: ${token}`);

console.log('v6 phase3 research-shell/typography checks passed.');
