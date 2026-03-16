# Centralized CodSpeed Benchmarks Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Separate CI-tracked CodSpeed benchmarks from local dev benchmarks by creating a dedicated root-level benchmark suite that exercises real user paths.

**Architecture:** A root `benchmarks/` folder contains a focused set of end-to-end benchmarks with its own `vitest.config.ts` and `@codspeed/vitest-plugin`. These are the only benchmarks reported to CodSpeed. Package-level `bench/` files remain as local dev tools with no CodSpeed dependency. The GHA workflow runs `vitest bench --run` directly from the `benchmarks/` folder — no turbo, no env var passthrough needed.

**Tech Stack:** vitest 4.0.18, @codspeed/vitest-plugin ^5.2.0, @rethinkhealth/hl7v2 (unified pipeline), @rethinkhealth/hl7v2-parser, @rethinkhealth/hl7v2-mllp

---

## File Structure

### New files

| File                           | Responsibility                                                                       |
| ------------------------------ | ------------------------------------------------------------------------------------ |
| `benchmarks/vitest.config.ts`  | Standalone vitest config with CodSpeed plugin — isolated from shared testing config  |
| `benchmarks/pipeline.bench.ts` | End-to-end unified pipeline benchmarks (parse → structure → decode → lint → jsonify) |
| `benchmarks/parser.bench.ts`   | Parser benchmarks at various message sizes                                           |
| `benchmarks/mllp.bench.ts`     | MLLP `handle()` routing and middleware benchmarks                                    |
| `benchmarks/tsconfig.json`     | TypeScript config for the benchmarks folder                                          |

### Modified files

| File                                       | Change                                                 |
| ------------------------------------------ | ------------------------------------------------------ |
| `packages/testing/src/vitest.config.ts`    | Remove `codspeedPlugin` import and `plugins` array     |
| `packages/testing/package.json`            | Remove `@codspeed/vitest-plugin` from dependencies     |
| `packages/testing/tsup.config.ts`          | Remove `@codspeed/vitest-plugin` from external array   |
| `package.json`                             | Add `bench:ci` script pointing to benchmarks folder    |
| `.github/workflows/benchmarks.yml`         | Change `run` to use `bench:ci` instead of `pnpm bench` |
| `turbo.json`                               | Remove `passThroughEnv` from bench task                |
| `packages/hl7v2-mllp/vitest.config.ts`     | Remove `globalSetup` for bench (no longer needed)      |
| `packages/hl7v2-mllp/bench/serve.bench.ts` | Revert to self-contained server setup in `beforeAll`   |

### Deleted files

| File                                        | Reason                                                       |
| ------------------------------------------- | ------------------------------------------------------------ |
| `packages/hl7v2-mllp/bench/global-setup.ts` | No longer needed — serve benchmarks manage their own servers |
| `packages/hl7v2-mllp/.bench-ports.json`     | Artifact of global-setup approach                            |

---

## Chunk 1: Revert CodSpeed from shared testing config

### Task 1: Remove CodSpeed from `@rethinkhealth/testing`

**Files:**

- Modify: `packages/testing/src/vitest.config.ts`
- Modify: `packages/testing/package.json`
- Modify: `packages/testing/tsup.config.ts`

- [ ] **Step 1: Remove CodSpeed plugin from vitest config**

```typescript
// packages/testing/src/vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    benchmark: {
      exclude: ["node_modules/**", "dist/**"],
    },
    coverage: {
      reporter: ["text", "html", "json"],
    },
    environment: "node",
    exclude: ["node_modules", "dist"],
    globals: true,
    include: ["**/*.test.ts", "**/*.test.tsx"],
  },
});
```

- [ ] **Step 2: Remove `@codspeed/vitest-plugin` from package.json dependencies**

Remove the `"dependencies"` block entirely from `packages/testing/package.json`:

```json
"dependencies": {
  "@codspeed/vitest-plugin": "^5.2.0"
},
```

- [ ] **Step 3: Remove `external` entry from tsup.config.ts**

Remove `external: ["@codspeed/vitest-plugin"],` from `packages/testing/tsup.config.ts`.

- [ ] **Step 4: Run `pnpm install` to update lockfile**

Run: `pnpm install`

- [ ] **Step 5: Rebuild testing package and verify tests pass**

Run: `pnpm build --filter=@rethinkhealth/testing --force && pnpm test`
Expected: All tests pass, no CodSpeed references in testing package output.

