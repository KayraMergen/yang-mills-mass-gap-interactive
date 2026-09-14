# v6 — Research Interface Implementation Plan

Status: **implementation-ready v6 plan**, 2026-09-14. The design baseline and mandatory amendments are decision-locked. This document sequences future production work; it does not itself modify or deploy production files.

The Millennium Problem remains open. These gates concern research-software quality and scientific communication. Passing any gate cannot establish an H1 claim or solve the mathematical problem.

## 1. Governing documents and scope

| Document | Responsibility |
|---|---|
| [Design audit](V6_DESIGN_AUDIT.md) | Baseline evidence, defects A01–A18, major rationale D01–D06 |
| [Information architecture](V6_INFORMATION_ARCHITECTURE.md) | Routes, research activities, entity navigation and provenance continuity |
| [Design system](V6_DESIGN_SYSTEM.md) | Modern research-software composition, type/math systems, surfaces, result captions and accessibility |
| [Experiment architecture](V6_EXPERIMENT_ARCHITECTURE.md) | Instrument contract, exact models, result semantics, dependency registry, reproduction |
| This plan | Dependency order, work boundaries, amendment traceability and validation gates |

Required v6 delivery includes all ten current destinations, an improved research shell, publication-grade equations, large analytical instruments, graph/list/outline consistency, exact scalar arithmetic, truthful result records, responsive/accessibility corrections, and preserved publication/audit infrastructure.

Out of scope: a Yang–Mills solver, inferred physical measurements, an eigensolver, an undefined RG recurrence, automated mathematical falsification, claims of proof completion, an account/backend system, a hosting migration, a new content license, PWA expansion, or an invented v6 archive DOI.

## 2. Amendment traceability

| User requirement | Mandatory implementation outcome | Evidence gate |
|---|---|---|
| U1 — Instrument contract | Every instrument exposes Question → Assumptions → Inputs → Model → Derived quantities → Visualization → Interpretation → Epistemic status → Reproduction record | G1 schema/content review; G4 instrument specimens; G6 workflow verification |
| U2 — Result-local status | Class, supplied/derived origin, illustrative/hypothetical/established scope and dependencies travel with each result, screenshot surface, copy, export and share | G2 records; G5 artifact tests; G6 capture/assistive-technology checks |
| U3 — Honest RG | Remove existing multistage animation; signed single-step transfer/error budget with zero and negative values | G1 model spec; G4 plot/value parity; G6 no-stage regression |
| U4 — Exact declared precision | Scaled-integer arithmetic for current scalar models; decimal dependency only if a documented need exceeds this representation | G2 exact zero/small-positive/negative tests and dependency review |
| U5 — Three consistent representations | Interactive graph, linear dependency list and accessible semantic outline generated from one edge registry | G2 registry tests; G4 three-way semantic parity; G6 manual navigation |
| U6 — Truthful failure terminology | Rename prose destination “Failure Modes / Falsification Criteria,” retaining falsify route; executable test label requires a complete reproducible test specification | G1 vocabulary; G4 content semantics; G6 bilingual labels |
| U7 — Modern research software | Sans UI, separate supported math system, selectively used editorial serif | G3 typography specimens; G6 visual acceptance |
| U8 — Analytical dominance | Primary research object receives dominant space; compact controls and metadata support it | G3 layout specimens; G4 instruments; G6 responsive inspection |

Epistemic status is not one overloaded enum. Preserve E0/E1/H1/T0; store quantity origin, representational scope, hypothetical dependencies, execution status, and numeric sign separately. A derived T0 value does not become E1 because its arithmetic is exact.

## 3. Proposed frontend and delivery boundary

Retain a static frontend and the existing canonical domain. A framework migration is not required. Extract small vanilla modules with explicit scientific-content, state, model, rendering and export boundaries. Proposed source responsibilities:

