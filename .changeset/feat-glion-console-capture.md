---
"glion": minor
---

Capture `console.log`, `console.info`, `console.warn`, and `console.error` as structured `log` events.

- Add `log` event type with `level` field (`"log"` | `"info"` | `"warn"` | `"error"`) and `message` string
- Intercept all four console methods in the child process before loading user code
- Format arguments via `util.format` (supports `%s`, `%d`, `%j` placeholders)
