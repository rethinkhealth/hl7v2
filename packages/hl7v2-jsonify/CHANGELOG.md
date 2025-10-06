# @rethinkhealth/hl7v2-jsonify

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
