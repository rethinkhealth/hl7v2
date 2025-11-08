# HL7v2 Query Utility

A tiny helper for reading HL7v2 ASTs with familiar canonical paths.

## Features

- **Five verbs** – `parse`, `select`, `selectAll`, `value`, `matches`
- **Canonical paths** – same syntax you see in HL7 specs
- **Deep traversal** – walks nested groups automatically
- **Zero fuss** – no options, no surprises, just results

## Installation

```bash
npm install @rethinkhealth/hl7v2-util-query
```

## Quick Start

```typescript
import { select, selectAll, value, matches, parse } from '@rethinkhealth/hl7v2-util-query';
import { parseHL7v2 } from '@rethinkhealth/hl7v2-parser';

const message = `MSH|^~\\&|MyApp|MyFacility|ReceivingApp|ReceivingFacility|20231201120000||ADT^A01|12345|P|2.5
PID|1||123456789^^^MRN||Smith^John^Michael||19800101|M|||123 Main St^^Anytown^ST^12345
OBX|1||8675-3^Glucose^LN||120|mg/dL|70-105|H|||F`;

const ast = parseHL7v2(message);

// Values: drills to subcomponents automatically when the path is unique
const lastName = value(ast, 'PID-5[1].1.1');  // "Smith"
const sendingApp = value(ast, 'MSH-3[1].1.1'); // "MyApp"

// Single node: grab the first matching AST node
const pidSegment = select(ast, 'PID');
if (pidSegment?.node.type === 'segment') {
  console.log(`PID has ${pidSegment.node.children.length - 1} fields`);
}

// Multiple nodes: get all matching elements
const allObservations = selectAll(ast, 'OBX');
for (const { node } of allObservations) {
  console.log(`Found observation: ${node.type}`);
}

// Existence check
if (matches(ast, 'PID-5')) {
  console.log('Patient has a name field');
}

// Path parsing
const parsed = parse('ORDERS[2]-OBX-5[1].2.1');
console.log(parsed);
```

## API

### `parse(path: string): PathParts`

Breaks a canonical HL7 path into structured pieces. Helpful for tooling and diagnostics.

```typescript
parse('PID-5[1].2.1');
// {
//   segment: { name: 'PID' },
//   field: 5,
//   repetition: 1,
//   component: 2,
//   subcomponent: 1
// }
```

### `select<Path>(root: Root, path: Path): { node: InferNodeType<Path>; ancestors: Nodes[] } | null`

Returns the first AST node addressed by the path, along with its ancestor chain, or `null` when it cannot be found. The return type is automatically inferred from the path string.

```typescript
const result = select(ast, 'PID-5[1].2');
if (result) {
  result.node; // Type: Component
  result.ancestors; // [Root, Segment, Field, FieldRepetition]
}
```

### `selectAll<Path>(root: Root, path: Path): Array<{ node: InferNodeType<Path>; ancestors: Nodes[] }>`

Returns all AST nodes that match the path. Useful when a message contains multiple segments of the same type.

```typescript
// Get all OBX segments
const observations = selectAll(ast, 'OBX');
for (const { node } of observations) {
  console.log(node.type); // 'segment'
}

// Get all observation values
const values = selectAll(ast, 'OBX-5');
for (const { node } of values) {
  console.log(node.type); // 'field'
}
```

### `value(root: Root, path: string): { value: string; node: Nodes; ancestors: Nodes[] } | null`

Returns the string value stored at the path. If the node is not a subcomponent, it will walk through single-child layers (field → field repetition → component → subcomponent) automatically.

```typescript
const result = value(ast, 'PID-3[1].1.1');
if (result) {
  console.log(result.value); // "123456789"
  console.log(result.node.type); // "subcomponent"
  console.log(result.ancestors); // [Root, Segment, Field, ...]
}
```

### `matches(root: Root, path: string): boolean`

Returns `true` when the path points to an existing node, otherwise `false`. More semantically clear than checking for `null`.

```typescript
if (!matches(ast, 'OBX-5')) {
  throw new Error('Missing observation value');
}

// Use in conditionals
if (matches(ast, 'PID-5')) {
  const name = value(ast, 'PID-5.1.1');
}
```

## Path Cheatsheet

- `SEGMENT` – segment (e.g. `PID`)
- `SEGMENT-FIELD` – field (e.g. `PID-5`)
- `SEGMENT-FIELD[REP]` – field repetition (e.g. `PID-5[2]`)
- `SEGMENT-FIELD[REP].COMP` – component (e.g. `PID-5[1].2`)
- `SEGMENT-FIELD[REP].COMP.SUB` – subcomponent (e.g. `PID-5[1].2.1`)
- `GROUP[N]-...` – qualify with group name and optional repetition (e.g. `ORDERS[2]-OBX-5`)

Repetition indexes are **1-based**. If you omit `[n]`, `find` assumes `[1]`.

## Types

```typescript
type PathParts = {
  groups?: Array<{ name: string; repetition?: number }>;
  segment: { name: string; repetition?: number };
  field?: number;
  repetition?: number;
  component?: number;
  subcomponent?: number;
};
```

## Common Recipes

### Patient Demographics

```typescript
const lastName = value(ast, 'PID-5[1].1.1')?.value;
const firstName = value(ast, 'PID-5[1].2.1')?.value;
const middleName = value(ast, 'PID-5[1].3.1')?.value;
const dob = value(ast, 'PID-7[1].1.1')?.value;
```

### Observations

```typescript
// Single observation
const obx = select(ast, 'OBX');
const obsValue = value(ast, 'OBX-5[1].1.1')?.value;
const units = value(ast, 'OBX-6[1].1.1')?.value;
const refRange = value(ast, 'OBX-7[1].1.1')?.value;

// Multiple observations
const allOBX = selectAll(ast, 'OBX');
for (const { node } of allOBX) {
  const val = value(node, 'OBX-5')?.value;
  const units = value(node, 'OBX-6')?.value;
  console.log(`${val} ${units}`);
}
```

### Validation

```typescript
if (!matches(ast, 'MSH')) throw new Error('Missing message header');
if (!matches(ast, 'PID-3[1].1.1')) throw new Error('Missing patient ID');

// Conditional processing
if (matches(ast, 'OBX')) {
  const observations = selectAll(ast, 'OBX');
  console.log(`Found ${observations.length} observations`);
}
```

## Error Messages

- Invalid formats throw with guidance, e.g. `"Invalid HL7 path format: \"PID-\""`
- Out-of-range indexes complain, e.g. `"Field number must be ≥1, got: 0"`
- Whitespace is rejected to avoid accidental typos

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
