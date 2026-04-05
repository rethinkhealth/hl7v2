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

## Glion CLI — dev and start

The `glion` CLI provides a zero-config development server with live reload and a production-ready start command.

### Quick Start (Zero-Config)

Create a single entry file and run:

```bash
cat > glion.app.ts <<'EOF'
import { Mllp } from "@rethinkhealth/hl7v2-mllp";
import { parseHL7v2 } from "@rethinkhealth/hl7v2";
export default new Mllp().parser(parseHL7v2);
EOF

pnpm add -D @rethinkhealth/hl7v2-mllp @rethinkhealth/hl7v2
pnpm glion dev
```

The server starts on port `2575` listening on all interfaces. The TUI shows a `zero-config` badge to indicate no config file was loaded.

### With an Explicit Config File

For more control, create a `glion.config.ts`:

```typescript
// glion.config.ts
import { defineConfig } from "@rethinkhealth/hl7v2-mllp/config";

export default defineConfig({
  entry: "./src/app.ts",
  port: 2575,
  hostname: "0.0.0.0",
  // tls: { cert: "./certs/server.pem", key: "./certs/server.key" },
  // watch: ["./src"],
  // gracefulCloseMs: 5000,
});
```

```typescript
// src/app.ts
import { Mllp } from "@rethinkhealth/hl7v2-mllp";
import { parseHL7v2 } from "@rethinkhealth/hl7v2";

export default new Mllp()
  .parser(parseHL7v2)
  .on("ADT^A01", async (ctx) => ({ raw: buildAck(ctx) }))
  .on("ORU^R01", async (ctx) => ({ raw: buildAck(ctx) }))
  .on("*", async (ctx) => ({ raw: buildNak(ctx, "Unsupported") }));
```

```json
// package.json
{
  "scripts": {
    "dev": "glion dev",
    "start": "glion start"
  }
}
```

### Two Verbs

**`glion dev`** — Development mode with a live Ink TUI, file watcher, and cold restarts on save:

- Shows request/response counts, uptime, and error summaries in the TUI
- Watches the entry file (and configured paths) for changes
- Cold-restarts the server on save (~100–300ms interruption in-flight TCP sessions)
- Falls back to log-only mode when stdout is not a TTY (CI, piped output)

**`glion start`** — Production mode with no TUI and graceful shutdown:

- Runs without a watcher
- Emits JSON-line events to stdout for log aggregators
- Handles SIGTERM with graceful drain (configurable via `gracefulCloseMs`, default 5000ms)
- No in-flight connection interruption — existing TCP sessions complete before exit

### Cross-Runtime Usage

The glion bin ships with `#!/usr/bin/env node` — the standard for Node.js. Bun and Deno require explicit opt-in because they default to honoring the Node shebang.

| Runtime        | Invocation                                                               |
| -------------- | ------------------------------------------------------------------------ |
| Node (default) | `pnpm dev` or `npm run dev` or `npx glion dev`                           |
| Bun            | `bun --bun run dev` (from package.json script) or `bunx --bun glion dev` |
| Deno           | `deno task dev` with a `deno.json` task that runs the compiled bin       |

### Zero-Config Fallback

If no `glion.config.*` file is found, glion looks for a conventional entry file in this order:

1. `glion.app.ts`
2. `glion.app.mts`
3. `glion.app.mjs`
4. `glion.app.js`
5. `src/glion.app.ts`
6. `src/glion.app.js`

When found, it starts with sensible defaults: port `2575`, hostname `0.0.0.0`, no TLS, and watches `dirname(entry)`. The TUI header shows a `zero-config` badge to make this discoverable.

### Programmatic API

To embed glion in another tool, use the `runGlion` function:

```typescript
import { runGlion } from "@rethinkhealth/hl7v2-mllp/cli";
import {
  defineConfig,
  type GlionConfig,
} from "@rethinkhealth/hl7v2-mllp/config";

const exitCode = await runGlion({
  argv: ["dev"],
  cwd: process.cwd(),
});
```

## Server

### Quick Start

```typescript
import { Mllp } from "@rethinkhealth/hl7v2-mllp";
import { parseHL7v2 } from "@rethinkhealth/hl7v2";
import { serve } from "@rethinkhealth/hl7v2-mllp/node";

const app = new Mllp().parser(parseHL7v2);

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

Pass a unified processor directly to `.parser()` — the server runs `parse()` eagerly for routing, then `run()` and `stringify()` lazily when handlers access `ctx.tree()` or `ctx.result()`:

```typescript
import { Mllp } from "@rethinkhealth/hl7v2-mllp";
import { serve } from "@rethinkhealth/hl7v2-mllp/node";
import { parseHL7v2 } from "@rethinkhealth/hl7v2";

const app = new Mllp().parser(parseHL7v2);

