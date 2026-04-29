---
"@glion/mllp-client": patch
---

Internal cleanup — remove four code smells from `@glion/mllp-client` without changing behaviour:

**1. Test fixture duplication**

`SAMPLE_ADT`, `VALID_AA`, `VALID_AE`, the MLLP byte constants, and the `frame()` helper were copy-pasted across `core.test.ts` and `node.test.ts`. They now live in a single `test/fixtures.ts` and are imported from there. A fixture change in one place now covers every adapter (including future runtime adapters).

**2. Four near-identical "swallow rejection" helpers**

`closeDuplexSafely`, `abortWriterIgnoringErrors`, `cancelReaderIgnoringErrors`, and `closeWriterIgnoringErrors` all did the same thing — `await thenable, swallow the error`. They are replaced by one shared `ignoreErrors(promise)` in `internal/ignore-errors.ts`. Two source files (`client.ts`, `exchange.ts`) reference the single helper instead of declaring local copies.

**3. Per-adapter option-type aliases**

`NodeMllpClientOptions` was `Omit<MllpClientOptions, "connect">`. It is replaced by `BoundMllpClientOptions` exported from the core. The adapter constructor takes `BoundMllpClientOptions` directly. The shared name reflects the actual semantic ("the adapter has bound `connect` for you") and is reusable for the Deno and Workers adapters when they land.

This is a public-API rename: callers who imported `NodeMllpClientOptions` should switch to `BoundMllpClientOptions`. The package has not been published yet, so this is free.

**4. Verbose `InstanceType<typeof MllpClientError>` casts in tests**

The `InstanceType<>` indirection has been replaced with `MllpClientError` directly. No value added by the indirection.

Behaviour is identical — type-check is clean, lint is clean, all tests pass.
