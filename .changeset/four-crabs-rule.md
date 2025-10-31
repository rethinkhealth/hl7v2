---
"@rethinkhealth/hl7v2-jsonify": patch
---

We have updated the HL7 v2 jsonify architecture to allow returning a JSON object instead of a string. The processor result is now stored in `file.result` rather than as a string value. This change improves type safety, enables more flexible downstream processing, and matches expected usage for consumers needing deep access to parsed message structure.
