---
"@rethinkhealth/hl7v2-parser": patch
---

Added position tracking to the `Root` node for accurate source location information:

- **Root position now included**: The `Root` node now includes a `position` field spanning from the first token to the last token in the document
- **Streaming implementation**: Position tracking is performed efficiently in a streaming fashion:
  - `root.position.start` is set once on the first TEXT token
  - `root.position.end` is set once during finalization
  - Uses a separate `documentEnd` tracker that persists across segment boundaries
- **Accurate source mapping**: The position accurately reflects the actual source text boundaries, including trailing delimiters when present
- **Empty document handling**: Empty documents receive a default position of `{start: {line: 1, column: 1, offset: 0}, end: {line: 1, column: 1, offset: 0}}`

This enables better error reporting, source mapping, and tooling integration by providing complete position information for the entire HL7v2 document.
