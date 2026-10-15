---
"@glion/util-query": minor
---

Breaking: every step of a path is separated with `.`. Segment groups, the segment, and its field are written `ORDER.ORC.1`, `PID.5.1`, and `PATIENT_RESULT.ORDER_OBSERVATION[2].OBX.5.1`; the first numeric step is the field. `format()` returns paths in this form. A path written with `-`, such as `PID-5.1`, throws an error that gives the path written with `.`.

`format()` returns `null` for a field, repetition, component, or subcomponent whose ancestors hold no segment or group, instead of a path starting with `null`. `parse()` rejects inherited object keys such as `__proto__` and `constructor` as invalid paths.
