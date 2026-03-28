# @rethinkhealth/hl7v2-annotate-profile-fields

**[unified](https://github.com/unifiedjs/unified)** plugin to annotate HL7v2 field nodes with profile metadata.

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
- [Examples](#examples)
- [Compatibility](#compatibility)
- [Related](#related)

## What is this?

This package is a [unified](https://github.com/unifiedjs/unified) plugin that enriches Field AST nodes with metadata from HL7v2 profile definitions. After running this plugin, each field carries its profile information directly on `field.data` — making the AST self-describing.

The plugin reads the message version from MSH-12, loads the corresponding field definitions from `@rethinkhealth/hl7v2-profiles`, and spreads the profile properties onto each field node. Unknown segments (Z-segments) and unsupported versions are silently skipped.

## When should I use this?

Use this plugin when:

- You want to inspect a parsed AST and see field names, datatypes, and constraints without loading profiles yourself
- Building tools (serializers, debuggers, IDE integrations) that need field-level metadata
- Creating custom processors that need to know which fields are required, repeatable, or coded

## Install

```bash
npm install @rethinkhealth/hl7v2-annotate-profile-fields
```

## Use

```typescript
import { unified } from "unified";
import { hl7v2Parser } from "@rethinkhealth/hl7v2-parser";
import { hl7v2AnnotateProfileFields } from "@rethinkhealth/hl7v2-annotate-profile-fields";

const processor = unified().use(hl7v2Parser).use(hl7v2AnnotateProfileFields);

const message =
  "MSH|^~\\&|SENDER||RECEIVER||20241201||ADT^A01^ADT_A01|MSG123|P|2.5\rPID|1||12345||Doe^John";

const tree = processor.parse(message);
await processor.run(tree);

// Field nodes now carry profile metadata on field.data
// e.g., PID-3: { id: "PID-3", name: "Patient Identifier List", required: true, repeatable: true, datatype: "CX", ... }
```

## API

This package exports the identifier `hl7v2AnnotateProfileFields`. The default export is `hl7v2AnnotateProfileFields`.

### `unified().use(hl7v2AnnotateProfileFields)`

Annotate Field nodes with profile metadata.

This plugin:

1. Reads the HL7v2 version from MSH-12
2. Loads field definitions for all segments in the message
3. Visits each Field node and spreads the matching profile properties onto `field.data`

###### Returns

Async transformer (`async function (Root) => Root`)

### Augmented `FieldData`

Importing this package augments the `FieldData` interface from `@rethinkhealth/hl7v2-ast`:

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

## Examples

### Accessing field metadata

```typescript
import { visit } from "@rethinkhealth/hl7v2-util-visit";

// After running the annotator...
visit(tree, "field", (node, ancestors, info) => {
  if (node.data?.required && node.data?.name) {
    console.log(`Required field: ${node.data.id} (${node.data.name})`);
  }
});
```

### Finding coded fields

```typescript
visit(tree, "field", (node) => {
  if (node.data?.table) {
    console.log(`${node.data.id} uses table ${node.data.table}`);
  }
});
```

## Compatibility

- **Node.js**: 18+
- **TypeScript**: 5.0+
- **unified**: 11.0+

## Related

- [`@rethinkhealth/hl7v2-annotate-profile-datatypes`](../hl7v2-annotate-profile-datatypes) — Annotate components with datatype metadata
- [`@rethinkhealth/hl7v2-annotate-profile-code-systems`](../hl7v2-annotate-profile-code-systems) — Annotate coded values with UTG display names
- [`@rethinkhealth/hl7v2-preset-annotate-profile-recommended`](../hl7v2-preset-annotate-profile-recommended) — Preset bundling all profile annotators
- [`@rethinkhealth/hl7v2-profiles`](../hl7v2-profiles) — Profile data source

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
