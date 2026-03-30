---
"@rethinkhealth/hl7v2-lint-profile-table-values": patch
---

Fix table-values lint rule to validate all field repetitions, not just the first.

- Iterate all `fieldNode.children` so coded values in every repetition are checked against the HL7 table
- Report error positions on the specific repetition node for more precise diagnostics
