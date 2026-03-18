---
"@rethinkhealth/hl7v2-encode-escapes": minor
---

Add new `hl7v2-encode-escapes` plugin for encoding special characters as HL7v2 escape sequences at write-time. This is the inverse of `hl7v2-decode-escapes` and ensures delimiter characters in subcomponent values are safely escaped before serialization, preventing malformed messages.
