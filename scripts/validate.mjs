import fs from 'node:fs';

const html = fs.readFileSync('index.html', 'utf8');
const required = [
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
  'https://doi.org/10.5281/zenodo.22739746',
  'https://doi.org/10.5281/zenodo.22739745'
];

const missing = required.filter(x => !html.includes(x));
if (missing.length) {
  console.error('Missing required publication/audit tokens:', missing);
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
  'LANDING_QA.md'
]) {
  if (!fs.existsSync(file)) {
    console.error(`Missing required repository file: ${file}`);
    process.exit(1);
  }
}

console.log('v5 structural publication/audit checks passed.');

if (html.includes('V4 odağı') || html.includes('V4 focus') || html.includes('INTERACTIVE RESEARCH CONSOLE v4')) {
  console.error('Stale V4 labeling detected in live UI/export metadata.');
  process.exit(1);
}
