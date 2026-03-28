# @rethinkhealth/hl7v2-encode-escapes

## 0.8.0

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.8.0

## 0.7.1

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.7.1

## 0.7.0

### Minor Changes

- 524bdf2: Add new `hl7v2-encode-escapes` plugin for encoding special characters as HL7v2 escape sequences at write-time. This is the inverse of `hl7v2-decode-escapes` and ensures delimiter characters in subcomponent values are safely escaped before serialization, preventing malformed messages.

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.7.0
