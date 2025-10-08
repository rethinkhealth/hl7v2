# HL7v2 Query Utility

A tiny helper for reading HL7v2 ASTs with familiar canonical paths.

## Features

- **Four verbs** – `parse`, `find`, `value`, `has`
- **Canonical paths** – same syntax you see in HL7 specs
- **Deep traversal** – walks nested groups automatically
- **Zero fuss** – no options, no surprises, just results

## Installation

```bash
npm install @rethinkhealth/hl7v2-util-query
```

## Quick Start

```typescript
import { find, value, has, parse } from '@rethinkhealth/hl7v2-util-query';
import { parseHL7v2 } from '@rethinkhealth/hl7v2-parser';

const message = `MSH|^~\\&|MyApp|MyFacility|ReceivingApp|ReceivingFacility|20231201120000||ADT^A01|12345|P|2.5
PID|1||123456789^^^MRN||Smith^John^Michael||19800101|M|||123 Main St^^Anytown^ST^12345`;

const ast = parseHL7v2(message);

// Values: drills to subcomponents automatically when the path is unique
const lastName = value(ast, 'PID-5[1].1.1');  // "Smith"
const sendingApp = value(ast, 'MSH-3[1].1.1'); // "MyApp"

// Nodes: grab the raw AST node
const pidSegment = find(ast, 'PID');
if (pidSegment?.type === 'segment') {
  console.log(`PID has ${pidSegment.children.length - 1} fields`);
}

// Existence check
if (has(ast, 'PID-5')) {
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

### `find<T>(root: Root, path: string): T | null`

Returns the AST node addressed by the path, or `null` when it cannot be found.

```typescript
const component = find(ast, 'PID-5[1].2');
```

### `value(root: Root, path: string): string | null`

Returns the string stored at the path. If the node is not a subcomponent, it will walk through single-child layers (field → field repetition → component → subcomponent) automatically.

```typescript
const mrn = value(ast, 'PID-3[1].1.1');
```

### `has(root: Root, path: string): boolean`

Returns `true` when the path points to an existing node, otherwise `false`.

```typescript
if (!has(ast, 'OBX-5')) {
  throw new Error('Missing observation value');
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
const lastName = value(ast, 'PID-5[1].1.1');
const firstName = value(ast, 'PID-5[1].2.1');
const middleName = value(ast, 'PID-5[1].3.1');
const dob = value(ast, 'PID-7[1].1.1');
```

### Observations

```typescript
const obx = find(ast, 'OBX');
const obsValue = value(ast, 'OBX-5[1].1.1');
const units = value(ast, 'OBX-6[1].1.1');
const refRange = value(ast, 'OBX-7[1].1.1');
```

### Validation

```typescript
if (!has(ast, 'MSH')) throw new Error('Missing message header');
if (!has(ast, 'PID-3[1].1.1')) throw new Error('Missing patient ID');
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
