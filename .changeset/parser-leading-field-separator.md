---
"@glion/parser": patch
---

A segment that starts with the field separator keeps its fields. After a segment with a Segment ID and no fields, the parser no longer skips the next segment's first field separator, which read `|a|b` as Segment ID `a` (#1087). A segment that is only the field separator keeps an empty field on each side of it, so the serializer writes it back instead of an empty line (#1088).
