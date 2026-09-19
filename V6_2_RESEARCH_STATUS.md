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
