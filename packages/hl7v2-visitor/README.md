# @rethinkhealth/hl7v2-visitor

## Introduction

This package provides a lightweight, type-safe visitor pattern for traversing [HL7v2 AST][hl7v2-ast] trees. It implements a pure functional approach inspired by [unist-util-visit-parents][] and [babel-traverse][], offering immutable path tracking with rich metadata.

### What is this?

`hl7v2-visitor` enables you to walk through any HL7v2 AST tree — from the root message down to individual subcomponents — with full context about where you are in the hierarchy. The visitor pattern:

- **Works from any starting node** (Root, Segment, Field, Component, etc.)
- **Tracks immutable paths** from traversal root to current node
- **Provides rich metadata** (segment headers, group names, delimiters)
- **Immutable path copies** — New path array created per level via spread operator
- **Minimal allocations** — Metadata extracted once per node, path arrays reused within same level

### When should I use this?

Use `hl7v2-visitor` when you need to:

- Validate HL7v2 message structure
- Transform or annotate AST nodes
- Extract specific fields with context
- Analyze message patterns across the tree
- Implement custom processing rules that need parent/ancestor awareness

## Install

```sh
npm install @rethinkhealth/hl7v2-visitor
```

## Use

```typescript
import { visit } from '@rethinkhealth/hl7v2-visitor';
import { parse } from '@rethinkhealth/hl7v2-parser'; // hypothetical parser

const message = parse('MSH|^~\\&|...\rPID|...');

// Visit all segments
visit(message, 'segment', (node, path) => {
  const entry = path.at(-1);
  console.log(`Segment: ${entry?.data?.header} at level ${entry?.level}`);
});
// => Segment: MSH at level 2
// => Segment: PID at level 2

// Find fields with parent context
visit(message, 'field', (node, path) => {
  const segment = path.find(e => e.type === 'segment');
  console.log(`Field in ${segment?.data?.header}`);
});

// Skip processing of sensitive segments
visit(message, (node, path) => {
  if (node.type === 'segment' && node.children[0]?.value === 'NTE') {
    return 'skip'; // Skip NTE segment children
  }
  // Process other nodes
});
```

## API

### `visit(tree, visitor)`

### `visit(tree, test, visitor)`

Visit nodes in an HL7v2 AST tree.

#### Parameters

- **`tree`** (`Nodes`) — Tree to traverse (can be any node type, not just Root)
- **`test`** (`string | Partial<Nodes> | Test`) — Optional filter:
  - `string`: Match nodes by type (e.g., `'segment'`)
  - `Partial<Nodes>`: Match nodes with matching properties (e.g., `{ name: 'PATIENT_GROUP' }`)
  - `Test`: Custom function `(node, path) => boolean`
- **`visitor`** (`Visitor`) — Function called for each matching node

#### Returns

`void`

#### Visitor Function

```typescript
type Visitor = (node: Nodes, path: Path) => Action | void | undefined;
```

The visitor receives:
- **`node`** — Current AST node
- **`path`** — Ordered array of `PathEntry` from traversal root to current node

The visitor can return:
- `undefined` or `void` — Continue traversal normally
- `'skip'` — Skip children of current node
- `'exit'` — Stop traversal immediately

## Path Structure

Each entry in the `path` array has the following structure:

```typescript
interface PathEntry {
  type: string;          // Node type: 'root', 'segment', 'field', 'component', etc.
  level: number;         // 1-based depth (root=1, children=2, ...)
  index: number;         // 1-based position within siblings
  node: Nodes;           // Reference to the actual AST node
  data?: Record<string, unknown>; // Extensible metadata
}
```

### Automatic Metadata Extraction

The `data` field is populated automatically with common metadata:

| Node Type | Metadata Key | Description |
|-----------|--------------|-------------|
| `segment` | `header` | Segment identifier (e.g., `"MSH"`, `"PID"`) |
| `group` | `name` | Group name (e.g., `"PATIENT_GROUP"`) |
| `root` | `delimiters` | HL7v2 delimiter configuration |

Example:

