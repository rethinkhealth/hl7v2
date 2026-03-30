# @rethinkhealth/hl7v2-jsonify

## 0.10.1

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.10.1

## 0.10.0

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.10.0

## 0.9.0

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.9.0

## 0.8.0

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.8.0

## 0.7.1

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.7.1

## 0.7.0

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.7.0

## 0.6.0

### Patch Changes

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

## 0.4.2

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.4.2

## 0.4.1

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.4.1

## 0.4.0

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.4.0

## 0.3.4

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.3.4

## 0.3.3

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.3.3

## 0.3.2

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.3.2

## 0.3.1

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.3.1

## 0.3.0

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.3.0

## 0.2.31

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.31

## 0.2.30

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.30

## 0.2.29

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.29

## 0.2.28

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.28

## 0.2.27

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.27

## 0.2.26

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.26

## 0.2.25

### Patch Changes

- @rethinkhealth/hl7v2-ast@0.2.25

## 0.2.24

### Patch Changes

- 8385da0: Refactored the error handling to take advantage of the `vfile` messages pattern
- Updated dependencies [8385da0]
  - @rethinkhealth/hl7v2-ast@0.2.24

## 0.2.23

### Patch Changes

- a8d56ec: We have updated the HL7 v2 jsonify architecture to allow returning a JSON object instead of a string. The processor result is now stored in `file.result` rather than as a string value. This change improves type safety, enables more flexible downstream processing, and matches expected usage for consumers needing deep access to parsed message structure.
  - @rethinkhealth/hl7v2-ast@0.2.23

## 0.2.22

## 0.2.21

## 0.2.20

### Patch Changes

- e16e519: Add a new `segment-header` node type to the HL7v2 AST ecosystem. This change clarifies segment structure, improves architectural consistency, and enhances the robustness and maintainability of the HL7v2 AST.

## 0.2.19

### Patch Changes

- 04954f1: Refactored the HL7v2 suite to introduce a new architecture for segment nodes. Segment nodes now include a dedicated `name` attribute by default, which explicitly represents the segment header. This enhancement eliminates the previous need to encode the segment header as the first field within the segment's children array. As a result, segment construction and parsing are now more intuitive, and downstream consumers can reliably access segment names via the `name` property rather than inferring them from field data. This change improves type safety, code clarity, and aligns the AST model more closely with HL7v2 semantics.

## 0.2.18

## 0.2.17

## 0.2.16

## 0.2.15

## 0.2.14

## 0.2.13

## 0.2.12

## 0.2.11

## 0.2.10

## 0.2.9

### Patch Changes

- d7af0e6: Refactoring to improve package management and linting

## 0.2.8

## 0.2.7

### Patch Changes

- cd49b6f: Fixed a small bug with typing of jsonify

## 0.2.6

### Patch Changes

- b7ccb39: Fixed a small bug with typing of jsonify

## 0.2.5

### Patch Changes

- 09597f7: Improved jsonification of the HL7v2 message. The process now returns `""` instead of empty array `[]`.

## 0.2.4

### Patch Changes

- 28fef0d: The parser `hl7v2-parser` and the `hl7v2-jsonify` ecosystem have been updated to support more complex HL7v2 message structures and to improve efficiency:
  - **Parser Enhancements**:
    - The parser now more closely follows the [unist](https://github.com/syntax-tree/unist) guidelines, providing a clearer and more structured AST (Abstract Syntax Tree) for HL7v2 messages.
    - Node types, hierarchy, and value handling have been clarified and made more consistent, ensuring a lossless and predictable representation of HL7v2 data.
    - Edge cases such as trailing delimiters, empty fields, and repeated segments are handled more robustly, resulting in more accurate parsing of real-world HL7v2 messages.
    - Internal processing has been optimized to reduce unnecessary allocations and improve parsing speed, especially for large or complex messages.

  - **`hl7v2-jsonify` Improvements**:
    - The JSON conversion logic now leverages the improved AST, enabling more accurate and flexible transformation of HL7v2 messages into JSON.
    - Support for advanced HL7v2 constructs (such as nested repetitions and components) has been expanded, making the output more faithful to the original message structure.
    - Performance optimizations reduce memory usage and processing time when converting large batches of messages.

  These changes make the parser and jsonify tools more reliable and efficient for complex HL7v2 processing tasks, and provide a stronger foundation for downstream analytics and interoperability.

## 0.2.3

### Patch Changes

- 6c779c3: Fix missing first components in multicomponent fields

  Fixed a critical bug where the first component of multicomponent HL7v2 fields was being dropped from the JSON output. The issue occurred in the jsonify package's index conversion logic:
  - **Problem**: Components with 0-based indices were incorrectly converted to -1-based indices, causing `array[-1] = value` assignments that don't create valid array elements
  - **Root cause**: The conversion logic `n.index - 1` was applied to all node types, but should only apply to fields (to skip the segment header at index 0)
  - **Solution**: Components and subcomponents now preserve their original 0-based indices, while fields continue to have their indices converted for proper array positioning

  **Examples of fields that are now fixed:**
  - `ORU^R01` now correctly parses to `["ORU", "R01"]` instead of `["R01"]`
  - `PATID1234^5^M11` now correctly parses to `["PATID1234", "5", "M11"]` instead of `["5", "M11"]`

  Added comprehensive test coverage to prevent regression of this issue.

## 0.2.2

## 0.2.1

### Patch Changes

- dbd1b13: This PR improves the HL7v2 JSON conversion utilities and related packages. It enhances the `@rethinkhealth/hl7v2-jsonify` package to better handle edge cases, such as missing segment names, non-numeric indices, and deeply nested HL7 structures. The update also includes additional tests to ensure robust and predictable behavior. Patch releases are published for all related HL7v2 packages to reflect these improvements and maintain compatibility across the ecosystem.
