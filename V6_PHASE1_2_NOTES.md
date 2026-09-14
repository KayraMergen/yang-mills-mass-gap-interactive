# v6 Phase 1–2 Foundation Patch

This patch implements the scientific/model/state foundation only. It intentionally does **not** perform the v6 visual redesign or MathJax/STIX2 migration yet.

## Implemented

- exact scaled-integer scalar arithmetic;
- bare-URL defaults stay 0.65 / 1.00 / 0.12;
- exact zero/positive/negative sign handling;
- authoritative N1–N6 dependency registry and corrected N4 → N5 → N6 topology;
- v5 scenario compatibility plus v6 full-state serialization;
- persistent open-problem scope and local T0 result qualification;
- honest signed single-step RG transfer/defect budget; old staged animation removed;
- proof-obligation bilingual cell alignment fix;
- 320–390 px document-overflow safeguards for graph/RG/audit surfaces;
- custom-domain 404 root fix;
- v6 core regression tests wired into GitHub Actions;
- finalized v6 specification documents stored in the repository.

## Deliberately deferred

- final editorial shell/navigation grouping;
- MathJax + STIX2 equation rendering;
- large analytical redesign of all instruments;
- full graph/list/semantic-outline renderer;
- contextual copy/capture/JSON/report export;
- final accessibility/print/performance release gate;
- v6 release/version/DOI work.

The Millennium Problem remains open. Passing these software checks does not establish any H1 mathematical claim.
