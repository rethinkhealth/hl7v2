---
"@rethinkhealth/hl7v2-decode-escapes": patch
---

Explicitly strip highlighting escape sequences (`\H\`, `\N\`) during decoding. These presentational markers are intentionally removed as they serve no purpose in parsed message values. Added tests for stripping behavior alongside other escape sequences.
