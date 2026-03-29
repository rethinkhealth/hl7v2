# @rethinkhealth/hl7v2-preset-annotate-profile-recommended

## 0.9.0

### Minor Changes

- e15a046: Add profile-based datatype annotation plugin with stop-at-primitive cascade. Annotation flows down the AST (FieldRepetition → Component → Subcomponent) and stops where the primitive value lives. Also adds preset bundling fields + datatypes annotators.

### Patch Changes

- Updated dependencies [e15a046]
- Updated dependencies [9e40900]
  - @rethinkhealth/hl7v2-annotate-profile-datatypes@0.9.0
  - @rethinkhealth/hl7v2-annotate-profile-fields@0.9.0
