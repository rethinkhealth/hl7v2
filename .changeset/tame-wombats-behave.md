---
"@rethinkhealth/hl7v2-utils": patch
---

Add diagnostic reporting system for standardized error/warning/info messages across the HL7v2 ecosystem.

This release introduces a new diagnostic reporting system that provides a consistent way for linters, validators, and transformers to report issues:

- **New `report()` function**: Reports diagnostics to VFile with automatic rule ID construction, severity mapping, and context interpolation
- **New `Diagnostic` type**: Type-safe diagnostic rule definitions with structured metadata (type, namespace, code, severity, message formatter)
- **Rule ID format**: Automatic construction of rule IDs in the format `type:namespace:code` (e.g., `lint:field:required`)
- **VFile integration**: Seamless integration with VFile ecosystem including position tracking, severity levels, and help URLs
- **Comprehensive documentation**: Updated README with API documentation, usage examples, and a complete custom linter example
