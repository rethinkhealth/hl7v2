# HL7v2

[![npm version](https://badge.fury.io/js/@rethinkhealth%2Fhl7v2.svg)](https://badge.fury.io/js/@rethinkhealth%2Fhl7v2)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> [!WARNING]  
> ⚠️ **Breaking Changes in 0.1.x**  
> This release introduces a new DOM-like parser, auto-detected delimiters, and Unist-compatible node types. See [CHANGELOG.md](CHANGELOG.md) for migration details.

A TypeScript library for **parsing, validating, and generating HL7v2 messages** with a focus on **type safety**, **lossless round-tripping**, and **editor/tooling integration**.

---

## ✨ Features

- **DOM-like Tree**: HL7v2 messages parsed into a Unist-compatible tree (`HL7v2Node`).
- **Lossless Parsing**: Tracks exact character positions, delimiters, and offsets for perfect round-trip serialization.
- **Line & Column Tracking**: Nodes include `position.start` and `position.end` with line, column, and offset for editor integration.
- **Auto-Detect Delimiters**: MSH-1 and MSH-2 are parsed automatically per HL7v2 spec.
- **Custom Delimiters**: Override any delimiter via options.
- **Extensible Pipeline**: Designed for plugins like validation, annotation, and transformation.
- **TypeScript First**: Full typings for segments, fields, and tree nodes.

---

## Installation

```bash
# npm
npm install @rethinkhealth/hl7v2

# yarn
yarn add @rethinkhealth/hl7v2

# pnpm
pnpm add @rethinkhealth/hl7v2
````

---

## 🚀 Quick Start

### Parsing HL7v2

```ts
import { parseHL7 } from '@rethinkhealth/hl7v2';

const tree = parseHL7('MSH|^~\\&|HOSP|FAC|APP|FAC|20200508130643||ADT^A01|1|T|2.3');

console.log(JSON.stringify(tree, null, 2));
```

Output:

```json
{
  "type": "message",
  "children": [
    {
      "type": "segment",
      "name": "MSH",
      "position": {
        "start": { "line": 1, "column": 1, "offset": 0 },
        "end": { "line": 1, "column": 45, "offset": 44 }
      },
      "children": [
        {
          "type": "field",
          "index": 1,
          "value": "^~\\&",
          "position": {
            "start": { "line": 1, "column": 5, "offset": 4 },
            "end": { "line": 1, "column": 9, "offset": 8 }
          }
        }
      ]
    }
  ]
}
```

---

## Options

### Custom Delimiters

```ts
import { parseHL7 } from '@rethinkhealth/hl7v2';

const tree = parseHL7(raw, {
  delimiters: {
    field: '!',
    component: '$'
  }
});
```

### Auto-Detect Delimiters (MSH-2)

```ts
const tree = parseHL7(rawMessage, { autoDetectDelimiters: true });
```

By default, `autoDetectDelimiters` is `true`.

---

## Node Structure

Nodes follow the [Unist](https://github.com/syntax-tree/unist) spec with HL7v2-specific extensions.

```ts
interface HL7v2Node extends Node {
  type: 'message' | 'segment' | 'field' | 'component' | 'subcomponent';
  name?: string;     // Segment name (PID, MSH)
  index?: number;    // Field/component index
  value?: string;    // Leaf node value
  delimiter?: string;// The delimiter used for this level
  children?: HL7v2Node[];
  position?: {
    start: { line: number; column: number; offset: number };
    end: { line: number; column: number; offset: number };
  };
}
```

---

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Code of Conduct

To ensure a welcoming and positive environment, we have a [Code of Conduct](CODE_OF_CONDUCT.md) that all contributors and participants are expected to adhere to.

---

## License

Copyright 2025 Rethink Health, SUARL. All rights reserved.

This program is licensed to you under the terms of the [MIT License](https://opensource.org/licenses/MIT). This program is distributed WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [LICENSE](LICENSE) file for details.
