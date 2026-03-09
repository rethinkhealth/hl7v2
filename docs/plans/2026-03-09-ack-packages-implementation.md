# ACK Packages Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build two packages — `hl7v2-ack` (standalone ACK builder + error classes) and `hl7v2-mllp-ack` (MLLP middleware for auto-ACK).

**Architecture:** `hl7v2-ack` provides `acknowledge()` which takes an original message AST and returns an ACK AST. Error classes (`AckError`, `AckReject`) carry structured ERR data. `hl7v2-mllp-ack` provides `ack()` middleware that wraps handlers and auto-generates ACK responses based on handler outcome (success → AA, AckError → AE, AckReject → AR).

**Tech Stack:** TypeScript, vitest, tsup, hl7v2-builder, hl7v2-to-hl7v2, hl7v2-ast types, hl7v2-util-query, hl7v2-util-message-info

---

## Task 1: Scaffold `hl7v2-ack` package

**Files:**

- Create: `packages/hl7v2-ack/package.json`
- Create: `packages/hl7v2-ack/tsconfig.json`
- Create: `packages/hl7v2-ack/tsup.config.ts`
- Create: `packages/hl7v2-ack/vitest.config.ts`
- Create: `packages/hl7v2-ack/src/index.ts` (empty barrel)

**Step 1: Create package.json**

```json
{
  "name": "@rethinkhealth/hl7v2-ack",
  "version": "0.1.0",
  "description": "HL7v2 acknowledgment message builder and typed error classes",
  "keywords": [
    "health",
    "healthcare",
    "hl7",
    "hl7v2",
    "ack",
    "nodejs",
    "typescript"
  ],
  "homepage": "https://www.rethinkhealth.io/hl7v2/docs",
  "license": "MIT",
  "author": {
    "name": "Melek Somai",
    "email": "melek@rethinkhealth.io"
  },
  "repository": "rethinkhealth/hl7v2.git",
  "files": ["dist"],
  "type": "module",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": "./dist/index.js"
  },
  "publishConfig": {
    "access": "public"
  },
  "scripts": {
    "build": "tsup && tsc --emitDeclarationOnly",
    "check-types": "tsc --noEmit",
    "test": "vitest run",
    "test:coverage": "vitest run --coverage",
    "test:watch": "vitest"
  },
  "dependencies": {
    "@rethinkhealth/hl7v2-ast": "workspace:*",
    "@rethinkhealth/hl7v2-builder": "workspace:*",
    "@rethinkhealth/hl7v2-util-message-info": "workspace:*",
    "@rethinkhealth/hl7v2-util-query": "workspace:*",
    "@rethinkhealth/hl7v2-util-timestamp": "workspace:*"
  },
  "devDependencies": {
    "@rethinkhealth/hl7v2-to-hl7v2": "workspace:*",
    "@rethinkhealth/testing": "workspace:*",
    "@rethinkhealth/tsconfig": "workspace:*",
    "@types/node": "24.10.1",
    "@vitest/coverage-v8": "4.0.18",
    "tsup": "8.5.1",
    "typescript": "^5.9.3",
    "vitest": "4.0.14"
  },
  "engines": {
    "node": ">=18"
  },
  "packageManager": "pnpm@10.14.0"
}
```

**Step 2: Create tsconfig.json**

```json
{
  "extends": "@rethinkhealth/tsconfig/library.json",
  "compilerOptions": {
    "outDir": "dist",
    "strictNullChecks": true
  }
}
```

**Step 3: Create tsup.config.ts**

```typescript
import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
  },
  format: ["esm"],
  sourcemap: true,
  target: "es2022",
});
```

**Step 4: Create vitest.config.ts**

```typescript
import { baseConfig } from "@rethinkhealth/testing";
import { defineConfig, mergeConfig } from "vitest/config";

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      name: "hl7v2-ack",
    },
  })
);
```

**Step 5: Create src/index.ts**

```typescript
export {};
```

**Step 6: Install dependencies**

Run: `pnpm install`

**Step 7: Verify build works**

Run: `cd packages/hl7v2-ack && pnpm build`
Expected: Successful build with no errors

**Step 8: Commit**

```bash
git add packages/hl7v2-ack/
git commit -m "chore: scaffold hl7v2-ack package"
```

---

## Task 2: Implement `AckError` and `AckReject` error classes

**Files:**

- Create: `packages/hl7v2-ack/src/errors.ts`
- Create: `packages/hl7v2-ack/test/errors.test.ts`
- Modify: `packages/hl7v2-ack/src/index.ts`

**Step 1: Write the failing tests**

Create `packages/hl7v2-ack/test/errors.test.ts`:

```typescript
import { AckError, AckReject } from "../src/errors";

describe("AckError", () => {
  it("creates an AE error with default values", () => {
    const error = new AckError("Something went wrong");
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(AckError);
    expect(error.message).toBe("Something went wrong");
    expect(error.code).toBe("AE");
    expect(error.text).toBeUndefined();
    expect(error.errorCode).toBeUndefined();
    expect(error.severity).toBeUndefined();
    expect(error.location).toBeUndefined();
    expect(error.userMessage).toBeUndefined();
  });

  it("creates an AE error with all ERR fields", () => {
    const error = new AckError("Validation failed", {
      text: "Missing required field",
      errorCode: "207",
      severity: "E",
      location: "PID^1^3",
      userMessage: "Patient name is required",
    });
    expect(error.code).toBe("AE");
    expect(error.text).toBe("Missing required field");
    expect(error.errorCode).toBe("207");
    expect(error.severity).toBe("E");
    expect(error.location).toBe("PID^1^3");
    expect(error.userMessage).toBe("Patient name is required");
  });

  it("has the correct name property", () => {
    const error = new AckError("test");
    expect(error.name).toBe("AckError");
  });
});

describe("AckReject", () => {
  it("creates an AR error with default values", () => {
    const error = new AckReject("Rejected");
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(AckReject);
    expect(error.message).toBe("Rejected");
    expect(error.code).toBe("AR");
  });

  it("creates an AR error with ERR fields", () => {
    const error = new AckReject("Unsupported", {
      errorCode: "200",
      severity: "E",
      userMessage: "Message type not supported",
    });
    expect(error.code).toBe("AR");
    expect(error.errorCode).toBe("200");
    expect(error.severity).toBe("E");
    expect(error.userMessage).toBe("Message type not supported");
  });

  it("has the correct name property", () => {
    const error = new AckReject("test");
    expect(error.name).toBe("AckReject");
  });
});
```

**Step 2: Run tests to verify they fail**

Run: `cd packages/hl7v2-ack && pnpm test`
Expected: FAIL — cannot resolve `../src/errors`

**Step 3: Implement the error classes**

Create `packages/hl7v2-ack/src/errors.ts`:

```typescript
export interface AckErrorOptions {
  text?: string;
  errorCode?: string;
  severity?: string;
  location?: string;
  userMessage?: string;
}

export class AckError extends Error {
  readonly code = "AE" as const;
  readonly text: string | undefined;
  readonly errorCode: string | undefined;
  readonly severity: string | undefined;
  readonly location: string | undefined;
  readonly userMessage: string | undefined;

  constructor(message: string, options?: AckErrorOptions) {
    super(message);
    this.name = "AckError";
    this.text = options?.text;
    this.errorCode = options?.errorCode;
    this.severity = options?.severity;
    this.location = options?.location;
    this.userMessage = options?.userMessage;
  }
}

export class AckReject extends Error {
  readonly code = "AR" as const;
  readonly text: string | undefined;
  readonly errorCode: string | undefined;
  readonly severity: string | undefined;
  readonly location: string | undefined;
  readonly userMessage: string | undefined;

  constructor(message: string, options?: AckErrorOptions) {
    super(message);
    this.name = "AckReject";
    this.text = options?.text;
    this.errorCode = options?.errorCode;
    this.severity = options?.severity;
    this.location = options?.location;
    this.userMessage = options?.userMessage;
  }
}
```

**Step 4: Update barrel export**

Modify `packages/hl7v2-ack/src/index.ts`:

```typescript
export { AckError, AckReject } from "./errors";
export type { AckErrorOptions } from "./errors";
```

**Step 5: Run tests to verify they pass**

Run: `cd packages/hl7v2-ack && pnpm test`
Expected: All tests PASS

**Step 6: Commit**

```bash
git add packages/hl7v2-ack/src/errors.ts packages/hl7v2-ack/test/errors.test.ts packages/hl7v2-ack/src/index.ts
git commit -m "feat(hl7v2-ack): add AckError and AckReject error classes"
```

---

## Task 3: Implement predefined error subclasses

**Files:**

- Create: `packages/hl7v2-ack/src/predefined.ts`
- Create: `packages/hl7v2-ack/test/predefined.test.ts`
- Modify: `packages/hl7v2-ack/src/index.ts`

**Step 1: Write the failing tests**

Create `packages/hl7v2-ack/test/predefined.test.ts`:

