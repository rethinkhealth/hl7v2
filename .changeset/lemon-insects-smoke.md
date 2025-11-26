---
"@rethinkhealth/hl7v2-utils": minor
---

Added conformance validation utilities for HL7v2 messages.

New features:

- `checkOptionality(node, optionality)`: Validate usage constraints (Required, Optional, etc.).
- `checkCardinality(node, min, max)`: Validate field repetition counts.
- `checkLength(node, max, min?)`: Validate content length recursively.
- `isEmptyNode` updated to correctly handle deep empty structures (e.g., fields with multiple empty components).
- `ValidationResult` type for standardized validation reporting.

These utilities are stateless and can be composed to build custom validators or linters.