- [ ] **Step 6: Commit**

```
git add packages/testing/ pnpm-lock.yaml
git commit -m "refactor: remove CodSpeed from shared testing config"
```

---

### Task 2: Clean up turbo bench task and MLLP global setup

**Files:**

- Modify: `turbo.json`
- Modify: `packages/hl7v2-mllp/vitest.config.ts`
- Modify: `packages/hl7v2-mllp/bench/serve.bench.ts`
- Delete: `packages/hl7v2-mllp/bench/global-setup.ts`

- [ ] **Step 1: Remove `passThroughEnv` from turbo bench task**

In `turbo.json`, simplify the bench task to:

```json
"bench": {
  "cache": false
}
```

- [ ] **Step 2: Remove `globalSetup` from MLLP vitest config**

```typescript
// packages/hl7v2-mllp/vitest.config.ts
import { baseConfig } from "@rethinkhealth/testing";
import { defineConfig, mergeConfig } from "vitest/config";

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      name: "hl7v2-mllp",
    },
  })
);
```

- [ ] **Step 3: Revert serve.bench.ts to self-contained server setup**

Restore `serve.bench.ts` to start servers in `beforeAll` and tear them down in `afterAll` (the version from before global-setup was introduced). The key change: remove the file-based port reading and instead start servers directly:

```typescript
// packages/hl7v2-mllp/bench/serve.bench.ts
// Remove these imports:
// - readFileSync from "node:fs"
// - join from "node:path"
// - The JSON.parse(...) port reading

// Add these imports:
import { serve } from "../src/node/serve";
import type { Server } from "../src/node/serve";
import { Mllp } from "../src/server/mllp";

// Add server state:
const RESPONSE_OK = { raw: "MSH|^~\\&||||||||||2.5.1\rMSA|AA|MSG001" };
const servers: Server[] = [];

// In beforeAll, start servers directly:
beforeAll(async () => {
  const plainApp = new Mllp();
  plainApp.on("*", () => RESPONSE_OK);
  const plainServer = serve(plainApp, { port: 0 });
  servers.push(plainServer);

  const mwApp = new Mllp();
  for (let i = 0; i < 5; i++) {
    mwApp.use(async (_ctx, next) => next());
  }
  mwApp.on("*", () => RESPONSE_OK);
  const mwServer = serve(mwApp, { port: 0 });
  servers.push(mwServer);

  // Connect clients using plainServer.port and mwServer.port
  singleClient = await createClient(plainServer.port);
  // ... rest of client connections
});

// In afterAll, close servers too:
afterAll(async () => {
  for (const c of clients) {
    c.destroy();
  }
  for (const s of servers) {
    await s.close();
  }
});
```

- [ ] **Step 4: Delete global-setup.ts**

Run: `rm packages/hl7v2-mllp/bench/global-setup.ts`
Run: `rm -f packages/hl7v2-mllp/.bench-ports.json`

- [ ] **Step 5: Verify local benchmarks still work**

Run: `pnpm bench`
Expected: All packages with bench scripts run successfully via turbo.

- [ ] **Step 6: Commit**

```
git add turbo.json packages/hl7v2-mllp/
git commit -m "refactor: simplify MLLP benchmarks and turbo config"
```

---

## Chunk 2: Create centralized CodSpeed benchmark suite

### Task 3: Set up benchmarks folder with vitest + CodSpeed

**Files:**

- Create: `benchmarks/vitest.config.ts`
- Create: `benchmarks/tsconfig.json`
- Modify: `package.json`

- [ ] **Step 1: Create `benchmarks/tsconfig.json`**

```json
{
  "extends": "@rethinkhealth/tsconfig/library.json",
  "include": ["."]
}
```

- [ ] **Step 2: Install dependencies at root level**

The benchmarks folder imports from workspace packages. These must be explicit root devDependencies for pnpm to create the symlinks in root `node_modules/@rethinkhealth/`:

Run: `pnpm add -Dw @codspeed/vitest-plugin vitest @rethinkhealth/hl7v2 @rethinkhealth/hl7v2-parser @rethinkhealth/hl7v2-mllp`

Note: The workspace packages use `workspace:*` protocol automatically when added from within the monorepo.

- [ ] **Step 3: Create `benchmarks/vitest.config.ts`**

