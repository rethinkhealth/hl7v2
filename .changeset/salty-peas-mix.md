---
"@rethinkhealth/hl7v2-jsonify": patch  
"@rethinkhealth/hl7v2": patch
---

Fix missing first components in multicomponent fields

Fixed a critical bug where the first component of multicomponent HL7v2 fields was being dropped from the JSON output. The issue occurred in the jsonify package's index conversion logic:

- **Problem**: Components with 0-based indices were incorrectly converted to -1-based indices, causing `array[-1] = value` assignments that don't create valid array elements
- **Root cause**: The conversion logic `n.index - 1` was applied to all node types, but should only apply to fields (to skip the segment header at index 0)  
- **Solution**: Components and subcomponents now preserve their original 0-based indices, while fields continue to have their indices converted for proper array positioning

**Examples of fields that are now fixed:**
- `ORU^R01` now correctly parses to `["ORU", "R01"]` instead of `["R01"]`
- `PATID1234^5^M11` now correctly parses to `["PATID1234", "5", "M11"]` instead of `["5", "M11"]`

Added comprehensive test coverage to prevent regression of this issue.
