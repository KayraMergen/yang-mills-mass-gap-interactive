import fs from 'node:fs';

const html = fs.readFileSync('index.html', 'utf8');
const required = [
  'Interactive Research Console',
  'data-view="graph"',
  'data-view="lab"',
  'data-view="methodology"',
  'data-view="review"',
  'id="copyCitationBtn"',
  'id="downloadBibBtn"',
  'https://www.claymath.org/millennium/yang-mills-the-maths-gap/',
  'https://doi.org/10.1007/BF01645738',
  'https://doi.org/10.1007/BF01608978'
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
  'CONTENT-LICENSE.md'
]) {
  if (!fs.existsSync(file)) {
    console.error(`Missing required repository file: ${file}`);
    process.exit(1);
  }
}

console.log('v5 structural publication/audit checks passed.');
