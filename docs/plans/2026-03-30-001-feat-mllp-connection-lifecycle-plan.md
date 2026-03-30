---
title: "feat: MLLP connection lifecycle (identity, state, hooks, error surfacing)"
type: feat
status: completed
date: 2026-03-30
origin: docs/brainstorms/2026-03-30-mllp-production-enhancements-requirements.md
---

# feat: MLLP connection lifecycle (identity, state, hooks, error surfacing)

## Overview

Add connection identity, per-connection mutable state, lifecycle callbacks, and error surfacing to the MLLP server. This is PR 1 of the production enhancements (see origin). The `Mllp` class stays pure — all lifecycle behavior lives in `serve()`.

## Problem Frame

Each `handle()` call creates an independent `Context` with no connection continuity. Connections have no identity (no ID), no shared state across messages, no lifecycle hooks, and errors from `#handleError` are silently swallowed. These gaps block production deployment in regulated healthcare environments that require audit trails and connection-level state management. (see origin: docs/brainstorms/2026-03-30-mllp-production-enhancements-requirements.md)

## Requirements Trace

- R1. Each connection gets a unique auto-incrementing integer ID, available on `ConnectionInfo`
- R2. Connection-scoped mutable state (`Map<string, unknown>`) created per socket, shared across all messages on that connection
- R3. `ServeOptions` accepts optional lifecycle callbacks: `onConnect`, `onDisconnect`, `onError`
- R4. Silent error swallowing in `Mllp.#handleError` is fixed — unhandled errors are surfaced to the serve-level `onError` callback, or `console.error` as last resort
- R5. `ConnectionInfo` is extended with `id` and `state` — consumers who read `ConnectionInfo` (middleware, handlers) are unaffected; code that constructs it (internal tests) must be updated

## Scope Boundaries

- **Not in scope:** In-flight message tracking and graceful shutdown (PR 2)
- **Not in scope:** Observability middleware (deferred)
- **Not in scope:** Deno/Bun adapters
- **Not in scope:** New public methods or properties on the `Mllp` class (fixing silent error swallowing is a behavior correction, not a new API surface)

## Context & Research

### Relevant Code and Patterns

- `src/server/types.ts:8-13` — `ConnectionInfo` interface (readonly fields: remoteAddress, remotePort, localPort, secure)
- `src/server/context.ts:43-128` — `createContext()` — receives `ConnectionInfo`, freezes it onto context
- `src/server/mllp.ts:183-197` — `#handleError` — silent catch block, returns `undefined`
- `src/node/serve.ts:111-135` — `serve()` — creates adapter, returns `Server` handle
- `src/node/serve.ts:159-207` — `handleConnection()` — creates `ConnectionInfo`, runs message loop, fire-and-forget
- `src/server/context.ts:45` — Variable storage uses `Map<string, unknown>` — same pattern for connection state

### Institutional Learnings

- Prior refactor (2026-03-25) established `app.parser()` pattern — clean breaks preferred over deprecated aliases (see origin feedback)
- Existing feedback: flatten enrichment onto existing types with concise names, not namespaced keys

## Key Technical Decisions

- **Auto-incrementing integer IDs:** Simple, fast, zero dependencies. gRPC uses sequential IDs internally. UUIDs are overkill for connection-scoped identity within a single process.
- **`Map<string, unknown>` for state:** Matches the existing `variables` Map pattern in `createContext()`. Zero cost when unused. Avoids `Record` prototype pollution footgun.
- **Error callback chain:** handler/middleware throws → `Mllp.#handleError` re-throws (if unhandled) → `serve()` catches → `ServeOptions.onError` callback → `console.error` fallback. The serve-level `onError` callback naturally unifies R3 and R4. Process never crashes from unhandled message errors.
- **`Mllp.handle()` must surface errors:** Currently returns `undefined` silently. Change `handle()` to throw when errors are unhandled (no error handler, or error handler itself throws). This lets `serve()` catch and route to its `onError` callback. The `Mllp` class doesn't know about lifecycle — it just stops swallowing.
- **Adapter interface unchanged:** `ConnectionHandler` still receives `AdapterSocket`. Connection identity and state are created in `serve()`, not the adapter. This keeps adapters thin and runtime-specific.
- **`console.error` fallback safety:** The fallback logs only `error.message` and connection ID — not the full stack trace or context (which may contain PHI). Production deployments should always provide an `onError` callback for proper error routing.

