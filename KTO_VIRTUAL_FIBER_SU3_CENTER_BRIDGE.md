# KTO Virtual-Fiber × SU(3) Center Bridge v0.1

**Date:** 30 September 2026  
**Status:** [MODEL] / algebraic bridge only.  
**Nonclaim:** this is not a Yang–Mills mass-gap proof and does not replace Route G.

## 0. Purpose

The KTO virtual-witness-fiber construction introduces:

\[
\mathfrak V_F(y)=F^{-1}(y)
\]

as the typed family of admissible source witnesses compatible with a target datum \(y\).

For complex power maps

\[
p_n(z)=z^n,
\]

the fiber is acted on by the root-of-unity group

\[
\mu_n.
\]

For \(n=3\),

\[
\mu_3\cong \mathbb Z_3.
\]

The center of \(SU(3)\) is also

\[
Z(SU(3))
=
\{I,\omega I,\omega^2I\}
\cong\mathbb Z_3.
\]

This document asks whether the **orbit/fiber logic** of the complex-root model can provide a controlled toy model for center-sector bookkeeping in the existing KTO/Yang–Mills programme.

---

## 1. Exact complex-root theorem

For

\[
p_3:\mathbb C^\times\to\mathbb C^\times,
\qquad
p_3(z)=z^3,
\]

\[
p_3^{-1}(z^3)
=
\{z,\omega z,\omega^2 z\},
\qquad
\omega=e^{2\pi i/3}.
\]

Thus each generic target has a \(\mu_3\)-orbit of three source witnesses.

For a centered regular pentagon vertex set

\[
P_5(a)=a\mu_5,
\]

the full cube-root inverse satisfies

\[
p_3^{-1}(p_3(P_5(a)))
=
\mu_3P_5(a).
\]

Because

\[
\gcd(3,5)=1,
\]

there are exactly three distinct rotated pentagonal branches.

This is the precise mathematics visualized by the uploaded polygon-root frames.

---

## 2. SU(3) center action

For:

\[
\omega^3=1,
\]

the scalar matrices

\[
I,\omega I,\omega^2I
\]

form:

\[
Z(SU(3)).
\]

Thus a configuration space \(X\) carrying the center action has center orbits

\[
Z_3x
=
\{x,\omega x,\omega^2x\}
\]

when the stabilizer is trivial.

Orbit size is:

\[
|Z_3x|
=
\frac{3}{|\operatorname{Stab}_{Z_3}(x)|}.
\]

This is the exact group-theoretic commonality with the cube-root fiber.

---

## 3. Center-invariant observable fiber

Let:

\[
F:X\to Y
\]

be a center-invariant observable map:

\[
F(\omega^kx)=F(x).
\]

Then:

\[
Z_3x
\subseteq
F^{-1}(F(x)).
\]

Therefore every center orbit lies inside one observable fiber.

This is the permitted bridge:

\[
\boxed{
\text{root fiber } \mu_3z
\quad\leftrightarrow\quad
\text{center orbit } Z_3x.
}
\]

It is an algebraic analogy supported by an isomorphic acting group.

It is not an identity of physical objects.

---

## 4. Gauge quotient must come before physical branch claims

Let:

\[
\mathcal A
\]

be the gauge-potential/configuration space and:

\[
\mathcal G
\]

the gauge group.

A raw fiber:

\[
\mathfrak V_{\rm raw}(y)
=
\{A:F(A)=y\}
\]

may contain:
- ordinary gauge redundancy;
- center-related representatives;
- genuinely distinct physical sectors;
- unresolved KTO upper-composition classes.

The correct pipeline is therefore:

\[
\mathfrak V_{\rm raw}(y)
\to
\mathfrak V_{\rm raw}(y)/\mathcal G
\to
\left(
\mathfrak V_{\rm raw}(y)/\mathcal G
\right)
/{\equiv_T^\uparrow}.
\]

No physical multiplicity is asserted before these quotients are audited.

---

## 5. Finite-temperature center sectors are evidence, not the mass-gap result

In pure finite-temperature \(SU(3)\) Yang–Mills, the Polyakov loop transforms under the \(Z_3\) center and the deconfined phase exhibits center-related sectors with phases near:

\[
0,\qquad
+\frac{2\pi}{3},\qquad
-\frac{2\pi}{3}.
\]

This shows that the same abstract threefold center structure has a genuine physical role in \(SU(3)\) gauge theory.

However:

\[
\boxed{
Z_3\text{ center-sector structure}
\not\Rightarrow
\text{four-dimensional mass gap}.
}
\]

The Clay problem concerns the continuum quantum Yang–Mills theory and a positive spectral gap above the vacuum.

Center structure may constrain a sector architecture, but it does not close Route G's spectral/continuum debts.

---

## 6. Compatibility with Route G

