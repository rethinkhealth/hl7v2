---
"@glion/profiles": patch
---

Tables no longer hold rows that are not values. These rows are gone:

- the `...` and `…` rows the standard prints for a table with no suggested values;
- the row in table 0550 whose only code is a non-breaking space (`External Jugular`);
- the non-breaking space after `CHEST` and `KIDN` in table 0550;
- note text held as values in tables 0203, 0391, 0725, 0836 and 0838.

Table 0010 in v2.5.1, for example, now has no codes, where it had one coded `...`. A table whose `...` row pointed to an outside code set, such as 0399 (ISO 3166), now has no codes, and that pointer is no longer in the data. Printed ranges such as `E1 ... E9` in table 0141 are still held as printed.
