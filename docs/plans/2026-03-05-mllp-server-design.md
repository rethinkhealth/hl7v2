# MLLP Transport Server — Implementation Plan

Date: 2026-03-05
ADR: [0011-mllp-transport-server](../adr/0011-mllp-transport-server.md)

## Overview

Build a Hono-architecture MLLP server on top of the existing `@rethinkhealth/hl7v2-mllp` primitives. The class is named `Mllp` (short, like `Hono`), instances are idiomatically called `app`.

**Existing code to build on:** `constants.ts`, `encoder.ts`, `decoder.ts`, `encoder-stream.ts`, `decoder-stream.ts`, `processor-stream.ts`, `pipeline.ts`, `ack.ts`, `errors.ts`, `types.ts`.

**New code to write:** ~7 files across 6 steps.

---

## Step 1: Types and Response Model

**Files:** `src/server/types.ts`

Define the core type contracts that all other modules depend on.

```typescript
// Types to define:
// - MllpMiddleware = (ctx: MllpContext, next: () => Promise<void>) => Promise<void | MllpResponse>
// - MllpHandler = (ctx: MllpContext) => Promise<MllpResponse> | MllpResponse
// - MllpErrorHandler = (err: Error, ctx: MllpContext) => Promise<MllpResponse> | MllpResponse
// - MllpResponse (wraps the ACK/NAK string for the server to encode and send)
// - ConnectionInfo { remoteAddress, remotePort, localPort, secure }
// - RoutePattern (parsed representation of "ADT^A01", "ADT^*", "*")
// - MllpServerOptions { adapter: TcpAdapter }
```

**Key decisions:**

- `MllpResponse` is a simple object `{ raw: string }` wrapping the ACK/NAK HL7 string. The server encodes it with MLLP framing before sending.
- Route patterns are pre-parsed at registration time for fast matching.

**Tests:** `test/server/types.test.ts` — test pattern parsing and matching logic (`matchPattern(pattern, messageType, triggerEvent): boolean`).

---

## Step 2: Context Object

**Files:** `src/server/context.ts`

Implement `MllpContext` following Hono's Context class.

```typescript
// MllpContext class:
// - Constructor receives: raw message string, bytes, connection info, parsed MSH
// - req: { raw: string, bytes: Uint8Array }
// - connection: ConnectionInfo
// - messageType, triggerEvent, messageStructure, version, controlId (from parseMsh)
// - tree: Root | undefined (set by unified processor middleware)
// - file: VFile | undefined (set by unified processor middleware)
// - set(key, value) / get(key) / var (Hono variable API)
// - ack(options?) → MllpResponse (delegates to generateAck from ack.ts)
// - nak(code, reason) → MllpResponse (delegates to generateNak from ack.ts)
// - Internal: _response for capturing the handler's return value
```

**Key decisions:**

- Reuses `parseMsh()` from existing `ack.ts` for lightweight MSH extraction.
- `ack()` and `nak()` are thin wrappers around existing `generateAck()`/`generateNak()`.
- Variables stored in a `Map<string, unknown>`, exposed as frozen object via `var` getter (like Hono).

**Tests:** `test/server/context.test.ts` — context creation, variable set/get, ack/nak generation, MSH field extraction.

---

## Step 3: Middleware Composition (`compose`)

**Files:** `src/server/compose.ts`

Port Hono's `compose()` function adapted for MLLP.

```typescript
// compose(middlewares: MllpMiddleware[], handler: MllpHandler): (ctx: MllpContext) => Promise<void>
//
// - Chains middleware in onion model
// - Each middleware calls next() to proceed
// - If middleware returns MllpResponse, short-circuits (no further middleware runs)
// - Handler is the terminal function (the matched route handler)
// - Error propagation: if any middleware throws, error bubbles up to onError
```

This is the core execution engine. It must handle:

- Normal flow: middleware → next() → handler → response
- Short-circuit: middleware returns response without calling next()
- Error: middleware throws → caught by error handler
- Missing handler: no route matched → default NAK response

**Tests:** `test/server/compose.test.ts` — middleware ordering, next() behavior, short-circuiting, error propagation, async middleware.

---

## Step 4: Router

**Files:** `src/server/router.ts`

Simple pattern-matching router for HL7 message types.

