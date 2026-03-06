# @rethinkhealth/hl7v2-mllp

MLLP (Minimal Lower Layer Protocol) transport for HL7v2 messaging — primitives, streaming, and a [Hono](https://hono.dev)-style middleware server.

## Overview

This package provides everything needed to send and receive HL7v2 messages over MLLP/TCP:

1. **Primitives** — Frame encoding/decoding, streaming TransformStreams, ACK generation
2. **Server** — Hono-style `Mllp` class with middleware, pattern-based routing, and unified processor integration
3. **Client** — `Client` for sending messages and receiving responses

**Key characteristics:**

- **Hono-style API** — `.use()` middleware, `.on()` pattern routing, fluent chaining
- **Unified integration** — pass a unified processor directly to `.use()`
- **Web Streams** — built on `ReadableStream`/`WritableStream` throughout
- **Dual API** — simple functions for one-shot operations + streaming for TCP

> **Note:** Acknowledgment (ACK/NAK) middleware is not yet included in the server layer. ACK will ship as a separate `.use()` middleware package. Low-level `generateAck`/`generateNak` utilities are available for manual use.

## Installation

```bash
pnpm add @rethinkhealth/hl7v2-mllp
```

### Package Exports

| Subpath                            | Description                         |
| ---------------------------------- | ----------------------------------- |
| `@rethinkhealth/hl7v2-mllp`        | Core `Mllp` class, primitives, ACKs |
| `@rethinkhealth/hl7v2-mllp/node`   | `serve()` function for Node.js/Bun  |
| `@rethinkhealth/hl7v2-mllp/client` | `Client` for sending messages       |

## Server

### Quick Start

```typescript
import { Mllp } from "@rethinkhealth/hl7v2-mllp";
import { serve } from "@rethinkhealth/hl7v2-mllp/node";

const app = new Mllp();

// Register middleware
app.use(async (ctx, next) => {
  console.log(
    `Received ${ctx.messageType}^${ctx.triggerEvent} from ${ctx.connection.remoteAddress}`
  );
  await next();
});

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

Without an error handler, errors are silently swallowed and no response is sent.

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

## Client

```typescript
import { Client } from "@rethinkhealth/hl7v2-mllp/client";

const client = new Client({ host: "lis.hospital.org", port: 2575 });

const response = await client.send(hl7Message);
if (response.accepted) {
  console.log("Message accepted");
} else {
  console.log("Rejected:", response.code, response.text);
}

client.close();
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

### ACK Generation

Low-level utilities for building acknowledgment messages:

```typescript
import {
  generateAck,
  generateNak,
  AckCode,
  parseMsh,
} from "@rethinkhealth/hl7v2-mllp";

const ack = generateAck(originalMessage);
const errorAck = generateAck(originalMessage, {
  code: AckCode.AE,
  textMessage: "Invalid patient ID",
});
const nak = generateNak(originalMessage, "Message rejected");
const msh = parseMsh(originalMessage);
```

### Complete Pipeline

For full message processing with automatic ACK generation (low-level streaming API):

```typescript
import { createMLLPPipeline } from "@rethinkhealth/hl7v2-mllp";
import hl7v2 from "@rethinkhealth/hl7v2";

const pipeline = createMLLPPipeline({
  processor: hl7v2,
  onMessage: (msg) => console.log("Received:", msg.text),
  onProcessed: (result) => console.log("Processed:", result.success),
});

tcpSocket.readable.pipeTo(pipeline.writable);
pipeline.readable.pipeTo(tcpSocket.writable);
```

## API Reference

### Server

| Export                               | Description                      |
| ------------------------------------ | -------------------------------- |
| `Mllp`                               | Hono-style MLLP server class     |
| `serve()` (from `/node`)             | Start a Node.js/Bun TCP server   |
| `Client` (from `/client`)            | MLLP client for sending messages |
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

| Function                             | Description                                          |
| ------------------------------------ | ---------------------------------------------------- |
| `encode(message)`                    | Encode a message to an MLLP frame                    |
| `decode(frame)`                      | Decode a single MLLP frame                           |
| `encodeMultiple(messages)`           | Encode multiple messages                             |
| `decodeMultiple(data)`               | Decode multiple concatenated frames                  |
| `isValidFrame(data)`                 | Check if data is a valid MLLP frame                  |
| `createEncoderStream()`              | Streaming encoder TransformStream                    |
| `createDecoderStream(options?)`      | Streaming decoder TransformStream                    |
| `createProcessorStream(processor)`   | Bridge to unified processing                         |
| `createMLLPPipeline(options)`        | Complete decode -> process -> ACK -> encode pipeline |
| `generateAck(message, options?)`     | Generate an ACK message                              |
| `generateNak(message, error, code?)` | Generate a NAK message                               |
| `parseMsh(message)`                  | Parse MSH segment fields                             |
| `AckCode`                            | Acknowledgment codes (AA, AE, AR, CA, CE, CR)        |

## Requirements

- Node.js 18+ or Bun
- ESM only

## License

MIT
