# v6 — Information Architecture

Status: **final v6 information architecture; implementation-ready specification**. Audited against repository commit `5b0b7f4` and the v5.1.2 source on 2026-09-14. The accepted amendments below govern the proposed implementation; this document changes no production behavior. Read with `V6_DESIGN_AUDIT.md`, `V6_DESIGN_SYSTEM.md`, `V6_EXPERIMENT_ARCHITECTURE.md`, and `V6_IMPLEMENTATION_PLAN.md`.

The Yang–Mills existence and mass-gap Millennium Problem remains open. This interface organizes a hypothetical gauge-reduced spectral-coercivity research program; neither its visual authority nor its interactive output establishes the program's unproved bridges.

## 1. Current structure and constraints

The application is a static, bilingual, ten-view document. All markup, styles, scientific display data, state parsing, and interaction logic live in `index.html`; there is no package manifest, framework, or build requirement. `README.md` explicitly supports opening the HTML file directly. The existing document is approximately 94 KB uncompressed; this is a source-size observation, not a measured load-time result.

The ten navigation buttons are defined at `index.html:396`. View changes hide all but one section (`index.html:142`) and replace the query string (`index.html:827`). The existing route format is `?view=…`, **not a working hash router**. Native section IDs such as `view-graph` exist, but hidden sections and URL rewriting make fragment links unreliable. Preserve those IDs and repair their behavior instead of assuming they already work.

| Current area | Evidence | Architectural consequence |
|---|---|---|
| Ten numbered, equally weighted navigation buttons | `index.html:397` | Readers must infer the difference between exposition, instruments, and audit resources. |
| 232 px sidebar, 18 px workspace gap, 1.2:0.8 proof split | `index.html:130`, `index.html:222` | Navigation and inspector compete with the central analytical surface. |
| Scrollable horizontal navigation below 1120 px | `index.html:335` | Later sections, especially methodology and review, move off-screen. |
| Sidebar scientific-status notice removed below 1120 px | `index.html:338` | Non-overview routes need their own visible status context. |
| Route changes use `replaceState`, omit fragment, and do not focus headings | `index.html:827` | Back/Forward cannot retrace normal view navigation; context and keyboard position can diverge. |
| Global Left/Right keys change views outside form fields | `index.html:1097` | Document-level navigation can conflict with future graph inspection, reading, and composite widgets. |
| Graph-node definitions refer to slide numbers as text | `index.html:885`, `index.html:905` | A reader cannot verify a slide locator through a resolvable source artifact in this repository. |
| Four proof-obligation rows have duplicated untagged cells | `index.html:650`, `index.html:652`–`index.html:654` | G2/G4/G5/G6 show five cells under four visible column headers in either language, displacing the scientific status. |
| Methodology and scientific-review protocols already exist | `METHODOLOGY.md:9`, `SCIENTIFIC_REVIEW.md:7` | v6 should make these protocols operational in context, not replace them with new marketing summaries. |
| Software checks assert token/file presence | `scripts/validate.mjs:4` | Passing CI does not establish accessibility, correct state restoration, mathematical validity, or independent scientific review. |

Live canonical-site measurements supplied by the lead audit on 2026-09-14 confirm that overflow is a document-level defect, not merely a preference about figure scrolling:

| Live view, English | Viewport | Measured document scroll width | Observation |
|---|---|---|---|
| Argument / proof graph | 390 × 844 | 890 px | The 820 px minimum SVG width propagates through grid sizing despite the local `overflow:auto` wrapper. |
| RG transfer | 390 × 844 | 673 px | Eight fixed-width steps escape the intended scroll container through ancestor sizing. |
| Proof obligations | 390 × 844 | 437 px | Table structure/content exceeds the viewport. |
| Other seven views | 390 × 844 | 375 px | No equivalent document-level overflow in this sample; the scrollbar occupies the remaining width. |

At a 1440 px desktop viewport, the live graph leaves an inspector of roughly 210 px with heavily wrapped title text. The declared 1.2:0.8 track ratio therefore does not describe the actual usable layout once intrinsic SVG sizing is applied. The desktop audit also confirms five visible cells in G2/G4/G5/G6 against four headers. These are observed measurements; not all browser, language, or zoom combinations have been tested.

## 2. Proposed navigation hierarchy

Keep all existing route keys and organize them into three visibly named groups. Grouping changes reading order, not the meaning of scientific claims. There is no new intermediate dashboard to traverse.

```text
Yang–Mills Research
  Research program
    Program overview
    Argument map
    Methodology
  Research instruments
    Assumption laboratory
    Spectral support
    RG transfer
  Scientific audit
    Proof obligations
    Failure Modes / Falsification Criteria
    Sources & citation
    Scientific review
```

