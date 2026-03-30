---
date: 2026-03-30
topic: mllp-production-enhancements
---

# MLLP Production Enhancements

## Problem Frame

The MLLP server has a clean Hono-like middleware architecture but lacks production essentials: `server.close()` doesn't track or wait for in-flight messages (risking message loss during rolling deploys), connections have no identity or lifecycle (each `handle()` creates an independent context with no connection continuity), and errors from `#handleError` are silently swallowed. In regulated healthcare environments, these gaps block production deployment.

## Design Principles

- **Stay Hono-like.** The `Mllp` class remains a pure application handler with no TCP, lifecycle, or event concerns. All server-level behavior lives in `serve()`.
- **Leverage runtime primitives.** Node.js `net.Server` already provides connection events, idle timeouts, and `server.close()`. Minimize custom code by wiring these together rather than reimplementing.
- **Zero-cost when unused.** No lifecycle callbacks registered = no overhead beyond minimal connection bookkeeping for shutdown.
- **Defer observability.** Focus on connection lifecycle and graceful shutdown. Observability middleware (timing, counters, correlation IDs) is a separate future effort once the foundation is solid.

## PR Strategy

Split into 2 PRs with natural dependency order:

- **PR 1: Connection Lifecycle** — Connection identity, scoped state, lifecycle callbacks, error surfacing
- **PR 2: Graceful Shutdown** — In-flight message tracking, drain-with-timeout close

## Requirements

### PR 1: Connection Lifecycle

- R1. Each connection gets a unique ID (e.g., auto-incrementing or crypto.randomUUID), available on `ConnectionInfo` and passed through to every `Context` on that connection.
- R2. Connection-scoped mutable state (a key-value bag) is created once per socket in `serve()` and shared across all messages on that connection. Middleware can read/write per-connection data via the context.
- R3. `ServeOptions` accepts optional lifecycle callbacks: `onConnect(connection)`, `onDisconnect(connection)`, `onError(error, connection)`. These fire at the `serve()` layer, not in `Mllp`.
- R4. The silent error swallowing in `Mllp.#handleError` is fixed — when no error handler is registered or the error handler itself throws, the error is surfaced (e.g., re-thrown, emitted, or passed to a configurable callback) rather than silently returning `undefined`.
- R5. `ConnectionInfo` is extended (not replaced) to include `id` and `state`. Existing code using `ConnectionInfo` continues to work.

### PR 2: Graceful Shutdown

- R6. `serve()` tracks active connections and in-flight message count per connection.
- R7. `server.close()` accepts an optional timeout (milliseconds). Behavior: stop accepting new connections, wait for in-flight messages to complete, force-close remaining connections after timeout.
- R8. If no timeout is provided, `server.close()` waits indefinitely for in-flight messages (current Node.js `server.close()` behavior, but now message-aware).
- R9. Force-close destroys the underlying socket. Messages mid-processing are abandoned (no guarantee of response).
- R10. `server.close()` resolves its promise only after all connections are fully closed.

## Success Criteria

- Rolling deploy scenario: calling `server.close(5000)` stops new connections, lets in-flight messages finish within 5s, then force-closes. No messages silently lost.
- Connection-scoped state: middleware can store authentication/session data on first message and access it on subsequent messages from the same socket.
- Lifecycle callbacks fire reliably: `onConnect` on socket accept, `onDisconnect` on socket close (including force-close), `onError` on unhandled errors.
- Zero performance regression when no lifecycle callbacks are registered and connection state is unused.

## Scope Boundaries

- **Not in scope:** Observability middleware (timing, counters, correlation IDs) — deferred to a future effort.
- **Not in scope:** Health check endpoint or readiness probes.
- **Not in scope:** Deno/Bun adapter implementations (architecture should support them but we only implement Node.js).
- **Not in scope:** Automatic reconnection or retry logic (client-side concern).
- **Not in scope:** Protocol-level drain signaling (MLLP has no equivalent of gRPC GOAWAY).

## Key Decisions

- **Mllp stays pure:** No lifecycle hooks or events on the `Mllp` class. Connection lifecycle lives in `serve()` / `ServeOptions`. This matches Hono's philosophy where the app is runtime-agnostic.
- **Lifecycle callbacks, not EventEmitter:** Use plain function callbacks in `ServeOptions` rather than an EventEmitter pattern. Simpler, tree-shakeable, type-safe.
- **Connection state as a mutable bag:** Simple `Map` or record on the connection object. No typed state management — users cast as needed. Keeps the API surface minimal.
- **Split into 2 PRs:** Connection lifecycle first (foundational), graceful shutdown second (builds on connection tracking).

## Dependencies / Assumptions

- PR 2 depends on PR 1's connection tracking infrastructure.
- `TcpAdapter` interface may need minor extension to support connection lifecycle events (deferred to planning to assess).

## Outstanding Questions

### Deferred to Planning

- [Affects R2][Technical] What is the exact type signature for connection-scoped state? `Map<string, unknown>` vs `Record<string, unknown>` vs typed generic.
- [Affects R4][Technical] How should unhandled errors be surfaced? Options: re-throw (crashes process), emit on serve-level callback, console.error as last resort. Needs to work well with R3's `onError`.
- [Affects R6][Technical] Should in-flight tracking live in `serve()` or be pushed into the `TcpAdapter` interface? Depends on how much the adapter needs to know.
- [Affects R1][Needs research] Should connection IDs be auto-incrementing integers (simple, fast) or UUIDs (globally unique, no coordination)? Check what gRPC and HAPI use.

## Next Steps

-> `/ce:plan` for structured implementation planning (start with PR 1: Connection Lifecycle)
