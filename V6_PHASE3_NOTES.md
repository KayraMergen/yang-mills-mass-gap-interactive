# v6 Phase 3 — Research Shell, Typography & Math Presentation

Status: implementation branch artifact; not a canonical release and not a new Zenodo archive.

## What changed

- Replaced the dense dashboard visual hierarchy with a restrained research-software shell.
- Grouped navigation into Research program / Research instruments / Scientific audit while preserving all existing route keys and view IDs.
- Removed global left/right section switching; deliberate navigation now owns view changes.
- Added a skip link and focus transfer to the active research heading.
- Introduced a dedicated Phase 3 stylesheet rather than further expanding the legacy inline CSS.
- Added Inter for UI/body text and selective STIX Two Text editorial headings through web font CSS.
- Added MathJax 4 CommonHTML using the STIX2 math font and converted the three primary equations to reviewed TeX blocks.
- Added equation IDs and local H1/T0 status captions; mathematical styling does not imply theorem validation.
- Removed redundant trust cards from the visible overview hierarchy while retaining DOI/ORCID/publication metadata in the publication strip.
- Enlarged analytical surfaces and reduced nested-card styling for graph, lab, spectrum and RG views.
- Reworked the sidebar into a compact research rail on desktop and a non-overflowing grouped navigation block on narrow screens.
- Flattened audit/source/method/review surfaces and reduced decorative badges/shadows.

## Validation performed

- `node scripts/test-v6-core.cjs` passes.
- `node scripts/validate.mjs` passes.
- `node scripts/test-v6-phase3.cjs` passes.
- Headless structural rendering was checked at 390, 768, 1120 and 1440 CSS px for all ten views with no document-level horizontal overflow.

The headless layout audit intentionally omitted remote fonts and MathJax network loading, so it validates responsive geometry rather than final glyph rendering. Final browser QA must verify MathJax/STIX2 loading, Turkish glyphs, focus, print and reduced-motion behavior on the real branch preview.

## Scientific scope

The Yang–Mills existence and mass-gap problem remains open. Phase 3 changes presentation, hierarchy and mathematical typesetting; it does not upgrade any H1 claim, compute a physical spectrum, or turn the T0 instruments into proof.
