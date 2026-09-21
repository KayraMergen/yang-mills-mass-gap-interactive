# Yang–Mills Working Research Status — v6.2 program

**Date:** 2026-09-21  
**Public archived website/release:** v6.0.0  
**Working research status:** v6.2 program  
**Scientific status:** open problem; no proof claim.

The public interactive console remains an audit/research interface. The deeper working mathematics is developed in \`KayraMergen/kto-research\`; this file is a synchronized status summary, not a new public proof claim or archived release.

## Current proof architecture

The active program now separates four logically distinct layers.

1. **Physical ground-state form.** Regulator-wise spectral gap is reduced to a Poincaré/Dirichlet lower bound after the physical ground-state transform.
2. **Local conditional coupling.** Retained/fiber splitting uses the full physical kinetic form, moving mean and material covariance score. Density whitening does not erase physical coupling; it transfers it to the horizontal connection.
3. **Global multiscale Route G.** Instead of multiplying a loss at every RG step, the physical excitation space is decomposed into orthogonal scale sectors and all cross-scale couplings are treated simultaneously as a block operator.
4. **Continuum persistence.** A regulator-uniform physical gap must still be transported to a common continuum Hilbert/form system with form convergence and vacuum-projector convergence.

## Important corrections in the current branch

### Bianchi coordinates are not Wilson-observable rank

A cube has five independent maximal-tree loop coordinates, but this does not imply that its six face Wilson observables span only five dimensions. Bianchi is a coordinate constraint; observable quotienting requires a separate functional/Witness-Nonerasure test.

### UV Wilson frame

For \(U_e=e^{igA_e}\), a real normalized Wilson loop satisfies
\[
w_\gamma
=
1-\frac{g^2}{2N}\operatorname{tr}S_\gamma^2+O(g^3).
\]
The weak-coupling observable frame therefore uses the canonical deficit
\[
\Phi_\gamma=(1-w_\gamma)/g^2.
\]
The common \(g^4\) scaling of Gram and energy forms cancels from generalized spectral ratios.

### Whitening is not a physical quotient

For a moving fiber coordinate \(y=T_x\xi\),
\[
\bar C=T^{-1}CT^{-*},\qquad A=T^{-1}DT.
\]
The physical material covariance derivative is
\[
D\bar C+A\bar C+\bar C A^*
=
T^{-1}(DC)T^{-*}.
\]
Thus setting \(D\bar C=0\) by covariance whitening does not remove the score; the symmetric connection carries it.

For a Gaussian conditional fiber \(N(m,C)\), the exact OU dual score is
\[
\tau_v^2
=
\|C^{-1/2}D_vm\|^2
+
\frac14
\|C^{-1/2}(D_vC)C^{-1/2}\|_{\rm HS}^2.
\]

### Background minimization does not automatically remove the BQQ tensor

For a constrained critical graph \(y=h(r)\) with
\[
B(r)=D_y^2\Phi(r,h(r)),
\]
one has
\[
D_vB
=
D_rD_y^2\Phi[v]
-
D_y^3\Phi
\bigl[
B^{-1}D_rD_y\Phi[v],
\cdot,\cdot
\bigr].
\]
In an already quadratic-adapted split, the \(RFF\) mixed Hessian therefore survives unless an additional physical cancellation occurs.

This agrees with the standard background-field picture in which the one-background/two-quantum BQQ vertex is generically nonzero.

## Route G — global multiscale block coercivity

Let
\[
\mathcal H_\perp
=
\bigoplus_j\mathcal H_j
\]
be an orthogonal proof-scale decomposition and let \(e_j\) be diagonal physical energy forms.

Suppose the cross-scale form blocks satisfy
\[
|\mathcal E(u_j,u_k)|
\le
b_{jk}\,
e_j(u_j)^{1/2}
e_k(u_k)^{1/2}.
\]

If
\[
\kappa
=
\sup_j\sum_{k\ne j}b_{jk}
<1
\]
and every scale sector has the same physical lower floor
\[
e_j(u)\ge\delta\|u\|^2,
\]
then
\[
\boxed{
\mathcal E(f,f)
\ge
(1-\kappa)\delta\|f\|^2.
}
\]

This is the main change from the older recursive two-scale route: the proof no longer requires
\[
\sum_j t_j^2<\infty.
\]

For nearest-neighbor scale coupling,
\[
\|K\|\le2\sup_jt_j.
\]
Thus a marginal coefficient \(t_j=O(j^{-1/2})\) may still produce a uniformly coercive ultraviolet tail even though \(\sum_jt_j^2\) diverges.

## Martingale / triangular-memory realization

For nested gauge-invariant sigma algebras,
\[
Q_j=P_j-P_{j-1}
\]
gives an exact orthogonal \(L^2\) scale decomposition.

In a triangular conditional measure
\[
d\mu_M
=
p_1(dx_1)\prod_{k=2}^M p_k(dx_k\mid x_{<k}),
\]
the cross-scale block \(j<k\) is controlled by the complete retained-direction score vector
\[
\ell_{k,\ell}
=
\nabla_{x_\ell}\log p_k,
\qquad \ell\le j.
\]

The physical Dirichlet-dual score Gram matrix \(T_{k,\le j}\) yields
\[
\|K_{jk}\|
\le
t_{jk}.
\]

Exact Gaussian long-memory models show that
\[
t_{jk}
\lesssim
k^{-1/2}q^{k-j}
\]
can produce a uniform positive gap for every finite chain despite the nonsummable marginal square \(1/k\).

These models are mathematical calibrations, not derivations of \(SU(3)\) Yang–Mills.

## Polymer locality → Route G block decay

The current highest-value source bridge has been reduced to a marked-polymer derivative estimate.

If a conditional interaction has
\[
V_k=\sum_X\Phi_{k,X},
\]
then
\[
\ell_{k,\ell}
=
-
\bigl[
D_{x_\ell}V_k-p_k(D_{x_\ell}V_k)
\bigr].
\]

If marked polymer derivatives obey
\[
\|D_{x_\ell}\Phi_{k,X}\|
\le
A_k e^{-m d_s(X)},
\]
while the number of diameter-\(n\) connecting polymers grows at most like
\[
N_n\le N_0e^{sn},
\qquad m>s,
\]
then the score memory decays exponentially:
\[
\|\ell_{k,\ell}\|_2
\le
C A_k e^{-(m-s)(k-\ell)}.
\]

A regulator-uniform conditional Poincaré bound and retained physical metric bound then give
\[
\boxed{
\|K_{jk}\|
\lesssim
A_k e^{-(m-s)(k-j)}.
}
\]

Therefore the most valuable Bałaban source question is no longer simply whether a cluster expansion is local. It is whether **marked background derivatives of localized polymer activities decay faster than polymer-counting entropy grows**.

## Uniform regulator and continuum closure

For a fixed regulator-independent scale \(J\), suppose:

\[
\Delta_{\rm tail}
=
(1-\kappa_{\rm tail})\delta_{\rm tail}>0,
\]
the finite/coarse prefix has a uniform floor
\[
\Delta_{\rm pre}>0,
\]
and prefix–tail energy leakage satisfies
\[
\gamma^2
<
\Delta_{\rm pre}\Delta_{\rm tail}.
\]

Then every regulator has the same positive lower bound
\[
\boxed{
\Delta_r
\ge
\lambda_{\min}
\begin{pmatrix}
\Delta_{\rm pre}&-\gamma\\
-\gamma&\Delta_{\rm tail}
\end{pmatrix}
=:\Delta_*>0.
}
\]

If the transported physical forms then converge in a common Hilbert space in the Mosco sense and the vacuum projections converge strongly, the same \(\Delta_*\) persists in the limiting physical Hamiltonian.

This separates two debts that must not be conflated:

- **uniform finite-regulator Route G closure**, and
- **continuum Hilbert/form/vacuum reconstruction**.

## Structured / soliton sector

A structured or soliton packet family is not currently the global mass-gap mechanism.

It may be used as a controlled low-scale/structured sector only if its Gram, energy, second moment and leakage matrices are uniformly bounded and the remaining prefix/tail sectors have their own positive floors.

The current explicit packet candidate built from a BPST spatial slice is treated only as a gauge-invariant quantum-packet center. A BPST instanton is not a static \(3+1\)-dimensional Yang–Mills soliton or Hamiltonian eigenstate.

## Current hard debts

The highest-priority open gates are now:

- build the actual gauge-invariant Bałaban/KS filtration and prove form-domain stability;
- extract the **full** conditional material score: projected BQQ, moving mean, Jacobian, moving constraint and kinetic terms;
- derive marked-polymer retained-background derivative bounds;
- prove the polymer locality exponent beats polymer-counting entropy;
- establish a regulator-uniform conditional Poincaré/sector floor;
- convert those estimates into a uniform Route G block row sum;
- control a fixed coarse prefix and prefix–tail leakage;
- construct the common continuum physical Hilbert/form embedding;
- prove form convergence and vacuum-projector convergence.

These remain active proof obligations. The Yang–Mills existence and mass-gap problem remains open.


## Analytic polymer shortcut — 21 September 2026

The private research branch now contains a second route from Bałaban-style localized activities to the marked background derivative needed by Route G.

If a localized activity is holomorphic in a complex retained/background tube of radius \(r_{k,\ell}\) and obeys
\[
\|\Phi_{k,X}\|
\le
A_k e^{-m d_s(X)}
\]
throughout that tube, Banach-valued Cauchy estimates give
\[
\boxed{
\|D_{x_\ell}\Phi_{k,X}\|
\le
\frac{A_k}{r_{k,\ell}}
e^{-m d_s(X)}.
}
\]

The effective marked amplitude is therefore
\[
\widehat A_k
=
\sup_{\ell<k}\frac{A_k}{r_{k,\ell}}.
\]

Combined with a polymer-counting entropy gap \(m>s\), conditional Poincaré control and retained physical-metric bounds, this yields a Route-G scale-block estimate of the form
\[
\|K_{jk}\|
\lesssim
\widehat A_k e^{-(m-s)(k-j)}.
\]

This adds an important falsification condition: an \(O(g_k)\) unmarked activity does not give an \(O(g_k)\) marked derivative if the analytic radius simultaneously shrinks like \(r_k\sim g_k\). Quantitative complex-radius bookkeeping is therefore part of the proof debt.

The current source audit locates Bałaban CMP116's localized cluster activity and exponential activity decay as the relevant unmarked-locality anchor. The marked derivative or a regulator-uniform complex analytic radius has not yet been promoted to a source-verified theorem.

The Yang–Mills existence and mass-gap problem remains open; no proof claim is made.


## KTO witness-residual activation criterion — 21 September 2026

The private v6.2 branch now compresses the structured/soliton proof debt into four witness-normalized finite-matrix constants.

For the filtered physical packet frame,
\[
G=F^*F,\qquad E=F^*KF,\qquad
R=J-EG^{-1}E,
\]
and a KTO structural witness matrix \(Z\), define
\[
m_Z=\lambda_{\min}(Z^{-1/2}GZ^{-1/2}),\qquad
M_Z=\lambda_{\max}(Z^{-1/2}GZ^{-1/2}),
\]
\[
\mu_Z=\lambda_{\min}(Z^{-1/2}EZ^{-1/2}),\qquad
\lambda_Z=\lambda_{\max}(Z^{-1/2}RZ^{-1/2}).
\]

Then
\[
\Delta_{\mathcal S}\ge\mu_Z/M_Z,
\qquad
\gamma_{\mathcal S\mathcal R}^2\le\lambda_Z/m_Z.
\]

If the Route-G-controlled orthogonal remainder has floor \(d_{\mathcal R}>0\), a sufficient global finite-regulator activation condition is
\[
\boxed{
\lambda_ZM_Z<\mu_Zm_Zd_{\mathcal R}.
}
\]

A preliminary Safe Quotient gate is also explicit: a structural \(Z\)-null direction may not be silently erased if it has nonzero physical Gram norm. Equality of structural and physical kernels is the strong faithful-bridge condition for the selected frame.

A companion theorem shows that gauge-invariant Wilson/Route-L loop witnesses give lower bounds on lattice gauge-orbit distance. For a closed-loop class-function witness,
\[
d_{\rm orb}([X],[Y])
\ge
\frac{|W_\gamma(X)-W_\gamma(Y)|}
{L_\varphi\sqrt{\ell_\gamma}}.
\]
This lets the BPST-slice packet program test finite-regulator gauge inequivalence using a finite observable vector before attempting full orbit minimization.

The continuum difficulty remains unchanged: the witness/Gram/energy/residual constants and the Route-G remainder floor must be regulator-uniform, and the resulting finite-regulator bound must still pass through the separate continuum Hilbert/form/vacuum convergence gate.

The Yang–Mills existence and mass-gap problem remains open; no proof claim is made.


## BPST small-plaquette Wilson witness — 21 September 2026

The private branch now gives the first explicit finite-regulator gauge-nonredundancy test for the BPST-slice packet family.

Under the stated standard \(SU(2)\subset SU(3)\) embedding and normalized Wilson-trace convention, a sufficiently small spatial plaquette has
\[
1-w_p
=
\frac43 a^4
\frac{\rho^4}{(|\mathbf x-\mathbf z|^2+\rho^2)^4}
+O(a^5).
\]
At the center this becomes
\[
1-w_p(z,\rho)
=
\frac43 a^4\rho^{-4}
+O(a^5\rho^{-5}).
\]

Consequently, two fixed distinct scales \(\rho_1\ne\rho_2\) at the same center give different gauge-invariant Wilson witnesses on every sufficiently fine regulator, and therefore cannot lie on the same lattice gauge orbit. Distinct centers are similarly detected by their different local curvature-squared/Wilson profiles, apart from any separately imposed spatial-symmetry identification.

This closes only a qualitative finite-regulator redundancy question. The elementary-plaquette witness difference is \(O(a^4)\), so it does not by itself yield a regulator-uniform coherent-frame bound. The next quantitative target is a richer Route-L witness vector or a direct gauge-orbit estimate controlling
\[
\Xi_r=d_{{\rm orb},r}^2/(2B_Gt_r)
\]
while retaining uniform energy and residual estimates.

The Yang–Mills mass-gap problem remains open.
