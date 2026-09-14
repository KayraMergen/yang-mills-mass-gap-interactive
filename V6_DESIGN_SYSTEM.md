# v6 — Research Interface Design System

Status: **final v6 design-system specification, implementation-ready**, 2026-09-14. The [accepted audit](V6_DESIGN_AUDIT.md) and the user's eight amendments govern this specification. No production implementation is included.

The visual aim is modern research software: spacious analytical surfaces, precise mathematical typography, clear controls, and restrained academic character. Serif typography supports selected editorial moments; the interface must remain recognizably an interactive research environment.

The Yang–Mills Millennium Problem remains open. This system must make a hypothetical program easier to inspect without lending its unproved claims false authority.

## 1. Mandatory principles and instrument anatomy

Every instrument implements the following **research-instrument contract**, in this semantic and documentation order:

**Question → Assumptions → Inputs → Model → Derived quantities → Visualization → Interpretation → Epistemic status → Reproduction record.**

This sequence defines the complete research object. It does not require nine equally prominent panels or force the plot below a long form. On a wide screen, the supporting sequence occupies a restrained control/reading region beside the dominant analytical surface. On narrow screens, retain a coherent reading/focus order and provide “Go to visualization” / “Edit inputs” links. Do not use CSS reordering that makes keyboard order diverge from reading order.

The dedicated Epistemic status section gives the full explanation. A short, result-specific status line also appears beside every derived value, plot, comparison, copied result, and capture. A global notice is supplementary.

| Contract element | Required visible content | Presentation |
|---|---|---|
| Question | What this instrument helps inspect | Short sentence beneath the page title |
| Assumptions | Stipulated, withheld, unspecified premises; normalization | Compact readable list; extended explanation may expand |
| Inputs | Supplied values, units/normalization, domain and precision | Exact entry with optional supporting slider |
| Model | Reviewed equation, model identity and applicability | Typeset equation with an ID and hypotheses |
| Derived quantities | Signed results, dependencies, precision | Aligned ledger; never oversized decorative metric cards |
| Visualization | Data-derived geometry with scale and labels | Dominant analytical surface |
| Interpretation | What follows and what remains unavailable | Short result-specific explanation with complete blockers |
| Epistemic status | Class, supplied/derived origin, illustrative scope, hypothetical dependencies or established scope | Readable text, locally repeated at results |
| Reproduction record | Canonical scenario, model/revision, assumptions, values and provenance | Capture, compare, copy-with-context, share and export actions |

The [experiment architecture](V6_EXPERIMENT_ARCHITECTURE.md) owns the scientific data and behavior contract. The [information architecture](V6_INFORMATION_ARCHITECTURE.md) owns destinations and research workflows.

## 2. Layout and spacing

### Layout roles

Use three compositions with shared alignment, rather than a universal dashboard grid:

| Composition | Primary object | Proposed geometry |
|---|---|---|
| Research reading | Exposition, methodology, sources or review guidance | Prose measure 62–72ch; optional 240–280 px outline/reference region |
| Research instrument | Plot, graph, signed budget or derivation | Analysis takes at least 65% of available main-column width when controls sit beside it; controls usually 280–320 px |
| Audit register | Obligations, dependencies and evidence | Full main-column table/outline, with detail below or in a genuinely readable inspector |

Outer shell: maximum width 1680 px; fluid page gutters 20 px on small screens, 32 px on medium screens, and 48 px when space allows. Navigation rail: approximately 208 px, with a 32 px gap to main content. Collapse the rail before it makes the research object unreadable. At 1440 px, a typical usable main width is about 1100 px; do not force an 820 px minimum figure plus a 320 px inspector into that space.

Instrument layout switches based on actual available space. When the analytical region cannot remain at least roughly 640 px wide alongside controls, move controls above it or into a disclosure whose summary preserves all active inputs. For the graph, use a full-width map with a below-map inspector until a side inspector of at least 320 px and a useful map can coexist. These are prototype starting constraints, not a promise that one media-query threshold fits every page.

Large surfaces should be visibly dominant, not arbitrarily tall. Suggested desktop plot heights: 360–520 px for spectrum/budget; 520–680 px for graph/derivation where content justifies it. On phones, use readable local figures and an accessible linear representation instead of scaling all labels into illegibility.

All flexible grid/flex children that contain figures need explicit shrinking rules such as min-width:0; flexible tracks should use minmax(0,1fr) where appropriate. Figure scrolling must remain local. No viewport may acquire horizontal page scrolling from controls, metadata, or tables.

### Spacing scale

Use one base scale in CSS custom properties. Values below are intended pixels at a 16 px root; implement scalable text-related spacing in rem.

