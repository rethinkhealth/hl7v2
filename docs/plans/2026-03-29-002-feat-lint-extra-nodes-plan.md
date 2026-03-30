---
title: "feat: lint rules for extra fields and extra components"
type: feat
status: completed
date: 2026-03-29
origin: docs/brainstorms/2026-03-29-lint-coverage-gap-analysis.md
---

# Lint Rules for Extra Fields and Extra Components

## Overview

Add two new lint rule packages that detect when a message contains more fields or components than the profile defines, and fix an existing bug where `table-values` only validates the first field repetition.

## Problem Frame

The toolkit validates that required nodes are present (`required-fields`, `required-components`) but has no rules for the inverse — detecting when a message has **more** nodes than the profile defines. Extra fields beyond a segment's max sequence and extra components beyond a datatype's max component pass silently with no annotation or validation. This can mask version mismatches, malformed messages, or unintended data.

Additionally, `table-values` only checks the first repetition of a coded field, silently skipping invalid codes in subsequent repetitions (see origin: `docs/brainstorms/2026-03-29-lint-coverage-gap-analysis.md`).

## Requirements Trace

- R1. Warn when a segment contains fields beyond the maximum sequence defined in its field profile
- R2. Warn when a composite field contains more components than its datatype profile defines
- R3. Both rules must iterate all field repetitions
- R4. Both rules must skip Z-segments and unknown segments silently
- R5. Both rules must skip when version (MSH-12) is missing
- R6. Fix `table-values` to validate all repetitions, not just the first
- R7. Add new rules to `hl7v2-preset-lint-profile-recommended`

## Scope Boundaries

- No `extra-subcomponents` rule — subcomponent datatypes are almost always primitives; low value
- No `component-max-length` rule — that's value length validation, a separate concern
- No changes to annotation plugins — these are pure lint rules

## Context & Research

### Relevant Code and Patterns

All profile-based lint rules follow an identical structure:

- **Version extraction:** `value(tree, "MSH-12.1")?.value` with early return if missing
- **Profile loading:** `loadFieldDefinitions()` helper using `profiles.fields.load()` with try/catch for unknown segments
- **Traversal:** Either `visit(tree, "segment", ...)` with nested `visit(segment, "field", ...)`, or flat `visit(tree, "field", ...)` with ancestor lookup
- **Repetition iteration:** `for (const repetition of fieldNode.children)` (used by `field-max-length` and `required-components`)
- **Error reporting:** `file.message(msg, { ancestors, place })` with consistent ancestor chain construction
- **Package scaffolding:** Identical `package.json`, `tsconfig.json`, `tsup.config.ts`, `vitest.config.ts` across all lint packages

### Key Data Available

- `FieldDefinition.bySequence` — `ReadonlyMap<number, FieldProfile>` — max key is the highest defined sequence
- `DatatypeDefinition.componentsBySequence` — `ReadonlyMap<number, ComponentProfile>` — max key is the highest defined component
- `DatatypeDefinition.kind` — `"primitive" | "composite"` — only composites have components to check

### Reference Implementations

- `extra-fields` follows the same pattern as `field-repetition` — visits segment → field, compares field count against profile max
- `extra-components` follows the same pattern as `required-components` — loads field + datatype profiles, iterates repetitions, checks component count

## Key Technical Decisions