```typescript
visit(ast, 'segment', (node, path) => {
  const entry = path.at(-1);
  console.log(entry?.data?.header); // "PID"
});
```

## Examples

### Filter by Node Type

```typescript
// Visit all segments
visit(ast, 'segment', (node, path) => {
  console.log(`Found segment: ${node.children[0]?.value}`);
});
```

### Filter by Properties

```typescript
// Visit specific group
visit(ast, { name: 'PATIENT_GROUP' }, (node, path) => {
  console.log('Inside PATIENT_GROUP');
});
```

### Custom Test Function

```typescript
// Visit fields in MSH segment only
visit(
  ast,
  (node, path) => {
    const parent = path[path.length - 2];
    return node.type === 'field' && parent?.data?.header === 'MSH';
  },
  (node, path) => {
    console.log('MSH field found');
  }
);
```

### Access Parent and Ancestors

```typescript
visit(ast, 'component', (node, path) => {
  // Get immediate parent
  const parent = path[path.length - 2];

  // Get all ancestors
  const ancestors = path.slice(0, -1);

  // Find closest segment
  const segment = path.findLast(e => e.type === 'segment');
  console.log(`Component in ${segment?.data?.header}`);
});
```

### Control Flow: Skip Children

```typescript
visit(ast, (node, path) => {
  if (node.type === 'segment' && node.children[0]?.value === 'OBX') {
    return 'skip'; // Don't process OBX segment children
  }
});
```

### Control Flow: Exit Early

```typescript
let found = false;
visit(ast, 'field', (node, path) => {
  if (/* some condition */) {
    found = true;
    return 'exit'; // Stop traversal completely
  }
});
```

### Start from Any Node

```typescript
import { s, f, c } from '@rethinkhealth/hl7v2-builder';

// Create a standalone segment
const segment = s('PID', f(c('value1')), f(c('value2')));

// Traverse from segment (not root)
visit(segment, 'field', (node, path) => {
  // path[0] will be the segment, not a root node
  console.log(`Field at index ${path.at(-1)?.index}`);
});
```

### Track Nesting Levels

```typescript
visit(ast, (node, path) => {
  const entry = path.at(-1);
  const indent = '  '.repeat(entry!.level - 1);
  console.log(`${indent}${entry!.type} [${entry!.index}]`);
});
// Output:
// root [1]
//   segment [1]
//     field [2]
//       field-repetition [1]
//         component [1]
```

### Group Hierarchy Navigation

```typescript
visit(ast, 'segment', (node, path) => {
  // Get all parent groups
  const groups = path
    .filter(e => e.type === 'group')
    .map(e => e.data?.name)
    .filter((name): name is string => typeof name === 'string');

  const segmentHeader = path.at(-1)?.data?.header;
  console.log(`${segmentHeader} is in groups: ${groups.join(' > ')}`);
});
// => PID is in groups: PATIENT_GROUP
```

## Real-World Use Cases

### Validate Required Fields

```typescript
import { visit } from '@rethinkhealth/hl7v2-visitor';

function validateRequiredFields(ast: Root): string[] {
  const errors: string[] = [];

  visit(ast, 'segment', (node, path) => {
    const segment = node as Segment;
    const header = segment.children[0]?.value;

    // MSH segment must have at least 12 fields
    if (header === 'MSH' && segment.children.length < 12) {
      errors.push(`MSH segment missing required fields (found ${segment.children.length - 1})`);
    }

    // PID segment must have patient ID (PID.3)
    if (header === 'PID') {
      const patientId = segment.children[3]; // Remember: 1-based, [0] is header
      if (!patientId || patientId.children.length === 0) {
        errors.push('PID segment missing required Patient ID (PID.3)');
      }
    }
  });

  return errors;
}
```

### Extract Specific Data with Context