| Token | Value | Use |
|---|---:|---|
| space-1 | 4 | Tight symbol/label association |
| space-2 | 8 | Label to value; compact inline metadata |
| space-3 | 12 | Related controls and small annotations |
| space-4 | 16 | Within a control group |
| space-6 | 24 | Between related groups; mobile surface inset |
| space-8 | 32 | Desktop region inset and column gap |
| space-12 | 48 | Major subsection separation |
| space-16 | 64 | Page-section rhythm |
| space-24 | 96 | Optional overview editorial separation on wide screens |

Use whitespace and alignment first, a thin rule second, and a filled enclosure only when it marks a distinct interactive object. Avoid card-inside-card composition. A plot may have one enclosing surface; its axis labels, legend, status, and ledger should not each become another card. No fixed minimum height for prose boxes merely to match an adjacent column.

## 3. Typography: three distinct systems

| Role | Preferred family | Scale / behavior |
|---|---|---|
| UI, navigation, controls, body explanation | Inter, with system-ui fallback | Body 17–18 px, line-height 1.55–1.7; UI 14–16 px, weights 400/500/600 |
| Selected editorial headings | STIX Two Text or an equivalent scholarly text serif | Overview title 40–56 px desktop, 32–38 px narrow; section lead 28–36 px where useful |
| Mathematics | Renderer-supported STIX2 math first; renderer-native equivalent if selected by the comparison gate | Inline optically matched to prose; display 22–28 px desktop and 18–22 px narrow, with preserved script readability |
| Numeric ledgers, IDs, code/trace | UI sans with tabular numerals; system monospace for code and literal records | 14–16 px; align decimals and signs without turning prose into terminal text |

Use sans headings for instrument titles, inspectors, controls, tables, navigation and feedback. Serif use is selective: an overview title or an explanatory section opening, not every heading or UI label. Do not adopt paper columns, faux page margins, aged textures, journal imitation, or editorial ornament.

Supply font files intentionally; the current Inter name alone does not guarantee the face. Prefer a small self-hosted WOFF2 set with only the required weights, Turkish glyph coverage, and appropriate font licenses. Keep the fallback experience readable. Font loading must not move inputs or detach a result from its caption.

Avoid heavy 800-weight prose, all-caps body labels, excessively negative tracking, or tiny metadata. Body copy should remain readable at 200% text scaling; line lengths and input widths must expand or wrap naturally. Long DOI/ORCID strings may wrap safely; mathematical expressions require reviewed breakpoints rather than arbitrary character wrapping.

## 4. Mathematical rendering

### Renderer decision

