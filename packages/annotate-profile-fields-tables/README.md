# @glion/annotate-profile-fields-tables

Unified plugin to annotate HL7v2 coded fields with the value and description from the table of the message's version.

## What it does

Fields bound to an HL7v2 table (such as PID-8 `Administrative Sex`, bound to table `0001`) carry coded values that the table describes. This plugin looks up each coded value in the field's table, as printed in the HL7v2 version the message declares in MSH-12, and writes the matching table entry onto the component that holds the value. A code the message's version does not define is left unannotated, even when a later version defines it.

## Install

```bash
npm install @glion/annotate-profile-fields-tables
```

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import { hl7v2AnnotateProfileFieldsTables } from "@glion/annotate-profile-fields-tables";
import { hl7v2Parser } from "@glion/parser";
import { unified } from "unified";

const processor = unified()
  .use(hl7v2Parser)
  .use(hl7v2AnnotateProfileContext)
  .use(hl7v2AnnotateProfileFields)
  .use(hl7v2AnnotateProfileFieldsTables);

const file = await processor.process(
  "MSH|^~\\&|SENDER||RECEIVER||20241201||ADT^A01|MSG123|P|2.5\rPID|1||12345||Doe^John||19800101|M"
);

// PID-8 component.data.tableValue === { value: "M", description: "Male" }
```

## API

This package exports the named constant `hl7v2AnnotateProfileFieldsTables`. The default export is the plugin itself.

```ts
import type { Root } from "@glion/ast";
import type { Plugin } from "unified";

export const hl7v2AnnotateProfileFieldsTables: Plugin<[], Root, Root>;
```

The plugin reads the tables and datatypes in `file.data.profile`, set by `@glion/annotate-profile-context`, and the field's table (TBL#) and datatype in `field.data`, set by `@glion/annotate-profile-fields`. Both must run first. Without `file.data.profile`, the tree is returned unchanged.

## What it annotates

The plugin visits every `field` node with a table on `field.data.table`. In each repetition, the coded values are the first subcomponent of every datatype component that prints the same table, or of the first component when no component does. On PID-5 (XPN) in v2.6, which prints table `0200` on both the field and XPN.7 (Name Type Code), that is XPN.7. On LDP-10 (VH), it is VH.1 and VH.2. On PID-8 (IS or CWE), it is the first component.

### `node.data` (Component)

```ts
declare module "@glion/ast" {
  interface ComponentData {
    // The table entry this component's coded value matches.
    // Absent when the value is empty or not in the table.
    tableValue?: {
      value: string; // as written in the message, e.g. "M"
      description: string; // from the table, e.g. "Male"
    };
  }
}
```

## Part of Glion

`@glion/annotate-profile-fields-tables` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
