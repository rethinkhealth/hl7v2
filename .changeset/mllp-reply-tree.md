---
"@glion/mllp": minor
---

Breaking: a reply is an HL7v2 message as a `Root`, which a route handler returns and `app.handle()` serializes once the middleware have run.

- A route handler returns its reply: an HL7v2 message such as `ctx.ack()`, or `null` for no reply. Any other return value, `undefined` included, is answered `AE` with MSA-3 `Application internal error`, and `ctx.error` is an `MllpServerError` `INVALID_REPLY`. Before, returning nothing replied `AA`.
- `ctx.ack()` returns a `Root` and takes a text (`ctx.ack("Processing completed")`, `AA` with that text in MSA-3), `AcknowledgeOptions`, or an error (`ctx.ack(error)`, the NAK the error gets when thrown, without setting `ctx.error`).
- `ctx.res` is a `Root`: a middleware reads it after `next()` with `@glion/util-query`, edits it, or replaces it.
- `app.handle()` resolves to the reply serialized as UTF-8 bytes. `handleConnection()` and `serve()` take a `handle` that resolves to bytes.
- A VT or FS byte in a reply is escaped, so a reply built by the app never breaks MLLP framing.
- Remove the `Response` type and `{ raw }` replies; build a custom reply with `@glion/builder`, or parse it.
- Add the `MllpServerError` code `INVALID_REPLY`.
