# @rethinkhealth/hl7v2-mllp-ack

## 0.7.1

### Patch Changes

- fcf9e3a: Add commit-level acknowledgment codes (CA, CE, CR) per HL7v2 Table 0008 and rename exception classes for clarity.
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

- Updated dependencies [fcf9e3a]
  - @rethinkhealth/hl7v2-ack@0.7.1
  - @rethinkhealth/hl7v2-mllp@0.7.1
  - @rethinkhealth/hl7v2-to-hl7v2@0.7.1

## 0.7.0

### Patch Changes

- @rethinkhealth/hl7v2-ack@0.7.0
- @rethinkhealth/hl7v2-mllp@0.7.0
- @rethinkhealth/hl7v2-to-hl7v2@0.7.0

## 0.6.0

### Patch Changes

- d94b9ff: Add `ackMiddleware()` function that wraps MLLP handlers with automatic HL7v2 ACK/NAK response generation.
  - Return AA on successful handler execution, AE on `AckError`, AR on `AckReject`
  - Convert unknown errors to AE with error code 207 (internal error)
  - Support custom `sending` and `generateId` options via `AckMiddlewareOptions`
  - Pass through handler-set responses when no error occurs

- Updated dependencies [d94b9ff]
- Updated dependencies [0f0af81]
- Updated dependencies [1f73b98]
  - @rethinkhealth/hl7v2-ack@0.6.0
  - @rethinkhealth/hl7v2-mllp@0.6.0
  - @rethinkhealth/hl7v2-to-hl7v2@0.6.0
