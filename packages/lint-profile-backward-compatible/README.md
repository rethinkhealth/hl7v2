# @glion/lint-profile-backward-compatible

Lint rule that reports a value in an element HL7v2 keeps only for backward compatibility.

## What it does

Flags each element with a value whose optionality is `B` (backward compatible) in the HL7v2 profile for the message's version: a field, a component, or a subcomponent. HL7v2 keeps such an element so older systems can still send it, and a newer one carries its data. The rule reads `optionality` from `node.data`, which `@glion/annotate-profile-fields` and `@glion/annotate-profile-datatypes` write, so they must run before it. Elements without a profile (for example in Z-segments) carry no optionality and are skipped. HL7v2 still allows a value in such an element, so `@glion/preset-lint-profile-recommended` reports it as a warning.

## Install

```bash
npm install @glion/lint-profile-backward-compatible
```

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileDatatypes } from "@glion/annotate-profile-datatypes";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import { parseHL7v2 } from "@glion/parser";
import hl7v2LintBackwardCompatible from "@glion/lint-profile-backward-compatible";
import { unified } from "unified";
import { VFile } from "vfile";
import { reporter } from "vfile-reporter";

const message = [
  "MSH|^~\\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^A01^ADT_A01|MSG00001|P|2.5.1",
  "DG1|1|I9|250.00",
].join("\r");

const file = new VFile();
await unified()
  .use(hl7v2AnnotateProfileContext)
  .use(hl7v2AnnotateProfileFields)
  .use(hl7v2AnnotateProfileDatatypes)
  .use(hl7v2LintBackwardCompatible)
  .run(parseHL7v2(message), file);

console.error(reporter([file]));
```

## API

### `unified().use(hl7v2LintBackwardCompatible[, severity])`

A `unified` lint rule plugin. `severity` is `"warn"` (the default), `"error"`, or `"off"`; `false` turns the rule off.

Visits every node and reports each one whose `data.optionality` is `B` and that has a value, naming it by its path, such as `PID-5.6`. An empty element and the explicit null `""` are not reported. Each report carries the element's value in `actual`. Reads `file.data.profile` only for the version.

```ts
import type { Plugin } from "unified";
import type { Root } from "@glion/ast";

declare const hl7v2LintBackwardCompatible: Plugin<
  [("off" | "warn" | "error" | boolean)?],
  Root
>;
export default hl7v2LintBackwardCompatible;
```

## What it checks

An element marked `B` in the segment attribute table or the component table of the message's version should be empty. In v2.5.1, the field `DG1-4` (Diagnosis Description) is backward compatible: `DG1-3` (Diagnosis Code) carries the diagnosis. In v2.6, the component XPN-6 (Degree) is backward compatible.

### Valid

`DG1-4` is empty in a v2.5.1 message:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^A01^ADT_A01|MSG00001|P|2.5.1
DG1|1|I9|250.00
```

### Invalid

`DG1-4` has a value in a v2.5.1 message:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^A01^ADT_A01|MSG00001|P|2.5.1
DG1|1|I9|250.00|DIABETES
```

Reported message:

```
`DG1-4` (Diagnosis Description) has a value; v2.5.1 keeps it only for backward compatibility.
```

One message is reported per backward-compatible element that has a value, in each repetition. The explicit null `""` is not a value: it tells the receiver to delete the element's value.

## Part of Glion

`@glion/lint-profile-backward-compatible` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
