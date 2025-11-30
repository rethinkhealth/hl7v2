# @rethinkhealth/hl7v2-util-visit

## Introduction

This package provides a lightweight, type-safe visitor pattern for traversing [HL7v2 AST][hl7v2-ast] trees. It uses a nested visit approach for efficient O(n) traversal with rich context information.

### What is this?

`hl7v2-util-visit` enables you to walk through any HL7v2 AST tree — from the root message down to individual subcomponents — with full context about where you are in the hierarchy. The visitor pattern:

- **Works from any starting node** (Root, Segment, Field, Component, etc.)
- **Tracks ancestors** from traversal root to current node
- **Provides visit info** (index, sequence, depth, metadata)
- **Efficient O(n) traversal** — Context passed to children, no recomputation

### When should I use this?

Use `hl7v2-util-visit` when you need to:

- Validate HL7v2 message structure
- Transform or annotate AST nodes
- Extract specific fields with context
- Analyze message patterns across the tree
- Implement custom processing rules that need parent/ancestor awareness

## Install

```sh
npm install @rethinkhealth/hl7v2-util-visit
```

## Use

```typescript
import { visit, EXIT, SKIP } from '@rethinkhealth/hl7v2-util-visit';
import { parse } from '@rethinkhealth/hl7v2-parser';

const message = parse('MSH|^~\\&|...\rPID|...');

// Visit all segments
visit(message, 'segment', (node, ancestors, info) => {
  console.log(`Segment: ${info.metadata?.header} at depth ${info.depth}`);
});
// => Segment: MSH at depth 2
// => Segment: PID at depth 2

// Find fields with parent context
visit(message, 'field', (node, ancestors, info) => {
  const segment = ancestors.find(n => n.type === 'segment');
  console.log(`Field ${info.sequence} in segment`);
});

// Skip processing of sensitive segments
visit(message, (node, ancestors, info) => {
  if (node.type === 'segment' && info.metadata?.header === 'NTE') {
    return SKIP; // Skip NTE segment children
  }
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
  - `Test`: Custom function `(node, ancestors) => boolean`
- **`visitor`** (`Visitor`) — Function called for each matching node

#### Returns

`void`

#### Important: Test vs Visitor Functions

**If you pass a function as the second argument, it is always treated as a Visitor, never as a Test.**

```typescript
// WRONG - testFn will be treated as a visitor, not a test
visit(ast, (node) => node.type === 'segment', ...); // Missing visitor!

// CORRECT - Explicit 3-argument form
visit(ast, (node) => node.type === 'segment', (node, ancestors, info) => {
  console.log('Visiting segment');
});

// CORRECT - Use string or object for simple tests
visit(ast, 'segment', (node, ancestors, info) => {
  console.log('Visiting segment');
});
```

#### Visitor Function

```typescript
type Visitor<T extends Nodes = Nodes> = (
  node: T,
  ancestors: Nodes[],
  info: VisitInfo
) => VisitorResult;
```

The visitor receives:
- **`node`** — Current AST node
- **`ancestors`** — Array of ancestor nodes from root to parent (not including current node)
- **`info`** — Visit information with index, sequence, depth, and metadata

The visitor can return:
- `undefined` or `void` — Continue traversal normally
- `SKIP` — Skip children of current node
- `EXIT` — Stop traversal immediately

### VisitInfo

```typescript
interface VisitInfo {
  /** 0-based index among siblings */
  index: number;

  /** 1-based sequence (HL7v2 convention). For segment-header: 0 */
  sequence: number;

  /** 1-based depth in tree (root = 1) */
  depth: number;

  /** Metadata (e.g., { header: "MSH" } or { name: "PATIENT" }) */
  metadata: Record<string, unknown> | undefined;
}
```

### Automatic Metadata Extraction

The `metadata` field is populated automatically with common metadata:

| Node Type | Metadata Key | Description |
|-----------|--------------|-------------|
| `segment` | `header` | Segment identifier (e.g., `"MSH"`, `"PID"`) |
| `group` | `name` | Group name (e.g., `"PATIENT_GROUP"`) |

### Exports

```typescript
import {
  visit,      // Main traversal function
  EXIT,       // Return to stop traversal
  SKIP,       // Return to skip children
} from '@rethinkhealth/hl7v2-util-visit';

import type {
  VisitInfo,      // { index, sequence, depth, metadata }
  Visitor,        // (node, ancestors, info) => VisitorResult
  VisitorResult,  // Return type from visitor
  Test,           // Filter predicate
  Predicate,      // (node, ancestors) => boolean
} from '@rethinkhealth/hl7v2-util-visit';
```

## Examples

### Filter by Node Type

```typescript
visit(ast, 'segment', (node, ancestors, info) => {
  console.log(`Found segment: ${info.metadata?.header}`);
});
```

### Filter by Properties

```typescript
visit(ast, { name: 'PATIENT_GROUP' }, (node, ancestors, info) => {
  console.log('Inside PATIENT_GROUP');
});
```

### Custom Test Function

```typescript
// Visit fields in MSH segment only
visit(
  ast,
  (node, ancestors) => {
    const parent = ancestors.at(-1);
    return node.type === 'field' && parent?.type === 'segment';
  },
  (node, ancestors, info) => {
    console.log(`Field at sequence ${info.sequence}`);
  }
);
```

### Access Parent and Ancestors

```typescript
visit(ast, 'component', (node, ancestors, info) => {
  // Get immediate parent
  const parent = ancestors.at(-1);

  // Find closest segment ancestor
  const segment = ancestors.findLast(n => n.type === 'segment');

  console.log(`Component at depth ${info.depth}`);
});
```

### Control Flow: Skip Children

```typescript
visit(ast, (node, ancestors, info) => {
  if (node.type === 'segment' && info.metadata?.header === 'OBX') {
    return SKIP; // Don't process OBX segment children
  }
});
```

### Control Flow: Exit Early

```typescript
import { EXIT } from '@rethinkhealth/hl7v2-util-visit';

