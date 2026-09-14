# Changelog

All notable changes to the project are documented here.

## [Unreleased v6 foundation]

### Scientific/model foundation
- added exact scaled-integer evaluators for the Assumption Lab and the signed single-step RG budget;
- fixed the missing-URL-default corruption and exact-zero sign boundary;
- replaced the undefined multistage RG animation with an honest single-step budget;
- centralized the N1–N6 dependency registry and corrected the N4 → N5 → N6 topology;
- expanded scenario state to include language, selection, spectrum and RG inputs while preserving v5 compatibility;
- added persistent open-problem scope and result-local T0 qualification;
- corrected bilingual proof-obligation table cell alignment and the custom-domain 404 return path;
- added v6 model/state regression checks to CI.

This is pre-release v6 foundation work. It does not change the archived v5.0.1 DOI and does not claim a Yang–Mills proof.

## [5.1.2] — 2026-09-14

### Changed
- migrated the canonical public URL to `https://www.yangmillsresearch.org/`;
- synchronized canonical link, OpenGraph URL, JSON-LD, README, CFF, sitemap,
  robots and web-manifest metadata;
- added a tracked `CNAME` file for persistent GitHub Pages custom-domain configuration;
- documented verified Cloudflare DNS and enforced HTTPS.

### Note
No scientific claim changed and no new Zenodo archive was created. The exact
archived v5.0.1 DOI remains `10.5281/zenodo.22739746` and the project/all-versions DOI
remains `10.5281/zenodo.22739745`.

## [5.1.1] — 2026-09-14

### Fixed
- removed stale `V4 focus` wording from the live status panel;
- synchronized the methodology strip with the academic landing/audit layer;
- corrected the exported local status report header and filename to the current site version;
- synchronized visible site/repository version markers to v5.1.1.

### Note
This is a website/repository polish patch only. It does **not** create a new
Zenodo archive. The exact archived release remains v5.0.1
(`10.5281/zenodo.22739746`), and the project/all-versions DOI remains
`10.5281/zenodo.22739745`.

## [5.1.0] — 2026-09-14

### Added
- publication strip on the landing page with Concept DOI, ORCID, repository and archived-release links;
- one-click citation copy from the hero section;
- visible trust indicators for DOI, ORCID, CI quality audit and open-problem status;
- stronger first-visit academic product framing.

### Note
This repository/site update does **not** create a new Zenodo release by itself.
The currently archived exact release remains v5.0.1 (10.5281/zenodo.22739746), while the
stable project/all-versions DOI remains 10.5281/zenodo.22739745.

## Post-release metadata — 2026-09-14

- registered Zenodo archive DOI for v5.0.1: `10.5281/zenodo.22739746`;
- recorded project/all-versions concept DOI: `10.5281/zenodo.22739745`;
- added Zenodo DOI badge, DOI-aware citation metadata, JSON-LD identifiers and BibTeX DOI;
- no mathematical or scientific claim changed.

## [5.0.1] — 2026-09-14

### Changed
- replaced GitHub-handle-only authorship metadata with the real author name: Baran Çolakoğlu;
- added ORCID `0009-0001-9217-0917` to `CITATION.cff` and structured web metadata;
- synchronized in-app citation/BibTeX metadata with v5.0.1;
- prepared metadata for the first Zenodo-archived release.

## [5.0.0] — 2026-09-14

### Added
- publication-grade citation and provenance layer;
- official Clay/Jaffe–Witten source links;
- Osterwalder–Schrader DOI references;
- in-app BibTeX export and `CITATION.cff`;
- explicit E0/E1/H1/T0 methodology;
- scientific-review and bug-report issue forms;
- contribution and scientific-review protocols;
- versioned release metadata;
- automated structural quality checks;
- web manifest, sitemap, robots file, custom 404, `.nojekyll`;
- custom-domain deployment guide.

### Changed
- navigation expanded to Methodology and Scientific Review;
- source map now distinguishes primary references from the hypothetical project layer.

## [4.0.0] — 2026-09-14

- Converted the interactive presentation into a research console.
- Added proof dependency graph, assumption lab, proof-debt gates, and provenance view.

## [3.0.0] — 2026-09-14

- Added proof-logic simulator.

## [2.0.0] — 2026-09-14

- Added gauge, spectrum, Λ→gap, and RG interactive labs.

## [1.0.0] — 2026-09-14

- Initial standalone interactive web application.
