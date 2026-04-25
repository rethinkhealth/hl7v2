# @glion/parser

`unified`-compatible parser that converts HL7v2 text into a structured AST.

## What it does

`@glion/parser` turns raw HL7v2 text into a `unist`-compatible syntax tree following the [`@glion/ast`](../ast/) spec. It runs as a `unified` parser plugin and auto-detects delimiters from MSH-1 and MSH-2, so non-standard delimiter sets parse without configuration. [`@glion/hl7v2`](../hl7v2/) bundles this parser with the default transform and compile stages.

## Install

```bash
npm install @glion/parser
```

## Use

```ts
import { unified } from "unified";
import { hl7v2Parser } from "@glion/parser";

const message = "MSH|^~\\&|SENDING_APP|SENDING_FAC|...\rPID|1||12345";

const tree = unified().use(hl7v2Parser).parse(message);

console.log(tree);
```

## API

### `unified().use(hl7v2Parser[, options])`

Registers the parser as the reader for a `unified` processor. The parser reads from the input string and produces a `Root` AST; it does not mutate its input.

### `parseHL7v2(input, options?, settings?)`

Standalone parser. Returns a `Root` AST. `options` accepts `ParseOptions` (preprocessing); `settings` accepts `HL7v2Settings` from [`@glion/config`](../config/) and supplies delimiters and feature flags.

### Options

| Option       | Type                 | Description                                                                                                    |
| ------------ | -------------------- | -------------------------------------------------------------------------------------------------------------- |
| `preprocess` | `PreprocessorStep[]` | Replaces the default preprocessor chain. The default chain runs delimiter detection from MSH-1/MSH-2 on input. |

Delimiters and empty-mode are configured via `HL7v2Settings` from [`@glion/config`](../config/), not via plugin options. The default delimiters are `|` (field), `^` (component), `~` (repetition), `&` (subcomponent), `\` (escape), and `\r` (segment).

## Parsing model

- **Pull-based tokenizer.** Single pass with minimal object allocations.
- **Delimiter auto-detection.** MSH-1 and MSH-2 are read before the rest of the message is tokenized; custom delimiter sets are honored without configuration.
- **`unist`-compatible output.** Nodes follow the `@glion/ast` spec and interoperate with `unist-util-visit`, `unist-builder`, and the rest of the Glion plugin ecosystem.

### Experimental: empty-array mode

The parser supports two representations of empty fields, controlled by `settings.experimental.emptyMode` in [`@glion/config`](../config/):

- `"legacy"` (default) — empty fields carry full scaffolding (`Field → FieldRepetition → Component → Subcomponent` with `value: ""`).
- `"empty"` — empty parent nodes carry `children: []` instead of nested empties.

Rules:

- **Leaf nodes** (`Subcomponent`, `SegmentHeader`) with no value carry `value: ""`.
- **Parent nodes** (`Field`, `FieldRepetition`, `Component`) with no content carry `children: []`.
- **Presence vs value:** a node in the parent's `children` array means the position exists; empty `children` means the position has no value.

| Wire format     | Legacy mode                                    | Empty-array mode                       |
| --------------- | ---------------------------------------------- | -------------------------------------- |
| `PID\|1\|\|`    | Field → Rep → Comp → Sub("")                   | Field(children: [])                    |
| `PID\|1\|^\|`   | Field → Rep → [Comp → Sub(""), Comp → Sub("")] | Field → Rep → [Comp[], Comp[]]         |
| `PID\|1\|~\|`   | Field → [Rep → Comp → Sub(""), Rep → ...]      | Field → [Rep[], Rep[]]                 |
| `PID\|1\|ABC\|` | Field → Rep → Comp → Sub("ABC")                | Field → Rep → Comp → Sub("ABC") (same) |

For messages with many empty fields, the empty-array representation reduces node count by 37–63% relative to legacy mode and parses sparse messages roughly 11% faster.

## Part of Glion

`@glion/parser` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
