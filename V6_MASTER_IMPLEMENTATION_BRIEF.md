# v6 — Master Implementation Brief

This file is the short operational brief for the finalized v6 specification set.

## Product direction

Transform the current compact dashboard-like single-page application into a **spacious, modern mathematical research interface** with three modes of work:

1. read the research program;
2. inspect reproducible T0 research instruments;
3. audit/challenge claims, obligations, provenance, and failure criteria.

## Locked experience decisions

- No cramped dashboard layout and no nested card wall.
- Large analytical surfaces dominate instrument routes.
- Inter is the UI/body direction; STIX Two Text is selective editorial display; MathJax + STIX2 is the primary mathematical rendering direction subject to the G3 veto gate.
- Every instrument implements the nine-part research contract.
- Every result carries its own scientific scope and provenance.
- Current scalar arithmetic uses exact scaled integers.
- RG becomes a signed single-step budget; old staged animation is removed.
- Graph, dependency list, semantic outline, and inspector use one authoritative registry.
- “Failure Modes / Falsification Criteria” replaces overclaimed “tests” wording for prose-only content.
- All legacy view keys, canonical domain, DOI/ORCID/citation infrastructure, and open-problem/no-proof language are preserved.

## Implementation order

1. Scientific registries and exact models.
2. State/schema/router foundation and regression tests.
3. Research shell, typography, and MathJax/STIX2 equation system.
4. Rebuild graph and all instruments.
5. Result records, copy/share/capture/export/review context.
6. Responsive/accessibility/print/performance validation.
7. Versioned release and canonical deployment.

Do **not** start by polishing CSS around the current scientific/state defects.

## Release blockers

A01–A09 from the audit remain blockers, especially default-state corruption, floating-point sign error, graph-topology disagreement, undefined RG animation, mobile/presentation loss of scientific scope, incomplete reproduction state, and insufficiently local qualification of hypothetical statements.

The complete authoritative detail lives in the five v6 specification documents.
