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

### Moment-certified filtered-frame floor

The filtered-frame conditioning problem now has an explicit noncircular
sufficient criterion. Define

\[
G=C^*C,
\qquad
E=C^*KC,
\qquad
J=(KC)^*(KC).
\]

If one physical witness normalization \(Z>0\) satisfies

\[
G\preceq MZ,
\qquad
E\succeq\mu Z,
\qquad
J\preceq LZ
\]

with \(M,L<\infty\) and \(\mu>0\), then the exact vacuum-deflated frame obeys

\[
G_\perp
\succeq
EJ^{-1}E
\succeq
\frac{\mu^2}{L}Z.
\]

For every \(s>0\) and \(0<\theta<1\), the semigroup-filtered Gram matrix
satisfies

\[
G_s
\succeq
(1-\theta)^2
\frac{\mu^2}{L}
\left(
1-e^{-s\theta\mu/M}
\right)^2
Z.
\]

The corresponding structured-sector Rayleigh floor has the certified bound

\[
\Delta_s
\ge
(1-\theta)^2\theta
\frac{\mu^3}{M^2L}
\left(
1-e^{-s\theta\mu/M}
\right)^2.
\]

Two counterexamples show that neither the first-moment lower bound nor the
second-moment upper bound can be omitted. The new Yang–Mills obligation is a
regulator-uniform physical estimate

\[
J_r\preceq L_*Z_r.
\]

This result certifies the selected vacuum-orthogonal packet sector; it does
not yet control the exact orthogonal remainder or prove the global mass gap.

### Ground-state commutator route to the second moment

The new physical reduction addresses the open bound
\(J=(KC)^*(KC)\preceq L_*Z\). For

\[
H=\alpha_E(-\Delta)+V,
\qquad
H\Omega=E_0\Omega,
\]

choose vacuum-relative multiplier packets

\[
\Psi_A=\Omega f_A,
\qquad
d\mu=\Omega^2dU.
\]

Then

\[
(H-E_0)(\Omega f)
=
\alpha_E\Omega\mathcal L_\mu f,
\qquad
\mathcal L_\mu
=
-\Delta-2\nabla\log\Omega\cdot\nabla.
\]

Because the magnetic potential and \(f\) are multiplication operators,

\[
(H-E_0)M_f\Omega
=
[H,M_f]\Omega
=
\alpha_E[-\Delta,M_f]\Omega.
\]

Thus the extensive magnetic multiplier cancels exactly from the commutator.
Integrated Bochner gives

\[
J
=
\alpha_E^2
\left(
\mathsf H_2+\mathsf R_1
\right).
\]

Consequently,

\[
\operatorname{Ric}_\mu\preceq\kappa g,
\qquad
\mathsf H_2\preceq hZ,
\qquad
D\preceq dZ
\]

imply

\[
J
\preceq
\alpha_E^2(h+\kappa_+d)Z.
\]

A direct global magnetic-potential norm estimate instead grows as the square
of the plaquette count and is not volume-uniform. The remaining concrete
gates are the vacuum-relative multiplier realization, an upper
weighted-curvature bound and localized Hessian/Dirichlet frame estimates.

## Monster / Moonshine status

Monster/Moonshine remains a **bridge hypothesis**, not an established Yang–Mills symmetry. It can enter the spectral program only if a genuine physical unitary/intertwining action is constructed. In that event, character projectors would provide exact zero-leakage isotypic sectors. No such physical bridge is currently claimed.

## Whole-relative least constitutive carrier

The phrase “smallest space” has now been made precise without introducing a
hierarchy of spatial size. At regulator \(r\), choose a nonzero
vacuum-relative physical seed

\[
\xi_r=Q_rO_r\Omega_r
\]

and an authorized excitation algebra \(\mathfrak B^{(0)}_r\), generated by
gauge-invariant physical observables and the spectral calculus of the shifted
Hamiltonian. Define

\[
\boxed{
\mathcal C_r(\xi_r)
=
\overline{\mathfrak B^{(0)}_r\xi_r}.
}
\]

