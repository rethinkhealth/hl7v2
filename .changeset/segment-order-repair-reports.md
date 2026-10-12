---
"@glion/lint-profile-segment-order": minor
"@glion/preset-lint-profile-recommended": minor
"@glion/hl7v2": minor
---

When a message does not fit its event schema, the rule reports each edit of the repair with the fewest edits, where it reported the first segment that did not fit. A segment the schema requires and the message does not have is reported as ``Segment `OBR` of segment group `PATIENT_RESULT > ORDER_OBSERVATION` is missing; the event schema requires it at this point.``, placed at the point where it would be inserted, with `expected` its ID. A segment the schema does not allow there is reported as ``Segment `PV1` is out of place; the event schema does not allow it at this point.``, on that segment, with `actual` its ID. The `Expected:` lists and `Message ended prematurely` are gone. The rule's `url` points to its README.

An `ADT_A01` with only `MSH` and `PID` now reports both `EVN` and `PV1` missing. A segment after the end of the message is reported as out of place. A segment in place of a required one is reported as out of place, next to the required one it displaces, reported as missing: `MSH PIDX PV` against `ADT_A01` reports `EVN` missing and `PIDX` out of place, then `PID` missing and `PV` out of place, then `PV1` missing at the end.

The rule reports at most 20 edits for a message, then `The message has 6 more missing or out-of-place segments; the rule reports the first 20.` A message of more than 1,000 segments is not repaired; the rule reports the first segment that does not fit, as before, with a `note` that says so. Through the preset, `parseHL7v2` from `@glion/hl7v2` reports the same.
