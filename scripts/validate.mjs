import fs from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const core = require('../assets/js/v6-core.js');

const html = fs.readFileSync('index.html', 'utf8');
const required = [
  'v6.0.0 • Research Instruments & Advanced Analysis',
  '<meta name="version" content="6.0.0" />',
  'https://www.yangmillsresearch.org/',
  'ORCID: 0009-0001-9217-0917',
  'id="heroCiteBtn"',
  'Interactive Research Console',
  'data-view="graph"',
  'data-view="lab"',
  'data-view="methodology"',
  'data-view="review"',
  'id="copyCitationBtn"',
  'id="downloadBibBtn"',
  'https://www.claymath.org/millennium/yang-mills-the-maths-gap/',
  'https://doi.org/10.1007/BF01645738',
  'https://doi.org/10.1007/BF01608978',
  'https://doi.org/10.5281/zenodo.22754261',
  'https://doi.org/10.5281/zenodo.22739745',
  'assets/js/v6-core.js',
  'assets/js/v6-instrument-engine.js',
  'assets/js/v6-record-engine.js',
  'assets/js/v6-analysis-engine.js',
  'assets/js/v6-analysis-ui.js',
  'assets/css/v6-research-shell.css',
  'assets/css/v6-instruments.css',
  'assets/css/v6-records.css',
  'assets/css/v6-analysis.css',
  'Failure Modes / Falsification Criteria',
  'Signed single-step transfer/defect budget',
  'T0 · Derived illustrative result',
  'id="analysisDrawer"',
  'Two-parameter T0 regime map'
];

const missing = required.filter(x => !html.includes(x));
if (missing.length) {
  console.error('Missing required publication/audit/foundation tokens:', missing);
  process.exit(1);
}

for (const file of [
  'CITATION.cff',
  'METHODOLOGY.md',
  'REFERENCES.md',
  'SCIENTIFIC_REVIEW.md',
  'CONTRIBUTING.md',
  'LICENSE',
  'CONTENT-LICENSE.md',
  'ZENODO.md',
  'LANDING_QA.md',
  'CNAME',
  'assets/js/v6-core.js',
  'assets/js/v6-instrument-engine.js',
  'assets/js/v6-record-engine.js',
  'assets/js/v6-analysis-engine.js',
  'assets/js/v6-analysis-ui.js',
  'assets/css/v6-research-shell.css',
  'assets/css/v6-instruments.css',
  'assets/css/v6-records.css',
  'assets/css/v6-analysis.css',
  'scripts/test-v6-core.cjs',
  'scripts/test-v6-phase3.cjs',
  'scripts/test-v6-phase4.cjs',
  'scripts/test-v6-phase5.cjs',
  'scripts/test-v6-phase6.cjs',
  'scripts/test-v6-phase7.cjs',
  'V6_DESIGN_AUDIT.md',
  'V6_INFORMATION_ARCHITECTURE.md',
  'V6_DESIGN_SYSTEM.md',
  'V6_EXPERIMENT_ARCHITECTURE.md',
  'V6_IMPLEMENTATION_PLAN.md',
  'V6_MASTER_IMPLEMENTATION_BRIEF.md',
  'V6_PHASE3_NOTES.md',
  'V6_PHASE4_NOTES.md',
  'V6_PHASE5_NOTES.md',
  'V6_PHASE6_NOTES.md',
  'V6_PHASE7_NOTES.md',
  'RELEASE_NOTES_v6.0.0.md'
]) {
  if (!fs.existsSync(file)) {
    console.error(`Missing required repository file: ${file}`);
    process.exit(1);
  }
}

if (html.includes('V4 odağı') || html.includes('V4 focus') || html.includes('INTERACTIVE RESEARCH CONSOLE v4')) {
  console.error('Stale V4 labeling detected in live UI/export metadata.');
  process.exit(1);
}

if (html.includes('Run RG steps') || html.includes('RG adımlarını çalıştır') || html.includes('rgTimer') || html.includes('paintRG(')) {
  console.error('Undefined multistage RG animation is still present.');
  process.exit(1);
}

const renderedEdges = [...html.matchAll(/data-edge="([N0-9>]+)"/g)].map(m => m[1]).sort();
const registryEdges = core.EDGES.map(e => `${e.from}>${e.to}`).sort();
if (JSON.stringify(renderedEdges) !== JSON.stringify(registryEdges)) {
  console.error('Rendered proof-map edges do not match the authoritative registry.', {renderedEdges, registryEdges});
  process.exit(1);
}

if (!core.dependencyParity().ok) {
  console.error('Claim dependency data and authoritative edge registry disagree.');
  process.exit(1);
}


const citation = fs.readFileSync('CITATION.cff', 'utf8');
if (!citation.includes('version: 6.0.0') || !citation.includes('10.5281/zenodo.22754261')) {
  console.error('CITATION.cff must identify the exact archived v6.0.0 release.');
  process.exit(1);
}
if (html.includes('10.5281/zenodo.22754261') === false || html.includes('10.5281/zenodo.22739745') === false) {
  console.error('Live release must preserve the v6 exact-archive and Concept DOI references.');
  process.exit(1);
}

const cname = fs.readFileSync('CNAME', 'utf8').trim();
if (cname !== 'www.yangmillsresearch.org') {
  console.error('CNAME must be www.yangmillsresearch.org');
  process.exit(1);
}

console.log('v6 foundation structural/publication checks passed.');