This is the unique least closed carrier containing the seed and closed under
the authorized operations. “Least” means inclusion-minimal after those data
are fixed; it does not mean smallest length, volume, mass or representation
dimension. Without a seed and closure algebra, a smallest nonzero invariant
space need not exist.

The resulting spectral floor

\[
\delta_r(\mathcal C_r)
=
\inf_{\psi\in\mathcal C_r,\ \|\psi\|=1}
\langle\psi,K_r\psi\rangle
\]

is interpreted ontologically as a **whole-relative constitutive distinction
cost**. The standard mass-gap proposition is unchanged. Since

\[
\Delta_r\le\delta_r(\mathcal C_r),
\]

a carrier bound becomes global only with exhaustive coverage or controlled
remainder and leakage.

A Monster-organized version is not yet defined physically. It requires a
unitary action \(U_r(\mathbb M)\) that fixes the vacuum, commutes with the
Hamiltonian and preserves the observable algebra. Only then can character
projectors split the generated carrier into reducing isotypic sectors.
Representation dimensions or Moonshine multiplicities still do not imply an
energy floor.

The new research gates are YM-A79–YM-A84: observable-algebra selection,
nonzero seed construction, nonfactorization tests, physical Monster action,
sectorwise physical bounds, exhaustion/leakage and continuum transport.

## Current hard debts

### 21 September 2026: Wilson seed construction and carrier scope

At a fixed finite regulator, a simple Wilson loop gives the nonzero physical
seed
\[
\xi_\gamma=(w_\gamma-\langle w_\gamma\rangle_\mu)\Omega,\qquad
\|\xi_\gamma\|^2=\operatorname{Var}_\mu(w_\gamma)>0.
\]
The full spin-network multiplier family supplies an explicit observable
algebra and a dense form core. Local link-marginal bounds control the seed
variance and first moment. For \(\lambda_\gamma=\ell C_F\), the second moment
has the sufficient local bound
\[
\|K\xi_\gamma\|^2\le
\alpha_E^2(2\lambda_\gamma^2+8\lambda_\gamma I_S),\qquad
I_S=\int|\nabla_S\log\Omega|^2\,d\mu.
\]
For edge-transitive lattices with
\(V_B=\beta\sum_p(1-w_p)\), the ground-state energy budget proves
\[
I_S\le(\beta/\alpha_E)|S|N_p/|E|.
\]
On isotropic periodic cubic lattices this yields a ceiling independent of
total volume for fixed-size loops. With the stated KS coefficients the
ceiling grows as \(a^{-2}\), leaving the ultraviolet limit open.

The full observable choice also resolves a scope issue:
\[
T_{f\bar h}-T_fT_{\bar h}=|qf\rangle\langle qh|,\qquad T_f=qM_fq.
\]
The resulting rank-one operators generate all bounded operators on the
excitation space. Thus every nonzero seed generates all of
\(\mathcal H_\perp\) for this choice. A proper particle/Monster carrier needs
a justified restricted algebra.

The inequalities are
\[
\Delta_r\le\delta_r(\mathcal C_r(\xi_\gamma))
\le\frac{\langle\xi_\gamma,K\xi_\gamma\rangle}{\|\xi_\gamma\|^2}.
\]
A seed energy estimate does not extend automatically to its algebraic
closure. Finite Ritz values and illustrative single-cycle calculations
cannot supply a uniform continuum lower bound.

Seven new finite diagnostics accompany the written proofs. The private
ground-state theorem also corrects the complex centering convention to
\(B_{AB}=\overline{\mu f_A}\,\mu f_B\).

### Remaining analytic work

The main unresolved gates are:
- source-level extraction of the actual RG physical norm/form transport constants;
- source-level ultraviolet power of localized background insertions;
- regulator-uniform Schur/fiber coercivity and conditional dual-norm control;
- physical structured-frame construction and energy domination;
- continuum physical Hilbert-space/form reconstruction and vacuum-sector convergence.

These are active research obligations, not completed results.