```typescript
import codspeedPlugin from "@codspeed/vitest-plugin";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [codspeedPlugin()],
  test: {
    benchmark: {
      include: ["**/*.bench.ts"],
      exclude: ["node_modules/**"],
    },
  },
});
```

- [ ] **Step 4: Add `bench:ci` script to root `package.json`**

Add to scripts:

```json
"bench:ci": "vitest bench --run --root benchmarks"
```

- [ ] **Step 5: Verify empty bench:ci runs without errors**

Run: `pnpm bench:ci`
Expected: Exits cleanly with "no benchmark files found" or similar (no bench files yet).

- [ ] **Step 6: Commit**

```
git add benchmarks/ package.json pnpm-lock.yaml
git commit -m "feat: add centralized benchmarks folder with CodSpeed config"
```

---

### Task 4: Write pipeline benchmark

**Files:**

- Create: `benchmarks/pipeline.bench.ts`

This is the most important benchmark — it exercises the full unified pipeline that end users interact with.

- [ ] **Step 1: Create `benchmarks/pipeline.bench.ts`**

```typescript
/**
 * End-to-end unified pipeline benchmarks.
 *
 * Measures the full user-facing path: parse → annotate → lint → jsonify.
 * These are the primary benchmarks tracked by CodSpeed for regression detection.
 */
import { bench, describe } from "vitest";

import { parseHL7v2 } from "@rethinkhealth/hl7v2";

// ---------------------------------------------------------------------------
// Fixtures — realistic HL7v2 messages
// ---------------------------------------------------------------------------

const ADT_A01_SMALL = [
  "MSH|^~\\&|SENDER|FAC|RECV|RFAC|20241201120000||ADT^A01^ADT_A01|MSG001|P|2.5.1",
  "EVN|A01|20241201120000",
  "PID|1||12345^^^MRN||Doe^John^Q||19800101|M|||123 Main St^^Springfield^IL^62701",
].join("\r");

const ORU_R01_MEDIUM = [
  "MSH|^~\\&|LAB|FAC|EMR|RFAC|20241201120000||ORU^R01^ORU_R01|MSG002|P|2.5.1",
  "PID|1||12345^^^MRN||Doe^John^Q||19800101|M",
  "ORC|RE|ORD001|LAB001",
  "OBR|1|ORD001|LAB001|CBC^Complete Blood Count|||20241201",
  ...Array.from(
    { length: 10 },
    (_, i) =>
      `OBX|${i + 1}|NM|WBC-${i}^White Blood Cell||${(5 + i * 0.3).toFixed(1)}|10*9/L|4.5-11.0|N|||F`
  ),
].join("\r");

function buildLargeMessage(obxCount: number): string {
  const segments = [
    "MSH|^~\\&|LAB|FAC|EMR|RFAC|20241201120000||ORU^R01^ORU_R01|MSG003|P|2.5.1",
    "PID|1||12345^^^MRN||Doe^John^Q^^Dr||19800101|M|||123 Main St^^Springfield^IL^62701^USA",
    "PV1|1|I|ICU^101^A",
    "ORC|RE|ORD001|LAB001",
    "OBR|1|ORD001|LAB001|CBC^Complete Blood Count|||20241201",
  ];
  for (let i = 1; i <= obxCount; i++) {
    segments.push(
      `OBX|${i}|NM|8302-${i}^Test${i}^LN||${(100 + i * 0.5).toFixed(1)}|mg/dL|50-200|N|||F`
    );
  }
  return segments.join("\r");
}

const LARGE_50 = buildLargeMessage(50);
const LARGE_200 = buildLargeMessage(200);

// ---------------------------------------------------------------------------
// Benchmarks
// ---------------------------------------------------------------------------

describe("pipeline — full unified processor", () => {
  bench("ADT^A01 small (3 segments)", async () => {
    await parseHL7v2.process(ADT_A01_SMALL);
  });

  bench("ORU^R01 medium (14 segments)", async () => {
    await parseHL7v2.process(ORU_R01_MEDIUM);
  });

  bench("ORU^R01 large (55 segments)", async () => {
    await parseHL7v2.process(LARGE_50);
  });

  bench("ORU^R01 xl (205 segments)", async () => {
    await parseHL7v2.process(LARGE_200);
  });
});
```

- [ ] **Step 2: Verify the benchmark runs**

Run: `pnpm bench:ci`
Expected: 4 benchmarks pass with results.

