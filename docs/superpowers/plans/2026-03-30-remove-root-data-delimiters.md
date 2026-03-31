# Remove `root.data.delimiters` Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Eliminate the dual source of truth by removing `root.data.delimiters` from the AST and deriving delimiters from MSH-1/MSH-2 at point of use via a new `getDelimiters()` utility.

**Architecture:** A new `getDelimiters(root)` function in `hl7v2-utils` walks `root.children` to find the first MSH segment and extracts delimiter characters from MSH-1 (field separator) and MSH-2 (encoding characters). All consumers (`hl7v2-to-hl7v2`, `hl7v2-decode-escapes`, `hl7v2-encode-escapes`) switch from reading `root.data.delimiters` to calling this utility. The parser stops setting `root.data.delimiters`, and the `delimiters` property is removed from `RootData` in the AST types.

**Tech Stack:** TypeScript, Vitest, unified ecosystem

---

### File Map

| Action | File                                                                      | Responsibility                                                  |
| ------ | ------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Create | `packages/hl7v2-utils/src/delimiters.ts`                                  | `getDelimiters()` utility function                              |
| Create | `packages/hl7v2-utils/test/delimiters.test.ts`                            | Tests for `getDelimiters()`                                     |
| Modify | `packages/hl7v2-utils/src/index.ts`                                       | Re-export new module                                            |
| Modify | `packages/hl7v2-ast/index.d.ts:160-162`                                   | Remove `delimiters` from `RootData`                             |
| Modify | `packages/hl7v2-parser/src/processor.ts:86-92`                            | Stop setting `root.data.delimiters`                             |
| Modify | `packages/hl7v2-to-hl7v2/src/index.ts:28-33`                              | Use `getDelimiters()` instead of `root.data?.delimiters`        |
| Modify | `packages/hl7v2-decode-escapes/src/index.ts:21-25`                        | Use `getDelimiters()` instead of `tree.data.delimiters`         |
| Modify | `packages/hl7v2-encode-escapes/src/index.ts:21-25`                        | Use `getDelimiters()` instead of `tree.data.delimiters`         |
| Modify | `packages/hl7v2-parser/test/parser.test.ts:39`                            | Remove `data.delimiters` assertion                              |
| Modify | `packages/hl7v2-parser/test/parser.legacy.test.ts:39`                     | Remove `data.delimiters` assertion                              |
| Modify | `packages/hl7v2/tests/index.test.ts:35-36`                                | Remove `data.delimiters` assertion                              |
| Modify | `packages/hl7v2-to-hl7v2/tests/index.test.ts:125-140,265-282`             | Replace `tree.data.delimiters` with MSH-based custom delimiters |
| Modify | `packages/hl7v2-decode-escapes/tests/index.test.ts:120-137`               | Replace `tree.data.delimiters` with MSH-based custom delimiters |
| Modify | `packages/hl7v2-encode-escapes/tests/index.test.ts:105-118`               | Replace `tree.data.delimiters` with MSH-based custom delimiters |
| Update | `packages/hl7v2-parser/test/__snapshots__/parser.test.ts.snap`            | Regenerate (24 occurrences)                                     |
| Update | `packages/hl7v2-parser/test/__snapshots__/parser.legacy.test.ts.snap`     | Regenerate (54 occurrences)                                     |
| Update | `packages/hl7v2-lint-message-version/tests/fixtures/oru-ast-missing.json` | Remove `delimiters` from fixture                                |
| Update | `packages/hl7v2-lint-message-version/tests/fixtures/oru-ast-empty.json`   | Remove `delimiters` from fixture                                |

---

### Task 1: Add `getDelimiters()` utility with tests

**Files:**

- Create: `packages/hl7v2-utils/src/delimiters.ts`
- Create: `packages/hl7v2-utils/test/delimiters.test.ts`
- Modify: `packages/hl7v2-utils/src/index.ts`

- [ ] **Step 1: Write failing tests**

Create `packages/hl7v2-utils/test/delimiters.test.ts`:

