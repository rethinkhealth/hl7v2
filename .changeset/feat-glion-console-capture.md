---
"@glion/cli": minor
---

Capture `console.log`, `console.info`, `console.warn`, and `console.error` as structured `log` events.

- Add `log` event type with `level` field (`"log"` | `"info"` | `"warn"` | `"error"`) and `message` string
- Intercept all four console methods in the child process before loading user code
- Format arguments via `util.format` (supports `%s`, `%d`, `%j` placeholders)
- Render log events in the TUI with level-appropriate icons (▸ log, ℹ info, ! warn, ✗ error)
- Fix dev mode crash when autosave triggers a rebuild on a file with syntax errors — the current child keeps running and the next save retries
- Fix orphan child processes holding the port after parent crash — child detects parent death via stdin pipe close and self-exits