“Argument map” describes a dependency graph of claims, inputs, and obligations; the subtitle retains “hypothetical proof dependency graph” for continuity. The accepted destination name is **“Failure Modes / Falsification Criteria.”** The current falsification content is a curated catalogue of possible program failures and conditions that would defeat a claim. It must not be presented as an executed test, a test suite, or a completed falsification result. Preserve `?view=falsify` and `#view-falsify`. Review the Turkish translation for equivalent scope before implementation; this does not reopen the accepted English naming decision.



### Locked bilingual navigation labels

The first v6 implementation uses the following product labels while preserving all legacy route keys and stable IDs:

| Group | English | Turkish |
|---|---|---|
| Research program | Research program | Araştırma programı |
| Overview | Program overview | Program özeti |
| Graph | Argument map | Argüman haritası |
| Methodology | Methodology | Metodoloji |
| Research instruments | Research instruments | Araştırma araçları |
| Assumption lab | Assumption laboratory | Varsayım laboratuvarı |
| Spectrum | Spectral support | Spektral destek |
| RG | RG transfer | RG transferi |
| Scientific audit | Scientific audit | Bilimsel denetim |
| Obligations | Proof obligations | İspat yükümlülükleri |
| Failure criteria | Failure Modes / Falsification Criteria | Başarısızlık Kipleri / Yanlışlama Kriterleri |
| Sources | Sources & citation | Kaynaklar ve atıf |
| Review | Scientific review | Bilimsel inceleme |

These are interface labels, not new scientific terms. Existing query values such as `?view=graph` and `?view=falsify` remain stable.

### Composition and density budget

The information architecture includes a density budget so future styling cannot recreate the v5 compression problem:

- Each route has **one primary research object**: a reading narrative, an analytical instrument, a dependency map, or an audit register.
- A research instrument may have one supporting control/reading region and one primary analytical region. Metadata does not become a third competing column.
- Publication identity is concentrated in the masthead and source/citation surfaces; it is not repeated as trust cards across the application.
- Result status is local to the result, but repeated as concise text rather than stacked badge clusters.
- Secondary detail uses disclosure, below-surface inspectors, or contextual links before a new bordered panel is introduced.
- Mobile composition is a deliberate single-column research flow, not a shrunken desktop grid.

### Route and anchor preservation map

Canonical origin for every route remains `https://www.yangmillsresearch.org/`. View labels may change; stable identifiers do not.

| Current label | Existing query | Existing section ID / fragment | v6 destination | Group |
|---|---|---|---|---|
| Overview | `?view=overview` | `#view-overview` | Program overview | Research program |
| Proof Graph | `?view=graph` | `#view-graph` | Argument map | Research program |
| Assumption Lab | `?view=lab` | `#view-lab` | Assumption laboratory | Research instruments |
| Spectrum | `?view=spectrum` | `#view-spectrum` | Spectral support | Research instruments |
| RG Transfer | `?view=rg` | `#view-rg` | RG transfer | Research instruments |
| Proof Debts | `?view=audit` | `#view-audit` | Proof obligations | Scientific audit |
| Falsification | `?view=falsify` | `#view-falsify` | Failure Modes / Falsification Criteria | Scientific audit |
| Source Map | `?view=sources` | `#view-sources` | Sources & citation | Scientific audit |
| Methodology | `?view=methodology` | `#view-methodology` | Methodology | Research program |
| Scientific Review | `?view=review` | `#view-review` | Scientific review | Scientific audit |

The root without parameters opens Program overview. Preserve `#view-*` anchors as explicit navigation aliases, including when entered directly from an external link. If earlier publications use shorter fragments such as `#graph` or `#methodology`, accept those aliases through the same route table; these are proposed compatibility aliases, not verified functioning v5 routes. Inventory published links before the migration gate and retain any additional aliases found.

New entity targets should be stable and descriptive: `?view=graph#node-n4`, `?view=audit#obligation-…`, `?view=methodology#level-h1`, and `?view=sources#ref-os-1973`. These are proposed URL shapes; assign obligation and reference IDs from a reviewed registry, not from their current visual order. Preserve current node IDs N1–N6 and assumption IDs A1–A6. A change in scientific meaning needs a documented replacement relationship rather than silent ID reuse.

### Routing contract

1. Parse the full location once before rendering. Use a validated route table, independent of DOM order; current numeric indices must not become navigation identity.
2. A recognized entity or legacy section fragment selects its owning view and then the target. Otherwise use a recognized `view` query, otherwise Overview. Unknown fragments remain visible in the address and produce a recoverable target-not-found message; they must not silently select an unrelated claim.
3. Use history entries for deliberate view/entity navigation. Use replacement only for continuous parameter updates and URL normalization. Handle both `popstate` and fragment navigation, without creating a new entry during restoration.
4. Restore view, instrument state, selection, and language together. An explicit URL language wins over a local preference; otherwise retain the current Turkish default until a product decision changes it. Visible labels and document language must agree.
5. Preserve existing scenario inputs `v`, `a`, `cg`, `lym`, and `r` through a v5 compatibility parser. Keep `v=5` meaningful as the old scenario schema; do not confuse it with live release `5.1.2` or a future v6 release.
6. Missing values retain documented defaults. Invalid values receive a visible fallback notice; bounded out-of-range values receive disclosed clamping. `Number(null)` must never turn an omitted value into zero, as the current loader can do at `index.html:1014`.
7. Preserve recognized fragments and unrelated query parameters when updating scenario state. Explicitly document any deliberately unsupported parameter rather than dropping it silently.
8. Use query/fragment routing compatible with GitHub Pages. New path routes are unnecessary for this milestone and must not be introduced without static hosting and direct-load tests. Retain the direct-file read-only experience; verify full interactivity separately after any module/build change.

