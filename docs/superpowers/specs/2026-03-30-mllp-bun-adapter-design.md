# MLLP Bun Adapter Design

**Date:** 2026-03-30
**Status:** Draft
**Scope:** Add Bun runtime support to `@rethinkhealth/hl7v2-mllp` via a new subpath export

## Goal

Make the MLLP package runtime-agnostic by adding Bun as a second supported runtime alongside Node.js. The Bun adapter uses Bun-native APIs (`Bun.listen()`) rather than Bun's Node.js compatibility layer. This establishes the pattern for future runtimes (Deno, etc.).

## Consumer API

```typescript
import { Mllp } from "@rethinkhealth/hl7v2-mllp";
import { serve } from "@rethinkhealth/hl7v2-mllp/bun";

const app = new Mllp()
  .parser(processor)
  .on("ADT^A01", (ctx) => ({ raw: "MSH|..." }));

const server = serve(app, { port: 2575 });
```

The API surface mirrors `@rethinkhealth/hl7v2-mllp/node` exactly. Same `serve()` signature, same `ServeOptions`, same `Server` return type.

## Architecture

### What exists today

```
src/
  transport/          # MLLP framing — runtime-agnostic (Web Streams)
  server/             # Mllp, Router, Context, compose — runtime-agnostic
    adapter.ts        # TcpAdapter / AdapterSocket interfaces
  node/               # Node.js-specific: nodeAdapter + serve + handleConnection
  errors.ts
  index.ts            # Main barrel (transport + server)
```

The `TcpAdapter` and `AdapterSocket` interfaces in `server/adapter.ts` already abstract the runtime. The Node adapter implements these by wrapping `net.Socket` into Web Streams. The connection lifecycle logic (`handleConnection`) currently lives in `node/serve.ts`.

### What changes

```
src/
  transport/          # Unchanged
  server/
    adapter.ts        # Unchanged
    handle-connection.ts  # NEW — extracted from node/serve.ts
    ...               # Unchanged
  node/
    adapter.ts        # Unchanged
    serve.ts          # Slimmed — delegates to shared handleConnection
    index.ts          # Unchanged
  bun/                # NEW
    adapter.ts        # bunAdapter() implementing TcpAdapter via Bun.listen()
    serve.ts          # serve() entry point — mirrors node/serve.ts
    index.ts          # Barrel export
  errors.ts           # Unchanged
  index.ts            # Unchanged
```

### Shared `handleConnection`

The `handleConnection` function (currently ~90 lines in `node/serve.ts`) is runtime-agnostic — it operates entirely on `AdapterSocket` and Web Streams. It gets extracted to `src/server/handle-connection.ts` so both adapters can reuse it.

Extracted items:

- `handleConnection(app, socket, lifecycle)` function
- `reportError(error, connection, lifecycle, messageInfo?)` helper
- `LifecycleOptions` interface
- `ConnectionCallback` type
- `ErrorCallback` type
- `Server` interface
- `ServeOptions` base interface (the runtime-agnostic fields)
- Connection ID counter (`nextConnectionId`)

What stays in `node/serve.ts`:

- `serve()` function (creates `nodeAdapter`, calls `handleConnection`)
- `NodeServeOptions` extending base `ServeOptions` with Node-specific fields (`keepAlive`, `keepAliveInitialDelay`)

What goes in `bun/serve.ts`:

- `serve()` function (creates `bunAdapter`, calls `handleConnection`)
- `BunServeOptions` extending base `ServeOptions` with Bun-specific fields (if any)

### Bun Adapter (`src/bun/adapter.ts`)

Implements `TcpAdapter` using `Bun.listen()`.

**Socket-to-Web-Streams bridge:**

Bun's TCP API is callback-based: `Bun.listen({ socket: { open, data, close, error, drain } })`. The adapter wraps each accepted socket into an `AdapterSocket` with Web Streams:

**Readable side:**

```typescript
let controller: ReadableStreamDefaultController<Uint8Array>;
const readable = new ReadableStream<Uint8Array>({
  start(c) {
    controller = c;
  },
  cancel() {
    socket.end();
  },
});
// In Bun socket handlers:
// data(socket, data)  → controller.enqueue(new Uint8Array(data))
// close()             → controller.close()
// error(socket, err)  → controller.error(err)
```

**Writable side:**

