---
"@rethinkhealth/hl7v2-mllp-ack": minor
---

Add `ackMiddleware()` function that wraps MLLP handlers with automatic HL7v2 ACK/NAK response generation.

- Return AA on successful handler execution, AE on `AckError`, AR on `AckReject`
- Convert unknown errors to AE with error code 207 (internal error)
- Support custom `sending` and `generateId` options via `AckMiddlewareOptions`
- Pass through handler-set responses when no error occurs
