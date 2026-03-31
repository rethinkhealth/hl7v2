# Migrate Delimiters to `file.data` Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move delimiter resolution from direct `getDelimiters(tree)` calls to `file.data.delimiters`, following ADR 0014's principle that derivable metadata belongs in `file.data`.

**Architecture:** A lightweight annotator plugin (`hl7v2-annotate-delimiters`) runs early in the pipeline and writes `file.data.delimiters`. Consumer plugins read `file.data.delimiters` with fallback to `getDelimiters(tree)` for standalone use. The `getDelimiters()` utility is renamed to `resolveDelimiters()` to clarify its role as the fallback derivation function. VFile type augmentation in `hl7v2-ast` provides type safety for `file.data.delimiters`.

**Tech Stack:** TypeScript, Vitest, unified, vfile

---

### File Map

| Action | File                                           | Responsibility                                         |
| ------ | ---------------------------------------------- | ------------------------------------------------------ |
| Modify | `packages/hl7v2-ast/index.d.ts`                | Add VFile type augmentation for `file.data.delimiters` |
| Rename | `packages/hl7v2-utils/src/delimiters.ts`       | Rename `getDelimiters` → `resolveDelimiters`           |
| Modify | `packages/hl7v2-utils/test/delimiters.test.ts` | Update test imports                                    |
| Create | `packages/hl7v2-annotate-delimiters/`          | New annotator plugin package                           |
| Modify | `packages/hl7v2-decode-escapes/src/index.ts`   | Read `file.data.delimiters` with fallback              |
| Modify | `packages/hl7v2-encode-escapes/src/index.ts`   | Read `file.data.delimiters` with fallback              |
| Modify | `packages/hl7v2-to-hl7v2/src/index.ts`         | Compiler reads `file.data.delimiters` with fallback    |
| Modify | `packages/hl7v2/src/index.ts`                  | Add annotator to pipeline                              |

---

### Task 1: Add VFile type augmentation for delimiters

**Files:**

- Modify: `packages/hl7v2-ast/index.d.ts`

- [ ] **Step 1: Add VFile module augmentation**

In `packages/hl7v2-ast/index.d.ts`, add after the existing imports at the top of the file:

```typescript
declare module "vfile" {
  interface DataMap {
    delimiters: Delimiters;
  }
}
```

