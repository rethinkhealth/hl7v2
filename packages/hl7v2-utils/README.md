# @rethinkhealth/hl7v2-utils

A utility package for working with HL7v2 messages, most commonly used within the `@rethinkhealth/hl7v2` ecosystem — a unist-inspired collection of plugins and utilities designed to parse, transform, validate, and manipulate HL7v2 messages.

This package provides core utilities including:
- Diagnostic reporting system for linters, validators, and transformers
- Standard HL7v2 delimiters
- AST node utility functions

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

### `Diagnostic`

Type definition for diagnostic rules. Diagnostics are used to report issues about HL7v2 messages.

#### Properties

- `type` (`string`) - Tool/plugin category (e.g., "validator", "lint", "annotator", "transformer", "parser")
- `namespace` (`string`) - Domain/concern (e.g., "order", "field", "segment", "conformance")
- `code` (`string`) - Specific issue code (e.g., "transition", "required", "acceptance")
- `title` (`string`) - Human-readable title
- `description` (`string`) - Full description of the rule
- `severity` (`"error" | "warning" | "info" | null | undefined`) - Default severity level
- `message` (`(context: Record<string, unknown>) => string`) - Message formatter function
- `helpUrl` (`string`, optional) - URL to documentation

#### Rule ID Format

The rule ID is automatically constructed as `type:namespace:code` (e.g., `lint:field:required`).

#### Example

```typescript
const invalidTransitionRule: Diagnostic = {
  type: 'validator',
  namespace: 'order',
  code: 'transition',
  title: 'Invalid Segment Transition',
  description: 'A segment arrived that is not allowed in this position.',
  severity: 'error',
  message: (ctx) => {
    const expected = Array.isArray(ctx.expected) 
      ? ctx.expected.join(', ') 
      : ctx.expected;
    return `Expected ${expected}, got '${ctx.actual}'`;
  },
  helpUrl: 'https://example.com/docs/segment-order'
};
```

### `DEFAULT_DELIMITERS`

Standard HL7v2 delimiters as defined in the specification.

```typescript
export const DEFAULT_DELIMITERS = {
  field: "|",
  component: "^",
  repetition: "~",
  subcomponent: "&",
  escape: "\\",
  segment: "\r",
};
```

#### Example

```typescript
import { DEFAULT_DELIMITERS } from '@rethinkhealth/hl7v2-utils';

const message = segments.join(DEFAULT_DELIMITERS.segment);
```

### `isEmptyNode(node)`

Check if an AST node is semantically empty. This is useful for validation and transformation logic.

#### Parameters

- `node` (`Nodes | null | undefined`) - The AST node to check

#### Returns

`boolean` - `true` if the node is empty, `false` otherwise

#### Example

```typescript
import { isEmptyNode } from '@rethinkhealth/hl7v2-utils';

if (isEmptyNode(field)) {
  report(file, requiredFieldRule, {
    context: { fieldPath: 'PID-5' },
    node: field
  });
}
```

### `getNodeByteLength(node)`

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
import { getNodeByteLength } from '@rethinkhealth/hl7v2-utils';
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
const length = getNodeByteLength(field); // Returns: 10
```

#### Use Cases

- Validating field or message size constraints
- Memory allocation planning
- Message size reporting and analytics
- Performance optimization by avoiding full serialization

## Usage

### Creating a Custom Linter

```typescript
import { visit } from 'unist-util-visit';
import { report } from '@rethinkhealth/hl7v2-utils';
import type { Diagnostic } from '@rethinkhealth/hl7v2-utils';
import type { Root } from '@rethinkhealth/hl7v2-ast';
import type { VFile } from 'vfile';

const noEmptySegmentRule: Diagnostic = {
  type: 'lint',
  namespace: 'segment',
  code: 'no-empty',
  title: 'Empty Segment',
  description: 'Segments should not be empty.',
  severity: 'warning',
  message: (ctx) => `Segment '${ctx.segmentId}' is empty`
};

function lintNoEmptySegment() {
  return (tree: Root, file: VFile) => {
    visit(tree, 'segment', (node) => {
      if (isEmptyNode(node)) {
        report(file, noEmptySegmentRule, {
          node,
          context: { segmentId: node.segmentId }
        });
      }
    });
  };
}
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