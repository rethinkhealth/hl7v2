---
"@rethinkhealth/hl7v2-annotate-delimiters": minor
"@rethinkhealth/hl7v2-ast": minor
"@rethinkhealth/hl7v2-utils": minor
"@rethinkhealth/hl7v2-parser": minor
"@rethinkhealth/hl7v2-to-hl7v2": minor
"@rethinkhealth/hl7v2-decode-escapes": minor
"@rethinkhealth/hl7v2-encode-escapes": minor
"@rethinkhealth/hl7v2": minor
---

Remove `root.data.delimiters` and derive delimiters from MSH-1/MSH-2 via `file.data` per ADR 0014.

- Add `resolveDelimiters()` utility in `hl7v2-utils` that extracts delimiters from MSH-1 (field separator) and MSH-2 (encoding characters), falling back to `DEFAULT_DELIMITERS`
- Add `hl7v2-annotate-delimiters` plugin that sets `file.data.delimiters` from MSH for downstream plugins
- Add VFile type augmentation (`DataMap.delimiters`) in `hl7v2-ast` for type-safe `file.data.delimiters` access
- Remove `delimiters` from `RootData` interface — consumers should read `file.data.delimiters` or call `resolveDelimiters()`
- Change `hl7v2-decode-escapes`, `hl7v2-encode-escapes`, and `hl7v2-to-hl7v2` to read `file.data.delimiters` with `resolveDelimiters()` fallback
- Fix `hl7v2-encode-escapes` to skip MSH-1 and MSH-2 during encoding (they define delimiters and must not be escaped per the HL7v2 spec)
- Rename `getDelimiters` to `resolveDelimiters` to clarify its role as a derivation function
- Add `hl7v2-annotate-delimiters` to the default pipeline in `hl7v2`
