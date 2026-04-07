---
"@rethinkhealth/hl7v2-utils": patch
---

Fix `isEmptyNode` to treat whitespace-only fields as non-empty, per the HL7v2 spec.

- Remove `.trim()` from leaf node check — a space is valid HL7v2 data, not emptiness
- Fix round-trip fidelity: trailing fields containing whitespace are no longer silently dropped during parsing
