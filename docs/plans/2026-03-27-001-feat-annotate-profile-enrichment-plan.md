---
title: "feat: Profile-based AST node annotation plugins"
type: feat
status: superseded
date: 2026-03-27
deepened: 2026-03-27
---

# feat: Profile-based AST node annotation plugins

> **Note:** This plan is superseded by `2026-03-27-002-refactor-datatypes-annotator-design-plan.md` which implements the stop-at-primitive cascade. The code-systems annotator (Unit 3) was removed from scope — see #485 for related future work.

## Overview

Build a new series of unified transform plugins that enrich HL7v2 AST nodes with metadata from the existing `@rethinkhealth/hl7v2-profiles` package. Three annotator packages — fields, datatypes, and code systems — plus a preset that bundles them. After annotation, downstream consumers can read rich profile metadata directly from `node.data` without re-loading profiles.

## Problem Frame

Today, profile data is loaded and consumed inline by lint rules and never persisted on the AST. This means:

- Every consumer that needs profile context must independently load profiles and resolve metadata
- There is no standard way to inspect a parsed AST and see "what is this field called?" or "is this component required?"
- Tools like JSON serializers, debuggers, IDE integrations, and custom processors cannot access profile metadata without duplicating the profile-loading logic

Annotating nodes with profile metadata once, early in the pipeline, makes the AST self-describing and enables a whole class of downstream consumers.

## Requirements Trace

- R1. Field nodes must be enriched with their field profile (name, required, repeatable, datatype, maxLength, table, item)
- R2. FieldRepetition and Component nodes must be enriched with their resolved datatype profile (id, kind, title)
- R3. Component nodes in composite datatypes must be enriched with their component profile (name, required, datatypeId, maxLength)
- R4. Subcomponent nodes in composite datatype components must be enriched with their component profile
- R5. Subcomponent nodes holding coded values must be enriched with UTG code system metadata (display, status, code system identity)
- R6. All enrichment types must be type-safe via module augmentation of the AST `*Data` interfaces
- R7. A preset must bundle all annotators in correct dependency order
- R8. Annotators must be async unified transform plugins (`Plugin<[], Root, Root>`) that return the mutated tree
- R9. Unknown segments (Z-segments) and missing profiles must be silently skipped
- R10. Each annotator must independently load profiles (no hard runtime dependency on prior annotators)

## Scope Boundaries

- No new profile stores or profile data generation — use existing `@rethinkhealth/hl7v2-profiles` as-is
- No changes to `@rethinkhealth/hl7v2-ast` base types — enrichment uses module augmentation only
- No changes to existing lint rules or the main `@rethinkhealth/hl7v2` pipeline
- Segment and group annotation is deferred — no direct segment/group profile metadata exists today (the events DFA encodes structure rules, not descriptive metadata like optionality or repeatability). When segment/group profile data becomes available, annotators can be added following the same pattern.

- Table definitions (version-specific HL7DB tables) are not annotated — UTG code systems are preferred for enrichment since they carry display/status

## Context & Research

### Relevant Code and Patterns

- **AST type definitions:** `packages/hl7v2-ast/index.d.ts` — all `*Data` interfaces are empty and designed for module augmentation
- **Profile stores API:** `packages/hl7v2-profiles/src/types.ts` — `profiles.fields.load(version, id)`, `profiles.datatypes.load(version, id)`, `profiles.codeSystems.load(id)` (note: code systems store is not versioned — single argument)
- **Profile store types:** `packages/hl7v2-profiles/src/stores/types.ts` — `FieldProfile`, `ComponentProfile`, `DatatypeDefinition`, `UtgCodeEntry`, `CodeSystemDefinition`
- **Transform plugin pattern:** `packages/hl7v2-message-structure/src/index.ts` — sync `Plugin<[Options?], Root, Root>` returning tree
- **Profile-loading pattern:** `packages/hl7v2-lint-profile-table-values/src/index.ts` — async, collects segment names, batch-loads field defs, then loads dependent profiles
- **Visitor API:** `packages/hl7v2-util-visit/src/index.ts` — `visit(tree, type, visitor)` with `VisitInfo.sequence` for 1-based indexing
- **Preset pattern:** `packages/hl7v2-preset-lint-profile-recommended/src/index.ts` — `Preset = { plugins: [...] }`
- **Package scaffolding:** `packages/hl7v2-message-structure/package.json`, `tsup.config.ts`, `vitest.config.ts`

