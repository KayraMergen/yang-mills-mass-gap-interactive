# v6 Phase 5 — Research-grade experiment controls

Status: implementation patch on the v6 working branch. The Yang–Mills Millennium Problem remains open. All threshold regimes introduced here are **T0 interface interpretation bands**, not physical critical constants, measured values, or proof thresholds.

## What changed

- Lab, spectrum, and RG controls now support 0.001 / 0.01 / 0.05 step modes, numeric entry, and ± nudge controls.
- The exact fixed-point core now accepts 0.001 input precision and retains exact sign behavior through products and subtraction.
- Each experiment has a local baseline capture for quick within-session comparison.
- The assumption lab distinguishes negative, zero, positive-but-blocked, fragile-positive, moderate-positive, and robust-positive T0 states.
- Spectrum adds visible interface threshold markers at Δ = 0.020 / 0.100 / 0.350, plus mixture-composition regimes and lab-link structural blocking.
- RG adds robust/moderate/fragile positive, zero, fragile/strong negative, and structurally-blocked regimes derived from the signed single-step budget.
- Threshold crossings use brief state-driven pulses; assumption-chain state changes use a short cascade. Reduced-motion disables these animations.
- Small collapsible “Structural reading” panels explain what each T0 model preserves, ignores, and how it should be interpreted, without naming any ontology.

## Scientific-integrity constraints

- Threshold bands are UI sensitivity categories only.
- A positive scalar never changes an H1 premise into an established theorem.
- Spectrum remains schematic: it computes no eigenvalues or spectral measure.
- RG remains a signed single-step budget: it computes no multiscale flow or trajectory.
- The public UI does not expose the private ontology name.
