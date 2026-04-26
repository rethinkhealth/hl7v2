# @glion/builder

Typed helpers for assembling HL7v2 ASTs by hand.

## What it does

`@glion/builder` provides six short functions (`m`, `g`, `s`, `f`, `r`, `c`) that wrap [`unist-builder`](https://github.com/syntax-tree/unist-builder) and return nodes typed from [`@glion/ast`](../ast/). The output matches the shape produced by `@glion/parser`, so any Glion consumer (serializers, linters, annotators) can read it back. The helpers carry no HL7v2 semantics: trees are constructed exactly as written.

## Install

```bash
npm install @glion/builder
```

## Use

```ts
import { c, f, m, s } from "@glion/builder";

const tree = m(
  s("MSH", f("^~\\&")),
  s(
    "PID",
    f(), // empty field
    f([
      c(["123456", "DOE", "JOHN"]), // arrays and individual args are interchangeable
    ])
  )
);
```

`tree` is a `Root` node containing two segments (`MSH`, `PID`). It is consumable by `@glion/to-hl7v2` (for serialization), `@glion/jsonify` (for JSON), or any `unist` visitor.

## API

### `m(...children: RootContent[]): Root`

Build a `Root` (message) node.

- No arguments produce an empty root.
- Any number of `RootContent` nodes (segments, groups) are appended in order.

### `g(name: string, ...children: (Segment | Group)[]): Group`

Build a `Group` node.

- `name` is the group name (e.g. `"PATIENT"`, `"ORDER"`).
- Children are appended in the order provided. Groups can nest.

### `s(name: string, ...fields: Field[]): Segment`

Build a `Segment` node.

- `name` is the three-character segment identifier (e.g. `"MSH"`, `"PID"`).
- Fields are appended in the order provided.

### `f(...values: Array<string | Component | FieldRepetition | Array<string | Component | FieldRepetition>>): Field`

Build a `Field` node.

- No arguments produce an empty field.
- Strings become components with a single subcomponent containing the value.
- `Component` instances are added directly.
- `FieldRepetition` instances are preserved so repetitions can be controlled explicitly.
- Arrays are flattened one level, mixing individual values and grouped lists.
- Sequences of strings and components are grouped into a single repetition unless a `FieldRepetition` is introduced explicitly.

### `r(...components: Array<string | Component | Array<string | Component>>): FieldRepetition`

Build a `FieldRepetition` node.

- No arguments produce a repetition with an empty component.
- Strings become components with a single subcomponent containing the value.
- `Component` instances are inserted as-is.
- Arrays are flattened one level.

### `c(...values: Array<string | string[]>): Component`

Build a `Component` node.

- No arguments produce a component with an empty subcomponent.
- Strings become subcomponents.
- Arrays are flattened one level, so `c('DOE', ['JOHN', 'Q'])` produces three subcomponents.

Compatible with `unist-builder`'s `u()` helper — raw `unist` nodes mix freely with the helpers above.

### Experimental: empty mode

The builder honours the `emptyMode` experimental setting from `@glion/config`. When `emptyMode: "empty"` is configured in `.hl7v2rc.json`, empty fields, repetitions, and components produce empty `children` arrays instead of the legacy full structure:

```ts
// Legacy mode (default):
f(); // → Field → Rep → Comp → Sub("")

// Empty mode (via .hl7v2rc.json: { settings: { experimental: { emptyMode: "empty" } } }):
f(); // → Field with children: []
```

See [`@glion/config`](../config/) for configuration details.

## Part of Glion

`@glion/builder` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
