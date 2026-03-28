---
title: "refactor: Redesign datatypes annotator with stop-at-primitive cascade"
type: refactor
status: active
date: 2026-03-27
origin: docs/brainstorms/2026-03-27-datatype-annotation-stop-at-primitive-requirements.md
---

# refactor: Redesign datatypes annotator with stop-at-primitive cascade

## Overview

Redesign the datatypes annotator so that annotation cascades down the AST and stops at the node where the primitive value lives. FieldRepetition is reintroduced as the entry point. Nodes below a primitive stop-point get no datatype annotation — absence of annotation is meaningful.

## Problem Frame

The current implementation annotates every Component and Subcomponent regardless of whether the value conceptually lives there. A consumer cannot tell from the annotation alone where the primitive value sits. (see origin: `docs/brainstorms/2026-03-27-datatype-annotation-stop-at-primitive-requirements.md`)

The new model: `kind: "primitive"` means the value is HERE. `kind: "composite"` means look at children. No annotation means the value lives on an ancestor.

## Requirements Trace

- R1. FieldRepetition always gets annotated with `datatypeId`, `kind`, `title`
- R2. Primitive field → annotation stops at FieldRepetition (Components/Subcomponents get nothing)
- R3. Composite field → each Component gets annotated with component profile (`id`, `name`, `required`, `datatypeId`, `maxLength`, `kind`, `title`)
- R4. Primitive component → annotation stops at Component (Subcomponents get nothing)
- R5. Composite component → each Subcomponent gets annotated with subcomponent profile (`id`, `name`, `required`, `datatypeId`, `kind`, `title`)
- R6. `kind` tells consumers whether to look deeper
- R7. Reads `field.data.datatype` from the fields annotator

## Scope Boundaries

- Only `hl7v2-annotate-profile-datatypes` is modified
- FieldRepetitionData augmentation is reintroduced
- ComponentData and SubcomponentData augmentation shape unchanged
- No changes to fields annotator, code-systems annotator, or preset

## Key Technical Decisions

- **Three-pass visitor cascade**: Pass 1 visits field-repetitions. Pass 2 visits components (only annotates when parent field-repetition has `kind: "composite"`). Pass 3 visits subcomponents (only annotates when parent component has `kind: "composite"`). Each pass is flat with early returns.
- **FieldRepetition is the entry point**: It was previously removed as redundant. In the stop-at-primitive model it's essential — for primitive fields it's the only annotated level below the field.
- **Parent's `kind` gates each pass**: Pass 2 checks `fieldRepetition.data?.kind === "composite"`. Pass 3 checks `component.data?.kind === "composite"`. If the parent is primitive or unannotated, the pass skips the node entirely.
- **Reads `field.data.datatype`**: No field-definition loading. The fields annotator (via preset ordering) provides `field.data.datatype`.

## High-Level Technical Design

> _This illustrates the intended approach and is directional guidance for review, not implementation specification._

```
Pre-load:
  visit("field") → collect field.data.datatype IDs
  → batch-load DatatypeDefinitions + component-level datatypes
  → produces: Map<datatypeId, DatatypeDefinition>

Pass 1 — visit("field-repetition"):
  ancestors.at(-1) is Field → read field.data.datatype
  → dtDef = datatypes.get(datatypeId)
  → set rep.data = { datatypeId, kind, title }
  → (primitive fields: this is the STOP — components below get nothing)

Pass 2 — visit("component"):
  ancestors.at(-1) is FieldRepetition → check rep.data.kind
  → if kind !== "composite": skip (primitive stopped at rep level)
  → dtDef = datatypes.get(rep.data.datatypeId)
  → compProfile = dtDef.componentsBySequence.get(info.sequence)
  → set component.data = { id, name, required, datatypeId, maxLength, kind, title }
  → (primitive components: this is the STOP — subcomponents below get nothing)

Pass 3 — visit("subcomponent"):
  ancestors.at(-1) is Component → check component.data.kind
  → if kind !== "composite": skip (primitive stopped at component level)
  → compDtDef = datatypes.get(component.data.datatypeId)
  → subProfile = compDtDef.componentsBySequence.get(info.sequence)
  → set subcomponent.data = { id, name, required, datatypeId, kind, title }

Example — primitive field MSH-10 (ST):
  FieldRepetition: { datatypeId: "ST", kind: "primitive", title: "String Data" } ← STOP
  Component:       (no annotation)
  Subcomponent:    (no annotation)

Example — composite field MSH-9 (MSG):
  FieldRepetition: { datatypeId: "MSG", kind: "composite", title: "Message Type" }
  Component[0]:    { id: "MSG.1", name: "Message Code", datatypeId: "ID", kind: "primitive" } ← STOP
  Subcomponent:    (no annotation)

Example — nested composite PID-5 (XPN → FN):
  FieldRepetition: { datatypeId: "XPN", kind: "composite", title: "Extended Person Name" }
  Component[0]:    { id: "XPN.1", name: "Family Name", datatypeId: "FN", kind: "composite" }
  Subcomponent[0]: { id: "FN.1", name: "Surname", datatypeId: "ST", kind: "primitive" } ← STOP
  Subcomponent[1]: { id: "FN.2", name: "Own Surname Prefix", datatypeId: "ST", kind: "primitive" } ← STOP
```

