---
"@rethinkhealth/hl7v2-jsonify": patch
"@rethinkhealth/hl7v2-parser": patch
"@rethinkhealth/hl7v2-ast": patch
"@rethinkhealth/hl7v2": patch
"@rethinkhealth/hl7v2-cli": patch
---

This PR improves the HL7v2 JSON conversion utilities and related packages. It enhances the `@rethinkhealth/hl7v2-jsonify` package to better handle edge cases, such as missing segment names, non-numeric indices, and deeply nested HL7 structures. The update also includes additional tests to ensure robust and predictable behavior. Patch releases are published for all related HL7v2 packages to reflect these improvements and maintain compatibility across the ecosystem.
