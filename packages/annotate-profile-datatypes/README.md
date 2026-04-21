# @glion/annotate-profile-datatypes

> Unified plugin to annotate HL7v2 field repetition, component, and subcomponent nodes with datatype profile metadata.

## What it does

HL7v2 fields hold either a primitive value (like `ST` or `DT`) or a composite
structure built from a datatype like `XPN` or `CWE` whose components and
subcomponents each have their own datatype. This plugin walks each field
repetition, component, and subcomponent, resolves the corresponding datatype
from the profile context, and writes that metadata onto `node.data` using a
stop-at-primitive cascade — annotation stops at the node where the primitive
value actually lives. It requires `@glion/annotate-profile-context` and
`@glion/annotate-profile-fields` to run first.

## Install

```bash
pnpm add @glion/annotate-profile-datatypes
```

> Using npm? `npm install @glion/annotate-profile-datatypes`

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileDatatypes } from "@glion/annotate-profile-datatypes";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import { hl7v2Parser } from "@glion/parser";
import { unified } from "unified";

const processor = unified()
  .use(hl7v2Parser)
  .use(hl7v2AnnotateProfileContext)
  .use(hl7v2AnnotateProfileFields)
  .use(hl7v2AnnotateProfileDatatypes);

const file = await processor.process(
  "MSH|^~\\&|SENDER||RECEIVER||20241201||ADT^A01|MSG123|P|2.5\rPID|1||12345||Doe^John"
);

// PID-5 field-repetition.data === { datatypeId: "XPN", kind: "composite", title: "Extended Person Name" }
// PID-5.1 component.data        === { id: "XPN.1", name: "Family Name", required: false, datatypeId: "FN", kind: "composite", title: "Family Name" }
// PID-5.1.1 subcomponent.data   === { id: "FN.1", name: "Surname", required: true, datatypeId: "ST", kind: "primitive", title: "String Data" }
```

## API

This package exports the named constant `hl7v2AnnotateProfileDatatypes`. The
default export is the plugin itself.

```ts
import type { Root } from "@glion/ast";
import type { Plugin } from "unified";

export const hl7v2AnnotateProfileDatatypes: Plugin<[], Root, Root>;
```

The plugin reads `file.data.profile` and `field.data.datatype` from
upstream annotators. It writes to `FieldRepetitionData`, `ComponentData`, and
`SubcomponentData` (all declared on the `@glion/ast` module augmentation).

## What it annotates

This plugin visits three node types in order — `field-repetition`,
`component`, and `subcomponent` — and writes datatype metadata to
`node.data`. The cascade follows the composite structure: primitive fields
stop at the repetition; composite fields with primitive components stop at
the component; fully nested composites continue to the subcomponent.

`kind: "primitive"` means the value lives on that node. `kind: "composite"`
means inspect the children. Nodes on ancestor paths of the primitive carry
no annotation from this plugin.

### `node.data` (FieldRepetition, Component, Subcomponent)

After this plugin runs, the augmented interfaces are:

```ts
declare module "@glion/ast" {
  interface FieldRepetitionData {
    datatypeId?: string; // e.g. "ST", "CWE", "XPN"
    kind?: "primitive" | "composite";
    title?: string; // e.g. "String Data", "Coded with Exceptions"
  }

  interface ComponentData {
    id?: string; // "<datatypeId>.<sequence>", e.g. "CWE.1", "XPN.2"
    name?: string; // e.g. "Family Name"
    required?: boolean;
    datatypeId?: string; // e.g. "ST", "ID", "FN"
    maxLength?: number;
    kind?: "primitive" | "composite";
    title?: string;
  }

  interface SubcomponentData {
    id?: string; // "<datatypeId>.<sequence>", e.g. "FN.1", "HD.2"
    name?: string;
    required?: boolean;
    datatypeId?: string;
    kind?: "primitive" | "composite";
    title?: string;
  }
}
```

Annotation is skipped for nodes whose datatype is not known to the profile
(for example Z-segments or custom fields). The field-level `datatype`
property is read from `field.data.datatype`, which is populated by
`@glion/annotate-profile-fields`.

## Part of Glion

`@glion/annotate-profile-datatypes` is part of **[Glion]**, the application framework for HL7v2.
See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
