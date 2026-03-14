---
"@rethinkhealth/hl7v2-annotate-message-structure": minor
"@rethinkhealth/hl7v2-profiles": minor
---

Resolve message structure via event maps in the annotator plugin.

- `hl7v2-annotate-message-structure` now resolves canonical message structures using built-in event maps (e.g., `ADT_A04` → `ADT_A01`)
- Falls back to naive `{messageCode}_{triggerEvent}` concatenation for unknown events
- Accepts optional `eventMap` plugin option to override the built-in maps
- Add `./event-maps` subpath export from `@rethinkhealth/hl7v2-profiles`
- Revert `hl7v2-util-message-info` to pure stateless utility (remove `lookup` option and profiles dependency)
