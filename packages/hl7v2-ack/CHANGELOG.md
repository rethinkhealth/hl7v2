# @rethinkhealth/hl7v2-ack

## 0.7.0

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.7.0
- @rethinkhealth/hl7v2-builder@0.7.0
- @rethinkhealth/hl7v2-util-query@0.7.0
- @rethinkhealth/hl7v2-util-timestamp@0.7.0

## 0.6.0

### Patch Changes

- d94b9ff: Add `acknowledge()` function that builds spec-compliant ACK/NAK response ASTs from parsed HL7v2 messages. Supports AA (success), AE (error), and AR (reject) acknowledgment codes with optional ERR segments.
  - Add `AckException` abstract base class and `AckError` / `AckReject` subclasses with required `errorCode` and optional `severity`
  - Support `cause` option in `AckExceptionOptions` for error chain debugging
  - Derive ACK sender (MSH-3/MSH-4) from the original message's MSH-5/MSH-6 when `sending` is omitted
  - Add `processingId` option to override MSH-11 (defaults to origin message's MSH-11)
  - Add `includeErrSegment` option to control ERR segment generation (defaults to `true`)
  - Add `uid()` utility for generating MSH-10 control IDs via `nanoid`

- 1f73b98: Remove tree.data.messageInfo from all packages. Delete hl7v2-annotate-message and hl7v2-util-message-info packages. Rename hl7v2-annotate-message-structure to hl7v2-message-structure. All packages now read MSH fields directly via value() from hl7v2-util-query.
- Updated dependencies [5e50f20]
- Updated dependencies [7763c22]
- Updated dependencies [0b57ba9]
  - @rethinkhealth/hl7v2-util-timestamp@0.6.0
  - @rethinkhealth/hl7v2-util-query@0.6.0
  - @rethinkhealth/hl7v2-builder@0.6.0
  - @rethinkhealth/hl7v2-ast@0.6.0
