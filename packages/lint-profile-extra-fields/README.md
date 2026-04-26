# @glion/lint-profile-extra-fields

Warn when a segment contains fields beyond the maximum sequence defined in its profile.

|                      |                                                     |
| -------------------- | --------------------------------------------------- |
| **Recommended**      | ❌                                                  |
| **Profile-aware**    | ✅ part of `@glion/preset-lint-profile-recommended` |
| **Default severity** | `warning`                                           |
| **Requires**         | `@glion/parser`, `@glion/annotate-profile-context`  |
| **Since**            | `@glion/lint-profile-extra-fields@0.12.0`           |

## What it does

Reads `file.data.profile` populated by `@glion/annotate-profile-context`. For each segment with a known profile, it computes the maximum sequence number declared in `fieldDef.bySequence` and reports each field whose sequence exceeds that maximum. Segments without a known profile (for example Z-segments) are silently skipped.

## Install

```bash
npm install @glion/lint-profile-extra-fields
```

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2Parser } from "@glion/parser";
import hl7v2LintExtraFields from "@glion/lint-profile-extra-fields";
import { unified } from "unified";
import { reporter } from "vfile-reporter";

const message = [
  "MSH|^~\\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^A01^ADT_A01|MSG00001|P|2.5.1",
  "PID|1||PATID1234^^^HOSP^MR||DOE^JANE||19800101|F",
].join("\r");

const file = await unified()
  .use(hl7v2Parser)
  .use(hl7v2AnnotateProfileContext)
  .use(hl7v2LintExtraFields)
  .process(message);

console.error(reporter([file]));
```

## API

### `unified().use(hl7v2LintExtraFields)`

A `unified` lint rule plugin. Takes no options. Visits each `segment` node, looks up its profile from `file.data.profile`, and reports one message per field whose 1-based sequence number is greater than the highest defined sequence.

```ts
import type { Plugin } from "unified";
import type { Root } from "@glion/ast";

declare const hl7v2LintExtraFields: Plugin<[], Root>;
export default hl7v2LintExtraFields;
```

Messages use `ruleId: "extra-fields"` and `source: "hl7v2-lint"`.

## What it checks

Each field whose sequence number exceeds the highest sequence defined for its segment in the HL7v2 profile is flagged. In v2.5.1, `PID` defines fields up to `PID-39`, so any `PID-40` or higher is reported.

### Valid

`PID` stops at `PID-3` and all fields are within the v2.5.1 definition:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01^ADT_A01|MSG001|P|2.5.1
PID|1||ID123
```

### Invalid

`PID` carries fields at sequences 40 and 41, two past the v2.5.1 maximum of `PID-39`:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01^ADT_A01|MSG001|P|2.5.1
PID|val1|val2|val3|val4|val5|val6|val7|val8|val9|val10|val11|val12|val13|val14|val15|val16|val17|val18|val19|val20|val21|val22|val23|val24|val25|val26|val27|val28|val29|val30|val31|val32|val33|val34|val35|val36|val37|val38|val39|val40|val41
```

Reported message:

```
Field PID-40 is beyond the defined fields for PID (max: 39 in v2.5.1)
```

The segment name, offending sequence, defined maximum, and HL7v2 version are interpolated. One message is emitted per extra field.

## Part of Glion

`@glion/lint-profile-extra-fields` is part of **[Glion]**, the application framework for HL7v2.
See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
