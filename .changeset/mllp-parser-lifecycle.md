---
"@rethinkhealth/hl7v2-mllp": major
"@rethinkhealth/hl7v2-mllp-ack": major
---

Replace constructor-option parser with `app.parser()` lifecycle stage and implement lazy pipeline execution (ADR-0013).

- Remove `MllpOptions`, `Parser`, `ParseResult` types — `app.parser()` accepts `Hl7v2Processor` (unified `Processor<Root, Root, Root>`) directly
- Add `ctx.ast` — synchronous access to the parsed AST for routing, ACK building, and filter functions
- Change `ctx.tree` from a sync property to `ctx.tree()` async method — triggers `run()` (transformers) lazily on first call, cached thereafter
- Add `ctx.result()` async method — triggers `run()` + `stringify()` lazily on first call, returns compiled output (e.g., JSON from `hl7v2Jsonify`), `undefined` when no compiler is configured
- Change `ctx.file` from `VFile | undefined` to `VFile` — always present, diagnostics accumulate after `tree()` triggers transformers
- Add `Hl7v2Processor` exported type alias for `Processor<Root, Root, Root>`
- Throw `MllpError` with code `ERR_NO_PARSER` when `handle()` called without `app.parser()`
- Change ACK middleware to use `ctx.ast` instead of `ctx.tree` for zero-async acknowledgment generation
