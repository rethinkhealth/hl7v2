---
"@rethinkhealth/hl7v2-util-query": patch
---

Updated `@rethinkhealth/hl7v2-util-query` utility for querying HL7v2 AST nodes using canonical path strings

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
const result = query(root, 'PID-5[1].1.1');
if (result.found) {
  console.log(result.node);
}

// Direct value extraction
const lastName = queryValue(root, 'PID-5[1].1.1'); // "Smith"

// Shortcuts with implicit repetition (single repetition only)
const value = queryValue(root, 'PID-5.2'); // Equivalent to PID-5[1].2

// Smart drill-down (single path only)
const simple = queryValue(root, 'PID-2'); // Returns value if unambiguous

// Check existence
if (exists(root, 'PID-5')) {
  // Field exists
}
```

### Benefits

- **Ergonomic**: Simplifies common single-repetition/single-component cases
- **Safe**: Prevents ambiguity through validation and clear error messages
- **Powerful**: Supports all HL7v2 hierarchy levels (segment → field → repetition → component → subcomponent)
- **Well-tested**: 43 comprehensive tests covering all scenarios