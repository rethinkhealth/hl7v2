---
title: "refactor: Centralize profile loading into hl7v2-annotate-profile-context"
type: refactor
status: completed
date: 2026-03-30
origin: docs/brainstorms/2026-03-30-profile-context-plugin-requirements.md
---

# refactor: Centralize profile loading into hl7v2-annotate-profile-context

## Overview

Create a single unified plugin (`hl7v2-annotate-profile-context`) that loads all profile data (fields, datatypes, tables) once per pipeline run and attaches it to `file.data`. Refactor 7 consumer packages to read from `file.data` instead of loading profiles themselves, eliminating duplicated async loading code from 9+ locations.

## Problem Frame

Profile loading (version extraction from MSH-12.1, tree traversal for segment names, async profile store calls) is duplicated across 5 lint rules and 2 annotation plugins. Each package has its own local `loadFieldDefinitions` helper that does the same thing: visit tree → collect segment names → load each from the profiles store. This creates boilerplate when adding new packages and redundant work when multiple plugins run in a single pipeline. (see origin: docs/brainstorms/2026-03-30-profile-context-plugin-requirements.md)

## Requirements Trace

- R1. Create `@rethinkhealth/hl7v2-annotate-profile-context` plugin
- R2. Plugin loads field definitions, datatype definitions, and table definitions in a single pass
- R3. Resolved profiles attached to `file.data` as sync-accessible Maps
- R4. Unknown profiles silently omitted, no VFile messages
- R5. 5 lint rules refactored to read from `file.data`, drop `hl7v2-profiles` dependency
- R6. 2 annotation plugins refactored to read from `file.data`, drop `hl7v2-profiles` dependency
- R7. `annotate-profile-fields-code-systems` NOT included (different loading axis)
- R8. `lint-profile-events-segments-order` NOT included (unique resolution logic)
- R9. Both presets include context plugin before their existing plugins

## Scope Boundaries

