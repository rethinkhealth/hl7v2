# @glion/annotate-profile-fields

Unified plugin that annotates each HL7v2 field with its row in the segment attribute table.

## What it does

Puts the HL7v2 standard's description of each field on the field itself: its ID, name, optionality, repetitions, datatype, maximum length, and table, for the version in MSH-12. The tree can then be read without looking anything up. It needs `@glion/annotate-profile-context`, which loads the profile, to run before it. Fields of segments the standard does not define, such as Z-segments, are left as they are.

## Install

```bash
npm install @glion/annotate-profile-fields
```

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import { parseHL7v2 } from "@glion/parser";
import { unified } from "unified";

const tree = parseHL7v2(
  "MSH|^~\\&|SENDER||RECEIVER||20241201||ADT^A01^ADT_A01|MSG123|P|2.5\rPID|1||12345||Doe^John"
);

await unified()
  .use(hl7v2AnnotateProfileContext)
  .use(hl7v2AnnotateProfileFields)
  .run(tree);

// PID-3 field.data:
// {
//   sequence: 3, id: "PID-3", name: "Patient Identifier List", item: "106",
//   optionality: "R", repetitions: "unbounded", datatype: "CX", maxLength: 250
// }
```

## API

### `unified().use(hl7v2AnnotateProfileFields)`

A `unified` plugin. Takes no options. The package exports it as `hl7v2AnnotateProfileFields` and as its default export.

Writes the field's row onto `field.data` of every field the profile describes, empty fields included. Data already on `field.data` is kept, except the properties below, which are overwritten.

## What it annotates

| Property      | Type                                             | Column                                                                                                    |
| ------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| `sequence`    | `number`                                         | SEQ: the field's position in the segment                                                                  |
| `id`          | `string`                                         | The segment ID and sequence, such as `"PID-3"`                                                            |
| `name`        | `string`                                         | ELEMENT NAME, such as `"Patient Identifier List"`                                                         |
| `optionality` | `"R" \| "RE" \| "O" \| "C" \| "X" \| "B" \| "W"` | OPT: required, required but may be empty, optional, conditional, not used, backward compatible, withdrawn |
| `repetitions` | `number \| "unbounded"`                          | RP/#: the most repetitions the field may have; `1` when it does not repeat                                |
| `datatype`    | `string`                                         | DT, such as `"CX"`                                                                                        |
| `maxLength`   | `number`                                         | LEN                                                                                                       |
| `table`       | `string`                                         | TBL#, such as `"HL70001"`                                                                                 |
| `item`        | `string`                                         | ITEM#                                                                                                     |

A property is absent when the standard leaves its column blank for that field. A withdrawn field, for example v2.6 `DG1-2`, has `optionality: "W"` and no `datatype`. Importing the package adds these properties to the `FieldData` type of `@glion/ast`.

```ts
import { visit } from "@glion/util-visit";

visit(tree, "field", (field) => {
  if (field.data?.optionality === "R") {
    console.log(`${field.data.id} (${field.data.name}) is required`);
  }
});
```

## Part of Glion

`@glion/annotate-profile-fields` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
