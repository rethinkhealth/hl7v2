---
"@rethinkhealth/hl7v2": patch
---

Added support to Message Structure standard table. This helps retrieving the appropriate schema for most messages using the mapping in the standard table. For instance, ADT A04 does not have a defined schema. However, it has the exact definition of ADT A01. That mapping is available through the [standard table](https://terminology.hl7.org/5.1.0/CodeSystem-v2-0354.json.html).
