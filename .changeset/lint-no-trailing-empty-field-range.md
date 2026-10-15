---
"@glion/lint-no-trailing-empty-field": patch
---

Fix where `@glion/lint-no-trailing-empty-field` points a finding.

- End the range at the end of the segment, so it no longer runs over the segment terminator when the segment does not end with a field separator, as in `PID|1|^`
- End `ancestors` at the segment, without the trailing fields after it
