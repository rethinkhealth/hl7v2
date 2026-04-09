---
"@rethinkhealth/hl7v2-mllp": patch
"glion": patch
---

Fix telemetry middleware not capturing ACK codes when `ackMiddleware()` is used.

The TUI displayed `?` instead of `AA`/`AE`/`AR` because the telemetry middleware was installed as the innermost middleware, causing it to read `ctx.res` before the outer `ackMiddleware` had set it. Telemetry is now prepended (outermost) so its `await next()` completes after all user middleware have run.

- Add `{ prepend: true }` option to `Mllp.use()` for inserting middleware at the front of the chain
- Prepend the glion telemetry middleware so it wraps ackMiddleware correctly
