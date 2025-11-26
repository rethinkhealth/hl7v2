# @rethinkhealth/hl7v2-utils

A utility package for working with HL7v2 messages, most commonly used within the `@rethinkhealth/hl7v2` ecosystem — a unist-inspired collection of plugins and utilities designed to parse, transform, validate, and manipulate HL7v2 messages.

This package provides core utilities including:

- Diagnostic reporting system for linters, validators, and transformers
- Standard HL7v2 delimiters
- AST node utility functions
- Conformance validation utilities (cardinality, length, optionality)

## Installation

```bash
npm install @rethinkhealth/hl7v2-utils
```

## API

### `report(file, rule, options?)`

Report a diagnostic to a VFile. This function is the standard way to report issues in the HL7v2 ecosystem.

#### Parameters

- `file` (`VFile | null | undefined`) - The VFile to report to
- `rule` (`Diagnostic`) - The diagnostic rule definition
- `options` (`ReportOptions`, optional)
  - `node` (`Node`, optional) - The AST node related to the diagnostic
  - `context` (`Record<string, unknown>`, optional) - Context data passed to the diagnostic's message function

#### Example

```typescript
import { report } from '@rethinkhealth/hl7v2-utils';
import type { Diagnostic } from '@rethinkhealth/hl7v2-utils';
import { VFile } from 'vfile';

// Define a diagnostic rule
const requiredFieldRule: Diagnostic = {
  type: 'lint',
  namespace: 'field',
  code: 'required',
  title: 'Required Field Missing',
  description: 'A required field is missing from the segment.',
  severity: 'error',
  message: (ctx) => `Field '${ctx.fieldPath}' is required`,
  helpUrl: 'https://example.com/docs/required-field'
};

// Report the diagnostic
const file = new VFile();
report(file, requiredFieldRule, {
  context: { fieldPath: 'PID-5' },
  node: segmentNode
});
```

### `getByteLength(node)`

Calculate the byte length of any HL7v2 AST node. This utility efficiently computes the total serialized length including all children and separators (assumed to be 1 byte each).

#### Parameters

- `node` (`Nodes | null | undefined`) - The AST node to measure

#### Returns

`number` - The total byte length when the node is serialized

#### Algorithm

- For literal nodes (Subcomponent, SegmentHeader): returns the byte length of the value using UTF-8 encoding (i.e., `Buffer.byteLength(value, 'utf8')`)
- For parent nodes: recursively sums the byte length of all children plus 1 byte per separator between children
- Handles all node types: Root, Segment, Group, Field, FieldRepetition, Component, Subcomponent

#### Performance

The function is optimized for performance with O(n) time complexity where n is the total number of nodes in the tree. It uses a simple recursive approach with minimal overhead.

#### Example

```typescript
import { getByteLength } from '@rethinkhealth/hl7v2-utils';
import type { Field } from '@rethinkhealth/hl7v2-ast';

const field: Field = {
  type: 'field',
  children: [
    {
      type: 'field-repetition',
      children: [
        {
          type: 'component',
          children: [
            { type: 'subcomponent', value: 'SMITH' },
            { type: 'subcomponent', value: 'JOHN' }
          ]
        }
      ]
    }
  ]
};

// Calculate: SMITH&JOHN = 5 + 1 + 4 = 10 bytes
const length = getByteLength(field); // Returns: 10
```

#### Use Cases

- Validating field or message size constraints
- Memory allocation planning
- Message size reporting and analytics
- Performance optimization by avoiding full serialization

### `getLength(node)`

Calculate the string length of any HL7v2 AST node. This utility efficiently computes the total serialized character length including all children and separators (assumed to be 1 character each).

#### Parameters

- `node` (`Nodes | null | undefined`) - The AST node to measure

#### Returns

`number` - The total string length when the node is serialized

#### Algorithm

- For literal nodes (Subcomponent, SegmentHeader): returns `value.length` (JavaScript string length)
- For parent nodes: recursively sums the string length of all children plus 1 character per separator between children
- Handles all node types: Root, Segment, Group, Field, FieldRepetition, Component, Subcomponent

#### Important Note

Returns JavaScript string length (UTF-16 code units). For UTF-8 byte length (e.g., for wire protocol or size constraints), use `getByteLength` instead. These values differ for characters outside the ASCII range.

#### Performance

The function is optimized for performance with O(n) time complexity where n is the total number of nodes in the tree. It uses a simple recursive approach with minimal overhead.

#### Example

```typescript
import { getLength } from '@rethinkhealth/hl7v2-utils';
import type { Field } from '@rethinkhealth/hl7v2-ast';

const field: Field = {
  type: 'field',
  children: [
    {
      type: 'field-repetition',
      children: [
        {
          type: 'component',
          children: [
            { type: 'subcomponent', value: 'SMITH' },
            { type: 'subcomponent', value: 'JOHN' }
          ]
        }
      ]
    }
  ]
};

// Calculate: SMITH&JOHN = 5 + 1 + 4 = 10 characters
const length = getLength(field); // Returns: 10
```

#### Use Cases

- UI display and text formatting
- Character-based validation rules
- String manipulation operations
- Quick length checks where byte-level precision is not required

#### Comparison with `getByteLength`

```typescript
import { getLength, getByteLength } from '@rethinkhealth/hl7v2-utils';

const subcomponent = { type: 'subcomponent', value: 'café' };

getLength(subcomponent);     // Returns: 4 (4 characters)
getByteLength(subcomponent); // Returns: 5 (5 bytes in UTF-8: c-a-f-C3-A9)
```

### Conformance Utilities

The package provides stateless, composable functions to validate HL7v2 AST nodes against constraints like optionality (usage), cardinality, and length.

#### `ValidationResult`

All conformance functions return a `ValidationResult` object:

```typescript
type ValidationResult = 
  | { ok: true }
  | { 
      ok: false; 
      error: { 
        code: string; 
        message: string;
        expected?: string | number | Array<string | number>;
        actual?: string | number | Array<string | number>;
      } 
    };
```

#### `checkOptionality(node, optionality)`

Checks if a node satisfies the optionality (usage) constraint.

- **node**: `Nodes | undefined` - The AST node to check.
- **optionality**: `string` - The usage code (e.g., 'R', 'O', 'X').
- **Returns**: `ValidationResult`

```typescript
import { checkOptionality } from '@rethinkhealth/hl7v2-utils';

// 'R' (Required), 'RE' (Required or Empty), 'O' (Optional), 'X' (Not Supported)
const result = checkOptionality(myFieldNode, 'R');

if (!result.ok) {
  console.error(result.error.message); // "is required but missing"
}
```

#### `checkCardinality(node, min, max)`

Checks if a field has the correct number of repetitions.

- **node**: `Field | undefined` - The field node to check.
- **min**: `number` - Minimum repetitions.
- **max**: `number | '*'` - Maximum repetitions.
- **Returns**: `ValidationResult`

```typescript
import { checkCardinality } from '@rethinkhealth/hl7v2-utils';

// Field must repeat between 1 and 5 times
const result = checkCardinality(myFieldNode, 1, 5);
```

#### `checkLength(node, min, max)`

Checks if the content of a node falls within the minimum and maximum length.

- **node**: `Nodes | undefined` - The node to check (length is calculated recursively).
- **min**: `number` - Minimum length.
- **max**: `number` - Maximum length.
- **Returns**: `ValidationResult`

```typescript
import { checkLength } from '@rethinkhealth/hl7v2-utils';

// Content length must be between 1 and 10 characters
const result = checkLength(myNode, 1, 10);
```

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