```typescript
// Extract all patient names with their segment location
interface PatientName {
  name: string;
  segmentIndex: number;
  inGroup?: string;
}

function extractPatientNames(ast: Root): PatientName[] {
  const names: PatientName[] = [];

  visit(ast, 'segment', (node, path) => {
    const segment = node as Segment;
    const header = segment.children[0]?.value;

    if (header === 'PID') {
      // PID.5 is patient name
      const nameField = segment.children[5];
      if (nameField?.children[0]?.children[0]) {
        const nameComponent = nameField.children[0].children[0];
        const name = (nameComponent.children[0] as Subcomponent)?.value || '';

        // Get segment's position in parent
        const segmentEntry = path.at(-1);

        // Check if inside a group
        const groupEntry = path.find(e => e.type === 'group');

        names.push({
          name,
          segmentIndex: segmentEntry?.index || 0,
          inGroup: groupEntry?.data?.name as string | undefined,
        });
      }
    }
  });

  return names;
}
```

### Message Structure Analysis

```typescript
// Analyze message structure and generate a summary
interface MessageStructure {
  segmentCount: number;
  groupCount: number;
  maxDepth: number;
  segmentTypes: Record<string, number>;
}

function analyzeStructure(ast: Root): MessageStructure {
  const structure: MessageStructure = {
    segmentCount: 0,
    groupCount: 0,
    maxDepth: 0,
    segmentTypes: {},
  };

  visit(ast, (node, path) => {
    const entry = path.at(-1);

    // Track max depth
    if (entry && entry.level > structure.maxDepth) {
      structure.maxDepth = entry.level;
    }

    // Count segments and types
    if (node.type === 'segment') {
      structure.segmentCount++;
      const header = entry?.data?.header as string;
      if (header) {
        structure.segmentTypes[header] = (structure.segmentTypes[header] || 0) + 1;
      }
    }

    // Count groups
    if (node.type === 'group') {
      structure.groupCount++;
    }
  });

  return structure;
}
```

### Remove Sensitive Data

```typescript
// Redact sensitive fields (like SSN in PID.19)
function redactSensitiveData(ast: Root): void {
  visit(ast, 'segment', (node) => {
    const segment = node as Segment;
    const header = segment.children[0]?.value;

    if (header === 'PID') {
      // Redact SSN (PID.19)
      const ssnField = segment.children[19];
      if (ssnField?.children[0]?.children[0]?.children[0]) {
        const subcomponent = ssnField.children[0].children[0].children[0];
        if (subcomponent.type === 'subcomponent') {
          subcomponent.value = '***-**-****';
        }
      }
    }

    // Continue traversal but don't skip - we might need to redact multiple segments
  });
}
```

### Performance: Early Exit Optimization

```typescript
// Find first occurrence of a specific observation and exit
function findFirstObservation(ast: Root, targetCode: string): string | null {
  let result: string | null = null;

  visit(ast, 'segment', (node) => {
    const segment = node as Segment;
    const header = segment.children[0]?.value;

    if (header === 'OBX') {
      // OBX.3 is observation identifier
      const identifierField = segment.children[3];
      const code = identifierField?.children[0]?.children[0]?.children[0]?.value;

      if (code === targetCode) {
        // OBX.5 is observation value
        const valueField = segment.children[5];
        result = valueField?.children[0]?.children[0]?.children[0]?.value || null;

        // Exit immediately - we found what we need
        return 'exit';
      }
    }
  });

  return result;
}
```

## Types

This package exports the following TypeScript types:

```typescript
export type {
  Action,        // 'skip' | 'exit'
  ChildProvider, // (node: Nodes) => Nodes[] | undefined
  Path,          // readonly PathEntry[]
  PathEntry,     // { type, level, index, node, data? }
  Test,          // (node: Nodes, path: Path) => boolean
  Visitor,       // (node: Nodes, path: Path) => Action | void | undefined
} from '@rethinkhealth/hl7v2-visitor';
```

## Performance Characteristics

- **O(n) traversal** — Single pass through all nodes
- **O(d) path construction** where d = depth (typically < 10 for HL7v2 messages)
- **Zero defensive copying** — Paths reference the same array during visitor calls
- **Minimal allocations** — Metadata extracted once per node

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
[hl7v2-ast]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-ast
[unist-util-visit-parents]: https://github.com/syntax-tree/unist-util-visit-parents
[babel-traverse]: https://github.com/babel/babel/tree/main/packages/babel-traverse
