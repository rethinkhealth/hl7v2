# @glion/lint-profile-field-repetition

Flag non-repeatable fields with multiple repetitions.

|                      |                                                     |
| -------------------- | --------------------------------------------------- |
| **Recommended**      | ❌                                                  |
| **Profile-aware**    | ✅ part of `@glion/preset-lint-profile-recommended` |
| **Default severity** | `warning`                                           |
| **Requires**         | `@glion/parser`, `@glion/annotate-profile-context`  |
| **Since**            | `@glion/lint-profile-field-repetition@0.6.0`        |

## What it does

Reads `file.data.profile` populated by `@glion/annotate-profile-context`. For each field under a segment with a known profile, it looks up the field profile by sequence; when `repeatable: false` and the AST contains more than one repetition, the rule emits one message for that field. A single repetition is always valid regardless of the `repeatable` flag. Segments without a known profile (for example Z-segments) are silently skipped.

## Install

```bash
npm install @glion/lint-profile-field-repetition
```

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2Parser } from "@glion/parser";
import hl7v2LintFieldRepetition from "@glion/lint-profile-field-repetition";
import { unified } from "unified";
import { reporter } from "vfile-reporter";

const message = [
  "MSH|^~\\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^A01^ADT_A01|MSG00001|P|2.5",
  "PID|1||PATID1234^^^HOSP^MR||DOE^JANE||19800101|F",
].join("\r");

const file = await unified()
  .use(hl7v2Parser)
  .use(hl7v2AnnotateProfileContext)
  .use(hl7v2LintFieldRepetition)
  .process(message);

console.error(reporter([file]));
```

## API

### `unified().use(hl7v2LintFieldRepetition)`

A `unified` lint rule plugin. Takes no options. Visits each `segment` node, then each `field` node within it; when the field profile sets `repeatable: false` and the field has 2 or more repetitions, the rule emits one diagnostic for that field.

```ts
import type { Plugin } from "unified";
import type { Root } from "@glion/ast";

declare const hl7v2LintFieldRepetition: Plugin<[], Root>;
export default hl7v2LintFieldRepetition;
```

Messages use `ruleId: "field-repetition"` and `source: "hl7v2-lint"`.

## What it checks

Each field with two or more `~`-delimited repetitions when the profile marks it as non-repeatable is flagged. In v2.5, `PID-1` (Set ID — PID) is non-repeatable.

### Valid

`PID-1` carries a single value:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01^ADT_A01|MSG001|P|2.5
PID|1
```

### Invalid

`PID-1` carries two `~`-separated values, violating the v2.5 profile for that field:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01^ADT_A01|MSG001|P|2.5
PID|1~2
```

Reported message:

```
Field PID-1 (Set ID - PID) is not repeatable but has 2 repetitions
```

The segment name, sequence, optional profile name (parenthesised when present), and repetition count are interpolated. The parenthesised name is omitted when the field profile does not provide one.

## Part of Glion

`@glion/lint-profile-field-repetition` is part of **[Glion]**, the application framework for HL7v2.
See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