| Module group | Responsibility |
|---|---|
| content | Claims, equations, assumptions, typed dependency edges, sources, obligations, failure criteria, TR/EN text |
| state | Validated scenario store, defaults, route registry, history, legacy migrations, selection and comparison |
| models | Pure scalar evaluators, exact decimal-unit arithmetic, signs, blockers and derivation steps |
| views | Shell, controls, result surfaces, interactive graph, linear list, semantic outline, spectrum and RG |
| math | Selected renderer adapter, reviewed macros, typesetting lifecycle, accessible description and failure state |
| records | Canonical serialization, contextual clipboard records, figure/report/JSON export, review draft preparation |
| styles | Tokens, layout primitives, UI typography, editorial typography, figures, focus, responsive and print |

Names describe proposed boundaries, not files created in this audit.

If source modules require a developer build, choose a small pinned build pipeline that emits a conventional static index.html, local stylesheet, classic bundled script, and local math/font assets. Avoid making browser ES-module loading under file:// the only supported path. Preserve the useful direct-file reading experience; verify full interactive file-open behavior and either supply a portable bundle or explicitly document any supported-mode limitation before release. Static HTTP use on GitHub Pages remains the primary deployment path.

Do not introduce remote runtime APIs, a server-side router, or dependencies for six-node graph layout and elementary arithmetic. If math rendering adds a substantial payload, measure it before adopting a second library or broad framework. Keep source data inspectable and tests callable with a documented local command.

### IP-01 — Modular internals with static distribution

- **Current problem:** the 94 KB monolith duplicates scientific relationships across strings, DOM and drawings, while structural CI cannot test model boundaries.
- **Proposed solution:** isolate content, pure evaluators, state, views and records; preserve a static distributable and the canonical origin.
- **UX rationale:** shared scenarios and output records become reliable without adding accounts or operational complexity.
- **Visual rationale:** responsive surfaces and typography can evolve consistently without entangling scientific arithmetic.
- **Engineering implications:** introduce only the necessary developer build, pinned assets, registry tests and reproducible static output; characterize direct-file compatibility explicitly.
- **Scientific-integrity implications:** scientific logic has a reviewable location; no renderer or CSS state can determine a claim's evidence class.

### IP-02 — Preservation and release gates as first-class work

- **Current problem:** current CI checks presence rather than meaning; version fields and software checks can be read as scientific authority.
- **Proposed solution:** separate website, model, schema and archive identities; test the complete publication and result chain before release.
- **UX rationale:** reviewers retain stable citations, working links and reproducible scenario context.
- **Visual rationale:** publication metadata appears once in an orderly masthead and locally where it supports a result.
- **Engineering implications:** metadata assertions, behavioral checks, content/visual review, a static rollback artifact and a canonical-domain smoke test.
- **Scientific-integrity implications:** archive DOI and CI never certify the hypothetical program; unresolved proof obligations remain explicit throughout release.

## 4. Phases and exit gates

The sequence below is the critical path. Work with no shared dependencies may proceed together after its prerequisite gate. Keep changes reviewable by phase; don't combine a model correction, source reinterpretation and visual overhaul in an unreviewable patch.

### Phase 0 — Accepted baseline and amendment reconciliation

State: **complete**. The audit baseline is accepted; U1–U8 are reconciled across the companion specifications and the final decision lock is recorded.

Deliver the five requested documents, distinguish live/source/calculated findings from untested risks, retain the baseline commit and known regressions, and reconcile names, contract order, status dimensions and artifact behavior.

**G0 — PASS when this specification set is adopted:** all five documents exist; all eight amendments have a concrete destination and acceptance test; the missing experiment architecture is supplied; no production file has been changed by the specification step. Implementation may then begin at Phase 1.

### Phase 1 — Scientific content and model specification

Owners: scientific-content reviewer and research-software engineer, with designer participation for wording/visibility.

- Build the reviewed claim/equation/source/assumption/obligation registry, preserving existing IDs or explicit aliases.
- Specify edge types and the actual intended dependency graph. Resolve the drawn N4→N6 discrepancy. Any refined existence/axiom branch remains a documented proposal until reviewed.
- Review operator/projection domains, normalization, mixture orthogonality, scale dependence, and gross-versus-net limit expressions.
- Specify the nine-part research-instrument contract for each instrument and the mandatory result-local status fields.
- Adopt “Failure Modes / Falsification Criteria” for current prose. Mark criteria and optional illustrative scenarios honestly.
- Define the signed single-step RG scalar model, normalized-state assumption and complete result interpretation; exclude the old stage sequence.
- Record unavailable presentation metadata as unresolved provenance, without inventing a source or halting unrelated software preparation.

