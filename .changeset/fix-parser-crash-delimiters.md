---
"@rethinkhealth/hl7v2-parser": patch
"@rethinkhealth/hl7v2-to-hl7v2": patch
"@rethinkhealth/hl7v2-ast": patch
---

fix(parser): handle delimiter tokens before segment header without throwing

The parser no longer throws when delimiter characters (|, ^, ~, &) appear before
a segment name. Instead, it creates a segment with an empty name that linters can
inspect. This fixes crashes when users paste partial messages or hospital interfaces
send truncated transmissions.

The serializer emits unnamed segment content without a leading separator, preserving
round-trip idempotency for malformed input.
