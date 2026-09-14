# v6 — Experiment Architecture

Status: **final v6 experiment and scientific-interaction specification; implementation-ready**. This document defines the behavior, scientific scope, exact arithmetic, result records, and reproducibility requirements for the v6 interactive research instruments. It does not claim a Yang–Mills solution and does not convert hypothetical premises into established mathematics.

The Yang–Mills existence and mass-gap Millennium Problem remains open. Every interactive numerical output defined here is a **T0 illustrative/model output** unless an individual record explicitly identifies an E1 established background statement. H1 premises remain unproved within this program.

Read with `V6_DESIGN_AUDIT.md`, `V6_INFORMATION_ARCHITECTURE.md`, `V6_DESIGN_SYSTEM.md`, and `V6_IMPLEMENTATION_PLAN.md`.

## 1. Mandatory instrument contract

Every v6 instrument implements the same semantic sequence:

**Question → Assumptions → Inputs → Model → Derived quantities → Visualization → Interpretation → Epistemic status → Reproduction record**

This sequence is the contract of the research object, not a requirement for nine bordered cards. The visualization may dominate the page visually, but the reading/focus/export order remains semantically complete.

Every result surface also carries a concise local scope line before the full Epistemic status section. A user must not need a distant sidebar to discover that an output is illustrative or conditional.

## 2. Shared scientific data model

The application uses reviewed registries rather than duplicating scientific meaning across HTML, SVG, and JavaScript strings.

### 2.1 Entity types

- `claim`: N1–N6 and any future reviewed claim nodes.
- `assumption`: A1–A6 and future explicitly versioned assumptions.
- `equation`: reviewed TeX/plain-text mathematical records.
- `obligation`: G1–G6 and future proof/review debts.
- `source`: bibliographic/provenance records, including explicit unavailable-artifact status.
- `failureCriterion`: possible ways a claim/program bridge could fail.
- `instrumentModel`: deterministic T0 model definition and arithmetic policy.

Every entity has a stable ID, bilingual label/description, epistemic class where applicable, dependencies, source locators or explicit missing-source status, and a content revision.

### 2.2 Epistemic dimensions

Do not overload one status field. Store separately:

- **claim class:** E0 / E1 / H1 / T0;
- **quantity origin:** supplied / derived;
- **representation scope:** illustrative / conditional-model / established-background;
- **hypothetical dependencies:** referenced H1 IDs;
- **execution state:** current / stale / blocked / invalid / unavailable;
- **numeric sign:** positive / zero / negative / not-applicable.

A positive numeric sign never implies proof success. Exact arithmetic never upgrades H1 to E1.

## 3. Authoritative dependency registry

The v6 baseline DAG is reviewed as:

- N1 → N3
- N2 → N3
- N3 → N4
- N4 → N5
- N5 → N6

N1 and N2 are independent upstream inputs to N3. N4 does **not** bypass N5. If scientific review changes this topology, the registry revision changes explicitly; layout code cannot invent, omit, or reroute an edge for aesthetics.

Each edge stores an edge type, at minimum `prerequisite` or another reviewed relation type. The following four consumers must derive from the same registry:

1. interactive spatial graph;
2. linear topological dependency list;
3. accessible semantic outline;
4. inspector/trace predecessor-successor data.

Parity tests compare node IDs, directed edges, edge types, predecessor/successor sets, classes, obligations, and source links across all four consumers.

## 4. Exact numerical policy

### 4.1 Parsing

For current scalar models, user-entered decimal inputs are parsed lexically at a declared precision instead of first becoming IEEE-754 binary floats.

The parser distinguishes:

- missing value;
- blank value;
- explicit zero;
- malformed value;
- out-of-range value;
- excess precision;
- supported valid value.

Missing values receive documented defaults. Explicit zero remains zero. Recovery/clamping is visible and recorded.

### 4.2 Scaled integers

Current base input precision is hundredths unless an instrument explicitly declares another precision.

- Store `0.65` as integer `65` at scale 100.
- Multiplying two scale-100 quantities produces a scale-10,000 integer product.
- Residual/defect quantities are converted to the same output scale before subtraction.
- The integer result determines sign.
- Presentation rounding occurs only after sign/status evaluation.

The boundary case `0.10 × 0.20 − 0.02` therefore evaluates exactly to zero, never to a tiny positive binary remainder.

Linked values may carry higher declared precision (for example four-decimal derived values). The record stores both integer value and scale so `0.0001`, `0.0000`, and `1.8000` remain distinct and reproducible.

### 4.3 Graphics

Floating-point conversion may be used only to map an already-computed exact result onto pixels. Geometry cannot decide numeric sign, blocking, or epistemic status.

## 5. Assumption laboratory

### 5.1 Question

Within the declared toy/hypothetical scalar model and stipulated premise set, what signed candidate lower-bound arithmetic is produced, and which theoretical conclusions remain blocked by unstipulated or unresolved premises?

