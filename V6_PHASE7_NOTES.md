# v6 Phase 7 — Parameter Sweep & Regime Analysis Notes

Phase 7 adds a local, deterministic analysis studio on top of the already-declared T0 instrument models. It does **not** add a Yang–Mills solver, physical phase diagram, statistical inference engine, eigensolver, or multiscale RG computation.

## Added

- Fine one-dimensional parameter sweeps with 51 / 121 / 201 / 401 deterministic samples.
- Exact sign-boundary reporting for the affine lab and RG budgets.
- Automatic localization of interface-regime transitions.
- Local analytic sensitivity values for the currently implemented scalar models.
- Two-parameter T0 regime maps:
  - lab: `c_G × r(a,L)` with `Λ_YM` held at the current value,
  - RG: `Z × ε_R` with `E_c` held at the current value,
  - spectrum: `Δ × ε`, preserving both spectral-band and composition-regime identities.
- Keyboard-focusable regime cells, hover/readout context, and “apply selected point” interaction.
- CSV export for 1D sweeps and JSON export for the local analysis object.
- Explicit local warnings that regime maps are interface sensitivity maps, **not physical phases**.

## Numerical policy

The lab and RG evaluation functions quantize inputs to six decimal places and use integer-scaled / BigInt products for the sign-bearing affine budget. Display sweeps are sampled deterministically; no epsilon is introduced to manufacture positivity. The exact zero boundary is computed analytically when the model permits it.

## Scientific interpretation

Critical lines other than the exact scalar sign boundary are T0 interface-regime thresholds. They do not constitute measured critical constants, theorem thresholds, continuum limits, or evidence for a mass gap. A color region is a display regime under a declared toy model, not a physical phase.

## Phase 7.1 hotfix

- Fixed the public analysis-engine API: `evaluate()` is now exported because `v6-analysis-ui.js` uses it to render the current-state metrics before drawing sweeps/maps.
- Added a regression assertion that the browser-facing dispatcher exists and correctly evaluates the RG model.
- No scientific model, threshold, regime, or visualization semantics changed.
