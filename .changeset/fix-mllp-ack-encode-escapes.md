---
"@rethinkhealth/hl7v2-mllp-ack": patch
---

Fix ACK responses to encode escape sequences before serialization.

- Run `hl7v2EncodeEscapes` on the ACK tree so delimiter characters in error messages are properly escaped
