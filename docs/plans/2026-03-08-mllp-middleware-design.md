# MLLP Middleware Architecture & Acknowledgment Middleware

**Date**: 2026-03-08
**Status**: Design

## Problem

Handlers currently return `Response` objects manually. In MLLP, the standard response is an HL7v2 ACK message. Handlers shouldn't need to construct ACK messages — that's a transport concern. We need:

1. A middleware convention and folder structure for built-in middleware
2. An `MllpException` class (analogous to Hono's `HTTPException`) that any code can throw
3. An `ack()` middleware that auto-generates ACK/NAK responses based on handler outcomes

## Design

### 1. `MllpException` — Transport-Level Exception

Lives at `src/server/exception.ts` (not inside `/middleware`) because any middleware, handler, or library code can throw it.

```typescript
import type { AckCode } from "../ack.js";

export interface MllpExceptionOptions {
  /** Error condition string for ERR segment */
  errorCondition?: string;
  /** Original cause for chaining */
  cause?: unknown;
}

export class MllpException extends Error {
  readonly code: AckCode;
  readonly errorCondition?: string;

  constructor(code: AckCode, message?: string, options?: MllpExceptionOptions) {
    super(message, { cause: options?.cause });
    this.name = "MllpException";
    this.code = code;
    this.errorCondition = options?.errorCondition;
  }
}
```

**Semantics:**

- Only non-accept codes: `"AE"`, `"AR"`, `"CE"`, `"CR"` — you never throw a success
- `code` maps directly to the ACK code in the MSA segment
- `message` becomes MSA-3 (text message)
- `errorCondition` becomes the ERR segment value
- `cause` chains to the original error for debugging

**Usage examples:**

```typescript
// Validation middleware
throw new MllpException("AE", "Missing patient ID in PID-3");

// System-level rejection
throw new MllpException("AR", "Database unavailable", {
  cause: dbError,
  errorCondition: "207",
});

// Enhanced mode
throw new MllpException("CE", "Commit failed");
```

### 2. Middleware Folder Structure

```
src/middleware/
  ack.ts          # Auto-acknowledgment middleware
  index.ts        # Barrel exports
```

Future middleware (logger, timing, validation) follow the same pattern. Each middleware file exports a factory function.

**Convention**: Every built-in middleware is a **factory function** that accepts an options object and returns a `Middleware`:

```typescript
export const ack = (options?: AckMiddlewareOptions): Middleware => {
  return async (ctx, next) => {
    /* ... */
  };
};
```

### 3. `ack()` Middleware — Auto-Acknowledgment

The core middleware. Wraps the handler chain in an onion layer. Translates handler outcomes into HL7v2 ACK/NAK responses using `generateAck`/`generateNak` from `src/ack.ts`.

#### 3.1 Behavior Matrix

| Handler outcome                     | ACK code               | Response generated                  |
| ----------------------------------- | ---------------------- | ----------------------------------- |
| Returns `void` (completes normally) | AA (or CA in enhanced) | ACK with accept                     |
| Returns `Response` directly         | _bypass_               | Handler's response used as-is       |
| Throws `MllpException`              | Exception's `code`     | ACK with exception's code + message |
| Throws any other `Error`            | AR (or CR in enhanced) | NAK with error message              |

#### 3.2 Options

```typescript
export interface AckMiddlewareOptions {
  /**
   * Acknowledgment mode.
   * - "original": Uses AA/AE/AR codes (default)
   * - "enhanced": Uses CA/CE/CR codes
   */
  mode?: "original" | "enhanced";
}
```

#### 3.3 Implementation

```typescript
import { AckCode, generateAck, generateNak } from "../ack.js";
import { MllpException } from "../server/exception.js";
import type { Middleware, Response } from "../server/types.js";

export interface AckMiddlewareOptions {
  mode?: "original" | "enhanced";
}

export const ack = (options?: AckMiddlewareOptions): Middleware => {
  const mode = options?.mode ?? "original";

  // Map abstract outcomes to mode-specific codes
  const acceptCode = mode === "enhanced" ? AckCode.CA : AckCode.AA;
  const rejectCode = mode === "enhanced" ? AckCode.CR : AckCode.AR;

  return async (ctx, next) => {
    try {
      await next();
    } catch (error) {
      // MllpException — use its code and message directly
      if (error instanceof MllpException) {
        return {
          raw: generateAck(ctx.req.raw, {
            code: error.code,
            errorCondition: error.errorCondition,
            textMessage: error.message,
          }),
        } satisfies Response;
      }

      // Any other Error — treat as system rejection
      const message = error instanceof Error ? error.message : "Unknown error";
      return {
        raw: generateNak(ctx.req.raw, message, rejectCode),
      } satisfies Response;
    }

    // No error, no explicit response — generate accept ACK
    return {
      raw: generateAck(ctx.req.raw, { code: acceptCode }),
    } satisfies Response;
  };
};
```

#### 3.4 Response Bypass

When a handler returns a `Response` object, the `compose()` function captures it in `responseRef.value`. The ack middleware's return value is also captured by compose. The key insight: if the handler already set a response via `responseRef`, and the ack middleware also returns one, **the first response wins** in the current compose implementation (it captures the first non-undefined response).

However, we need to refine this. The ack middleware should check whether a response was already returned by downstream middleware/handler. We have two options:

**Option A — Compose captures first response (current behavior)**
The ack middleware always returns a Response. If the handler also returned one, compose already captured the handler's response first (since it runs before ack's post-next code). The ack middleware's return is ignored because compose already has a response.