```typescript
import type { Root } from "@rethinkhealth/hl7v2-ast";
import { c, f, m, r, s } from "@rethinkhealth/hl7v2-builder";

import { DEFAULT_DELIMITERS, getDelimiters } from "../src";

describe("getDelimiters", () => {
  it("extracts standard delimiters from MSH-1 and MSH-2", () => {
    const tree = m(s("MSH", f("|"), f("^~\\&"), f("SENDER")));
    const result = getDelimiters(tree);
    expect(result).toStrictEqual(DEFAULT_DELIMITERS);
  });

  it("extracts custom delimiters from MSH-1 and MSH-2", () => {
    const tree = m(s("MSH", f("*"), f("%$#&"), f("SENDER")));
    const result = getDelimiters(tree);
    expect(result).toStrictEqual({
      component: "%",
      escape: "#",
      field: "*",
      repetition: "$",
      segment: "\r",
      subcomponent: "&",
    });
  });

  it("returns DEFAULT_DELIMITERS when no MSH segment exists", () => {
    const tree = m(s("PID", f("12345")));
    const result = getDelimiters(tree);
    expect(result).toStrictEqual(DEFAULT_DELIMITERS);
  });

  it("returns DEFAULT_DELIMITERS for empty root", () => {
    const tree = m();
    const result = getDelimiters(tree);
    expect(result).toStrictEqual(DEFAULT_DELIMITERS);
  });

  it("handles MSH with missing MSH-2 by using defaults for encoding chars", () => {
    const tree = m(s("MSH", f("*")));
    const result = getDelimiters(tree);
    expect(result).toStrictEqual({
      ...DEFAULT_DELIMITERS,
      field: "*",
    });
  });

  it("handles MSH-2 with fewer than 4 characters", () => {
    const tree = m(s("MSH", f("|"), f("^~")));
    const result = getDelimiters(tree);
    expect(result).toStrictEqual({
      ...DEFAULT_DELIMITERS,
      component: "^",
      repetition: "~",
    });
  });

  it("finds MSH even when it is not the first segment", () => {
    const tree = m(
      s("PID", f("12345")),
      s("MSH", f("|"), f("^~\\&"), f("SENDER"))
    );
    const result = getDelimiters(tree);
    expect(result).toStrictEqual(DEFAULT_DELIMITERS);
  });

  it("handles non-root node by returning defaults", () => {
    const seg = s("PID", f("12345"));
    const result = getDelimiters(seg as unknown as Root);
    expect(result).toStrictEqual(DEFAULT_DELIMITERS);
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `cd packages/hl7v2-utils && pnpm test delimiters`
Expected: FAIL — `getDelimiters` is not exported

- [ ] **Step 3: Implement `getDelimiters()`**

Create `packages/hl7v2-utils/src/delimiters.ts`:

```typescript
import type { Delimiters, Root } from "@rethinkhealth/hl7v2-ast";

import { DEFAULT_DELIMITERS } from "./constants";

/**
 * Extract delimiters from a Root AST by reading MSH-1 and MSH-2.
 *
 * MSH-1 contains the field separator character (e.g., `|`).
 * MSH-2 contains up to 4 encoding characters: component, repetition,
 * escape, and subcomponent (e.g., `^~\&`).
 *
 * Falls back to DEFAULT_DELIMITERS for any values that cannot be derived.
 *
 * @param root - The Root AST node to extract delimiters from.
 * @returns The resolved Delimiters object.
 */
