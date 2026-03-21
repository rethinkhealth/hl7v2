# @rethinkhealth/hl7v2-lint-profile-events-segments-order

## 0.7.1

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.7.1
- @rethinkhealth/hl7v2-profiles@0.7.1
- @rethinkhealth/hl7v2-util-query@0.7.1
- @rethinkhealth/hl7v2-util-visit@0.7.1

## 0.7.0

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.7.0
- @rethinkhealth/hl7v2-profiles@0.7.0
- @rethinkhealth/hl7v2-util-query@0.7.0
- @rethinkhealth/hl7v2-util-visit@0.7.0

## 0.6.0

### Patch Changes

- 9ad16c0: New lint rule that validates HL7v2 segment order against message structure profiles using the DFA automaton runner.
  - Resolves profile from `tree.data.messageInfo` or MSH-9.3/MSH-12 — no compensation logic
  - Uses `file.message()` for consumer-controlled severity
  - Stops at first invalid segment (DFA cannot recover)
  - Reports empty/undefined segment names as errors
  - Pure `resolveDefinition()` returns a Result type (no side effects)

- 1f73b98: Remove tree.data.messageInfo from all packages. Delete hl7v2-annotate-message and hl7v2-util-message-info packages. Rename hl7v2-annotate-message-structure to hl7v2-message-structure. All packages now read MSH fields directly via value() from hl7v2-util-query.
- Updated dependencies [f00432e]
- Updated dependencies [07fdace]
- Updated dependencies [7763c22]
- Updated dependencies [0b57ba9]
  - @rethinkhealth/hl7v2-profiles@0.6.0
  - @rethinkhealth/hl7v2-util-query@0.6.0
  - @rethinkhealth/hl7v2-util-visit@0.6.0
  - @rethinkhealth/hl7v2-ast@0.6.0