Rationale: audit D02/D04; experiment EXP-01/03/04/05/07.

**G1:** every scientific statement has a class, scope, dependencies and source or explicit missing-source record. Every instrument has the complete contract and specified positive/zero/negative/blocked/invalid states. Review confirms that no finite scalar test is presented as uniform continuum control. Required corrections are documented; unresolved H1 mathematical obligations are allowed only with explicit unresolved status.

### Phase 2 — Deterministic state, arithmetic and dependency foundation

Owners: frontend architect and research-software engineer.

- Extract pure model evaluation and typed result records from the DOM.
- Implement scaled-integer arithmetic at the declared 0.01 input precision: hundredth-unit inputs, ten-thousandth-unit products, residual/defect scaled to matching units. Use integer sign as authoritative; floats may position graphics only.
- Define lexical input parsing, domains and precision. Distinguish missing, blank, explicit zero, malformed, out-of-range, excess-precision and unsupported-version values. Disclose recoveries/clamping; do not silently convert absence to zero.
- Implement central state, named presets, complete blockers, independent/linked spectral modes, and explicit parameter origin.
- Identify immutable semantic scenarios with a digest of canonical exact inputs, premises, linkage modes, normalization, model versions and content revision. Each result and comparison references its own scenario identity; exports include the full snapshot. Keep presentation-only fields out of the digest and reject stale result-to-scenario associations.
- Preserve v5 query keys and destinations through migrations; add complete model/schema/content identity, language, selection and record state.
- Validate graph topology and generate common selectors for the three dependency representations.
- Add structural and model tests before moving the existing views onto these boundaries.

A decimal package is not the default. Adopt one only if a reviewed new input/model requirement cannot be safely represented with the declared scaled integers; document supported precision, overflow strategy, payload and reproducibility impact. Current bounded scalar products are comfortably within JavaScript's safe-integer range. Do not introduce an arbitrary epsilon to hide the existing sign bug.

**G2:** exact arithmetic, parser, preset, graph and serialization cases pass. A result's scientific class is immutable under parameter changes. All derived displays consume one model record, and invalid/stale states cannot be exported as current.

Required examples include:

| Case | Expected behavior |
|---|---|
| Bare URL | Named defaults 0.65, 1.00, 0.12 remain unless a reviewed default change is explicitly documented |
| Explicit zeros | Remain zero; are not treated as missing |
| 0.10 × 0.20 − 0.02 | Exact zero; no positive conclusion |
| 0.01 × 0.01 − 0 | Exact +0.0001, displayed distinctly from zero |
| 0.10 × 0.20 − 0.03 | Exact −0.0100; no positive lower-bound guarantee |
| A4 withheld | Conditional descendants blocked; H1 class unchanged |
| A6 withheld with positive scalar | Scalar still shown; continuum conclusion unavailable |
| Lab-linked Delta 1.8000 or 0.0001 | Exact value preserved independently of supplied Delta's [0,1] / 0.01 limits; labelled axis adjusts without clipping or quantization |
| Unknown model/schema | Clear unsupported-state recovery; no silent reinterpretation |
| Model change with old result | Record identified as previous/incompatible until reviewed migration or recomputation |

### Phase 3 — Research shell, typography and equation specimens

Owners: product designer and frontend architect.

- Implement the three activity groups while retaining all ten view keys and stable entity destinations.
- Add deliberate navigation history, focus management, skip navigation, current-page semantics and local widget shortcuts.
- Implement spacing/layout primitives and separate UI, editorial and math typography.
- Build realistic specimens for overview, one instrument, graph/inspector, obligation table, equation, source entry and result record.
- Benchmark MathJax/STIX2 against the KaTeX alternative on the reviewed equation corpus; select one renderer and its accessible/error/print behavior.
- Preserve the publication masthead and result-local scope; no credibility badges or serif styling should imply publication or proof status.

Rationale: audit D01/D02/D05; design-system DS-01/02/03.