```typescript
// Router class:
// - add(pattern: string, handler: MllpHandler): void
// - addMiddleware(pattern: string | undefined, middleware: MllpMiddleware): void
// - match(messageType: string, triggerEvent: string): { handler, middlewares }
//
// Pattern matching rules:
// - "*" matches everything
// - "ADT^A01" exact match
// - "ADT^*" matches any trigger event for ADT
// - "*^A01" matches any message type with A01 trigger
// - First match wins (registration order)
```

**Key decisions:**

- Patterns stored in registration order (array, not map) for first-match-wins.
- Pattern parsing extracts `{ messageType: string, triggerEvent: string }` with `*` as wildcard.
- Scoped middleware is middleware with a pattern — only runs when pattern matches.

**Tests:** `test/server/router.test.ts` — exact match, wildcards, first-match-wins, scoped middleware filtering, no-match behavior.

---

## Step 5: Mllp Server Class

**Files:** `src/server/mllp.ts`

The main class that ties everything together.

```typescript
// class Mllp:
//   constructor(options: MllpServerOptions)
//
//   use(middleware: MllpMiddleware): this
//   use(pattern: string, middleware: MllpMiddleware): this
//   use(processor: Processor): this              // unified processor (duck-typed)
//
//   on(pattern: string, handler: MllpHandler): this
//
//   onError(handler: MllpErrorHandler): this
//
//   listen(): TcpHandle
//   close(): Promise<void>
//
// Internal flow per message:
//   1. MLLP decode (via createDecoderStream from existing code)
//   2. Create MllpContext (with parseMsh for routing fields)
//   3. Collect matching middleware (global + scoped by pattern)
//   4. Resolve handler from router
//   5. compose(middlewares, handler)(ctx)
//   6. Encode response with MLLP framing (via encode() from existing code)
//   7. Write to socket
//
// Unified processor detection:
//   Duck-type check: if arg has .process() and .use() methods → wrap as middleware
//   Wrapper middleware: runs processor.process(ctx.req.raw), sets ctx.tree, ctx.file,
//   enriches ctx.messageType/triggerEvent/version from file.data
```

**Key decisions:**

- `.use()` overloads distinguished by duck-typing (processor has `.process()` + `.use()`) and argument count (2 args = scoped).
- Connection handling: each TCP connection gets a `createDecoderStream()` that continuously emits messages. Each message is processed independently through the middleware chain.
- Graceful shutdown: `close()` stops accepting connections, waits for in-flight messages to complete.

**Tests:** `test/server/mllp.test.ts` — registration API, middleware chain execution, routing, error handling, unified processor integration. Use mock adapter (no real TCP).

---

## Step 6: Adapter Interface and Node.js Adapter

**Files:** `src/server/adapter.ts`, `src/server/node-adapter.ts`

```typescript
// adapter.ts — interface definitions:
//   TcpAdapter, ListenOptions, TcpHandle, ConnectionHandler, AdapterSocket

// node-adapter.ts — Node.js implementation:
//   nodeAdapter(options?: NodeAdapterOptions): TcpAdapter
//   - Uses net.createServer() / tls.createServer()
//   - Wraps Node.js Socket into AdapterSocket with Web Streams
//   - Handles socket errors, timeouts, cleanup
//
// NodeAdapterOptions:
//   - tls?: { cert, key, ca, ... }
//   - socketTimeout?: number (default: 30s)
//   - keepAlive?: boolean
```

**Key decisions:**

- Node.js `net.Socket` readable side wrapped via `Readable.toWeb()` (Node 17+).
- Writable side: create a `WritableStream` that calls `socket.write()`.
- Socket errors close both streams.
- TLS: use `tls.createServer()` when TLS options provided, `net.createServer()` otherwise.

**Tests:** `test/server/node-adapter.test.ts` — adapter creates server, accepts connections, wraps sockets correctly. Integration test with real TCP using localhost.

---

## Step 7: MllpClient

**Files:** `src/client/client.ts`

```typescript
// class MllpClient:
//   constructor(options: MllpClientOptions)
//     - options: { host, port, adapter, timeout?, tls? }
//
//   send(message: string): Promise<MllpClientResponse>
//     - Encode message with MLLP framing
//     - Write to socket
//     - Read response through decoder stream
//     - Parse ACK from response
//     - Return { code, raw, accepted, text }
//
//   close(): Promise<void>
//
// MllpClientResponse:
//   code: AckCode
//   raw: string (full ACK message)
//   accepted: boolean (code is AA or CA)
//   text: string (MSA-3 text message)
```

**Key decisions:**

