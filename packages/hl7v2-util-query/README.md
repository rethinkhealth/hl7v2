# HL7v2 Query Utility

An elegant, simple, yet powerful utility for querying HL7v2 AST nodes using canonical path strings.

## Features

- **Elegant API**: Simple, intuitive functions for querying HL7v2 AST
- **Type Safe**: Full TypeScript support with generic return types
- **Comprehensive**: Supports all HL7v2 path levels (segment, field, repetition, component, subcomponent)
- **Flexible**: Partial matching and convenience functions
- **Well Tested**: 40+ comprehensive tests covering all scenarios

## Installation

```bash
npm install @rethinkhealth/hl7v2-util-query
```

## Quick Start

```typescript
import { query, queryValue, exists } from '@rethinkhealth/hl7v2-util-query';
import { parseHL7v2 } from '@rethinkhealth/hl7v2-parser';

// Parse an HL7v2 message
const message = `MSH|^~\\&|MyApp|MyFacility|ReceivingApp|ReceivingFacility|20231201120000||ADT^A01|12345|P|2.5
PID|1||123456789^^^MRN||Smith^John^Michael||19800101|M|||123 Main St^^Anytown^ST^12345`;

const ast = parseHL7v2(message);

// Query for specific values
const lastName = queryValue(ast, 'PID-5[1].1.1');     // "Smith"
const firstName = queryValue(ast, 'PID-5[1].2.1');    // "John"
const middleName = queryValue(ast, 'PID-5[1].3.1');   // "Michael"
const sendingApp = queryValue(ast, 'MSH-3[1].1.1');   // "MyApp"

// Check if paths exist
if (exists(ast, 'PID-5')) {
  console.log('Patient has a name field');
}

// Query for nodes (with type safety)
const pidSegment = query(ast, 'PID');
if (pidSegment.found && pidSegment.node?.type === 'segment') {
  console.log(`PID segment has ${pidSegment.node.children.length} fields`);
}

const nameField = query(ast, 'PID-5');
if (nameField.found && nameField.node?.type === 'field') {
  console.log(`Name field has ${nameField.node.children.length} repetitions`);
}
```

## API Reference

### Core Functions

#### `query<T>(root, path, options?): QueryResult<T>`

Main query function that finds nodes at the specified path.

```typescript
const result = query(root, 'PID-5[1].1.1');
if (result.found) {
  console.log('Found:', result.node);
}
```

#### `queryValue(root, path, options?): string | null`

Convenience function that directly returns the string value of a subcomponent.

```typescript
const lastName = queryValue(root, 'PID-5[1].1.1'); // "Smith" or null
```

#### `exists(root, path, options?): boolean`

Checks if a path exists without retrieving the node.

```typescript
if (exists(root, 'PID-5')) {
  // Patient has a name field
}
```

#### `getValue(result): string | null`

Extracts the string value from a query result.

```typescript
const result = query(root, 'PID-5[1].1.1');
const value = getValue(result); // "Smith" or null
```

### Path Format

The utility uses canonical HL7 path strings with 1-based indexing:

- `SEGMENT` - Segment level (e.g., "PID", "MSH")
- `SEGMENT-FIELD` - Field level (e.g., "PID-5", "MSH-3")
- `SEGMENT-FIELD[REPETITION]` - Repetition level (e.g., "PID-5[1]")
- `SEGMENT-FIELD[REPETITION].COMPONENT` - Component level (e.g., "PID-5[1].2")
- `SEGMENT-FIELD[REPETITION].COMPONENT.SUBCOMPONENT` - Subcomponent level (e.g., "PID-5[1].2.1")

#### Implicit Repetition

For convenience, you can omit the `[REPETITION]` when accessing components or subcomponents **if and only if** the field has exactly one repetition:

```typescript
// If PID-5 has only one repetition, these are equivalent:
query(root, 'PID-5.2');      // Implicit [1]
query(root, 'PID-5[1].2');   // Explicit [1]

// If PID-5 has multiple repetitions, you MUST be explicit:
query(root, 'PID-5.2');      // ❌ Throws error: "Path is ambiguous"
query(root, 'PID-5[1].2');   // ✅ Works: explicitly selects first repetition
query(root, 'PID-5[2].2');   // ✅ Works: explicitly selects second repetition
```

This prevents ambiguity while making the common single-repetition case more ergonomic.

### Options

#### `QueryOptions`

```typescript
type QueryOptions = {
  createMissing?: boolean;  // Reserved for future write operations
};
```

### Types

#### `QueryResult<T>`

```typescript
type QueryResult<T extends Nodes = Nodes> = {
  node: T | null;     // The found node, or null if not found
  path: string;       // The path that was queried
  found: boolean;     // Whether the node was found
};
```

#### `ParsedPath`

```typescript
type ParsedPath = {
  segmentId: string;
  field?: number;        // 1-based HL7 field number
  repetition?: number;   // 1-based repetition number
  component?: number;    // 1-based component number
  subcomponent?: number; // 1-based subcomponent number
};
```

## Common Use Cases

### Extract Patient Demographics

```typescript
// Get patient name components
const lastName = queryValue(ast, 'PID-5[1].1.1');
const firstName = queryValue(ast, 'PID-5[1].2.1');
const middleName = queryValue(ast, 'PID-5[1].3.1');

// Get patient ID
const patientId = queryValue(ast, 'PID-3[1].1.1');

// Get date of birth
const dob = queryValue(ast, 'PID-7[1].1.1');
```

### Validate Message Structure

```typescript
// Check required fields
const hasMessageHeader = exists(ast, 'MSH');
const hasPatientId = exists(ast, 'PID-3[1].1.1');
const hasSendingApp = exists(ast, 'MSH-3[1].1.1');

if (!hasMessageHeader) {
  throw new Error('Missing MSH segment');
}
```

### Process Observation Results

```typescript
// Find all OBX segments (would need multiple segment support)
const observationValue = queryValue(ast, 'OBX-5[1].1.1');
const observationUnits = queryValue(ast, 'OBX-6[1].1.1');
const referenceRange = queryValue(ast, 'OBX-7[1].1.1');
```

## Error Handling

The utility provides clear error messages for invalid paths:

```typescript
try {
  parsePath('invalid-path');
} catch (error) {
  console.error(error.message); // "Invalid HL7 path format: ..."
}

try {
  parsePath('PID-0'); // Field numbers must be ≥1
} catch (error) {
  console.error(error.message); // "Field number must be ≥1, got: 0"
}
```

## Performance

- **Fast**: Direct AST traversal with no unnecessary iterations
- **Memory Efficient**: Returns references to existing nodes, no copying
- **Type Safe**: Full TypeScript support prevents runtime errors

## Contributing

We welcome contributions! Please see our [Contributing Guide][github-contributing] for more details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code of Conduct

To ensure a welcoming and positive environment, we have a [Code of Conduct][github-code-of-conduct] that all contributors and participants are expected to adhere to.

## License

Copyright 2025 Rethink Health, SUARL. All rights reserved.

This program is licensed to you under the terms of the [MIT License](https://opensource.org/licenses/MIT). This program is distributed WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [LICENSE][github-license] file for details.

[github-code-of-conduct]: https://github.com/rethinkhealth/hl7v2/blob/main/CODE_OF_CONDUCT.md
[github-license]: https://github.com/rethinkhealth/hl7v2/blob/main/LICENSE
[github-contributing]: https://github.com/rethinkhealth/hl7v2/blob/main/CONTRIBUTING.md