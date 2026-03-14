---
"@rethinkhealth/hl7v2-util-message-info": minor
"@rethinkhealth/hl7v2-profiles": minor
---

Add `lookup` option to `getMessageStructure` and `getMessageInfo` for resolving message structure from event maps when MSH-9.3 is absent.

- Add `lookup` option to `getMessageStructure()` and `getMessageInfo()` (defaults to `true`)
- Support `lookup: true` to use built-in profile event maps, or pass a custom `Record<string, Record<string, string>>` map
- Add `MessageInfoOptions` type export
- Export `eventMaps` from `@rethinkhealth/hl7v2-profiles` public API
