# @rethinkhealth/hl7v2-util-query

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