### Key Observations

1. **Async transforms are supported** — unified's `run()` phase handles promises from transformers. Existing lint rules already use async for profile loading.
2. **Module augmentation is the established pattern** — the deleted `hl7v2-annotate-message` used `declare module '@rethinkhealth/hl7v2-ast'` to extend `RootData`. This is the correct approach.
3. **Profile data is cached** — `profiles.fields.load()` uses an LRU cache, so multiple annotators loading the same profiles in one pipeline run incur minimal overhead.
4. **VisitInfo provides sequence** — `info.sequence` gives the 1-based HL7v2 field/component sequence number, which maps directly to profile `bySequence` lookups.
5. **Table-to-UTG mapping** — Field profiles reference tables as `"HL70001"`, UTG code systems use `"v2-0001"`. A normalization function is needed (strip `HL7` prefix, add `v2-` prefix).

## Key Technical Decisions

- **Transform plugins, not lint rules**: Annotators mutate `node.data` and return the tree. They use `Plugin<[], Root, Root>` (or with options), not `lintRule()`.
- **Module augmentation per package**: Each annotator package augments only the `*Data` interfaces it enriches. Consumers get type-safe access when they import the annotator.
- **Flat, concise property names**: Profile metadata properties are flattened directly onto `node.data` with short, natural names (e.g., `field.data.name`, `field.data.required`, `component.data.display`). No namespace keys like `fieldProfile` or `utgCode`. Conciseness and readability take priority over collision prevention — if a consumer overwrites a property, that's their responsibility.
- **No runtime dependency between annotators**: Each annotator loads profiles independently. The preset orders them logically but they can be used standalone.
- **Normalize table-to-UTG ID inline**: The code systems annotator includes its own `tableIdToCodeSystemId()` helper (e.g., `"HL70001"` → `"v2-0001"`).

## Open Questions

### Resolved During Planning

- **Should annotators depend on each other at runtime?** No. Each loads profiles independently. The profiles LRU cache prevents redundant I/O.
- **Where should type augmentations live?** In each annotator package's `src/index.ts`, co-located with the plugin. Importing the package makes the augmented types available.
- **Should we annotate with the full profile object or flatten properties?** Flatten. Individual properties like `name`, `required`, `datatype` are spread directly onto `node.data`. This is more concise and readable than nesting under a namespace key. The properties match what's in the profile store types but are applied directly.

### Deferred to Implementation

- **Exact handling of MSH-1 and MSH-2**: These special fields may need sequence offset handling (MSH segment field indexing starts at 1 for the separator). Implementation should verify against existing lint rule patterns.
- **Performance characteristics**: Profile loading is cached, but visiting every node has a cost. Benchmarking deferred to implementation.

## High-Level Technical Design

> _This illustrates the intended approach and is directional guidance for review, not implementation specification. The implementing agent should treat it as context, not code to reproduce._

```
Recommended user-configured pipeline (does NOT change the default @rethinkhealth/hl7v2 pipeline):
  parse → [message-structure] → [decode-escapes] → annotate-profile-fields
                                                  → annotate-profile-datatypes
                                                  → annotate-profile-code-systems
                                                  → [lint rules] → [compile]

Each annotator:
  1. Extract version from MSH-12
  2. Collect segment names from tree
  3. Batch-load profiles for all segments
  4. Walk tree with visit(), set node.data.* for each node

Data flow (fields annotator):
  Field node → parent Segment.name + VisitInfo.sequence
             → profiles.fields.load(version, segmentName)
             → fieldDef.bySequence.get(sequence)
             → spread { name, required, repeatable, datatype, maxLength, table, item } onto field.data

Data flow (datatypes annotator):
  Field node → parent Segment.name + sequence → load field def → get datatype
             → profiles.datatypes.load(version, datatypeId)
             → spread { datatypeId, kind, title } onto fieldRepetition.data
             → spread { name, required, datatypeId, maxLength } from componentsBySequence onto component.data
             → resolve component's datatypeId → spread { kind, title } onto component.data
             → for subcomponents: spread { name, required, datatypeId } from parent component's datatype

Data flow (code systems annotator):
  Field with table ref → normalize "HL70001" → "v2-0001"
                        → profiles.codeSystems.load("v2-0001")
                        → first subcomponent value → codeDef.codes.get(value)
                        → spread { display, status, codeSystem } onto subcomponent.data
```

