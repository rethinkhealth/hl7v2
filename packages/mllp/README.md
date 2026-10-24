# @glion/mllp

Routes and middleware that reply to HL7v2 messages, on any runtime, with an MLLP server for Node.js and Bun.

## What it does

An `Mllp` app routes each HL7v2 message to a handler by message type and trigger event, runs middleware around it, and replies with its acknowledgment. `app.handle(payload, env?)` replies to one message and depends on no runtime: a Cloudflare Worker or an AWS Lambda function calls it with each message it receives. `handleConnection()` runs the MLLP exchange over any socket that exposes Web Streams, and `serve()` from `@glion/mllp/node` listens on a TCP or TLS port and runs it on every connection.

## Install

```bash
npm install @glion/mllp
```

### Package exports

| Subpath            | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| `@glion/mllp`      | `Mllp`, `handleConnection()`, `acknowledge()`; Web APIs only |
| `@glion/mllp/node` | `serve()`, the TCP and TLS server for Node.js and Bun        |

## Use

```ts
import { AckApplicationError, AckCode } from "@glion/ack";
import { parseHL7v2 } from "@glion/hl7v2";
import { Mllp } from "@glion/mllp";
import { serve } from "@glion/mllp/node";

const app = new Mllp()
  .parser(parseHL7v2)
  // A handler returns its reply: ctx.ack() is AA.
  .on("ADT^A01", async (ctx) => {
    await saveToDatabase(await ctx.result());
    return ctx.ack();
  })
  .on("ORM^O01", (ctx) => ctx.ack({ code: AckCode.CommitAccept }))
  // A thrown AckException replies with its code and text.
  .on("ORU^R01", () => {
    throw new AckApplicationError("No patient with this MRN", {
      text: "Patient not on file",
    });
  });
// Any other message type is answered AR.

const server = serve({ handle: app.handle, port: 2575 });
```

To run the app with live reload during development and a production start command, use the `@glion/cli` package — it provides the `glion dev` / `glion start` binary and configuration loader. This README focuses on the server primitives themselves.

## API

### `Mllp`

The app. `Mllp<E>` types `ctx.env` as `E`; it defaults to `unknown`.

| Method                      | Description                                                                                                                                                                                                                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `.parser(processor)`        | Attach a `unified` processor (or `@glion/parser` alone) as the parse stage.                                                                                                                                                    |
| `.use(middleware)`          | Register global middleware that runs for every message.                                                                                                                                                                        |
| `.use(pattern, middleware)` | Register scoped middleware that runs only for matching message types.                                                                                                                                                          |
| `.on(pattern, handler)`     | Register a terminal route handler for a message type or trigger event.                                                                                                                                                         |
| `.handle(payload, env?)`    | Reply to one message, given as bytes without MLLP framing; resolves to the reply serialized as UTF-8 bytes, or `undefined` for none. `env` becomes `ctx.env`, and is required when `E` excludes `undefined`. Bound to the app. |

### `handleConnection(handle, socket, options?)`

Reply to every message on one connection. Reads MLLP frames from `socket.readable`, calls `handle` with each message, one at a time, and writes each reply to `socket.writable` with MLLP framing. Resolves once the remote system closes or resets the connection, or `options.signal` aborts; then the message in progress, if any, is answered first. Closes `socket` either way. Rejects with `MllpServerError` `PROTOCOL_VIOLATION` when the bytes break MLLP framing, and with what `handle` throws.

| Argument         | Type                                                        | Description                                                                                                   |
| ---------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `handle`         | `(payload: Uint8Array) => Promise<Uint8Array \| undefined>` | The reply to one message, both without MLLP framing; `app.handle`, or a function that calls it with an `env`. |
| `socket`         | `MllpSocket`                                                | `readable` and `writable` Web Streams, and a `close()` that never throws and is idempotent.                   |
| `options.signal` | `AbortSignal`, optional                                     | Ends the connection.                                                                                          |

```ts
import { handleConnection } from "@glion/mllp";

await handleConnection((payload) => app.handle(payload, env), socket, {
  signal,
});
```

### `acknowledge(origin, options?)`

