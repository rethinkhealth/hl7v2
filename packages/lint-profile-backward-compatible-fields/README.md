# @glion/lint-profile-backward-compatible-fields

Lint rule that reports a value in a field HL7v2 keeps only for backward compatibility.

## What it does

Flags each non-empty field whose optionality is `B` (backward compatible) in the HL7v2 profile for the message's version. HL7v2 keeps such a field so older systems can still send it, and a newer field or segment carries its data. The rule reads profile context attached by `@glion/annotate-profile-context`. Segments without a known profile (for example Z-segments) are skipped. HL7v2 still allows a value in such a field, so `@glion/preset-lint-profile-recommended` does not include this rule.

## Install

```bash
npm install @glion/lint-profile-backward-compatible-fields
```

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { parseHL7v2 } from "@glion/parser";
import hl7v2LintBackwardCompatibleFields from "@glion/lint-profile-backward-compatible-fields";
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
  .use(hl7v2LintBackwardCompatibleFields)
  .run(parseHL7v2(message), file);

console.error(reporter([file]));
```

## API

### `unified().use(hl7v2LintBackwardCompatibleFields[, severity])`

A `unified` lint rule plugin. `severity` is `"warn"` (the default), `"error"`, or `"off"`; `false` turns the rule off.

Reads `file.data.profile`. For each segment with a field definition, it reports every field whose profile has optionality `B` and that has a value. An empty field and the explicit null `""` are not reported. Each report carries the field's value in `actual`.

```ts
import type { Plugin } from "unified";
import type { Root } from "@glion/ast";

declare const hl7v2LintBackwardCompatibleFields: Plugin<
  [("off" | "warn" | "error" | boolean)?],
  Root
>;
export default hl7v2LintBackwardCompatibleFields;
```

## What it checks

A field marked `B` in the segment attribute table of the message's version should be empty. In v2.5.1, `DG1-4` (Diagnosis Description) is backward compatible: `DG1-3` (Diagnosis Code) carries the diagnosis.

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
Field `DG1-4` (Diagnosis Description) has a value; v2.5.1 keeps it only for backward compatibility.
```

One message is reported per backward-compatible field that has a value. The explicit null `""` is not a value: it tells the receiver to delete the field's value.

## Part of Glion

`@glion/lint-profile-backward-compatible-fields` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
