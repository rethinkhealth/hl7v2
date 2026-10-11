# @glion/lint-profile-withdrawn-fields

Lint rule that reports a value in a field HL7v2 has withdrawn.

## What it does

Flags each non-empty field whose optionality is `W` (withdrawn) in the HL7v2 profile for the message's version. A withdrawn field keeps its place in the segment, so the fields after it keep their sequences, but it must be empty. The rule reads profile context attached by `@glion/annotate-profile-context`. Segments without a known profile (for example Z-segments) are skipped.

## Install

```bash
npm install @glion/lint-profile-withdrawn-fields
```

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { parseHL7v2 } from "@glion/parser";
import hl7v2LintWithdrawnFields from "@glion/lint-profile-withdrawn-fields";
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
  .use(hl7v2LintWithdrawnFields)
  .run(parseHL7v2(message), file);

console.error(reporter([file]));
```

## API

### `unified().use(hl7v2LintWithdrawnFields[, severity])`

A `unified` lint rule plugin. `severity` is `"warn"` (the default), `"error"`, or `"off"`; `false` turns the rule off.

Reads `file.data.profile`. For each segment with a field definition, it reports every field whose profile has optionality `W` and that has a value. An empty field and the explicit null `""` are not reported. Each report carries the field's value in `actual`.

```ts
import type { Plugin } from "unified";
import type { Root } from "@glion/ast";

declare const hl7v2LintWithdrawnFields: Plugin<
  [("off" | "warn" | "error" | boolean)?],
  Root
>;
export default hl7v2LintWithdrawnFields;
```

## What it checks

A field marked `W` in the segment attribute table of the message's version must be empty. HL7v2 withdraws fields from v2.5 on, such as `DG1-2` (Diagnosis Coding Method) from v2.6 and `AL1-6` (Identification Date) from v2.7.

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
Field `AL1-6` (Identification Date) has a value; it is withdrawn in v2.7 and must be empty.
```

One message is reported per withdrawn field that has a value. The explicit null `""` is not a value: it tells the receiver to delete the field's value.

## Part of Glion

`@glion/lint-profile-withdrawn-fields` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
