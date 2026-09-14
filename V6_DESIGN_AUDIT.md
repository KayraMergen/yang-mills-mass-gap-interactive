# v6 — Research Interface Design Audit

Audit date: 2026-09-14. Local baseline: commit `5b0b7f4`, website/repository v5.1.2. Live interface: [canonical website](https://www.yangmillsresearch.org/). Status: **final v6 baseline, accepted and decision-locked for implementation**. Production files remain unchanged by this document.

Baseline accepted by the user with eight amendments before implementation. The findings below remain the historical baseline. Section 10 records the amendments; they take precedence over any earlier proposed terminology, typography emphasis, or abbreviated instrument sequence.

The Yang–Mills existence and mass-gap Millennium Problem remains open. This project presents a hypothetical gauge-reduced spectral-coercivity program. Neither a coherent dependency graph, a positive illustrative bound, a DOI, nor passing software checks establishes a solution.

## 1. Assessment

The strongest foundation is the existing scientific-audit intent: bilingual content, explicit no-proof language, E0/E1/H1/T0 methodology, source references, structured objections, and an unusually clear distinction between the evolving website and its archived software release. The static implementation is also lightweight.

The central problem is allocation of attention and space. A persistent ten-button rail, repeated publication/status blocks, and nested panels receive more visual structure than the mathematics. Some pages are crowded inside their panels while leaving most of the viewport unused. The graph is constrained by intrinsic sizing; spectrum and RG diagrams are too small and underspecified to function as research instruments. Enlarging every margin would not solve these problems.

v6 should become an editorial research document connected to large, reproducible analytical instruments and a contextual audit register. It should retain the restrained dark palette while reducing borders, shadows, badges, oversized marketing typography, and disconnected control/output fragments.

Scientific and software correctness must precede visual authority. The audit found reproducible initialization and arithmetic defects, inconsistent graph topology, displaced table statuses, and mobile overflow. A polished presentation of those behaviors would make them more misleading.

Read the companion proposals:

- [Information architecture](V6_INFORMATION_ARCHITECTURE.md)
- [Design system](V6_DESIGN_SYSTEM.md)
- [Experiment architecture](V6_EXPERIMENT_ARCHITECTURE.md)
- [Phased implementation and validation gates](V6_IMPLEMENTATION_PLAN.md)

## 2. Scope, method, and evidence limits

The audit covers every tracked application, research-documentation, metadata, and repository-quality area, including hidden .github issue forms/workflow and .nojekyll. No AGENTS.md was found in the repository inventory or its ancestor directories. Initial working tree was clean.

Evidence categories used below:

- **Live:** directly observed through the canonical website's screenshots, DOM/accessibility snapshots, interactions, or DOM geometry.
- **Source:** verified in the local baseline. Source references use baseline file and one-based line number; line numbers will change after implementation.
- **Calculated:** measurements or isolated arithmetic checks made from source, with the measurement method stated.
- **Inference:** a risk supported by implementation, not claimed as a completed browser/assistive-technology test.
- **Proposed:** a v6 design or engineering decision requiring implementation and validation.

Live work inspected all ten views in English, the initial Turkish overview, language switching, the baseline assumption preset, a boundary scenario, RG playback, graph selection with Enter, and graph presentation mode. Desktop composition was inspected at 1440 × 1000 and the browser's initial approximately 1265 × 712 surface. All ten views were checked at 390 × 844; graph/RG/obligations were additionally measured at widths 320, 768, 1120, and 1121 with height 900.

The live deployment displayed v5.1.2 and matched the inspected behaviors and identifiers. A byte-for-byte deployment/commit identity was not established. Screenshots were inspected in the audit session; no screenshot archive is included in these five Markdown deliverables.

No Lighthouse run, field Core Web Vitals dataset, real-device test, NVDA/VoiceOver session, browser print render, or complete external-link availability crawl was performed. The accessibility tree provides evidence about exposed structure, not proof of screen-reader usability. These remaining checks are explicit implementation gates, not claimed passes. This is a product/software/scientific-communication audit, not a verification of a mathematical proof.

## 3. Codebase inventory

| Area | Current implementation | Implication |
|---|---|---|
| Runtime | One 1,111-line index.html; static HTML, inline CSS, one executable IIFE plus JSON-LD | Easy deployment and no framework overhead; scientific data, evaluation, rendering, and navigation are tightly coupled. |
| Styling | Root color tokens; generic grids/panels; responsive rules at 1120/760/480 px | Useful initial tokens, but few semantic layout roles and inconsistent local spacing. |
| Content | Turkish/English spans plus JS translation objects | Existing bilingual investment should survive; duplicated structures can drift. |
| Scientific model | DOM-derived boolean chain and scalar arithmetic; static node registry; separate spectrum/RG controls | Independent displays lack a common scientific record and explicit linkage modes. |
| Navigation/state | Ten hidden/shown sections, query-based view and lab serialization | Preserve valid v5 URLs; repair defaults, history, fragments, and omitted instrument state. |
| Rendering | Inline SVG proof graph; CSS spectrum axis and RG bars; Unicode/HTML equations | No KaTeX/MathJax or loaded math font; graphical geometry and scientific data can disagree. |
| Documentation | README, METHODOLOGY, SCIENTIFIC_REVIEW, REFERENCES, CONTRIBUTING, release notes, CHANGELOG, LANDING_QA | Retain and connect these resources to claims and outputs. |
| Publication | CITATION.cff, ZENODO, DOI/ORCID, visible citation and BibTeX, JSON-LD | Preserve archive-versus-project identity rather than synchronizing all versions blindly. |
| Hosting/discovery | CNAME, canonical/OG/JSON-LD URL, robots, sitemap, manifest, 404, .nojekyll, CUSTOM_DOMAIN | Keep canonical origin; repair historical 404 destination during implementation. |
| CI | .github/workflows/quality.yml invokes scripts/validate.mjs | Current checks establish limited structural presence, not behavioral/scientific validity. |
| Review/licensing | Two issue forms, issue configuration, MIT LICENSE, CONTENT-LICENSE | Preserve scientific objection versus software bug distinction and content/source rights. |

Calculated source baseline: index.html is **94,230 UTF-8 bytes**, locally gzip-compressed to **23,324 bytes**. Inline CSS is 19,092 bytes; executable JS 25,518; JSON-LD 1,457. Static markup contains 812 opening tags after excluding styles/scripts/comments, 84 unique IDs, and 157 language-marked elements for each language. These are not observed transfer sizes or runtime DOM/performance scores.

There are no externally loaded scripts, stylesheets, or fonts. Inter is named in a fallback stack but is not supplied (`index.html:85`); appearance therefore depends on installed fonts.

## 4. Live findings by research surface

| Surface | What works | Observed issue and consequence |
|---|---|---|
| Overview | Hypothetical-program and open-problem wording; prominent author/archive identity | Huge heavy title inside a narrow column, publication strip, citation block, four status panels, trust grid, and brief cards compete. Initial desktop view prioritizes title/metadata over mathematical reading. |
| Proof graph | Selectable N1–N6 and useful failure/source descriptions; Enter selects N4 | At 1440 px the SVG takes most width while the inspector is roughly 210 px and wraps heavily. Arrows disagree with declared dependencies. Nodes appear as generic descendants of an image in the accessibility snapshot, so keyboard activation alone is not enough. |
| Assumption lab | Presets, labelled controls, blockers, toy-only warning and trace | Bare URL shows all three numeric values as zero while “Chain intact” remains styled as the preset. The six long checkbox rows dominate; descriptions visually run into titles. Scalar outputs and argument scope are separated. |
| Spectrum | Correct explanatory distinction between norm closeness and spectral support | Two small cards; a roughly 105 px diagram; Delta is supplied rather than computed. No numerical energy scale, no measured eigenvalues, and no explicit normalization/orthogonality next to the mixture. |
| RG transfer | Full hypothetical inequality and toy interpretation are available | Eight unlabelled bars, status “POS,” arbitrary stage animation, and isolated numbers look more computational than their implementation warrants. Negative values have no faithful graphical representation. |
| Proof obligations | G1–G6 and unresolved requirements are exposed | G2/G4/G5/G6 have five visible cells under four headings. Scientific status moves outside the intended column. |
| Failure cases | Five meaningful possible failure modes and downstream explanations | Selection switches prose only; the “tests” label overstates the implemented behavior. No executable falsification method or linked scenario is supplied. |
| Sources/citation | R1–R4, exact/concept DOI distinction, CFF/BibTeX actions | Repeated source cards emphasize containers. Hypothetical presentation references give slide numbers without an available source artifact. Support scope is not linked to individual equations/claims. |
| Methodology | Strong E0/E1/H1/T0 model and claim-admission rule | Four small status cards isolate a framework that should govern every instrument and claim. “Official / required” risks conflating an official target with a program-specific required premise. |
| Scientific review | Separate scientific and software issue forms; contribution/history links | Four generic boxes link away without carrying selected claim, equation, scenario, or model context. No claim-specific review preparation. |

### Responsive measurements

These are live English-mode DOM measurements. “Document width” is documentElement.scrollWidth; a vertical scrollbar explains some widths 15 px below the configured viewport.

| Viewport width | Graph document width | RG document width | Obligations document width |
|---:|---:|---:|---:|
| 320 | 890 | 673 | 437 |
| 390 | 890 | 673 | 437 |
| 768 | 895 | 768 | 768 |
| 1120 | 1105 | 1120 | 1120 |
| 1121 | 1323 | 1106 | 1106 |

At 390 px, the other seven views measured 375 px. This does not certify them at other languages, zoom levels, or devices. The graph becomes wider than the page again immediately above the sidebar breakpoint.

At widths ≤1120 px, the global scientific-status notice has computed display:none. At 390 px, the brand text and optional top actions also disappear; navigation is a horizontal strip of ten minimum-170 px buttons. A local overflow:auto declaration does not stop child minimum sizes from enlarging an ancestor grid.

## 5. Prioritized defect and risk register

Priority P1 means a v6 release blocker because it changes interpretation, data correctness, or core access. P2 means a required redesign quality issue. P3 is optional/deferred improvement. These are implementation priorities, not judgments about mathematical importance.

| ID | Priority / evidence | Finding | Consequence / proposed gate |
|---|---|---|---|
| A01 | P1, Live + Source | Missing cg/lym/r become Number(null)=0 in loadURLState (`index.html:1011`), replacing defaults 0.65/1.00/0.12 (`:561`) | Bare canonical URL mutates to v=5&a=111111&cg=0.00&lym=0.00&r=0.00. Test absent vs explicit zero and preset consistency. |
| A02 | P1, Live + Calculated | 0.10 × 0.20 − 0.02 produces a tiny positive binary float; net>0 grants the toy conclusion (`:928`); toFixed(2) displays zero | Live output says “Candidate lower bound: 0.00 > 0.” Use exact declared decimal arithmetic and sign-consistent display. |
| A03 | P1, Source + Live geometry | Drawn N4→N6 bypasses N5, while node data declares N4→N5→N6 (`:493`, `:890`); N1/N2 arrows miss N3's vertical bounds | Generate all graph views from a reviewed edge registry; verify arrow endpoints and inspector/trace parity. |
| A04 | P1, Source + Live | RG stages use max(0, base−i×0.045), floor 8%, cap 96%, timer 360 ms (`:1041`) | No iterative RG calculation exists. Replace with a signed single-step budget; any later recurrence needs its own reviewed definition. |
| A05 | P1, Live + Source | Graph/RG/table create document overflow (`:222`, `:280`, `:335`) | Repair minimum-size propagation, readable layout switching, local figure containment, and list alternatives; validate 320–1920 px. |
| A06 | P1, Live + Source | Global open-problem status disappears in mobile and presentation (`:327`, `:338`) | Every route needs visible scope independent of sidebar; every result/export needs local T0 scope. |
| A07 | P1, Live + Source | G2/G4/G5/G6 duplicate untagged table cells (`:650`, `:652`–`:654`) | Use one cell per logical column with localized content inside it; test header/status correspondence in both languages. |
| A08 | P1, Source | URL/trace/report reproduce only lab values (`:1005`, `:1018`, `:1071`); spectrum/RG/language/selection omitted | Full versioned scenario records and exported scope; preserve v5 migration. Text status report already has a no-proof line and should retain it. |
| A09 | P1, Source | Scope/hypotheses insufficiently local: unqualified target equation, N3 “required,” finite arithmetic treated as uniform premise, unstated mixture normalization | Separate theorem/target statement, hypothetical premise, and T0 arithmetic; content review before visual redesign. |
| A10 | P2, Source + Live | Monospace Unicode math with arbitrary wrapping (`:180`); inconsistent subscripts and script glyphs | Reviewed TeX registry, dedicated renderer, supported math font, accessible equation text, intentional line breaks. |
| A11 | P2, Source + Live | replaceState-only navigation drops fragments, does not focus main content (`:827`); global arrows switch views (`:1097`) | Route table, deliberate history, focus management, current-page semantics, scoped shortcuts. |
| A12 | P2, Calculated | Graph edge contrast 2.33:1; node boundary 1.92:1; spectrum axis 2.90:1; alpha focus outline about 2.05:1 on panel | Essential graphics/focus need stronger tokens and rendered validation; do not describe all current text as low contrast. |
| A13 | P2, Source + Inference | Partial print palette and all-view printing; graph min-width retained; math-hidden rule survives (`:326`, `:363`) | Dedicated report/print composition and actual print inspection; no current print pass claimed. |
| A14 | P2, Source | Reduced-motion CSS leaves explicit JS smooth scroll and RG timer (`:362`, `:834`, `:1047`) | Motion-aware JS/static presentation and reduced-motion tests. |
| A15 | P2, Source | Source slides are not present; framework references have no claim-specific locators (`:885`, REFERENCES.md) | Explicit missing-provenance records; resolve evidence before claiming verification, retain unresolved labels meanwhile. |
| A16 | P2, Source | 404 return link points to historical repository path (`404.html:4`) | Restore canonical-root recovery and verify live 404 navigation during deployment gate. |
| A17 | P2, Source | CI validates tokens/files/CNAME only (`scripts/validate.mjs:4`) | Keep structural checks; add model, route, accessibility, visual, export, and publication tests. |
| A18 | P3, Source | Manifest exists but is not linked from index.html | Do not claim installability; PWA work is outside required v6 scope. |

### Reproduction notes for the highest-risk arithmetic/state defects

1. Open the canonical root in a fresh page. Observe cg=0.00, lym=0.00, r=0.00 in the rewritten URL. Open Assumption Lab; all three outputs are zero. Choose “Chain intact”; the intended preset restores 0.65, 1.00, 0.12 and bound 0.53.
2. Open [the boundary scenario](https://www.yangmillsresearch.org/?view=lab&v=5&a=111111&cg=0.10&lym=0.20&r=0.02), then switch to English. The live UI displays a successful toy chain and “0.00 > 0.” The isolated evaluator gives approximately 3.469446951953614e−18, although the declared decimal calculation is exactly zero.
3. Select RG transfer and run stages. Source inspection shows that the visual progression is an arbitrary declining sequence, not repeated application of a specified RG transformation. The numeric net bound remains the same scalar calculation.

## 6. Major design changes: full rationale

### D01 — Editorial research composition

- **Current problem:** repeated trust/status containers and heavy narrow title compete with research content; analytical surfaces receive leftover space.
- **Proposed solution:** publication masthead, concise hypothetical-program statement, visible open-problem line, one qualified target equation, and reading/investigation paths. Use dedicated reading and analysis layouts.
- **UX rationale:** a reader can identify subject, status, provenance, and next action without decoding a dashboard.
- **Visual rationale:** serif scholarly headings, long horizontal alignments, generous section rhythm, and fewer enclosures give the mathematics priority.
- **Engineering implications:** replace generic nested-card composition with semantic page regions and responsive layout primitives; centralize publication metadata.
- **Scientific-integrity implications:** keep provenance and limitation explicit without implying that academic appearance or archival identity certifies a proof.

### D02 — Publication-grade mathematical rendering

- **Current problem:** inline Unicode/HTML and monospace expressions cannot reliably communicate operator structure, domains, aligned derivations, or consistent typography.
- **Proposed solution:** reviewed TeX/equation records; prototype MathJax with its supported STIX2 font first, with KaTeX's native font system as the benchmark alternative. Select one renderer after equation/accessibility/performance gates.
- **UX rationale:** expressions remain readable, copyable, searchable by stable ID, and connected to their hypotheses.
- **Visual rationale:** proper fractions, radicals, superscripts, operator spacing, and aligned derivations establish scholarly quality.
- **Engineering implications:** add a pinned, locally served renderer/font pipeline, scoped dynamic typesetting, accessible output, error states, and print QA; never force unrelated CSS fonts onto renderer glyph metrics.
- **Scientific-integrity implications:** typesetting must preserve every qualifier. Proposed target equations require scope/domain review; formatting is not mathematical validation.

### D03 — Research instruments with inspectable records

- **Current problem:** slider positions, isolated numbers, decorative stages, and partial sharing do not establish a reproducible experimental object.
- **Proposed solution:** question → model/hypotheses → exact controls → large surface → interpretation/derivation → provenance/export. Shared scenario envelope with independent instrument models and explicit linking.
- **UX rationale:** users can vary one input, inspect why a result changed, compare a baseline, and reproduce the record.
- **Visual rationale:** a dominant signed plot or derivation with a compact numeric ledger gives analytical relationships room.
- **Engineering implications:** pure evaluators, exact decimal arithmetic at declared precision, validated state, result records, SVG renderers, and model-versioned exports.
- **Scientific-integrity implications:** every output remains T0 and identifies supplied versus derived quantities. No eigensolver, physical simulation, or actual multiscale RG is implied.

### D04 — Argument, obligation, and source as connected entities

- **Current problem:** graph, lab chain, debt table, source cards, and review form are disconnected and sometimes inconsistent.
- **Proposed solution:** stable claim/equation/assumption/source/debt IDs, one dependency registry, graph/list parity, contextual evidence and review links.
- **UX rationale:** a reviewer follows an inference to its premise, source, unresolved obligation, and failure consequence.
- **Visual rationale:** a spacious graph and restrained inspector replace fragmented panels; tables and text carry the detailed evidence.
- **Engineering implications:** central content registry and validation, explicit edge types, backward-compatible anchors, bilingual semantic tables.
- **Scientific-integrity implications:** evidence class, scenario viability, and review workflow status remain independent. No checkbox can discharge a proof obligation.

### D05 — Responsive and accessible research continuity

- **Current problem:** intrinsic figure sizes enlarge the page; mobile/presentation hides the global limitation; focus/history and graph semantics are incomplete.
- **Proposed solution:** content-driven layout changes, complete compact navigation, persistent scope, contained figures with structured alternatives, readable equation wrapping, scoped keyboard behavior.
- **UX rationale:** people can inspect the same claim and reproduce the same scenario using touch, keyboard, zoom, or assistive technology.
- **Visual rationale:** preserve hierarchy as columns collapse; avoid miniaturizing graphs and cramming controls to fit.
- **Engineering implications:** zero minimums on flexible tracks, explicit focus/state semantics, controlled announcements, language parity, motion-aware rendering, and tested print styles.
- **Scientific-integrity implications:** scope and caveats travel with the result across viewport and output medium; inaccessible or clipped conditions cannot silently change the apparent claim.

### D06 — Lightweight, reviewable software and publication delivery

- **Current problem:** the monolith is cheap to load but hard to validate; CI presence checks and mixed version fields can be overinterpreted.
- **Proposed solution:** small vanilla modules in source with a static distributable, pinned math assets, behavior-based checks, distinct release/model/schema/archive identities, and explicit release gates.
- **UX rationale:** fast loading, reliable restoration, and stable links make the tool usable in research and review.
- **Visual rationale:** avoid loading shifts and delayed equation reflow; keep static scholarly content available during enhancement.
- **Engineering implications:** a small developer build may be introduced without requiring a visitor server; preserve GitHub Pages, document direct-file behavior, measure added renderer cost, and verify metadata/export consistency.
- **Scientific-integrity implications:** software readiness gates do not certify mathematics. Exact v5.0.1 DOI remains attached to that archive; a v6 DOI must never be invented.

## 7. Accessibility and performance assessment

Existing strengths include native buttons/checkboxes/ranges with labels, semantic landmarks, a polite toast status, keyboard graph activation, reduced-motion CSS, and strong nominal text contrast. Main text on page is about 17.25:1; muted text on panel is 7.15:1 and on panel2 6.71:1. Contrast calculations use declared solid colors, excluding gradients and compositing except the focus-ring calculation.

Required improvements include graph control semantics/list alternative, active navigation semantics, a skip link, route focus/history, essential-graphic contrast, descriptive numeric entry, table headers/cell alignment, self-contained result announcements, persistent limitations, and print/reflow. The browser snapshot exposed the RG bars without data semantics; provide an equivalent signed-value table and figure description.

Use WCAG 2.2 AA as the implementation target, including reflow, keyboard access, text/non-text contrast, focus not obscured, and target-size requirements. The planned 44 px control target is a product comfort target; AA's target-size minimum is 24 CSS px subject to exceptions. [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/)

Performance is currently favorable by architecture: no framework/dependency downloads and only small scalar models. Source risks are full hidden-view initialization, repeated DOM rebuilding, URL rewriting during slider input, and animation timers; none is evidence of a measured slow page. The proposed renderer/fonts are likely the largest new cost. Establish measured cold/warm load, route, slider, typesetting, and export baselines before setting final budgets; proposed thresholds are in the implementation plan.

## 8. Preservation register

The following are invariants, with changes allowed only to correct behavior or extend verifiable metadata:

- Canonical origin **https://www.yangmillsresearch.org/** in canonical/OG/JSON-LD, CNAME, sitemap/robots and public links; retain GitHub Pages deployment compatibility.
- Concept DOI **10.5281/zenodo.22739745**; exact **v5.0.1** DOI **10.5281/zenodo.22739746**; ORCID **0009-0001-9217-0917** and author Baran Çolakoğlu.
- CITATION.cff, copy-citation and BibTeX functionality, ZENODO guidance, version history, repository/source links, and truthful citation/export scope.
- R1–R4, methodology/claim-admission rules, scientific review protocol and issue forms, contribution rules, software/content license distinction and any underlying source rights.
- All ten existing query view keys, N1–N6/A1–A6/G1–G6 identifiers or explicit aliases, and reproducibility of valid legacy scenarios with documented bug-fix migration.
- Explicit hypothetical status, unresolved H1 obligations, T0 output limitations, and the statement that the Millennium Problem remains open.

Do not replace the archive-specific v5.0.1 CFF version with v6 while retaining its exact DOI. Website release, model version, scenario schema, and archived citation are separate identities. The current archive distinction is intentional (`ZENODO.md:7`, `LANDING_QA.md:15`).

## 9. Completion and next decision

The baseline structural command `node scripts/validate.mjs` passes. Its limited scope is recorded above. No production fix, framework migration, dependency installation, commit, push, or deployment belongs to this audit deliverable.

The proposed v6 scope is concrete in the four companion documents. Implementation starts with reviewed scientific semantics and regression cases, then state/model foundations, the editorial shell and mathematics, the analytical instruments, and finally audit/export/release hardening. Each phase must pass its documented validation gate before dependent work advances.

## 10. Accepted baseline amendments

The user's amendments are mandatory design and engineering requirements, not optional refinements:

| ID | Amendment | Governing detail |
|---|---|---|
| U1 | Every research instrument implements **Question → Assumptions → Inputs → Model → Derived quantities → Visualization → Interpretation → Epistemic status → Reproduction record** | Experiment architecture sections 1 and 5; design system section 1 |
| U2 | Epistemic class, supplied/derived origin, illustrative scope and hypothetical/established basis travel with each result and its screenshot surface, copy, export and shared scenario | Experiment result/record contract; design system section 6 |
| U3 | Remove the current undefined multistage RG animation; v6 uses a signed single-step transfer/error budget. A later multistage view requires an explicit reviewed recurrence | Experiment EXP-05; design system RG component |
| U4 | Use scaled-integer arithmetic at exact declared precision for current scalar models; a decimal dependency requires demonstrated necessity | Experiment EXP-02; implementation G2 |
| U5 | One dependency registry generates an interactive graph, a linear dependency list and an accessible semantic outline; validate all three against its typed edges | Experiment EXP-03; implementation G2/G4/G6 |
| U6 | Rename the existing prose interface **Failure Modes / Falsification Criteria**, preserving the falsify route. “Test” requires executable scenario/method/assertion/record semantics | Information architecture routes; experiment EXP-07 |
| U7 | Preserve a modern research-software aesthetic: sans UI, distinct mathematical typography, selective editorial serif. Serif does not become the default instrument or control typography | Design system section 3 |
| U8 | Large analytical surfaces dominate instrument pages; controls and metadata support the research object | Design system section 2; implementation G3/G4/G6 |

The nine-part sequence is a semantic research contract. It does not require nine cards or delay all status until the eighth stage: local scope repeats beside each value and visualization. App-generated captures include it within capture bounds; arbitrary external cropping cannot be controlled. Contextual copy actions preserve the value's classification and provenance rather than producing a bare number.

“Established,” “hypothetical,” “illustrative,” “supplied,” and “derived” represent different dimensions; they are not interchangeable badges or a progression toward proof. Exact arithmetic establishes a declared scalar calculation, never the truth of its hypothetical premises.

The [implementation plan](V6_IMPLEMENTATION_PLAN.md) maps U1–U8 to phased validation gates. Production implementation remains outside this documentation task.


## 11. Final implementation decision lock

The audit is no longer an open-ended design exploration. The following decisions are locked for the first v6 implementation pass unless a validation gate demonstrates a concrete accessibility, correctness, or performance failure:

1. **Research-document + instrument model, not dashboard model.** The interface uses editorial reading surfaces, large analytical surfaces, and audit registers. Card proliferation and nested dashboard composition are explicitly rejected.
2. **Correctness before visual authority.** A01–A09 are release blockers and must be resolved before visual polish is treated as complete.
3. **Primary mathematical direction: MathJax with supported STIX2 mathematics.** KaTeX remains a contingency only if the G3 specimen gate shows a material failure in payload, responsiveness, print, or accessibility. The site must ship one renderer, not both.
4. **Typography roles are separated.** Inter (or a metrically compatible modern sans) is the UI/body default; STIX Two Text is reserved for selected editorial headings; the math renderer owns mathematical glyph metrics. Serif is never the default control/instrument typeface.
5. **Every instrument obeys the nine-part research contract.** Question → Assumptions → Inputs → Model → Derived quantities → Visualization → Interpretation → Epistemic status → Reproduction record. This is semantic order, not nine cards.
6. **Epistemic scope travels with the result.** T0/H1/E1, supplied/derived origin, model identity, premises, and limitations are present on the result surface and preserved by app-generated copy/capture/export/share actions.
7. **RG is a signed single-step budget in v6.** The current staged animation is removed. No multiscale trajectory appears until a reviewed recurrence and per-step semantics exist.
8. **Current scalar arithmetic is exact at declared precision.** Scaled integers determine sign and boundary behavior. Floating-point values may position graphics but never decide scientific/model status.
9. **One dependency registry is authoritative.** Interactive graph, linear dependency list, semantic outline, inspectors, and traces are projections of the same reviewed node/edge registry.
10. **Failure prose is not an executable test.** The destination is “Failure Modes / Falsification Criteria” until a record has defined inputs, method, expected assertion, actual result, and reproducible output.
11. **No horizontal document overflow is an acceptable trade-off.** At narrow widths, composition changes rather than shrinking mathematics or forcing a desktop graph into the viewport.
12. **Publication identity remains separate from scientific validity.** DOI, ORCID, release metadata, CI, and software versioning remain preserved but never function as proof-status signals.

The companion documents are implementation specifications, not suggestions. Where wording conflicts, this decision lock and the explicit validation gates in `V6_IMPLEMENTATION_PLAN.md` take precedence.
