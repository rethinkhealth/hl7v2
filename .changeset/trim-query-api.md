---
"@rethinkhealth/hl7v2-util-query": patch
---

Replace the query API with a minimal surface: `parse`, `find`, `value`, and `has`.  
All helper names and return shapes changed to favor a simpler, faster lookup path.