let found = false;
visit(ast, 'field', (node, ancestors, info) => {
  if (/* some condition */) {
    found = true;
    return EXIT; // Stop traversal completely
  }
});
```

### Start from Any Node

```typescript
import { s, f, c } from '@rethinkhealth/hl7v2-builder';

// Create a standalone segment
const segment = s('PID', f(c('value1')), f(c('value2')));

// Traverse from segment (not root)
visit(segment, 'field', (node, ancestors, info) => {
  // ancestors[0] will be the segment
  console.log(`Field at sequence ${info.sequence}`);
});
```

### Track Nesting Levels

```typescript
visit(ast, (node, ancestors, info) => {
  const indent = '  '.repeat(info.depth - 1);
  console.log(`${indent}${node.type} [${info.sequence}]`);
});
// Output:
// root [1]
//   segment [1]
//     segment-header [0]
//     field [1]
//       field-repetition [1]
//         component [1]
```

### Group Hierarchy Navigation

```typescript
visit(ast, 'segment', (node, ancestors, info) => {
  // Get all parent groups
  const groups = ancestors
    .filter(n => n.type === 'group')
    .map(n => (n as any).name)
    .filter((name): name is string => typeof name === 'string');

  console.log(`${info.metadata?.header} is in groups: ${groups.join(' > ')}`);
});
// => PID is in groups: PATIENT_GROUP
```

## Real-World Use Cases

### Validate Required Fields

```typescript
function validateRequiredFields(ast: Root): string[] {
  const errors: string[] = [];

  visit(ast, 'segment', (node, ancestors, info) => {
    const segment = node as Segment;
    const header = info.metadata?.header;

    // MSH segment must have at least 12 fields
    if (header === 'MSH' && segment.children.length < 12) {
      errors.push(`MSH segment missing required fields`);
    }

    // PID segment must have patient ID (PID.3)
    if (header === 'PID') {
      const patientId = segment.children[3];
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
interface PatientName {
  name: string;
  sequence: number;
  inGroup?: string;
}

function extractPatientNames(ast: Root): PatientName[] {
  const names: PatientName[] = [];

  visit(ast, 'segment', (node, ancestors, info) => {
    if (info.metadata?.header !== 'PID') return;

    const segment = node as Segment;
    const nameField = segment.children[5];
    if (nameField?.children[0]?.children[0]) {
      const nameComponent = nameField.children[0].children[0];
      const name = (nameComponent.children[0] as Subcomponent)?.value || '';

      const groupAncestor = ancestors.find(n => n.type === 'group');

      names.push({
        name,
        sequence: info.sequence,
        inGroup: groupAncestor ? (groupAncestor as any).name : undefined,
      });
    }
  });

  return names;
}
```

### Message Structure Analysis

```typescript
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

  visit(ast, (node, ancestors, info) => {
    structure.maxDepth = Math.max(structure.maxDepth, info.depth);

    if (node.type === 'segment') {
      structure.segmentCount++;
      const header = info.metadata?.header as string;
      if (header) {
        structure.segmentTypes[header] = (structure.segmentTypes[header] || 0) + 1;
      }
    }

    if (node.type === 'group') {
      structure.groupCount++;
    }
  });

  return structure;
}
```

### Find First Match and Exit

```typescript
function findFirstObservation(ast: Root, targetCode: string): string | null {
  let result: string | null = null;

  visit(ast, 'segment', (node, ancestors, info) => {
    if (info.metadata?.header !== 'OBX') return;

    const segment = node as Segment;
    const identifierField = segment.children[3];
    const code = identifierField?.children[0]?.children[0]?.children[0]?.value;

    if (code === targetCode) {
      const valueField = segment.children[5];
      result = valueField?.children[0]?.children[0]?.children[0]?.value || null;
      return EXIT; // Stop traversal
    }
  });

  return result;
}
```

## Performance Characteristics

- **O(n) traversal** — Single pass through all nodes
- **O(d) ancestor construction** where d = depth (typically < 10 for HL7v2)
- **Efficient context passing** — Info computed once per node, passed to children
- **Minimal allocations** — Metadata extracted once per node

## Types

```typescript
export type {
  VisitInfo,      // { index, sequence, depth, metadata }
  Visitor,        // (node, ancestors, info) => VisitorResult
  VisitorResult,  // void | false | 'skip' | ActionTuple
  Test,           // string | Partial | predicate | null
  Predicate,      // (node, ancestors) => boolean
} from '@rethinkhealth/hl7v2-util-visit';
```

## Contributing

We welcome contributions! Please see our [Contributing Guide][github-contributing] for more details.

## Code of Conduct

To ensure a welcoming and positive environment, we have a [Code of Conduct][github-code-of-conduct] that all contributors and participants are expected to adhere to.

## License

Copyright 2025 Rethink Health, SUARL. All rights reserved.

This program is licensed to you under the terms of the [MIT License](https://opensource.org/licenses/MIT). See the [LICENSE][github-license] file for details.

[github-code-of-conduct]: https://github.com/rethinkhealth/hl7v2/blob/main/CODE_OF_CONDUCT.md
[github-license]: https://github.com/rethinkhealth/hl7v2/blob/main/LICENSE
[github-contributing]: https://github.com/rethinkhealth/hl7v2/blob/main/CONTRIBUTING.md
[hl7v2-ast]: https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-ast