export function getDelimiters(root: Root): Delimiters {
  if (root.type !== "root" || !root.children) {
    return { ...DEFAULT_DELIMITERS };
  }

  const msh = root.children.find(
    (child) => child.type === "segment" && child.name === "MSH"
  );

  if (!msh || msh.type !== "segment") {
    return { ...DEFAULT_DELIMITERS };
  }

  const fields = msh.children;
  const result = { ...DEFAULT_DELIMITERS };

  // MSH-1: field separator (first field, single character)
  const msh1Value = fields[0]?.children[0]?.children[0]?.children[0]?.value;
  if (msh1Value && msh1Value.length === 1) {
    result.field = msh1Value;
  }

  // MSH-2: encoding characters (second field, up to 4 characters)
  const msh2Value = fields[1]?.children[0]?.children[0]?.children[0]?.value;
  if (msh2Value) {
    if (msh2Value.length >= 1) result.component = msh2Value[0];
    if (msh2Value.length >= 2) result.repetition = msh2Value[1];
    if (msh2Value.length >= 3) result.escape = msh2Value[2];
    if (msh2Value.length >= 4) result.subcomponent = msh2Value[3];
  }

  return result;
}
```

- [ ] **Step 4: Export from index**

In `packages/hl7v2-utils/src/index.ts`, add the re-export. The file currently contains:

```typescript
export * from "./constants";
export * from "./constraints";
export * from "./utils";
```

Add:

```typescript
export * from "./delimiters";
```

- [ ] **Step 5: Run tests to verify they pass**

Run: `cd packages/hl7v2-utils && pnpm test`
Expected: All tests pass including new `getDelimiters` tests

- [ ] **Step 6: Commit**

```bash
git add packages/hl7v2-utils/src/delimiters.ts packages/hl7v2-utils/test/delimiters.test.ts packages/hl7v2-utils/src/index.ts
git commit -m "feat(utils): add getDelimiters() to extract delimiters from MSH-1/MSH-2"
```

---

### Task 2: Remove `delimiters` from `RootData` type

**Files:**

- Modify: `packages/hl7v2-ast/index.d.ts:160-162`

- [ ] **Step 1: Remove `delimiters` from `RootData`**

In `packages/hl7v2-ast/index.d.ts`, change the `RootData` interface from:

```typescript
export interface RootData extends Data {
  delimiters?: Delimiters | undefined;
}
```

To:

```typescript
export interface RootData extends Data {}
```

- [ ] **Step 2: Run type check to identify all breakages**

Run: `pnpm check-types 2>&1 | head -60`
Expected: Type errors in files that read or write `root.data.delimiters` — this confirms all sites that need updating.

- [ ] **Step 3: Commit**

```bash
git add packages/hl7v2-ast/index.d.ts
git commit -m "refactor(ast): remove delimiters from RootData type"
```

---

### Task 3: Stop parser from setting `root.data.delimiters`

**Files:**

- Modify: `packages/hl7v2-parser/src/processor.ts:84-92`
- Modify: `packages/hl7v2-parser/test/parser.test.ts:39`
- Modify: `packages/hl7v2-parser/test/parser.legacy.test.ts:39`
- Update: `packages/hl7v2-parser/test/__snapshots__/parser.test.ts.snap`
- Update: `packages/hl7v2-parser/test/__snapshots__/parser.legacy.test.ts.snap`

- [ ] **Step 1: Remove `data.delimiters` from processor**

In `packages/hl7v2-parser/src/processor.ts`, change the root creation (lines 86-92) from:

```typescript
const root: Root = {
  children: [],
  data: {
    delimiters: ctx.delimiters,
  },
  type: "root",
};
```

To:

```typescript
const root: Root = {
  children: [],
  type: "root",
};
```

- [ ] **Step 2: Update parser test assertions**

In `packages/hl7v2-parser/test/parser.test.ts`, change the test at line ~37-40 from:

```typescript
expect(root.data?.delimiters).toStrictEqual(DEFAULT_DELIMITERS);
```

To:

```typescript
expect(root.data).toBeUndefined();
```

In `packages/hl7v2-parser/test/parser.legacy.test.ts`, make the same change at line ~39.

- [ ] **Step 3: Regenerate parser snapshots**

Run: `cd packages/hl7v2-parser && pnpm test -- --update`
Expected: Snapshots update to remove `delimiters` from `data` objects (24 + 54 occurrences).

- [ ] **Step 4: Run parser tests to verify**

Run: `cd packages/hl7v2-parser && pnpm test`
Expected: All tests pass

- [ ] **Step 5: Commit**

```bash
git add packages/hl7v2-parser/src/processor.ts packages/hl7v2-parser/test/parser.test.ts packages/hl7v2-parser/test/parser.legacy.test.ts packages/hl7v2-parser/test/__snapshots__/
git commit -m "refactor(parser): stop setting root.data.delimiters"
```

---

### Task 4: Update serializer to use `getDelimiters()`

**Files:**

- Modify: `packages/hl7v2-to-hl7v2/src/index.ts:1-33`
- Modify: `packages/hl7v2-to-hl7v2/tests/index.test.ts:125-140,265-282`

- [ ] **Step 1: Update serializer source**

In `packages/hl7v2-to-hl7v2/src/index.ts`, update imports (line 1-12) from:

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
import { DEFAULT_DELIMITERS } from "@rethinkhealth/hl7v2-utils";
```

