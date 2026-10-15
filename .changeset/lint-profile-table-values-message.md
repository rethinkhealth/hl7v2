---
"@glion/lint-profile-table-values": patch
---

Report `@glion/lint-profile-table-values` findings as one sentence that names the table by its TBL#, such as ``Field `EVN-1` (Event Type Code) is `ZZZ`; it must be a code of table `HL70003` (Event type).``

- Set `actual` to the value and `expected` to the table's codes
- Set `url` to the rule's README
- Report a field whose profile gives it no name by its ID alone
