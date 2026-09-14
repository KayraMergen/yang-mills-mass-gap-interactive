# v6 Phase 3.1 — Overview Editorial Refinement

Status: branch-only visual refinement; no scientific model, state schema, DOI, or archive semantics changed.

## Purpose

The Phase 3 overview still carried too much publication prose, citation copy, status blocks and four explanatory cards in the first research surface. Phase 3.1 makes the overview feel like an editorial research entry point rather than a compact dashboard.

## Changes

- Replaced the large publication strip with a quiet single-line academic identity masthead.
- Shortened the Turkish/English hero title and opening explanation.
- Kept the H1 coercivity statement as the main mathematical object.
- Removed the visible software-citation block from the hero; citation remains available through the compact masthead action and Sources & citation view.
- Reduced three primary actions to two research actions plus a small report utility.
- Replaced four verbose status cards with a three-item research summary: target spectrum, critical bridge, research mode.
- Replaced four explanatory cards with a lightweight four-stage program spine.
- Preserved DOI, ORCID, archive identity, route IDs, button IDs, scientific scope and open-problem language.
- Added responsive collapse rules so the simplified hierarchy remains readable on narrow screens.

## Validation

- `node scripts/test-v6-core.cjs` passes.
- `node scripts/test-v6-phase3.cjs` passes with Phase 3.1 overview assertions.
- `node scripts/validate.mjs` passes.

## Scientific scope

This change is visual and editorial only. It does not change the H1/T0 classification, proof dependencies, numerical model, or the fact that the Yang–Mills existence and mass-gap problem remains open.
