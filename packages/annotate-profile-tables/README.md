# @glion/annotate-profile-tables

Unified plugin to annotate HL7v2 primitive values with their entry in the table of the message's version.

## What it does

A primitive value bound to an HL7v2 table, such as PID-8 `Administrative Sex` (IS, table `0001`) in v2.5 or XPN.7 `Name Type Code` (ID, table `0200`), is a code that the table describes. This plugin looks up each such value in its table, as printed in the HL7v2 version the message declares in MSH-12, and writes the matching entry onto the node that holds the value: a field repetition, a component, or a subcomponent. A code the message's version does not define is left unannotated, even when a later version defines it. A code the table prints only as part of a range, such as `E1 ... E9` in table 0141, is left unannotated too. For a user-defined table, the description is the one HL7 suggests.

Composite values, such as a CWE field, are not annotated.

## Install

```bash
npm install @glion/annotate-profile-tables
```

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileDatatypes } from "@glion/annotate-profile-datatypes";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import { hl7v2AnnotateProfileTables } from "@glion/annotate-profile-tables";
import { hl7v2Parser } from "@glion/parser";
import { unified } from "unified";
import { VFile } from "vfile";

const processor = unified()
  .use(hl7v2Parser)
  .use(hl7v2AnnotateProfileContext)
  .use(hl7v2AnnotateProfileFields)
  .use(hl7v2AnnotateProfileDatatypes)
  .use(hl7v2AnnotateProfileTables);

const file = new VFile(
  "MSH|^~\\&|SENDER||RECEIVER||20241201||ADT^A01|MSG123|P|2.5\rPID|1||12345||Doe^John||19800101|M"
);
const tree = await processor.run(processor.parse(file), file);

// PID-8 field-repetition data.tableValue === { value: "M", description: "Male" }
```

## API

This package exports the named constant `hl7v2AnnotateProfileTables` and the type `TableValue`. The default export is the plugin itself.

```ts
import type { Root } from "@glion/ast";
import type { Plugin } from "unified";

export interface TableValue {
  value: string;
  description: string;
}
export const hl7v2AnnotateProfileTables: Plugin<[], Root, Root>;
```

The plugin reads `kind` and `table` from `node.data`, set by `@glion/annotate-profile-datatypes`, and the tables in `file.data.profile`, set by `@glion/annotate-profile-context`. Both must run first. Without `file.data.profile`, the tree is returned unchanged.

## What it annotates

The plugin visits every field repetition, component, and subcomponent whose `data.kind` is `"primitive"` and whose `data.table` is set. The value is the node's first subcomponent; components a primitive datatype does not define are ignored. For example:

- PID-8 in v2.5 (IS): the field repetition.
- PID-5 in v2.6 (XPN): XPN.6, XPN.7, XPN.8, and XPN.11.
- LDP-10 (VH): VH.1 and VH.2.
- XCN.9 (HD) in PV1-7: the subcomponent HD.3.

### `node.data` (FieldRepetition, Component, Subcomponent)

```ts
declare module "@glion/ast" {
  interface FieldRepetitionData {
    tableValue?: TableValue;
  }
  interface ComponentData {
    tableValue?: TableValue;
  }
  interface SubcomponentData {
    tableValue?: TableValue;
  }
}

// The entry of the node's table that its value matches.
// Absent when the value is empty or not in the table.
interface TableValue {
  value: string; // as written in the message, e.g. "M"
  description: string; // from the table, e.g. "Male"
}
```

## Part of Glion

`@glion/annotate-profile-tables` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
