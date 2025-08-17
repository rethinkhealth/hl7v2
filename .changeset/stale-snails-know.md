---
"@rethinkhealth/hl7v2-utils": patch
---

We now use the default carriage return character (`\r`) to delimit HL7v2 segments. If the input message uses line feed (`\n`) instead of carriage return, we automatically normalize all such occurrences to use `\r` for consistent segment handling.