- Lazy connection: connects on first `send()`, reuses connection for subsequent sends.
- Timeout: rejects promise if no ACK received within timeout period.
- Uses existing `encode()` for outbound and `decode()` for inbound ACK.

**Tests:** `test/client/client.test.ts` — send and receive ACK, timeout handling, connection reuse, NAK response parsing. Integration test with MllpServer.

---

## Step 8: Public API and Integration Tests

**Files:** Update `src/index.ts`, add `test/server/integration.test.ts`

Update the barrel export to include new server components:

```typescript
// New exports:
export { Mllp } from './server/mllp.js'
export { MllpClient } from './client/client.js'
export { nodeAdapter } from './server/node-adapter.js'
export type { MllpContext, MllpMiddleware, MllpHandler, ... } from './server/types.js'
export type { TcpAdapter, AdapterSocket, ... } from './server/adapter.js'
```

**Integration tests:**

- Full round-trip: MllpServer + MllpClient on localhost
- Server with unified processor: message parsed, routed, ACK returned
- Middleware chain: logging middleware + scoped middleware + handler
- Error handling: handler throws → error handler → NAK sent
- Multiple messages over persistent connection
- TLS connection (if feasible in test environment)
- Graceful shutdown: close() waits for in-flight messages

---

## File Structure After Implementation

```
packages/hl7v2-mllp/src/
├── ack.ts                    # existing
├── constants.ts              # existing
├── decoder.ts                # existing
├── decoder-stream.ts         # existing
├── encoder.ts                # existing
├── encoder-stream.ts         # existing
├── errors.ts                 # existing
├── index.ts                  # updated (new exports)
├── pipeline.ts               # existing
├── processor-stream.ts       # existing
├── types.ts                  # existing
├── server/
│   ├── types.ts              # new — middleware/handler/response types
│   ├── context.ts            # new — MllpContext class
│   ├── compose.ts            # new — middleware composition
│   ├── router.ts             # new — pattern-matching router
│   ├── mllp.ts               # new — Mllp server class
│   ├── adapter.ts            # new — TcpAdapter interface
│   └── node-adapter.ts       # new — Node.js adapter
└── client/
    └── client.ts             # new — MllpClient class

packages/hl7v2-mllp/test/
├── ack.test.ts               # existing
├── decoder.test.ts           # existing
├── decoder-stream.test.ts    # existing
├── encoder.test.ts           # existing
├── encoder-stream.test.ts    # existing
├── integration.test.ts       # existing
├── processor-stream.test.ts  # existing
├── server/
│   ├── types.test.ts         # new
│   ├── context.test.ts       # new
│   ├── compose.test.ts       # new
│   ├── router.test.ts        # new
│   ├── mllp.test.ts          # new
│   ├── node-adapter.test.ts  # new
│   └── integration.test.ts   # new
└── client/
    └── client.test.ts        # new
```

## Dependencies

No new external dependencies. The implementation uses:

- `node:net` / `node:tls` (Node.js built-in, for the adapter)
- Web Streams API (built-in, already used by existing code)
- `unified` / `vfile` (already peer dependencies)
- Existing MLLP primitives (internal)

## Step Order and Dependencies

```
Step 1: Types ──────────┐
                        ├→ Step 3: Compose ──┐
Step 2: Context ────────┤                    ├→ Step 5: Mllp Server ──┐
                        ├→ Step 4: Router ───┘                        │
                        │                                              ├→ Step 8: Integration
Step 6: Adapter ────────┘                                              │
                                                                       │
Step 7: Client ────────────────────────────────────────────────────────┘
```

Steps 1-2 can be parallel. Steps 3-4 can be parallel (depend on 1-2). Step 5 depends on 1-4. Step 6 depends on 1. Step 7 depends on 6. Step 8 depends on all.

## Estimated Scope

| Step           | New files        | ~Lines of code | ~Lines of test |
| -------------- | ---------------- | -------------- | -------------- |
| 1. Types       | 1                | 60             | 40             |
| 2. Context     | 1                | 100            | 80             |
| 3. Compose     | 1                | 50             | 100            |
| 4. Router      | 1                | 60             | 80             |
| 5. Mllp Server | 1                | 180            | 150            |
| 6. Adapter     | 2                | 120            | 60             |
| 7. Client      | 1                | 100            | 80             |
| 8. Integration | 1 (index update) | 20             | 150            |
| **Total**      | **9 new files**  | **~690 lines** | **~740 lines** |
