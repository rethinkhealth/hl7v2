# MLLP serve() Refactor Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refactor the MLLP server to follow Hono's architecture — pure `Mllp` app class with a separate `serve()` function for Node.js TCP.

**Architecture:** The `Mllp` class becomes a pure routing/middleware engine exposing `.handle()` as the sole integration point (like Hono's `.fetch()`). A `serve()` function in a `/node` subpath export manages TCP, MLLP framing, and connection lifecycle. The `Client` class moves to a `/client` subpath export. All `Mllp`-prefixed types get renamed to short names.

**Tech Stack:** TypeScript, tsup (multi-entry), vitest, Node.js `net`/`tls`

---

### Task 1: Rename types from `Mllp*` to short names

**Files:**

- Modify: `packages/hl7v2-mllp/src/server/types.ts`
- Modify: `packages/hl7v2-mllp/src/server/context.ts`
- Modify: `packages/hl7v2-mllp/src/server/compose.ts`
- Modify: `packages/hl7v2-mllp/src/server/router.ts`
- Modify: `packages/hl7v2-mllp/src/server/mllp.ts`
- Modify: all `test/server/*.test.ts` files

**Step 1: Rename types in `types.ts`**

In `packages/hl7v2-mllp/src/server/types.ts`, rename:

- `MllpResponse` → `Response`
- `MllpContext` → `Context`
- `MllpMiddlewareReturn` → `MiddlewareReturn`
- `MllpMiddleware` → `Middleware`
- `MllpHandler` → `Handler`
- `MllpErrorHandler` → `ErrorHandler`

Keep `ConnectionInfo` and `RoutePattern` as-is (no `Mllp` prefix to remove).

**Step 2: Update all imports across server source files**

Update every file that imports these types:

- `context.ts` — uses `ConnectionInfo`, `Context` (was `MllpContext`)
- `compose.ts` — uses `Middleware`, `Response`
- `router.ts` — uses `Handler`, `Middleware`
- `mllp.ts` — uses `Context`, `ErrorHandler`, `Handler`, `Middleware`, `Response`

**Step 3: Update all test files**

Update imports in:

- `test/server/types.test.ts`
- `test/server/context.test.ts`
- `test/server/compose.test.ts`
- `test/server/router.test.ts`
- `test/server/mllp.test.ts`

**Step 4: Run tests**

Run: `cd packages/hl7v2-mllp && pnpm test`
Expected: 132 tests passing

**Step 5: Run type check and lint**

Run: `cd packages/hl7v2-mllp && pnpm check-types && npx ultracite check`
Expected: No errors

**Step 6: Commit**

```
feat(mllp): rename types to short names

Rename MllpContext→Context, MllpResponse→Response, MllpMiddleware→Middleware,
MllpHandler→Handler, MllpErrorHandler→ErrorHandler following Hono conventions.
```

---

### Task 2: Extract `handle()` method and strip server concerns from `Mllp`

**Files:**

- Modify: `packages/hl7v2-mllp/src/server/mllp.ts`

**Step 1: Rewrite the `Mllp` class**

Remove:

- `MllpOptions` interface
- Constructor parameters (`adapter`, `listen`)
- `#adapter`, `#listenOptions`, `#handle` private fields
- `listen()` method
- `close()` method
- `#handleConnection()` method
- All imports from `adapter.ts`, `decoder-stream.ts`, `encoder.js`

Add:

- Parameterless constructor
- Public `handle(raw, bytes, connection)` method — extracted from `#processMessage()`, this is the integration point like Hono's `fetch()`

The class should look like:

```typescript
import { compose } from "./compose.js";
import { createContext } from "./context.js";
import { Router } from "./router.js";
import type {
  ConnectionInfo,
  Context,
  ErrorHandler,
  Handler,
  Middleware,
  Response,
} from "./types.js";

export class Mllp {
  readonly #router = new Router();
  #errorHandler: ErrorHandler | undefined;

  // .use() — unchanged
  // .on() — unchanged
  // .onError() — unchanged

  async handle(
    raw: string,
    bytes: Uint8Array,
    connection: ConnectionInfo
  ): Promise<Response | undefined> {
    const ctx = createContext({ bytes, connection, raw });

    try {
      const match = this.#router.match(ctx.messageType, ctx.triggerEvent);
      const middlewares = [...match.middlewares];

      if (match.handler) {
        const handler = match.handler;
        middlewares.push((handlerCtx: Context) => handler(handlerCtx));
      }

      const responseRef: { value: Response | undefined } = {
        value: undefined,
      };
      await compose(middlewares, responseRef)(ctx);
      return responseRef.value;
    } catch (error) {
      return this.#handleError(
        error instanceof Error ? error : new Error(String(error)),
        ctx
      );
    }
  }

  async #handleError(err: Error, ctx: Context): Promise<Response | undefined> {
    // unchanged
  }
}
```

**Step 2: Run tests to see failures**

Run: `cd packages/hl7v2-mllp && pnpm test`
Expected: `test/server/mllp.test.ts` FAILS (tests still use old constructor + mock adapter)

**Step 3: Commit**

```
refactor(mllp): extract handle() and remove server concerns from Mllp class
```

---

### Task 3: Rewrite `mllp.test.ts` to use `handle()` directly

**Files:**

- Rewrite: `packages/hl7v2-mllp/test/server/mllp.test.ts`

**Step 1: Rewrite the test file**

Replace the mock adapter pattern with direct `app.handle()` calls. No TCP mocking needed.

```typescript
import { describe, expect, it, vi } from "vitest";
import { Mllp } from "../../src/server/mllp.js";
import type { ConnectionInfo } from "../../src/server/types.js";

const SAMPLE_ADT = [
  "MSH|^~\\&|SendApp|SendFac|RecvApp|RecvFac|20240101120000||ADT^A01^ADT_A01|MSG001|P|2.5.1",
  "EVN|A01|20240101120000",
  "PID|1||12345^^^MRN||Doe^John",
].join("\r");

const SAMPLE_ORU = [
  "MSH|^~\\&|Lab|Fac|App|Fac|20240101||ORU^R01|MSG002|P|2.5.1",
  "PID|1||99999",
  "OBR|1||LAB123|CBC",
].join("\r");

const MOCK_CONNECTION: ConnectionInfo = {
  localPort: 2575,
  remoteAddress: "127.0.0.1",
  remotePort: 12_345,
  secure: false,
};

const RESPONSE_OK = { raw: "MSH|^~\\&||||||||||2.5.1\rMSA|AA|MSG001" };
const RESPONSE_REJECT = {
  raw: "MSH|^~\\&||||||||||2.5.1\rMSA|AR|MSG002|Unsupported",
};

function toBytes(msg: string): Uint8Array {
  return new TextEncoder().encode(msg);
}

describe("Mllp", () => {
  it("creates a server instance with no args", () => {
    const app = new Mllp();
    expect(app).toBeInstanceOf(Mllp);
  });

  it("supports fluent chaining", () => {
    const app = new Mllp();
    const result = app
      .use(async (_ctx, next) => next())
      .on("*", async () => RESPONSE_OK)
      .onError(async () => ({ raw: "MSA|AE|error" }));
    expect(result).toBe(app);
  });

  it("routes ADT^A01 to correct handler", async () => {
    const app = new Mllp();
    app.on("ADT^A01", async () => RESPONSE_OK);
    app.on("*", async () => RESPONSE_REJECT);

    const response = await app.handle(
      SAMPLE_ADT,
      toBytes(SAMPLE_ADT),
      MOCK_CONNECTION
    );
    expect(response?.raw).toContain("MSA|AA|MSG001");
  });

  it("routes to catch-all when no specific match", async () => {
    const app = new Mllp();
    app.on("ADT^A01", async () => RESPONSE_OK);
    app.on("*", async () => RESPONSE_REJECT);

    const response = await app.handle(
      SAMPLE_ORU,
      toBytes(SAMPLE_ORU),
      MOCK_CONNECTION
    );
    expect(response?.raw).toContain("MSA|AR|MSG002");
  });

  it("returns undefined when no handler matches", async () => {
    const app = new Mllp();
    const response = await app.handle(
      SAMPLE_ADT,
      toBytes(SAMPLE_ADT),
      MOCK_CONNECTION
    );
    expect(response).toBeUndefined();
  });

  it("executes middleware before handler", async () => {
    const app = new Mllp();
    const middlewareRan = { value: false };

    app.use(async (ctx, next) => {
      middlewareRan.value = true;
      ctx.set("enriched", true);
      await next();
    });
    app.on("ADT^A01", async (ctx) => {
      expect(ctx.get("enriched")).toBe(true);
      return RESPONSE_OK;
    });

    await app.handle(SAMPLE_ADT, toBytes(SAMPLE_ADT), MOCK_CONNECTION);
    expect(middlewareRan.value).toBe(true);
  });

  it("executes scoped middleware only for matching messages", async () => {
    const app = new Mllp();
    const adtMiddlewareRan = { value: false };

    app.use("ADT^*", async (_ctx, next) => {
      adtMiddlewareRan.value = true;
      await next();
    });
    app.on("*", async () => RESPONSE_OK);

    await app.handle(SAMPLE_ADT, toBytes(SAMPLE_ADT), MOCK_CONNECTION);
    expect(adtMiddlewareRan.value).toBe(true);

    adtMiddlewareRan.value = false;
    await app.handle(SAMPLE_ORU, toBytes(SAMPLE_ORU), MOCK_CONNECTION);
    expect(adtMiddlewareRan.value).toBe(false);
  });

  it("middleware can short-circuit with response", async () => {
    const app = new Mllp();
    const handlerRan = { value: false };

    app.use(async () => ({
      raw: "MSH|^~\\&||||||||||2.5.1\rMSA|AR|MSG001|Blocked by middleware",
    }));
    app.on("*", async () => {
      handlerRan.value = true;
      return RESPONSE_OK;
    });

    const response = await app.handle(
      SAMPLE_ADT,
      toBytes(SAMPLE_ADT),
      MOCK_CONNECTION
    );
    expect(response?.raw).toContain("Blocked by middleware");
    expect(handlerRan.value).toBe(false);
  });

  it("calls error handler when handler throws", async () => {
    const app = new Mllp();
    app.on("*", async () => {
      throw new Error("Handler crashed");
    });
    app.onError(async () => ({
      raw: "MSH|^~\\&||||||||||2.5.1\rMSA|AE|MSG001|Custom error handling",
    }));

    const response = await app.handle(
      SAMPLE_ADT,
      toBytes(SAMPLE_ADT),
      MOCK_CONNECTION
    );
    expect(response?.raw).toContain("Custom error handling");
  });

  it("returns undefined when handler throws without error handler", async () => {
    const app = new Mllp();
    app.on("*", async () => {
      throw new Error("crash");
    });

    const response = await app.handle(
      SAMPLE_ADT,
      toBytes(SAMPLE_ADT),
      MOCK_CONNECTION
    );
    expect(response).toBeUndefined();
  });

  it("accepts unified processor via use()", async () => {
    const app = new Mllp();
    const mockProcessor = {
      async process(value: string) {
        return {
          data: { messageType: "ADT", triggerEvent: "A01", version: "2.5.1" },
          messages: [],
          result: { children: [], type: "root" },
          value,
        };
      },
      use: vi.fn().mockReturnThis(),
    };

    app.use(mockProcessor);
    app.on("ADT^A01", async (ctx) => {
      expect(ctx.tree).toBeDefined();
      expect(ctx.file).toBeDefined();
      return RESPONSE_OK;
    });

    const response = await app.handle(
      SAMPLE_ADT,
      toBytes(SAMPLE_ADT),
      MOCK_CONNECTION
    );
    expect(response?.raw).toContain("MSA|AA");
  });
});
```

**Step 2: Run tests**

Run: `cd packages/hl7v2-mllp && pnpm test`
Expected: All tests pass (no more mock adapter, no more `listen`/`close` tests)

**Step 3: Commit**

```
test(mllp): rewrite server tests to use handle() directly

Eliminates mock adapter pattern — tests call app.handle() like Hono's app.request().
```

---

### Task 4: Create `serve()` in `/node` subpath

**Files:**

- Create: `packages/hl7v2-mllp/src/node.ts`
- Modify: `packages/hl7v2-mllp/tsup.config.ts` — add `node` entry
- Modify: `packages/hl7v2-mllp/package.json` — add `./node` export
- Modify: `packages/hl7v2-mllp/tsconfig.json` — no changes expected

**Step 1: Create `src/node.ts`**

This file contains the `serve()` function and `ServeOptions`/`Server` types. It imports from `node-adapter.ts` internally.

```typescript
import { createDecoderStream } from "./decoder-stream.js";
import { encode } from "./encoder.js";
import type { Mllp } from "./server/mllp.js";
import type { AdapterSocket, TlsOptions } from "./server/adapter.js";
import { nodeAdapter } from "./server/node-adapter.js";
import type { ConnectionInfo } from "./server/types.js";

export interface ServeOptions {
  port: number;
  hostname?: string;
  tls?: TlsOptions;
  socketTimeout?: number;
  keepAlive?: boolean;
  keepAliveInitialDelay?: number;
}

export interface Server {
  readonly port: number;
  close(): Promise<void>;
}

export function serve(app: Mllp, options: ServeOptions): Server {
  const adapter = nodeAdapter({
    keepAlive: options.keepAlive,
    keepAliveInitialDelay: options.keepAliveInitialDelay,
    socketTimeout: options.socketTimeout,
  });

  const handle = adapter.listen(
    {
      backlog: undefined,
      hostname: options.hostname,
      port: options.port,
      tls: options.tls,
    },
    (socket) => handleConnection(app, socket)
  );

  return {
    get port() {
      return handle.port;
    },
    async close() {
      await handle.close();
    },
  };
}

function handleConnection(app: Mllp, socket: AdapterSocket): void {
  const decoder = createDecoderStream();
  const reader = socket.readable.pipeThrough(decoder).getReader();
  const writer = socket.writable.getWriter();

  const connection: ConnectionInfo = {
    localPort: socket.localPort,
    remoteAddress: socket.remoteAddress,
    remotePort: socket.remotePort,
    secure: socket.secure,
  };

  const processMessages = async () => {
    try {
      while (true) {
        const { done, value: message } = await reader.read();
        if (done) break;

        const response = await app.handle(
          message.text,
          message.data,
          connection
        );
        if (response) {
          await writer.write(encode(response.raw));
        }
      }
    } catch {
      // Connection closed or errored
    } finally {
      try {
        reader.releaseLock();
      } catch {
        /* lock may be released */
      }
      try {
        writer.releaseLock();
      } catch {
        /* lock may be released */
      }
    }
  };

  processMessages();
}
```

**Step 2: Add entry to `tsup.config.ts`**

```typescript
entry: {
  index: "src/index.ts",
  node: "src/node.ts",
},
```

**Step 3: Add subpath export to `package.json`**

Change `exports` from:

```json
{ ".": "./dist/index.js" }
```

to:

```json
{
  ".": {
    "types": "./dist/index.d.ts",
    "import": "./dist/index.js"
  },
  "./node": {
    "types": "./dist/node.d.ts",
    "import": "./dist/node.js"
  }
}
```

Also update the top-level `types` field to `"./dist/index.d.ts"` (should already be correct).

**Step 4: Run type check and lint**

Run: `cd packages/hl7v2-mllp && pnpm check-types && npx ultracite check`
Expected: No errors. Fix any lint issues (sort-keys, empty catch blocks, etc.)

**Step 5: Commit**

```
feat(mllp): add serve() function in /node subpath

serve(app, { port }) starts a Node.js TCP server that calls app.handle()
for each decoded MLLP message. Follows Hono's @hono/node-server pattern.
```

---

### Task 5: Create `Client` in `/client` subpath

**Files:**

- Rewrite: `packages/hl7v2-mllp/src/client/client.ts`
- Create: `packages/hl7v2-mllp/src/client.ts` (barrel for subpath)
- Modify: `packages/hl7v2-mllp/tsup.config.ts` — add `client` entry
- Modify: `packages/hl7v2-mllp/package.json` — add `./client` export

**Step 1: Rewrite `Client` to accept options directly**

In `src/client/client.ts`, rename `MllpClient` → `Client`. Remove the adapter parameter — the client imports `nodeAdapter` internally (same pattern as `serve()`).

```typescript
import { decode } from "../decoder.js";
import { encode } from "../encoder.js";
import type { AdapterSocket, TlsOptions } from "../server/adapter.js";
import { nodeAdapter } from "../server/node-adapter.js";

export interface ClientOptions {
  host: string;
  port: number;
  tls?: TlsOptions;
  timeout?: number;
}

export interface ClientResponse {
  code: string;
  raw: string;
  accepted: boolean;
  text: string;
}

export class Client {
  readonly #options: ClientOptions;
  #socket: AdapterSocket | undefined;

  constructor(options: ClientOptions) {
    this.#options = options;
  }

  async send(message: string): Promise<ClientResponse> {
    const socket = await this.#ensureConnected();
    // ... same send logic as before ...
  }

  close(): void {
    // ... same close logic ...
  }

  async #ensureConnected(): Promise<AdapterSocket> {
    if (!this.#socket) {
      const adapter = nodeAdapter();
      this.#socket = await adapter.connect({
        host: this.#options.host,
        port: this.#options.port,
        timeout: this.#options.timeout,
        tls: this.#options.tls,
      });
    }
    return this.#socket;
  }
}
```

**Step 2: Create `src/client.ts` barrel**

```typescript
export { Client } from "./client/client.js";
export type { ClientOptions, ClientResponse } from "./client/client.js";
```

**Step 3: Add to `tsup.config.ts`**

```typescript
entry: {
  index: "src/index.ts",
  client: "src/client.ts",
  node: "src/node.ts",
},
```

**Step 4: Add to `package.json` exports**

```json
{
  ".": { "types": "./dist/index.d.ts", "import": "./dist/index.js" },
  "./node": { "types": "./dist/node.d.ts", "import": "./dist/node.js" },
  "./client": { "types": "./dist/client.d.ts", "import": "./dist/client.js" }
}
```

**Step 5: Run type check and lint**

Run: `cd packages/hl7v2-mllp && pnpm check-types && npx ultracite check`

**Step 6: Commit**

```
feat(mllp): add Client in /client subpath

Client accepts { host, port } directly — no adapter wiring needed.
Import from '@rethinkhealth/hl7v2-mllp/client'.
```

---

### Task 6: Update barrel exports in `index.ts`

**Files:**

- Modify: `packages/hl7v2-mllp/src/index.ts`

**Step 1: Update the server/client section**

Remove from `index.ts`:

- `nodeAdapter` export (now internal to `serve()`)
- `NodeAdapterOptions` type export
- `MllpClient` export (now in `/client` subpath)
- `MllpClientOptions`, `MllpClientResponse` type exports
- `MllpOptions` type export
- `TcpAdapter`, `TcpServerAdapter`, `TcpClientAdapter`, `TcpHandle`, `AdapterSocket`, `ListenOptions`, `ConnectOptions`, `TlsOptions`, `ConnectionHandler` type exports (all internal now)

Keep in `index.ts`:

- `Mllp` class
- Renamed types: `Context`, `Handler`, `Middleware`, `MiddlewareReturn`, `ErrorHandler`, `Response`, `ConnectionInfo`, `RoutePattern`
- `parsePattern`, `matchPattern` functions
- All primitives (encode, decode, streams, pipeline, ACK, etc.)

**Step 2: Run tests and type check**

Run: `cd packages/hl7v2-mllp && pnpm test && pnpm check-types && npx ultracite check`

**Step 3: Commit**

```
refactor(mllp): clean up barrel exports

Remove adapter/client exports from main entry.
Adapter types are internal; Client lives at /client; serve() at /node.
```

---

### Task 7: Update README

**Files:**

- Modify: `packages/hl7v2-mllp/README.md`

**Step 1: Update all code examples**

- Quick start uses `import { serve } from '@rethinkhealth/hl7v2-mllp/node'`
- Client example uses `import { Client } from '@rethinkhealth/hl7v2-mllp/client'`
- `Mllp` constructor takes no args
- No `app.listen()` — use `serve(app, { port })`
- API reference tables reflect new type names and subpath exports

**Step 2: Commit**

```
docs(mllp): update README for serve() pattern
```

---

### Task 8: Final verification

**Step 1: Run full test suite**

Run: `cd packages/hl7v2-mllp && pnpm test`
Expected: All tests pass

**Step 2: Type check**

Run: `cd packages/hl7v2-mllp && pnpm check-types`
Expected: No errors

**Step 3: Lint**

Run: `npx ultracite check`
Expected: 0 errors

**Step 4: Build**

Run: `cd packages/hl7v2-mllp && pnpm build`
Expected: Builds `dist/index.js`, `dist/node.js`, `dist/client.js` + declarations

**Step 5: Verify subpath exports resolve**

Run: `ls packages/hl7v2-mllp/dist/{index,node,client}.{js,d.ts}`
Expected: All 6 files exist
