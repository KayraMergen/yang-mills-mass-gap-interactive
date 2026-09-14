# Yang–Mills Mass Gap — Interactive Research Console

**Current website/repository version: v6.0.0**

[![DOI](https://zenodo.org/badge/1369033161.svg)](https://doi.org/10.5281/zenodo.22739745)
[![ORCID](https://img.shields.io/badge/ORCID-0009--0001--9217--0917-A6CE39?logo=orcid&logoColor=white)](https://orcid.org/0009-0001-9217-0917)

Public site: https://www.yangmillsresearch.org/

This repository hosts an interactive research/audit console for a **hypothetical**
gauge-reduced spectral-coercivity program related to the Yang–Mills mass-gap
problem.

> **Scientific status:** the Yang–Mills existence and mass-gap problem remains open.
> This project does **not** claim a proof.

## Publication layer

- source-linked citation/provenance system
- `CITATION.cff` and BibTeX export
- explicit epistemic levels: E0 / E1 / H1 / T0
- methodology and scientific-review documentation
- structured GitHub issue forms for mathematical objections and software bugs
- semantic versioning and release notes
- code/content licensing split
- automated repository quality checks
- `robots.txt`, `sitemap.xml`, web manifest, custom 404, `.nojekyll`
- custom-domain deployment guide

## Core research-console modules

1. Overview
2. Argument Map
3. Assumption Lab
4. Spectrum Lab
5. RG Transfer Console
6. Proof Debt / Quality Gates
7. Failure Modes / Falsification Criteria
8. Source & Provenance Map
9. Methodology
10. Scientific Review

## Local use

Open `index.html` directly in a browser. No build step is required.

## Scientific provenance

See:
- [`REFERENCES.md`](REFERENCES.md)
- [`METHODOLOGY.md`](METHODOLOGY.md)
- [`SCIENTIFIC_REVIEW.md`](SCIENTIFIC_REVIEW.md)

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## License

Software source code is released under the MIT License. Research exposition/content
is treated separately; see [`CONTENT-LICENSE.md`](CONTENT-LICENSE.md).

## Citation

Preferred software citation:

> Baran Çolakoğlu (2026). *Yang–Mills Mass Gap — Interactive Research Console*, v6.0.0.  
> Zenodo. DOI: [10.5281/zenodo.22754261](https://doi.org/10.5281/zenodo.22754261)  
> ORCID: https://orcid.org/0009-0001-9217-0917

- **Exact archived release (v6.0.0):** [10.5281/zenodo.22754261](https://doi.org/10.5281/zenodo.22754261)
- **Previous exact archive (v5.0.1):** [10.5281/zenodo.22739746](https://doi.org/10.5281/zenodo.22739746)
- **All versions / concept DOI:** [10.5281/zenodo.22739745](https://doi.org/10.5281/zenodo.22739745)

See [`CITATION.cff`](CITATION.cff) for machine-readable metadata.

## Academic identity

- Author: Baran Çolakoğlu
- ORCID: https://orcid.org/0009-0001-9217-0917
- Project / all-versions DOI: https://doi.org/10.5281/zenodo.22739745
- Exact archived v6.0.0 DOI: https://doi.org/10.5281/zenodo.22754261
- Previous exact v5.0.1 DOI: https://doi.org/10.5281/zenodo.22739746

The homepage surfaces these identifiers prominently so that visitors can verify
the project's archival and author-identity chain immediately.

## Canonical website

The canonical public address is:

https://www.yangmillsresearch.org/

The custom domain is verified and served through GitHub Pages with HTTPS
enforced. The GitHub Pages project URL is retained only as deployment history,
not as the preferred public address.

## v6 research interface

The public website runs the v6 research interface, including exact scalar models, research-grade interactive instruments, reproducibility records, and advanced T0 sweep analysis. Version v6.0.0 is archived at DOI `10.5281/zenodo.22754261`; the Concept DOI continues to identify the evolving project across versions.

The foundation adds a single reviewed dependency registry, exact scaled-integer scalar evaluators, complete scenario serialization, truthful single-step RG semantics, persistent result scope, and model/state regression tests. Run:

```bash
node scripts/test-v6-core.cjs
node scripts/validate.mjs
```

These checks validate research-software behavior and communication only; they do not certify any mathematical claim.