Module augmentation shape (flat, concise property names):

```
FieldData:
  name?          → string     (field name, e.g., "Patient Name")
  required?      → boolean
  repeatable?    → boolean
  datatype?      → string     (datatype ID, e.g., "XPN")
  maxLength?     → number
  table?         → string     (table reference, e.g., "HL70001")
  item?          → string     (HL7 item number)

FieldRepetitionData:
  datatypeId?    → string     (resolved datatype ID)
  kind?          → string     ("primitive" | "composite")
  title?         → string     (datatype title, e.g., "Extended Person Name")

ComponentData:
  name?          → string     (component name from parent datatype)
  required?      → boolean    (component required in parent datatype)
  datatypeId?    → string     (component's own datatype ID)
  maxLength?     → number     (component max length)
  kind?          → string     (component's datatype kind)
  title?         → string     (component's datatype title)

SubcomponentData:
  name?          → string     (subcomponent name from parent datatype)
  required?      → boolean    (subcomponent required)
  datatypeId?    → string     (subcomponent's datatype ID)
  display?       → string     (UTG code display name)
  status?        → string     (UTG code status: "active", "deprecated", etc.)
  codeSystem?    → { id, name, title }  (UTG code system identity)
```

## Implementation Units

- [ ] **Unit 1: `@rethinkhealth/hl7v2-annotate-profile-fields`**

  **Goal:** Annotate Field nodes with their field profile metadata from the fields profile store.

  **Requirements:** R1, R6, R8, R9, R10

  **Dependencies:** None

  **Files:**
  - Create: `packages/hl7v2-annotate-profile-fields/src/index.ts`
  - Create: `packages/hl7v2-annotate-profile-fields/src/index.test.ts`
  - Create: `packages/hl7v2-annotate-profile-fields/package.json`
  - Create: `packages/hl7v2-annotate-profile-fields/tsconfig.json`
  - Create: `packages/hl7v2-annotate-profile-fields/tsup.config.ts`
  - Create: `packages/hl7v2-annotate-profile-fields/vitest.config.ts`

  **Approach:**
  - Async unified transform plugin: `Plugin<[], Root, Root>`
  - Extract version from MSH-12 via `value(tree, "MSH-12")`
  - Collect unique segment names via `visit(tree, "segment")`
  - Batch-load `profiles.fields.load(version, name)` for all segments (try/catch to skip unknown)
  - Visit `"field"` nodes: resolve parent segment from ancestors, look up `fieldDef.bySequence.get(info.sequence)`, spread field profile properties directly onto `field.data` (name, required, repeatable, datatype, maxLength, table, item)
  - Module augmentation: extend `FieldData` with flat properties (`name?`, `required?`, `repeatable?`, `datatype?`, `maxLength?`, `table?`, `item?`)
  - Export the plugin as both named and default export

  **Patterns to follow:**
  - Profile loading: `packages/hl7v2-lint-profile-table-values/src/index.ts` lines 111-156
  - Async transformer shape: `packages/hl7v2-lint-profile-table-values/src/index.ts` (async function returning void/tree — adapt for `Plugin` instead of `lintRule`). Note: `packages/hl7v2-message-structure/src/index.ts` shows the `Plugin` type signature but is sync; the async pattern has no existing transform plugin precedent in this codebase.
  - Package scaffolding: `packages/hl7v2-message-structure/package.json`

  **Test scenarios:**
  - Annotates known segment fields with correct profile (MSH, PID fields have expected name, datatype, required)
  - Skips Z-segments (unknown segments) without error
  - Skips fields when MSH-12 version is missing (returns tree unchanged)
  - Does not overwrite existing `field.data` properties
  - Works with multiple segments of the same type (e.g., two OBX segments)
  - Handles empty fields (field exists but has no meaningful content)

  **Verification:**
  - `pnpm test` passes in the package
  - `pnpm check-types` passes
  - `pnpm build` succeeds
  - Field nodes in annotated tree have `field.data.name`, `field.data.required`, etc. with correct values