- [ ] **Step 3: Commit**

```
git add benchmarks/pipeline.bench.ts
git commit -m "feat: add end-to-end pipeline benchmark for CodSpeed"
```

---

### Task 5: Write parser benchmark

**Files:**

- Create: `benchmarks/parser.bench.ts`

- [ ] **Step 1: Create `benchmarks/parser.bench.ts`**

```typescript
/**
 * Parser benchmarks — measures HL7v2 text → AST conversion.
 *
 * Isolates parsing performance from the rest of the pipeline.
 */
import { bench, describe } from "vitest";

import { parseHL7v2 } from "@rethinkhealth/hl7v2-parser";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const SIMPLE =
  "MSH|^~\\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01|MSG001|P|2.5\rPID|1||12345||Doe^John||19800101|M";

const COMPLEX_FIELDS = [
  "MSH|^~\\&|SENDER|FAC|RECV|RFAC|20241201||ORU^R01|MSG001|P|2.5",
  "PID|1||123~456~789||Doe^John^Q&Jr||19800101|M",
  "OBX|1|CE|8302-2^Height^LN||185&cm^tall&yes~186&cm^tall&no|cm|150-200||||F",
].join("\r");

function buildMessage(segmentCount: number): string {
  const segments = [
    "MSH|^~\\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01|MSG001|P|2.5",
    "PID|1||12345||Doe^John^Q||19800101|M|||123 Main St^^Springfield^IL^62701",
  ];
  for (let i = 1; i <= segmentCount; i++) {
    segments.push(`OBX|${i}|NM|8302-2^Height^LN||${170 + i}|cm|150-200||||F`);
  }
  return segments.join("\r");
}

const MEDIUM = buildMessage(50);
const LARGE = buildMessage(200);

// ---------------------------------------------------------------------------
// Benchmarks
// ---------------------------------------------------------------------------

describe("parser — message sizes", () => {
  bench("simple (2 segments)", () => {
    parseHL7v2(SIMPLE);
  });

  bench("medium (52 segments)", () => {
    parseHL7v2(MEDIUM);
  });

  bench("large (202 segments)", () => {
    parseHL7v2(LARGE);
  });
});

describe("parser — field complexity", () => {
  bench("repetitions, components, sub-components", () => {
    parseHL7v2(COMPLEX_FIELDS);
  });
});
```

- [ ] **Step 2: Verify the benchmark runs**

Run: `pnpm bench:ci`
Expected: Pipeline + parser benchmarks all pass.

- [ ] **Step 3: Commit**

```
git add benchmarks/parser.bench.ts
git commit -m "feat: add parser benchmark for CodSpeed"
```

---

### Task 6: Write MLLP handle benchmark

**Files:**

- Create: `benchmarks/mllp.bench.ts`

- [ ] **Step 1: Create `benchmarks/mllp.bench.ts`**

