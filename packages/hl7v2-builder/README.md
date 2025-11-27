# HL7v2 Builder

`@rethinkhealth/hl7v2-builder` provides a tiny set of helpers for assembling HL7v2 abstract syntax trees that follow the [`@rethinkhealth/hl7v2-ast`](../hl7v2-ast/) schema. The helpers wrap [`unist-builder`](https://github.com/syntax-tree/unist-builder) so you can build trees with a couple of function calls instead of manually nesting nodes.

## Why it helps

- Work directly with typed nodes while avoiding the repetitive `u('node-type', …)` boilerplate from `unist-builder`.
- Describe complex segments declaratively without worrying about separator placement or empty components.

## Philosophy

- Stay explicit: you build the same AST shape you would by hand, so there is no hidden serialization logic or format guessing.
- Compose freely: each helper is a thin wrapper over `unist-builder`, making it easy to mix raw nodes and other utilities when needed.
- Keep things minimal: a small surface area means fewer abstractions to learn and less room for divergent interpretations of the HL7v2 model.

## Functions at a glance

- `m(...segments)` – build a `root` (i.e. message) node from any number of segments.
- `s(...fields)` – build a `segment` node from one or more `Field` nodes.
- `f(...values)` – build a `field` node from strings, components, repetitions, or arrays thereof.
- `r(...components)` – build a `field-repetition` node from strings or components.
- `c(...values)` – build a `component` node from strings or arrays of strings.

Each helper returns objects typed from `@rethinkhealth/hl7v2-ast`, so the resulting tree can be consumed by any package in the ecosystem (parsers, linters, etc.).

## Install

This package is ESM-only. In Node.js 18+ run one of:

```bash
npm install @rethinkhealth/hl7v2-builder
# or
yarn add @rethinkhealth/hl7v2-builder
# or
pnpm add @rethinkhealth/hl7v2-builder
```

## Usage

```typescript
import { c, f, m, s } from '@rethinkhealth/hl7v2-builder';

const tree = m(
  s(
    f('MSH'), // include the segment header explicitly
    f('^~\\&')
  ),
  s(
    f('PID'),
    f(), // empty field
    f([
      c(['123456', 'DOE', 'JOHN']), // accept arrays or individual args interchangeably
    ])
  )
);
```

`tree` is now a `Root` node with two segments (`MSH`, `PID`). You can serialise it, transform it, or feed it into other HL7v2 utilities.

### Experimental: Empty Mode

The builder respects the `emptyMode` experimental setting from `@rethinkhealth/hl7v2-config`. When `emptyMode: "empty"` is configured in your `.hl7v2rc.json`, empty fields, repetitions, and components will have empty children arrays instead of the legacy full structure.

**Legacy mode (default):**
```typescript
f()  // → Field → Rep → Comp → Sub("")
```

**Empty mode (via config):**
```typescript
// With .hl7v2rc.json: { "settings": { "experimental": { "emptyMode": "empty" } } }
f()  // → Field with children: []
```

See [`@rethinkhealth/hl7v2-config`](../hl7v2-config/) for configuration details.

## API

### `m(...children: RootContent[]): Root`

- No arguments → empty root.
- Pass any number of `RootContent` nodes (segments, fragments, etc.); they are appended in order.
- Arguments are used as-is, so pass concrete AST nodes rather than nested arrays.

### `s(...fields: Field[]): Segment`

- No arguments → empty segment.
- Provide the header field yourself, typically with `f('PID')`, and include it as the first argument.
- Fields are appended in the order provided; the helper does not do any automatic flattening.

### `f(...values: Array<string | Component | FieldRepetition | Array<string | Component | FieldRepetition>>): Field`

- No arguments → empty field with a single empty repetition.
- Strings become components with a single subcomponent containing the value.
- `Component` instances are added directly.
- `FieldRepetition` instances are preserved and allow you to control repetitions explicitly.
- Arrays are flattened one level so you can pass a mixture of individual values and grouped lists.
- Sequences of strings/components are grouped into a single repetition unless you introduce a `FieldRepetition` explicitly.

### `r(...components: Array<string | Component | Array<string | Component>>): FieldRepetition`

- No arguments → repetition with an empty component.
- Strings become components with a single subcomponent containing the value.
- Components are inserted as-is.
- Arrays are flattened one level for convenience.

### `c(...values: Array<string | string[]>): Component`

- No arguments → component with an empty subcomponent.
- Strings become subcomponents.
- Arrays are flattened one level so you can pass `c('DOE', ['JOHN', 'Q'])`.

> **Note**
> These helpers are intentionally minimal. For advanced scenarios—multiple repetitions per field, custom metadata, or node reuse—you can still drop down to `unist-builder` (`u`) directly and mix those nodes with the helpers above.

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
