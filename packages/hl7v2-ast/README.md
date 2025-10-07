# HL7v2-AST

**H**ealth **L**evel **7** Version 2 **A**bstract **S**yntax **T**ree.

**hl7v2-ast** is a specification for representing HL7v2 messages as an [abstract syntax tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree). It implements **[unist](https://github.com/syntax-tree/unist)** and provides a structured, lossless representation of HL7v2 segments, fields, field repetitions, components, and subcomponents.

## Introduction

This document defines a format for representing HL7v2 messages as an abstract syntax tree.

**hl7v2-ast** was created to support parsing, validation, transformation, and linting of HL7v2 messages in a structured way.

The specification follows the [Unist](https://github.com/syntax-tree/unist) model to benefit from the ecosystem of utilities and the [Unified](https://unifiedjs.com) processing pipeline.

### Where this specification fits

* **hl7v2-ast** extends [unist](https://github.com/syntax-tree/unist) with HL7-specific node types.
* Integrates with editor tooling, validators, and transformers.

## Types

TypeScript types are published with the package:

```sh
npm install @rethinkhealth/hl7v2-ast
```

---

## Node Hierarchy

The AST reflects the full HL7v2 delimiter hierarchy:

```
root
└── segment
    └── field (|)
        └── field-repetition (~)
            └── component (^)
                └── subcomponent (&)
```

* Every **field** always contains one or more `field-repetition` nodes, even if there is no `~`.
* Every **component** always contains one or more `subcomponent` nodes, even if there is no `&`.
* Only `subcomponent` nodes carry `value`.

## Nodes (abstract)

### `Literal`

```idl
interface Literal <: UnistLiteral {
  value: string
}
```

Represents a leaf HL7v2 node containing a value. In this AST, the leaf is always a `subcomponent`.

### `Parent`

```idl
interface Parent <: UnistParent {
  children: [HL7v2Node]
}
```

Represents a container node such as a `segment`, `field`, or `component`.

## Nodes (concrete)

### `Root`

```idl
interface Root <: Parent {
  type: 'root'
  children: [Segment | Group]
}
```

Root of an HL7v2 AST. Can represent a full message or a fragment.

---

### `Segment`

```idl
interface Segment <: Parent {
  type: 'segment'
  name?: string
  children: [Field]
}
```

Represents an HL7v2 segment such as `MSH`, `PID`, or `OBX`.

The `name` property can be used to identify the segment without traversing the field hierarchy. When present, it contains the segment identifier (e.g., "MSH", "PID", "OBX").

### `Group`

```idl
interface Group <: Parent {
  type: 'group'
  name: string
  children: [Segment]
}
```

Represents a repeating or optional group of related segments (e.g., ORC+OBR+OBX).

### `Field`

```idl
interface Field <: Parent {
  type: 'field'
  index: number
  children: [FieldRepetition]
}
```

Represents a field inside a segment. **Always** contains one or more `field-repetition` nodes.

### `FieldRepetition`

```idl
interface FieldRepetition <: Parent {
  type: 'field-repetition'
  index?: number
  children: [Component]
}
```

Represents one `~`-separated instance of a field. **Always** contains one or more `component` nodes.

### `Component`

```idl
interface Component <: Parent {
  type: 'component'
  index: number
  children: [Subcomponent]
}
```

Represents a `^`-separated component. **Always** contains one or more `subcomponent` nodes.

### `Subcomponent`

```idl
interface Subcomponent <: Literal {
  type: 'subcomponent'
  index: number
  value: string
}
```

Represents an `&`-separated subcomponent and holds the actual text value.

## Position

All nodes may include a `position` property following [unist](https://github.com/syntax-tree/unist):

```idl
interface Position {
  start: Point
  end: Point
}

interface Point {
  line: number
  column: number
  offset: number
}
```

## Content model

```idl
type HL7v2Content =
  Root | Segment | Group | Field | FieldRepetition | Component | Subcomponent
```

## Extensions

The AST is designed for:

* **Validation plugins** (segment rules, field presence)
* **Annotation plugins** (map to FHIR, metadata)
* **Transformers** (to JSON, FHIR, XML)

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