```typescript
import { AckError, AckReject } from "../src/errors";
import {
  DuplicateMessageError,
  InternalError,
  UnknownPatientError,
  UnsupportedMessageTypeError,
} from "../src/predefined";

describe("UnknownPatientError", () => {
  it("extends AckError with errorCode 204", () => {
    const error = new UnknownPatientError("Patient 12345 not found");
    expect(error).toBeInstanceOf(AckError);
    expect(error.code).toBe("AE");
    expect(error.errorCode).toBe("204");
    expect(error.severity).toBe("E");
    expect(error.message).toBe("Patient 12345 not found");
    expect(error.name).toBe("UnknownPatientError");
  });

  it("allows overriding optional fields", () => {
    const error = new UnknownPatientError("Not found", {
      location: "PID^1^3",
      userMessage: "Check patient ID",
    });
    expect(error.errorCode).toBe("204");
    expect(error.location).toBe("PID^1^3");
    expect(error.userMessage).toBe("Check patient ID");
  });
});

describe("DuplicateMessageError", () => {
  it("extends AckError with errorCode 205", () => {
    const error = new DuplicateMessageError("Duplicate MSG001");
    expect(error).toBeInstanceOf(AckError);
    expect(error.code).toBe("AE");
    expect(error.errorCode).toBe("205");
    expect(error.severity).toBe("E");
    expect(error.name).toBe("DuplicateMessageError");
  });
});

describe("InternalError", () => {
  it("extends AckError with errorCode 207", () => {
    const error = new InternalError("Database timeout");
    expect(error).toBeInstanceOf(AckError);
    expect(error.code).toBe("AE");
    expect(error.errorCode).toBe("207");
    expect(error.severity).toBe("E");
    expect(error.name).toBe("InternalError");
  });
});

describe("UnsupportedMessageTypeError", () => {
  it("extends AckReject with errorCode 200", () => {
    const error = new UnsupportedMessageTypeError("ADT^Z99 not supported");
    expect(error).toBeInstanceOf(AckReject);
    expect(error.code).toBe("AR");
    expect(error.errorCode).toBe("200");
    expect(error.severity).toBe("E");
    expect(error.name).toBe("UnsupportedMessageTypeError");
  });
});
```

**Step 2: Run tests to verify they fail**

Run: `cd packages/hl7v2-ack && pnpm test`
Expected: FAIL — cannot resolve `../src/predefined`

**Step 3: Implement predefined errors**

Create `packages/hl7v2-ack/src/predefined.ts`:

```typescript
import { AckError, AckReject } from "./errors";
import type { AckErrorOptions } from "./errors";

type PredefinedOptions = Omit<AckErrorOptions, "errorCode" | "severity">;

export class UnknownPatientError extends AckError {
  constructor(message: string, options?: PredefinedOptions) {
    super(message, { ...options, errorCode: "204", severity: "E" });
    this.name = "UnknownPatientError";
  }
}

export class DuplicateMessageError extends AckError {
  constructor(message: string, options?: PredefinedOptions) {
    super(message, { ...options, errorCode: "205", severity: "E" });
    this.name = "DuplicateMessageError";
  }
}

export class InternalError extends AckError {
  constructor(message: string, options?: PredefinedOptions) {
    super(message, { ...options, errorCode: "207", severity: "E" });
    this.name = "InternalError";
  }
}

export class UnsupportedMessageTypeError extends AckReject {
  constructor(message: string, options?: PredefinedOptions) {
    super(message, { ...options, errorCode: "200", severity: "E" });
    this.name = "UnsupportedMessageTypeError";
  }
}
```

**Step 4: Update barrel export**

Modify `packages/hl7v2-ack/src/index.ts` — add these exports:

```typescript
export { AckError, AckReject } from "./errors";
export type { AckErrorOptions } from "./errors";
export {
  DuplicateMessageError,
  InternalError,
  UnknownPatientError,
  UnsupportedMessageTypeError,
} from "./predefined";
```

**Step 5: Run tests to verify they pass**

Run: `cd packages/hl7v2-ack && pnpm test`
Expected: All tests PASS

**Step 6: Commit**

```bash
git add packages/hl7v2-ack/src/predefined.ts packages/hl7v2-ack/test/predefined.test.ts packages/hl7v2-ack/src/index.ts
git commit -m "feat(hl7v2-ack): add predefined error subclasses"
```

---

## Task 4: Implement `acknowledge()` — AA (success) path

**Files:**

- Create: `packages/hl7v2-ack/src/acknowledge.ts`
- Create: `packages/hl7v2-ack/test/acknowledge.test.ts`
- Modify: `packages/hl7v2-ack/src/index.ts`

**Context:** The `acknowledge()` function takes an original message's AST, extracts MSH fields (controlId, version, triggerEvent), and builds an ACK message AST. We use `@rethinkhealth/hl7v2-util-message-info` and `@rethinkhealth/hl7v2-util-query` to extract fields — same approach as `packages/hl7v2-mllp/src/server/context.ts`.

**Step 1: Write the failing tests**

Create `packages/hl7v2-ack/test/acknowledge.test.ts`:

```typescript
import { m, s, f, c } from "@rethinkhealth/hl7v2-builder";
import { toHl7v2 } from "@rethinkhealth/hl7v2-to-hl7v2";
import { acknowledge } from "../src/acknowledge";

/**
 * Helper: build a minimal ADT^A01 message AST.
 * MSH fields (1-indexed per HL7 spec):
 *   MSH-1: | (field separator)
 *   MSH-2: ^~\& (encoding characters)
 *   MSH-3: SendApp (sending application)
 *   MSH-4: SendFac (sending facility)
 *   MSH-5: RecvApp (receiving application)
 *   MSH-6: RecvFac (receiving facility)
 *   MSH-7: 20240101120000 (date/time)
 *   MSH-8: (security - empty)
 *   MSH-9: ADT^A01^ADT_A01 (message type)
 *   MSH-10: MSG001 (control ID)
 *   MSH-11: P (processing ID)
 *   MSH-12: 2.5.1 (version)
 */
function buildSampleAdt() {
  return m(
    s(
      "MSH",
      f("|"),
      f("^~\\&"),
      f("SendApp"),
      f("SendFac"),
      f("RecvApp"),
      f("RecvFac"),
      f("20240101120000"),
      f(""),
      f(c("ADT"), c("A01"), c("ADT_A01")),
      f("MSG001"),
      f("P"),
      f("2.5.1")
    ),
    s("PID", f("1"), f(""), f("12345"))
  );
}

describe("acknowledge", () => {
  describe("AA (success)", () => {
    it("builds an ACK with AA code when no error is provided", () => {
      const tree = buildSampleAdt();
      const ack = acknowledge({
        tree,
        sending: { application: "AckApp", facility: "AckFac" },
      });

      expect(ack.type).toBe("root");
      const raw = toHl7v2(ack);
      const segments = raw.split("\r");

      // MSH segment
      expect(segments[0]).toMatch(/^MSH\|/);
      // Sending app/facility in MSH-3/MSH-4
      expect(segments[0]).toContain("|AckApp|AckFac|");
      // Original sending app/facility become receiving in MSH-5/MSH-6
      expect(segments[0]).toContain("|SendApp|SendFac|");
      // Message type is ACK^A01
      expect(segments[0]).toMatch(/\|ACK\^A01\|/);
      // Version preserved
      expect(segments[0]).toMatch(/\|2\.5\.1$/);

      // MSA segment
      expect(segments[1]).toMatch(/^MSA\|AA\|MSG001$/);
    });

    it("echoes the original trigger event in the ACK MSH-9", () => {
      const tree = m(
        s(
          "MSH",
          f("|"),
          f("^~\\&"),
          f("App"),
          f("Fac"),
          f(""),
          f(""),
          f("20240101"),
          f(""),
          f(c("ORM"), c("O01")),
          f("CTL999"),
          f("P"),
          f("2.5.1")
        )
      );

      const ack = acknowledge({
        tree,
        sending: { application: "Server", facility: "Fac" },
      });
      const raw = toHl7v2(ack);
      expect(raw).toMatch(/\|ACK\^O01\|/);
      expect(raw).toMatch(/\|AA\|CTL999$/);
    });

    it("handles missing trigger event gracefully", () => {
      const tree = m(
        s(
          "MSH",
          f("|"),
          f("^~\\&"),
          f("App"),
          f("Fac"),
          f(""),
          f(""),
          f("20240101"),
          f(""),
          f(c("ADT")),
          f("CTL100"),
          f("P"),
          f("2.3")
        )
      );

      const ack = acknowledge({
        tree,
        sending: { application: "S", facility: "F" },
      });
      const raw = toHl7v2(ack);
      expect(raw).toMatch(/\|ACK\|/);
      expect(raw).toMatch(/\|2\.3$/);
    });

    it("only produces MSH and MSA segments for success", () => {
      const tree = buildSampleAdt();
      const ack = acknowledge({
        tree,
        sending: { application: "S", facility: "F" },
      });
      const raw = toHl7v2(ack);
      const segments = raw.split("\r");
      expect(segments).toHaveLength(2);
      expect(segments[0]).toMatch(/^MSH\|/);
      expect(segments[1]).toMatch(/^MSA\|/);
    });
  });
});
```

**Step 2: Run tests to verify they fail**

Run: `cd packages/hl7v2-ack && pnpm test`
Expected: FAIL — cannot resolve `../src/acknowledge`

**Step 3: Implement acknowledge() for the AA path**

Create `packages/hl7v2-ack/src/acknowledge.ts`:

```typescript
import type { Root } from "@rethinkhealth/hl7v2-ast";
import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import {
  getTriggerEvent,
  getVersion,
} from "@rethinkhealth/hl7v2-util-message-info";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { Timestamp } from "@rethinkhealth/hl7v2-util-timestamp";

import type { AckError } from "./errors";
import type { AckReject } from "./errors";

export interface SendingInfo {
  application: string;
  facility: string;
}

export interface AcknowledgeOptions {
  tree: Root;
  sending: SendingInfo;
  error?: AckError | AckReject;
}

export function acknowledge(options: AcknowledgeOptions): Root {
  const { tree, sending, error } = options;

  const controlId = value(tree, "MSH-10")?.value ?? "";
  const version = getVersion(tree) ?? "2.5.1";
  const triggerEvent = getTriggerEvent(tree) ?? "";
  const sendingApp = value(tree, "MSH-3")?.value ?? "";
  const sendingFac = value(tree, "MSH-4")?.value ?? "";

  const now = Timestamp.now();
  const code = error?.code ?? "AA";

  const messageTypeField = triggerEvent
    ? f(c("ACK"), c(triggerEvent))
    : f("ACK");

  const msaFields = [f(code), f(controlId)];
  if (error?.text) {
    msaFields.push(f(error.text));
  }

  const segments = [
    s(
      "MSH",
      f("|"),
      f("^~\\&"),
      f(sending.application),
      f(sending.facility),
      f(sendingApp),
      f(sendingFac),
      f(now.toString()),
      f(""),
      messageTypeField,
      f(`ACK${controlId}`),
      f("P"),
      f(version)
    ),
    s("MSA", ...msaFields),
  ];

  if (error?.errorCode) {
    const errFields = [
      f(""),
      f(error.location ?? ""),
      f(error.errorCode),
      f(error.severity ?? "E"),
    ];

    // ERR-5 through ERR-7 are empty, ERR-8 is userMessage
    if (error.userMessage) {
      errFields.push(f(""), f(""), f(""), f(error.userMessage));
    }

    segments.push(s("ERR", ...errFields));
  }

  return m(...segments);
}
```

**Step 4: Update barrel export**

Modify `packages/hl7v2-ack/src/index.ts`:

```typescript
export { acknowledge } from "./acknowledge";
export type { AcknowledgeOptions, SendingInfo } from "./acknowledge";
export { AckError, AckReject } from "./errors";
export type { AckErrorOptions } from "./errors";
export {
  DuplicateMessageError,
  InternalError,
  UnknownPatientError,
  UnsupportedMessageTypeError,
} from "./predefined";
```

**Step 5: Run tests to verify they pass**

Run: `cd packages/hl7v2-ack && pnpm test`
Expected: All tests PASS

**Step 6: Commit**

```bash
git add packages/hl7v2-ack/src/acknowledge.ts packages/hl7v2-ack/test/acknowledge.test.ts packages/hl7v2-ack/src/index.ts
git commit -m "feat(hl7v2-ack): implement acknowledge() for AA success path"
```

---

## Task 5: Implement `acknowledge()` — AE/AR with ERR segment

**Files:**

- Modify: `packages/hl7v2-ack/test/acknowledge.test.ts`

**Step 1: Add failing tests for error paths**

Append to `packages/hl7v2-ack/test/acknowledge.test.ts`, inside the outer `describe("acknowledge")`:

```typescript
describe("AE (error)", () => {
  it("builds an ACK with AE code and ERR segment from AckError", () => {
    const tree = buildSampleAdt();
    const error = new AckError("Validation failed", {
      text: "Missing patient name",
      errorCode: "207",
      severity: "E",
      location: "PID^1^3",
      userMessage: "Patient name is required",
    });

    const ack = acknowledge({
      tree,
      sending: { application: "S", facility: "F" },
      error,
    });

    const raw = toHl7v2(ack);
    const segments = raw.split("\r");

    expect(segments).toHaveLength(3);
    expect(segments[1]).toMatch(/^MSA\|AE\|MSG001\|Missing patient name$/);
    expect(segments[2]).toMatch(/^ERR\|/);
    // ERR-2: location, ERR-3: error code, ERR-4: severity
    expect(segments[2]).toContain("|PID^1^3|207|E|");
    // ERR-8: user message
    expect(segments[2]).toContain("|Patient name is required");
  });

  it("builds AE without ERR when no errorCode provided", () => {
    const tree = buildSampleAdt();
    const error = new AckError("Something failed", {
      text: "Generic error",
    });

    const ack = acknowledge({
      tree,
      sending: { application: "S", facility: "F" },
      error,
    });

    const raw = toHl7v2(ack);
    const segments = raw.split("\r");

    expect(segments).toHaveLength(2);
    expect(segments[1]).toBe("MSA|AE|MSG001|Generic error");
  });
});

describe("AR (reject)", () => {
  it("builds an ACK with AR code and ERR segment from AckReject", () => {
    const tree = buildSampleAdt();
    const error = new AckReject("Unsupported", {
      text: "Not supported",
      errorCode: "200",
      severity: "E",
      userMessage: "This message type is not supported",
    });

    const ack = acknowledge({
      tree,
      sending: { application: "S", facility: "F" },
      error,
    });

    const raw = toHl7v2(ack);
    const segments = raw.split("\r");

    expect(segments).toHaveLength(3);
    expect(segments[1]).toMatch(/^MSA\|AR\|MSG001\|Not supported$/);
    expect(segments[2]).toMatch(/^ERR\|/);
  });
});

describe("predefined errors", () => {
  it("works with UnknownPatientError", () => {
    const tree = buildSampleAdt();
    const error = new UnknownPatientError("Patient not found");

    const ack = acknowledge({
      tree,
      sending: { application: "S", facility: "F" },
      error,
    });

    const raw = toHl7v2(ack);
    const segments = raw.split("\r");
    expect(segments).toHaveLength(3);
    expect(segments[1]).toMatch(/^MSA\|AE\|MSG001$/);
    expect(segments[2]).toContain("|204|E|");
  });

  it("works with UnsupportedMessageTypeError", () => {
    const tree = buildSampleAdt();
    const error = new UnsupportedMessageTypeError("Not supported");

    const ack = acknowledge({
      tree,
      sending: { application: "S", facility: "F" },
      error,
    });

    const raw = toHl7v2(ack);
    expect(raw).toContain("MSA|AR|MSG001");
    expect(raw).toContain("|200|E|");
  });
});
```