**G3:** specimens pass visual review at 390, 768 and 1440 px; equation corpus renders without missing qualifiers; fonts/glyphs work in TR/EN; analytical surfaces visibly dominate. Renderer choice is justified by measured payload, interaction and accessibility evidence. No document overflow is accepted as a layout workaround.

### Phase 4 — Instruments and all three dependency representations

Owners: research-software engineer, frontend architect and designer; scientific reviewer checks interpretation.

- Rebuild the assumption instrument with exact entry, complete trace/blockers, one dominant derivation/bound surface and a consistent baseline.
- Generate the interactive graph, topologically ordered dependency list and semantic outline from the same typed edge registry. Render real headings, relationship lists and cross-links in the outline; preserve DAG relationships rather than flattening them into a misleading tree.
- Rebuild schematic spectrum with supplied versus lab-linked modes, explicit normalization and no invented measured data.
- Replace RG stage animation and timer with the signed single-step transfer/error budget. Values, zero line, chart geometry and ledger share the same result.
- Connect failure criteria to affected claims and the evidence needed to establish an objection. An illustrative preset may be applied only where the declared model represents that premise change.
- Ensure all nine contract elements and result-local scope survive every responsive state.

Rationale: experiment EXP-02–07; design-system DS-02/04.

**G4:** graph/list/outline agree on every node ID, directed edge, edge type, predecessor/successor relationship and scoped status. The inspector/trace is consistent too, but cannot substitute for any of the three required views. Every model boundary has matching geometry and text. No old RG stage animation remains. Current prose carries the exact “Failure Modes / Falsification Criteria” destination name; no pass/fail “test” outcome is fabricated.

### Phase 5 — Reproduction, scientific review and publication continuity

Owners: research-software engineer and scientific-content reviewer.

- Capture a canonical scenario and exact result record; support baseline/current comparison with aligned scales and explicit changed inputs.
- Implement contextual value/equation/trace copying, complete scenario sharing, JSON/report export and self-contained figure capture.
- Use status captions inside figure/capture bounds. Shared state preserves supplied/derived origin and model identity; restored derived results are recomputed and remain T0.
- Make methodology readable and contextual; connect source locators, missing evidence, obligations and review links.
- Prepare review drafts with target ID, model/scenario context and existing scientific-review fields. Submission remains a deliberate user action in the existing GitHub workflow.
- Preserve all DOI/ORCID/citation/license/metadata invariants listed below.

Rationale: experiment EXP-06/07; information architecture IA-04 and publication sections; design-system DS-03.

**G5:** re-import reproduces canonical inputs and exact model results; each copied value includes class, origin, scope, model and premises; exported figures and reports remain scientifically truthful when viewed alone. Screenshots of complete result surfaces retain their local scope. App-generated captures cannot omit it. No metadata from an old archive is falsely assigned to a v6 result.

### Phase 6 — Responsive, accessibility, performance and scientific review

Owners: frontend QA/design reviewer and scientific-content reviewer.

Complete the cross-cutting matrix in section 5. Resolve every P1 audit defect and material P2 issue required by the redesigned surfaces. Inspect zero/negative/blocked/unavailable states with the same care as the baseline.

**G6:** keyboard and assistive-technology review, bilingual reflow/zoom, print/presentation, graph parity, output/capture integrity, performance and scientific wording checks pass with recorded evidence. Any unresolved release-blocking failure holds the release; an unavailable source remains visibly unresolved and never becomes a verified citation by assumption.

### Phase 7 — Versioned release preparation and canonical deployment

Owners: maintainer, with engineering verification. This is future work, outside the current documentation task.

- Prepare a reviewable static release artifact, changelog, migration notes, supported-environment statement and rollback artifact.
- Preserve canonical URLs and validate CNAME, metadata, robots/sitemap, .nojekyll, asset paths and direct-load query/fragment behavior.
- Repair the historical 404 return path to canonical root.
- Update website/model versions truthfully; retain archive-specific citation metadata until a real new archived release exists.
- After authorized deployment, verify the canonical site, HTTPS, all ten routes, a migrated scenario, exact-zero case, citation actions, 404 recovery and result export.

