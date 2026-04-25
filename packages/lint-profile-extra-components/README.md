# @glion/lint-profile-extra-components

Warn when a composite field contains more components than its datatype profile defines.

|                      |                                                     |
| -------------------- | --------------------------------------------------- |
| **Recommended**      | ❌                                                  |
| **Profile-aware**    | ✅ part of `@glion/preset-lint-profile-recommended` |
| **Default severity** | `warning`                                           |
| **Requires**         | `@glion/parser`, `@glion/annotate-profile-context`  |
| **Since**            | `@glion/lint-profile-extra-components@0.12.0`       |

## What it does

Reads `file.data.profile` populated by `@glion/annotate-profile-context`. For each non-empty field, it resolves the datatype definition: for primitive datatypes the maximum is 1 (the value itself); for composite datatypes it is the highest sequence key in `dtDef.componentsBySequence`. Each component at a position greater than that maximum produces one message per offending repetition. Empty fields, fields on segments without a known profile (for example Z-segments), and fields whose datatype definition is missing are silently skipped.

## Install

```bash
npm install @glion/lint-profile-extra-components
```

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2Parser } from "@glion/parser";
import hl7v2LintExtraComponents from "@glion/lint-profile-extra-components";
import { unified } from "unified";
import { reporter } from "vfile-reporter";

const message = [
  "MSH|^~\\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^A01^ADT_A01|MSG00001|P|2.7.1",
  "PID|1||PATID1234^^^HOSP^MR||DOE^JANE||19800101|F",
].join("\r");

const file = await unified()
  .use(hl7v2Parser)
  .use(hl7v2AnnotateProfileContext)
  .use(hl7v2LintExtraComponents)
  .process(message);

console.error(reporter([file]));
```

## API

### `unified().use(hl7v2LintExtraComponents)`

A `unified` lint rule plugin. Takes no options. Visits each `field` node, looks up its profile from `file.data.profile`, and reports one message per component past the datatype maximum in each repetition.

```ts
import type { Plugin } from "unified";
import type { Root } from "@glion/ast";

declare const hl7v2LintExtraComponents: Plugin<[], Root>;
export default hl7v2LintExtraComponents;
```

Messages use `ruleId: "extra-components"` and `source: "hl7v2-lint"`.

## What it checks

Each `^`-delimited component past the profile's defined range for the field's datatype is flagged. For primitives the maximum is 1; for composites it is the highest sequence number defined for the datatype at the message's HL7v2 version.

### Valid

`MSH-9` (datatype `MSG`) carries exactly the three components defined for v2.7.1:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01^ADT_A01|MSG001|P|2.7.1
```

### Invalid

`MSH-9` carries five components, two beyond the v2.7.1 `MSG` maximum of 3:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01^ADT_A01^EXTRA1^EXTRA2|MSG001|P|2.7.1
```

Reported message:

```
Component MSH-9.4 is beyond the defined components for MSG (max: 3 in v2.7.1)
```

The segment name, sequence, component number, datatype code, defined maximum, and HL7v2 version are interpolated from the offending node and the profile context. One message is emitted per extra component per repetition.

## Part of Glion

`@glion/lint-profile-extra-components` is part of **[Glion]**, the application framework for HL7v2.
See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
