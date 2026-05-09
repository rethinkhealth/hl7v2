---
"create-glion": minor
---

Add `starter` template as the default scaffold and accept defaults from both prompts so an empty interactive run produces a runnable project.

- Add `starter` example (minimal MLLP server: one `ADT^A01` route with `ackMiddleware()`, plus a catch-all reject) as the first option in the example list
- Default the example-select prompt to `starter` via `initialValue`
- Default the directory prompt to `./my-glion-app` via `defaultValue`; pressing enter is no longer rejected as empty input
