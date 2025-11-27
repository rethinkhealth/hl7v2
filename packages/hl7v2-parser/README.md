# HL7v2 Parser

This package is a utility that takes a raw HL7v2 message as input and turns it into an HL7v2 syntax tree following the [@rethinkhealth/hl7v2-ast](../hl7v2-ast/README.md) definition.

This utility is a low level project. It’s used in [@rethinkhealth/hl7v2](../hl7v2/), which focusses on making it easier to transform content by abstracting these internals away.

## When should I use this?

If you want to handle syntax trees manually, use this. For an easier time processing content, use the [@rethinkhealth/hl7v2](../hl7v2/) ecosystem instead.

## Features

- **Speed-first**: pull-based tokenizer, single pass, minimal object allocations.
- **Spec-aware**: auto-detects delimiters from MSH-1 and MSH-2.
- **AST design**: outputs a unist-compatible tree for use in the HL7v2 unified ecosystem.
- **Composable**: works directly as a unified parser plugin or as a standalone function.
- **Streaming-friendly**: pull-based design is ready for streaming use cases.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 16+), install with npm:

```bash
npm install @rethinkhealth/hl7v2-parser
```

## Use

### Basic Usage

```typescript
import { unified } from 'unified';
import { hl7v2Parser } from '@rethinkhealth/hl7v2-parser';

const message = `MSH|^~\\&|SENDING_APP|SENDING_FAC|...`;

const tree = unified()
  .use(hl7v2Parser)
  .parse(message);

console.log(tree);
```

### Custom Delimiters

You can specify custom delimiters for parsing non-standard HL7v2 messages. The `delimiters` option accepts a partial object, so you only need to specify the delimiters you want to override:

```typescript
import { unified } from 'unified';
import { hl7v2Parser } from '@rethinkhealth/hl7v2-parser';

// Override only the segment delimiter
const tree = unified()
  .use(hl7v2Parser, {
    delimiters: {
      segment: '\n', // Use newline instead of carriage return
    }
  })
  .parse(message);

// Override multiple delimiters
const customTree = unified()
  .use(hl7v2Parser, {
    delimiters: {
      field: '$',
      component: '%',
      segment: '\n',
    }
  })
  .parse(customMessage);
```

The default delimiters are:

- `field`: `|`
- `component`: `^`
- `repetition`: `~`
- `subcomponent`: `&`
- `escape`: `\`
- `segment`: `\r`

### Experimental Features

The parser supports experimental features through the `experimental` option. These features are subject to change but provide opt-in access to upcoming behaviors.

#### Empty Array Mode

By default, the parser represents empty fields with full scaffolding (Field → FieldRepetition → Component → Subcomponent with `value: ""`). The `emptyMode: 'empty'` option changes this behavior to use empty children arrays instead, making the AST more compact and easier to work with.

```typescript
import { unified } from 'unified';
import { hl7v2Parser } from '@rethinkhealth/hl7v2-parser';

// With empty-array mode (new behavior)
const tree = unified()
  .use(hl7v2Parser, {
    experimental: {
      emptyMode: 'empty-array',
    }
  })
  .parse('PID|1||');

// PID.2 (empty field) will have: { type: 'field', children: [] }
// Instead of: Field → Rep → Comp → Sub with value: ""
```

**Spec Rules:**

- **Leaf nodes** (Subcomponent, SegmentHeader) with no value: `value: ""`
- **Parent nodes** (Field, FieldRepetition, Component) with no content: `children: []`
- **Presence vs Value**:
  - Node exists in parent's children array = position exists
  - Node has empty children array = no value at that position

**Examples:**

| Wire Format  | Legacy Mode                                    | Empty-Array Mode                        |
|--------------|------------------------------------------------|-----------------------------------------|
| `PID\|1\|\|`   | Field → Rep → Comp → Sub("")                   | Field(children: [])                     |
| `PID\|1\|^\|`  | Field → Rep → [Comp → Sub(""), Comp → Sub("")] | Field → Rep → [Comp[], Comp[]]          |
| `PID\|1\|~\|`  | Field → [Rep → Comp → Sub(""), Rep → ...]      | Field → [Rep[], Rep[]]                  |
| `PID\|1\|ABC\|`| Field → Rep → Comp → Sub("ABC")                | Field → Rep → Comp → Sub("ABC") (same)  |

**Benefits:**

- 37-63% reduction in node count for messages with empty fields
- ~11% performance improvement for sparse messages
- Cleaner AST structure for visitor patterns and transformations
- Easier to distinguish "field exists but is empty" from "field has content"

**Note:** This feature will become the default behavior in future versions. The legacy mode will be deprecated.

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
