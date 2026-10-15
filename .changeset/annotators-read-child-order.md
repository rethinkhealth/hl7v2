---
"@glion/annotate-profile-datatypes": patch
"@glion/annotate-profile-fields": patch
---

The annotators annotate each field, component, and subcomponent the profile defines by its sequence number, read from its place in the segment, field repetition, or component. They no longer read `info.sequence` from `@glion/util-visit`. The annotations are unchanged.
