---
"@glion/util-query": minor
---

Breaking: every step of a path names a direct child of the node before it, and the first step a direct child of the message (ADR 0029). A path to a node inside a segment group names every group from the message down: after `@glion/transform-profile-groups` runs, `PID.3` returns `null` on an `ORU_R01` and the patient identifier is `PATIENT_RESULT.PATIENT.PID.3`. Paths on a flat tree, and to segments left at the top level such as `MSH`, are unchanged.

`[n]` counts the direct children with that name, segments and groups together, and `format()` numbers a node the same way, so `select(root, format(node, ancestors))` returns `node`; before, a formatted path could select another segment. `selectAll()` matches every node a step without `[n]` names, including when the path has a repetition: `selectAll(tree, "OBX.1[2]")` returns the second repetition of OBX-1 in every `OBX`, not only the first.
