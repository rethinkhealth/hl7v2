# @rethinkhealth/hl7v2-preset-lint-profile-recommended

## 0.12.0

### Minor Changes

- ebb5944: Add extra-fields and extra-components lint rules, fix table-values repetition bug

  New packages:
  - `@rethinkhealth/hl7v2-lint-profile-extra-fields` — warns when a segment has fields beyond the maximum sequence defined in its profile
  - `@rethinkhealth/hl7v2-lint-profile-extra-components` — warns when a composite field has more components than its datatype profile defines

  Bug fix:
  - `@rethinkhealth/hl7v2-lint-profile-table-values` now validates all field repetitions instead of only the first

  Both new rules are included in `@rethinkhealth/hl7v2-preset-lint-profile-recommended`.

### Patch Changes

- Updated dependencies [3d9d88c]
- Updated dependencies [ebb5944]
- Updated dependencies [1ef2a1f]
  - @rethinkhealth/hl7v2-lint-profile-table-values@0.12.0
  - @rethinkhealth/hl7v2-lint-profile-extra-fields@0.12.0
  - @rethinkhealth/hl7v2-lint-profile-extra-components@0.12.0
  - @rethinkhealth/hl7v2-lint-profile-events-segments-order@0.12.0
  - @rethinkhealth/hl7v2-lint-profile-field-max-length@0.12.0
  - @rethinkhealth/hl7v2-lint-profile-field-repetition@0.12.0
  - @rethinkhealth/hl7v2-lint-profile-required-components@0.12.0
  - @rethinkhealth/hl7v2-lint-profile-required-fields@0.12.0

## 0.11.0

### Patch Changes

- @rethinkhealth/hl7v2-lint-profile-events-segments-order@0.11.0
- @rethinkhealth/hl7v2-lint-profile-field-max-length@0.11.0
- @rethinkhealth/hl7v2-lint-profile-field-repetition@0.11.0
- @rethinkhealth/hl7v2-lint-profile-required-components@0.11.0
- @rethinkhealth/hl7v2-lint-profile-required-fields@0.11.0
- @rethinkhealth/hl7v2-lint-profile-table-values@0.11.0

## 0.10.1

### Patch Changes

- @rethinkhealth/hl7v2-lint-profile-events-segments-order@0.10.1
- @rethinkhealth/hl7v2-lint-profile-field-max-length@0.10.1
- @rethinkhealth/hl7v2-lint-profile-field-repetition@0.10.1
- @rethinkhealth/hl7v2-lint-profile-required-components@0.10.1
- @rethinkhealth/hl7v2-lint-profile-required-fields@0.10.1
- @rethinkhealth/hl7v2-lint-profile-table-values@0.10.1

## 0.10.0

### Patch Changes

- @rethinkhealth/hl7v2-lint-profile-events-segments-order@0.10.0
- @rethinkhealth/hl7v2-lint-profile-field-max-length@0.10.0
- @rethinkhealth/hl7v2-lint-profile-field-repetition@0.10.0
- @rethinkhealth/hl7v2-lint-profile-required-components@0.10.0
- @rethinkhealth/hl7v2-lint-profile-required-fields@0.10.0
- @rethinkhealth/hl7v2-lint-profile-table-values@0.10.0

## 0.9.0

### Patch Changes

- Updated dependencies [9e40900]
  - @rethinkhealth/hl7v2-lint-profile-required-fields@0.9.0
  - @rethinkhealth/hl7v2-lint-profile-field-max-length@0.9.0
  - @rethinkhealth/hl7v2-lint-profile-field-repetition@0.9.0
  - @rethinkhealth/hl7v2-lint-profile-required-components@0.9.0
  - @rethinkhealth/hl7v2-lint-profile-table-values@0.9.0
  - @rethinkhealth/hl7v2-lint-profile-events-segments-order@0.9.0

## 0.8.0

### Patch Changes

- @rethinkhealth/hl7v2-lint-profile-events-segments-order@0.8.0
- @rethinkhealth/hl7v2-lint-profile-field-max-length@0.8.0
- @rethinkhealth/hl7v2-lint-profile-field-repetition@0.8.0
- @rethinkhealth/hl7v2-lint-profile-required-components@0.8.0
- @rethinkhealth/hl7v2-lint-profile-required-fields@0.8.0
- @rethinkhealth/hl7v2-lint-profile-table-values@0.8.0

## 0.7.1

### Patch Changes

- @rethinkhealth/hl7v2-lint-profile-events-segments-order@0.7.1
- @rethinkhealth/hl7v2-lint-profile-field-max-length@0.7.1
- @rethinkhealth/hl7v2-lint-profile-field-repetition@0.7.1
- @rethinkhealth/hl7v2-lint-profile-required-components@0.7.1
- @rethinkhealth/hl7v2-lint-profile-required-fields@0.7.1
- @rethinkhealth/hl7v2-lint-profile-table-values@0.7.1

## 0.7.0

### Patch Changes

- @rethinkhealth/hl7v2-lint-profile-events-segments-order@0.7.0
- @rethinkhealth/hl7v2-lint-profile-field-max-length@0.7.0
- @rethinkhealth/hl7v2-lint-profile-field-repetition@0.7.0
- @rethinkhealth/hl7v2-lint-profile-required-components@0.7.0
- @rethinkhealth/hl7v2-lint-profile-required-fields@0.7.0
- @rethinkhealth/hl7v2-lint-profile-table-values@0.7.0

## 0.6.0

### Minor Changes

- bd43116: Add preset that bundles all profile-based lint rules: required-fields, field-max-length, field-repetition, required-components, and table-values.

### Patch Changes

- Updated dependencies [1b6bf9b]
- Updated dependencies [7c9ba88]
- Updated dependencies [c593c84]
- Updated dependencies [86fd84f]
- Updated dependencies [228b78f]
- Updated dependencies [0d57a57]
- Updated dependencies [5221a37]
- Updated dependencies [9ad16c0]
- Updated dependencies [1f73b98]
  - @rethinkhealth/hl7v2-lint-profile-field-max-length@0.6.0
  - @rethinkhealth/hl7v2-lint-profile-required-fields@0.6.0
  - @rethinkhealth/hl7v2-lint-profile-field-repetition@0.6.0
  - @rethinkhealth/hl7v2-lint-profile-required-components@0.6.0
  - @rethinkhealth/hl7v2-lint-profile-table-values@0.6.0
  - @rethinkhealth/hl7v2-lint-profile-events-segments-order@0.6.0
