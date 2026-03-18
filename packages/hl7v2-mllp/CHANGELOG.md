# @rethinkhealth/hl7v2-mllp

## 0.6.0

### Patch Changes

- 0f0af81: ### New Package: `@rethinkhealth/hl7v2-mllp`

  Transport-agnostic MLLP (Minimal Lower Layer Protocol) engine for HL7v2 messaging — primitives, streaming, and a Hono-style middleware server.

  **Transport Layer:**
  - **Frame encoding/decoding** — `encode()`, `decode()`, `encodeMultiple()` for one-shot MLLP framing operations.
  - **Streaming decoder** — `createDecoderStream()` and `MLLPDecoderStream` class implement a resilient two-state finite state machine that handles arbitrary TCP chunk boundaries, reports framing errors via callback, and never throws.
  - **DynamicBuffer** — Geometric-growth byte buffer (O(n) amortized) for efficient stream accumulation without O(n²) concat overhead.
  - **Size enforcement** — `maxMessageSize` option bounds memory usage both mid-accumulation and on frame completion.

  **Server Layer (Hono-style API):**
  - **`Mllp` class** — Pure routing and middleware engine with `.use()`, `.on()`, `.onError()`, and `.handle()`. No TCP concerns.
  - **Middleware composition** — Hono/Koa onion model with `(ctx, next)` signature. Supports short-circuiting, scoped middleware (by pattern or filter function), and last-write-wins response semantics.
  - **Pattern-based routing** — `"ADT^A01"` (exact), `"ADT^*"` (wildcard trigger), `"*^A01"` (wildcard type), `"*"` (catch-all). First-match-wins ordering.
  - **Filter function routing** — `app.on((ctx) => ctx.version === "2.5.1", handler)` for matching on any context property.
  - **Context** — Immutable `req` and `connection`, parsed AST (`ctx.tree`), MSH field extraction (messageType, triggerEvent, controlId, version), per-message variables via `ctx.set()`/`ctx.get()`.
  - **Custom parser support** — Constructor option `new Mllp({ parser })` accepts sync or async parsers (e.g., unified processor).

  **Node.js Adapter (`@rethinkhealth/hl7v2-mllp/node`):**
  - **`serve(app, options)`** — Binds an `Mllp` app to a TCP or TLS port. Handles the decode-handle-encode loop per connection with proper resource cleanup.
  - **TLS support** — Pass `tls: { cert, key }` to `serve()` options.
  - **Socket configuration** — TCP keep-alive, idle timeouts, Nagle disabled (`setNoDelay`), backpressure-aware writes.
  - **Platform-agnostic adapter interface** — `TcpAdapter` / `AdapterSocket` abstractions use Web Streams, enabling future Bun/Deno adapters.

  **Design Decisions:**
  - Errors are silently absorbed by default (no response sent); the sending system times out and retries per standard MLLP behavior. ACK/NAK generation belongs in middleware, not the core.
  - Zero built-in logging — logging is an opt-in middleware concern, same philosophy as Hono.
  - Middleware-first architecture — logging, acknowledgment, error translation are all composable middleware.

- 1f73b98: Remove tree.data.messageInfo from all packages. Delete hl7v2-annotate-message and hl7v2-util-message-info packages. Rename hl7v2-annotate-message-structure to hl7v2-message-structure. All packages now read MSH fields directly via value() from hl7v2-util-query.
- Updated dependencies [7763c22]
- Updated dependencies [0b57ba9]
  - @rethinkhealth/hl7v2-util-query@0.6.0
  - @rethinkhealth/hl7v2-parser@0.6.0
  - @rethinkhealth/hl7v2-ast@0.6.0
