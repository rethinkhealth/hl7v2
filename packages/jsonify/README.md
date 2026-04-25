# @glion/jsonify

Compile an HL7v2 AST into a JSON-friendly structure.

## What it does

`@glion/jsonify` takes an HL7v2 AST — typically produced by `@glion/parser` — and emits a JSON representation that strips `unist` metadata (position, type discriminators, raw text) and keeps the meaningful HL7v2 shape: segment names, field positions, repetitions, components, and subcomponents. The result is a plain array of segment and group objects suitable for downstream APIs, message queues, and analytics pipelines.

## Install

```bash
npm install @glion/jsonify
```

## Use

```ts
import { hl7v2Jsonify } from "@glion/jsonify";
import { hl7v2Parser } from "@glion/parser";
import { unified } from "unified";

const msg = `MSH|^~\\&|HIS|RIH|EKG|EKG|200202150930||ADT^A01|MSG00001|P|2.4\rPID|||555-44-4444||DOE^JOHN`;

const file = await unified().use(hl7v2Parser).use(hl7v2Jsonify).process(msg);

console.log(file.result);
```

Yields:

```json
[
  {
    "segment": "MSH",
    "fields": [
      "|",
      "^~\\&",
      "HIS",
      "RIH",
      "EKG",
      "EKG",
      "200202150930",
      "",
      ["ADT", "A01"],
      "MSG00001",
      "P",
      "2.4"
    ]
  },
  {
    "segment": "PID",
    "fields": ["", "", "555-44-4444", "", ["DOE", "JOHN"]]
  }
]
```

## API

### `unified().use(hl7v2Jsonify)`

Registers the plugin as the compiler of a `unified` processor. Sets `file.result` to an `Hl7v2JsonResult` value (a plain array of segment and group objects). Takes no options.

### `toJsonRuntime(tree)`

Standalone runtime that converts an HL7v2 AST node to its JSON representation.

- `tree` (`Nodes`) — the root node to convert.
- Returns: `Hl7v2JsonResult`.

```ts
import { toJsonRuntime } from "@glion/jsonify";

const json = toJsonRuntime(rootNode);
```

## JSON shape

```ts
type Hl7v2JsonResult = (SegmentJson | GroupJson)[];

interface SegmentJson {
  segment: string;
  fields: (FieldJson | FieldJson[])[];
}

interface GroupJson {
  group: string;
  children: (SegmentJson | GroupJson)[];
}

type FieldJson = string | string[];
```

Field values collapse to their simplest form:

- A field with a single component containing a single subcomponent becomes a `string`.
- A field with multiple components or subcomponents becomes a nested array (`string[]` or `string[][]`).
- A field with multiple repetitions becomes an array, one entry per repetition.

## Part of Glion

`@glion/jsonify` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
