# @rethinkhealth/hl7v2-annotate-profile-fields-code-systems

## 0.10.1

### Patch Changes

- Updated dependencies [cacf65e]
  - @rethinkhealth/hl7v2-profiles@0.10.1
  - @rethinkhealth/hl7v2-ast@0.10.1
  - @rethinkhealth/hl7v2-util-visit@0.10.1

## 0.10.0

### Minor Changes

- 32b61e8: Add field-level code systems annotation plugin that enriches coded value subcomponents with UTG display name, status, and code system identity. Scoped to field-level table references only — component-level tables tracked in #494. Also updates the preset to bundle all three annotators (fields + datatypes + fields-code-systems).

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.10.0
- @rethinkhealth/hl7v2-profiles@0.10.0
- @rethinkhealth/hl7v2-util-visit@0.10.0
