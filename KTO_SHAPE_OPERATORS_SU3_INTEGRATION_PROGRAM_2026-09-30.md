# KTO × Shape Operators × SU(3) Yang–Mills Integration Programme

**Date:** 30 September 2026  
**Status:** research integration plan; no mass-gap proof claim.  
**Repository role:** physical/mathematical application layer only. Phenomenology and ontology remain upstream in \`KayraMergen/kto-research\`.

---

## 0. Purpose

This document records the controlled Yang–Mills use of three upstream mathematical structures:

1. the user's **Karmaşık Düzlemde Şekil Operatörleri Kuramı**;
2. the user's **Eğik Çerçevede Simetri, Barış Üçgeni ve Konfigürasyonel Öz Operatörü**;
3. KTO's Safe-Quotient / Witness / Reflection / Residual discipline.

The goal is to extract exact algebraic and geometric structures useful to the existing \(SU(3)\) programme **without** converting analogy into a gap proof.

The active mass-gap architecture remains Route G + continuum closure.

---

# I. SOURCE MATHEMATICS

## 1. Shape operators

For \(S,T\subseteq\mathbb C\):

\[
P_n(S)=\{z^n:z\in S\},
\]

\[
Q_n(T)=\{w:w^n\in T\},
\]

\[
R_\theta(S)=e^{i\theta}S,
\]

\[
\Omega_n(S)=\bigcup_{k=0}^{n-1}\omega_n^kS.
\]

Source theorem:

\[
\boxed{
Q_nP_n=\Omega_n.
}
\]

Orbit count:

\[
\boxed{
N_n(S)=\frac{n}{|\Gamma_n(S)|}.
}
\]

For \(\mu_m\)-symmetric centered shapes:

\[
\boxed{
N_n(S)=\frac{n}{\gcd(m,n)}.
}
\]

This source theorem is the origin of the KTO root-fiber interpretation.

---

## 2. Frame transport

The oblique-frame work defines:

\[
\iota_\alpha(x,y)=x+ye^{i\alpha}
\]

and conjugated operators:

\[
X^{(\alpha)}
=
\iota_\alpha^{-1}X\iota_\alpha.
\]

The operator identities survive this conjugacy.

Physical lesson for this repo:

\[
\boxed{
\text{coordinate/presentation change must transport the full certificate structure}.
}
\]

This is compatible with the existing Route-G warning that physical metric/form data cannot be moved by naive coordinate conjugation.

---

## 3. Symmetry-enhancement toy model

The Barış Triangle family provides a controlled \(\mu_3\) orbit/stabilizer example.

At generic non-equilateral triangles:

\[
|\Gamma_3|=1,
\qquad
N_3=3.
\]

At equilateral points:

\[
|\Gamma_3|=3,
\qquad
N_3=1.
\]

Thus the model gives a finite, exact symmetry-enhancement/orbit-collapse example.

It is not itself a gauge-theory phase transition.

---

# II. EXACT SU(3) BRIDGE

## 4. Center group

\[
\boxed{
Z(SU(3))
=
\{I,\omega I,\omega^2I\}
\cong
\mu_3
\cong
\mathbb Z_3.
}
\]

The same abstract finite group appears in:
- cube-root branch orbits;
- \(SU(3)\) center structure.

This common group is exact.

Its physical meaning differs by context.

---

## 5. Mandatory type distinction

For every \(\mathbb Z_3\)-orbit/fiber in the YM programme assign one of:

\[
Type
\in
\{
GaugeRedundancy,
CenterSymmetryOrbit,
ThermalSector,
PhysicalUnderdetermination,
CoordinateBranch,
ToyModelOrbit
\}.
\]

No result may move between these types without a bridge.

---

## 6. Gauge-before-physics gate

For a selected observable map:

\[
Obs:\mathcal A\to Y,
\]

raw fiber:

\[
Obs^{-1}(y)
\]

may contain gauge-equivalent points.

Before interpreting multiplicity physically, use the gauge quotient:

\[
Obs^{-1}(y)/\mathcal G
\]

or an equivalent gauge-invariant classification.

This is the Yang–Mills specialization of KTO Safe Quotient.

---

# III. HOLONOMY / CENTER LANDSCAPE WORK PACKAGE

## 7. Candidate finite-dimensional coordinate model

For an \(SU(3)\) holonomy in a diagonal representative:

\[
U
\sim
\operatorname{diag}
\left(
e^{i\theta_1},
e^{i\theta_2},
e^{-i(\theta_1+\theta_2)}
\right).
\]

Center action:

\[
U\mapsto\omega^kU.
\]

This gives a natural complex-phase sector model.

Use this only where diagonalization/gauge choice is controlled.

---

## 8. Center-sensitive observable

A Polyakov-loop-type complex observable:

\[
P
\]

may transform schematically:

\[
P\mapsto\omega^kP.
\]

A center-symmetric effective landscape may satisfy:

\[
V_{\rm eff}(\omega P)=V_{\rm eff}(P).
\]

The programme may study:
- one center-symmetric stationary region;
- three symmetry-related broken-sector minima;
- saddles/separatrices;
- basin geometry;
- bifurcation under a control parameter.

This is a **finite-temperature/effective-model laboratory**, not the zero-temperature continuum Clay proof.

---

# IV. KTO VIRTUAL-FIBER SEMANTICS

## 9. Observable fiber

For a gauge-invariant observable family:

\[
Obs_{\rm GI}:X\to Y,
\]

define:

\[
\mathfrak V_{\rm YM}(y)
=
Obs_{\rm GI}^{-1}(y).
\]

After authorized gauge quotient and KTO upper-composition equivalence:

\[
Virt_{\rm YM}(y)
=
[\mathfrak V_{\rm YM}(y)/\mathcal G]/{\equiv_T^\uparrow}.
\]

Interpretation:

> physically admissible source classes still compatible with the selected observable data.

This does not mean that all classes are co-realized.

---

## 10. Center-fiber theorem template

If an observable \(F\) is center-invariant:

\[
F(\omega^kx)=F(x),
\]

then:

\[
Z_3x
\subseteq
F^{-1}(F(x)).
\]

Orbit size:

\[
|Z_3x|
=
\frac{3}{|\operatorname{Stab}_{Z_3}(x)|}.
\]

This is the exact bridge to the source orbit/stabilizer theorem.

Physical interpretation depends on the observable and boundary conditions.

---

# V. RELATION TO ROUTE G

## 11. Route G remains the proof backbone

The current active global coercivity route is:

\[
\mathcal H_\perp
=
\bigoplus_j\mathcal H_j
\]

with scale-sector floors and cross-scale blocks.

If:

\[
\kappa
=
\sup_j
\sum_{k\ne j}b_{jk}
<1
\]

and:

\[
e_j(u)\ge\delta\|u\|^2,
\]

then:

\[
\mathcal E(f,f)
\ge
(1-\kappa)\delta\|f\|^2.
\]

Nothing in the roots-of-unity/center programme replaces this.

---

## 12. Permitted contributions to Route G

The new programme may contribute only through explicit proof objects such as:

- a better gauge-invariant filtration;
- finite center-sector decomposition with proven form-domain stability;
- improved witness matrices;
- exact quotient/reflection tests;
- improved finite-prefix block structure;
- holonomy-sector estimates that feed a verified Dirichlet/Poincaré/coercivity bound;
- explicit residual bounds.

A conceptual symmetry analogy is not an admissible Route-G input.

---

## 13. Structured-sector relation

The current structured/BPST sector remains optional and non-global.

If a new \(\mathbb Z_3\)/holonomy bank is proposed, it must provide physical matrices analogous to:

\[
G,\ E,\ J,\ R=J-EG^{-1}E.
\]

If transported KTO witness form \(Z\) is used, the activation gate remains of the form:

\[
\lambda_ZM_Z<\mu_Zm_Zd_{\mathcal R}.
\]

A center/orbit structure is useful only if it improves one of these certified quantities or supplies a new valid sector decomposition.

---

# VI. SYMMETRY BREAKING WITHOUT OVERCLAIM

## 14. Toy orbit law

The shape model:

\[
N_3=\frac3{|\Gamma_3|}
\]

gives:
- generic orbit size \(3\);
- enhanced-symmetry orbit size \(1\).

Use this as a finite exact model of stabilizer enhancement.

Do **not** identify:
- equilateral Barış Triangle point;
- \(Z_3\) thermal symmetry breaking;
- YM vacuum structure;
- continuum confinement

without separate bridges.

---

## 15. Thermal center symmetry versus mass gap

A finite-temperature Polyakov-loop landscape can diagnose center-symmetry structure.

It does not prove:

\[
\sigma(H)
\subset
\{0\}\cup[\Delta,\infty)
\]

for the zero-temperature continuum physical Hamiltonian.

The Clay target still requires the continuum spectral theorem.

---

# VII. ATTRACTOR / MORSE / FRACTAL SUBPROGRAMME

## 16. When attractors are allowed

Use “attractor” only after an explicit update/flow is supplied.

Candidate finite-dimensional laboratories:
- effective Polyakov-loop dynamics;
- gradient flow of a justified \(V_{\rm eff}\);
- RG toy flow;
- Newton-style numerical toy model.

No attractor is inferred merely from the presence of complex roots.

---

## 17. Morse gate

If an effective scalar potential:

\[
V_{\rm eff}:M\to\mathbb R
\]

is physically justified on an authorized finite-dimensional manifold \(M\), then one may study:
- critical points;
- Hessian index;
- saddles;
- gradient basins;
- Morse/Euler constraints.

This remains an effective-model result unless a theorem transports it to the physical Hilbert/form problem.

---

## 18. Fractal warning

Fractal basin boundaries require actual nonlinear dynamics and proof/numerical evidence.

No inference:

\[
\text{complex plane}
\Rightarrow
\text{fractal confinement}
\]

is permitted.

---

# VIII. MONSTER / MOONSHINE FIREWALL

## 19. Separate programme

Existing Monster/Moonshine work remains structurally separate.

Allowed comparison:
- unexpected invariant correspondences across representations.

Forbidden inference:
- root-of-unity center geometry automatically implies Monster/Moonshine structure;
- Monster symmetry automatically implies mass gap.

Any fusion must specify an explicit representation/action/intertwiner and proof obligation.

---

# IX. WORK PACKAGES

## YM-WP0 — Source theorem crosswalk

Map every imported statement to:
- Shape Operators theorem;
- Barış Triangle theorem;
- KTO interpretation;
- YM physical status.

## YM-WP1 — \(Z_3\) center toy model

Build:
- \(\mu_3\) action;
- orbit/stabilizer table;
- gauge versus center typing;
- center-sensitive and center-invariant observables.

## YM-WP2 — Holonomy coordinate model

Construct:
- authorized SU(3) eigenphase coordinates;
- Weyl identifications;
- center action;
- safe quotient map.

## YM-WP3 — Effective center landscape

Only with a sourced/derived \(V_{\rm eff}\):
- critical points;
- center-symmetric/broken stationary structures;
- Hessian/saddle analysis;
- basin geometry.

## YM-WP4 — Gauge-fiber audit

For each observable family:
- raw fiber;
- gauge quotient;
- center action;
- physical residual multiplicity;
- reflection debt.

## YM-WP5 — Route-G interface

Ask whether the new structure yields:
- a new sector floor;
- smaller cross-sector leakage;
- improved witness conditioning;
- better prefix/tail decomposition.

If not, keep it as a toy/interpretation layer.

## YM-WP6 — Continuum gate

No finite-dimensional center result is promoted without:
- regulator-uniform estimates;
- common Hilbert/form embedding;
- Mosco/form convergence;
- vacuum-projector convergence.

---

# X. FALSIFICATION RULES

The programme must reject or downgrade any claim if:

1. gauge redundancy was counted as physical multiplicity;
2. the center action was confused with local gauge equivalence;
3. a finite-temperature order parameter was used as a zero-temperature mass-gap proof;
4. an attractor was named without a defined dynamics;
5. a Morse function was invented only to enable Morse theory;
6. a symmetry analogy supplied no coercivity/spectral estimate;
7. a coordinate singularity was presented as a physical singularity;
8. a \(\mathbb Z_3\) orbit was treated as sufficient for confinement;
9. a toy-sector positive floor was promoted to the continuum;
10. a KTO interpretation was used as a proof premise instead of a post-theorem interpretation.

---

# XI. CURRENT STATUS

The new integration supplies:

\[
\boxed{
\text{Shape operators}
\to
\text{root-of-unity orbit/fiber}
\to
Z_3\text{ center bookkeeping}
}
\]

as a legitimate structural bridge.

It does **not** supply:

\[
\boxed{
\text{mass-gap closure}.
}
\]

The current mass-gap hard debts listed in \`V6_2_RESEARCH_STATUS.md\` remain active.

This programme should therefore be read as a new **symmetry/quotient/holonomy research lane** feeding the existing Route-G proof architecture only when it produces certificate-bearing estimates.


---

## XII. Upstream paper archive — 8 October 2026

The oblique-frame source cited in this programme now has a canonical publication-preparation location in the KTO research repository:

- [Barış Üçgeni Bölüm II — Eğik Çerçevede Simetri](https://github.com/KayraMergen/kto-research/blob/docs/baris-ucgeni-six-paper-integration-2026-10-08/papers/baris-ucgeni/Baris_Ucgeni_Bolum_II_Egik_Cerceve_Simetri_2026-10-08.pdf)

Two newer companion works are relevant only as **methodological / audit layers** unless they produce a certified Route-G proof object:

- [TSCA — Çerçeve-Varyasyonlu Ters-Simetri Analizi](https://github.com/KayraMergen/kto-research/blob/docs/baris-ucgeni-six-paper-integration-2026-10-08/papers/baris-ucgeni/TSCA_Cerceve_Varyasyonlu_Ters_Simetri_Analizi_Konsolide_2026-10-08.pdf)
- [Tersinirlik, Potansiyel ve Edim](https://github.com/KayraMergen/kto-research/blob/docs/baris-ucgeni-six-paper-integration-2026-10-08/papers/baris-ucgeni/Tersinirlik_Potansiyel_ve_Edim_Yayin_Surumu_2026-10-08.pdf)

Admission status is recorded in `upstream/baris-ucgeni/README.md`.

This addition does not modify the programme's hard debts or proof status.
