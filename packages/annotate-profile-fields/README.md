# @glion/annotate-profile-fields

Unified plugin to annotate HL7v2 field nodes with profile metadata.

## What it does

Enriches every `field` node in a parsed HL7v2 tree with metadata drawn from the HL7v2 specification profile — field name, datatype, required/repeatable flags, maximum length, and table reference — so the AST becomes self-describing. The plugin reads the message version from MSH-12, loads the matching field definitions from `@glion/profiles`, and spreads the profile properties onto `field.data`. Unknown segments (Z-segments) and unsupported versions are silently skipped.

## Install

```bash
npm install @glion/annotate-profile-fields
```

## Use

```ts
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import { hl7v2Parser } from "@glion/parser";
import { unified } from "unified";

const processor = unified().use(hl7v2Parser).use(hl7v2AnnotateProfileFields);

const message =
  "MSH|^~\\&|SENDER||RECEIVER||20241201||ADT^A01^ADT_A01|MSG123|P|2.5\rPID|1||12345||Doe^John";

const tree = processor.parse(message);
await processor.run(tree);

// Field nodes now carry profile metadata on field.data
// e.g., PID-3: { id: "PID-3", name: "Patient Identifier List", required: true, repeatable: true, datatype: "CX", ... }
```

## API

This package exports the named constant `hl7v2AnnotateProfileFields`. The default export is the plugin itself.

### `unified().use(hl7v2AnnotateProfileFields)`

Annotate Field nodes with profile metadata. The plugin:

1. Reads the HL7v2 version from MSH-12.
2. Loads field definitions for all segments in the message from `@glion/profiles`.
3. Visits each Field node and spreads the matching profile properties onto `field.data`.

###### Returns

Async transformer (`async function (Root) => Root`).

## What it annotates

Importing this package augments the `FieldData` interface from `@glion/ast`:

| Property     | Type      | Description                                          |
| ------------ | --------- | ---------------------------------------------------- |
| `id`         | `string`  | Field identifier (e.g., `"MSH-9"`, `"PID-3"`)        |
| `name`       | `string`  | Human-readable field name (e.g., `"Patient Name"`)   |
| `required`   | `boolean` | Whether this field is required in the segment        |
| `repeatable` | `boolean` | Whether this field supports repetition               |
| `datatype`   | `string`  | Datatype ID (e.g., `"XPN"`, `"ST"`, `"CWE"`)         |
| `maxLength`  | `number`  | Maximum allowed length (when defined in the profile) |
| `table`      | `string`  | Table reference for coded fields (e.g., `"HL70001"`) |
| `item`       | `string`  | HL7 specification item number                        |

All properties are optional (`undefined` when not available in the profile).

### Accessing field metadata

```ts
import { visit } from "@glion/util-visit";

// After running the annotator...
visit(tree, "field", (node) => {
  if (node.data?.required && node.data?.name) {
    console.log(`Required field: ${node.data.id} (${node.data.name})`);
  }
});
```

### Finding coded fields

```ts
visit(tree, "field", (node) => {
  if (node.data?.table) {
    console.log(`${node.data.id} uses table ${node.data.table}`);
  }
});
```

## Part of Glion

`@glion/annotate-profile-fields` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