### 5.2 Assumptions

A1–A6 remain individually addressable and keep their scientific classes. UI language uses **“stipulated”** or **“withheld”**, not “proved/unproved by the checkbox.” A preset may be named “All premises stipulated”; it must not read as proof completion.

### 5.3 Inputs

The current baseline preserves legacy inputs:

- `C_G` / `cg` — supplied normalized coefficient;
- `Λ_YM` / `lym` — supplied normalized scale;
- `r` — supplied residual/error term.

Defaults remain `0.65`, `1.00`, `0.12` unless a later reviewed content decision changes them. URL omission never converts them to zero.

### 5.4 Model

The T0 scalar arithmetic is:

`gross = C_G × Λ_YM`

`candidate = gross − r`

This finite scalar model is not a continuum uniform-coercivity theorem. It is an illustrative arithmetic surface attached to hypothetical premises.

### 5.5 Derived quantities

Record:

- exact gross product;
- exact residual;
- exact signed candidate value;
- sign;
- active blockers;
- conditional descendants available/unavailable under the stipulated premise set.

The scalar may still be displayed when a premise needed for a downstream theoretical conclusion is withheld, but the interpretation must state that the conclusion is blocked.

### 5.6 Visualization

The primary object is a bound/derivation surface, not decorative metric cards. It shows gross contribution, residual subtraction, signed candidate, and a complete reasoning trace. Zero and negative states have equal visual fidelity to positive states.

### 5.7 Interpretation

Examples:

- positive scalar: “The declared T0 arithmetic is positive under the supplied values. This does not establish a uniform continuum lower bound.”
- exact zero: “The declared T0 arithmetic is exactly zero; no positive candidate lower bound follows from this scalar calculation.”
- negative: “The declared T0 arithmetic is negative; this scenario does not produce a positive candidate lower bound.”
- blocked premise: “The scalar arithmetic is shown, but the listed theoretical inference is unavailable because premise A… is withheld/unresolved.”

## 6. Spectral-support instrument

### 6.1 Question

How should a hypothetical positive lower bound be represented as a spectral exclusion interval, and why does norm-closeness to the vacuum not by itself eliminate vacuum-orthogonal spectral support?

### 6.2 Inputs and modes

Two explicit modes:

1. **Supplied Δ:** the user supplies an illustrative positive/zero value within the declared input domain.
2. **Lab-linked Δ:** the instrument references a captured/current Assumption Lab result and its exact scale/model identity.

A linked negative or blocked lab result does not silently become a gap. The interface shows “no positive linked Δ available” while preserving the signed source value in the ledger.

### 6.3 Model

This instrument is schematic. It does **not** compute the Yang–Mills Hamiltonian spectrum and does not invent eigenvalues.

The target visual statement is the excluded open interval:

`Spec(H) ∩ (0, Δ) = ∅`

when a positive illustrative Δ is supplied/linked for display.

The mixture example uses an explicitly normalized form such as

`ψ_ε = √(1−ε²) Ω + ε φ`, with `φ ⟂ Ω`, `||Ω|| = ||φ|| = 1`,

and is labelled explanatory rather than computational evidence for the gap.

### 6.4 Visualization

Use a wide labelled energy axis with zero, Δ, and clearly open interval endpoints. No fake eigenvalue dots, uncertainty bands, or measured spectrum are added.

For very small positive Δ, provide a labelled detail/inset or rescaled view rather than imposing a false minimum width. For Δ larger than the old supplied slider domain, expand the axis; do not clip linked values such as `1.8000`.

## 7. RG transfer instrument

### 7.1 Question

For the declared single-step illustrative transfer inequality, what signed lower-budget value follows from the supplied transfer factor, coarse energy term, and defect?

### 7.2 Inputs

- `Z` — supplied transfer factor;
- `E_c` — supplied coarse energy quantity;
- `ε_R` — supplied defect term.

The local model states the normalized-state convention for the displayed scalar form. If a norm factor is retained explicitly in a reviewed equation, the input/normalization record must represent it rather than hiding it.

### 7.3 Model

The v6 T0 scalar budget is:

`gross_transfer = Z × E_c`

`signed_net = gross_transfer − ε_R`

This is a **single-step illustrative budget**, not an iterative renormalization-group flow, trajectory, or continuum proof.

### 7.4 Visualization

Use one signed common scale with a visible zero line. Show gross transfer, defect subtraction, and net result on the same quantitative basis. Zero and negative values are drawn faithfully; no minimum bar fill, clipping, saturation, or green “success” treatment is allowed.

The old staged bars, timer, and arbitrary per-stage decrement are removed.

### 7.5 Interpretation

Positive, zero, and negative language mirrors the exact arithmetic and always includes the statement that uniform RG reflection-back/coercivity remains an unresolved mathematical obligation.

## 8. Failure Modes / Falsification Criteria

The existing five records are treated as conceptual failure criteria, not executed tests.

Each record contains:

