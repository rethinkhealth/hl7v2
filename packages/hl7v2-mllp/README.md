# @rethinkhealth/hl7v2-mllp

MLLP (Minimal Lower Layer Protocol) transport for HL7v2 messaging — primitives, streaming, and a [Hono](https://hono.dev)-style middleware server.

## Overview

This package provides everything needed to send and receive HL7v2 messages over MLLP/TCP:

1. **Primitives** — Frame encoding/decoding, streaming TransformStreams
2. **Server** — Hono-style `Mllp` class with middleware, pattern-based routing, and unified processor integration

**Key characteristics:**

- **Hono-style API** — `.use()` middleware, `.on()` pattern routing, fluent chaining
- **Unified integration** — pass a unified processor directly to `.use()`
- **Web Streams** — built on `ReadableStream`/`WritableStream` throughout
- **Dual API** — simple functions for one-shot operations + streaming for TCP

## Installation

```bash
pnpm add @rethinkhealth/hl7v2-mllp
```

### Package Exports

| Subpath                          | Description                        |
| -------------------------------- | ---------------------------------- |
| `@rethinkhealth/hl7v2-mllp`      | Core `Mllp` class and primitives   |
| `@rethinkhealth/hl7v2-mllp/node` | `serve()` function for Node.js/Bun |

## Server

### Quick Start

```typescript
import { Mllp } from "@rethinkhealth/hl7v2-mllp";
import { serve } from "@rethinkhealth/hl7v2-mllp/node";

const app = new Mllp();

// Route by message type
app.on("ADT^A01", async (ctx) => {
  // Handle patient admission
  return { raw: buildAckFor(ctx) };
});

app.on("ORU^R01", async (ctx) => {
  // Handle lab results
  return { raw: buildAckFor(ctx) };
});

app.on("*", async (ctx) => {
  return { raw: buildNakFor(ctx, "Unsupported message type") };
});

const server = serve(app, { port: 2575 });
```

### Unified Processor Integration

Pass a unified processor directly to `.use()` — the server automatically runs it as middleware, populating `ctx.tree` and `ctx.file`:

```typescript
import { Mllp } from "@rethinkhealth/hl7v2-mllp";
import { serve } from "@rethinkhealth/hl7v2-mllp/node";
import hl7v2 from "@rethinkhealth/hl7v2";

const app = new Mllp();

// Unified processor as middleware — parses, annotates, lints, etc.
app.use(hl7v2);

app.on("ADT^A01", async (ctx) => {
  // ctx.tree is the parsed AST
  // ctx.file has diagnostics and metadata
  console.log(ctx.tree);
  console.log(ctx.file?.messages); // lint warnings
  return { raw: "..." };
});

const server = serve(app, { port: 2575 });
```

### Routing Patterns

```typescript
app.on("ADT^A01", handler); // Exact match
app.on("ADT^*", handler); // Any ADT trigger event
app.on("*^A01", handler); // Any message type with A01
app.on("ADT", handler); // Any ADT (same as ADT^*)
app.on("*", handler); // Catch-all
```

Routes are matched **first-match-wins** — register specific routes before catch-alls.

### Middleware

Middleware follows the Hono/Koa onion model:

```typescript
// Global middleware — runs for all messages
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  console.log(`Processed in ${Date.now() - start}ms`);
});

// Scoped middleware — only for matching messages
app.use("ADT^*", async (ctx, next) => {
  ctx.set("isAdmission", true);
  await next();
});
```

Middleware can short-circuit by returning a response without calling `next()`:

```typescript
app.use(async (ctx) => {
  if (!isAuthorized(ctx.connection.remoteAddress)) {
    return { raw: buildNakFor(ctx, "Unauthorized") };
  }
});
```

### Context

The `Context` object is available in all middleware and handlers:

| Property               | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| `ctx.req.raw`          | Original HL7v2 message string                            |
| `ctx.req.bytes`        | Raw bytes from the MLLP frame                            |
| `ctx.connection`       | `{ remoteAddress, remotePort, localPort, secure }`       |
| `ctx.messageType`      | MSH-9.1 (e.g., `"ADT"`)                                  |
| `ctx.triggerEvent`     | MSH-9.2 (e.g., `"A01"`)                                  |
| `ctx.messageStructure` | MSH-9.3 (e.g., `"ADT_A01"`)                              |
| `ctx.version`          | MSH-12 (e.g., `"2.5.1"`)                                 |
| `ctx.controlId`        | MSH-10 message control ID                                |
| `ctx.tree`             | Parsed AST (populated by unified middleware)             |
| `ctx.file`             | VFile with diagnostics (populated by unified middleware) |
| `ctx.set(key, value)`  | Store a variable                                         |
| `ctx.get(key)`         | Retrieve a variable                                      |
| `ctx.var`              | Read-only snapshot of all variables                      |

### Error Handling

```typescript
app.onError(async (err, ctx) => {
  console.error(`Error processing ${ctx.controlId}:`, err.message);
  return { raw: buildNakFor(ctx, err.message) };
});
```

Without an error handler, errors are absorbed and no response is sent. The sending system will time out and retry per standard MLLP behavior. See the [FAQ](#faq) for the rationale behind this design.

### TLS

TLS is supported via `serve()` options:

```typescript
import fs from "node:fs";
import { Mllp } from "@rethinkhealth/hl7v2-mllp";
import { serve } from "@rethinkhealth/hl7v2-mllp/node";

const app = new Mllp();

const server = serve(app, {
  port: 2575,
  tls: {
    cert: fs.readFileSync("cert.pem"),
    key: fs.readFileSync("key.pem"),
  },
});
```

## Primitives

### Simple API

```typescript
import {
  encode,
  decode,
  encodeMultiple,
  decodeMultiple,
  isValidFrame,
} from "@rethinkhealth/hl7v2-mllp";

const mllpFrame = encode(hl7Message);
const decoded = decode(mllpFrame);
console.log(decoded.text);

const frames = encodeMultiple(["MSH|1", "MSH|2"]);
const messages = decodeMultiple(frames);

if (isValidFrame(data)) {
  const message = decode(data);
}
```

### Streaming API

```typescript
import {
  createEncoderStream,
  createDecoderStream,
} from "@rethinkhealth/hl7v2-mllp";

const decoder = createDecoderStream({
  maxMessageSize: 1024 * 1024,
  onError: (error) => console.warn(`[${error.code}] ${error.message}`),
});

tcpSocket.readable.pipeThrough(decoder).pipeTo(
  new WritableStream({
    write(message) {
      console.log("Received:", message.text);
    },
  })
);

const encoder = createEncoderStream();
messageSource.pipeThrough(encoder).pipeTo(tcpSocket.writable);
```

## API Reference

### Server

| Export                               | Description                      |
| ------------------------------------ | -------------------------------- |
| `Mllp`                               | Hono-style MLLP server class     |
| `serve()` (from `/node`)             | Start a Node.js/Bun TCP server   |
| `parsePattern(pattern)`              | Parse a route pattern string     |
| `matchPattern(pattern, type, event)` | Test a pattern against a message |

### Types

| Type               | Description                                          |
| ------------------ | ---------------------------------------------------- |
| `Context`          | Request context with message data and routing fields |
| `Response`         | Response object `{ raw: string }`                    |
| `Middleware`       | Middleware function `(ctx, next) => ...`             |
| `Handler`          | Terminal route handler `(ctx) => Response`           |
| `ErrorHandler`     | Error handler `(err, ctx) => Response`               |
| `MiddlewareReturn` | Return type of middleware functions                  |
| `ConnectionInfo`   | Connection metadata                                  |
| `RoutePattern`     | Parsed route pattern                                 |

### Primitives

| Function                        | Description                       |
| ------------------------------- | --------------------------------- |
| `encode(message)`               | Encode a message to an MLLP frame |
| `decode(frame)`                 | Decode a single MLLP frame        |
| `encodeMultiple(messages)`      | Encode multiple messages          |
| `createDecoderStream(options?)` | Streaming decoder TransformStream |

## FAQ

### Why doesn't the server return an error response by default?

HTTP servers like [Hono](https://hono.dev) return a generic `500 Internal Server Error` when a handler throws. This works because HTTP has a universal error response format that every client understands.

HL7v2 has no such universal format. An ACK/NAK message is version-dependent, varies by message type, and requires knowledge of the original MSH segment to construct correctly. Building ACK generation into the core would couple the routing engine to HL7v2 message construction — the wrong layer of abstraction.

Instead, the `Mllp` class follows a **middleware-first** design:

- **Default behavior**: No response is sent. The sending system times out and retries, which is valid and expected in MLLP.
- **Logging**: Add a logger middleware to make errors observable.
- **ACK/NAK**: Add an acknowledgment middleware to translate errors into proper NAK responses.
- **Custom error handling**: Use `app.onError()` for application-specific error responses.

```typescript
const app = new Mllp();

// Compose the behavior you need
app.use(logger()); // observability — provided by middleware
app.use(ack()); // error → NAK translation — provided by middleware

app.on("ADT^A01", handler);
```

This keeps the core engine simple and protocol-agnostic, while middleware handles the HL7v2-specific concerns.

### Why is there no built-in logging?

Same philosophy as Hono — the core has zero `console.log` or `console.error` calls. Logging is an opt-in middleware concern. This gives you full control over log format, destination, and verbosity without the core making assumptions about your observability stack.

## Requirements

- Node.js 18+ or Bun
- ESM only

## License

MIT