## Open Questions

### Resolved During Planning

- **State type signature:** `Map<string, unknown>` — matches existing pattern in `createContext()`, lazy allocation, familiar API.
- **Error surfacing mechanism:** `Mllp.#handleError` re-throws when it can't handle. `serve()` catches and delegates to `onError` callback. `console.error` as final fallback. No process crash.
- **Connection ID format:** Auto-incrementing integer. Fast, simple, sufficient for single-process correlation.
- **Adapter changes needed?** No — `AdapterSocket` already has all the metadata. `serve()` creates the connection identity wrapper.

### Deferred to Implementation

- Exact naming for the error that `#handleError` throws/re-throws when unhandled — implementer should check if `MllpError` with a new code is appropriate or if the original error should re-throw directly.

## High-Level Technical Design

> _This illustrates the intended approach and is directional guidance for review, not implementation specification. The implementing agent should treat it as context, not code to reproduce._

```
ConnectionInfo (extended)
├── id: number                    ← new, auto-incrementing
├── state: Map<string, unknown>   ← new, mutable, shared across messages
├── remoteAddress: string         ← existing
├── remotePort: number            ← existing
├── localPort: number             ← existing
└── secure: boolean               ← existing

serve(app, options)
├── options.onConnect?(connection)    ← new callback
├── options.onDisconnect?(connection) ← new callback
├── options.onError?(error, connection) ← new callback
│
└── handleConnection(app, socket, options)
    ├── connectionId = nextId++
    ├── connection = { id, state: new Map(), ...socket metadata }
    ├── onConnect?.(connection)
    ├── message loop:
    │   ├── decode → app.handle(raw, bytes, connection)
    │   ├── if handle throws → onError?.(error, connection) ?? console.error
    │   └── encode response
    └── finally: onDisconnect?.(connection)

Mllp.#handleError (changed behavior)
├── If errorHandler exists → try errorHandler(err, ctx)
│   ├── success → return response
│   └── throws → re-throw the NEW error (error handler failure)
└── If no errorHandler → re-throw original error
```

## Implementation Units

- [x] **Unit 1: Extend `ConnectionInfo` type with `id` and `state`**

**Goal:** Add `id` (number) and `state` (Map) to the `ConnectionInfo` interface while maintaining backward compatibility.

**Requirements:** R1, R2, R5

**Dependencies:** None

**Files:**

- Modify: `packages/hl7v2-mllp/src/server/types.ts`
- Test: `packages/hl7v2-mllp/test/server/context.test.ts`

**Approach:**

