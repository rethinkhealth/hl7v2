---
"@rethinkhealth/hl7v2-profiles": minor
"@rethinkhealth/hl7v2-annotate-profile-context": minor
"@rethinkhealth/hl7v2-annotate-profile-segments": minor
"@rethinkhealth/hl7v2-preset-annotate-profile-recommended": minor
---

Add segment title annotation plugin

- New package `@rethinkhealth/hl7v2-annotate-profile-segments` — unified plugin that annotates Segment AST nodes with their HL7v2 specification title (e.g., MSH → "Message Header")
- Add `profiles.segments` store to `@rethinkhealth/hl7v2-profiles` with per-version segment definitions
- Extend `ProfileContext` with `segments: SegmentDefinition` (breaking — requires updating any code that constructs `ProfileContext` manually)
- Wire plugin into `@rethinkhealth/hl7v2-preset-annotate-profile-recommended`
