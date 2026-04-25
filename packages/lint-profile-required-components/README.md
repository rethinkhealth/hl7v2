# @glion/lint-profile-required-components

Validate required components in composite datatype fields.

|                      |                                                     |
| -------------------- | --------------------------------------------------- |
| **Recommended**      | ❌                                                  |
| **Profile-aware**    | ✅ part of `@glion/preset-lint-profile-recommended` |
| **Default severity** | `warning`                                           |
| **Requires**         | `@glion/parser`, `@glion/annotate-profile-context`  |
| **Since**            | `@glion/lint-profile-required-components@0.6.0`     |

## What it does

Reads `file.data.profile` populated by `@glion/annotate-profile-context`. For each non-empty field whose datatype is composite and has at least one required component, the rule iterates `dtDef.requiredSequences` for every repetition and reports each component whose first subcomponent value is missing or empty. Empty fields, primitive datatypes, and segments without a known profile (for example Z-segments) are silently skipped — the empty-field case belongs to `@glion/lint-profile-required-fields`.

## Install

```bash
npm install @glion/lint-profile-required-components
```

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2Parser } from "@glion/parser";
import hl7v2LintRequiredComponents from "@glion/lint-profile-required-components";
import { unified } from "unified";
import { reporter } from "vfile-reporter";

const message = [
  "MSH|^~\\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^A01^ADT_A01|MSG00001|P|2.7.1",
  "PID|1||PATID1234^^^HOSP^MR||DOE^JANE||19800101|F",
].join("\r");

const file = await unified()
  .use(hl7v2Parser)
  .use(hl7v2AnnotateProfileContext)
  .use(hl7v2LintRequiredComponents)
  .process(message);

console.error(reporter([file]));
```

## API

### `unified().use(hl7v2LintRequiredComponents)`

A `unified` lint rule plugin. Takes no options. Visits each `field` node, resolves its datatype definition through `file.data.profile`, and emits one diagnostic per missing required component per repetition.

```ts
import type { Plugin } from "unified";
import type { Root } from "@glion/ast";

declare const hl7v2LintRequiredComponents: Plugin<[], Root>;
export default hl7v2LintRequiredComponents;
```

Messages use `ruleId: "required-components"` and `source: "hl7v2-lint"`.

## What it checks

Each required component on a composite field whose first subcomponent value is absent or empty is flagged. In v2.7.1 the `MSG` datatype on `MSH-9` (Message Type) requires the message code (`.1`), trigger event (`.2`), and message structure (`.3`) components.

### Valid

`MSH-9` carries all three required `MSG` components:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01^ADT_A01|MSG001|P|2.7.1
```

### Invalid

`MSH-9` is missing component 3 (Message Structure):

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01|MSG001|P|2.7.1
```

Reported message:

```
Required component MSH-9.3 (Message Structure) is missing or empty
```

The segment name, sequence, component number, and optional component name (parenthesised when the datatype profile provides one) are interpolated. The parenthesised name is omitted when the component profile does not carry one.

## Part of Glion

`@glion/lint-profile-required-components` is part of **[Glion]**, the application framework for HL7v2.
See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
