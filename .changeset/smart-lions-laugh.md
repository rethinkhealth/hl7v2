---
"@rethinkhealth/hl7v2-util-message-info": minor
"@rethinkhealth/hl7v2-profiles": minor
---

Add `lookup` option to `getMessageStructure` and `getMessageInfo` for looking up message structure from event maps when MSH-9.3 is absent.

- Add `lookup` option to `getMessageStructure()` and `getMessageInfo()` (defaults to `false`)
- Support `lookup: true` to use built-in profile event maps, or pass a custom `Record<string, Record<string, string>>` map
- Add `MessageInfoOptions` type export
- Add `./event-maps` subpath export from `@rethinkhealth/hl7v2-profiles` for lightweight access to event map data
- Remove unused `hl7v2-util-message-info` dependency from `hl7v2-profiles` (was causing circular dependency)