Add the missing imports at the top of the test file:

```typescript
import { AckError, AckReject } from "../src/errors";
import {
  UnknownPatientError,
  UnsupportedMessageTypeError,
} from "../src/predefined";
```

**Step 2: Run tests to verify the new tests pass**

Run: `cd packages/hl7v2-ack && pnpm test`
Expected: All tests PASS (the implementation from Task 4 already handles errors)

**Step 3: Commit**

```bash
git add packages/hl7v2-ack/test/acknowledge.test.ts
git commit -m "test(hl7v2-ack): add tests for AE/AR error paths and predefined errors"
```

---

## Task 6: Scaffold `hl7v2-mllp-ack` package

**Files:**

- Create: `packages/hl7v2-mllp-ack/package.json`
- Create: `packages/hl7v2-mllp-ack/tsconfig.json`
- Create: `packages/hl7v2-mllp-ack/tsup.config.ts`
- Create: `packages/hl7v2-mllp-ack/vitest.config.ts`
- Create: `packages/hl7v2-mllp-ack/src/index.ts` (empty barrel)

**Step 1: Create package.json**

```json
{
  "name": "@rethinkhealth/hl7v2-mllp-ack",
  "version": "0.1.0",
  "description": "MLLP middleware for automatic HL7v2 acknowledgment generation",
  "keywords": [
    "health",
    "healthcare",
    "hl7",
    "hl7v2",
    "ack",
    "mllp",
    "middleware",
    "nodejs",
    "typescript"
  ],
  "homepage": "https://www.rethinkhealth.io/hl7v2/docs",
  "license": "MIT",
  "author": {
    "name": "Melek Somai",
    "email": "melek@rethinkhealth.io"
  },
  "repository": "rethinkhealth/hl7v2.git",
  "files": ["dist"],
  "type": "module",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": "./dist/index.js"
  },
  "publishConfig": {
    "access": "public"
  },
  "scripts": {
    "build": "tsup && tsc --emitDeclarationOnly",
    "check-types": "tsc --noEmit",
    "test": "vitest run",
    "test:coverage": "vitest run --coverage",
    "test:watch": "vitest"
  },
  "dependencies": {
    "@rethinkhealth/hl7v2-ack": "workspace:*",
    "@rethinkhealth/hl7v2-to-hl7v2": "workspace:*"
  },
  "devDependencies": {
    "@rethinkhealth/hl7v2-ast": "workspace:*",
    "@rethinkhealth/hl7v2-builder": "workspace:*",
    "@rethinkhealth/hl7v2-mllp": "workspace:*",
    "@rethinkhealth/testing": "workspace:*",
    "@rethinkhealth/tsconfig": "workspace:*",
    "@types/node": "24.10.1",
    "@vitest/coverage-v8": "4.0.18",
    "tsup": "8.5.1",
    "typescript": "^5.9.3",
    "vitest": "4.0.14"
  },
  "engines": {
    "node": ">=18"
  },
  "packageManager": "pnpm@10.14.0"
}
```

**Step 2: Create tsconfig.json**

```json
{
  "extends": "@rethinkhealth/tsconfig/library.json",
  "compilerOptions": {
    "outDir": "dist",
    "strictNullChecks": true
  }
}
```

**Step 3: Create tsup.config.ts**

```typescript
import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
  },
  format: ["esm"],
  sourcemap: true,
  target: "es2022",
});
```

**Step 4: Create vitest.config.ts**

```typescript
import { baseConfig } from "@rethinkhealth/testing";
import { defineConfig, mergeConfig } from "vitest/config";

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      name: "hl7v2-mllp-ack",
    },
  })
);
```

**Step 5: Create src/index.ts**

```typescript
export {};
```

**Step 6: Install dependencies**

Run: `pnpm install`

**Step 7: Verify build works**

Run: `cd packages/hl7v2-mllp-ack && pnpm build`
Expected: Successful build

