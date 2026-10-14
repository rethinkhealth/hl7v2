---
"@glion/annotate-profile-context": minor
---

`file.data.profile.tables` is keyed by TBL# as profiles print it (`"HL70001"`), not by the bare table number (`"0001"`), so `node.data.table` and `field.data.table` look up a table directly. It also holds the tables of the components of the fields' datatypes, such as `"HL70301"` for HD.3, not only the tables printed on fields.
