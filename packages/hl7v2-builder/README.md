# HL7v2 Builder

`@rethinkhealth/hl7v2-builder` provides a tiny set of helpers for assembling HL7v2 abstract syntax trees that follow the [`@rethinkhealth/hl7v2-ast`](../hl7v2-ast/) schema. The helpers wrap [`unist-builder`](https://github.com/syntax-tree/unist-builder) so you can build trees with a couple of function calls instead of manually nesting nodes.

## Functions at a glance

- `m(...)` – build a `root` (i.e. message) node.
- `s(...)` – build a `segment` node, with an optional header field.
- `f(...)` – build a `field` node from a value, component, or array of components.
- `c(...)` – build a `component` node from a value or list of subcomponents.

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

const tree = m([
  s('MSH', [
    f('^~\\&'), // segment header is added automatically when you pass a string
  ]),
  s('PID', [
    f(), // empty field
    f([
      c(['123456', 'DOE', 'JOHN']),
    ]),
  ]),
]);
```

`tree` is now a `Root` node with two segments (`MSH`, `PID`). You can serialise it, transform it, or feed it into other HL7v2 utilities.

## API

### `m(input?: RootContent | RootContent[]): Root`

- With no argument, returns an empty root (no segments).
- Passing a single node wraps it in an array.
- Passing an array is used as-is.

### `s(header?: string, input?: Field | Field[]): Segment`

- Without arguments, builds an empty segment.
- When `header` is provided, the builder prepends a field created with `f(header)` (handy for segment IDs).
- `input` can be a single field or an array of fields; both get appended after the header field.

### `f(input?: string | Component | Component[]): Field`

- No argument → empty field (no repetitions).
- `string` → creates a repetition with one component and one subcomponent containing the string.
- `Component` → wraps it in a single repetition.
- `Component[]` → uses the array as the components inside a single repetition.

### `c(input?: string | string[]): Component`

- No argument → empty component.
- `string` → creates one subcomponent with the supplied value.
- `string[]` → converts every string into a subcomponent and adds them in order.

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