**Step 8: Commit**

```bash
git add packages/hl7v2-mllp-ack/
git commit -m "chore: scaffold hl7v2-mllp-ack package"
```

---

## Task 7: Implement `ack()` middleware

**Files:**

- Create: `packages/hl7v2-mllp-ack/src/ack.ts`
- Create: `packages/hl7v2-mllp-ack/test/ack.test.ts`
- Modify: `packages/hl7v2-mllp-ack/src/index.ts`

**Context:** The middleware tests use `Mllp` from `@rethinkhealth/hl7v2-mllp` to set up a real app and call `app.handle()` directly — same pattern as `packages/hl7v2-mllp/test/server/mllp.test.ts`. No TCP needed.

**Step 1: Write the failing tests**

Create `packages/hl7v2-mllp-ack/test/ack.test.ts`:

```typescript
import {
  AckError,
  AckReject,
  InternalError,
  UnknownPatientError,
  UnsupportedMessageTypeError,
} from "@rethinkhealth/hl7v2-ack";
import { Mllp } from "@rethinkhealth/hl7v2-mllp";
import type { ConnectionInfo } from "@rethinkhealth/hl7v2-mllp";
import { ack } from "../src/ack";

const SAMPLE_ADT = [
  "MSH|^~\\&|SendApp|SendFac|RecvApp|RecvFac|20240101120000||ADT^A01^ADT_A01|MSG001|P|2.5.1",
  "EVN|A01|20240101120000",
  "PID|1||12345^^^MRN||Doe^John",
].join("\r");

const MOCK_CONNECTION: ConnectionInfo = {
  localPort: 2575,
  remoteAddress: "127.0.0.1",
  remotePort: 12345,
  secure: false,
};

function toBytes(msg: string): Uint8Array {
  return new TextEncoder().encode(msg);
}

describe("ack middleware", () => {
  describe("AA (success)", () => {
    it("sends AA when handler completes without error or response", async () => {
      const app = new Mllp();
      app.use(ack({ sending: { application: "AckApp", facility: "AckFac" } }));
      app.on("ADT^A01", () => {
        // no return, no throw — success
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );

      expect(response).toBeDefined();
      expect(response!.raw).toContain("MSA|AA|MSG001");
      expect(response!.raw).toContain("|AckApp|AckFac|");
      expect(response!.raw).toContain("|ACK^A01|");
    });

    it("sends AA when handler returns undefined", async () => {
      const app = new Mllp();
      app.use(ack({ sending: { application: "S", facility: "F" } }));
      app.on("ADT^A01", () => undefined);

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );

      expect(response).toBeDefined();
      expect(response!.raw).toContain("MSA|AA|MSG001");
    });
  });

  describe("AE (error)", () => {
    it("sends AE when handler throws AckError", async () => {
      const app = new Mllp();
      app.use(ack({ sending: { application: "S", facility: "F" } }));
      app.on("ADT^A01", () => {
        throw new AckError("Validation failed", {
          text: "Missing patient name",
          errorCode: "207",
          severity: "E",
          userMessage: "Patient name is required",
        });
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );

      expect(response).toBeDefined();
      expect(response!.raw).toContain("MSA|AE|MSG001|Missing patient name");
      expect(response!.raw).toContain("ERR|");
      expect(response!.raw).toContain("|207|E|");
    });

    it("sends AE with predefined UnknownPatientError", async () => {
      const app = new Mllp();
      app.use(ack({ sending: { application: "S", facility: "F" } }));
      app.on("ADT^A01", () => {
        throw new UnknownPatientError("Patient 12345 not found");
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );

      expect(response).toBeDefined();
      expect(response!.raw).toContain("MSA|AE|MSG001");
      expect(response!.raw).toContain("|204|E|");
    });
  });

  describe("AR (reject)", () => {
    it("sends AR when handler throws AckReject", async () => {
      const app = new Mllp();
      app.use(ack({ sending: { application: "S", facility: "F" } }));
      app.on("ADT^A01", () => {
        throw new AckReject("Not supported", {
          text: "Unsupported type",
          errorCode: "200",
          severity: "E",
        });
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );

      expect(response).toBeDefined();
      expect(response!.raw).toContain("MSA|AR|MSG001|Unsupported type");
      expect(response!.raw).toContain("ERR|");
    });

    it("sends AR with predefined UnsupportedMessageTypeError", async () => {
      const app = new Mllp();
      app.use(ack({ sending: { application: "S", facility: "F" } }));
      app.on("ADT^A01", () => {
        throw new UnsupportedMessageTypeError("ADT^A01 not handled");
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );

      expect(response).toBeDefined();
      expect(response!.raw).toContain("MSA|AR|MSG001");
    });
  });

  describe("unknown errors", () => {
    it("wraps unknown Error in InternalError and sends AE", async () => {
      const app = new Mllp();
      app.use(ack({ sending: { application: "S", facility: "F" } }));
      app.on("ADT^A01", () => {
        throw new Error("Database connection failed");
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );

      expect(response).toBeDefined();
      expect(response!.raw).toContain("MSA|AE|MSG001");
      expect(response!.raw).toContain("|207|E|");
    });

    it("wraps non-Error throws in InternalError", async () => {
      const app = new Mllp();
      app.use(ack({ sending: { application: "S", facility: "F" } }));
      app.on("ADT^A01", () => {
        throw "string error";
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );

      expect(response).toBeDefined();
      expect(response!.raw).toContain("MSA|AE|MSG001");
    });
  });

  describe("passthrough", () => {
    it("does not override existing response set by handler", async () => {
      const app = new Mllp();
      app.use(ack({ sending: { application: "S", facility: "F" } }));
      app.on("ADT^A01", () => ({
        raw: "MSH|^~\\&||||||||||2.5.1\rMSA|AA|MSG001|Custom",
      }));

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );

      expect(response).toBeDefined();
      expect(response!.raw).toBe(
        "MSH|^~\\&||||||||||2.5.1\rMSA|AA|MSG001|Custom"
      );
    });
  });

  describe("middleware ordering", () => {
    it("works with other middleware in the chain", async () => {
      const app = new Mllp();
      const order: string[] = [];

      app.use(ack({ sending: { application: "S", facility: "F" } }));
      app.use(async (_ctx, next) => {
        order.push("before");
        await next();
        order.push("after");
      });
      app.on("ADT^A01", () => {
        order.push("handler");
      });

      await app.handle(SAMPLE_ADT, toBytes(SAMPLE_ADT), MOCK_CONNECTION);

      expect(order).toEqual(["before", "handler", "after"]);
    });
  });
});
```

