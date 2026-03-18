# @rethinkhealth/hl7v2-mllp-ack

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