## 3. Page anatomy and research workflows

The interface should read as modern research software. Use sans-serif typography for navigation, controls, prose, metadata, tables, and instrument labels. Render mathematics through its separate publication-grade math system; reserve serif type for selected editorial headings where it adds hierarchy. Do not turn every section into a journal page or use serif styling to imply stronger mathematical authority. Typography roles and metrics are specified in `V6_DESIGN_SYSTEM.md`.

### Program overview: orient, then investigate

Lead with the research title, a brief statement of the hypothetical program, and a plain-text open-problem notice. Follow with one large, carefully qualified target equation and a short reading sequence. The evolving project's Concept DOI, author/ORCID, repository, exact archive link, and citation action remain readily discoverable in one compact publication block; avoid duplicating them as trust cards.

Primary next actions are “Inspect the argument” and “Open an instrument.” Link to methodology beside the status explanation. A visitor can learn what the interface does, what it cannot establish, and where the unproved bridge lies before touching a parameter.

Do not force all identifiers and prose into a single phone viewport. Preserve their early document order and immediate availability while allowing readable text, safe wrapping, and whitespace. This is a proposed refinement of the first-viewport checklist in `LANDING_QA.md`, not removal of identifiers.

### Argument map: statement to dependency to obligation

Give the graph the primary width. Selection opens an adjacent inspector only when the viewport supports a readable graph and readable prose simultaneously; otherwise open the inspector below the surface. A single scientific registry must generate **three representations** with the same node, edge, assumption, source, and obligation identities:

1. **Interactive graph:** spatial relationships, keyboard-operable selection, and a contextual inspector.
2. **Linear dependency list:** a readable sequence of nodes with explicit upstream/downstream links, relationship meanings, and scientific status.
3. **Accessible semantic outline:** headings, semantic lists, and named links expose the complete argument structure to assistive technology and document readers. A node with multiple parents appears once with explicit dependency links; the outline must not invent a single-parent proof hierarchy.

The outline is a distinct representation, not the graph's generic accessible name and not merely an alternative label for the linear list. All three are generated from the same registry and parity-validated for nodes, dependencies, relation types, claims, status, source locators, and unresolved obligations. View choice preserves selection and scenario context. No separate handwritten copy may drift from the registry.

The selected node exposes statement, epistemic class, assumptions, dependencies, downstream consequences, primary-source locators, and open obligations. Source and dependency entries navigate to actual targets. Scenario-dependent viability appears separately from the node's scientific class, with an explicit active-scenario label. The graph does not turn an H1 claim into an established result when a checkbox is checked.

Research workflow: choose N4 → read the hypothetical reflection-back statement → inspect its upstream input and failure consequence → open its linked proof obligation → open a relevant laboratory with a clearly named scenario → return to the same node and scroll position.

### Instruments: mandatory research contract

Every instrument follows this exact narrative and semantic sequence:

**Question → Assumptions → Inputs → Model → Derived quantities → Visualization → Interpretation → Epistemic status → Reproduction record**

| Stage | Required content |
|---|---|
| Question | State the precise research or illustrative question the instrument can address. |
| Assumptions | Show active premises, their scope, their scientific classes, and relevant unresolved obligations. A supplied H1 premise remains hypothetical. |
| Inputs | Expose exact supplied values, normalization/units, bounds, and provenance. Distinguish user-supplied settings from derived quantities. |
| Model | State the equation/rule, its version, arithmetic policy, applicability, and known limits before asking the reader to interpret a plot. |
| Derived quantities | Show computed values with their derivation, sign, units/normalization, and supplied/derived distinction. The current instruments produce T0 illustrative quantities. |
| Visualization | Give the analytical figure the dominant surface with caption, labels, local scientific class, and a linked numerical/semantic equivalent. |
| Interpretation | Explain what follows within the declared model and what remains unavailable; separate a numerical condition from a mathematical claim about the theory. |
| Epistemic status | Present the full status statement and dependency scope: T0 illustrative output, H1 hypothetical premises, and E1 established framework where applicable. Retain E0 only for the official target. |
| Reproduction record | Capture enough versioned configuration, model, arithmetic, derivation, status, and provenance to recover and audit the result. |

