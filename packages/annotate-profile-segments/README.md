# @glion/annotate-profile-segments

> Unified plugin to annotate HL7v2 segment nodes with profile metadata.

## What it does

Segments in a parsed HL7v2 tree carry only their three-character name (`MSH`,
`PID`, `OBX`, `OBR`). This plugin looks each segment up in the HL7v2
specification profile for the message's version and writes the official
segment title — for example `Message Header` for MSH or `Patient
Identification` for PID — onto `segment.data.title`. It reads the preloaded
profile from `file.data.profile`, so it requires
`@glion/annotate-profile-context` to run first.

## Install

```bash
pnpm add @glion/annotate-profile-segments
```

> Using npm? `npm install @glion/annotate-profile-segments`

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileSegments } from "@glion/annotate-profile-segments";
import { hl7v2Parser } from "@glion/parser";
import { unified } from "unified";

const processor = unified()
  .use(hl7v2Parser)
  .use(hl7v2AnnotateProfileContext)
  .use(hl7v2AnnotateProfileSegments);

const file = await processor.process(
  "MSH|^~\\&|SENDER||RECEIVER||20241201||ADT^A01|MSG123|P|2.5\rPID|1||12345"
);

// MSH segment.data.title === "Message Header"
// PID segment.data.title === "Patient Identification"
```

## API

This package exports the named constant `hl7v2AnnotateProfileSegments`. The
default export is the plugin itself.

```ts
import type { Root } from "@glion/ast";
import type { Plugin } from "unified";

export const hl7v2AnnotateProfileSegments: Plugin<[], Root, Root>;
```

The plugin reads `file.data.profile.segments` (populated by
`@glion/annotate-profile-context`) and writes to `SegmentData` on each
matching segment.

## What it annotates

This plugin visits every `segment` node, looks up the segment profile by
three-character name, and writes the human-readable title onto
`segment.data.title`. Segments with no matching profile — Z-segments or
segments from unsupported versions — are left untouched.

### `segment.data`

After this plugin runs, the augmented interface is:

```ts
declare module "@glion/ast" {
  interface SegmentData {
    // Human-readable segment title from the HL7v2 specification.
    // Examples: "Message Header" (MSH), "Patient Identification" (PID),
    // "Observation/Result" (OBX), "Observation Request" (OBR).
    title?: string;
  }
}
```

Lookup uses `profile.segments.byId.get(node.name)` where `profile` is the
`ProfileContext` attached by `@glion/annotate-profile-context`. If
`file.data.profile` is missing entirely, the plugin returns without writing
anything.

## Part of Glion

`@glion/annotate-profile-segments` is part of **[Glion]**, the application framework for HL7v2.
See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