Returns the acknowledgment of the parsed message `origin` as a `Root`: an MSH and an MSA segment, never an ERR segment. The MSH swaps the original sender and receiver (MSH-3/4 ↔ MSH-5/6), each field copied whole, sets MSH-7 to the current local time and MSH-9 to `ACK^<MSH-9.2>^ACK` (`ACK^<MSH-9.2>` before v2.3.1), and echoes MSH-12.1. MSA-2 echoes the original MSH-10.

| Option         | Type                                  | Description                                                                 |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------- |
| `code`         | `AckCode`, optional                   | MSA-1. Defaults to `AA`.                                                    |
| `text`         | `string`, optional                    | MSA-3, omitted when absent. Sent to the trading partner.                    |
| `id`           | `string`, optional                    | MSH-10. Defaults to a fresh `uid()`.                                        |
| `sending`      | `{ application, facility }`, optional | MSH-3.1 and MSH-4.1. Default to the original MSH-5 and MSH-6, copied whole. |
| `processingId` | `string`, optional                    | MSH-11. Defaults to the original MSH-11, copied whole, else `P`.            |

```ts
import { AckCode } from "@glion/ack";
import { acknowledge } from "@glion/mllp";
import { toHl7v2 } from "@glion/to-hl7v2";

toHl7v2(
  acknowledge(ctx.ast, {
    code: AckCode.ApplicationReject,
    text: "Message rejected",
  })
);
// MSH|^~\&|RecvApp|RecvFac|SendApp|SendFac|20240115023000||ACK^A01^ACK|<uid>|P|2.5.1
// MSA|AR|MSG001|Message rejected
```

### `serve(options)` — from `@glion/mllp/node`

Start a Node.js or Bun TCP server that runs `handleConnection()` on every connection it accepts. Each message reaches `handle` with a `NodeEnv`, `{ connection }`, where `connection` is a `ConnectionInfo`: `id`, `remoteAddress`, `remotePort`, `localPort`, `secure`, and a `state` map kept across the messages of the connection.

| Option          | Type                                                          | Description                                                                                                                                                                                                              |
| --------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `handle`        | `(payload, env: NodeEnv) => Promise<Uint8Array \| undefined>` | The reply to each message; `app.handle`.                                                                                                                                                                                 |
| `port`          | `number`                                                      | TCP port to listen on.                                                                                                                                                                                                   |
| `hostname`      | `string`, optional                                            | Interface to bind. Defaults to all interfaces.                                                                                                                                                                           |
| `tls`           | `tls.TlsOptions`, optional                                    | Node's TLS server options, passed to `tls.createServer()` unchanged. Plain TCP without it. See [TLS](#tls).                                                                                                              |
| `socketTimeout` | `number`, optional                                            | Socket inactivity timeout in ms — an idle socket past it is destroyed. `0` (default) disables.                                                                                                                           |
| `onConnect`     | `ConnectionCallback`, optional                                | Called when a new TCP connection is accepted.                                                                                                                                                                            |
| `onDisconnect`  | `ConnectionCallback`, optional                                | Called when a connection closes — always fires, even if `onConnect` threw.                                                                                                                                               |
| `onError`       | `ErrorCallback`, optional                                     | Called when a lifecycle callback throws, `handle` rejects (`NO_PARSER`, a second middleware error, a `next()` called twice), or the byte stream breaks (`PROTOCOL_VIOLATION`); the connection closes after the last two. |

### Wire framing

