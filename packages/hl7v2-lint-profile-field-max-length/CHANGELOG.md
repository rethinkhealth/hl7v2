# @rethinkhealth/hl7v2-lint-profile-field-max-length

## 0.13.0

### Patch Changes

- f411ebf: Centralize profile loading into a single context plugin

  New package:
  - `@rethinkhealth/hl7v2-annotate-profile-context` — unified plugin that loads all profile data (fields, datatypes, tables) once per pipeline run and attaches them to `file.data.profile` for downstream consumers

  Refactored packages (internal, no API changes):
  - 7 lint rules and 2 annotation plugins now read profiles from `file.data.profile` instead of loading them independently, eliminating duplicated async loading code from 9+ locations
  - Both profile presets include the context plugin as the first entry to ensure `file.data.profile` is populated before consumers run

- Updated dependencies [575978f]
  - @rethinkhealth/hl7v2-ast@0.13.0
  - @rethinkhealth/hl7v2-utils@0.13.0
  - @rethinkhealth/hl7v2-util-visit@0.13.0

## 0.12.0

### Patch Changes

- Updated dependencies [1ef2a1f]
  - @rethinkhealth/hl7v2-profiles@0.12.0
  - @rethinkhealth/hl7v2-ast@0.12.0
  - @rethinkhealth/hl7v2-util-query@0.12.0
  - @rethinkhealth/hl7v2-util-visit@0.12.0
  - @rethinkhealth/hl7v2-utils@0.12.0

## 0.11.0

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.11.0
- @rethinkhealth/hl7v2-profiles@0.11.0
- @rethinkhealth/hl7v2-util-query@0.11.0
- @rethinkhealth/hl7v2-util-visit@0.11.0
- @rethinkhealth/hl7v2-utils@0.11.0

## 0.10.1

### Patch Changes

- Updated dependencies [cacf65e]
  - @rethinkhealth/hl7v2-profiles@0.10.1
  - @rethinkhealth/hl7v2-ast@0.10.1
  - @rethinkhealth/hl7v2-util-query@0.10.1
  - @rethinkhealth/hl7v2-util-visit@0.10.1
  - @rethinkhealth/hl7v2-utils@0.10.1

## 0.10.0

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.10.0
- @rethinkhealth/hl7v2-profiles@0.10.0
- @rethinkhealth/hl7v2-util-query@0.10.0
- @rethinkhealth/hl7v2-util-visit@0.10.0
- @rethinkhealth/hl7v2-utils@0.10.0

## 0.9.0

### Patch Changes

- 9e40900: Fix composite VID handling in MSH-12. `value()` now drills to the first child for composite fields, and all packages explicitly use `MSH-12.1` for version extraction. Also removes redundant "missing version" messages from profile lint rules — `lint-message-version` is the single authority. Changes `file.fail()` to `file.message()` in `lint-message-version` so user configuration controls severity.
- Updated dependencies [9e40900]
  - @rethinkhealth/hl7v2-util-query@0.9.0
  - @rethinkhealth/hl7v2-ast@0.9.0
  - @rethinkhealth/hl7v2-profiles@0.9.0
  - @rethinkhealth/hl7v2-util-visit@0.9.0
  - @rethinkhealth/hl7v2-utils@0.9.0

## 0.8.0

### Patch Changes

- Updated dependencies [64da535]
  - @rethinkhealth/hl7v2-util-query@0.8.0
  - @rethinkhealth/hl7v2-ast@0.8.0
  - @rethinkhealth/hl7v2-profiles@0.8.0
  - @rethinkhealth/hl7v2-util-visit@0.8.0
  - @rethinkhealth/hl7v2-utils@0.8.0

## 0.7.1

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.7.1
- @rethinkhealth/hl7v2-profiles@0.7.1
- @rethinkhealth/hl7v2-util-query@0.7.1
- @rethinkhealth/hl7v2-util-visit@0.7.1
- @rethinkhealth/hl7v2-utils@0.7.1

## 0.7.0

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.7.0
- @rethinkhealth/hl7v2-profiles@0.7.0
- @rethinkhealth/hl7v2-util-query@0.7.0
- @rethinkhealth/hl7v2-util-visit@0.7.0
- @rethinkhealth/hl7v2-utils@0.7.0

## 0.6.0

### Minor Changes

- c593c84: Add lint rule that validates field value lengths against HL7v2 profile maxLength constraints. Checks each repetition independently.

### Patch Changes

- 1b6bf9b: Move empty field check before profile lookups to skip unnecessary Map accesses for empty fields.
  - Add `isEmptyNode()` guard before `bySequence.get()` in field-max-length rule
  - Replace local `hasValue()` with `isEmptyNode()` from `hl7v2-utils` in required-fields rule
  - Remove redundant `utils.ts` from required-fields package

- 7c9ba88: Refactor to use nested visit pattern instead of manual for loop for field traversal.
- Updated dependencies [f00432e]
- Updated dependencies [95e32f2]
- Updated dependencies [07fdace]
- Updated dependencies [7763c22]
- Updated dependencies [0b57ba9]
  - @rethinkhealth/hl7v2-profiles@0.6.0
  - @rethinkhealth/hl7v2-utils@0.6.0
  - @rethinkhealth/hl7v2-util-query@0.6.0
  - @rethinkhealth/hl7v2-util-visit@0.6.0
  - @rethinkhealth/hl7v2-ast@0.6.0