- [ ] **Unit 2: `@rethinkhealth/hl7v2-annotate-profile-datatypes`**

  **Goal:** Annotate FieldRepetition, Component, and Subcomponent nodes with datatype and component profile metadata.

  **Requirements:** R2, R3, R4, R6, R8, R9, R10

  **Dependencies:** Unit 1 (for package scaffolding patterns, not runtime)

  **Files:**
  - Create: `packages/hl7v2-annotate-profile-datatypes/src/index.ts`
  - Create: `packages/hl7v2-annotate-profile-datatypes/src/index.test.ts`
  - Create: `packages/hl7v2-annotate-profile-datatypes/package.json`
  - Create: `packages/hl7v2-annotate-profile-datatypes/tsconfig.json`
  - Create: `packages/hl7v2-annotate-profile-datatypes/tsup.config.ts`
  - Create: `packages/hl7v2-annotate-profile-datatypes/vitest.config.ts`

  **Approach:**
  - Async unified transform plugin
  - **Pre-load phase** (3 passes to build lookup maps before walking):
    - Pass 1: Load field definitions for all segments (same pattern as Unit 1). Produces `Map<segmentName, FieldDefinition>`
    - Pass 2: Collect all unique datatype IDs from field profiles, batch-load `profiles.datatypes.load(version, datatypeId)`. Produces `Map<datatypeId, DatatypeDefinition>`
    - Pass 3: For composite datatypes, collect component-level datatype IDs that are not yet loaded, batch-load those. This handles one level of nesting (e.g., CWE.1 is ST, CWE.3 is ID). Deeper nesting is uncommon in HL7v2 and can be deferred.
  - **Walk phase** — use `visit("segment")` as the outer driver, then manually iterate children to maintain parent context:
    - For each Segment: look up its `FieldDefinition`
    - For each Field child: look up `fieldDef.bySequence.get(fieldIndex)` to get the field's datatype ID, then resolve `datatypeMap.get(datatypeId)`
    - For each FieldRepetition: set `data.datatypeId`, `data.kind`, `data.title` from the resolved datatype definition
    - For each Component (indexed by sequence): if the parent datatype is composite, spread component profile properties onto `data` (`name`, `required`, `datatypeId`, `maxLength`) and also set `data.kind`, `data.title` from the component's own resolved datatype
    - For each Subcomponent (indexed by sequence): if the parent component's datatype is composite, spread that datatype's component profile properties onto `data` (`name`, `required`, `datatypeId`)
  - Manual child iteration is necessary because `visit("component")` alone loses the field-level datatype context. The pattern mirrors `hl7v2-lint-profile-required-components` which also iterates `field.children` → `repetition.children` manually.
  - Module augmentation: extend `FieldRepetitionData` (`datatypeId?`, `kind?`, `title?`), `ComponentData` (`name?`, `required?`, `datatypeId?`, `maxLength?`, `kind?`, `title?`), `SubcomponentData` (`name?`, `required?`, `datatypeId?`)

  **Patterns to follow:**
  - Profile loading: `packages/hl7v2-lint-profile-required-components/src/index.ts` (loads fields then datatypes, iterates repetitions and components manually)
  - Component indexing: `repetition.children[compSeq - 1]` for 0-based array access with 1-based sequence numbers

  **Test scenarios:**
  - Primitive datatype field (e.g., ST): FieldRepetition gets `{ kind: "primitive", title }`, no component profiles
  - Composite datatype field (e.g., CWE): FieldRepetition gets `{ kind: "composite" }`, Components get componentProfile with name/required
  - Nested composite (component's datatype is also composite): Subcomponents get componentProfile from parent component's datatype
  - Unknown datatype: silently skipped
  - Multiple fields with same datatype: all annotated correctly (profile is loaded once, applied to all)

  **Verification:**
  - `pnpm test` passes
  - Component nodes show `data.name` matching expected HL7v2 component names
  - FieldRepetition nodes show `data.kind` as `"primitive"` or `"composite"`

- [ ] **Unit 3: `@rethinkhealth/hl7v2-annotate-profile-code-systems`**

  **Goal:** Annotate Subcomponent nodes that hold coded values with UTG code system metadata (display name, status).

  **Requirements:** R5, R6, R8, R9, R10

  **Dependencies:** Unit 1 (for package scaffolding patterns, not runtime)

  **Files:**
  - Create: `packages/hl7v2-annotate-profile-code-systems/src/index.ts`
  - Create: `packages/hl7v2-annotate-profile-code-systems/src/index.test.ts`
  - Create: `packages/hl7v2-annotate-profile-code-systems/package.json`
  - Create: `packages/hl7v2-annotate-profile-code-systems/tsconfig.json`
  - Create: `packages/hl7v2-annotate-profile-code-systems/tsup.config.ts`
  - Create: `packages/hl7v2-annotate-profile-code-systems/vitest.config.ts`

  **Approach:**
  - Async unified transform plugin
  - Phase 1: Load field definitions for all segments
  - Phase 2: Collect all table references from field profiles, normalize to UTG IDs (`"HL70001"` → `"v2-0001"`), batch-load `profiles.codeSystems.load(id)`
  - Phase 3: Walk tree visiting `"field"` nodes. For fields with a table reference:
    - Get the code system definition
    - Iterate ALL field repetitions (not just the first — a repeating coded field may have different code values per repetition)
    - For each repetition: navigate to first component → first subcomponent (the primary code position, e.g., CWE.1)
    - Look up the value in `codeSystemDef.codes`
    - If found, set `subcomponent.data.display`, `subcomponent.data.status`, and `subcomponent.data.codeSystem = { id, name, title }`
  - **Scope: primary code component only.** Field profiles carry a single `table` reference at the field level, which applies to the primary code position (component 1). Alternate code components (e.g., CWE.4 Alternate Identifier, CWE.10 Second Alternate Identifier) are NOT annotated because there is no component-level table reference in the profile schema. This matches the existing lint rule behavior in `hl7v2-lint-profile-table-values`.
  - Include `codeSystem` identity on each annotation so consumers know which code system the code belongs to
  - Module augmentation: extend `SubcomponentData` with `display?`, `status?`, `codeSystem?`

  **Patterns to follow:**
  - Table ID normalization: `packages/hl7v2-lint-profile-table-values/src/index.ts` line 16-18 strips `HL7` prefix to get `"0001"` (for the version-specific tables store). The new `tableIdToCodeSystemId()` must additionally prepend `"v2-"` to produce `"v2-0001"` for the UTG code systems store. Do not reuse the existing function directly.
  - Coded value extraction: same file lines 74-79 (navigate to first subcomponent)
  - Repetition iteration: `packages/hl7v2-lint-profile-required-components/src/index.ts` (iterates `field.children` for all repetitions)
  - Note: `profiles.codeSystems.load(id)` takes a single argument (no version), unlike `profiles.fields.load(version, id)`. UTG code systems are cumulative across all HL7v2 versions.

  **Test scenarios:**
  - Coded field (e.g., PID-8 Administrative Sex = "F"): subcomponent gets `{ display: "Female", status: "active" }`
  - Unknown code value: no annotation added (silently skipped)
  - Field without table reference: skipped
  - User-defined table: still annotated if UTG code system exists (UTG is cumulative)
  - Empty coded field: skipped
  - Multiple coded fields in same segment: each annotated independently

  **Verification:**
  - `pnpm test` passes
  - Coded value subcomponents show `data.display` with human-readable text
  - Non-coded subcomponents have no `display` property

- [ ] **Unit 4: `@rethinkhealth/hl7v2-preset-annotate-profile-recommended`**

  **Goal:** Bundle all three annotators into a single preset for easy pipeline integration.

  **Requirements:** R7

  **Dependencies:** Units 1, 2, 3

  **Files:**
  - Create: `packages/hl7v2-preset-annotate-profile-recommended/src/index.ts`
  - Create: `packages/hl7v2-preset-annotate-profile-recommended/src/index.test.ts`
  - Create: `packages/hl7v2-preset-annotate-profile-recommended/package.json`
  - Create: `packages/hl7v2-preset-annotate-profile-recommended/tsconfig.json`
  - Create: `packages/hl7v2-preset-annotate-profile-recommended/tsup.config.ts`
  - Create: `packages/hl7v2-preset-annotate-profile-recommended/vitest.config.ts`

  **Approach:**
  - Export a `Preset` object with `plugins` array containing all three annotators in order: fields → datatypes → code-systems
  - Ordering is logical (fields first provides context for datatypes), but not a hard runtime requirement
  - Follow exact pattern from `packages/hl7v2-preset-lint-profile-recommended/src/index.ts`

  **Patterns to follow:**
  - `packages/hl7v2-preset-lint-profile-recommended/src/index.ts`
  - `packages/hl7v2-preset-lint-profile-recommended/package.json`

  **Test scenarios:**
  - Integration test: parse a real HL7v2 message through `unified().use(parser).use(preset)`, verify all annotation types present on correct nodes
  - All three annotators execute without errors on a well-formed v2.5 ADT_A01 message
  - Works with messages missing MSH-12 (annotators silently skip)

  **Verification:**
  - `pnpm test` passes
  - `pnpm build` succeeds for all four new packages
  - `pnpm check-types` passes across the monorepo

## System-Wide Impact

- **AST type augmentation:** Each annotator augments `*Data` interfaces in `@rethinkhealth/hl7v2-ast`. Consumers who import the annotator packages will see the augmented types. Consumers who don't import them see the original empty interfaces — no breaking change.
- **Serializer safety (verified):**
  - `hl7v2-jsonify`: Does **not** access `node.data` at all — only processes structure, names, and values. Annotated trees produce identical JSON output.
  - `hl7v2-to-hl7v2`: Only reads `Root.data.delimiters` for delimiter resolution. Never accesses `data` on non-root nodes. Annotated trees produce identical HL7v2 string output.
  - `hl7v2-encode-escapes` / `hl7v2-decode-escapes`: Same pattern — only read `Root.data.delimiters`. No impact from non-root `data` properties.
  - `hl7v2-builder`: Does not set any `data` properties when constructing nodes. Annotators would only enrich nodes post-construction/post-parse.
- **Pipeline ordering:** Annotators should run after parsing and message-structure resolution, but before lint rules. Lint rules could optionally read from `node.data` in the future instead of re-loading profiles, but that's a separate optimization.
- **Profile cache interaction:** Multiple annotators loading the same field definitions in one pipeline run will hit the LRU cache on subsequent loads. No cache invalidation concerns.
- **No API surface changes:** Existing packages are untouched. New packages are additive.

## Risks & Dependencies

- **Profile store async behavior:** The unified `run()` phase must support async transformers. This is confirmed by existing async lint rules in the codebase.
- **Module augmentation overlap:** Multiple annotators augment the same `*Data` interface with overlapping property names (e.g., both datatypes and code-systems annotators add properties to `SubcomponentData`). TypeScript declaration merging handles this cleanly as long as the types match. Since the annotators own distinct property sets per interface, this is safe. If a consumer adds conflicting augmentations, that's their responsibility.
- **Large message performance:** Messages with many segments will trigger many profile loads. The LRU cache mitigates this, but benchmarking may reveal the need for batch-loading optimizations.
- **Unsupported HL7v2 versions:** The profiles package covers 13 versions (v2.1 through v2.8.2). Messages with a version outside this range will fail to load profiles. Annotators must handle this gracefully — same pattern as existing lint rules: `try/catch` around `profiles.*.load()` calls, silently skip on failure. The annotator should return the tree unchanged (no partial annotation) when the version is missing entirely (no MSH-12).
- **UTG code system coverage gaps:** UTG is cumulative and not versioned — it may contain codes that don't apply to all HL7v2 versions, or lack codes that were only in older versions. The annotator annotates based on UTG regardless of HL7v2 version. This is acceptable since UTG is the canonical modern reference.

## Sources & References

- Related code: `packages/hl7v2-profiles/src/stores/types.ts` (profile types)
- Related code: `packages/hl7v2-ast/index.d.ts` (AST types with augmentable Data interfaces)
- Related code: `packages/hl7v2-lint-profile-table-values/src/index.ts` (profile-loading pattern)
- Related code: `packages/hl7v2-preset-lint-profile-recommended/` (preset pattern)
- Related code: `packages/hl7v2-message-structure/` (transform plugin pattern)
