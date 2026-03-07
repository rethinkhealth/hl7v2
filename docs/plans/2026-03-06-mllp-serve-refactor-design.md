# MLLP Server Refactor: serve() Pattern

Date: 2026-03-06

## Problem

The current `Mllp` class conflates two concerns: application logic (routing, middleware) and server lifecycle (TCP, connections, MLLP framing). Users must explicitly wire an adapter, which is unnecessary friction:

```typescript
// Current — verbose
const app = new Mllp({
  adapter: nodeAdapter(),
  listen: { port: 2575 },
});
app.listen();
```

## Design

Follow Hono's architecture: the app class is a pure message handler, a separate `serve()` function manages the runtime.

### API

```typescript
import { Mllp } from "@rethinkhealth/hl7v2-mllp";
import { serve } from "@rethinkhealth/hl7v2-mllp/node";

const app = new Mllp();
app.on("ADT^A01", async (ctx) => ({ raw: "..." }));

const server = serve(app, { port: 2575 });
await server.close();
```

### Mllp Class (Pure Logic)

The `Mllp` class owns routing, middleware, and message processing. No TCP, no I/O.

**Methods:**

- `.use(middleware)` / `.use(pattern, middleware)` / `.use(processor)` — register middleware
- `.on(pattern, handler)` — register route handler
- `.onError(handler)` — register error handler
- `.handle(raw, bytes, connection)` — process a message, return response (like Hono's `fetch()`)

**`.handle()` is the integration point** — the sole interface between app and server, like Hono's `fetch()`.

### serve() Function (Runtime)

Lives in `@rethinkhealth/hl7v2-mllp/node`. Manages TCP, MLLP framing, connection lifecycle.

```typescript
function serve(app: Mllp, options: ServeOptions): Server;

interface ServeOptions {
  port: number;
  hostname?: string;
  tls?: TlsOptions;
  socketTimeout?: number;
  keepAlive?: boolean;
  keepAliveInitialDelay?: number;
}

interface Server {
  port: number;
  close(): Promise<void>;
}
```

For each connection, `serve()`:

1. Pipes the TCP socket through `createDecoderStream()`
2. Reads decoded messages
3. Calls `app.handle(raw, bytes, connection)` for each message
4. Encodes the response with MLLP framing and writes it back

### Client

Lives in `@rethinkhealth/hl7v2-mllp/client`. Simple class that sends messages and parses responses.

```typescript
import { Client } from "@rethinkhealth/hl7v2-mllp/client";

const client = new Client({ host: "lis.hospital.org", port: 2575 });
const response = await client.send(hl7Message);
client.close();
```

### Type Renames

| Old                | New            |
| ------------------ | -------------- |
| `MllpContext`      | `Context`      |
| `MllpResponse`     | `Response`     |
| `MllpMiddleware`   | `Middleware`   |
| `MllpHandler`      | `Handler`      |
| `MllpErrorHandler` | `ErrorHandler` |
| `MllpClient`       | `Client`       |
| `MllpOptions`      | Removed        |

### Package Exports

- `@rethinkhealth/hl7v2-mllp` — `Mllp`, types, primitives (no Node.js dependency)
- `@rethinkhealth/hl7v2-mllp/node` — `serve()`, `Server`, `ServeOptions`
- `@rethinkhealth/hl7v2-mllp/client` — `Client`

### Testing

Tests call `app.handle()` directly — no mock adapters needed:

```typescript
const app = new Mllp();
app.on("ADT^A01", async () => ({ raw: "..." }));

const response = await app.handle(rawMessage, bytes, mockConnection);
expect(response?.raw).toContain("MSA|AA");
```

### What Gets Removed

- `MllpOptions` interface
- `adapter` constructor parameter
- `.listen()` and `.close()` from `Mllp`
- `#handleConnection()` from `Mllp`
- `nodeAdapter()` from main barrel exports (becomes internal to `serve()`)
- Mock adapter pattern from tests
- `TcpServerAdapter` / `TcpClientAdapter` from public API (internal to serve/client)

### What Stays

- Adapter interfaces (internal implementation detail of `serve()` and `Client`)
- `node-adapter.ts` (used internally by `serve()`)
- All MLLP primitives (encode, decode, streams, pipeline, ACK)
