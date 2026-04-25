# @glion/lint-profile-required-fields

Validate required fields per HL7v2 profile.

|                      |                                                     |
| -------------------- | --------------------------------------------------- |
| **Recommended**      | ❌                                                  |
| **Profile-aware**    | ✅ part of `@glion/preset-lint-profile-recommended` |
| **Default severity** | `warning`                                           |
| **Requires**         | `@glion/parser`, `@glion/annotate-profile-context`  |
| **Since**            | `@glion/lint-profile-required-fields@0.6.0`         |

## What it does

Reads `file.data.profile` populated by `@glion/annotate-profile-context`. For each segment with a known profile, the rule iterates `fieldDef.requiredSequences` and reports one message per required field that is missing from the segment or empty in the AST. Segments without a known profile (for example Z-segments like `ZPD`) are silently skipped.

## Install

```bash
npm install @glion/lint-profile-required-fields
```

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2Parser } from "@glion/parser";
import hl7v2LintRequiredFields from "@glion/lint-profile-required-fields";
import { unified } from "unified";
import { reporter } from "vfile-reporter";

const message = [
  "MSH|^~\\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^A01^ADT_A01|MSG00001|P|2.5",
  "PID|1||PATID1234^^^HOSP^MR||DOE^JANE||19800101|F",
].join("\r");

const file = await unified()
  .use(hl7v2Parser)
  .use(hl7v2AnnotateProfileContext)
  .use(hl7v2LintRequiredFields)
  .process(message);

console.error(reporter([file]));
```

## API

### `unified().use(hl7v2LintRequiredFields)`

A `unified` lint rule plugin. Takes no options. Visits each `segment` node, looks up its profile from `file.data.profile`, and emits one diagnostic per required field whose corresponding 1-based position is absent or empty.

```ts
import type { Plugin } from "unified";
import type { Root } from "@glion/ast";

declare const hl7v2LintRequiredFields: Plugin<[], Root>;
export default hl7v2LintRequiredFields;
```

Messages use `ruleId: "required-fields"` and `source: "hl7v2-lint"`.

## What it checks

Each field declared `required: true` in the HL7v2 profile for the message's version is flagged when missing or empty on the corresponding segment. In v2.5, `PID-3` (Patient Identifier List) is required.

### Valid

`PID-3` and `PID-5` are required in v2.5 and both are populated:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01^ADT_A01|MSG001|P|2.5
PID|1||12345||Doe^John
```

### Invalid

`PID-3` is empty, violating the v2.5 profile for the `PID` segment:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01^ADT_A01|MSG001|P|2.5
PID|1||||Doe
```

Reported message:

```
Required field PID-3 (Patient Identifier List) is missing or empty
```

The segment name, sequence, and optional profile name (parenthesised when present) are interpolated. The parenthesised name is omitted when the field profile does not provide one. Segments shorter than the highest required sequence produce one message per missing required field.

## Part of Glion

`@glion/lint-profile-required-fields` is part of **[Glion]**, the application framework for HL7v2.
See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
