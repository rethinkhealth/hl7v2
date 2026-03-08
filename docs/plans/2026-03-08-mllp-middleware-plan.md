# MLLP Middleware Architecture & Acknowledgment Middleware — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a middleware convention with `MllpException` and an `ack()` auto-acknowledgment middleware that translates handler outcomes into HL7v2 ACK/NAK responses.

**Architecture:** `MllpException` is a transport-level exception (like Hono's `HTTPException`) that any middleware or handler can throw. The `ack()` middleware wraps the handler chain, catches errors, and generates ACK/NAK responses. `compose()` is updated to first-response-wins semantics so handlers can bypass auto-ack by returning `Response` directly.

**Tech Stack:** TypeScript, Vitest, pnpm, existing `generateAck`/`generateNak` from `src/ack.ts`

---

### Task 1: Create `MllpException` — Tests

**Files:**

- Create: `packages/hl7v2-mllp/test/server/exception.test.ts`

**Step 1: Write the tests**

```typescript
import { describe, expect, it } from "vitest";

import { AckCode } from "../../src/ack.js";
import { MllpException } from "../../src/server/exception.js";

describe("MllpException", () => {
  it("creates an exception with code and message", () => {
    const ex = new MllpException("AE", "Missing patient ID");

    expect(ex).toBeInstanceOf(Error);
    expect(ex).toBeInstanceOf(MllpException);
    expect(ex.name).toBe("MllpException");
    expect(ex.code).toBe("AE");
    expect(ex.message).toBe("Missing patient ID");
    expect(ex.errorCondition).toBeUndefined();
  });

  it("creates an exception with code only", () => {
    const ex = new MllpException("AR");

    expect(ex.code).toBe("AR");
    expect(ex.message).toBe("");
  });

  it("stores errorCondition from options", () => {
    const ex = new MllpException("AE", "Bad segment", {
      errorCondition: "207",
    });

    expect(ex.errorCondition).toBe("207");
  });

  it("chains cause from options", () => {
    const cause = new Error("DB connection failed");
    const ex = new MllpException("AR", "Database unavailable", { cause });

    expect(ex.cause).toBe(cause);
  });

  it("works with all non-accept ACK codes", () => {
    for (const code of [AckCode.AE, AckCode.AR, AckCode.CE, AckCode.CR]) {
      const ex = new MllpException(code, `Test ${code}`);
      expect(ex.code).toBe(code);
    }
  });

  it("has proper stack trace", () => {
    const ex = new MllpException("AE", "test error");
    expect(ex.stack).toBeDefined();
    expect(ex.stack).toContain("MllpException");
  });
});
```

**Step 2: Run test to verify it fails**

Run: `cd packages/hl7v2-mllp && pnpm test test/server/exception.test.ts`
Expected: FAIL — cannot resolve `../../src/server/exception.js`

---

### Task 2: Create `MllpException` — Implementation

**Files:**

- Create: `packages/hl7v2-mllp/src/server/exception.ts`

**Step 3: Write the implementation**

````typescript
import type { AckCode } from "../ack.js";

/**
 * Options for constructing an MllpException.
 */
export interface MllpExceptionOptions {
  /** Error condition string for ERR segment */
  errorCondition?: string;
  /** Original cause for error chaining */
  cause?: unknown;
}

/**
 * MLLP transport-level exception — the HL7v2 equivalent of Hono's HTTPException.
 *
 * Any middleware, handler, or library code can throw this to signal an
 * acknowledgment outcome. The `ack()` middleware translates it into the
 * appropriate ACK/NAK response on the wire.
 *
 * @example
 * ```typescript
 * // Application error — message had issues
 * throw new MllpException("AE", "Missing patient ID in PID-3");
 *
 * // Rejection — system unavailable, sender should retry
 * throw new MllpException("AR", "Database unavailable", {
 *   cause: originalError,
 *   errorCondition: "207",
 * });
 * ```
 */
export class MllpException extends Error {
  readonly code: AckCode;
  readonly errorCondition?: string;

  constructor(code: AckCode, message?: string, options?: MllpExceptionOptions) {
    super(message ?? "", { cause: options?.cause });
    this.name = "MllpException";
    this.code = code;
    this.errorCondition = options?.errorCondition;
  }
}
````

**Step 4: Run test to verify it passes**

Run: `cd packages/hl7v2-mllp && pnpm test test/server/exception.test.ts`
Expected: All 6 tests PASS

**Step 5: Commit**

```bash
git add packages/hl7v2-mllp/src/server/exception.ts packages/hl7v2-mllp/test/server/exception.test.ts
git commit -m "feat(mllp): add MllpException transport-level exception class"
```

---

### Task 3: Update `compose()` to first-response-wins — Tests

**Files:**

- Modify: `packages/hl7v2-mllp/test/server/compose.test.ts`

Add this test at the end of the `describe("compose")` block, after the "supports async middleware" test (line 113):

**Step 6: Write the failing test**

Append inside the describe block:

```typescript
it("captures first response only (inner middleware wins)", async () => {
  const outer: Middleware = async (_ctx, next) => {
    await next();
    // Outer tries to set response AFTER inner already did
    return { raw: "MSH|^~\\&||||||||||2.5.1\rMSA|AR|CTL1|Outer" };
  };
  const inner: Middleware = async () => {
    return { raw: "MSH|^~\\&||||||||||2.5.1\rMSA|AA|CTL1|Inner" };
  };

  const ref: { value: Response | undefined } = { value: undefined };
  await compose([outer, inner], ref)(makeCtx());
  // Inner's response should win because it was captured first
  expect(ref.value?.raw).toContain("Inner");
  expect(ref.value?.raw).not.toContain("Outer");
});
```

**Step 7: Run test to verify it fails**

Run: `cd packages/hl7v2-mllp && pnpm test test/server/compose.test.ts`
Expected: FAIL — the new test fails because current compose overwrites with the last response (outer wins)

---

### Task 4: Update `compose()` to first-response-wins — Implementation

**Files:**

- Modify: `packages/hl7v2-mllp/src/server/compose.ts:34-37`

**Step 8: Change the response capture logic**

In `packages/hl7v2-mllp/src/server/compose.ts`, replace lines 34-37:

```typescript
// If middleware returned a response, capture it
if (result && typeof result === "object" && "raw" in result) {
  responseRef.value = result;
}
```

With:

```typescript
// Capture the first response only (innermost middleware wins)
if (
  result &&
  typeof result === "object" &&
  "raw" in result &&
  !responseRef.value
) {
  responseRef.value = result;
}
```

**Step 9: Run all compose tests**

Run: `cd packages/hl7v2-mllp && pnpm test test/server/compose.test.ts`
Expected: All 8 tests PASS (including the new one)

**Step 10: Run full test suite to check for regressions**

Run: `cd packages/hl7v2-mllp && pnpm test`
Expected: All tests pass. The "middleware can short-circuit with response" test in `mllp.test.ts` still passes because short-circuit means next() is never called, so only one response is ever set.

**Step 11: Commit**

```bash
git add packages/hl7v2-mllp/src/server/compose.ts packages/hl7v2-mllp/test/server/compose.test.ts
git commit -m "fix(mllp): change compose to first-response-wins semantics"
```

---

### Task 5: Create middleware folder and `ack()` middleware — Tests

**Files:**

- Create: `packages/hl7v2-mllp/test/middleware/ack.test.ts`

This is the core test file. It uses the same test helpers as `mllp.test.ts`.

**Step 12: Write the tests**

```typescript
// oxlint-disable require-await
import { describe, expect, it } from "vitest";

import { AckCode } from "../../src/ack.js";
import { ack } from "../../src/middleware/ack.js";
import { MllpException } from "../../src/server/exception.js";
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

function toBytes(msg: string): Uint8Array {
  return new TextEncoder().encode(msg);
}

describe("ack middleware", () => {
  describe("original mode (default)", () => {
    it("generates AA when handler completes without error", async () => {
      const app = new Mllp();
      app.use(ack());
      app.on("ADT^A01", async () => {
        // void return — just process
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response).toBeDefined();
      expect(response?.raw).toContain("MSA|AA|MSG001");
    });

    it("generates AE when handler throws MllpException with AE", async () => {
      const app = new Mllp();
      app.use(ack());
      app.on("ADT^A01", async () => {
        throw new MllpException("AE", "Missing patient ID");
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response).toBeDefined();
      expect(response?.raw).toContain("MSA|AE|MSG001|Missing patient ID");
    });

    it("generates AR when handler throws MllpException with AR", async () => {
      const app = new Mllp();
      app.use(ack());
      app.on("ADT^A01", async () => {
        throw new MllpException("AR", "System unavailable");
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|AR|MSG001|System unavailable");
    });

    it("generates AR when handler throws a regular Error", async () => {
      const app = new Mllp();
      app.use(ack());
      app.on("ADT^A01", async () => {
        throw new Error("Database crashed");
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|AR|MSG001|Database crashed");
    });

    it("includes ERR segment when MllpException has errorCondition", async () => {
      const app = new Mllp();
      app.use(ack());
      app.on("ADT^A01", async () => {
        throw new MllpException("AE", "Bad segment", {
          errorCondition: "207",
        });
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("ERR|207");
    });

    it("bypasses auto-ack when handler returns Response directly", async () => {
      const app = new Mllp();
      app.use(ack());
      app.on("ADT^A01", async () => {
        return {
          raw: "MSH|^~\\&||||||||||2.5.1\rMSA|AA|MSG001|Custom response",
        };
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("Custom response");
    });

    it("swaps sender/receiver in ACK MSH", async () => {
      const app = new Mllp();
      app.use(ack());
      app.on("ADT^A01", async () => {
        // void
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      // Original: SendApp|SendFac → RecvApp|RecvFac
      // ACK should swap: RecvApp|RecvFac → SendApp|SendFac
      expect(response?.raw).toContain("RecvApp|RecvFac|SendApp|SendFac");
    });
  });

  describe("enhanced mode", () => {
    it("generates CA when handler completes without error", async () => {
      const app = new Mllp();
      app.use(ack({ mode: "enhanced" }));
      app.on("ADT^A01", async () => {
        // void
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|CA|MSG001");
    });

    it("generates CR when handler throws a regular Error", async () => {
      const app = new Mllp();
      app.use(ack({ mode: "enhanced" }));
      app.on("ADT^A01", async () => {
        throw new Error("Commit failed");
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|CR|MSG001|Commit failed");
    });

    it("uses MllpException code directly even in enhanced mode", async () => {
      const app = new Mllp();
      app.use(ack({ mode: "enhanced" }));
      app.on("ADT^A01", async () => {
        // MllpException code is used as-is, regardless of mode
        throw new MllpException("CE", "Commit error");
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|CE|MSG001|Commit error");
    });
  });

  describe("middleware interaction", () => {
    it("catches errors thrown by other middleware after next()", async () => {
      const app = new Mllp();
      app.use(ack());
      app.use(async (_ctx, next) => {
        await next();
        throw new MllpException("AE", "Post-processing failed");
      });
      app.on("ADT^A01", async () => {
        // handler succeeds
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|AE|MSG001|Post-processing failed");
    });

    it("works with different message types", async () => {
      const app = new Mllp();
      app.use(ack());
      app.on("ORU^R01", async () => {
        // void
      });

      const response = await app.handle(
        SAMPLE_ORU,
        toBytes(SAMPLE_ORU),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|AA|MSG002");
    });

    it("generates AA when no handler matches but no error thrown", async () => {
      const app = new Mllp();
      app.use(ack());
      // No handlers registered — middleware chain completes normally

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      // ack middleware still generates AA since no error occurred
      expect(response?.raw).toContain("MSA|AA|MSG001");
    });

    it("handles non-Error throws gracefully", async () => {
      const app = new Mllp();
      app.use(ack());
      app.on("ADT^A01", async () => {
        throw "string error";
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|AR|MSG001");
    });
  });
});
```

**Step 13: Run test to verify it fails**

Run: `cd packages/hl7v2-mllp && pnpm test test/middleware/ack.test.ts`
Expected: FAIL — cannot resolve `../../src/middleware/ack.js`

---

### Task 6: Create `ack()` middleware — Implementation

**Files:**

- Create: `packages/hl7v2-mllp/src/middleware/ack.ts`
- Create: `packages/hl7v2-mllp/src/middleware/index.ts`

**Step 14: Create `src/middleware/ack.ts`**

````typescript
import { type AckCode, generateAck, generateNak } from "../ack.js";
import { MllpException } from "../server/exception.js";
import type { Middleware, Response } from "../server/types.js";

/**
 * Options for the ack middleware.
 */
export interface AckMiddlewareOptions {
  /**
   * Acknowledgment mode.
   * - `"original"` — uses AA/AE/AR codes (default)
   * - `"enhanced"` — uses CA/CE/CR codes
   */
  mode?: "original" | "enhanced";
}

/**
 * Auto-acknowledgment middleware.
 *
 * Wraps the handler chain and translates outcomes into HL7v2 ACK/NAK responses:
 *
 * | Handler outcome               | ACK code                       |
 * | ----------------------------- | ------------------------------ |
 * | Completes without error       | AA (original) / CA (enhanced)  |
 * | Throws `MllpException`        | Exception's code               |
 * | Throws any other `Error`      | AR (original) / CR (enhanced)  |
 * | Returns `Response` directly   | Bypass — response used as-is   |
 *
 * @example
 * ```typescript
 * const app = new Mllp();
 * app.use(ack());
 *
 * app.on("ADT^A01", async (ctx) => {
 *   await savePatient(ctx.tree);
 *   // void return → AA sent automatically
 * });
 * ```
 */
export const ack = (options?: AckMiddlewareOptions): Middleware => {
  const mode = options?.mode ?? "original";

  const acceptCode: AckCode = mode === "enhanced" ? "CA" : "AA";
  const rejectCode: AckCode = mode === "enhanced" ? "CR" : "AR";

  return async (ctx, next) => {
    try {
      await next();
    } catch (error) {
      if (error instanceof MllpException) {
        return {
          raw: generateAck(ctx.req.raw, {
            code: error.code,
            errorCondition: error.errorCondition,
            textMessage: error.message,
          }),
        } satisfies Response;
      }

      const message = error instanceof Error ? error.message : "Unknown error";
      return {
        raw: generateNak(ctx.req.raw, message, rejectCode),
      } satisfies Response;
    }

    return {
      raw: generateAck(ctx.req.raw, { code: acceptCode }),
    } satisfies Response;
  };
};
````

**Step 15: Create `src/middleware/index.ts`**

```typescript
// biome-ignore-all lint/performance/noBarrelFile: middleware barrel
export { ack } from "./ack.js";
export type { AckMiddlewareOptions } from "./ack.js";
```

**Step 16: Run tests**

Run: `cd packages/hl7v2-mllp && pnpm test test/middleware/ack.test.ts`
Expected: All 13 tests PASS

**Step 17: Run full test suite**

Run: `cd packages/hl7v2-mllp && pnpm test`
Expected: All tests pass — no regressions

**Step 18: Commit**

```bash
git add packages/hl7v2-mllp/src/middleware/ packages/hl7v2-mllp/test/middleware/
git commit -m "feat(mllp): add ack() auto-acknowledgment middleware"
```

---

### Task 7: Export from package index

**Files:**

- Modify: `packages/hl7v2-mllp/src/index.ts`

**Step 19: Add exports**

Add two new sections to `packages/hl7v2-mllp/src/index.ts`.

After the `MLLPError` export (line 31), add the exception export:

```typescript
export { MllpException } from "./server/exception.js";
export type { MllpExceptionOptions } from "./server/exception.js";
```

At the end of the file after line 80, add the middleware section:

```typescript
// -------------
// Middleware
// -------------
export { ack } from "./middleware/index.js";
export type { AckMiddlewareOptions } from "./middleware/ack.js";
```

**Step 20: Verify build and types**

Run: `cd packages/hl7v2-mllp && pnpm build`
Expected: Build succeeds with no errors

**Step 21: Run full test suite one final time**

Run: `cd packages/hl7v2-mllp && pnpm test`
Expected: All tests pass

**Step 22: Format**

Run: `cd packages/hl7v2-mllp && pnpm format`
Expected: No issues or auto-fixed

**Step 23: Commit**

```bash
git add packages/hl7v2-mllp/src/index.ts
git commit -m "feat(mllp): export MllpException and ack middleware from package root"
```

---

## Summary of All Files

| File                            | Action                              |
| ------------------------------- | ----------------------------------- |
| `src/server/exception.ts`       | Create — `MllpException` class      |
| `src/middleware/ack.ts`         | Create — `ack()` factory middleware |
| `src/middleware/index.ts`       | Create — barrel exports             |
| `src/server/compose.ts:34-37`   | Modify — first-response-wins        |
| `src/index.ts`                  | Modify — add exports                |
| `test/server/exception.test.ts` | Create — 6 tests                    |
| `test/server/compose.test.ts`   | Modify — 1 new test                 |
| `test/middleware/ack.test.ts`   | Create — 13 tests                   |

## Verification Checklist

- [ ] `MllpException` extends `Error`, has `code`, `errorCondition`, `cause`
- [ ] `compose()` captures first response only
- [ ] `ack()` generates AA on void handler return
- [ ] `ack()` catches `MllpException` and uses its code
- [ ] `ack()` catches regular `Error` and generates AR
- [ ] `ack()` respects handler `Response` bypass
- [ ] `ack({ mode: "enhanced" })` uses CA/CR codes
- [ ] All new types exported from package root
- [ ] `pnpm build` succeeds
- [ ] `pnpm test` passes (all existing + 20 new tests)
- [ ] `pnpm format` clean