- No changes to the `hl7v2-profiles` store API
- Event/message structure resolution stays in `lint-profile-events-segments-order`
- Code system loading stays in `annotate-profile-fields-code-systems`
- The `hl7v2-ack` package is excluded (it only extracts version, doesn't load profiles)

## Context & Research

### Relevant Code and Patterns

- **Package scaffolding**: Follow `packages/hl7v2-annotate-profile-fields/` structure (package.json, tsconfig.json, tsup.config.ts, vitest.config.ts)
- **Type augmentation**: Existing plugins augment `@rethinkhealth/hl7v2-ast` interfaces via `declare module`. The context plugin will augment `vfile`'s `Data` interface similarly
- **Profile loading**: `packages/hl7v2-profiles/src/profiles.ts` exports a `profiles` singleton with `.fields.load()`, `.datatypes.load()`, `.tables.load()` async methods
- **Cascading datatype resolution**: `packages/hl7v2-annotate-profile-datatypes/src/index.ts` lines 194-237 implements a 3-level cascade (field datatypes → component datatypes → subcomponent datatypes)
- **Identical local helpers**: 5 lint rules each have a `loadFieldDefinitions(tree, version)` function with identical implementation (visit tree for segment names, load each, return Map)
- **Preset composition**: Presets are plain `Preset` objects with a `plugins` array; ordering within the array determines execution order

### Institutional Learnings

- Flat property naming preferred on `node.data` — apply same principle to `file.data` (concise names like `fields`, `datatypes`, `tables`)
- Independent annotator loading pattern (each loads independently) is what we're replacing — established in `docs/plans/2026-03-27-001-feat-annotate-profile-enrichment-plan.md`
- Three-pass visitor pattern for datatype cascade documented in `docs/plans/2026-03-27-002-refactor-datatypes-annotator-design-plan.md`

## Key Technical Decisions

- **VFile `Data` augmentation**: Augment `vfile`'s `Data` interface with `version`, `fields`, `datatypes`, `tables` properties. The context plugin package exports this augmentation so consumers get typed access via `file.data.fields`. All properties are optional (`| undefined`) since the context plugin may not be in the pipeline
- **Graceful degradation when context is missing**: Consumers check `file.data.fields` existence and bail if undefined. This mirrors the existing "bail if no version" pattern and keeps plugins usable standalone (they just won't validate). No hard runtime dependency on plugin ordering
- **Both presets include context plugin independently**: Keeps presets composable — using only the lint preset or only the annotation preset both work. The context plugin is idempotent (skips if `file.data.fields` is already populated), so double-inclusion is harmless
- **Derive datatypes from field definitions, not AST annotations**: The context plugin reads datatype IDs from field definition profiles (the `FieldProfile.datatype` property), not from `field.data.datatype` set by the fields annotator. This means it doesn't depend on the annotation pipeline and works for lint rules too
- **Table ID normalization**: The context plugin normalizes table IDs (strips "HL7" prefix) during loading, matching the existing `normalizeTableId()` pattern in `lint-profile-table-values`

## Open Questions

### Resolved During Planning

- **file.data type shape**: Use `declare module "vfile"` to augment the `Data` interface. Properties: `version?: string`, `fields?: Map<string, FieldDefinition>`, `datatypes?: Map<string, DatatypeDefinition>`, `tables?: Map<string, TableDefinition>`
- **Consumer behavior when context is missing**: Graceful degradation — check and bail. Same pattern as existing "no version" early return
- **Double-inclusion in presets**: Context plugin is idempotent. Both presets include it independently for composability

### Deferred to Implementation

- Exact version alignment for new package in `package.json` — match the current workspace version (0.11.0)
- Whether `pnpm install` and `pnpm build` surface any transitive dependency issues after wiring up the new package

## High-Level Technical Design

> _This illustrates the intended approach and is directional guidance for review, not implementation specification. The implementing agent should treat it as context, not code to reproduce._

```
Pipeline flow (before):

  parser → decode → [lint-rule-1 loads profiles] → [lint-rule-2 loads profiles] → ... → jsonify
                      ↕ profiles store                ↕ profiles store

Pipeline flow (after):

  parser → decode → [context-plugin loads ALL profiles] → [lint-rule-1 reads file.data] → ... → jsonify
                      ↕ profiles store (once)
```

The context plugin's loading strategy:

1. Extract version from MSH-12.1
2. Visit tree once → collect unique segment names
3. Load field definitions for all segments (parallel, silent skip on unknown)
4. Derive all referenced datatype IDs from field definitions
5. Load datatypes, cascade through composite components/subcomponents (max 2 extra levels)
6. Derive all referenced table IDs from field definitions (normalize "HL7" prefix)
7. Load table definitions (parallel, silent skip on unknown)
8. Attach version, fields, datatypes, tables Maps to `file.data`

## Implementation Units

- [ ] **Unit 1: Create `hl7v2-annotate-profile-context` package**

**Goal:** Scaffold the new package and implement the context plugin that loads all profile data onto `file.data`.

**Requirements:** R1, R2, R3, R4

**Dependencies:** None

**Files:**

- Create: `packages/hl7v2-annotate-profile-context/package.json`
- Create: `packages/hl7v2-annotate-profile-context/tsconfig.json`
- Create: `packages/hl7v2-annotate-profile-context/tsup.config.ts`
- Create: `packages/hl7v2-annotate-profile-context/vitest.config.ts`
- Create: `packages/hl7v2-annotate-profile-context/src/index.ts`
- Create: `packages/hl7v2-annotate-profile-context/tests/tsconfig.json`
- Create: `packages/hl7v2-annotate-profile-context/tests/index.test.ts`
- Modify: `pnpm-workspace.yaml` (if not already auto-discovered)

**Approach:**

- Follow scaffolding pattern from `hl7v2-annotate-profile-fields` package
- Plugin signature: `Plugin<[], Root, Root>` returning async transformer
- Idempotency check: if `file.data.fields` is already populated, return early
- Version extraction: `value(tree, "MSH-12.1")?.value` — bail if missing
- Field loading: visit tree for segment names, load each via `profiles.fields.load()`, silently skip unknowns
- Datatype loading: derive IDs from `FieldProfile.datatype` across all field definitions, load each via `profiles.datatypes.load()`. Cascade up to 2 additional levels for composite component/subcomponent datatypes (follow the `resolveDatatypes` pattern from `annotate-profile-datatypes`)
- Table loading: derive IDs from `FieldProfile.table` across all field definitions, normalize by stripping "HL7" prefix, load each via `profiles.tables.load()`
- All loading uses `Promise.allSettled` for parallel loading with silent error skipping
- Export the `declare module "vfile"` augmentation and the plugin function

**Patterns to follow:**

- `packages/hl7v2-annotate-profile-fields/src/index.ts` — plugin structure, `resolve()` helper pattern
- `packages/hl7v2-annotate-profile-datatypes/src/index.ts` lines 194-237 — `resolveDatatypes()` cascading logic
- `packages/hl7v2-lint-profile-table-values/src/index.ts` — `normalizeTableId()` and `loadTableDefinitions()`

**Test scenarios:**

- Populates `file.data.version`, `file.data.fields`, `file.data.datatypes`, `file.data.tables` for a valid v2.5 message
- Field definitions contain correct entries for segments present in tree (e.g., MSH, PID)
- Datatype definitions include both field-level datatypes and cascaded component datatypes
- Table definitions include tables referenced by field profiles
- Unknown segments (Z-segments) are silently omitted from fields Map
- Missing MSH-12.1 → no-op, file.data properties remain undefined
- Idempotent: running the plugin twice produces identical results without redundant loading
- Table IDs are normalized (no "HL7" prefix in the Map keys)

**Verification:**

- `pnpm build` succeeds for the new package
- All tests pass with correct profile data on `file.data`

---

- [ ] **Unit 2: Update presets to include context plugin**

**Goal:** Add `hl7v2-annotate-profile-context` as the first plugin in both profile presets, ensuring it runs before all consumers.

**Requirements:** R9

**Dependencies:** Unit 1

**Files:**

- Modify: `packages/hl7v2-preset-lint-profile-recommended/src/index.ts`
- Modify: `packages/hl7v2-preset-lint-profile-recommended/package.json`
- Modify: `packages/hl7v2-preset-annotate-profile-recommended/src/index.ts`
- Modify: `packages/hl7v2-preset-annotate-profile-recommended/package.json`

**Approach:**

- Import the context plugin and add it as the first entry in both presets' `plugins` array
- Add `@rethinkhealth/hl7v2-annotate-profile-context` as a workspace dependency in both preset package.json files
- At this point, consumers still load profiles independently — this is an additive, non-breaking change. `file.data` gets populated but no one reads it yet

**Patterns to follow:**

- Existing preset plugin import/ordering pattern in both preset files

**Test scenarios:**

- Existing preset tests continue to pass (profiles are loaded both by context plugin and by individual consumers — harmless overlap)
- `file.data` is populated after running the preset

**Verification:**

- `pnpm build` succeeds for both preset packages
- All existing tests pass unchanged

---

- [ ] **Unit 3: Refactor 5 lint rules to read from `file.data`**

**Goal:** Remove duplicated profile loading from all 5 profile-based lint rules. Each rule reads from `file.data` instead of loading profiles itself.

**Requirements:** R5

**Dependencies:** Unit 2

**Files:**

- Modify: `packages/hl7v2-lint-profile-required-fields/src/index.ts`
- Modify: `packages/hl7v2-lint-profile-required-fields/package.json`
- Modify: `packages/hl7v2-lint-profile-field-max-length/src/index.ts`
- Modify: `packages/hl7v2-lint-profile-field-max-length/package.json`
- Modify: `packages/hl7v2-lint-profile-field-repetition/src/index.ts`
- Modify: `packages/hl7v2-lint-profile-field-repetition/package.json`
- Modify: `packages/hl7v2-lint-profile-required-components/src/index.ts`
- Modify: `packages/hl7v2-lint-profile-required-components/package.json`
- Modify: `packages/hl7v2-lint-profile-table-values/src/index.ts`
- Modify: `packages/hl7v2-lint-profile-table-values/package.json`
- Modify: test files in each package (update pipelines to include context plugin)

**Approach:**

- In each lint rule: remove the local `loadFieldDefinitions` (and `loadDatatypeDefinitions`/`loadTableDefinitions` where present) function entirely
- Replace with reading from `file.data`: `const fields = file.data.fields; if (!fields) return;`
- Remove `value(tree, "MSH-12.1")` version extraction — no longer needed
- Remove imports of `profiles` from `@rethinkhealth/hl7v2-profiles` and `value` from `@rethinkhealth/hl7v2-util-query`
- Add import of `@rethinkhealth/hl7v2-annotate-profile-context` (for type augmentation) as a dev dependency
- Remove `@rethinkhealth/hl7v2-profiles` and `@rethinkhealth/hl7v2-util-query` from dependencies in package.json (unless `value` is used for other purposes — check each rule)
- Remove `@rethinkhealth/hl7v2-util-visit` from dependencies only if no longer used (some rules use `visit` for their validation logic, not just for loading)
- Update each package's test pipeline: add `hl7v2AnnotateProfileContext` before the lint rule in the test pipeline
- For `table-values`: the `normalizeTableId` function can be removed since the context plugin normalizes table IDs during loading. The rule reads from `file.data.tables` which already uses normalized keys
- For `required-components`: reads `file.data.datatypes` instead of loading datatypes from field definitions

**Patterns to follow:**

- The existing early-return pattern: `if (!version) return` becomes `if (!file.data.fields) return`
- Each rule's core validation logic (the `visit` calls and message reporting) stays unchanged

**Test scenarios:**

- All existing test cases continue to pass with identical lint messages
- Rules produce no messages when context plugin is absent from pipeline (graceful degradation)
- `@rethinkhealth/hl7v2-profiles` is no longer in the dependency list

**Verification:**

- `pnpm build` succeeds for all 5 lint packages
- All existing tests pass
- `grep -r "hl7v2-profiles" packages/hl7v2-lint-profile-*/package.json` returns no matches

---

- [ ] **Unit 4: Refactor 2 annotation plugins to read from `file.data`**

**Goal:** Remove duplicated profile loading from `annotate-profile-fields` and `annotate-profile-datatypes`. Both read from `file.data` instead of loading profiles themselves.

**Requirements:** R6

**Dependencies:** Unit 2

**Files:**

- Modify: `packages/hl7v2-annotate-profile-fields/src/index.ts`
- Modify: `packages/hl7v2-annotate-profile-fields/package.json`
- Modify: `packages/hl7v2-annotate-profile-datatypes/src/index.ts`
- Modify: `packages/hl7v2-annotate-profile-datatypes/package.json`
- Modify: test files in each package (update pipelines to include context plugin)

**Approach:**

- **annotate-profile-fields**: Remove the `resolve()` helper function and segment collection logic. Read `file.data.fields` directly. Remove version extraction. The `spreadFieldProfile` function and `visit` annotation logic stay the same. The error reporting to VFile for failed profile loads goes away (the context plugin silently skips unknowns per R4). The fields annotator no longer needs to handle errors separately
- **annotate-profile-datatypes**: This is the most significant refactor. Remove the entire `resolveDatatypes()` function and `resolveAll()` helper. Read `file.data.datatypes` directly — the context plugin already performed the cascading resolution. The three-pass visitor logic (field-repetitions → components → subcomponents) stays unchanged. The error reporting for failed datatype loads goes away
- Both: Remove `@rethinkhealth/hl7v2-profiles` and `@rethinkhealth/hl7v2-util-query` from dependencies. Add `@rethinkhealth/hl7v2-annotate-profile-context` as dev dependency for type augmentation
- Note: `annotate-profile-fields-code-systems` is NOT modified (R7) — it continues to load code systems independently

**Patterns to follow:**

- Same `file.data.fields` / `file.data.datatypes` access pattern as the refactored lint rules
- The annotation/visitor logic for spreading properties onto AST nodes remains unchanged

**Test scenarios:**

- All existing annotation test cases pass with identical AST enrichment
- Defensive tests (empty root, Z-segments, malformed AST) continue to pass
- Idempotency test (running plugin 3 times) still passes
- `@rethinkhealth/hl7v2-profiles` is no longer in the dependency list
- Error reporting behavior change: annotation plugins no longer report "Failed to load profile" messages (context plugin silently skips). If existing tests assert on these messages, they need to be updated

**Verification:**

- `pnpm build` succeeds for both annotation packages
- All existing tests pass (with adjustments for changed error reporting)
- `grep -r "hl7v2-profiles" packages/hl7v2-annotate-profile-{fields,datatypes}/package.json` returns no matches

## System-Wide Impact

- **Interaction graph**: The context plugin becomes a dependency of both presets. All profile-based lint rules and annotation plugins now depend on `file.data` being populated by the context plugin. The `annotate-profile-fields-code-systems` plugin is unaffected — it reads `field.data.table` (set by fields annotator, not by context plugin) and loads code systems independently
- **Error propagation**: The annotation plugins currently report "Failed to load profile" errors to VFile for non-unknown load failures. With the context plugin silently skipping all failures (R4), these messages will no longer appear. This is a minor behavior change — real load failures become silent. If this becomes a concern, the context plugin could be enhanced later to report non-unknown errors
- **State lifecycle risks**: The context plugin is idempotent and stateless beyond `file.data`. Double-inclusion in both presets is safe. The `profiles` singleton LRU cache continues to work across pipeline runs
- **API surface parity**: No public API changes. Consumer packages still export the same lint rules and annotation plugins. The only observable difference is fewer VFile messages in rare error cases
- **Integration coverage**: The main `hl7v2` package pipeline test (if one exists) should verify the full pipeline still produces identical results. The preset tests should cover the ordering contract

## Risks & Dependencies

- **Error reporting regression**: Annotation plugins currently distinguish "unknown segment" (skip) from "real load failure" (report to VFile). The context plugin's silent-skip-all approach (R4) loses this distinction. This is an intentional simplification per the requirements, but should be documented as a known behavioral change
- **Type augmentation compatibility**: The `declare module "vfile"` augmentation must be compatible with the vfile v6 `Data` interface. If vfile's `Data` type doesn't support augmentation, a typed accessor function may be needed instead. This should be validated early in Unit 1
- **Dependency graph changes**: 7 packages lose their `hl7v2-profiles` dependency and gain `hl7v2-annotate-profile-context` as a dev dependency. `pnpm syncpack` should be run after to verify version alignment

## Sources & References

- **Origin document:** [docs/brainstorms/2026-03-30-profile-context-plugin-requirements.md](docs/brainstorms/2026-03-30-profile-context-plugin-requirements.md)
- Related code: `packages/hl7v2-profiles/src/profiles.ts` (profiles singleton)
- Related code: `packages/hl7v2-annotate-profile-datatypes/src/index.ts` (cascading resolution pattern)
- Related plan: `docs/plans/2026-03-27-002-refactor-datatypes-annotator-design-plan.md` (datatypes annotator design)
