# @rethinkhealth/hl7v2-util-query

## 0.7.1

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.7.1
- @rethinkhealth/hl7v2-utils@0.7.1

## 0.7.0

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.7.0
- @rethinkhealth/hl7v2-utils@0.7.0

## 0.6.0

### Minor Changes

- 0b57ba9: Add `set(root, path, value)` function for writing values to HL7v2 AST paths. Creates all missing intermediate nodes (fields, repetitions, components, subcomponents) as needed.

### Patch Changes

- 7763c22: Optimize `select()` and `value()` performance for common query patterns.
  - Add pre-computed hot paths for MSH field reads (MSH-3 through MSH-12) — skips regex parsing and cache lookups entirely
  - Simplify parse cache by removing unnecessary LRU eviction overhead

- Updated dependencies [95e32f2]
  - @rethinkhealth/hl7v2-utils@0.6.0
  - @rethinkhealth/hl7v2-ast@0.6.0

## 0.5.0

### Minor Changes

- 514f3dc: Remove `SegmentHeader` node from the AST; promote `Segment.name` as the sole source of truth for segment identifiers.

  **Breaking changes:**
  - `Segment.children` is now `Field[]` (was `[SegmentHeader, ...Field[]]`). Field indexing shifts by -1: `children[0]` is now the first field, not the segment header.
  - The `"segment-header"` node type no longer exists. Visitors targeting it must visit `"segment"` and read `node.name` instead.
  - `segment.children.slice(1)` to access fields becomes `segment.children`.

  **Why:**

  The `SegmentHeader` child node duplicated the `Segment.name` property, creating two representations of the same data that could drift out of sync. Removing it aligns `Segment` with `Group`, which already uses a `name` property — and eliminates the off-by-one indexing complexity that was a recurring source of bugs.

  **Migration:**

  ```diff
  - const name = segment.children[0].value;
  + const name = segment.name;

  - const fields = segment.children.slice(1) as Field[];
  + const fields = segment.children;

  - visit(tree, "segment-header", (node) => { ... });
  + visit(tree, "segment", (node) => { console.log(node.name); });
  ```

  See [ADR 0009](./docs/adr/0009-remove-segment-header-node.md) for full rationale and implementation details.

### Patch Changes

- Updated dependencies [514f3dc]
  - @rethinkhealth/hl7v2-ast@0.5.0
  - @rethinkhealth/hl7v2-utils@0.5.0

## 0.4.2

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.4.2
- @rethinkhealth/hl7v2-utils@0.4.2

## 0.4.1

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.4.1
- @rethinkhealth/hl7v2-utils@0.4.1

## 0.4.0

### Patch Changes

- Updated dependencies [0145c27]
  - @rethinkhealth/hl7v2-utils@0.4.0
  - @rethinkhealth/hl7v2-ast@0.4.0

## 0.3.4

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.3.4
- @rethinkhealth/hl7v2-utils@0.3.4

## 0.3.3

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.3.3
- @rethinkhealth/hl7v2-utils@0.3.3

## 0.3.2

### Patch Changes

- Updated dependencies [0dda39c]
  - @rethinkhealth/hl7v2-utils@0.3.2
  - @rethinkhealth/hl7v2-ast@0.3.2

## 0.3.1

### Patch Changes

- Updated dependencies [2f029e2]
  - @rethinkhealth/hl7v2-utils@0.3.1
  - @rethinkhealth/hl7v2-ast@0.3.1

## 0.3.0

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.3.0
- @rethinkhealth/hl7v2-utils@0.3.0

## 0.2.31

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.31
- @rethinkhealth/hl7v2-utils@0.2.31

## 0.2.30

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.30
- @rethinkhealth/hl7v2-utils@0.2.30

## 0.2.29

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.29
- @rethinkhealth/hl7v2-utils@0.2.29

## 0.2.28

### Patch Changes