This is the DOM, reading, and exported-record order. The visualization can still dominate visually through width, height, and whitespace: keep preceding question/assumptions/inputs/model concise and well structured, with controls in a bounded region alongside the analysis where space permits. Do not reorder focus or assistive-technology reading to manufacture that visual hierarchy. The Epistemic status stage is the full account, **not the first disclosure**: repeat concise status at the instrument heading, beside each result, and inside every figure caption before the reader reaches that stage. Progressive disclosure may hold supplemental derivation details but never hide active assumptions, normalization, model identity, or status.

Use modern sans-serif instrument typography with separately rendered mathematics. Large analytical surfaces should feel like working research instruments; the nine stages need not become nine decorative cards.

Distinguish “edit configuration” from “capture result”; capture is a local record operation and must not imply a remote computation. Automatic redraws are acceptable for the defined small deterministic model. Any future explicit Run action must correspond to an actual defined calculation and expose its method.

Research workflow: read the question → inspect active assumptions → enter exact supplied inputs → inspect the model → review derived quantities → examine the visualization → read the interpretation and complete epistemic status → save/share the reproduction record. Comparisons use a named, captured baseline and preserve this contract for both results.

The default numerical policy is exact **scaled-integer arithmetic** for the bounded, quantized decimal inputs, with sign derived before presentation rounding. RG defaults to a **signed, non-animated single-step** transfer/budget instrument: supplied `Z`, coarse energy, and defect produce the gross transfer and signed net expression. Negative and zero values remain visible. Do not imply a multi-scale RG evolution through staged decorative bars or promote repeated arithmetic to an actual RG trajectory. The equations, integer scaling, overflow/precision rules, and state schema are defined in `V6_EXPERIMENT_ARCHITECTURE.md`; IA must not introduce a competing model.

### Portable results and local scientific context

Every result surface must be self-contained enough for a screenshot, and every built-in screenshot/export, copied value, and shared scenario must carry the relevant **T0 / H1 / E1** classification together with the distinctions **supplied / derived** and **illustrative / hypothetical / established**. These are separate dimensions, not interchangeable status badges. E0 is retained for official target statements; a computed result does not inherit E1 merely because its explanatory equation uses an established framework.

- A result-sized screenshot region includes its numeric or graphical content, model/scenario identity, normalization, and readable scientific-status caption. Built-in capture must include that caption and the necessary input/derivation context.
- Copying a value creates a contextual record or labeled statement, for example: “T0 — derived illustrative signed net bound: …; supplied normalized inputs: …; model/version: …; H1 premises: …; no continuum proof.” There is no bare copy-result action.
- Exports include every applicable class, the supplied and derived fields, meanings/units, source locators, assumptions, limitations, model/arithmetic/schema versions, and the open-problem statement. A hypothetical premise is not relabeled established because the scenario selected it.
- Shared scenarios retain those fields through a versioned reproduction record and the corresponding stable model/registry identity; the landing view reconstructs the full instrument context. Share text includes the class and limitation. Validate classifications against the registry rather than trusting a label supplied in a URL.

This requirement concerns the complete result unit: context must be embedded with the value or figure, not left in a distant sidebar or a footnote that the capture/export can omit.

### Scientific audit: inspect unresolved work and challenge a claim

Proof obligations remain a readable register, with stable ID, required mathematical output, unresolved status, dependencies, evidence, and review links. Use a table where comparison matters and a structured stacked equivalent when narrow. Render one semantic cell per logical column, with translations inside that cell; the current duplication of untagged mathematical/name cells must be fixed before adding columns or new layout. Give headers explicit scope and the table a useful caption. Do not manufacture percentage-complete scores or infer proof completion from software test success.

**Failure Modes / Falsification Criteria** contains linked records of a possible failure, the conditions under which it applies, affected claims, and any illustrative scenario. Preserve the current five entries as conceptual failure modes/criteria. Their prose does not constitute a test. Any later executable evaluation needs a separately specified model/method, supplied inputs or fixtures, decision criteria, reproducible output, and scientific review before it is described as a test; even then, passing it does not prove the continuum theory.

Scientific review retains distinct scientific-objection and software-bug routes. A contextual “Review this claim” action prepares the target ID, exact URL, scenario/model version where relevant, and epistemic label for the existing GitHub form. The reviewer supplies their own objection and evidence and explicitly submits it in GitHub; the site must not imply a review was filed merely by opening the form.

### Methodology and sources: a reading surface with precise backlinks

Methodology should read as a short scholarly document, with an outline for purpose, E0/E1/H1/T0, claim-admission rules, inference limits, and reproducibility. Reference it from each claim and output. “Established framework” must describe the cited framework under its hypotheses, not certify the proposed application to continuum Yang–Mills theory.

