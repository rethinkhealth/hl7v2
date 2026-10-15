---
"@glion/util-timestamp": minor
---

Breaking: the `Timestamp` class is replaced by `parseDT`, `parseTM`, and `parseDTM`, which read a DT, TM, or DTM value into a plain object holding the fields the value gives, and `formatDT`, `formatTM`, and `formatDTM`, which write it back. A parse never throws: it returns `{ success: true, data }` or `{ success: false, issue }`, where `issue.code` names the cause. A parse checks the calendar, so `20250229` fails with `day-out-of-range`, where `Timestamp.parse` returned March 1. No value depends on the server's time zone: the fields are the sender's local time, and `offset` is present only when the value gives one. `Precision` ends at `"second"`; the digits after the second are in `fraction`. `Timestamp.now()`, `Timestamp.from()`, and `toDate()` are removed.
