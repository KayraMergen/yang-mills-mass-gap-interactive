# Yang–Mills Working Research Status — v6.2 program

**Date:** 2026-09-19  
**Public archived website/release:** v6.0.0  
**Working research status:** v6.2 program  
**Scientific status:** open problem; no proof claim.

The public interactive console remains an audit/research interface. The deeper working mathematics is developed in \`KayraMergen/kto-research\` and is not automatically a public release.

## Current proof architecture

The working program now contains the following conditional theorem chain:

1. A regulator-wise physical gap is reduced to a Poincaré/Dirichlet lower bound after the physical ground-state transform.
2. Retained/fiber decompositions are treated with a **matrix-valued** kinetic form rather than a scalar ansatz. Cross kinetic terms are absorbed through the Schur complement
   \[
   S=F-C^{\mathsf T}R^{-1}C.
   \]
3. The physical two-scale coupling is measured by a conditional Dirichlet-dual matrix, not by density whitening alone.
4. Localized background variations plus propagator decay can yield **volume-uniform** Hilbert–Schmidt/dual-norm bounds.
5. The present unrescaled two-scale inverse-gap recursion cannot tolerate a nonsummable squared coupling such as \(t_j^2\sim c/j\); either an extra ultraviolet power gain or a genuine inter-step physical spectral contraction is required.
6. The inter-step inverse-gap factor has been identified abstractly as
   \[
   \rho_j=d_j/c_j,
   \]
   where \(d_j\) is physical excitation-norm distortion and \(c_j\) is the lower physical-form comparison.
7. A regulator-uniform positive gap persists to a common continuum physical form under suitable form convergence and vacuum-projector convergence.
8. KTO-derived soliton/topological/high-symmetry structures are assigned a separate role in **structured spectral-sector design**. They may strengthen a proof only through physical projectors/frames, physical Gram and energy matrices, uniform sector floors and controlled spectral leakage.

## Structured-sector route

For a split
\[
\mathcal H_\perp=\mathcal S\oplus\mathcal R,
\]
with sector floors \(\Delta_{\mathcal S},\Delta_{\mathcal R}\) and leakage \(\gamma\), the working theorem gives
\[
\Delta
\ge
\frac{
\Delta_{\mathcal S}+\Delta_{\mathcal R}
-
\sqrt{(\Delta_{\mathcal S}-\Delta_{\mathcal R})^2+4\gamma^2}
}{2}.
\]

A structured sector is therefore useful only when its own floor and its coupling to the remainder are quantitatively controlled.

## Soliton/topology frame candidate

On a finite Hamiltonian lattice, the current KTO bridge constructs gauge-invariant heat-kernel packets
\[
\Psi_{[X],t}=\mathsf P_G\Phi_{X,t}
\]
and refines them, when a rigorous lattice topological construction is available, by topological projectors. These states provide a concrete candidate frame for physical Gram and energy matrices.

The support-derived KTO witness metric \(Z\) becomes physically relevant only if explicit comparisons such as
\[
E\succeq\mu Z,
\qquad
G\preceq M_G Z
\]
are proved. \(Z>0\) by itself is not a mass-gap statement.

## Exact vacuum-deflated subspace

The structured-frame route now removes the vacuum component explicitly rather
than assuming packet orthogonality. Let

\[
K=H-E_0,\qquad
P_0=\mathbf 1_{\{0\}}(K),\qquad
F=(I-P_0)C
\]

for a raw physical packet synthesis map \(C\). Then

\[
G_\perp
=
F^*F
=
G-C^*P_0C
\]

is the exact vacuum-deflated Gram matrix. If

\[
\left\|
G^{-1/2}C^*P_0CG^{-1/2}
\right\|<1,
\]

the packets retain full rank and generate the exact structured projector

\[
P_{\mathcal S}=FG_\perp^{-1}F^*.
\]

The shifted energy matrix is unchanged:

\[
E=C^*KC=F^*KF.
\]

For packets in \(D(K)\), define

\[
J_{AB}=\langle KF_A,KF_B\rangle.
\]

The exact leakage to the vacuum-orthogonal remainder is then

\[
\gamma^2
=
\lambda_{\max}
\left[
G_\perp^{-1/2}
\left(
J-EG_\perp^{-1}E
\right)
G_\perp^{-1/2}
\right].
\]

Thus \(G,C^*P_0C,E,J\) determine the structured floor and leakage without a
basis for the full remainder. A global positive lower bound still requires a
uniform remainder floor and
\[
\gamma^2<\Delta_{\mathcal S}\Delta_{\mathcal R}.
\]

This is an abstract finite-regulator theorem with deterministic matrix checks.
The Yang–Mills-specific overlap, domain, leakage, remainder and continuum
estimates remain open.

### Transfer-correlator realization

The vacuum projector can also be avoided as an input. For every \(s>0\),

\[
F_s=(I-e^{-sK})C
\]

is exactly vacuum-orthogonal. If

\[
M_t=C^*e^{-tK}C,
\]

then its Gram matrix is the three-time combination

\[
G_s=M_0-2M_s+M_{2s}.
\]

Energy and leakage use the same combination of Hamiltonian-inserted
correlations. With the normalized physical transfer operator

\[
\widehat{\mathbb T}_a=e^{aE_0}e^{-aH}=e^{-aK},
\]

the required matrices satisfy

\[
M_{na}=C^*\widehat{\mathbb T}_a^{\,n}C.
\]

This supplies a direct finite-lattice computation route. Uniform
conditioning, correct ground-energy normalization and the remaining
leakage/remainder estimates are still open.

## Monster / Moonshine status

Monster/Moonshine remains a **bridge hypothesis**, not an established Yang–Mills symmetry. It can enter the spectral program only if a genuine physical unitary/intertwining action is constructed. In that event, character projectors would provide exact zero-leakage isotypic sectors. No such physical bridge is currently claimed.

## Current hard debts

The main unresolved gates are:
- source-level extraction of the actual RG physical norm/form transport constants;
- source-level ultraviolet power of localized background insertions;
- regulator-uniform Schur/fiber coercivity and conditional dual-norm control;
- physical structured-frame construction and energy domination;
- continuum physical Hilbert-space/form reconstruction and vacuum-sector convergence.

These are active research obligations, not completed results.