app.on("ADT^A01", async (ctx) => {
  const tree = await ctx.tree(); // transformed AST (escape decoding, annotations, lint)
  const result = await ctx.result(); // compiled output (e.g., JSON from hl7v2Jsonify)
  console.log(ctx.file.messages); // lint warnings
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

The `Context` object is available in all middleware and handlers. The pipeline is **lazy** — only the parse step runs eagerly. Transforms and compilation are deferred until accessed.

#### Sync properties (always available, zero cost)

| Property               | Description                                            |
| ---------------------- | ------------------------------------------------------ |
| `ctx.req.raw`          | Original HL7v2 message string                          |
| `ctx.req.bytes`        | Raw bytes from the MLLP frame                          |
| `ctx.connection`       | `{ remoteAddress, remotePort, localPort, secure }`     |
| `ctx.messageType`      | MSH-9.1 (e.g., `"ADT"`)                                |
| `ctx.triggerEvent`     | MSH-9.2 (e.g., `"A01"`)                                |
| `ctx.messageStructure` | MSH-9.3 (e.g., `"ADT_A01"`)                            |
| `ctx.version`          | MSH-12 (e.g., `"2.5.1"`)                               |
| `ctx.controlId`        | MSH-10 message control ID                              |
| `ctx.ast`              | Raw parsed AST — pre-transform, straight from the wire |
| `ctx.file`             | VFile (diagnostics accumulate after `tree()`)          |
| `ctx.set(key, value)`  | Store a variable                                       |
| `ctx.get(key)`         | Retrieve a variable                                    |
| `ctx.var`              | Read-only snapshot of all variables                    |

#### Async methods (lazy, trigger pipeline stages on first call)

| Method               | Triggers                | Description                                          |
| -------------------- | ----------------------- | ---------------------------------------------------- |
| `await ctx.tree()`   | `run()` (transform)     | Transformed AST — escape decoding, annotations, lint |
| `await ctx.result()` | `run()` + `stringify()` | Compiled output (e.g., JSON from hl7v2Jsonify)       |

Both are cached — subsequent calls return the same value instantly.

### `ctx.ast` vs `await ctx.tree()` — Choosing the Right One

**Use `ctx.ast`** when you only need the raw message structure:

- Reading MSH fields (message type, version, control ID)
- Building ACK/NAK responses
- Route filter functions
- Middleware that doesn't need escape-decoded values

```typescript
// Fast — no pipeline cost
app.use((ctx, next) => {
  console.log(`Received ${ctx.messageType}^${ctx.triggerEvent}`);
  return next();
});
```

**Use `await ctx.tree()`** when you need the fully processed tree:

- Business logic that reads decoded field values
- Handlers that inspect annotations or resolved message structures
- Any operation that depends on transformer output

```typescript
// Triggers transform pipeline on first call
app.on("ADT^A01", async (ctx) => {
  const tree = await ctx.tree();
  // tree has escape sequences decoded, message structure resolved, etc.
  return { raw: "..." };
});
```

**Use `await ctx.result()`** when you need the compiled output:

```typescript
app.on("ORU^R01", async (ctx) => {
  const json = await ctx.result(); // triggers transform + compile
  // json is the Hl7v2JsonResult from hl7v2Jsonify
  await saveToDatabase(json);
  return { raw: "..." };
});
```

### Writing Middleware — Best Practices

**Prefer `ctx.ast` over `await ctx.tree()` in middleware.** Most middleware only needs routing fields or raw MSH data — both available synchronously from `ctx.ast`. This keeps the middleware fast and avoids triggering the transform pipeline unnecessarily.

```typescript
// ✅ Good — sync, fast, no pipeline cost
function authMiddleware(): Middleware {
  return (ctx, next) => {
    if (!isAuthorized(ctx.connection.remoteAddress)) {
      return { raw: buildNak(ctx.ast, "Unauthorized") };
    }
    return next();
  };
}

// ✅ Good — ACK middleware uses ctx.ast (pre-transform tree)
// The acknowledge() function only reads MSH fields
function ackMiddleware(): Middleware {
  return async (ctx, next) => {
    await next();
    ctx.res = { raw: toHl7v2(acknowledge(ctx.ast)) };
  };
}

// ⚠️ Only when needed — triggers transform pipeline
function validationMiddleware(): Middleware {
  return async (ctx, next) => {
    const tree = await ctx.tree();
    // tree has escape sequences decoded — needed for value validation
    if (!isValid(tree)) {
      return { raw: buildNak(ctx.ast, "Invalid") };
    }
    return next();
  };
}
```

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
import { parseHL7v2 } from "@rethinkhealth/hl7v2";
import { serve } from "@rethinkhealth/hl7v2-mllp/node";

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

```typescript
import { encode, decode, encodeMultiple } from "@rethinkhealth/hl7v2-mllp";

const mllpFrame = encode(hl7Message);
const decoded = decode(mllpFrame);
console.log(decoded.text);

const frames = encodeMultiple(["MSH|1", "MSH|2"]);
```

### Streaming API

```typescript
import { createDecoderStream } from "@rethinkhealth/hl7v2-mllp";

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

## API Reference

### Server

| Export                               | Description                      |
| ------------------------------------ | -------------------------------- |
| `Mllp`                               | Hono-style MLLP server class     |
| `serve()` (from `/node`)             | Start a Node.js/Bun TCP server   |
| `parsePattern(pattern)`              | Parse a route pattern string     |
| `matchPattern(pattern, type, event)` | Test a pattern against a message |

### Types

| Type               | Description                                                        |
| ------------------ | ------------------------------------------------------------------ |
| `Context`          | Request context with message data and routing fields               |
| `Response`         | Response object `{ raw: string }`                                  |
| `Hl7v2Processor`   | Unified `Processor` type for HL7v2 (`Processor<Root, Root, Root>`) |
| `Middleware`       | Middleware function `(ctx, next) => ...`                           |
| `Handler`          | Terminal route handler `(ctx) => Response`                         |
| `ErrorHandler`     | Error handler `(err, ctx) => Response`                             |
| `RouteFilter`      | Filter function `(ctx) => boolean` for routing                     |
| `MiddlewareReturn` | Return type of middleware functions                                |
| `ConnectionInfo`   | Connection metadata                                                |
| `RoutePattern`     | Parsed route pattern                                               |

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
const app = new Mllp().parser(parseHL7v2);

// Compose the behavior you need
app.use(logger()); // observability — provided by middleware
app.use(ackMiddleware()); // error → NAK translation — @rethinkhealth/hl7v2-mllp-ack

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
