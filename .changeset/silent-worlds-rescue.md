---
"@rethinkhealth/hl7v2-jsonify": patch
"@rethinkhealth/hl7v2-parser": patch
---

The parser `hl7v2-parser` and the `hl7v2-jsonify` ecosystem have been updated to support more complex HL7v2 message structures and to improve efficiency:

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

