# @rethinkhealth/hl7v2

## 0.3.0

### Patch Changes

- e582209: Added position tracking to the `Root` node for accurate source location information:

  - **Root position now included**: The `Root` node now includes a `position` field spanning from the first token to the last token in the document
  - **Streaming implementation**: Position tracking is performed efficiently in a streaming fashion:
    - `root.position.start` is set once on the first TEXT token
    - `root.position.end` is set once during finalization
    - Uses a separate `documentEnd` tracker that persists across segment boundaries
  - **Accurate source mapping**: The position accurately reflects the actual source text boundaries, including trailing delimiters when present
  - **Empty document handling**: Empty documents receive a default position of `{start: {line: 1, column: 1, offset: 0}, end: {line: 1, column: 1, offset: 0}}`

  This enables better error reporting, source mapping, and tooling integration by providing complete position information for the entire HL7v2 document.

  - @rethinkhealth/hl7v2-utils@0.3.0

## 0.2.31

### Patch Changes

- 92333a7: Updated the parser to ensure that every component always contains at least one subcomponent, even when empty. This change eliminates ambiguity in the parsed AST structure and includes internal refactoring for improved maintainability.

  **Impact:**

  - Empty fields/components/repetitions now consistently have a subcomponent with an empty string value (`""`)
  - Previously, empty structures could have zero subcomponents, requiring consumers to check both for missing children AND empty values
  - The structure is now predictable: `field → repetition → component → subcomponent` is always present

  **Value:**

  - **Simplified consumption**: Consumers no longer need to handle two different representations of "empty" (missing vs. empty string)
  - **Safer code**: Reduces null/undefined checking and potential runtime errors when traversing the AST
  - **Consistent semantics**: An empty field is unambiguously represented, making it easier to distinguish between "no data provided" and "parsing error"
  - **Better developer experience**: Code working with the AST becomes simpler and more maintainable

  **Internal Improvements:**

  - Extracted reusable helper functions (`createSubcomponent`, `createComponent`, `createFieldRepetition`, `createField`) to reduce code duplication
  - Simplified state management with a centralized `resetState` function
  - Reduced cognitive complexity by using early returns in nested conditionals
  - Maintained performance while improving code clarity and maintainability

  This is a non-breaking change that makes the parser output more consistent and predictable.

  - @rethinkhealth/hl7v2-utils@0.2.31

## 0.2.30

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.2.30

## 0.2.29

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.2.29

## 0.2.28

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.2.28

## 0.2.27

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.2.27

## 0.2.26

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.2.26

## 0.2.25

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.2.25

## 0.2.24

### Patch Changes

- 8385da0: Refactored the error handling to take advantage of the `vfile` messages pattern
- Updated dependencies [8385da0]
  - @rethinkhealth/hl7v2-utils@0.2.24

## 0.2.23

### Patch Changes

- Updated dependencies [f2d00ea]
  - @rethinkhealth/hl7v2-utils@0.2.23

## 0.2.22

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.2.22

## 0.2.21

### Patch Changes

- Updated dependencies [41a4304]
  - @rethinkhealth/hl7v2-utils@0.2.21

## 0.2.20

### Patch Changes

- e16e519: Add a new `segment-header` node type to the HL7v2 AST ecosystem. This change clarifies segment structure, improves architectural consistency, and enhances the robustness and maintainability of the HL7v2 AST.
  - @rethinkhealth/hl7v2-utils@0.2.20

## 0.2.19

### Patch Changes

- 04954f1: Refactored the HL7v2 suite to introduce a new architecture for segment nodes. Segment nodes now include a dedicated `name` attribute by default, which explicitly represents the segment header. This enhancement eliminates the previous need to encode the segment header as the first field within the segment's children array. As a result, segment construction and parsing are now more intuitive, and downstream consumers can reliably access segment names via the `name` property rather than inferring them from field data. This change improves type safety, code clarity, and aligns the AST model more closely with HL7v2 semantics.
  - @rethinkhealth/hl7v2-utils@0.2.19

## 0.2.18

### Patch Changes

- c439092: Minor fix to the configuration of HL7v2 parser to allow passing partial demilter object as an option.
- c439092: Minor fix
  - @rethinkhealth/hl7v2-utils@0.2.18

## 0.2.17

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.2.17

## 0.2.16

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.2.16

## 0.2.15

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.2.15

## 0.2.14

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.2.14

