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
- Add `successCode` option to `acknowledge()` for AA vs CA (defaults to `"AA"`)
- Add `successCode` option to `ackMiddleware()` passed through to `acknowledge()`
- Default unknown errors in `ackMiddleware` to `AckApplicationError` (AE)