```typescript
/**
 * MLLP handle() benchmarks — measures routing and middleware overhead.
 *
 * Tests the application-level message handling without TCP networking.
 * This isolates the cost of parsing, routing, middleware composition,
 * and context creation.
 */
import { bench, describe } from "vitest";

import { Mllp } from "@rethinkhealth/hl7v2-mllp";
import type { ConnectionInfo } from "@rethinkhealth/hl7v2-mllp";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const SMALL_MESSAGE = [
  "MSH|^~\\&|SendApp|SendFac|RecvApp|RecvFac|20240101120000||ADT^A01^ADT_A01|MSG001|P|2.5.1",
  "EVN|A01|20240101120000",
  "PID|1||12345^^^MRN||Doe^John",
].join("\r");

const LARGE_MESSAGE = [
  "MSH|^~\\&|SendApp|SendFac|RecvApp|RecvFac|20240101120000||ORU^R01^ORU_R01|MSG002|P|2.5.1",
  "PID|1||12345^^^MRN||Doe^John^Q^^^^L||19800101|M|||123 Main St^^Springfield^IL^62704^USA",
  ...Array.from({ length: 50 }, (_, i) => [
    `OBR|${i + 1}||LAB${String(i).padStart(4, "0")}|CBC^Complete Blood Count`,
    `OBX|1|NM|WBC^White Blood Cell Count||${(5 + Math.random() * 10).toFixed(1)}|10*9/L|4.5-11.0|N|||F`,
  ]).flat(),
].join("\r");

const MOCK_CONNECTION: ConnectionInfo = {
  localPort: 2575,
  remoteAddress: "127.0.0.1",
  remotePort: 12_345,
  secure: false,
};

const RESPONSE_OK = { raw: "MSH|^~\\&||||||||||2.5.1\rMSA|AA|MSG001" };

const textEncoder = new TextEncoder();
const smallBytes = textEncoder.encode(SMALL_MESSAGE);
const largeBytes = textEncoder.encode(LARGE_MESSAGE);

// ---------------------------------------------------------------------------
// Benchmarks
// ---------------------------------------------------------------------------

describe("mllp handle() — routing", () => {
  const app = new Mllp();
  app.on("ADT^A01", () => RESPONSE_OK);

  bench("single route, small message", async () => {
    await app.handle(SMALL_MESSAGE, smallBytes, MOCK_CONNECTION);
  });

  bench("single route, large message (100+ segments)", async () => {
    await app.handle(LARGE_MESSAGE, largeBytes, MOCK_CONNECTION);
  });
});

describe("mllp handle() — middleware", () => {
  const app5 = new Mllp();
  for (let i = 0; i < 5; i++) {
    // oxlint-disable-next-line require-await
    app5.use(async (_ctx, next) => next());
  }
  app5.on("ADT^A01", () => RESPONSE_OK);

  const app10 = new Mllp();
  for (let i = 0; i < 10; i++) {
    // oxlint-disable-next-line require-await
    app10.use(async (_ctx, next) => next());
  }
  app10.on("ADT^A01", () => RESPONSE_OK);

  bench("5 middleware", async () => {
    await app5.handle(SMALL_MESSAGE, smallBytes, MOCK_CONNECTION);
  });

  bench("10 middleware", async () => {
    await app10.handle(SMALL_MESSAGE, smallBytes, MOCK_CONNECTION);
  });
});
```

- [ ] **Step 2: Verify all benchmarks run**

Run: `pnpm bench:ci`
Expected: Pipeline + parser + MLLP benchmarks all pass.

- [ ] **Step 3: Commit**

```
git add benchmarks/mllp.bench.ts
git commit -m "feat: add MLLP handle benchmark for CodSpeed"
```

---

## Chunk 3: Update CI workflow

### Task 7: Update GHA workflow to use centralized benchmarks

**Files:**

- Modify: `.github/workflows/benchmarks.yml`

- [ ] **Step 1: Update the workflow**

```yaml
name: Benchmarks

on:
  push:
    branches: ["main"]
  pull_request:
    types: [opened, synchronize, reopened]
  workflow_dispatch:

jobs:
  benchmarks:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
      id-token: write

    steps:
      - uses: actions/checkout@v5
        with:
          fetch-depth: 0

      - uses: pnpm/action-setup@v2

      - name: Use Node.js 24
        uses: actions/setup-node@v4
        with:
          node-version: 24
          cache: "pnpm"

      - name: Install dependencies
        run: pnpm ci:install

      - name: Build packages
        run: pnpm build

      - name: Run benchmarks
        uses: CodSpeedHQ/action@v4
        with:
          mode: simulation
          run: pnpm bench:ci
```

- [ ] **Step 2: Verify locally with CodSpeed env simulation**

Run: `CODSPEED_ENV=runner CODSPEED_RUNNER_MODE=walltime CODSPEED_PROFILE_FOLDER=/tmp/codspeed-test pnpm bench:ci`
Expected: Benchmarks run, results written to `/tmp/codspeed-test/results/`.

- [ ] **Step 3: Commit**

```
git add .github/workflows/benchmarks.yml
git commit -m "fix: update CI to use centralized benchmark suite"
```

---

### Task 8: Final verification

- [ ] **Step 1: Verify local package benchmarks still work independently**

Run: `pnpm bench`
Expected: All 9 packages with bench scripts run successfully via turbo. No CodSpeed output (plugin removed from shared config).

- [ ] **Step 2: Verify centralized benchmarks work**

Run: `pnpm bench:ci`
Expected: Pipeline, parser, and MLLP benchmarks all pass.

- [ ] **Step 3: Verify tests are unaffected**

Run: `pnpm test`
Expected: All tests pass.

- [ ] **Step 4: Push and verify CI**

Push branch and confirm the benchmarks workflow runs successfully and CodSpeed reports results.
