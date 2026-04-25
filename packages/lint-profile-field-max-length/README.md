# @glion/lint-profile-field-max-length

Validate field value lengths against HL7v2 profile `maxLength`.

|                      |                                                     |
| -------------------- | --------------------------------------------------- |
| **Recommended**      | ❌                                                  |
| **Profile-aware**    | ✅ part of `@glion/preset-lint-profile-recommended` |
| **Default severity** | `warning`                                           |
| **Requires**         | `@glion/parser`, `@glion/annotate-profile-context`  |
| **Since**            | `@glion/lint-profile-field-max-length@0.6.0`        |

## What it does

Reads `file.data.profile` populated by `@glion/annotate-profile-context`. For each non-empty field whose profile declares a `maxLength`, the rule computes each repetition's content length with `getLength()` from `@glion/utils` (a recursive sum of subcomponent string lengths, so delimiters are not counted) and reports the repetitions over the limit. Fields without `maxLength` in the profile, empty fields, and segments without a known profile (for example Z-segments) are silently skipped.

## Install

```bash
npm install @glion/lint-profile-field-max-length
```

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2Parser } from "@glion/parser";
import hl7v2LintFieldMaxLength from "@glion/lint-profile-field-max-length";
import { unified } from "unified";
import { reporter } from "vfile-reporter";

const message = [
  "MSH|^~\\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^A01^ADT_A01|MSG00001|P|2.5",
  "PID|1||PATID1234^^^HOSP^MR||DOE^JANE||19800101|F",
].join("\r");

const file = await unified()
  .use(hl7v2Parser)
  .use(hl7v2AnnotateProfileContext)
  .use(hl7v2LintFieldMaxLength)
  .process(message);

console.error(reporter([file]));
```

## API

### `unified().use(hl7v2LintFieldMaxLength)`

A `unified` lint rule plugin. Takes no options. Visits each `segment` node, then each `field` node within it; for fields whose profile defines `maxLength`, it compares `getLength(repetition)` against the limit for every repetition.

```ts
import type { Plugin } from "unified";
import type { Root } from "@glion/ast";

declare const hl7v2LintFieldMaxLength: Plugin<[], Root>;
export default hl7v2LintFieldMaxLength;
```

Messages use `ruleId: "field-max-length"` and `source: "hl7v2-lint"`.

## What it checks

Each repetition whose measured content length is greater than the `maxLength` declared for its field in the HL7v2 profile is flagged. In v2.5, `PID-1` (Set ID — PID) has `maxLength: 4`.

### Valid

`PID-1` carries `1234`, exactly the v2.5 limit of 4 characters:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01^ADT_A01|MSG001|P|2.5
PID|1234
```

### Invalid

`PID-1` is 5 characters long, exceeding the v2.5 limit of 4:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01^ADT_A01|MSG001|P|2.5
PID|12345
```

Reported message:

```
Field PID-1 exceeds max length of 4 (actual: 5)
```

The segment name, sequence, declared maximum, and measured length are interpolated. One message is emitted per offending repetition. Delimiters are not included in the measured length — a composite value like `DOE^JANE` counts as 7 characters.

## Part of Glion

`@glion/lint-profile-field-max-length` is part of **[Glion]**, the application framework for HL7v2.
See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
