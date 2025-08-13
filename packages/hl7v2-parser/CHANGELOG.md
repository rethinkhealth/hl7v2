# @rethinkhealth/hl7v2

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
  - Added `HL7v2Delimiters` type and default constants.