This makes `file.data.delimiters` type-safe across the entire ecosystem. The `DataMap` interface is how vfile 6.x supports module augmentation (see [vfile docs](https://github.com/vfile/vfile#datamap)).

- [ ] **Step 2: Verify type check passes**

Run: `pnpm check-types 2>&1 | tail -10`
Expected: No errors (the augmentation is additive)

- [ ] **Step 3: Commit**

```bash
git add packages/hl7v2-ast/index.d.ts
git commit -m "feat(ast): add VFile type augmentation for file.data.delimiters"
```

---

### Task 2: Rename `getDelimiters` to `resolveDelimiters`

**Files:**

- Modify: `packages/hl7v2-utils/src/delimiters.ts`
- Modify: `packages/hl7v2-utils/src/index.ts`
- Modify: `packages/hl7v2-utils/test/delimiters.test.ts`
- Modify: `packages/hl7v2-decode-escapes/src/index.ts`
- Modify: `packages/hl7v2-encode-escapes/src/index.ts`
- Modify: `packages/hl7v2-to-hl7v2/src/index.ts`

- [ ] **Step 1: Rename function in source**

In `packages/hl7v2-utils/src/delimiters.ts`, rename:

```typescript
export function resolveDelimiters(root: Root): Delimiters {
```

- [ ] **Step 2: Update test import**

In `packages/hl7v2-utils/test/delimiters.test.ts`, change:

```typescript
import { DEFAULT_DELIMITERS, resolveDelimiters } from "../src";
```

And update all `getDelimiters(` to `resolveDelimiters(` in the test file. Update the `describe` block name to `"resolveDelimiters"`.

- [ ] **Step 3: Update all consumer imports**

In `packages/hl7v2-decode-escapes/src/index.ts`, change:

```typescript
import { resolveDelimiters } from "@rethinkhealth/hl7v2-utils";
```

And: `...resolveDelimiters(tree),`

In `packages/hl7v2-encode-escapes/src/index.ts`, change:

```typescript
import { resolveDelimiters } from "@rethinkhealth/hl7v2-utils";
```

And: `...resolveDelimiters(tree),`

In `packages/hl7v2-to-hl7v2/src/index.ts`, change:

```typescript
import {
  DEFAULT_DELIMITERS,
  resolveDelimiters,
} from "@rethinkhealth/hl7v2-utils";
```

And: `...(node.type === "root" ? resolveDelimiters(node) : DEFAULT_DELIMITERS),`

- [ ] **Step 4: Run tests**

Run: `pnpm test 2>&1 | tail -10`
Expected: All tests pass (it's just a rename)

- [ ] **Step 5: Commit**

```bash
git add packages/hl7v2-utils/ packages/hl7v2-decode-escapes/src/ packages/hl7v2-encode-escapes/src/ packages/hl7v2-to-hl7v2/src/
git commit -m "refactor(utils): rename getDelimiters to resolveDelimiters"
```

---

### Task 3: Create `hl7v2-annotate-delimiters` plugin

**Files:**

- Create: `packages/hl7v2-annotate-delimiters/package.json`
- Create: `packages/hl7v2-annotate-delimiters/src/index.ts`
- Create: `packages/hl7v2-annotate-delimiters/tests/index.test.ts`
- Create: `packages/hl7v2-annotate-delimiters/tsconfig.json`
- Create: `packages/hl7v2-annotate-delimiters/tsup.config.ts`
- Create: `packages/hl7v2-annotate-delimiters/vitest.config.ts`

- [ ] **Step 1: Create package scaffolding**

Create `packages/hl7v2-annotate-delimiters/package.json`:

```json
{
  "name": "@rethinkhealth/hl7v2-annotate-delimiters",
  "version": "0.1.0",
  "description": "Unified plugin to annotate file.data with HL7v2 delimiters derived from MSH-1/MSH-2",
  "type": "module",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": "./dist/index.js"
  },
  "scripts": {
    "build": "tsup && tsc --project tsconfig.json",
    "check-types": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest watch"
  },
  "devDependencies": {
    "@rethinkhealth/hl7v2-ast": "workspace:*",
    "@rethinkhealth/hl7v2-builder": "workspace:*",
    "@rethinkhealth/hl7v2-utils": "workspace:*",
    "@rethinkhealth/testing": "workspace:*",
    "@rethinkhealth/tsconfig": "workspace:*",
    "@types/node": "^25.5.0",
    "@vitest/coverage-v8": "4.1.0",
    "tsup": "^8.5.1",
    "typescript": "^5.9.3",
    "unified": "^11.0.5",
    "vfile": "^6.0.3",
    "vitest": "4.1.0"
  },
  "engines": {
    "node": ">=18"
  },
  "publishConfig": {
    "access": "public"
  }
}
```

Create `packages/hl7v2-annotate-delimiters/tsconfig.json`:

```json
{
  "extends": "@rethinkhealth/tsconfig/library.json",
  "compilerOptions": {
    "outDir": "dist",
    "declarationMap": true,
    "declaration": true,
    "emitDeclarationOnly": true
  },
  "include": ["src"]
}
```

Create `packages/hl7v2-annotate-delimiters/tsup.config.ts`:

```typescript
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  target: "es2022",
  sourcemap: true,
});
```

Create `packages/hl7v2-annotate-delimiters/vitest.config.ts`:

```typescript
import baseConfig from "@rethinkhealth/testing";

export default baseConfig("hl7v2-annotate-delimiters");
```

- [ ] **Step 2: Write failing test**

Create `packages/hl7v2-annotate-delimiters/tests/index.test.ts`:

```typescript
import type { Root } from "@rethinkhealth/hl7v2-ast";
import { f, m, s } from "@rethinkhealth/hl7v2-builder";
import { DEFAULT_DELIMITERS } from "@rethinkhealth/hl7v2-utils";
import { unified } from "unified";

import { hl7v2AnnotateDelimiters } from "../src";

describe("hl7v2AnnotateDelimiters", () => {
  it("sets file.data.delimiters from MSH-1 and MSH-2", async () => {
    const tree = m(s("MSH", f("|"), f("^~\\&"), f("SENDER")));

    const file = await unified().use(hl7v2AnnotateDelimiters).run(tree);

    // file returned from run() is the tree, but we need the VFile
    // Use process() to get the file, or check via a second plugin
  });

  it("sets standard delimiters from MSH", async () => {
    const tree = m(s("MSH", f("|"), f("^~\\&"), f("SENDER")));
    let capturedDelimiters: unknown;

    const capturePlugin =
      () => (_tree: Root, file: { data: Record<string, unknown> }) => {
        capturedDelimiters = file.data.delimiters;
      };

    await unified().use(hl7v2AnnotateDelimiters).use(capturePlugin).run(tree);

    expect(capturedDelimiters).toStrictEqual(DEFAULT_DELIMITERS);
  });

  it("sets custom delimiters from MSH", async () => {
    const tree = m(s("MSH", f("*"), f("%$#&"), f("SENDER")));
    let capturedDelimiters: unknown;

    const capturePlugin =
      () => (_tree: Root, file: { data: Record<string, unknown> }) => {
        capturedDelimiters = file.data.delimiters;
      };

    await unified().use(hl7v2AnnotateDelimiters).use(capturePlugin).run(tree);

    expect(capturedDelimiters).toStrictEqual({
      component: "%",
      escape: "#",
      field: "*",
      repetition: "$",
      segment: "\r",
      subcomponent: "&",
    });
  });

  it("sets DEFAULT_DELIMITERS when no MSH segment", async () => {
    const tree = m(s("PID", f("12345")));
    let capturedDelimiters: unknown;

    const capturePlugin =
      () => (_tree: Root, file: { data: Record<string, unknown> }) => {
        capturedDelimiters = file.data.delimiters;
      };

    await unified().use(hl7v2AnnotateDelimiters).use(capturePlugin).run(tree);

    expect(capturedDelimiters).toStrictEqual(DEFAULT_DELIMITERS);
  });
});
```

- [ ] **Step 3: Implement the plugin**

Create `packages/hl7v2-annotate-delimiters/src/index.ts`:

```typescript
import type { Root } from "@rethinkhealth/hl7v2-ast";
import { resolveDelimiters } from "@rethinkhealth/hl7v2-utils";
import type { Plugin } from "unified";
import type { VFile } from "vfile";

/**
 * Unified plugin that derives delimiters from MSH-1/MSH-2
 * and stores them on `file.data.delimiters`.
 *
 * Run this early in the pipeline so downstream plugins
 * can read `file.data.delimiters` without re-deriving.
 */
export const hl7v2AnnotateDelimiters: Plugin<[], Root, Root> =
  () => (tree: Root, file: VFile) => {
    file.data.delimiters = resolveDelimiters(tree);
    return tree;
  };
```

- [ ] **Step 4: Install dependencies and run tests**

Run: `pnpm install && cd packages/hl7v2-annotate-delimiters && pnpm test`
Expected: All tests pass

- [ ] **Step 5: Commit**

```bash
git add packages/hl7v2-annotate-delimiters/
git commit -m "feat(annotate-delimiters): add plugin to set file.data.delimiters from MSH"
```

---

### Task 4: Update consumer plugins to read `file.data.delimiters`

**Files:**

- Modify: `packages/hl7v2-decode-escapes/src/index.ts`
- Modify: `packages/hl7v2-decode-escapes/tests/index.test.ts`
- Modify: `packages/hl7v2-encode-escapes/src/index.ts`
- Modify: `packages/hl7v2-encode-escapes/tests/index.test.ts`

- [ ] **Step 1: Update decode-escapes to read file.data**

In `packages/hl7v2-decode-escapes/src/index.ts`, update the transformer to accept `file` and prefer `file.data.delimiters`:

```typescript
import type { Delimiters, Root, Subcomponent } from "@rethinkhealth/hl7v2-ast";
import { resolveDelimiters } from "@rethinkhealth/hl7v2-utils";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import type { VFile } from "vfile";

export interface HL7v2DecodeOptions {
  delimiters?: Partial<Delimiters>;
}

/**
 * Unified plugin to decode HL7v2 escape sequences in subcomponent literals.
 *
 * Delimiter resolution order:
 * 1. `options.delimiters` (explicit override)
 * 2. `file.data.delimiters` (set by hl7v2-annotate-delimiters)
 * 3. Derived from MSH-1/MSH-2 via resolveDelimiters()
 */
export const hl7v2DecodeEscapes: Plugin<[HL7v2DecodeOptions?], Root, Root> =
  (options) => (tree: Root, file: VFile) => {
    const d = {
      ...(file.data.delimiters ?? resolveDelimiters(tree)),
      ...options?.delimiters,
    };

    visit(tree, "subcomponent", (node: Subcomponent) => {
      const raw = node.value;
      node.value = decode(raw, d);
    });

    return tree;
  };
```

Keep the rest of the file (decode, decodeHexSequence) unchanged.

- [ ] **Step 2: Update encode-escapes to read file.data**

In `packages/hl7v2-encode-escapes/src/index.ts`, update the transformer similarly:

```typescript
import type {
  Delimiters,
  Root,
  Segment,
  Subcomponent,
} from "@rethinkhealth/hl7v2-ast";
import { resolveDelimiters } from "@rethinkhealth/hl7v2-utils";
import type { Plugin } from "unified";
import { visit, SKIP } from "unist-util-visit";
import type { VFile } from "vfile";

export interface HL7v2EncodeOptions {
  delimiters?: Partial<Delimiters>;
}

/**
 * Unified plugin to encode special characters as HL7v2 escape sequences
 * in subcomponent literals.
 *
 * Delimiter resolution order:
 * 1. `options.delimiters` (explicit override)
 * 2. `file.data.delimiters` (set by hl7v2-annotate-delimiters)
 * 3. Derived from MSH-1/MSH-2 via resolveDelimiters()
 *
 * Skips MSH-1 and MSH-2 (they define the delimiters and must not be escaped).
 */
export const hl7v2EncodeEscapes: Plugin<[HL7v2EncodeOptions?], Root, Root> =
  (options) => (tree: Root, file: VFile) => {
    const d = {
      ...(file.data.delimiters ?? resolveDelimiters(tree)),
      ...options?.delimiters,
    };

    const charToEscape = buildEscapeMap(d);

    visit(tree, (node, index, parent) => {
      if (
        node.type === "field" &&
        index !== undefined &&
        index < 2 &&
        parent?.type === "segment" &&
        (parent as Segment).name === "MSH"
      ) {
        return SKIP;
      }

      if (node.type === "subcomponent") {
        (node as Subcomponent).value = encode(
          (node as Subcomponent).value,
          charToEscape
        );
      }
    });

    return tree;
  };
```

Keep the rest of the file (buildEscapeMap, encode) unchanged.

- [ ] **Step 3: Add vfile as dev dependency to both packages**

Run:

```bash
cd packages/hl7v2-decode-escapes && pnpm add -D vfile@^6.0.3
cd packages/hl7v2-encode-escapes && pnpm add -D vfile@^6.0.3
```

- [ ] **Step 4: Run escape plugin tests**

Run: `cd packages/hl7v2-decode-escapes && pnpm test`
Run: `cd packages/hl7v2-encode-escapes && pnpm test`
Expected: All existing tests pass. The `(tree, file)` signature is backwards-compatible — unified always passes the file, plugins that ignored it continue to work. When tests call `unified().use(plugin).run(tree)`, unified creates a VFile automatically.

- [ ] **Step 5: Commit**

```bash
git add packages/hl7v2-decode-escapes/ packages/hl7v2-encode-escapes/
git commit -m "refactor(escapes): read file.data.delimiters with resolveDelimiters fallback"
```

---

### Task 5: Update compiler to read `file.data.delimiters`

**Files:**

- Modify: `packages/hl7v2-to-hl7v2/src/index.ts`
- Modify: `packages/hl7v2-to-hl7v2/tests/index.test.ts`

- [ ] **Step 1: Update compiler to pass file.data.delimiters**

In `packages/hl7v2-to-hl7v2/src/index.ts`, update the compiler to read from file:

```typescript
import type {
  Component,
  Delimiters,
  Field,
  FieldRepetition,
  Nodes,
  Root,
  Segment,
  Subcomponent,
} from "@rethinkhealth/hl7v2-ast";
import {
  DEFAULT_DELIMITERS,
  resolveDelimiters,
} from "@rethinkhealth/hl7v2-utils";
import type { Plugin } from "unified";
import type { Node } from "unist";
import type { VFile } from "vfile";

/**
 * Unified compiler plugin: HL7v2 AST -> HL7v2 string
 */
export const hl7v2ToHl7v2: Plugin<[], Root, string> =
  function hl7v2ToHl7v2(): void {
    // biome-ignore lint/complexity/noUselessThisAlias: unified plugin shape
    const self = this;
    self.compiler = (tree: Node, file: VFile): string =>
      toHl7v2(tree as Nodes, file.data.delimiters);
  };
```

The `toHl7v2()` function signature stays the same — it already accepts optional `delimiters`. When called from the compiler, it gets `file.data.delimiters` (which may be undefined if annotator wasn't used, triggering the `resolveDelimiters` fallback inside `toHl7v2`).

- [ ] **Step 2: Add vfile dev dependency**

Run: `cd packages/hl7v2-to-hl7v2 && pnpm add -D vfile@^6.0.3`

- [ ] **Step 3: Run serializer tests**

Run: `cd packages/hl7v2-to-hl7v2 && pnpm test`
Expected: All tests pass

- [ ] **Step 4: Commit**

```bash
git add packages/hl7v2-to-hl7v2/
git commit -m "refactor(to-hl7v2): compiler reads file.data.delimiters"
```

---

### Task 6: Add annotator to the main pipeline

**Files:**

- Modify: `packages/hl7v2/src/index.ts`
- Modify: `packages/hl7v2/package.json`

- [ ] **Step 1: Add annotator to pipeline**

In `packages/hl7v2/src/index.ts`, add the annotator after the parser:

```typescript
import { hl7v2AnnotateDelimiters } from "@rethinkhealth/hl7v2-annotate-delimiters";
```

Update the pipeline:

```typescript
export const parseHL7v2 = unified()
  .use(hl7v2Parser)
  .use(hl7v2AnnotateDelimiters)
  .use(hl7v2DecodeEscapes)
  .use(hl7v2PresetLintRecommended)
  .use(hl7v2PresetLintProfileRecommended)
  .use(hl7v2Jsonify)
  .freeze();
```

- [ ] **Step 2: Add dependency**

Run: `cd packages/hl7v2 && pnpm add -D @rethinkhealth/hl7v2-annotate-delimiters@workspace:*`

- [ ] **Step 3: Run umbrella tests**

Run: `cd packages/hl7v2 && pnpm test`
Expected: All tests pass

- [ ] **Step 4: Commit**

```bash
git add packages/hl7v2/
git commit -m "feat(hl7v2): add hl7v2-annotate-delimiters to main pipeline"
```

---

### Task 7: Full test suite verification

**Files:** None (verification only)

- [ ] **Step 1: Force rebuild all packages**

Run: `pnpm build --force 2>&1 | tail -5`
Expected: All packages build successfully

- [ ] **Step 2: Run full test suite**

Run: `pnpm test 2>&1 | tail -15`
Expected: All packages pass

- [ ] **Step 3: Run type checker**

Run: `pnpm check-types 2>&1 | tail -10`
Expected: No type errors

- [ ] **Step 4: Run linter**

Run: `npx ultracite check 2>&1 | tail -5`
Expected: No lint errors