Sources & citation should distinguish: official target; established background; original/hypothetical project exposition; software/version citation. Each entry has bibliographic metadata, supported scope, locator, linked claim IDs, and limits. Preserve unavailable presentation references as “source artifact unavailable in this repository” with their current slide locator. Do not invent a downloadable deck or imply those slides were verified.

## 4. Major changes and their rationale

### IA-01 — Group navigation by research activity

- **Current problem:** ten equal-weight numbered modules flatten context, manipulation, and audit into a dashboard menu; methodology and review are late in the list.
- **Proposed solution:** three named groups with the existing destinations and route keys; contextual links connect the activities.
- **UX rationale:** readers can orient, investigate, or challenge without remembering section numbers.
- **Visual rationale:** small editorial group labels and a restrained active indicator replace repeated outlined navigation cards.
- **Engineering implications:** central route registry; semantic links; identity independent of array position; no forced route migration.
- **Scientific-integrity implications:** methodology and unresolved obligations stay available throughout the workflow; instruments remain explicitly separated from theoretical exposition.

### IA-02 — Replace repeated credibility blocks with a publication masthead

- **Current problem:** publication strip, hero citation, four trust cards, and status panels repeat identity and status (`index.html:417`, `index.html:445`, `index.html:464`).
- **Proposed solution:** one early publication block and a persistent concise scientific-status statement; retain a full Sources & citation destination and contextual citation actions.
- **UX rationale:** a visitor can verify provenance without scanning the same metadata repeatedly.
- **Visual rationale:** a long-form title, whitespace, and one qualified equation establish hierarchy more effectively than small badges. Sans-serif UI and prose keep the interface recognizably modern research software; separate math typography and selectively serif editorial headings provide distinct roles.
- **Engineering implications:** central publication data drives visible metadata, citation exports, and machine-readable fields; provide wrap rules for long DOI/ORCID strings.
- **Scientific-integrity implications:** DOI and ORCID establish archival/author identity, not correctness or peer review; software CI is labeled structural validation rather than a scientific quality certificate.

### IA-03 — Promote analytical surfaces and contextual inspectors

- **Current problem:** the graph has an 820 px minimum width inside a roughly 60% column (`index.html:224`); instruments and inspectors are nested in repeated small panels.
- **Proposed solution:** full-width primary analysis, adaptive inspector placement, and direct links between graph nodes, assumptions, obligations, and sources. One registry generates the interactive graph, linear dependency list, and accessible semantic outline.
- **UX rationale:** readers can see a relationship before examining its details and return to their original selection after following evidence.
- **Visual rationale:** one dominant figure or plot provides visual calm and room for mathematical labels.
- **Engineering implications:** shared stable entity IDs, selection-state restoration, and parity validation across all three registry-generated representations, with scoped overflow and resize-aware composition. Use `min-width:0` on relevant grid/flex descendants and tracks such as `minmax(0,1fr)` where appropriate; test actual document width after every ancestor constraint is applied. A local `overflow:auto` declaration alone has already proved insufficient in the current live layout.
- **Scientific-integrity implications:** dependency, evidential support, and current scenario viability are distinct relationships; graph edges must identify their meaning. All three representations must expose the same relationships, classifications, source availability, and open obligations.

### IA-04 — Make laboratory context and records inseparable from results

- **Current problem:** current URL sharing restores only assumption-lab values; spectrum/RG and language are omitted (`index.html:1005`). “POS” and green output styling can outrun the explanatory text.
- **Proposed solution:** the mandatory Question → Assumptions → Inputs → Model → Derived quantities → Visualization → Interpretation → Epistemic status → Reproduction record sequence; early/local status repetition; versioned records; contextual copy/capture/share/export actions inside the relevant instrument.
- **UX rationale:** a researcher can identify what was varied, recover an exact configuration, and explain the output to another reader.
- **Visual rationale:** preserve the complete semantic sequence while the analytical figure dominates through size and whitespace; use color sparingly to support labeled numeric meaning. Status belongs inside the result unit so screenshot context does not depend on a remote sidebar.
- **Engineering implications:** normalized state schema; independent deterministic models; exact scaled-integer arithmetic as the default; signed single-step RG; input validation and route adapters; output contracts that carry applicable scientific classes, supplied/derived distinctions, model versions, and limitations into every capture/copy/share/export. Follow the experiment document's numerical policy.
- **Scientific-integrity implications:** generated configurations remain T0; H1 premises and E1 framework statements retain their own classifications and scope. Positive illustrative arithmetic cannot become an empirical measurement, theorem certificate, or continuum mass-gap claim; a rounded zero must not be reported as a positive result.

### IA-05 — Make review and provenance object-level actions