**G7:** deployed artifact corresponds to the reviewed release; canonical navigation and publication metadata pass; rollback is ready if a smoke test fails. A software release announcement must explicitly retain hypothetical/T0/open-problem scope.

## 5. Cross-cutting validation matrix

| Area | Required evidence | Release condition |
|---|---|---|
| Instrument contract | Checklist for each instrument with all nine elements and accessible reading order | No missing assumptions/model/status/record stage |
| Scientific classification | Claim/result registry review, H1/T0 parameter-change regressions | No class promotion or implied proof completion |
| Arithmetic | Exact declared-precision boundary cases, max-domain and invalid-input cases | Numeric sign, display, plot and exported record agree |
| Dependency registry | Structural tests plus graph/list/outline relationship extraction | Exact node/edge/type parity; no dangling references or unintended cycles |
| Navigation/state | All ten routes, old query links, fragments, history, TR/EN, reset and comparisons | Restore intended view/selection/scenario; invalid URLs disclose recovery |
| Failure content | Review destination labels and each supposed test action | Prose labelled criteria; any test has executable method, assertion and record |
| Responsive | All ten views at 320/390/768/1120/1121/1440/1920 px in both languages | No horizontal page overflow; controls/conditions readable |
| Zoom/text | 200% text scaling and 400% browser zoom; 320 CSS px equivalent reflow | Reading, controls and scope remain complete |
| Keyboard | End-to-end task: navigate, set inputs, inspect dependencies, source, copy/export, review draft | Visible focus, no traps, correct focus order; no global arrow interception |
| Assistive technology | At least NVDA with a Windows browser and VoiceOver/Safari when available; record actual combinations | Equations, result status, graph outline, inputs and table relationships usable; no untested-combination pass claimed |
| Contrast | Rendered text, axis/edge/control/focus measurements; grayscale/color-vision inspection | WCAG 2.2 AA applicable criteria; product control/focus targets satisfied |
| Motion | OS reduced-motion mode with navigation and inputs | No forced smooth scrolling or automatic undefined scientific playback |
| Print/presentation | Actual print/PDF rendering and presentation screenshots, both languages | Equations, local scope, captions and citations survive; no clipping |
| Reproduction | Share/import, contextual copy, JSON/report/figure round trips | Required status and provenance preserved per result |
| Performance | Repeatable cold/warm load and route/input/typeset/export timings | Budgets below met or deliberately revised before release, with evidence |
| Publication | Metadata/citation/download checks and external-link verification | Correct canonical origin, DOI version scope, ORCID, licenses and review forms |

Test modern Chromium, Firefox and WebKit/Safari for rendering/state behavior, with at least one real touch-device review where available. Record actual tested versions and limitations. Automated accessibility checks support but do not replace the manual research workflow.

### Performance budgets and measurement protocol

These are proposed engineering budgets, not measured v5 or v6 achievements:

- App-specific JavaScript: target ≤80 KiB compressed, excluding the selected math renderer and fonts.
- Initial cold-route transfer: target ≤750 KiB compressed including required math/font assets; record cached and uncached results separately. Avoid loading unused font families or both renderers.
- Input-to-visible scalar result: target ≤100 ms at the 95th percentile in a 50-change scripted interaction run on the recorded test device; no scalar-evaluation long task over 50 ms.
- After assets are warm, route change and dynamic equation completion: target ≤200 ms at the 95th percentile over repeated representative operations.
- Lab loading targets: LCP ≤2.5 s and CLS ≤0.1 under a documented mobile test profile. Record browser, hardware, CPU/network throttling, cache state and at least three cold runs.
- Field target, if sufficient actual data becomes available: 75th-percentile INP ≤200 ms, LCP ≤2.5 s, CLS ≤0.1. A synthetic input latency sample is not field INP.

The loading/interaction/shift metrics and thresholds follow Google's Core Web Vitals guidance. [Web Vitals](https://web.dev/articles/vitals)

The audit measured source size, not these metrics. Math font completeness and readable accessible output must not be sacrificed to pass an arbitrary byte target. If the selected renderer exceeds a provisional budget, document measurements and evaluate pre-rendering, scoped loading or the alternative renderer before revising the budget. Do not silently raise it after a regression.