Looking at the current `compose()`:

```typescript
const result = await middleware(ctx, () => dispatch(i + 1));
if (result && typeof result === "object" && "raw" in result) {
  responseRef.value = result; // OVERWRITES previous!
}
```

This **overwrites**. So the ack middleware's response would overwrite the handler's. We need to change compose to capture **first** response, or have the ack middleware check.

**Decision: Modify compose to capture first response only.** This matches Hono's behavior — the innermost response wins. We change the compose assignment to:

```typescript
if (
  result &&
  typeof result === "object" &&
  "raw" in result &&
  !responseRef.value
) {
  responseRef.value = result;
}
```

This means:

- If handler returns Response → compose captures it → ack middleware's return is ignored → handler's response sent
- If handler returns void → compose has no response → ack middleware's return is captured → ACK sent

### 4. Integration with `Mllp.handle()` and `onError`

#### 4.1 Current error flow

Currently, `Mllp.handle()` catches errors from the composed chain and delegates to `#errorHandler` (set via `app.onError()`). With the ack middleware, errors thrown by handlers are caught **inside** the ack middleware, not by `Mllp.handle()`.

**Error handling order:**

1. Handler throws → ack middleware catches → generates NAK response → no error propagates to `Mllp.handle()`
2. If ack middleware itself throws (bug) → `Mllp.handle()` catches → `onError` handler runs
3. If no ack middleware → errors propagate to `Mllp.handle()` → `onError` as before

This is the correct layering. The ack middleware is a **domain-level** error handler. `onError` is a **framework-level** safety net.

#### 4.2 onError and MllpException

`app.onError()` should also understand `MllpException`. If someone doesn't use the ack middleware but does throw `MllpException`, they can handle it in `onError`:

```typescript
app.onError((err, ctx) => {
  if (err instanceof MllpException) {
    return {
      raw: generateAck(ctx.req.raw, {
        code: err.code,
        textMessage: err.message,
      }),
    };
  }
  return { raw: generateNak(ctx.req.raw, err.message) };
});
```

This is not a framework change — it's just a usage pattern. The existing `onError` signature already supports this.

### 5. Exports

```typescript
// From package root (src/index.ts)
export { MllpException } from "./server/exception.js";
export type { MllpExceptionOptions } from "./server/exception.js";
export { ack } from "./middleware/index.js";
export type { AckMiddlewareOptions } from "./middleware/ack.js";
```

### 6. End-to-End Usage

```typescript
import { Mllp, serve, ack, MllpException } from "@rethinkhealth/hl7v2-mllp";

const app = new Mllp();

// Auto-ACK middleware — wraps all handlers
app.use(ack());

// Happy path — void return → AA
app.on("ADT^A01", async (ctx) => {
  await savePatient(ctx.tree);
});

// Explicit application error → AE
app.on("ORM^O01", async (ctx) => {
  const orderId = queryValue(ctx.tree, "ORC-2");
  if (!orderId) {
    throw new MllpException("AE", "Missing order ID in ORC-2");
  }
  await processOrder(ctx.tree);
});

// Unhandled errors → AR
app.on("ORU^R01", async (ctx) => {
  await saveResult(ctx.tree); // DB throws Error → AR
});

// Bypass auto-ACK — return Response directly
app.on("QRY^Q01", async (ctx) => {
  return { raw: buildQueryResponse(ctx.tree) };
});

// Catch-all — routing concern, not middleware
app.on("*", async (ctx) => {
  throw new MllpException(
    "AR",
    `Unsupported message: ${ctx.messageType}^${ctx.triggerEvent}`
  );
});

serve(app, { port: 2575 });
```

## File Changes Summary

| File                            | Action     | Description                          |
| ------------------------------- | ---------- | ------------------------------------ |
| `src/server/exception.ts`       | **Create** | `MllpException` class                |
| `src/middleware/ack.ts`         | **Create** | `ack()` factory middleware           |
| `src/middleware/index.ts`       | **Create** | Barrel exports for middleware        |
| `src/server/compose.ts`         | **Modify** | First-response-wins semantics        |
| `src/index.ts`                  | **Modify** | Export `MllpException`, `ack`, types |
| `test/server/exception.test.ts` | **Create** | Tests for `MllpException`            |
| `test/middleware/ack.test.ts`   | **Create** | Tests for `ack()` middleware         |
| `test/server/compose.test.ts`   | **Modify** | Tests for first-response-wins        |