- **Max sequence from profile map keys:** The maximum defined sequence is `Math.max(...fieldDef.bySequence.keys())`. Fields at indices beyond this are "extra." This works because the profile data now includes deprecated fields at their original sequence numbers (PR #516), so there are no gaps.
- **Visitor pattern:** Use nested `visit(tree, "segment", ...) → visit(segment, "field", ...)` for `extra-fields` (matches `field-repetition` pattern). Use flat `visit(tree, "field", ...)` for `extra-components` (matches `required-components` pattern).
- **Message format consistency:** Follow the `Field SEG-N (Name) ...` and `Component SEG-N.M (Name) ...` patterns established by existing rules.

## Open Questions

### Resolved During Planning

- **Should extra-fields skip MSH-1 and MSH-2?** Yes — MSH-1 is the field separator and MSH-2 is encoding characters. Both are special. The `info.sequence` for MSH fields starts at 1, so MSH-1 = sequence 1. The profile includes them, so they'll be within bounds naturally. No special handling needed.
- **How to get max defined sequence?** Use `Math.max(...fieldDef.bySequence.keys())`. The map keys are the defined sequences. Any field with `info.sequence > maxSequence` is extra.

### Deferred to Implementation

- **Exact behavior when field has no children (empty extra field):** Whether to report empty extra fields or only non-empty ones. Start with reporting all extra fields regardless of emptiness, matching how `field-repetition` reports regardless of content.

## Implementation Units

- [ ] **Unit 1: Fix `table-values` repetition bug (#521)**

  **Goal:** Make `table-values` validate all field repetitions, not just the first

  **Requirements:** R6

  **Dependencies:** None

  **Files:**
  - Modify: `packages/hl7v2-lint-profile-table-values/src/index.ts`
  - Test: `packages/hl7v2-lint-profile-table-values/tests/index.test.ts`

  **Approach:**
  - Replace direct access `fieldNode.children[0]?.children[0]?.children[0]` with iteration: `for (const repetition of fieldNode.children)`
  - Extract value from each repetition: `repetition?.children[0]?.children[0]`
  - Report per-repetition, including the repetition node in ancestors and place
  - Follow the exact iteration pattern from `field-max-length`

  **Patterns to follow:**
  - `packages/hl7v2-lint-profile-field-max-length/src/index.ts` — repetition iteration and ancestor construction

  **Test scenarios:**
  - Single valid code → no warning
  - Single invalid code → 1 warning
  - Valid~Invalid (second rep invalid) → 1 warning for invalid
  - Invalid~Valid (first rep invalid) → 1 warning for invalid
  - Invalid~Invalid (both invalid) → 2 warnings
  - Must use an `hl7`-type table field (e.g., OBX-10 with table 0080) since user-type tables are skipped

  **Verification:**
  - All existing `table-values` tests still pass
  - New repetition tests pass
  - `pnpm test` passes for the package

- [ ] **Unit 2: Create `hl7v2-lint-profile-extra-fields` package**

  **Goal:** Warn when a segment contains fields beyond the maximum defined sequence in its profile

  **Requirements:** R1, R3, R4, R5

  **Dependencies:** None (independent of Unit 1)

  **Files:**
  - Create: `packages/hl7v2-lint-profile-extra-fields/src/index.ts`
  - Create: `packages/hl7v2-lint-profile-extra-fields/tests/index.test.ts`
  - Create: `packages/hl7v2-lint-profile-extra-fields/package.json`
  - Create: `packages/hl7v2-lint-profile-extra-fields/tsconfig.json`
  - Create: `packages/hl7v2-lint-profile-extra-fields/tsup.config.ts`
  - Create: `packages/hl7v2-lint-profile-extra-fields/vitest.config.ts`

  **Approach:**
  - Rule origin: `"hl7v2-lint:extra-fields"`
  - Visit `segment` → nested visit `field`
  - For each segment, compute `maxSequence` from `Math.max(...fieldDef.bySequence.keys())`
  - If `info.sequence > maxSequence`, report warning
  - Message format: `Field {SEG}-{sequence} is beyond the defined fields for {SEG} (max: {maxSequence} in v{version})`
  - Skip segments without a known profile (Z-segments)

  **Patterns to follow:**
  - `packages/hl7v2-lint-profile-field-repetition/src/index.ts` — nested segment → field visit pattern
  - `packages/hl7v2-lint-profile-field-repetition/package.json` — package scaffolding

  **Test scenarios:**
  - Segment with fields within profile bounds → no warning
  - Segment with 1 extra field beyond profile max → 1 warning
  - Segment with 3 extra fields beyond profile max → 3 warnings
  - Z-segment with extra fields → silently skipped
  - Missing version → silently skipped
  - MSH segment with extra fields → warns correctly
  - PID (v2.5.1 has 39 fields) with 41 fields → 2 warnings for fields 40 and 41

  **Verification:**
  - `pnpm test` passes for the new package
  - `pnpm check-types` passes
  - `pnpm build` succeeds

- [ ] **Unit 3: Create `hl7v2-lint-profile-extra-components` package**

  **Goal:** Warn when a composite field contains more components than its datatype profile defines

  **Requirements:** R2, R3, R4, R5

  **Dependencies:** None (independent of Units 1 and 2)

  **Files:**
  - Create: `packages/hl7v2-lint-profile-extra-components/src/index.ts`
  - Create: `packages/hl7v2-lint-profile-extra-components/tests/index.test.ts`
  - Create: `packages/hl7v2-lint-profile-extra-components/package.json`
  - Create: `packages/hl7v2-lint-profile-extra-components/tsconfig.json`
  - Create: `packages/hl7v2-lint-profile-extra-components/tsup.config.ts`
  - Create: `packages/hl7v2-lint-profile-extra-components/vitest.config.ts`

  **Approach:**
  - Rule origin: `"hl7v2-lint:extra-components"`
  - Visit `field` nodes, look up segment from ancestors
  - Load field profiles + datatype profiles (two-stage, same as `required-components`)
  - Skip empty fields, skip primitive datatypes, skip unknown segments/datatypes
  - For each repetition, compute `maxComponent` from `Math.max(...dtDef.componentsBySequence.keys())`
  - If `repetition.children.length > maxComponent`, report for each extra component
  - Message format: `Component {SEG}-{sequence}.{compIndex} is beyond the defined components for {datatypeId} (max: {maxComponent} in v{version})`
  - Iterate all repetitions

  **Patterns to follow:**
  - `packages/hl7v2-lint-profile-required-components/src/index.ts` — two-stage profile loading, field visit with ancestor lookup, repetition iteration

  **Test scenarios:**
  - Composite field with components within datatype bounds → no warning
  - Composite field with 1 extra component → 1 warning
  - Composite field with 3 extra components → 3 warnings
  - Primitive field (e.g., ST) with multiple components → skipped (not composite)
  - Empty field → skipped
  - Z-segment → silently skipped
  - Missing version → silently skipped
  - Multiple repetitions where only second has extra components → 1 warning
  - CWE field (22 components in v2.5.1) with 25 components → 3 warnings

  **Verification:**
  - `pnpm test` passes for the new package
  - `pnpm check-types` passes
  - `pnpm build` succeeds

- [ ] **Unit 4: Add new rules to preset and update dependencies**

  **Goal:** Include both new rules in `hl7v2-preset-lint-profile-recommended`

  **Requirements:** R7

  **Dependencies:** Units 2 and 3

  **Files:**
  - Modify: `packages/hl7v2-preset-lint-profile-recommended/src/index.ts`
  - Modify: `packages/hl7v2-preset-lint-profile-recommended/package.json`
  - Test: `packages/hl7v2-preset-lint-profile-recommended/tests/index.test.ts`

  **Approach:**
  - Add imports for both new lint rules
  - Add them to the `plugins` array in the preset
  - Add `workspace:*` dependencies in `package.json`
  - Verify the preset test still passes (it uses a message that runs through all rules)

  **Patterns to follow:**
  - Existing imports and plugin array in the preset

  **Test scenarios:**
  - Existing preset tests continue to pass
  - A message with extra fields and extra components triggers both new rules when run through the preset

  **Verification:**
  - `pnpm test` passes for the preset package
  - Full `pnpm build && pnpm test` passes across the workspace

## System-Wide Impact

- **Interaction graph:** New rules run as part of the unified transform pipeline. They only read the AST and emit VFile messages — no mutations.
- **Error propagation:** Warnings are added to VFile.messages. No throws except for truly unexpected states.
- **API surface parity:** Both rules follow the exact same API pattern as existing profile lint rules (default export, no options).
- **Integration coverage:** The preset test exercises all rules together. Individual package tests cover edge cases.

## Risks & Dependencies

- **Profile data correctness:** The `extra-fields` rule depends on `bySequence` having complete sequence coverage (no gaps). This was addressed in PR #516 which re-inserted deprecated fields.
- **`table-values` fix is low risk:** Adding repetition iteration follows the exact pattern already used by `field-max-length` and `required-components`.

## Sources & References

- **Origin document:** [docs/brainstorms/2026-03-29-lint-coverage-gap-analysis.md](../brainstorms/2026-03-29-lint-coverage-gap-analysis.md)
- Related issue: #521 (table-values repetition bug)
- Pattern references: `packages/hl7v2-lint-profile-field-repetition/` (extra-fields), `packages/hl7v2-lint-profile-required-components/` (extra-components)