Use **MathJax with its supported STIX2 font as the primary v6 renderer direction** because it directly serves the preferred mathematical character. MathJax documents a STIX2 font option and asynchronous typesetting for dynamically loaded font data; use its supported font configuration and promise-based lifecycle. Self-host the selected runtime and fonts. Do not download every font range at startup. [MathJax font support](https://docs.mathjax.org/en/latest/output/fonts.html)

Keep **KaTeX with its own supported math fonts** only as a G3 contingency if MathJax/STIX2 fails a measured payload, interaction, print, or accessibility requirement. Its HTML-and-MathML output supports visual rendering with an accessible mathematical representation. Do not claim that a CSS font-family override makes KaTeX a STIX renderer. [KaTeX options](https://katex.org/docs/options), [KaTeX font documentation](https://katex.org/docs/font)

G3 confirms or vetoes the MathJax/STIX2 direction; do not ship both renderers. Pin the chosen package version after testing rather than writing an unverified version into this plan. If a developer build is introduced, pre-render static equations where compatible with accessible output and retain scoped runtime typesetting for dynamic content. The scientific expressions remain data in a reviewed registry.

### Equation component contract

Every equation record contains an ID, reviewed TeX, plain-language description, applicable assumptions/domain, claim or model reference, epistemic class, and source locator or explicit missing-source status. The view displays:

1. The equation with properly sized operators, delimiters, radicals, superscripts and subscripts.
2. A stable equation label and a visible classification such as “H1 · proposed inequality.”
3. The assumptions required to interpret it, adjacent or linked to a immediately available explanation.
4. “Copy equation with context” and a readable source/description fallback.

Copying must preserve the equation's class and scope. No app action may produce an apparently established theorem from a hypothetical equation by dropping its caption.

For long mathematics, prefer reviewed aligned lines or smaller semantic subexpressions. If a genuinely two-dimensional expression needs local horizontal scrolling, label the region, make it keyboard reachable, and provide a full text/math alternative. Never shrink it until subscripts disappear. Do not insert arbitrary breaks into operator names or identifiers.

Typesetting errors must produce a visible “Equation unavailable” message with its ID and readable reviewed source. They must not silently omit a condition or leave a blank success surface. Restrict the renderer to the reviewed macro set; imported scenario values are data, never executable TeX or HTML.

The specimen corpus must include the projected coercivity target, the RG inequality with norm factor, the normalized vacuum-mixture formula with orthogonality assumptions, spectrum interval endpoints, a multiline conditional derivation, long subscripts, Greek/script symbols, and Turkish prose. Scientific reviewers must approve domains, projection conventions, limit hypotheses, and the distinction between gross and residual-adjusted bounds before those expressions are presented as definitive.

## 5. Color, borders, and emphasis

These are proposed tokens, not production CSS:

| Token | Value | Role |
|---|---|---|
| background | #0B1118 | Page canvas |
| surface | #101923 | Analytical or control surface |
| raised | #17222E | Selected control/disclosure/dialog region |
| text | #E8EDF2 | Main text |
| secondary | #B1BDC9 | Explanations |
| muted | #91A1B2 | Supporting metadata, never disabled essential content |
| divider | #2B3948 | Decorative separation |
| graphic | #72869A | Essential axes, edges and visible boundaries |
| accent | #A9C7E6 | Links, focus and selection |
| hypothetical | #DFB978 | H1 scope support |
| negative | #EA9A9A | Negative bound or blocked condition, with text |
| positive | #9DC4AF | Positive scalar sign, with text; no proof-success implication |

Calculated nominal contrasts on surface/raised respectively: main text 15.04/13.66:1, secondary 9.27/8.42:1, muted 6.70/6.09:1, graphic 4.72/4.29:1. These solid-color calculations establish starting tokens, not a rendered accessibility pass.

No glows, gradients inside data marks, ornamental shadows around every region, or vivid success backgrounds. Default corner radii: 6–8 px for controls and 8–12 px for surfaces; larger radii only for genuine overlays. Use a subtle shadow for dialogs/popovers if needed. Graph edges and uncertainty/condition markers must remain distinguishable in grayscale and color-vision simulations.

Status uses a short text line with at most a small rule/symbol. Never make five adjacent badges stand in for a sentence. Selection, numeric sign, proof status, and software execution status must not share an ambiguous green/red coding scheme.

## 6. Result-local epistemic presentation

The vocabulary has separate dimensions:

| Dimension | Examples | Meaning |
|---|---|---|
| Claim class | E0 official target; E1 established framework; H1 hypothetical claim; T0 illustrative interaction | Evidence/scope classification |
| Quantity origin | supplied; derived | Whether the user stipulated a value or the declared model calculated it |
| Representation | illustrative; conditional model result | What the graphic/value represents |
| Dependencies | hypothetical premises; cited established theorem under its hypotheses | Why an interpretation is conditional |
| Execution and sign | invalid input; blocked premise; negative/zero/positive scalar | Software/model behavior, not mathematical proof status |

Examples of compact copy:

- “T0 · Derived: +0.5300 normalized units. Conditional on A1–A6 as stipulated; H1 obligations unresolved.”
- “T0 · Supplied: Δ = 0.42. Illustrative interval; no spectrum computed.”
- “H1 · Proposed reflection-back inequality. Unproved within this program.”
- “E1 · Established framework. Application requires the listed hypotheses and source.”

Each result has its own scope line within the same visual surface. A figure carries title, axis normalization, supplied/derived designation, model identity and scope caption. Comparisons label both scenarios. The positive sign is legible without relying on color.

App-generated screenshots/figure captures include those captions within their captured bounds. Screen layouts keep scope adjacent to each result so ordinary screenshots retain it when capturing the whole result object. The app cannot guarantee the meaning of an arbitrary external crop; it must never place essential scope only in a distant sidebar or tooltip.

“Copy result” copies a compact contextual record, including value, origin, class, model, premises, and open-problem limitation. It must not copy a bare scalar. Machine-readable exports may have numeric fields for computation, but each result references mandatory status/provenance fields in the same envelope. Shared scenarios serialize input origin and model identity, restore local status, and recompute results with the declared supported model; they cannot import an unverified claim of establishment.

## 7. Analytical component standards

### Graph, linear list, and semantic outline

The dependency registry generates three required views: an interactive graph, a linear dependency list, and an accessible semantic outline. All use the same stable node IDs and typed edges.

The graph is the spatial view. The list is a linear topological traversal with explicit predecessor/successor relationships. The outline uses real headings and structured relationship lists with hyperlinks; a directed graph is not necessarily a tree, so repeated dependencies remain explicit cross-references. Do not substitute a single image alt text or a hidden sentence for the outline.

Use labels and edge patterns for proposed inference/prerequisite distinctions, with a legend that is available while inspecting. No edge may be invented for layout convenience. The inspector includes the claim's class, scenario viability, assumptions, obligations, source and failure consequences. Keyboard navigation and list/outline links must reach every node. All three representations must pass registry-parity checks.

### Assumption instrument

The derivation, bound decomposition and complete reasoning trace form the main object. Controls are exact entries and premise states with concise explanations. Show all blockers, with a disclosure only when their count and existence remain visible. Use “All premises stipulated” rather than an apparent proof-completion preset.

### Spectrum instrument

Use a wide, labelled normalized energy axis and clearly open excluded interval endpoints. Distinguish supplied illustrative Delta from a lab-linked conditional quantity. Give the mixture example its assumptions; don't add invented eigenvalues or uncertainty bands. At Delta zero or blocked linkage, show a truthful state with a text equivalent.

Linked Delta retains the lab model's four-decimal result precision and domain, independently of the supplied Delta slider's [0,1] / 0.01 limits. Show 1.8000 and 0.0001 faithfully: expand labelled axes where needed, preserve the exact numeric ledger, and use a clearly labelled detail view for a tiny interval rather than imposing a false visual floor. Comparisons share an axis domain.

### RG instrument

The v6 object is a **signed single-step transfer/error budget**. Align transferred coarse input, defect subtraction and resulting bound on one common scale with a visible zero. Display negative values without clipping, a minimum visual fill, or saturation that hides their meaning. The local model states the normalized-state convention.

Remove the old multistage animation. A recurrence-based view may be considered later only with a declared recurrence, scale direction, per-step inputs/assumptions, output table and separate scientific/model review. Animation alone cannot supply missing model semantics.

### Failure Modes / Falsification Criteria

Use this exact English destination name for the current prose-based content, retaining the legacy falsify route key. Present a criterion, affected claims, required evidence, and downstream implication. Only label something an executable test when it has defined inputs, method, expected assertion, actual result and reproducible record. Applying an illustrative premise change is not an actual mathematical counterexample.

## 8. Interaction, responsive behavior, and accessibility

Navigation is grouped by research activity and implemented as links with an active-page state. On small screens, use an explicit labelled navigation control showing the current destination and all groups; don't require a long horizontal strip. Preserve language, history, selection and scenario context. Provide a skip link and predictable focus after route changes. Arrow shortcuts belong only to clearly documented local widgets.

Controls: 44 px comfortable target height, clear hover/pressed/focus states, persistent labels, units, and input constraints. The 44 px target is a product standard; WCAG 2.2 AA's target minimum is 24 CSS px subject to its exceptions. Use a solid visible focus outline with sufficient contrast and keep focus clear of sticky elements. [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/)

Input errors explain the permitted value and keep the last valid result visibly identified as previous, never current. Disable capture of an invalid or stale result until recomputation. Empty, blocked, zero, negative, unavailable-source, loading and rendering-error states all require designed copy; a disabled control alone is insufficient explanation.

Use native semantics, fieldsets/legends for premise groups, correctly scoped table headers, and concise live announcements after a committed change. Avoid reading every slider tick. Status, graph relationships and equations need manual assistive-technology checks.

At 320 CSS px equivalent reflow, prose, metadata and controls must fit without horizontal page scrolling. Two-dimensional figures may have contained scrolling and a complete linear equivalent. Test 200% text scaling and 400% zoom separately; resizing alone does not establish zoom usability. [W3C reflow guidance](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)

Motion: no automatic research-result playback. Respect reduced motion in both CSS and JavaScript. Use short optional state transitions, approximately 120–180 ms, only to explain selection or change; updated values and meaning must remain available without animation.

Print/presentation: retain the scientific scope on every result, equation captions, identifiers and citations. Use a dedicated light print palette, page-break handling and complete figure records. Presentation mode may simplify navigation but must preserve status and a usable way to change section. “Math off” must not silently produce an incomplete research report.

## 9. Major decisions and rationale

### DS-01 — Modern UI with selective editorial serif

- **Current problem:** the current heavy title and uniform sans/monospace styling offer little separation between editorial, control and mathematical roles.
- **Proposed solution:** three typography systems; sans for research-software interaction, supported math fonts for equations, selective serif for editorial hierarchy.
- **UX rationale:** users recognize controls and can read scientific prose without confusing the page with a static paper.
- **Visual rationale:** contrast comes from role and proportion, with restrained scholarly character.
- **Engineering implications:** explicit font loading, glyph/weight budgets, fallback and bilingual tests.
- **Scientific-integrity implications:** typography supports clarity without imitating a publication or implying peer review.

### DS-02 — Analysis-dominant composition

- **Current problem:** card density, oversized metadata and intrinsic minimum widths compress research objects.
- **Proposed solution:** reading/instrument/register layouts; dominant analytical area, bounded controls, minimal enclosures, responsive inspector placement.
- **UX rationale:** relationships can be inspected at a useful scale while inputs remain reachable.
- **Visual rationale:** shared alignment and whitespace create hierarchy rather than repeated boxes.
- **Engineering implications:** layout primitives, explicit shrink/overflow behavior, per-surface responsive specimens.
- **Scientific-integrity implications:** conditions and labels remain readable; no hidden assumption caused by clipping or miniaturization.

### DS-03 — Equation and result components preserve meaning

- **Current problem:** Unicode wrapping and isolated values separate statements from their hypotheses and status.
- **Proposed solution:** reviewed equation components plus result-local multidimensional scope and contextual copy/capture/export.
- **UX rationale:** a reader can identify what a result means both in the app and after sharing it.
- **Visual rationale:** precise mathematics and concise captions create credibility through clarity.
- **Engineering implications:** renderer selection, shared typed records, capture bounds and export assertions.
- **Scientific-integrity implications:** supplied, derived, illustrative, hypothetical and established scopes remain explicit across media.

### DS-04 — Semantic graphics and accessible alternatives

- **Current problem:** graph dependencies disagree; bars invent RG stages; small diagrams lack faithful data semantics.
- **Proposed solution:** three validated dependency representations, signed RG budget, honest schematic spectrum, explicit failure criteria.
- **UX rationale:** users can inspect the same relationships visually or linearly and reproduce calculations.
- **Visual rationale:** large data-derived surfaces with meaningful axes replace decorative graphics.
- **Engineering implications:** registry-generated renderers, exact model outputs, semantic outlines, parity and boundary tests.
- **Scientific-integrity implications:** visual geometry cannot invent an inference, trajectory, measurement, or test.

## 10. Design acceptance

Before implementation is considered visually complete, inspect overview, graph/list/outline, assumption lab, spectrum, signed RG budget, obligation table, source entry and result export in both languages at 320/390/768/1120/1121/1440/1920 px, plus zoom/print modes.

Acceptance requires: one clearly dominant research object per instrument; complete instrument contract; separate typography roles; no clipped conditions; legible positive/zero/negative states; scope inside captures and copied results; faithful dependency parity; usable keyboard/assistive-technology paths; and no loss of DOI, ORCID, citation, review or canonical-domain infrastructure.

These are design requirements to validate, not claims that v6 already passes them. The [implementation plan](V6_IMPLEMENTATION_PLAN.md) defines sequencing and release gates.


## 11. Locked visual direction and anti-density rules

The first v6 implementation should be visually calm, high-information, and unmistakably research software. The following rules are hard constraints for design review:

### Visual stack

- **UI/body:** Inter, regular/medium/semibold only as needed.
- **Editorial display:** STIX Two Text for the overview title and a small number of section-opening headings.
- **Mathematics:** MathJax + STIX2 is the primary direction; the renderer controls math glyph metrics.
- **Numerical ledgers:** UI sans with tabular numerals; monospace is limited to literal code/serialized records.

### Surface budget

- No card-inside-card composition.
- A research instrument gets at most one major bordered analytical surface; controls may use a quiet bounded region without becoming a competing “dashboard card wall.”
- Use whitespace and alignment before borders; use borders before shadows.
- Do not place more than two visually strong accent elements in the same instrument viewport.
- Metadata/status rows must never visually outweigh the equation, plot, graph, or derivation they qualify.

### Spaciousness targets

- Main content width remains fluid up to 1680 px.
- Reading prose stays approximately 62–72ch.
- Major section rhythm is normally 48–64 px on desktop and 32–48 px on narrow screens.
- Instruments should devote roughly two-thirds or more of useful desktop width to the analytical object whenever controls are beside it.
- When that geometry cannot be preserved, stack the controls; never compress the analytical object into a decorative thumbnail.

### Equation aesthetics

- Display equations are treated as first-class visual objects, not inline code blocks.
- Default display size targets 24–28 px on desktop and 19–22 px on narrow screens, adjusted by corpus testing rather than arbitrary shrinking.
- Long derivations use reviewed alignment and semantic line breaks.
- Equation labels, scope, and assumptions are nearby but quieter than the mathematics itself.

These rules exist to prevent a technically valid redesign from drifting back into dense dashboard aesthetics.
