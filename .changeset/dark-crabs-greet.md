---
"@rethinkhealth/hl7v2-lint-required-message-header": patch
"@rethinkhealth/hl7v2-lint-segment-header-length": patch
"@rethinkhealth/hl7v2-util-query": patch
"@rethinkhealth/hl7v2-to-hl7v2": patch
"@rethinkhealth/hl7v2-parser": patch
"@rethinkhealth/hl7v2-builder": patch
"@rethinkhealth/hl7v2-jsonify": patch
"@rethinkhealth/hl7v2-ast": patch
---

Refactored the HL7v2 suite to introduce a new architecture for segment nodes. Segment nodes now include a dedicated `name` attribute by default, which explicitly represents the segment header. This enhancement eliminates the previous need to encode the segment header as the first field within the segment's children array. As a result, segment construction and parsing are now more intuitive, and downstream consumers can reliably access segment names via the `name` property rather than inferring them from field data. This change improves type safety, code clarity, and aligns the AST model more closely with HL7v2 semantics.