**Step 2: Run tests to verify they fail**

Run: `cd packages/hl7v2-mllp-ack && pnpm test`
Expected: FAIL — cannot resolve `../src/ack`

**Step 3: Implement the middleware**

Create `packages/hl7v2-mllp-ack/src/ack.ts`:

```typescript
import {
  AckError,
  AckReject,
  InternalError,
  acknowledge,
} from "@rethinkhealth/hl7v2-ack";
import type { SendingInfo } from "@rethinkhealth/hl7v2-ack";
import { toHl7v2 } from "@rethinkhealth/hl7v2-to-hl7v2";

interface AckMiddlewareOptions {
  sending: SendingInfo;
}

type AckMiddleware = (
  ctx: {
    tree: import("@rethinkhealth/hl7v2-ast").Root;
    res: { raw: string } | undefined;
  },
  next: () => Promise<void>
) => Promise<void>;

export function ack(options: AckMiddlewareOptions): AckMiddleware {
  const { sending } = options;

  return async (ctx, next) => {
    try {
      await next();

      // If handler already set a response, pass through
      if (ctx.res) {
        return;
      }

      // No error, no response — success (AA)
      const tree = acknowledge({ tree: ctx.tree, sending });
      ctx.res = { raw: toHl7v2(tree) };
    } catch (thrown: unknown) {
      const error = toAckError(thrown);
      const tree = acknowledge({ tree: ctx.tree, sending, error });
      ctx.res = { raw: toHl7v2(tree) };
    }
  };
}

function toAckError(thrown: unknown): AckError | AckReject {
  if (thrown instanceof AckError || thrown instanceof AckReject) {
    return thrown;
  }

  if (thrown instanceof Error) {
    return new InternalError(thrown.message);
  }

  return new InternalError(String(thrown));
}
```

**Step 4: Update barrel export**

Modify `packages/hl7v2-mllp-ack/src/index.ts`:

```typescript
export { ack } from "./ack";
```

**Step 5: Run tests to verify they pass**

Run: `cd packages/hl7v2-mllp-ack && pnpm test`
Expected: All tests PASS

**Step 6: Run format**

Run: `pnpm format`

**Step 7: Commit**

```bash
git add packages/hl7v2-mllp-ack/src/ack.ts packages/hl7v2-mllp-ack/test/ack.test.ts packages/hl7v2-mllp-ack/src/index.ts
git commit -m "feat(hl7v2-mllp-ack): implement ack() middleware"
```

---

## Task 8: Build verification and type checking

**Files:** None (verification only)

**Step 1: Run full build**

Run: `pnpm build`
Expected: All packages build successfully

**Step 2: Run type checking**

Run: `pnpm check-types`
Expected: No type errors

**Step 3: Run all tests**

Run: `pnpm test`
Expected: All tests pass across all packages

**Step 4: Run linting**

Run: `pnpm lint`
Expected: No lint errors

**Step 5: Commit any fixes if needed**

If format/lint produced changes:

```bash
git add -A
git commit -m "chore: fix formatting across ack packages"
```
