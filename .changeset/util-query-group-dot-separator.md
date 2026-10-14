---
"@glion/util-query": minor
---

Breaking: segment groups in a path are separated with `.` instead of `-`. `-` now only separates a segment from its field, so `ORDER-ORC-1` is written `ORDER.ORC-1` and `PATIENT_RESULT-ORDER_OBSERVATION[2]-OBX-5.1` is written `PATIENT_RESULT.ORDER_OBSERVATION[2].OBX-5.1`. `format()` returns paths in the new form. A path written the old way throws an error that names the misplaced `-` and gives the path written with `.`. Paths without a group, such as `PID-5.1`, are unchanged.
