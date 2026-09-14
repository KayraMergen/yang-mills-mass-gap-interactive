# Landing Page Academic QA

A new visitor should be able to identify within the first viewport:

- project title and scientific scope;
- explicit open-problem / no-proof-claim status;
- project/all-versions DOI: `10.5281/zenodo.22739745`;
- author ORCID: `0009-0001-9217-0917`;
- repository link;
- archived exact v6.0.0 release DOI: `10.5281/zenodo.22754261`;
- a one-click citation action.

## Citation policy

Use the Concept DOI when referring to the evolving project as a whole.

Use the exact v6.0.0 DOI (`10.5281/zenodo.22754261`) when reproducing or citing the current archived v6.0.0 snapshot. Use `10.5281/zenodo.22739746` only for the historical v5.0.1 snapshot.

## Version consistency

The live UI must not contain stale major-version labels such as `V4 focus`.
Local report exports must identify the current website/repository build.
Zenodo archive versioning remains independent and is explicitly labeled.

## Canonical-domain checks

The public metadata must advertise `https://www.yangmillsresearch.org/` consistently in the HTML
canonical URL, OpenGraph metadata, JSON-LD, README, robots.txt and sitemap.xml.

The repository must retain a `CNAME` file containing `www.yangmillsresearch.org`.
