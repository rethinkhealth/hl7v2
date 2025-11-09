---
"@rethinkhealth/hl7v2-parser": patch
---

Updated the parser to ensure that every component always contains at least one subcomponent, even when empty. This change eliminates ambiguity in the parsed AST structure.

**Impact:**

- Empty fields/components/repetitions now consistently have a subcomponent with an empty string value (`""`)
- Previously, empty structures could have zero subcomponents, requiring consumers to check both for missing children AND empty values
- The structure is now predictable: `field → repetition → component → subcomponent` is always present

**Value:**

- **Simplified consumption**: Consumers no longer need to handle two different representations of "empty" (missing vs. empty string)
- **Safer code**: Reduces null/undefined checking and potential runtime errors when traversing the AST
- **Consistent semantics**: An empty field is unambiguously represented, making it easier to distinguish between "no data provided" and "parsing error"
- **Better developer experience**: Code working with the AST becomes simpler and more maintainable

This is a non-breaking change that makes the parser output more consistent and predictable.