- **Current problem:** graph dependencies and slide references are text; scientific-review actions are generic destination links (`index.html:907`, `index.html:765`). Duplicate obligation-table cells displace content from its correct header in both languages (`index.html:650`).
- **Proposed solution:** stable claim/source/obligation records with backlinks, precise review targets, and clear source-availability information; use the accepted “Failure Modes / Falsification Criteria” destination while retaining its legacy route.
- **UX rationale:** a reviewer can move from assertion to evidence to objection without manually reconstructing context.
- **Visual rationale:** readable bibliographic rows and marginal locators replace a field of source cards and decorative status pills.
- **Engineering implications:** shared content registry; URL-encoded contextual form fields; source integrity checks; one semantic table cell per logical field with localized content inside; public static bibliography remains usable without interaction.
- **Scientific-integrity implications:** retain the requirement for independently checkable objections, downstream impact, and evidence; never silently upgrade a missing source or unresolved claim. Conceptual failure prose cannot be reported as an executed test.

### IA-06 — Rebuild mobile and keyboard navigation as the same research workflow

- **Current problem:** mobile navigation becomes a wide horizontal strip, the brand text disappears, and some top actions are hidden (`index.html:337`, `index.html:346`, `index.html:358`). Current view changes do not announce or focus the destination.
- **Proposed solution:** a clearly named Sections disclosure with the same three groups, a visible current-section label, a skip-to-main link, and focus-managed route changes. Preserve all utilities in a labeled utility menu when space is limited.
- **UX rationale:** no essential destination requires discovering sideways scrolling; keyboard and touch readers can perform the same audit tasks.
- **Visual rationale:** a compact masthead and generous single column preserve identity and whitespace at narrow widths.
- **Engineering implications:** native disclosure or a correctly implemented dialog; focus return on close; semantic anchor navigation with `aria-current="page"`; localized accessible labels; a visible heading focus target. Remove global arrow interception; arrow keys are scoped only to widgets that define such behavior.
- **Scientific-integrity implications:** open-problem status, provenance, and output limitations remain visible across viewport sizes and presentation modes. A small screen does not receive a less-qualified conclusion.

### IA-07 — Preserve static publication and improve route recovery

- **Current problem:** normal navigation replaces history; the custom 404 points to the historical GitHub project subpath (`404.html:4`). Existing structural CI does not detect either defect.
- **Proposed solution:** compatible query/fragment routing, browser-history restoration, a canonical-root recovery link, and explicit route/metadata validation.
- **UX rationale:** shared research links survive redesign, Back returns to the previous claim, and a broken link has a clear recovery path.
- **Visual rationale:** URL and navigation behavior should be quiet infrastructure; no new routing dashboard is needed.
- **Engineering implications:** preserve `CNAME`, sitemap, robots, `.nojekyll`, manifest, canonical/OG/JSON-LD fields; test deep links on static hosting and local serving before release.
- **Scientific-integrity implications:** stable locators protect citation and review context. An archival DOI must never be relabeled as the new v6 artifact without an actual archival record.

## 5. Publication and open-science preservation register

| Asset / identifier | Preserve in v6 | Validation |
|---|---|---|
| `https://www.yangmillsresearch.org/` | Canonical origin for root and share URLs | Canonical link, OG URL, JSON-LD, README, CFF, robots, sitemap, and manifest agree; do not alter DNS as part of design work. |
| `CNAME` | Exactly `www.yangmillsresearch.org` | Retain current automated assertion and deployed direct-load check. |
| Concept DOI `10.5281/zenodo.22739745` | Evolving-project identifier | Visible label and citation export identify it as Concept DOI / all versions. |
| Archived DOI `10.5281/zenodo.22739746` | Exact archived v5.0.1 identifier | CFF, BibTeX, visible archive label, and release documentation preserve this relationship. A v6 website version is not a v6 Zenodo archive. |
| ORCID `0009-0001-9217-0917` | Author identity and outbound profile link | Verify spelling of Baran Çolakoğlu and consistency in UI, CFF, BibTeX, and JSON-LD. |
| `CITATION.cff`, `ZENODO.md` | Machine-readable software citation and archival policy | Keep existing archived metadata until an actual new archive supplies its version-specific DOI. |
| `REFERENCES.md`, `METHODOLOGY.md`, `SCIENTIFIC_REVIEW.md` | Durable scholarly/audit records | Keep public links; align in-app summaries without silently changing epistemic definitions. |
| `CONTRIBUTING.md`, `CHANGELOG.md`, release notes | Contribution protocol and version history | Preserve historical facts; add future v6 change history only when implemented. |
| `.github/ISSUE_TEMPLATE/scientific-review.yml` | Target, category, objection, evidence, downstream impact, proposed resolution | Existing required fields still appear; contextual entry links work. No automated submission. |
| `.github/ISSUE_TEMPLATE/bug-report.yml` | Browser/version, exact scenario URL, steps, expected/actual behavior | Keep software failures distinct from mathematical objections. |
| `.github/ISSUE_TEMPLATE/config.yml` | Official Clay contact link and existing issue policy | Check the link remains accessible from the review workflow. |
| `.github/workflows/quality.yml`, `scripts/validate.mjs` | Read-only-permission quality workflow, required audit/publication assets | Evolve brittle version tokens deliberately; do not remove checks merely to make a redesign pass. |
| `LICENSE`, `CONTENT-LICENSE.md` | MIT code license and separate research-content terms | Do not represent all linked/research content as MIT-licensed. |
| `robots.txt`, `sitemap.xml`, `site.webmanifest`, `.nojekyll`, `404.html` | Static publication/discovery infrastructure | Correct 404 recovery to canonical root; link/check manifest deliberately if retained, without claiming offline installation exists. |

