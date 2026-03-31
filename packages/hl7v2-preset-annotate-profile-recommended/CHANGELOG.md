# @rethinkhealth/hl7v2-preset-annotate-profile-recommended

## 0.13.0

### Patch Changes

- f411ebf: Centralize profile loading into a single context plugin

  New package:
  - `@rethinkhealth/hl7v2-annotate-profile-context` — unified plugin that loads all profile data (fields, datatypes, tables) once per pipeline run and attaches them to `file.data.profile` for downstream consumers

  Refactored packages (internal, no API changes):
  - 7 lint rules and 2 annotation plugins now read profiles from `file.data.profile` instead of loading them independently, eliminating duplicated async loading code from 9+ locations
  - Both profile presets include the context plugin as the first entry to ensure `file.data.profile` is populated before consumers run

- Updated dependencies [f411ebf]
  - @rethinkhealth/hl7v2-annotate-profile-context@0.13.0
  - @rethinkhealth/hl7v2-annotate-profile-fields@0.13.0
  - @rethinkhealth/hl7v2-annotate-profile-datatypes@0.13.0
  - @rethinkhealth/hl7v2-annotate-profile-fields-code-systems@0.13.0

## 0.12.0

### Patch Changes

- @rethinkhealth/hl7v2-annotate-profile-datatypes@0.12.0
- @rethinkhealth/hl7v2-annotate-profile-fields@0.12.0
- @rethinkhealth/hl7v2-annotate-profile-fields-code-systems@0.12.0

## 0.11.0

### Patch Changes

- @rethinkhealth/hl7v2-annotate-profile-datatypes@0.11.0
- @rethinkhealth/hl7v2-annotate-profile-fields@0.11.0
- @rethinkhealth/hl7v2-annotate-profile-fields-code-systems@0.11.0

## 0.10.1

### Patch Changes

- @rethinkhealth/hl7v2-annotate-profile-datatypes@0.10.1
- @rethinkhealth/hl7v2-annotate-profile-fields@0.10.1
- @rethinkhealth/hl7v2-annotate-profile-fields-code-systems@0.10.1

## 0.10.0

### Minor Changes

- 32b61e8: Add field-level code systems annotation plugin that enriches coded value subcomponents with UTG display name, status, and code system identity. Scoped to field-level table references only — component-level tables tracked in #494. Also updates the preset to bundle all three annotators (fields + datatypes + fields-code-systems).

### Patch Changes

- Updated dependencies [32b61e8]
  - @rethinkhealth/hl7v2-annotate-profile-fields-code-systems@0.10.0
  - @rethinkhealth/hl7v2-annotate-profile-datatypes@0.10.0
  - @rethinkhealth/hl7v2-annotate-profile-fields@0.10.0

## 0.9.0

### Minor Changes

- e15a046: Add profile-based datatype annotation plugin with stop-at-primitive cascade. Annotation flows down the AST (FieldRepetition → Component → Subcomponent) and stops where the primitive value lives. Also adds preset bundling fields + datatypes annotators.

### Patch Changes

- Updated dependencies [e15a046]
- Updated dependencies [9e40900]
  - @rethinkhealth/hl7v2-annotate-profile-datatypes@0.9.0
  - @rethinkhealth/hl7v2-annotate-profile-fields@0.9.0