Route G uses:

\[
E=D^{1/2}(I+K)D^{1/2}
\]

with a strong positive constitutive anchor \(D\) and controlled cross-sector correction \(K\).

The virtual-fiber/center construction must therefore enter only as a **sector-label / quotient / symmetry bookkeeping layer** unless a direct theorem connects it to:
- \(D\);
- \(K\);
- coercivity;
- the selected physical Hessian/energy form;
- continuum gap transport.

At v0.1 no such theorem is claimed.

Thus:

\[
\boxed{
\text{virtual fiber}
\not\Rightarrow
\text{positive gap certificate}.
}
\]

---

## 7. Candidate sector decomposition

If a regulated physical configuration space admits a nontrivial center action, one may consider:

\[
X
=
\bigcup_{\chi\in\widehat{Z_3}}
X_\chi
\]

or a center-orbit decomposition, depending on the representation.

A future Route-G-compatible question is:

> can the physical form \(E\) and anchor \(D\) be decomposed or block-controlled relative to \(Z_3\)-typed sectors without introducing unsafe quotienting?

This is a precise research question.

It is not yet a theorem.

---

## 8. Triality / center charge warning

The relevant \(Z_3\) structure in \(SU(3)\) is naturally associated with center charge / \(N\)-ality-type information.

The complex-root polygon does not itself encode:
- color charge;
- gluon dynamics;
- Wilson loops;
- confinement;
- Gauss-law constraints.

Only the abstract \(\mu_3\cong Z_3\) action is imported.

Any further identification requires a new bridge.

---

## 9. Virtual sector definition for Yang–Mills

For a selected gauge-invariant observable family:

\[
Obs_{\rm GI},
\]

define:

\[
\mathfrak V_{\rm YM}(y)
=
\{
X:
Obs_{\rm GI}(X)=y
\}.
\]

Then define the KTO-typed physical virtual fiber:

\[
\boxed{
Virt^{\rm YM}_T(y)
=
\left[
\mathfrak V_{\rm YM}(y)/\mathcal G
\right]_{\rm Adm}
/{\equiv_T^\uparrow}.
}
\]

This means:

> admissible gauge-reduced upper-composition classes compatible with the same selected physical data.

It does not mean:
- unreal gauge fields;
- hidden physical worlds;
- simultaneous physical realization of every class.

---

## 10. Data-structure guards

Any use in the Yang–Mills programme must satisfy:

1. **Type guard**
   \[
   \text{root}\neq\text{gauge configuration}.
   \]

2. **Gauge guard**
   Raw multiplicity is not physical multiplicity.

3. **Observable guard**
   The observable family defining the fiber must be explicit.

4. **Reflection guard**
   Equality of selected observables does not imply physical equivalence unless a reflection theorem is supplied.

5. **Route-G guard**
   No center/fiber argument substitutes for coercivity or continuum transport.

6. **First-order guard**
   Branch multiplicity is classical witness multiplicity, not contradiction.

7. **No existential-to-physical leap**
   A mathematically defined branch need not be physically realized.

---

## 11. Concrete next tests

### YM-VF1 — Center action on the selected regulated variables

Identify precisely where \(Z_3\) acts in the current finite-regulator model.

### YM-VF2 — Gauge versus center quotient

Determine whether the center action is:
- gauge redundancy;
- global symmetry;
- boundary-condition-sensitive symmetry;
- sector label

in the exact Route-G setup.

### YM-VF3 — Observable separating family

Find a gauge-invariant observable family that distinguishes the physically relevant center structure without collapsing Route-G certificates.

### YM-VF4 — Block/coercivity compatibility

Test whether \(D\) or \(E\) admits a useful center-adapted block form.

### YM-VF5 — Leakage control

If center-labeled sectors are introduced, quantify cross-sector leakage and determine whether a condition analogous to:

\[
\gamma^2<\Delta_1\Delta_2
\]

is relevant or whether symmetry enforces exact block separation.

### YM-VF6 — Continuum persistence

Determine whether any center/fiber structure used in the regulator survives the continuum limit in the physical Hilbert-space construction.

---

## 12. Current conclusion

The uploaded complex-root construction gives a mathematically exact threefold fiber:

\[
\mu_3z
\]

and \(SU(3)\) carries the isomorphic center group:

\[
Z(SU(3))\cong\mu_3.
\]

Therefore a KTO center-fiber toy bridge is justified at the algebraic level.

The current safe statement is:

\[
\boxed{
\text{shared }Z_3\text{ orbit structure}
\Rightarrow
\text{candidate common sector calculus}
}
\]

but not:

\[
\boxed{
\text{shared }Z_3\text{ orbit structure}
\Rightarrow
\text{mass-gap mechanism}.
}
\]

The latter remains an open proof obligation.
