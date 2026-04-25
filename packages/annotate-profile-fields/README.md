# @glion/annotate-profile-fields

Unified plugin to annotate HL7v2 field nodes with profile metadata.

## What it does

Enriches every `field` node in a parsed HL7v2 tree with metadata drawn from the HL7v2 specification profile — field name, datatype, required/repeatable flags, maximum length, and table reference — so the AST becomes self-describing. The plugin reads the resolved `ProfileContext` from `file.data.profile` (populated by `@glion/annotate-profile-context`) and spreads each matching profile entry onto `field.data`. Unknown segments (Z-segments) and unsupported versions are silently skipped.

## Install

```bash
npm install @glion/annotate-profile-fields
```

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import { hl7v2Parser } from "@glion/parser";
import { unified } from "unified";

const processor = unified()
  .use(hl7v2Parser)
  .use(hl7v2AnnotateProfileContext)
  .use(hl7v2AnnotateProfileFields);

const message =
  "MSH|^~\\&|SENDER||RECEIVER||20241201||ADT^A01^ADT_A01|MSG123|P|2.5\rPID|1||12345||Doe^John";

const file = await processor.process(message);

// Field nodes now carry profile metadata on field.data
// e.g., PID-3: { id: "PID-3", name: "Patient Identifier List", required: true, repeatable: true, datatype: "CX", ... }
```

## API

This package exports the named constant `hl7v2AnnotateProfileFields`. The default export is the plugin itself.

### `unified().use(hl7v2AnnotateProfileFields)`

A `unified` plugin that annotates `field` nodes with profile metadata. The plugin reads the resolved `ProfileContext` from `file.data.profile` (populated by `@glion/annotate-profile-context`) and, for each `field` node, looks up the field definition by segment name and sequence index, then spreads the matching profile properties onto `field.data`.

```ts
import type { Root } from "@glion/ast";
import type { Plugin } from "unified";

export const hl7v2AnnotateProfileFields: Plugin<[], Root, Root>;
export default hl7v2AnnotateProfileFields;
```

**Returns**

The same `Root` tree, mutated in place. When `file.data.profile` is absent, the tree is returned unchanged.

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