- Add `readonly id: number` and `readonly state: Map<string, unknown>` to `ConnectionInfo`
- `state` is `readonly` on the interface (the reference doesn't change) but the Map itself is mutable
- Update `createContext()` tests to include `id` and `state` in test `ConnectionInfo` objects
- All existing tests that construct `ConnectionInfo` will need `id` and `state` added

**Patterns to follow:**

- Existing `ConnectionInfo` fields are all `readonly` — follow the same pattern
- `createContext()` test fixtures in `test/server/context.test.ts` construct `ConnectionInfo` inline

**Test scenarios:**

- `ConnectionInfo` with `id` and `state` passes type checks
- Existing fields (`remoteAddress`, `remotePort`, `localPort`, `secure`) still work
- `state` Map is accessible and mutable through the frozen context

**Verification:**

- All existing tests pass with updated `ConnectionInfo` fixtures
- Type checking passes (`pnpm check-types`)

---

- [x] **Unit 2: Fix silent error swallowing in `Mllp.#handleError`**

**Goal:** Make `#handleError` re-throw errors instead of silently returning `undefined`, so callers can observe and handle them.

**Requirements:** R4

**Dependencies:** None (can be done in parallel with Unit 1)

**Files:**

- Modify: `packages/hl7v2-mllp/src/server/mllp.ts`
- Test: `packages/hl7v2-mllp/test/server/mllp.test.ts`

**Approach:**

- When no error handler is registered: re-throw the original error
- When the error handler itself throws: re-throw the error handler's error (not the original)
- `handle()` callers (i.e., `serve()`) are now responsible for catching unhandled errors
- This is a behavior change: `handle()` can now throw. The `serve()` message loop already has a try/catch, so existing deployments won't crash.

**Patterns to follow:**

- Existing error test cases in `test/server/mllp.test.ts` — update expectations from "returns undefined" to "throws"

**Test scenarios:**

- Handler throws, no error handler registered → `handle()` rejects with the original error
- Handler throws, error handler returns response → `handle()` returns the response (unchanged)
- Handler throws, error handler also throws → `handle()` rejects with the error handler's error
- Middleware throws → same error surfacing behavior

**Verification:**

- Existing "error handler returns response" tests still pass
- New tests confirm errors are thrown instead of swallowed
- `serve()` integration tests still pass (its catch block absorbs the throws)

---

- [x] **Unit 3: Add lifecycle callbacks to `ServeOptions` and wire `handleConnection`**

**Goal:** Add `onConnect`, `onDisconnect`, and `onError` callbacks to `ServeOptions`. Wire connection identity creation and lifecycle into `handleConnection`.

**Requirements:** R1, R2, R3, R4, R5

**Dependencies:** Unit 1 (extended `ConnectionInfo`), Unit 2 (error surfacing)

**Files:**

- Modify: `packages/hl7v2-mllp/src/node/serve.ts`
- Test: `packages/hl7v2-mllp/test/node/serve.test.ts`

**Approach:**

- Add optional callback properties to `ServeOptions`: `onConnect`, `onDisconnect`, `onError`
- Callback signatures (support both sync and async — promises are awaited):
  - `onConnect: (connection: ConnectionInfo) => void | Promise<void>`
  - `onDisconnect: (connection: ConnectionInfo) => void | Promise<void>`
  - `onError: (error: Error, connection: ConnectionInfo) => void | Promise<void>`
- In `serve()`, maintain a module-scoped auto-incrementing counter for connection IDs
- In `handleConnection()`:
  - Create `ConnectionInfo` with `id`, `state: new Map()`, and socket metadata
  - Call `onConnect?.(connection)` after creation; if it throws, catch and route to `onError` (or `console.error`), then tear down the connection (still call `onDisconnect`)
  - Inside the message loop, wrap `app.handle()` in its own try/catch to distinguish handler errors from stream/decoder errors. Only handler errors route to `onError`; stream errors (connection reset, decode failure) flow to the outer catch for cleanup
  - In the finally block: call `onDisconnect?.(connection)` before socket cleanup; if `onDisconnect` throws, catch and route to `onError` (or `console.error`)
- Pass lifecycle options through to `handleConnection` (currently it only receives `app` and `socket`)

**Patterns to follow:**

- Existing `handleConnection(app, socket)` pattern — extend the signature
- `Deno.serve({ onListen, onError })` callback pattern for `ServeOptions`
- Test helpers in `serve.test.ts`: `sendMessage()`, `createPersistentClient()`, `waitForReady()`

**Test scenarios:**

- `onConnect` fires when a client connects, receives `ConnectionInfo` with valid `id`
- `onDisconnect` fires when client disconnects (normal close)
- `onDisconnect` fires when client connection is destroyed
- `onError` fires when handler throws and no app-level error handler is registered
- `onError` does NOT fire when app-level error handler successfully handles the error
- `onError` fires when app-level error handler itself throws, receives the error handler's error (not the original)
- Connection IDs are unique across connections (sequential — test relative ordering, not absolute values)
- Connection state persists across messages: middleware sets state on first message, reads it on second
- No callbacks = no errors (optional, zero-cost)
- Multiple connections get distinct IDs and separate state Maps
- `onConnect` throwing tears down the connection, `onDisconnect` still fires
- `onDisconnect` throwing is caught and routed to `onError`
- `console.error` fallback path: mock/suppress in tests to avoid noisy output

**Verification:**

- All existing `serve()` integration tests pass unchanged
- New lifecycle callback tests pass
- Connection state persists across messages on the same socket
- Error callback receives the correct error and connection

---

- [x] **Unit 4: Update exports and ensure backward compatibility**

**Goal:** Ensure the extended `ConnectionInfo` and new `ServeOptions` callbacks are properly exported and documented. Verify no breaking changes for existing consumers.

**Requirements:** R5

**Dependencies:** Units 1-3

**Files:**

- Modify: `packages/hl7v2-mllp/src/index.ts` (if any new types need exporting)
- Modify: `packages/hl7v2-mllp/src/node/index.ts` (if any new types need exporting)
- Test: `packages/hl7v2-mllp/test/node/serve.test.ts` (backward compat verification)

**Approach:**

- `ConnectionInfo` is already exported from `src/index.ts` — the extended interface is automatically available
- `ServeOptions` is already exported from `src/node/index.ts` — the new optional callbacks are automatically available
- No new types need exporting unless callback types are extracted (implementer's judgment)
- Run full test suite to confirm no regressions across the monorepo

**Patterns to follow:**

- Existing export patterns in `src/index.ts` and `src/node/index.ts`

**Test scenarios:**

- Consumers reading `ConnectionInfo` fields (middleware, handlers) are unaffected — monorepo packages that import `ConnectionInfo` but don't construct it still type-check
- `ServeOptions` without lifecycle callbacks still works

**Verification:**

- `pnpm build` succeeds
- `pnpm check-types` passes across the monorepo
- `pnpm test` passes across the monorepo
- No new exports are needed (confirm existing exports cover the changes)

## System-Wide Impact

- **Interaction graph:** `serve()` → `handleConnection()` → `app.handle()`. The error flow changes: `app.handle()` can now throw, where before it always resolved. `serve()` must catch. Lifecycle callbacks fire at the `serve()` level only.
- **Error propagation:** Errors flow: handler/middleware → `Mllp.#handleError` (re-throws if unhandled) → `serve()` catch → `onError` callback → `console.error` fallback. This is strictly more observable than before.
- **State lifecycle risks:** Connection state Map lives for the socket lifetime. No cleanup needed beyond GC when the socket closes. No cross-connection state sharing risk.
- **API surface parity:** `ConnectionInfo` is extended, not replaced. All existing fields remain. New fields are additive. `ServeOptions` gains optional callbacks. Both are backward-compatible.
- **Integration coverage:** The `serve.test.ts` integration tests cover the full TCP → decode → handle → encode → respond flow. New tests must cover lifecycle callbacks within this same integration harness.

## Risks & Dependencies

- **Breaking change risk (low):** Extending `ConnectionInfo` with required fields (`id`, `state`) means any code that constructs `ConnectionInfo` objects (primarily tests) must be updated. This is internal — external consumers receive `ConnectionInfo` from the framework, they don't construct it. If this is a concern, `id` and `state` could be made optional, but this weakens the guarantee.
- **Error behavior change (medium):** `Mllp.handle()` now throws instead of silently returning `undefined`. The `serve()` message loop already has a catch block, so production deployments won't crash. But any code calling `handle()` directly (outside `serve()`) must now handle throws. This is intentional and documented as a fix.
- **PR 2 dependency:** Graceful shutdown (PR 2) will build on the connection tracking infrastructure from this PR. Tracking active connections in a `Set` is deferred to PR 2 — this PR only creates per-connection identity and state. The `handleConnection` structure should be designed so PR 2 can add a connections Set without refactoring.

## Sources & References

- **Origin document:** [docs/brainstorms/2026-03-30-mllp-production-enhancements-requirements.md](../brainstorms/2026-03-30-mllp-production-enhancements-requirements.md)
- Related code: `packages/hl7v2-mllp/src/server/`, `packages/hl7v2-mllp/src/node/`
- Related issues: #501
- Prior plan: `docs/plans/2026-03-25-001-refactor-mllp-parser-lifecycle-stage-plan.md` (established the current `app.parser()` pattern)
