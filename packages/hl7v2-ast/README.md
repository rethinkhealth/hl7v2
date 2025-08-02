# HL7v2-AST

**H**ealth **L**evel **7** Version 2 **A**bstract **S**yntax **T**ree.

***

**hl7v2-ast** is a specification for representing HL7v2 messages as an [abstract syntax tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree). It implements **[unist](https://github.com/syntax-tree/unist)** and provides a structured representation of HL7v2 segments, fields, components, and subcomponents.

## Introduction

This document defines a format for representing HL7v2 messages as an abstract syntax tree. 

**hl7v2-ast** was created to support parsing, validation, and transformation of HL7v2 messages in a structured way.

The specification follows the [Unist](https://github.com/syntax-tree/unist) model to benefit from the ecosystem of utilities and the [Unified](https://unifiedjs.com) processing pipeline.

### Where this specification fits

- **hl7v2-ast** extends [unist](https://github.com/syntax-tree/unist) with HL7-specific node types.
- Integrates with editor tooling, validators, and transformers.


## Types

TypeScript types are published with the package:

```sh
npm install @rethinkhealth/hl7v2-ast
```

## Nodes (abstract)

### `Literal`

```idl
interface Literal <: UnistLiteral {
  value: string
}
```

**Literal** represents a leaf HL7v2 node containing a `value`, such as a field,
component, or subcomponent.

### `Parent`

```idl
interface Parent <: UnistParent {
  children: [HL7v2Node]
}
```

**Parent** represents a container node in HL7v2, such as `message` or `segment`.

## Nodes

### `Message`

```idl
interface Message <: Parent {
  type: 'message'
  children: [Segment]
}
```

**Message** is the root of an HL7v2 document. It contains one or more `Segment` nodes.

### `Segment`

```idl
interface Segment <: Parent {
  type: 'segment'
  name: string
  index: number
  delimiter: string
  children: [Field]
}
```

**Segment** represents an HL7v2 segment such as `MSH`, `PID`, or `OBX`.

* `name` is the 3-letter segment code.
* `index` is the segment's position in the message.
* `delimiter` is the field separator used.

### `Field`

```idl
interface Field <: Parent {
  type: 'field'
  index: number
  value?: string
  delimiter?: string
  children?: [Component]
}
```

**Field** represents a field within a segment.

* If the field contains components, it is a `Parent`.
* If not, it is a `Literal` with a `value`.

### `Component`

```idl
interface Component <: Parent {
  type: 'component'
  index: number
  value?: string
  delimiter?: string
  children?: [Subcomponent]
}
```

**Component** represents a component within a field.

* Contains `Subcomponent` nodes if further split.

### `Subcomponent`

```idl
interface Subcomponent <: Literal {
  type: 'subcomponent'
  index: number
  value: string
}
```

**Subcomponent** represents the smallest value unit in an HL7v2 message.

## Position

All nodes may include a `position` property following [unist]((https://github.com/syntax-tree/unist)):

```idl
interface Position {
  start: Point
  end: Point
}

interface Point {
  line: number    // 1-based segment line
  column: number  // 1-based character column within the segment
  offset: number  // 0-based character index in the entire message
}
```

Example:

```json
{
  "type": "field",
  "index": 1,
  "value": "DOE^JOHN",
  "position": {
    "start": { "line": 2, "column": 5, "offset": 48 },
    "end": { "line": 2, "column": 14, "offset": 57 }
  }
}
```

## Delimiters

HL7v2 messages use configurable delimiters. **hl7v2-ast** tracks delimiters per node for round-tripping.

Default:

```json
{
  "field": "|",
  "component": "^",
  "subcomponent": "&",
  "repetition": "~",
  "escape": "\\",
  "segment": "\r"
}
```

MSH-1 and MSH-2 are auto-detected unless overridden.

## Content model

```idl
type HL7v2Content =
  Message | Segment | Field | Component | Subcomponent
```

## Extensions

The AST is designed for:

* **Validation plugins** (segment rules, field presence)
* **Annotation plugins** (map to FHIR, metadata)
* **Transformers** (to JSON, FHIR, XML)


## Contributing

We welcome contributions! Please see our [Contributing Guide](../../CONTRIBUTING.md) for more details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code of Conduct

To ensure a welcoming and positive environment, we have a [Code of Conduct](../../CODE_OF_CONDUCT.md) that all contributors and participants are expected to adhere to.

## License

Copyright 2025 Rethink Health, SUARL. All rights reserved.

This program is licensed to you under the terms of the [MIT License](https://opensource.org/licenses/MIT). This program is distributed WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [LICENSE](../../LICENSE) file for details.