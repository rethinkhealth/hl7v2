---
"@glion/util-query": minor
---

`select`, `selectAll`, `value`, and `matches` read a path from a message, a group, or a segment. The first step names a child of that node, so a path read from a segment starts with the field: `value(segment, "5.1")`. `ancestors` starts at the node passed. `PathParts.segment` is optional, since a path that starts with the field names no segment.
