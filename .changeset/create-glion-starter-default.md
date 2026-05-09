---
"create-glion": minor
---

Add `starter` template and skip the example-select prompt by default so a fresh interactive run only asks for the project directory.

- Add `starter` example (minimal MLLP server: one `ADT^A01` route with `ackMiddleware()`, plus a catch-all reject)
- Use `starter` silently when `--example` is omitted; the interactive picker now only opens when the flag is passed without a value (e.g. `create-glion --example`)
- Default the directory prompt to `./my-glion-app` via `defaultValue`; pressing enter is no longer rejected as empty input
