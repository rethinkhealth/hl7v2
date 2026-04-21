# @glion/annotate-profile-fields-code-systems

Unified plugin to annotate HL7v2 field-level coded values with UTG code system metadata.

## What it does

Fields bound to HL7v2 tables (such as PID-8 `Administrative Sex` bound to table `0001`, or MSH-11.1 `Processing ID` bound to table `0103`) carry coded values that expand into human-readable displays and lifecycle statuses. This plugin resolves each field's table reference against the UTG code system registry in `@glion/profiles`, then writes the code system identity onto the field and the resolved value entry onto each repetition. It requires `@glion/annotate-profile-fields` to run first so that `field.data.table` is populated.

## Install

```bash
npm install @glion/annotate-profile-fields-code-systems
```

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import { hl7v2AnnotateProfileFieldsCodeSystems } from "@glion/annotate-profile-fields-code-systems";
import { hl7v2Parser } from "@glion/parser";
import { unified } from "unified";

const processor = unified()
  .use(hl7v2Parser)
  .use(hl7v2AnnotateProfileContext)
  .use(hl7v2AnnotateProfileFields)
  .use(hl7v2AnnotateProfileFieldsCodeSystems);

const file = await processor.process(
  "MSH|^~\\&|SENDER||RECEIVER||20241201||ADT^A01|MSG123|P|2.5\rPID|1||12345||Doe^John||19800101|M"
);

// PID-8 field.data.codeSystem === { id: "v2-0001", name: "AdministrativeSex", title: "Administrative Sex" }
// PID-8 repetition.data.code   === { value: "M", display: "Male", status: "A" }
```

## API

This package exports the named constant `hl7v2AnnotateProfileFieldsCodeSystems`. The default export is the plugin itself.

```ts
import type { Root } from "@glion/ast";
import type { Plugin } from "unified";

export const hl7v2AnnotateProfileFieldsCodeSystems: Plugin<[], Root, Root>;
```

The plugin is async. Code system loads run in parallel; failures for unknown code systems are silent, while other errors attach a `VFile` message with source `hl7v2-annotate-profile-fields-code-systems`.

## What it annotates

This plugin visits coded `field` nodes (fields with a table reference on `field.data.table`) and writes two pieces of metadata: a code system identity on the field itself (shared across all repetitions) and a resolved code entry on each repetition. Per the HL7v2 spec, when a coded field uses a composite datatype (CWE or CNE) the table binding constrains CWE.1 — the first subcomponent of the first component — which is the value this plugin reads.

### `node.data` (Field, FieldRepetition)

After this plugin runs, the augmented interfaces are:

```ts
declare module "@glion/ast" {
  interface FieldData {
    // Code system identity for the field's table reference.
    // Present only when the table resolves in the UTG registry.
    codeSystem?: {
      id: string; // e.g. "v2-0001" (derived from "HL70001")
      name: string; // e.g. "AdministrativeSex"
      title: string; // e.g. "Administrative Sex"
    };
  }

  interface FieldRepetitionData {
    // Resolved code entry for this repetition's primary value.
    // Present only when the repetition's CWE.1 value matches a code.
    code?: {
      value: string; // as written in the message, e.g. "M"
      display: string; // e.g. "Male"
      status: string; // UTG lifecycle status, e.g. "A" (active)
    };
  }
}
```

Table references are converted from the HL7v2 form (`HL70001`) to the UTG form (`v2-0001`) before lookup. Fields whose table does not resolve in the UTG registry are left untouched, and repetitions whose primary value does not match any code in the registry are left without a `code` entry.

## Part of Glion

`@glion/annotate-profile-fields-code-systems` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
