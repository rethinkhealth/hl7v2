---
"@glion/lint-message-version": patch
---

Fix the type of `@glion/lint-message-version` so `unified().use(hl7v2LintMessageVersion, { expression })` type-checks.

- Point a finding on an empty, unparsable, or unsupported version at the node it is about; a node without a position gives a finding without a place, instead of the position of its segment or the message