- db630bd: We've polished the query API to be more consistent, concise, and delightful to use!

  ## Breaking Change

  **Renamed:** `getValue()` → `value()`

  ```typescript
  // Before (verbose)
  import { getValue } from "@rethinkhealth/hl7v2-util-query";
  const result = getValue(root, "PID-5");

  // After (clean!)
  import { value } from "@rethinkhealth/hl7v2-util-query";
  const result = value(root, "PID-5");
  ```

  ## Why This Change?

  Your API now follows a consistent pattern of **simple verbs**:
  - `select()` — get a single node
  - `selectAll()` — get multiple nodes
  - `value()` — extract string value
  - `matches()` — check existence
  - `parse()` — parse path syntax

  Notice the pattern? **No "get" prefixes.** Just clear, direct verbs. This makes your code read like natural language:

  ```typescript
  // Reads beautifully 📖
  const lastName = value(root, "PID-5[1].1")?.value;
  const segment = select(root, "PID");
  const allObs = selectAll(root, "OBX");

  if (matches(root, "PID-5")) {
    // Patient has a name
  }
  ```

  ## Migration Guide

  **Find and Replace:**
  - `getValue` → `value` (in imports and usage)

  That's it! The function signature and return type are identical.

  ## Benefits
  - ✅ **shorter** — `value` vs `getValue` (5 vs 8 characters)
  - ✅ **Consistent API** — all simple verbs, no prefixes
  - ✅ **Better readability** — less visual noise in your code
  - ✅ **Industry alignment** — follows conventions from DOM, lodash, and other query libraries

  ## What Else Changed?

  Under the hood, we also:
  - ✅ Added **parse memoization** for better performance
  - ✅ Implemented `selectAll()` to properly handle multiple groups
  - ✅ Added `matches()` for cleaner existence checks
  - ✅ Enhanced TypeScript type inference

  ## Full Example

  ```typescript
  import {
    select,
    selectAll,
    value,
    matches,
    parse,
  } from "@rethinkhealth/hl7v2-util-query";

  // Extract patient demographics
  const lastName = value(ast, "PID-5[1].1.1")?.value;
  const firstName = value(ast, "PID-5[1].2.1")?.value;

  // Get all observations
  const observations = selectAll(ast, "OBX");
  for (const { node } of observations) {
    const code = value(node, "OBX-3.1")?.value;
    const result = value(node, "OBX-5.1")?.value;
    console.log(`${code}: ${result}`);
  }

  // Validate message structure
  if (!matches(ast, "MSH") || !matches(ast, "PID")) {
    throw new Error("Invalid message structure");
  }
  ```

  - @rethinkhealth/hl7v2-ast@0.2.28
  - @rethinkhealth/hl7v2-utils@0.2.28

## 0.2.27

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.27
- @rethinkhealth/hl7v2-utils@0.2.27

## 0.2.26

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.26
- @rethinkhealth/hl7v2-utils@0.2.26

## 0.2.25

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.25
- @rethinkhealth/hl7v2-utils@0.2.25

## 0.2.24

### Patch Changes

- 8385da0: Refactored the error handling to take advantage of the `vfile` messages pattern
- Updated dependencies [8385da0]
  - @rethinkhealth/hl7v2-utils@0.2.24
  - @rethinkhealth/hl7v2-ast@0.2.24

## 0.2.23

### Patch Changes

- Updated dependencies [f2d00ea]
  - @rethinkhealth/hl7v2-utils@0.2.23
  - @rethinkhealth/hl7v2-ast@0.2.23

## 0.2.22

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.22
- @rethinkhealth/hl7v2-utils@0.2.22

## 0.2.21

### Patch Changes

- Updated dependencies [41a4304]
  - @rethinkhealth/hl7v2-utils@0.2.21
  - @rethinkhealth/hl7v2-ast@0.2.21

## 0.2.20

### Patch Changes