## 6. Publication and compatibility invariants

| Item | Required preservation |
|---|---|
| Canonical website | https://www.yangmillsresearch.org/; no new canonical host or repository-subpath routing |
| Concept DOI | 10.5281/zenodo.22739745 identifies the evolving project |
| Exact known archive | v5.0.1, DOI 10.5281/zenodo.22739746; never relabel as v6 |
| Author identity | Baran Çolakoğlu; ORCID 0009-0001-9217-0917 |
| Citation actions | Copy citation, BibTeX, CFF access; accurate distinction between software release and archived record |
| Source/review | R1–R4, explicit hypothetical source layer, methodology, scientific-review and bug issue forms, contributions and release history |
| Licensing | MIT software source; existing separate CONTENT-LICENSE policy and third-party source rights; no inferred new license |
| Hosting files | CNAME, canonical/OG/JSON-LD, robots.txt, sitemap.xml, .nojekyll, 404 recovery, manifest if retained |
| Legacy research identity | Ten view keys, claim/assumption/obligation IDs or explicit aliases, reproducible v5 scenarios with documented corrected semantics |
| Scientific scope | Open-problem statement, unresolved H1 obligations, local T0 and supplied/derived scope across every result medium |

Machine-readable schema versions, content revisions, arithmetic/model versions, website releases and DOI archives must be separately named. Existing CITATION.cff version 5.0.1 is archive-specific; do not treat it as a stale website-version field.

## 7. Reviewable increments, risks and completion

Suggested increments after implementation authorization: (1) reviewed registry/fixtures; (2) parser/exact evaluator/record core; (3) shell/typography/math specimens; (4) graph/list/outline; (5) assumption/spectrum/RG surfaces; (6) reproduction/review/publication; (7) validation and release artifact.

Each increment names the audit defect or amendment addressed, gives a before/after behavior example where useful, and reports relevant checks. Do not write tests that merely mirror CSS declarations; verify actual overflow, semantic relationships, arithmetic boundaries and exported meaning.

Principal risks are unreviewed mathematical wording gaining visual authority, status lost during copying/capture, schema migrations silently changing old scenarios, new math assets worsening loading, and adaptive layouts hiding conditions. The gates directly target these risks. Retain a known-good release artifact and migration fixtures for rollback; avoid destructive changes to published identifiers.

The current documentation milestone is complete when the five documents agree on U1–U8 and tracked production files remain untouched. The future v6 implementation is complete only after G1–G7 pass with recorded evidence. Design acceptance is not implementation acceptance, and neither is a mathematical proof.


## 8. First implementation patch boundary

The first production patch should be intentionally narrow. It must **not** start with the visual redesign. It should establish the scientific/state foundation that every later visual component consumes.

The first patch contains only:

1. canonical claim/equation/assumption/obligation/source registries and typed dependency edges;
2. exact scaled-integer scalar evaluators and parser/default fixes for A01/A02;
3. the reviewed N1–N6 edge registry and parity tests for A03;
4. removal of any model-layer dependency on the old staged RG sequence;
5. versioned scenario/result schemas with v5 compatibility parsing;
6. automated regression fixtures for positive, exact-zero, negative, blocked, missing, malformed, and explicit-zero cases.

It should avoid major CSS, navigation restyling, font loading, or equation rendering changes. The purpose is to make the future interface aesthetically ambitious **without letting CSS or DOM state define scientific semantics**.

Only after G2 passes should the shell, typography, and instrument surfaces be rebuilt.

## 9. Release-blocker summary

v6 cannot be considered releasable while any of the following remain:

- missing URL values silently becoming zero;
- rounded zero presented as a positive result;
- graph/list/outline topology disagreement;
- undefined multistage RG animation presented as analytical behavior;
- document-level horizontal overflow at required reflow widths;
- open-problem/T0 scope disappearing in mobile, presentation, capture, copy, or export;
- malformed proof-obligation semantics/table structure;
- result records that cannot reproduce all current instrument inputs and model identities;
- unqualified target/hypothetical statements that visually read as established conclusions.

These are release blockers even if the redesigned interface is visually complete.