The current HTML contains the canonical and structured metadata but does not reference `site.webmanifest` with a manifest link. Preserve the file and decide explicitly whether manifest integration is part of implementation; a manifest file alone is not evidence of an installed/offline application.

## 6. Responsive, keyboard, and nonvisual behavior contract

- At wide widths, display grouped navigation alongside the research surface only if it leaves sufficient width for the active instrument. At medium widths, collapse navigation before sacrificing analytical readability; do not use viewport breakpoints as a substitute for content testing.
- At phone widths and at 200–400% zoom, keep one document column. Pan only intrinsically two-dimensional figures within labeled, keyboard-operable regions. No page-wide sideways scroll. Supply the graph's linear dependency list and accessible semantic outline from the same registry, plus a labeled numeric table for every plot.
- Keep open-problem status in the shared shell and experiment-specific status inside each result unit. Repeat local T0/H1/E1 context, as applicable, before the full Epistemic status stage. Neither belongs exclusively in a sidebar that disappears.
- Use one visible page heading per selected view and an orderly heading hierarchy beneath it. A route transition focuses that heading and updates the page title; an input edit retains input focus and never jumps to the top.
- Navigation is links, not tabs. Selection controls inside an instrument may use the appropriate widget pattern. A graph node must expose an action name, role, focus indication, and selection state; the current generic SVG `role="img"` plus focusable descendants needs browser/screen-reader verification.
- Keep a concise live status region for completed actions and captured results; avoid announcing every intermediate slider tick. Associate labels, exact-value fields, normalized units, and help text with their controls.
- Reduced motion applies to both CSS and JavaScript. The signed single-step RG result is immediately available and non-animated; no RG progression animation is planned for v6. Any retained general interface motion must have defined meaning and respect reduced-motion preferences.
- Presentation, screenshot, print, export, copied-value, and shared-scenario representations keep applicable T0/H1/E1 classification, supplied/derived distinctions, illustrative/hypothetical/established meaning, figure captions, legends, source locators, model/arithmetic version, and exact inputs. Hide manipulation controls only when their values remain represented in the output. Do not offer bare copy-result actions.
- Both languages receive equivalent scope and epistemic statements. Localize navigation names, document title, graph descriptions, parameter descriptions, exports, and review context. Do not let an English-only abbreviation such as “POS” carry the scientific interpretation.

## 7. Accepted-amendment traceability

U1–U8 follow the user's amendment order and identify where the accepted requirements enter this architecture. They are not scientific classifications. The experiment and design-system documents define the implementation details, and the implementation plan owns phase sequencing.

| Accepted amendment | IA decision and location | Required cross-document alignment |
|---|---|---|
| U1 — Mandatory research-instrument contract | Section 3, “Instruments: mandatory research contract,” fixes all nine stages in exact semantic order; IA-04 preserves that order. | Use the same exact sequence in experiment schemas, component design, exports, and validation fixtures. |
| U2 — Result-local epistemic context | Section 3, “Portable results and local scientific context,” embeds applicable class, supplied/derived and illustrative/hypothetical/established distinctions in every result unit and capture/copy/share/export path. Early/local status is repeated before the full status stage. | Experiment output schemas and design-system result captions implement the same fields; there is no bare copy-result path. |
| U3 — Signed single-step RG, no animation | Section 3 instrument workflow makes one signed, non-animated transfer/budget evaluation the default and excludes decorative multi-step evolution. | Use the model and signed visualization contract in `V6_EXPERIMENT_ARCHITECTURE.md`; no alternate IA recurrence. |
| U4 — Exact scaled-integer arithmetic | Section 3 and IA-04 adopt scaled integers for bounded quantized decimal inputs, preserving sign before formatting. | Use the experiment document's scale, supported precision, overflow policy, boundary fixtures, and reproduction metadata. |
| U5 — Registry-generated three-representation argument | Section 3, Argument map, and IA-03 require an interactive graph, linear dependency list, and accessible semantic outline generated from one registry with parity validation. | Experiment/content registry and implementation tests compare all three outputs, not just graph edges and inspector labels. |
| U6 — Failure terminology | Section 2 navigation and route table adopt “Failure Modes / Falsification Criteria,” retaining `?view=falsify` and `#view-falsify`; Section 3 excludes test claims for current prose. | Labels, bilingual content, review targets, exports, and tests use the accepted distinction. |
| U7 — Modern research-software typography | Section 3 page anatomy and IA-02 keep sans-serif UI/prose, a separate mathematical system, and selective serif editorial headings. | `V6_DESIGN_SYSTEM.md` defines font roles and figure/control metrics without turning instruments into a journal facsimile. |
| U8 — Analytical surface dominance | Section 3 retains one dominant graph/plot, bounded controls, concise narrative context, and adaptive inspectors; IA-03/IA-04 preserve semantic order while analytical size and whitespace establish visual priority. The nine stages do not become nine cards. | Design-system layouts and implementation checks verify a large readable analytical surface on desktop and contained, accessible alternatives on mobile; visual prominence does not postpone status or disrupt focus order. |