## Implementation Units

- [ ] **Unit 1: Rewrite plugin with three-pass stop-at-primitive cascade**

  **Goal:** Replace the current two-pass implementation with a three-pass visitor (field-repetition → component → subcomponent) where each pass stops at the primitive boundary.

  **Requirements:** R1, R2, R3, R4, R5, R6, R7

  **Files:**
  - Modify: `packages/hl7v2-annotate-profile-datatypes/src/index.ts`
  - Modify: `packages/hl7v2-annotate-profile-datatypes/tests/index.test.ts`

  **Approach:**
  - Add `FieldRepetitionData` augmentation with `datatypeId`, `kind`, `title`
  - Keep the existing pre-load logic (collect IDs from field.data, batch-load datatypes + additional)
  - **Pass 1** — `visit(tree, "field-repetition")`: read `field.data.datatype` from ancestor field (`ancestors.at(-1)`), look up DatatypeDefinition, set `rep.data.datatypeId`, `kind`, `title`
  - **Pass 2** — `visit(tree, "component")`: read `rep.data.kind` from ancestor field-repetition (`ancestors.at(-1)`). If not `"composite"` → skip. Otherwise look up `datatypes.get(rep.data.datatypeId)`, get component profile by `info.sequence`, set full component data including resolved kind/title
  - **Pass 3** — `visit(tree, "subcomponent")`: read `component.data.kind` from ancestor component (`ancestors.at(-1)`). If not `"composite"` → skip. Otherwise look up `datatypes.get(component.data.datatypeId)`, get subcomponent profile by `info.sequence`, set full subcomponent data including resolved kind/title
  - Each pass uses `ancestors.at(-1)` — the immediate parent — which is clean and deterministic

  **Patterns to follow:**
  - `packages/hl7v2-annotate-profile-fields/src/index.ts` — flat visitor with early returns
  - `packages/hl7v2-decode-escapes/src/index.ts` — simple subcomponent visitor

  **Test scenarios:**
  - **Primitive field** (MSH-10, ST): FieldRepetition gets `{ datatypeId: "ST", kind: "primitive" }`, Component and Subcomponent below have no annotation
  - **Composite field** (MSH-9, MSG): FieldRepetition gets `{ datatypeId: "MSG", kind: "composite" }`, Components get id/name/required/datatypeId/kind/title, Subcomponents below primitive components have no annotation
  - **Nested composite** (PID-5, XPN → FN): FieldRepetition composite, Component[0] composite (FN), Subcomponents get annotated with FN's component profiles
  - **Z-segments**: silently skipped (field.data.datatype is undefined)
  - **Missing MSH-12**: tree returned unchanged

  **Verification:**
  - All tests pass
  - Primitive field: only FieldRepetition annotated, nothing below
  - Composite field with primitive components: annotation stops at Component
  - Composite field with composite components: annotation continues to Subcomponent
  - No manual child iteration remains in the source

## Risks & Dependencies

- **Soft runtime dependency on fields annotator**: The preset guarantees ordering. Standalone use without the fields annotator produces no output (silent, not broken).
- **FieldRepetitionData reintroduction**: Adding augmentation to FieldRepetitionData is additive. No breaking change for existing consumers.

## Sources & References

- **Origin document:** [docs/brainstorms/2026-03-27-datatype-annotation-stop-at-primitive-requirements.md](docs/brainstorms/2026-03-27-datatype-annotation-stop-at-primitive-requirements.md)
- Related code: `packages/hl7v2-annotate-profile-datatypes/src/index.ts`
- Related code: `packages/hl7v2-annotate-profile-fields/src/index.ts`
- Related code: `packages/hl7v2-util-visit/src/index.ts`