To:

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
import { DEFAULT_DELIMITERS, getDelimiters } from "@rethinkhealth/hl7v2-utils";
```

Then update the `toHl7v2` function (lines 28-33) from:

```typescript
export function toHl7v2(node: Nodes, delimiters?: Partial<Delimiters>): string {
  const d = {
    ...DEFAULT_DELIMITERS,
    ...delimiters,
    ...(node.type === "root" && node.data?.delimiters),
  };
```

To:

```typescript
export function toHl7v2(node: Nodes, delimiters?: Partial<Delimiters>): string {
  const d = {
    ...(node.type === "root" ? getDelimiters(node) : DEFAULT_DELIMITERS),
    ...delimiters,
  };
```

Note: When the node is a root, `getDelimiters()` reads MSH-1/MSH-2 from the tree. Explicit `delimiters` parameter still overrides (spread after). For non-root nodes, defaults are used and can be overridden by the parameter — same behavior as before.

- [ ] **Step 2: Update serializer tests**

In `packages/hl7v2-to-hl7v2/tests/index.test.ts`, replace the test at lines 125-140. The test currently sets `tree.data.delimiters` — instead, the custom delimiters should come from MSH-1/MSH-2 in the tree itself. The tree already has `f("*")` as MSH-1, so it just needs MSH-2 with the custom encoding chars:

Replace:

```typescript
it("uses custom delimiters when provided in root data", () => {
  const tree = m(s("MSH", f("*"), f("test")), s("PID", f(c("A", "B"))));
  tree.data = {
    delimiters: {
      component: "#",
      escape: "!",
      field: "*",
      repetition: "$",
      segment: "\n",
      subcomponent: "@",
    },
  };

  const result = toHl7v2(tree);
  expect(result).toBe("MSH*test\nPID*A@B");
});
```

With:

```typescript
it("uses custom delimiters derived from MSH-1 and MSH-2", () => {
  const tree = m(
    s("MSH", f("*"), f("#$!@"), f("test")),
    s("PID", f(c("A", "B")))
  );

  const result = toHl7v2(tree);
  expect(result).toBe("MSH*#$!@*test\rPID*A@B");
});
```

Replace the test at lines 265-282:

```typescript
it("preserves custom delimiters from root data in unified processing", () => {
  const tree = m(s("MSH", f("*"), f("custom")), s("PID", f(c("A", "B"))));
  tree.data = {
    delimiters: {
      component: "#",
      escape: "!",
      field: "*",
      repetition: "$",
      segment: "\n",
      subcomponent: "@",
    },
  };

  const processor = unified().use(hl7v2ToHl7v2);

  const result = processor.stringify(tree);
  expect(result).toBe("MSH*custom\nPID*A@B");
});
```

With:

```typescript
it("derives custom delimiters from MSH in unified processing", () => {
  const tree = m(
    s("MSH", f("*"), f("#$!@"), f("custom")),
    s("PID", f(c("A", "B")))
  );

  const processor = unified().use(hl7v2ToHl7v2);

  const result = processor.stringify(tree);
  expect(result).toBe("MSH*#$!@*custom\rPID*A@B");
});
```

- [ ] **Step 3: Run serializer tests**

Run: `cd packages/hl7v2-to-hl7v2 && pnpm test`
Expected: All tests pass

- [ ] **Step 4: Commit**

```bash
git add packages/hl7v2-to-hl7v2/src/index.ts packages/hl7v2-to-hl7v2/tests/index.test.ts
git commit -m "refactor(to-hl7v2): derive delimiters from MSH instead of root.data"
```

---

### Task 5: Update escape plugins to use `getDelimiters()`

**Files:**

- Modify: `packages/hl7v2-decode-escapes/src/index.ts:1-25`
- Modify: `packages/hl7v2-encode-escapes/src/index.ts:1-25`
- Modify: `packages/hl7v2-decode-escapes/tests/index.test.ts:120-137`
- Modify: `packages/hl7v2-encode-escapes/tests/index.test.ts:105-118`

- [ ] **Step 1: Update decode-escapes source**

In `packages/hl7v2-decode-escapes/src/index.ts`, update imports (line 1-4) from:

```typescript
import type { Delimiters, Root, Subcomponent } from "@rethinkhealth/hl7v2-ast";
import { DEFAULT_DELIMITERS } from "@rethinkhealth/hl7v2-utils";
```

To:

```typescript
import type { Delimiters, Root, Subcomponent } from "@rethinkhealth/hl7v2-ast";
import { DEFAULT_DELIMITERS, getDelimiters } from "@rethinkhealth/hl7v2-utils";
```

Update the delimiter resolution (lines 21-25) from:

```typescript
const d = {
  ...DEFAULT_DELIMITERS,
  ...(tree.data as { delimiters?: Partial<Delimiters> })?.delimiters,
  ...options?.delimiters,
};
```

To:

```typescript
const d = {
  ...getDelimiters(tree),
  ...options?.delimiters,
};
```

Update the JSDoc comment on line 17 — remove `- Uses delimiters from Root.data.delimiters if available` and replace with `- Uses delimiters from MSH-1/MSH-2 if available`.

- [ ] **Step 2: Update encode-escapes source**

In `packages/hl7v2-encode-escapes/src/index.ts`, make the same changes:

Update imports (line 1-4) from:

```typescript
import type { Delimiters, Root, Subcomponent } from "@rethinkhealth/hl7v2-ast";
import { DEFAULT_DELIMITERS } from "@rethinkhealth/hl7v2-utils";
```

To:

```typescript
import type { Delimiters, Root, Subcomponent } from "@rethinkhealth/hl7v2-ast";
import { DEFAULT_DELIMITERS, getDelimiters } from "@rethinkhealth/hl7v2-utils";
```

Update the delimiter resolution (lines 21-25) from:

```typescript
const d = {
  ...DEFAULT_DELIMITERS,
  ...(tree.data as { delimiters?: Partial<Delimiters> })?.delimiters,
  ...options?.delimiters,
};
```

To:

```typescript
const d = {
  ...getDelimiters(tree),
  ...options?.delimiters,
};
```

Update the JSDoc comment on line 17 — remove `- Uses delimiters from Root.data.delimiters if available` and replace with `- Uses delimiters from MSH-1/MSH-2 if available`.

- [ ] **Step 3: Update decode-escapes test**

In `packages/hl7v2-decode-escapes/tests/index.test.ts`, replace the test at lines 120-137 that sets `tree.data.delimiters`. The test verifies that `options.delimiters` override tree delimiters — this still works since `options.delimiters` override `getDelimiters()` output:

Replace:

```typescript
  it("options.delimiters override tree.data.delimiters", async () => {
    const input = "MSH|^~\\&\rPID|\\F\\";
    // Set tree delimiters to defaults (field = "|")
    (tree as { data: { delimiters: Partial<Delimiters> } }).data = {
      delimiters: {
        ...DEFAULT_DELIMITERS,
      },
    };
    // ...rest of test
```

With a test that verifies options override MSH-derived delimiters:

```typescript
it("options.delimiters override MSH-derived delimiters", async () => {
  // MSH says field = "|", but options say field = "*"
  const tree = await unified()
    .use(hl7v2Parser)
    .use(hl7v2DecodeEscapes, { delimiters: { field: "*" } })
    .run(unified().use(hl7v2Parser).parse("MSH|^~\\&\rPID|\\F\\"));

  const pid = (tree as Root).children[1];
  const value =
    pid?.type === "segment"
      ? pid.children[0]?.children[0]?.children[0]?.children[0]?.value
      : undefined;
  // \F\ should decode to "*" (the option-provided field delimiter), not "|" (from MSH)
  expect(value).toBe("*");
});
```

Also update the test name on line 20 from `"decodes using custom delimiters from Root.data.delimiters"` to `"decodes using custom delimiters from options"`.

- [ ] **Step 4: Update encode-escapes test**

In `packages/hl7v2-encode-escapes/tests/index.test.ts`, replace the test at lines 105-118 that sets `tree.data.delimiters`:

Replace:

```typescript
  it("options.delimiters override tree.data.delimiters", async () => {
    // ...sets tree.data = { delimiters: {...} }
```

With a test that verifies options override MSH-derived delimiters:

```typescript
it("options.delimiters override MSH-derived delimiters", async () => {
  // Build a tree with standard MSH delimiters
  const tree = m(s("MSH", f("|"), f("^~\\&")), s("PID", f("test*value")));

  // Options say field = "*", so "*" in values should be encoded as \F\
  const result = await unified()
    .use(hl7v2EncodeEscapes, { delimiters: { field: "*" } })
    .run(tree);

  const pid = (result as Root).children[1];
  const value =
    pid?.type === "segment"
      ? pid.children[0]?.children[0]?.children[0]?.children[0]?.value
      : undefined;
  expect(value).toBe("test\\F\\value");
});
```

- [ ] **Step 5: Run escape plugin tests**

Run: `cd packages/hl7v2-decode-escapes && pnpm test`
Run: `cd packages/hl7v2-encode-escapes && pnpm test`
Expected: All tests pass

- [ ] **Step 6: Commit**

```bash
git add packages/hl7v2-decode-escapes/src/index.ts packages/hl7v2-decode-escapes/tests/index.test.ts packages/hl7v2-encode-escapes/src/index.ts packages/hl7v2-encode-escapes/tests/index.test.ts
git commit -m "refactor(escapes): derive delimiters from MSH instead of root.data"
```

---

### Task 6: Update umbrella package tests and fixture files

**Files:**

- Modify: `packages/hl7v2/tests/index.test.ts:26-36`
- Modify: `packages/hl7v2-lint-message-version/tests/fixtures/oru-ast-missing.json`
- Modify: `packages/hl7v2-lint-message-version/tests/fixtures/oru-ast-empty.json`

- [ ] **Step 1: Update umbrella test**

In `packages/hl7v2/tests/index.test.ts`, replace the test at lines 26-36. Change:

```typescript
it("includes delimiters in the output", () => {
  const msg = [
    "MSH|^~\\&|SENDER|FAC|REC|FAC|20240101120000||ADT^A01|123|P|2.5",
  ].join("\r");

  const root = processor.parse(msg);

  expect(root).toBeDefined();
  expect(root.data?.delimiters).toBeDefined();
  expect(root.data?.delimiters).toStrictEqual(DEFAULT_DELIMITERS);
});
```

To:

```typescript
it("does not store delimiters on root.data", () => {
  const msg = [
    "MSH|^~\\&|SENDER|FAC|REC|FAC|20240101120000||ADT^A01|123|P|2.5",
  ].join("\r");

  const root = processor.parse(msg);

  expect(root).toBeDefined();
  expect(root.data).toBeUndefined();
});
```

- [ ] **Step 2: Remove `delimiters` from JSON fixture files**

In `packages/hl7v2-lint-message-version/tests/fixtures/oru-ast-missing.json`, find and remove the `"delimiters"` object from `root.data`. The `data` property should be removed entirely if `delimiters` was its only content, or just the `delimiters` key if other properties exist.

Same for `packages/hl7v2-lint-message-version/tests/fixtures/oru-ast-empty.json`.

- [ ] **Step 3: Run all affected tests**

Run: `cd packages/hl7v2 && pnpm test`
Run: `cd packages/hl7v2-lint-message-version && pnpm test`
Expected: All tests pass

- [ ] **Step 4: Commit**

```bash
git add packages/hl7v2/tests/index.test.ts packages/hl7v2-lint-message-version/tests/fixtures/
git commit -m "refactor: remove root.data.delimiters from tests and fixtures"
```

---

### Task 7: Full test suite and lint verification

**Files:** None (verification only)

- [ ] **Step 1: Run full test suite**

Run: `pnpm test`
Expected: All packages pass

- [ ] **Step 2: Run type checker**

Run: `pnpm check-types`
Expected: No type errors

- [ ] **Step 3: Run linter**

Run: `pnpm format && pnpm lint`
Expected: No lint errors

- [ ] **Step 4: Final commit if formatting changed anything**

```bash
git add -A
git commit -m "style: format after delimiters refactor"
```
