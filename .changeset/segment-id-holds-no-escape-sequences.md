---
"@glion/parser": patch
---

Read a Segment ID as it is written instead of decoding its escape sequences, which moved a field value on every parse and serialize round trip when a Segment ID such as `Z\R\Z` decoded to a delimiter (#1054).