```typescript
const writable = new WritableStream<Uint8Array>({
  write(chunk) {
    const written = socket.write(chunk);
    if (written < chunk.byteLength) {
      // Bun returns bytes written; if partial, need to wait for drain
      // Buffer remainder and flush in drain callback
    }
  },
  close() {
    socket.end();
  },
  abort() {
    socket.end();
  },
});
```

Backpressure on the writable side requires coordination with Bun's `drain` callback. The adapter uses a promise-based mechanism: when `socket.write()` returns fewer bytes than requested, `write()` returns a Promise that resolves when `drain` fires.

**TLS support:**

`Bun.listen()` accepts TLS options directly:

```typescript
Bun.listen({
  hostname,
  port,
  tls: { cert, key, ca, passphrase },
  socket: { ... }
});
```

This maps 1:1 to our `TlsOptions` interface.

**Socket configuration:**

| Feature          | Node.js                            | Bun                                        |
| ---------------- | ---------------------------------- | ------------------------------------------ |
| Idle timeout     | `socket.setTimeout(ms)`            | `socket.timeout(seconds)`                  |
| TCP keep-alive   | `socket.setKeepAlive(true, delay)` | On by default; not configurable per-socket |
| Nagle (no-delay) | `socket.setNoDelay(true)`          | Disabled by default                        |

The Bun adapter options will only expose `socketTimeout` since keep-alive and no-delay are Bun defaults that match our desired behavior.

**Server handle:**

`Bun.listen()` returns a `TCPSocketListener` with `.port` and `.stop()`. Maps directly to our `TcpHandle`:

```typescript
return {
  get port() {
    return listener.port;
  },
  async close() {
    listener.stop(true);
  }, // true = close existing connections
};
```

## Package Configuration Changes

### `tsup.config.ts`

Add `bun` entry point:

```typescript
entry: {
  index: "src/index.ts",
  node: "src/node/index.ts",
  bun: "src/bun/index.ts",
}
```

### `package.json` exports

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js"
    },
    "./node": {
      "types": "./dist/node.d.ts",
      "import": "./dist/node.js"
    },
    "./bun": {
      "types": "./dist/bun.d.ts",
      "import": "./dist/bun.js"
    }
  }
}
```

### Types

Bun types (`bun-types`) are needed for `Bun.listen()`, `TCPSocketListener`, etc. These go in `devDependencies` — they're only needed at build time, not by consumers (who are running Bun and already have the types).

## Testing Strategy

### Bun adapter tests (`test/bun/`)

Mirror the existing Node tests in `test/node/`:

- **`adapter.test.ts`** — `bunAdapter()` creates listeners, wraps sockets to `AdapterSocket`, Web Streams read/write correctly, TLS mode works
- **`serve.test.ts`** — Full integration: connection lifecycle callbacks, error handling, persistent clients, multi-message conversations, graceful shutdown

These tests must run under the Bun runtime. Options:

1. **Separate test script**: `"test:bun": "bun test test/bun/"` in package.json
2. **Conditional skip**: Tests detect runtime and skip when not on Bun

Recommendation: option 1 — explicit script. CI can run both `pnpm test` (Vitest/Node) and `bun test test/bun/` in separate jobs. Locally, Bun tests only run if you have Bun installed.

### Shared handleConnection tests

The extraction of `handleConnection` should not break any existing tests. The existing `test/node/serve.test.ts` tests validate the full pipeline including `handleConnection` behavior — they continue to pass unchanged since `node/serve.ts` still calls the same function, just from a different import path.

### Transport + server tests

Already runtime-agnostic. No changes needed. These could optionally be run under `bun test` as well to validate Bun compatibility of the core stack.

## Scope Boundaries

**In scope:**

- `src/bun/adapter.ts` — Bun-native `TcpAdapter` implementation
- `src/bun/serve.ts` — `serve()` entry point for Bun
- `src/bun/index.ts` — barrel export
- `src/server/handle-connection.ts` — extracted shared logic
- Slim down `src/node/serve.ts` to use shared `handleConnection`
- `package.json` exports + `tsup.config.ts` entry
- Bun adapter tests
- `bun-types` dev dependency

**Out of scope:**

- Deno adapter (future work; validates the pattern)
- Bun-specific performance optimizations beyond using native APIs
- Changes to transport or server layers
- Changes to the main `@rethinkhealth/hl7v2-mllp` export
- Benchmarks (can be added later)
