# @glion/annotate-profile-datatypes

Unified plugin that annotates HL7v2 field repetitions, components, and subcomponents with their datatype.

## What it does

A field holds either a single value of a primitive datatype, such as `ST` or `DT`, or a composite datatype, such as `XPN` or `CWE`, whose components (and their subcomponents) each have a datatype of their own. This plugin puts that description on the tree: each field repetition gets its datatype, and each component and subcomponent gets its row in its parent datatype's component table. Annotation goes down only as far as the composite structure does, so the node with `kind: "primitive"` is the one that holds the value. It needs `@glion/annotate-profile-context` and `@glion/annotate-profile-fields` to run before it.

## Install

```bash
npm install @glion/annotate-profile-datatypes
```

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileDatatypes } from "@glion/annotate-profile-datatypes";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import { parseHL7v2 } from "@glion/parser";
import { unified } from "unified";

const tree = parseHL7v2(
  "MSH|^~\\&|SENDER||RECEIVER||20241201||ADT^A01^ADT_A01|MSG123|P|2.5\rPID|1||12345||Doe^John"
);

await unified()
  .use(hl7v2AnnotateProfileContext)
  .use(hl7v2AnnotateProfileFields)
  .use(hl7v2AnnotateProfileDatatypes)
  .run(tree);

// PID-5, repetition:     { datatypeId: "XPN", kind: "composite", title: "Extended Person Name" }
// PID-5.1, component:    { id: "XPN.1", sequence: 1, name: "Family Name", optionality: "O",
//                          datatypeId: "FN", kind: "composite", title: "Family Name" }
// PID-5.1.1, subcomponent: { id: "FN.1", sequence: 1, name: "Surname", optionality: "R",
//                          datatypeId: "ST", kind: "primitive", title: "String Data" }
```

## API

### `unified().use(hl7v2AnnotateProfileDatatypes)`

A `unified` plugin. Takes no options. The package exports it as `hl7v2AnnotateProfileDatatypes` and as its default export.

Writes onto `node.data` of field repetitions, components, and subcomponents. Data already there is kept, except the properties below, which are overwritten.

## What it annotates

A field repetition gets its field's datatype:

| Property     | Type                         | Description                                           |
| ------------ | ---------------------------- | ----------------------------------------------------- |
| `datatypeId` | `string`                     | The datatype, such as `"XPN"`                         |
| `kind`       | `"primitive" \| "composite"` | Whether the value is here or in the components        |
| `title`      | `string`                     | The datatype's name, such as `"Extended Person Name"` |

A component of a composite repetition, and a subcomponent of a composite component, get their row in the component table, with the same `kind` and `title` for their own datatype:

| Property      | Type          | Description                                                  |
| ------------- | ------------- | ------------------------------------------------------------ |
| `id`          | `string`      | The parent datatype and sequence, such as `"XPN.1"`          |
| `sequence`    | `number`      | SEQ: the position in the parent datatype                     |
| `name`        | `string`      | COMPONENT NAME, such as `"Family Name"`                      |
| `optionality` | `Optionality` | OPT, one of `"R"`, `"RE"`, `"O"`, `"C"`, `"X"`, `"B"`, `"W"` |
| `datatypeId`  | `string`      | DT, such as `"FN"`                                           |
| `table`       | `string`      | TBL#, such as `"HL70200"`                                    |
| `maxLength`   | `number`      | LEN                                                          |

A property is absent when the standard leaves its column blank. Before v2.5 the standard prints no component tables, so components have no `optionality` or `table`. A withdrawn component, for example v2.7 `XPN.6`, has `optionality: "W"` and no datatype. Nodes whose datatype the profile does not know, such as the fields of Z-segments, are left as they are. Importing the package adds these properties to the `FieldRepetitionData`, `ComponentData`, and `SubcomponentData` types of `@glion/ast`.

## Part of Glion

`@glion/annotate-profile-datatypes` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
