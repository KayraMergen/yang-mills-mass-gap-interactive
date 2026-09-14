# Contributing

## Scientific contributions

Before proposing a scientific-content change:
- read `METHODOLOGY.md`;
- assign the claim an epistemic level (E0/E1/H1/T0);
- cite a primary source for E0/E1 claims where possible;
- do not convert simulator/toy output into a physical claim;
- describe downstream proof-graph consequences.

Use the **Scientific Review** issue form for objections to an existing claim.

## Software contributions

For UI or code changes:
- preserve keyboard accessibility;
- preserve mobile behavior;
- do not remove the open-problem warning;
- keep all interactive parameters bounded;
- run `node scripts/validate.mjs` before submitting.

## Commit style

Prefer concise commits such as:

`fix: correct OS reference metadata`  
`audit: downgrade RG claim to hypothetical`  
`ui: improve proof graph mobile layout`
