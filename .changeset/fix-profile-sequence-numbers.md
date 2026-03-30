---
"@rethinkhealth/hl7v2-profiles": patch
---

Fix field sequence numbers in v2.6–v2.8.2 profiles and re-insert deprecated fields

The codegen pipeline that generated field profiles for HL7v2 versions v2.6 through v2.8.2 removed deprecated fields from the array and renumbered the remaining fields sequentially. This caused the `sequence` property to represent the array index rather than the HL7 field number, resulting in all annotation and validation applying the wrong metadata to fields in segments with deprecated fields.

This fix:

- Corrects `sequence` values on all existing fields to match the HL7 field number (extracted from the `id` property)
- Re-inserts deprecated fields at their correct sequence positions with `deprecated: true`, sourced from the prior version that last included them
- Ensures no sequence gaps exist in any segment definition

127 files across 6 versions (v2.6, v2.7, v2.7.1, v2.8, v2.8.1, v2.8.2) were affected. Versions v2.1 through v2.5.1 were already correct and are unchanged.