## 0.2.13

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.2.13

## 0.2.12

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.2.12

## 0.2.11

### Patch Changes

- 2b86a32: Minor fix to the delimiters and carriage return for segments.
  - @rethinkhealth/hl7v2-utils@0.2.11

## 0.2.10

### Patch Changes

- Updated dependencies [e279025]
  - @rethinkhealth/hl7v2-utils@0.2.10

## 0.2.9

### Patch Changes

- d7af0e6: Refactoring to improve package management and linting
- Updated dependencies [d7af0e6]
  - @rethinkhealth/hl7v2-utils@0.2.9

## 0.2.8

### Patch Changes

- Updated dependencies [8d0a1ce]
  - @rethinkhealth/hl7v2-utils@0.2.8

## 0.2.7

### Patch Changes

- cd49b6f: Added `position` information to all nodes in the HL7v2 AST. Each node now includes a `position` property that indicates the start and end offsets (line, column, and character offset) of the node's value within the original HL7v2 message. This enables precise mapping between parsed data and the source message, supporting advanced features like error reporting, highlighting, and traceability.
  - @rethinkhealth/hl7v2-utils@0.2.7

## 0.2.6

### Patch Changes

- @rethinkhealth/hl7v2-utils@0.2.6

## 0.2.5

### Patch Changes

- 6a4d5b8: Several improvements to the HL7v2 package, focusing on integrating the HL7v2 escape sequence decoder, enhancing test coverage with Vitest, and ensuring the parser uses default preprocessors.
- c2eb48c: Updates to the HL7v2 parser and tokenizer to improve how the MSH segment is tokenized and parsed, specifically separating the field delimiter (MSH.1) from the encoding characters (MSH.2). It also simplifies the tokenizer API and updates related tests for correctness.
- 93d9197: Refactored and improved the HL7v2 parser's preprocessing workflow, making the preprocessor pipeline more explicit and type-safe. The changes simplify how preprocessing steps are configured and applied, and update related types and tests for consistency.
  - @rethinkhealth/hl7v2-utils@0.2.5

## 0.2.4

### Patch Changes

- b4b9944: Refactored to remove async management, as unified's processing pipeline is inherently synchronous and does not support asynchronous plugins or workflows.
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

- Updated dependencies [28fef0d]
  - @rethinkhealth/hl7v2-utils@0.2.4

## 0.2.3

## 0.2.2

## 0.2.1

### Patch Changes

- dbd1b13: This PR improves the HL7v2 JSON conversion utilities and related packages. It enhances the `@rethinkhealth/hl7v2-jsonify` package to better handle edge cases, such as missing segment names, non-numeric indices, and deeply nested HL7 structures. The update also includes additional tests to ensure robust and predictable behavior. Patch releases are published for all related HL7v2 packages to reflect these improvements and maintain compatibility across the ecosystem.
- a25e1c4: Improve HL7v2 message parsing logic for better delimiter detection and position tracking. Fix minor bugs affecting empty and whitespace-only message handling.

## 0.2.0

### Minor Changes

- 813d884: Update to a monorepo package architectue

### Patch Changes

- dfd8eeb: **🚨 Breaking Changes**

  - Replaced legacy key/value HL7v2 parser with a **DOM-like Unist-compatible tree** (`HL7v2Node`).
  - Parsing now returns a `message` node with `children` representing segments, fields, components, and subcomponents.
  - All nodes now include a `position` object with `line`, `column`, and `offset` for precise source mapping.

  **✨ New Features**

  - **Lossless Round-Trip**: Parser preserves delimiters and exact positions for perfect serialization via `serializeHL7Tree`.
  - **Auto-Detect Delimiters**: `MSH-1` and `MSH-2` are now parsed to configure field, component, repetition, and subcomponent separators automatically.
  - **Custom Delimiters**: Pass `ParseOptions.delimiters` to override any delimiter.
  - **Line/Column Tracking**: Every node now includes `position.start` and `position.end` with 1-based line/column and 0-based offsets.
  - **Unist Compatibility**: Output conforms to [Unist](https://github.com/syntax-tree/unist) spec for integration with Unified pipelines.

  **🛠 Internal**

  - Removed regex-based segment splitting in favor of optimized string split for performance.
  - Refactored parser core to allow plugins such as validation, annotation, and transformation stages.
  - Added `Delimiters` type and default constants.