## 8. IA acceptance gates

| Gate | Required evidence |
|---|---|
| Content coverage | Every current view, source, review path, input, preset, export, and identifier maps to a v6 destination; no scientific record disappears during visual simplification. |
| Route compatibility | All ten `?view=` links, current `#view-*` IDs, identified external aliases, and representative v5 scenario URLs open the intended content. Query/fragment precedence is tested. |
| State and history | Missing, empty, malformed, out-of-range, and valid inputs are distinguished; reload and Back/Forward restore the expected route/state/selection/language. |
| Research task completion | A first-time reader locates the open-problem statement and unproved bridge; a researcher records a reproducible illustrative scenario; a reviewer traces a claim to an obligation/source and prepares a precise objection. Record failures during usability sessions rather than assuming the hierarchy succeeds. |
| Mandatory instrument order | Every instrument, accessible reading order, and reproduction record follows Question → Assumptions → Inputs → Model → Derived quantities → Visualization → Interpretation → Epistemic status → Reproduction record. A large figure retains visual dominance without moving required context later in the semantic order. Local status is visible before the full status stage. |
| Three-representation parity | Compare the registry-generated interactive graph, linear dependency list, and accessible semantic outline for exact node IDs, dependencies, relation meanings, assumptions, claims, statuses, sources, and obligations. Select the same node and trace the same upstream/downstream relationships through all three, including multi-parent nodes. |
| Portable scientific context | Capture a complete result region, copy a value, export, and open a shared scenario for each instrument. Each retains applicable T0/H1/E1 class, supplied/derived and illustrative/hypothetical/established distinctions, model/context identity, limitations, and open-problem status. Bare copied output and detached unlabeled result artifacts fail this gate. |
| Numerical and RG semantics | Reproduce exact decimal-zero boundaries such as `0.10 × 0.20 − 0.02 = 0` through default scaled-integer evaluation and shared/exported records. Verify negative, zero, and positive signed single-step RG results without clipping, fictitious staged progression, or a rounded-zero positivity claim; use the experiment document's fixtures. |
| Failure terminology | Navigation displays “Failure Modes / Falsification Criteria”; the legacy query and fragment still resolve. Every current prose entry is identified as a conceptual mode/criterion, never as an executed test or test pass/fail. |
| Typography roles | Review navigation, controls, prose, tables, instrument labels, equations, and selected editorial headings. Sans-serif UI/prose, separate math rendering, and selectively used serif headings match the design system in both languages and at zoom. |
| Analytical surface dominance | Inspect each instrument at wide and narrow widths: one analytical surface holds visual priority through readable dimensions and whitespace, controls remain bounded, and the nine contract stages do not become an equal-weight card grid. Verify that this composition preserves the exact semantic/focus sequence and early result-local status. |
| Keyboard and mobile parity | Complete the same workflows at the mandatory 320 px, 390 px, 768 px, 1120 px, 1121 px, 1440 px, and 1920 px widths in both languages, with keyboard only and at 200% text scaling and 400% zoom. Additional widths may supplement this matrix. No scientific context or controls may become unreachable. Repeat the measured graph/RG/audit failures and require document scroll width to stay within the viewport while local figures remain usable. These are planned v6 checks, distinct from the current measurements above. |
| Bilingual scientific tables | Every visible obligation row has the same logical columns as its visible header in both languages; required output and epistemic status have correct header association. Verify G2/G4/G5/G6 explicitly. |
| Scholarly integrity | E0/E1/H1/T0 meaning is unchanged unless explicitly reviewed; scenario viability never changes epistemic class; unavailable source artifacts remain disclosed. |
| Publication preservation | DOI/ORCID, exact archive version, canonical metadata, CFF/BibTeX, issue forms, licenses, sitemap/robots/manifest, and canonical recovery all pass the preservation register. |
| Static-delivery continuity | Root, each deep link, unknown routes, printed records, local serve, and the documented direct-file reading mode behave as specified without a backend dependency. |

Implementation sequencing and release gates are defined in `V6_IMPLEMENTATION_PLAN.md`. No navigation, source, citation, or production file was modified to prepare or amend this architecture.
