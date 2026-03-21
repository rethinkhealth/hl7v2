# @rethinkhealth/hl7v2-lint-profile-field-max-length

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