- stable ID;
- criterion statement;
- affected claim IDs;
- evidence required to establish the objection;
- downstream implication;
- optional illustrative scenario link;
- source/review status.

An item may be labelled an **executable test** only when it additionally has defined inputs/fixtures, a method, expected assertion, actual result, and a reproducible record. Applying an illustrative checkbox/preset does not create a mathematical counterexample.

## 9. Scenario and result records

### 9.1 Scenario envelope

A canonical scenario record contains at least:

```text
schemaVersion
contentRevision
language
activeView
selection
instrumentStates
assumptionStates
inputValues { exactInteger, scale, displayedUnit }
linkageModes
normalization
modelVersions
```

Presentation-only fields such as transient hover state do not affect scientific identity.

### 9.2 Result record

Each captured result contains:

```text
resultId
instrumentId
scenarioIdentity
modelVersion
contentRevision
suppliedInputs
exactDerivedValues
sign
executionState
claimClass
quantityOrigin
representationScope
hypotheticalDependencies
sourceLocators
openObligations
normalization
interpretation
openProblemNotice
```

Derived values from a URL/import are never trusted as authoritative. Restore exact inputs and model identity, then recompute locally with the supported model. Unsupported model/schema versions produce a visible recovery state rather than silent reinterpretation.

### 9.3 Staleness

Changing any model-relevant input or premise marks an existing captured result stale until recomputation/capture. Stale/invalid records cannot be exported as current.

## 10. Copy, share, capture, export, and compare

### Copy

There is no bare “copy number” action for scientific results. Copy creates a compact contextual statement containing value, origin, class, model, premises, normalization, and limitation.

### Share

Shared URLs/scenario files carry inputs, modes, language, model/schema identity, and selection. Classification comes from the local reviewed registry after restore, not from an untrusted URL label.

### Capture

App-generated figure/result captures include within their bounds:

- result/figure title;
- exact displayed values;
- axis/normalization;
- supplied/derived status;
- T0/H1/E1 scope as applicable;
- model/scenario identity;
- concise no-proof/open-problem limitation.

### Export

Machine-readable JSON and human-readable report exports use the same result record. Human reports include derivation and source/obligation context. Publication/archive DOI metadata is not attached as if it certified a v6 result.

### Compare

Comparison requires two named captured scenarios/results. Align scales where visual comparison is meaningful, list changed inputs/premises, and keep each result's own model/status record. Do not compare a stale or incompatible model result as if it were current.

## 11. Interaction and accessibility semantics

- Exact numeric fields are the authoritative inputs; sliders are optional convenience controls that snap to the declared precision.
- Premises use native checkbox/switch semantics grouped in a fieldset with a legend.
- Each plot has a text/ledger equivalent containing the same values and sign.
- Graph/list/outline links reach every node.
- Live announcements occur after a committed change, not at every pointer movement.
- Invalid, blocked, zero, negative, stale, and unavailable states have explicit text.
- Reduced motion removes any nonessential state transition; no research result depends on animation.

## 12. Required regression fixtures

At minimum, automated/model tests cover:

| Case | Expected |
|---|---|
| Bare URL | Lab defaults remain 0.65 / 1.00 / 0.12 |
| Explicit zero inputs | Zero preserved as supplied value |
| `0.10 × 0.20 − 0.02` | exact zero; no positive conclusion |
| `0.01 × 0.01 − 0` | exact `+0.0001` |
| `0.10 × 0.20 − 0.03` | exact `−0.0100` |
| Premise required downstream withheld | scalar may remain visible; downstream interpretation blocked |
| Lab-linked positive Δ | exact source precision preserved |
| Lab-linked zero Δ | no positive excluded interval |
| Lab-linked negative result | signed source retained; no gap interval fabricated |
| RG positive/zero/negative | ledger, sign text, and geometry agree |
| Unknown schema/model | visible unsupported-state recovery |
| Restored result after model change | stale/incompatible until reviewed migration/recompute |
| Graph registry | graph/list/outline/inspector edge parity |

## 13. Non-goals

v6 does not implement:

- a Yang–Mills solver;
- a Hamiltonian eigensolver;
- a measured physical spectrum;
- a lattice simulation;
- an undefined multiscale RG recurrence;
- automatic theorem proving;
- automated mathematical falsification;
- a percentage proof-completion score;
- a backend/account system.

A future instrument that adds any of these requires a separate scientific/model specification and review.

## 14. Acceptance

The experiment architecture is accepted only when:

1. every instrument implements the full nine-part contract;
2. exact arithmetic boundary tests pass;
3. visual geometry and numerical ledgers are generated from the same result records;
4. result-local status survives copy/share/capture/export;
5. graph/list/outline/inspector parity passes;
6. positive, zero, negative, blocked, invalid, stale, and unavailable states are all designed and tested;
7. no interface wording or animation implies a computation that the model does not perform;
8. the open Millennium Problem and unresolved H1 obligations remain explicit.
