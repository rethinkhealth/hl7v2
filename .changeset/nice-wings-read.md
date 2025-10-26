---
"@rethinkhealth/hl7v2-preset-lint-recommended": patch
---

Introduce a lint rule that fails if the HL7v2 message version exceeds 2.9.9. This helps ensure compatibility with widely adopted HL7v2 tooling and standards, preventing accidental use of unsupported or nonstandard message versions.
