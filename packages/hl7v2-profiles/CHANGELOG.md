# @rethinkhealth/hl7v2-profiles

## 0.12.0

### Minor Changes

- 1ef2a1f: Add `resolveMessageStructure()` utility and remove `hl7v2-lint-message-structure-missing` rule.
  - Add `resolveMessageStructure(version, messageCode, triggerEvent)` to `@rethinkhealth/hl7v2-profiles` for resolving canonical message structure IDs from event maps
  - Resolve message structure from MSH-9.1 + MSH-9.2 via event maps when MSH-9.3 is absent in segment-order linting (wire value wins when present)
  - Remove `hl7v2-lint-message-structure-missing` from `hl7v2-preset-lint-recommended` — it produced false positives for pre-v2.3.1 messages where MSH-9.3 does not exist in the spec

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.12.0

## 0.11.0

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.11.0

## 0.10.1

### Patch Changes

- cacf65e: Fix field sequence numbers in v2.6–v2.8.2 profiles and re-insert deprecated fields

  The codegen pipeline that generated field profiles for HL7v2 versions v2.6 through v2.8.2 removed deprecated fields from the array and renumbered the remaining fields sequentially. This caused the `sequence` property to represent the array index rather than the HL7 field number, resulting in all annotation and validation applying the wrong metadata to fields in segments with deprecated fields.

  This fix:
  - Corrects `sequence` values on all existing fields to match the HL7 field number (extracted from the `id` property)
  - Re-inserts deprecated fields at their correct sequence positions with `deprecated: true`, sourced from the prior version that last included them
  - Ensures no sequence gaps exist in any segment definition

  127 files across 6 versions (v2.6, v2.7, v2.7.1, v2.8, v2.8.1, v2.8.2) were affected. Versions v2.1 through v2.5.1 were already correct and are unchanged.
  - @rethinkhealth/hl7v2-utils@0.10.1

## 0.10.0

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.10.0

## 0.9.0

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.9.0

## 0.8.0

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.8.0

## 0.7.1

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.7.1

## 0.7.0

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.7.0

## 0.6.0

### Patch Changes

- f00432e: Add identity mappings to event maps for all canonical message structures across all 13 HL7v2 versions (v2.1 through v2.8.2). Previously only alias mappings existed; now every valid event resolves to its canonical structure.
- 07fdace: Created a new profile package
- Updated dependencies [95e32f2]
  - @rethinkhealth/hl7v2-utils@0.6.0
