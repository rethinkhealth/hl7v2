# @glion/lint-profile-withdrawn

Lint rule that reports a value in an element HL7v2 has withdrawn.

## What it does

Flags each element with a value whose optionality is `W` (withdrawn) in the HL7v2 profile for the message's version: a field, a component, or a subcomponent. A withdrawn element keeps its place, so the elements after it keep their sequences, but it must be empty. The rule reads `optionality` from `node.data`, which `@glion/annotate-profile-fields` and `@glion/annotate-profile-datatypes` write, so they must run before it. Elements without a profile (for example in Z-segments) carry no optionality and are skipped.

## Install

```bash
npm install @glion/lint-profile-withdrawn
```

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileDatatypes } from "@glion/annotate-profile-datatypes";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import { parseHL7v2 } from "@glion/parser";
import hl7v2LintWithdrawn from "@glion/lint-profile-withdrawn";
import { unified } from "unified";
import { VFile } from "vfile";
import { reporter } from "vfile-reporter";

const message = [
  "MSH|^~\\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^A01^ADT_A01|MSG00001|P|2.7",
  "AL1|1||PENICILLIN",
].join("\r");

const file = new VFile();
await unified()
  .use(hl7v2AnnotateProfileContext)
  .use(hl7v2AnnotateProfileFields)
  .use(hl7v2AnnotateProfileDatatypes)
  .use(hl7v2LintWithdrawn)
  .run(parseHL7v2(message), file);

console.error(reporter([file]));
```

## API

### `unified().use(hl7v2LintWithdrawn[, severity])`

A `unified` lint rule plugin. `severity` is `"warn"` (the default), `"error"`, or `"off"`; `false` turns the rule off.

Visits every node and reports each one whose `data.optionality` is `W` and that has a value, naming it by its path, such as `PID-5.6`. An empty element and the explicit null `""` are not reported. Each report carries the element's value in `actual`. Reads `file.data.profile` only for the version.

```ts
import type { Plugin } from "unified";
import type { Root } from "@glion/ast";

declare const hl7v2LintWithdrawn: Plugin<
  [("off" | "warn" | "error" | boolean)?],
  Root
>;
export default hl7v2LintWithdrawn;
```

## What it checks

An element marked `W` in the segment attribute table or the component table of the message's version must be empty. HL7v2 withdraws elements from v2.5 on: fields such as `DG1-2` (Diagnosis Coding Method) from v2.6 and `AL1-6` (Identification Date) from v2.7, and components such as XPN-6 (Degree) from v2.7.

### Valid

`AL1-6` is empty in a v2.7 message:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^A01^ADT_A01|MSG00001|P|2.7
AL1|1||PENICILLIN
```

### Invalid

`AL1-6` has a value in a v2.7 message:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^A01^ADT_A01|MSG00001|P|2.7
AL1|1||PENICILLIN|||20240101
```

Reported message:

```
`AL1-6` (Identification Date) has a value; it is withdrawn in v2.7 and must be empty.
```

One message is reported per withdrawn element that has a value, in each repetition. The explicit null `""` is not a value: it tells the receiver to delete the element's value.

## Part of Glion

`@glion/lint-profile-withdrawn` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
