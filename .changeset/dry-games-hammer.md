---
"@rethinkhealth/hl7v2-ack": minor
---

Add `acknowledge()` function that builds spec-compliant ACK/NAK response ASTs from parsed HL7v2 messages. Supports AA (success), AE (error), and AR (reject) acknowledgment codes with optional ERR segments.

- Add `AckException` abstract base class and `AckError` / `AckReject` subclasses with required `errorCode` and optional `severity`
- Support `cause` option in `AckExceptionOptions` for error chain debugging
- Derive ACK sender (MSH-3/MSH-4) from the original message's MSH-5/MSH-6 when `sending` is omitted
- Add `processingId` option to override MSH-11 (defaults to origin message's MSH-11)
- Add `includeErrSegment` option to control ERR segment generation (defaults to `true`)
- Add `uid()` utility for generating MSH-10 control IDs via `nanoid`
