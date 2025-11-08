---
"@rethinkhealth/hl7v2-lint-no-trailing-empty-field": patch
---

Refactor implementation for better performance and clarity. The logic now uses `findLastIndex()` for cleaner code while maintaining optimal O(n) time complexity with zero allocations.