- e16e519: Add a new `segment-header` node type to the HL7v2 AST ecosystem. This change clarifies segment structure, improves architectural consistency, and enhances the robustness and maintainability of the HL7v2 AST.
- 643270b: Replace the query API with a minimal surface: `parse`, `find`, `value`, and `has`.
  All helper names and return shapes changed to favor a simpler, faster lookup path.
- Updated dependencies [e16e519]
  - @rethinkhealth/hl7v2-ast@0.2.20
  - @rethinkhealth/hl7v2-utils@0.2.20

## 0.2.19

### Patch Changes

- 04954f1: Refactored the HL7v2 suite to introduce a new architecture for segment nodes. Segment nodes now include a dedicated `name` attribute by default, which explicitly represents the segment header. This enhancement eliminates the previous need to encode the segment header as the first field within the segment's children array. As a result, segment construction and parsing are now more intuitive, and downstream consumers can reliably access segment names via the `name` property rather than inferring them from field data. This change improves type safety, code clarity, and aligns the AST model more closely with HL7v2 semantics.
- e311b1a: Enhanced the query engine to fully support HL7v2 group structures, enabling accurate parsing and traversal of nested and repeated groups within HL7v2 messages. This update allows queries to target segments and fields within specific group instances, improving compatibility with complex HL7v2 message formats.
- Updated dependencies [04954f1]
- Updated dependencies [872815c]
  - @rethinkhealth/hl7v2-ast@0.2.19
  - @rethinkhealth/hl7v2-utils@0.2.19

## 0.2.18

### Patch Changes

- c439092: Fixed a bug in the query utility.
  - @rethinkhealth/hl7v2-ast@0.2.18
  - @rethinkhealth/hl7v2-utils@0.2.18

## 0.2.17

### Patch Changes

- 712ee4c: Updated `@rethinkhealth/hl7v2-util-query` utility for querying HL7v2 AST nodes using canonical path strings

  ### Features
  - **Path-based Querying**: Query AST nodes using intuitive HL7 path syntax (e.g., `PID-5[1].2.1`)
  - **Implicit Repetition**: Omit `[1]` when accessing components if field has only one repetition (e.g., `PID-5.2` → `PID-5[1].2`)
  - **Smart Value Extraction**: `getValue()` automatically drills down through single-child paths to reach subcomponent values
  - **Ambiguity Detection**: Throws clear errors when paths are ambiguous (multiple repetitions) or returns `null` for ambiguous value extraction
  - **Type Safety**: Full TypeScript support with generic return types
  - **Convenience Functions**: `query()`, `queryValue()`, `exists()`, and `getValue()` for different use cases

  ### API

  ```typescript
  // Query for nodes
  const result = query(root, "PID-5[1].1.1");
  if (result.found) {
    console.log(result.node);
  }

  // Direct value extraction
  const lastName = queryValue(root, "PID-5[1].1.1"); // "Smith"

  // Shortcuts with implicit repetition (single repetition only)
  const value = queryValue(root, "PID-5.2"); // Equivalent to PID-5[1].2

  // Smart drill-down (single path only)
  const simple = queryValue(root, "PID-2"); // Returns value if unambiguous

  // Check existence
  if (exists(root, "PID-5")) {
    // Field exists
  }
  ```

  ### Benefits
  - **Ergonomic**: Simplifies common single-repetition/single-component cases
  - **Safe**: Prevents ambiguity through validation and clear error messages
  - **Powerful**: Supports all HL7v2 hierarchy levels (segment → field → repetition → component → subcomponent)
  - **Well-tested**: 43 comprehensive tests covering all scenarios
  - @rethinkhealth/hl7v2-ast@0.2.17
  - @rethinkhealth/hl7v2-utils@0.2.17

## 0.2.16

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.16
- @rethinkhealth/hl7v2-utils@0.2.16

## 0.2.15

### Patch Changes

- 088c118: New utility for querying HL7v2 AST nodes using canonical path strings.
  - @rethinkhealth/hl7v2-ast@0.2.15
  - @rethinkhealth/hl7v2-utils@0.2.15
