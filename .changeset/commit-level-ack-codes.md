---
"@rethinkhealth/hl7v2-ack": major
"@rethinkhealth/hl7v2-mllp-ack": major
---

Add commit-level acknowledgment codes (CA, CE, CR) per HL7v2 Table 0008 and rename exception classes for clarity.

- Rename `AckError` to `AckApplicationError` (code `AE`)
- Rename `AckReject` to `AckApplicationReject` (code `AR`)
- Remove `AckError` and `AckReject` aliases (breaking change)
- Add `AckCommitError` exception class (code `CE`) for commit-level errors
- Add `AckCommitReject` exception class (code `CR`) for commit-level rejections
- Add `AckCode` const (Table 0008), `Hl7ErrorCode` const (Table 0357), `Severity` const (Table 0516)
- Add concrete error subclasses: `ApplicationInternalError`, `UnsupportedMessageTypeReject`, `CommitInternalError`
- Add `toErrSegment()` method on `AckException` for building ERR segment AST
- Add `successCode` option to `acknowledge()` for AA vs CA (defaults to `AckCode.ApplicationAccept`)
- Make `error` and `successCode` mutually exclusive via discriminated union type
- Add `successCode` option to `ackMiddleware()` passed through to `acknowledge()`
- Default unknown errors in `ackMiddleware` to `ApplicationInternalError`
