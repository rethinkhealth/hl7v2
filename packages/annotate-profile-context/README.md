# @glion/annotate-profile-context

> Unified plugin to centralize HL7v2 profile loading onto file.data.

## What it does

Downstream profile-aware plugins (segment annotators, field annotators,
datatype annotators, code-system annotators, profile lints) all need the same
slice of HL7v2 profile data for the version declared in MSH-12.1. This plugin
loads that data once — field definitions, segment titles, datatype
definitions (with component and subcomponent cascade), and table definitions
— and stores it as a single `ProfileContext` on `file.data.profile`. The
load is idempotent and silently skips unknown profiles.

## Install

```bash
pnpm add @glion/annotate-profile-context
```

> Using npm? `npm install @glion/annotate-profile-context`

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2Parser } from "@glion/parser";
import { unified } from "unified";

const processor = unified().use(hl7v2Parser).use(hl7v2AnnotateProfileContext);

const file = await processor.process(
  "MSH|^~\\&|SENDER||RECEIVER||20241201||ADT^A01|MSG123|P|2.5\rPID|1||12345"
);

// file.data.profile.version       === "2.5"
// file.data.profile.fields        === Map<"MSH" | "PID", FieldDefinition>
// file.data.profile.datatypes     === Map<"ST" | "CX" | "XPN" | ..., DatatypeDefinition>
// file.data.profile.tables        === Map<"0001" | "0003" | ..., TableDefinition>
// file.data.profile.segments.byId === Map<"MSH" | "PID" | ..., { title: string }>
```

## API

This package exports the named constant `hl7v2AnnotateProfileContext` and
the `ProfileContext` type. The default export is the plugin itself.

```ts
import type { Root } from "@glion/ast";
import type {
  DatatypeDefinition,
  FieldDefinition,
  SegmentDefinition,
  TableDefinition,
} from "@glion/profiles";
import type { Plugin } from "unified";

export const hl7v2AnnotateProfileContext: Plugin<[], Root, Root>;

export interface ProfileContext {
  version: string;
  fields: ReadonlyMap<string, FieldDefinition>;
  datatypes: ReadonlyMap<string, DatatypeDefinition>;
  tables: ReadonlyMap<string, TableDefinition>;
  segments: SegmentDefinition;
}
```

The plugin is async: it awaits all profile loads in parallel.

## What it annotates

This plugin writes to `file.data`, not to AST nodes. It populates one entry,
`file.data.profile`, with the resolved `ProfileContext` for the HL7v2 version
declared in MSH-12.1.

### `file.data.profile`

After this plugin runs, the vfile carries:

```ts
// Augmented on VFile's DataMap:
declare module "vfile" {
  interface DataMap {
    profile?: ProfileContext | undefined;
  }
}

interface ProfileContext {
  // HL7v2 version from MSH-12.1 (e.g. "2.5", "2.5.1", "2.8")
  version: string;

  // Field definitions indexed by segment name
  fields: ReadonlyMap<string, FieldDefinition>;

  // Datatype definitions indexed by datatype id (e.g. "ST", "CWE", "XPN")
  datatypes: ReadonlyMap<string, DatatypeDefinition>;

  // Table definitions indexed by normalized table id (e.g. "0001")
  // Note: field profiles reference "HL70001"; this map uses "0001"
  tables: ReadonlyMap<string, TableDefinition>;

  // Segment titles indexed by segment id (e.g. "MSH", "PID", "OBX")
  segments: SegmentDefinition;
}
```

Loading is idempotent: if `file.data.profile` is already populated, the
plugin returns immediately. If MSH-12.1 is missing, it returns without
setting the key. Datatype loading cascades through composite datatypes up to
three levels deep so every component and subcomponent datatype referenced
anywhere in the field definitions is resolved in advance.

## Part of Glion

`@glion/annotate-profile-context` is part of **[Glion]**, the application framework for HL7v2.
See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
