# @glion/mllp

Transport-agnostic MLLP engine and middleware-driven MLLP server for HL7v2 messaging.

## What it does

`@glion/mllp` provides primitives for sending and receiving HL7v2 messages over MLLP/TCP: frame encoding and decoding, streaming `TransformStream`s for chunked TCP, and an `Mllp` class with pattern-based routing, composable middleware, and a `unified` processor as the parse stage. The engine is transport-agnostic; the package ships a `serve()` helper at `@glion/mllp/node` that binds it to a Node.js or Bun TCP server.

## Install

```bash
npm install @glion/mllp
```

### Package exports

| Subpath            | Description                       |
| ------------------ | --------------------------------- |
| `@glion/mllp`      | Core `Mllp` class and primitives  |
| `@glion/mllp/node` | `serve()` helper for Node and Bun |

## Use

```ts
import { Mllp } from "@glion/mllp";
import { serve } from "@glion/mllp/node";
import { parseHL7v2 } from "@glion/hl7v2";

const app = new Mllp()
  .parser(parseHL7v2)
  .on("ADT^A01", async (ctx) => ({ raw: buildAckFor(ctx) }))
  .on("ORU^R01", async (ctx) => ({ raw: buildAckFor(ctx) }))
  .on("*", async (ctx) => ({
    raw: buildNakFor(ctx, "Unsupported message type"),
  }));

const server = serve(app, { port: 2575 });
```

The `@glion/cli` package wraps an `Mllp` instance with `glion dev` (live reload) and `glion start` (production lifecycle). This README covers the server primitives only.

## API

### `Mllp`

The server class. Methods return the instance for chaining.

| Method                      | Description                                                                 |
| --------------------------- | --------------------------------------------------------------------------- |
| `.parser(processor)`        | Attach a `unified` processor (or `@glion/parser` alone) as the parse stage. |
| `.use(middleware)`          | Register global middleware that runs for every message.                     |
| `.use(pattern, middleware)` | Register scoped middleware that runs only for matching message types.       |
| `.on(pattern, handler)`     | Register a terminal route handler for a message type or trigger event.      |
| `.onError(errorHandler)`    | Register a catch-all error handler.                                         |

### `serve(app, options)` — from `@glion/mllp/node`

Starts a Node.js or Bun TCP server that dispatches incoming MLLP frames through the `Mllp` instance.

- `port` (`number`) — TCP port to listen on.
- `hostname` (`string`, optional) — interface to bind. Defaults to all interfaces.
- `tls` (`{ cert, key }`, optional) — enable MLLP over TLS.

### Primitives

| Function                        | Description                                            |
| ------------------------------- | ------------------------------------------------------ |
| `encode(message)`               | Encodes a message string into an MLLP frame.           |
| `decode(frame)`                 | Decodes a single MLLP frame to its message.            |
| `encodeMultiple(messages)`      | Encodes an array of messages in one pass.              |
| `createDecoderStream(options?)` | TransformStream for streaming decode from chunked TCP. |

### Types

| Type               | Description                                                         |
| ------------------ | ------------------------------------------------------------------- |
| `Context`          | Request context with message data and routing fields.               |
| `Response`         | Response object `{ raw: string }`.                                  |
| `Hl7v2Processor`   | Unified `Processor` type for HL7v2 (`Processor<Root, Root, Root>`). |
| `Middleware`       | Middleware function `(ctx, next) => ...`.                           |
| `Handler`          | Terminal route handler `(ctx) => Response`.                         |
| `ErrorHandler`     | Error handler `(err, ctx) => Response`.                             |
| `RouteFilter`      | Filter function `(ctx) => boolean` used for routing.                |
| `MiddlewareReturn` | Return type of middleware functions.                                |
| `ConnectionInfo`   | Connection metadata (remote/local address, TLS flag).               |
| `RoutePattern`     | Parsed route pattern.                                               |

## Routing

Routes match by message type, trigger event, or pattern:

```ts
app.on("ADT^A01", handler); // exact match
app.on("ADT^*", handler); // any ADT trigger event
app.on("*^A01", handler); // any message type with A01
app.on("ADT", handler); // any ADT (same as ADT^*)
app.on("*", handler); // catch-all
```

Routes match first-match-wins. Specific routes take precedence only when registered before catch-alls.

## Middleware

Middleware functions receive the request context and a `next()` callback. Pre-work runs before `next()`; post-work runs after. Returning a response from any middleware short-circuits the handler.

```ts
// Global middleware — runs for every message.
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  console.log(`Processed in ${Date.now() - start}ms`);
});

// Scoped middleware — only for matching message types.
app.use("ADT^*", async (ctx, next) => {
  ctx.set("isAdmission", true);
  await next();
});

// Short-circuit: return a response without calling next().
app.use(async (ctx) => {
  if (!isAuthorized(ctx.connection.remoteAddress)) {
    return { raw: buildNakFor(ctx, "Unauthorized") };
  }
});
```

## Context

Available in every middleware and handler. The pipeline is lazy: only the parse step runs eagerly; transforms and compilation are deferred until accessed. `ctx.ast` returns the raw parsed AST synchronously and is sufficient for routing fields, MSH reads, and ACK construction. `await ctx.tree()` triggers the transform pipeline (escape decoding, annotations, lint) and returns the transformed AST. `await ctx.result()` triggers transform plus compile. Both async methods cache their result after first call.

### Sync properties

| Property               | Description                                             |
| ---------------------- | ------------------------------------------------------- |
| `ctx.req.raw`          | Original HL7v2 message string.                          |
| `ctx.req.bytes`        | Raw bytes from the MLLP frame.                          |
| `ctx.connection`       | `{ remoteAddress, remotePort, localPort, secure }`.     |
| `ctx.messageType`      | MSH-9.1 (e.g. `"ADT"`).                                 |
| `ctx.triggerEvent`     | MSH-9.2 (e.g. `"A01"`).                                 |
| `ctx.messageStructure` | MSH-9.3 (e.g. `"ADT_A01"`).                             |
| `ctx.version`          | MSH-12 (e.g. `"2.5.1"`).                                |
| `ctx.controlId`        | MSH-10 message control ID.                              |
| `ctx.ast`              | Raw parsed AST — pre-transform, straight from the wire. |
| `ctx.file`             | VFile (diagnostics accumulate after `tree()`).          |
| `ctx.set(key, value)`  | Stores a variable.                                      |
| `ctx.get(key)`         | Retrieves a variable.                                   |
| `ctx.var`              | Read-only snapshot of all variables.                    |

### Async methods

| Method               | Triggers                | Description                                                       |
| -------------------- | ----------------------- | ----------------------------------------------------------------- |
| `await ctx.tree()`   | `run()` (transform)     | Returns the transformed AST — escape decoding, annotations, lint. |
| `await ctx.result()` | `run()` + `stringify()` | Returns the compiled output (e.g. JSON from `hl7v2Jsonify`).      |

Both are cached — subsequent calls return the same value.

## Error handling

```ts
app.onError(async (err, ctx) => {
  console.error(`Error processing ${ctx.controlId}:`, err.message);
  return { raw: buildNakFor(ctx, err.message) };
});
```

Without an error handler, no response is sent; the sending system times out and retries per standard MLLP behavior.

## TLS

TLS is configured through `serve()` options:

```ts
import fs from "node:fs";
import { Mllp } from "@glion/mllp";
import { parseHL7v2 } from "@glion/hl7v2";
import { serve } from "@glion/mllp/node";

const app = new Mllp().parser(parseHL7v2);

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

```ts
import { encode, decode, encodeMultiple } from "@glion/mllp";

const mllpFrame = encode(hl7Message);
const decoded = decode(mllpFrame);
console.log(decoded.text);

const frames = encodeMultiple(["MSH|1", "MSH|2"]);
```

### Streaming API

```ts
import { createDecoderStream } from "@glion/mllp";

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
```

## Part of Glion

`@glion/mllp` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
