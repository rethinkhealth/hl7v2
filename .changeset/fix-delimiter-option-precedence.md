---
"@rethinkhealth/hl7v2-decode-escapes": patch
---

Fix delimiter precedence so that `options.delimiters` override `tree.data.delimiters`. Previously, explicit options were ignored when the tree already had delimiters set.