MLLP framing lives in [`@glion/mllp-codec`](https://github.com/rethinkhealth/glion/tree/main/packages/mllp-codec) — `frame()` wraps outbound messages, `unframe()` streams inbound bytes back into them. `@glion/mllp` consumes it internally and re-exports nothing from it; import it directly when you need the codec.

### Types

| Type                      | Description                                                                                                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Context`                 | Request context with message data and routing fields.                                                                                                                                       |
| `Hl7v2Processor`          | Unified `Processor` type for HL7v2 (`Processor<Root, Root \| undefined, Root \| undefined>` — head/tail admit `undefined` so the bare `unified().use(hl7v2Parser).freeze()` is assignable). |
| `Middleware`              | Middleware function `(ctx, next) => ...`.                                                                                                                                                   |
| `Handler`                 | Terminal route handler `(ctx) => Root \| null`: the reply, or `null` for none.                                                                                                              |
| `RouteFilter`             | Filter function `(ctx) => boolean` used for routing.                                                                                                                                        |
| `MiddlewareReturn`        | Return type of middleware functions.                                                                                                                                                        |
| `RoutePattern`            | Parsed route pattern.                                                                                                                                                                       |
| `EnvArgs`                 | The `env` argument of `handle()`: optional when `E` admits `undefined`.                                                                                                                     |
| `MllpSocket`              | The socket `handleConnection()` takes.                                                                                                                                                      |
| `HandleConnectionOptions` | The options `handleConnection()` takes.                                                                                                                                                     |
| `NodeEnv`                 | From `@glion/mllp/node`: `ctx.env` under `serve()`.                                                                                                                                         |
| `ConnectionInfo`          | From `@glion/mllp/node`: a connection `serve()` accepted.                                                                                                                                   |

### Errors

Server-side failures are raised (or passed to `onError`) as `MllpServerError` — branch on its stable `code`; the underlying codec or charset error rides on `cause`:

| Code                   | Meaning                                                                                                                           |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `NO_PARSER`            | `app.handle()` ran before a parser was registered via `app.parser()`.                                                             |
| `INVALID_REPLY`        | A route handler returned a value that is not an HL7v2 message or `null`; the message is answered `AE`.                            |
| `INCOMPATIBLE_CHARSET` | An inbound message could not be decoded as UTF-8 (the `CharsetError` is on `cause`).                                              |
| `PROTOCOL_VIOLATION`   | The MLLP byte stream was violated and the connection closed (the `MllpCodecError` is on `cause`). Raised by `handleConnection()`. |

## Routing

Register routes by message type, trigger event, or pattern:

```ts
app.on("ADT^A01", handler); // exact match
app.on("ADT^*", handler); // any ADT trigger event
app.on("*^A01", handler); // any message type with A01
app.on("ADT", handler); // any ADT (same as ADT^*)
app.on("*", handler); // catch-all
```

Routes are matched first-match-wins — register specific routes before catch-alls.

## Replies

A route handler returns its reply: an HL7v2 message as a `Root`. `app.handle()` serializes it once the middleware have run, so a middleware after `next()` reads and edits `ctx.res` as a tree.

| The route handler        | Reply                                                                                              |
| ------------------------ | -------------------------------------------------------------------------------------------------- |
| Returns an HL7v2 message | That message: `ctx.ack()`, or any message built with `@glion/builder`.                             |
| Returns `null`           | No reply.                                                                                          |
| Returns anything else    | `AE` with MSA-3 `Application internal error`; `ctx.error` is an `MllpServerError` `INVALID_REPLY`. |
| Throws an `AckException` | Its `code` in MSA-1 and its `text` in MSA-3; MSA-3 is omitted without `text`.                      |
| Throws anything else     | `AE` with MSA-3 `Application internal error`.                                                      |

`ctx.ack()` builds the acknowledgment of the message:

```ts
return ctx.ack(); // AA
return ctx.ack("Processing completed"); // AA, with this text in MSA-3
return ctx.ack({ code: AckCode.ApplicationReject, text: "Unknown patient" });
return ctx.ack(error); // the NAK a thrown `error` gets
```

A returned NAK is the handler's decision, and leaves `ctx.error` unset. A thrown error is a failure: `ctx.error` holds it, so logging middleware see it. `ctx.ack(error)` replies to an error as a throw would, without recording it.

A message no route matches is answered as a thrown `AckApplicationReject` with `text` `Unsupported message type`: `AR`. A middleware throw is answered the same way as a handler throw, unless a handler or middleware has already replied; then that reply stands. A middleware that returns an HL7v2 message without calling `next()` replies with it; one that returns nothing sends no reply.

A route filter that throws runs only the global middleware and is answered `AE`. A payload that is not UTF-8 (`MllpServerError` `INCOMPATIBLE_CHARSET`) or that the parser throws on runs only the global middleware, and is answered `AE` whatever they return: a message whose content was never read is never accepted. An `ACK` gets no reply unless a handler or middleware returns one. An error's `message` is never sent.

The acknowledgment answers the MSH as received: a change to the tree does not change it. A VT or FS byte in a reply is escaped (`\X0B\`, `\X1C\`), so a reply never breaks MLLP framing.

An acknowledgment is built by [`acknowledge()`](#acknowledgeorigin-options).

## Middleware

Middleware functions receive the request context and a `next()` callback. Pre-work runs before `next()`; post-work runs after. Returning an HL7v2 message from any middleware short-circuits the handler. `await next()` throws only when called a second time: after it, `ctx.res` is the reply and `ctx.error` the error the message raised, if any.

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

// Short-circuit: return a reply without calling next().
app.use(async (ctx, next) => {
  if (!isAuthorized(ctx.ast)) {
    return ctx.ack({ code: AckCode.ApplicationReject, text: "Unauthorized" });
  }
  await next();
});

// Read the outcome after next(): the reply is still a tree.
app.use(async (ctx, next) => {
  await next();
  const code = ctx.res && value(ctx.res, "MSA.1")?.value;
  report(code, ctx.error);
});
```

## Context

Available in every middleware and handler. The pipeline is lazy: only the decode and parse steps run eagerly; transforms and compilation are deferred until accessed.

### Sync properties

| Property               | Description                                                                                                                                   |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `ctx.req.raw`          | The payload decoded as UTF-8; empty when it is not UTF-8.                                                                                     |
| `ctx.req.bytes`        | Raw bytes from the MLLP frame.                                                                                                                |
| `ctx.env`              | What the runtime passed to `handle()`: a `NodeEnv` under `serve()`, a Workers environment, or `undefined`.                                    |
| `ctx.messageType`      | MSH-9.1 (e.g. `"ADT"`). The routing fields are read from the MSH when the payload does not decode or parse.                                   |
| `ctx.triggerEvent`     | MSH-9.2 (e.g. `"A01"`).                                                                                                                       |
| `ctx.messageStructure` | MSH-9.3 (e.g. `"ADT_A01"`).                                                                                                                   |
| `ctx.version`          | MSH-12 (e.g. `"2.5.1"`).                                                                                                                      |
| `ctx.controlId`        | MSH-10 message control ID.                                                                                                                    |
| `ctx.ast`              | Raw parsed AST — pre-transform, straight from the wire.                                                                                       |
| `ctx.file`             | VFile (diagnostics accumulate after `tree()`).                                                                                                |
| `ctx.set(key, value)`  | Store a variable.                                                                                                                             |
| `ctx.get(key)`         | Retrieve a variable.                                                                                                                          |
| `ctx.var`              | Read-only snapshot of all variables.                                                                                                          |
| `ctx.error`            | The first error the message raised, or `undefined`. Read-only.                                                                                |
| `ctx.res`              | The reply as a `Root`, or `undefined` for none. A middleware reads or replaces it after `next()`.                                             |
| `ctx.ack(input?)`      | The acknowledgment of this message as a `Root`: `acknowledge()` of its MSH as received. `input` is a text, `AcknowledgeOptions`, or an error. |

### Async methods

| Method               | Triggers                | Description                                      |
| -------------------- | ----------------------- | ------------------------------------------------ |
| `await ctx.tree()`   | `run()` (transform)     | Transformed AST — annotations, lint, grouping.   |
| `await ctx.result()` | `run()` + `stringify()` | Compiled output (e.g. JSON from `hl7v2Jsonify`). |

Both are cached — subsequent calls return the same value instantly.

### `ctx.ast` vs `await ctx.tree()`

Use `ctx.ast` when the parsed message is enough — reading MSH fields, building ACK/NAK responses, route filter functions, or middleware that doesn't need annotations. The parser has already decoded escape sequences, so every value is content:

```ts
// Fast — no pipeline cost.
app.use((ctx, next) => {
  console.log(`Received ${ctx.messageType}^${ctx.triggerEvent}`);
  return next();
});
```

Use `await ctx.tree()` when you need the fully processed tree — handlers that inspect annotations, lint findings, or resolved message structures:

```ts
// Triggers transform pipeline on first call.
app.on("ADT^A01", async (ctx) => {
  const tree = await ctx.tree();
  // tree has annotations, message structure resolved, etc.
  return ctx.ack();
});
```

Use `await ctx.result()` when you need the compiled output:

```ts
app.on("ORU^R01", async (ctx) => {
  const json = await ctx.result(); // triggers transform + compile
  await saveToDatabase(json);
  return ctx.ack();
});
```

### Writing middleware — prefer `ctx.ast`

Most middleware only needs routing fields or raw MSH data — both available synchronously from `ctx.ast`. Reach for `await ctx.tree()` only when you genuinely need the transformed tree.

```ts
// Good — sync, fast, no pipeline cost.
function authMiddleware(): Middleware {
  return (ctx, next) => {
    if (!isAuthorized(ctx.ast)) {
      return ctx.ack({ code: AckCode.ApplicationReject, text: "Unauthorized" });
    }
    return next();
  };
}

// Only when needed — triggers transform pipeline.
function validationMiddleware(): Middleware {
  return async (ctx, next) => {
    const tree = await ctx.tree();
    if (!isValid(tree)) {
      return ctx.ack({ code: AckCode.ApplicationError, text: "Invalid" });
    }
    return next();
  };
}
```

## Error handling

`await next()` throws only when called a second time. After it, `ctx.error` is the first error the message raised and `ctx.res` its reply. A middleware logs the error there, and may replace the reply:

```ts
import { AckCode } from "@glion/ack";

app.use(async (ctx, next) => {
  await next();
  if (ctx.error) {
    logger.error(ctx.error);
  }
  if (ctx.error instanceof DatabaseUnavailable) {
    ctx.res = ctx.ack({
      code: AckCode.ApplicationError,
      text: "Try again later",
    });
  }
});
```

Register it with `app.use()` before other middleware so it wraps them all. A second error, thrown by a middleware once `ctx.error` holds one, makes `app.handle()` reject with it: `serve()` reports it to `onError`, sends no reply, and closes the connection. `onError` sees no other error a message raised.

## Socket options

Every connection has TCP keep-alive, with the first probe after 60 s idle, and Nagle's algorithm off. Keep-alive ends a connection whose remote system is gone without closing it; `socketTimeout` also ends one whose remote system is there but quiet.

## TLS

`tls` takes Node's [TLS server options](https://nodejs.org/api/tls.html#tlscreateserveroptions-secureconnectionlistener) and passes them to `tls.createServer()` unchanged; a [socket option](#socket-options) set in `tls` replaces the server's. Each connection reaches the app once its TLS handshake completes. Without `tls`, the server listens with `net.createServer()`.

```ts
import fs from "node:fs";
import { Mllp } from "@glion/mllp";
import { parseHL7v2 } from "@glion/hl7v2";
import { serve } from "@glion/mllp/node";

const app = new Mllp().parser(parseHL7v2);

const server = serve({
  handle: app.handle,
  port: 2575,
  tls: {
    cert: fs.readFileSync("cert.pem"),
    key: fs.readFileSync("key.pem"),
  },
});
```

Mutual TLS is `requestCert` with the `ca` that issued the client certificates. A remote system that presents no certificate is refused during the handshake. One with a certificate `ca` does not verify is disconnected once the handshake completes, before any message is read:

```ts
const server = serve({
  handle: app.handle,
  port: 2575,
  tls: {
    ca: fs.readFileSync("ca.pem"),
    cert: fs.readFileSync("cert.pem"),
    key: fs.readFileSync("key.pem"),
    requestCert: true,
  },
});
```

## Runtimes

`@glion/mllp` uses Web APIs only; `@glion/mllp/node` holds everything specific to Node.js.

| Runtime                        | Entry point                                                        |
| ------------------------------ | ------------------------------------------------------------------ |
| Node.js, Bun                   | `serve({ handle: app.handle, port })`                              |
| A Web Streams socket           | `handleConnection(app.handle, socket)`                             |
| Cloudflare Workers, AWS Lambda | `app.handle(payload, env)`, once per message the function receives |

A Worker passes its bindings as `env`, typed by `Mllp<Env>`:

```ts
import { parseHL7v2 } from "@glion/hl7v2";
import { Mllp } from "@glion/mllp";

const app = new Mllp<Env>().parser(parseHL7v2).on("ADT^A01", async (ctx) => {
  await ctx.env.ADMISSIONS.send(await ctx.result());
  return ctx.ack();
});

export default {
  async fetch(request: Request, env: Env) {
    const reply = await app.handle(
      new Uint8Array(await request.arrayBuffer()),
      env
    );
    return new Response(reply ?? null);
  },
};
```

## Design notes

### Why no built-in logging?

The core has zero `console.log` or `console.error` calls. Logging is an opt-in middleware concern, giving you full control over format, destination, and verbosity without the core making assumptions about your observability stack.

## Part of Glion

`@glion/mllp` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
