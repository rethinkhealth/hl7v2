# Lint Coverage Gap Analysis

## Current Lint Rules

| Package                              | What it validates                         | Level     | Repetition-aware?                                  |
| ------------------------------------ | ----------------------------------------- | --------- | -------------------------------------------------- |
| `lint-profile-required-fields`       | Required fields present & non-empty       | Field     | No — checks field node, not individual repetitions |
| `lint-profile-field-max-length`      | Field value length ≤ profile maxLength    | Field     | Yes — iterates all repetitions                     |
| `lint-profile-field-repetition`      | Non-repeatable fields should have ≤ 1 rep | Field     | n/a                                                |
| `lint-profile-table-values`          | Coded field value exists in HL7 table     | Field     | **No — only checks first repetition**              |
| `lint-profile-required-components`   | Required components present & non-empty   | Component | Yes — iterates all repetitions                     |
| `lint-profile-events-segments-order` | Segment ordering matches DFA              | Segment   | n/a                                                |
| `lint-required-message-header`       | MSH segment present                       | Segment   | n/a                                                |
| `lint-segment-header-length`         | Segment name is 3 chars                   | Segment   | n/a                                                |
| `lint-no-trailing-empty-field`       | Warns on trailing empty fields            | Field     | n/a                                                |
| `lint-message-structure-missing`     | MSH-9.3 present                           | Field     | n/a                                                |
| `lint-message-version`               | MSH-12 version is supported               | Field     | n/a                                                |
| `lint-max-message-size`              | Total message byte size                   | Message   | n/a                                                |

## Coverage Matrix

What's validated at each AST level:

| Validation                       | Field                                | Component             | Subcomponent |
| -------------------------------- | ------------------------------------ | --------------------- | ------------ |
| Required (present & non-empty)   | `required-fields`                    | `required-components` | --           |
| Max length                       | `field-max-length`                   | --                    | --           |
| Non-repeatable check             | `field-repetition`                   | --                    | --           |
| Table/coded values               | `table-values` (bug: first rep only) | --                    | --           |
| Extra nodes (beyond profile max) | --                                   | --                    | --           |

## Bugs in Existing Rules

### `table-values` only validates first repetition

**File:** `packages/hl7v2-lint-profile-table-values/src/index.ts:71`

```typescript
// Current code — only reads the first repetition
const sub = fieldNode.children[0]?.children[0]?.children[0];
```

If PID-3 has 3 repetitions with different identifier type codes, only the first repetition's code is validated against the table. The other two pass unchecked.

**Fix:** Iterate `fieldNode.children` the same way `field-max-length` and `required-components` do.

## Proposed New Rules

### 1. `hl7v2-lint-profile-extra-fields`

Warn when a segment contains fields beyond the maximum sequence defined in its profile.

**Example:** PID has 39 defined fields in v2.5.1. A message with `PID|...|field40|field41` should warn:

```
Field PID-40 is beyond the defined fields for PID (max: 39 in v2.5.1)
Field PID-41 is beyond the defined fields for PID (max: 39 in v2.5.1)
```

**Note:** Must consider that trailing fields beyond the profile are a common HL7v2 pattern for site-specific extensions (informal Z-fields). Default severity should probably be `warn`, not `error`.

### 2. `hl7v2-lint-profile-extra-components`

Warn when a composite field contains more components than the datatype defines.

**Example:** CWE has 22 components in v2.5.1. A field with 25 components should warn:

```
Component PID-10.23 is beyond the defined components for CWE (max: 22 in v2.5.1)
```

**Dependencies:** Needs to load both field profiles (to get the datatype) and datatype profiles (to get the component count). Same pattern as `required-components`.

### 3. `hl7v2-lint-profile-component-max-length`

Validate component value lengths against the datatype profile's component-level maxLength.

**Example:** If CWE.1 has maxLength of 20 and the value is 25 chars:

```
Component PID-10.1 (Identifier) exceeds max length of 20 (actual: 25)
```

**Dependencies:** Same as `required-components` — needs field profiles + datatype profiles.

**Note:** This is the component-level equivalent of `field-max-length`. The datatype profiles already have `maxLength` on each `ComponentProfile`.

## Rules NOT proposed (and why)

| Rule                     | Why not                                                                                                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `extra-subcomponents`    | Rare in practice. Subcomponent datatypes are almost always primitives. Can add later if needed.                                                                                       |
| `required-subcomponents` | Same — subcomponents of composite components are rare. Low value.                                                                                                                     |
| `component-table-values` | Blocked on component-level table annotation (see brainstorm doc `2026-03-28-table-annotation-architecture-requirements.md`). The component profiles don't carry table references yet. |
| `component-repetition`   | Components don't repeat in HL7v2. Not applicable.                                                                                                                                     |

## Summary: What to build

| Priority | Action                                             | Type            |
| -------- | -------------------------------------------------- | --------------- |
| **1**    | Fix `table-values` to iterate all repetitions      | Bug fix         |
| **2**    | New `extra-fields` rule                            | New package     |
| **3**    | New `extra-components` rule                        | New package     |
| **4**    | New `component-max-length` rule                    | New package     |
| **5**    | Add new rules to `preset-lint-profile-recommended` | Update existing |
