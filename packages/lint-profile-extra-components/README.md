# @glion/lint-profile-extra-components

Lint rule to warn when a composite field contains more components than its datatype profile defines.

## What it does

Flags a component beyond those its field's datatype defines in the message's version. A primitive datatype defines component 1 only. Empty fields, fields on unknown segments, and fields with no datatype are skipped. It needs the plugins `@glion/annotate-profile-context` and `@glion/annotate-profile-fields` to run before it; `@glion/preset-lint-profile-recommended` includes them.

## Install

```bash
npm install @glion/lint-profile-extra-components
```

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import { hl7v2Parser } from "@glion/parser";
import hl7v2LintExtraComponents from "@glion/lint-profile-extra-components";
import { unified } from "unified";
import { reporter } from "vfile-reporter";

const message = [
  "MSH|^~\\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^A01^ADT_A01|MSG00001|P|2.5",
  "PID|1||PATID1234^^^HOSP^MR||DOE^JANE||19800101|F",
].join("\r");

const file = await unified()
  .use(hl7v2Parser)
  .use(hl7v2AnnotateProfileContext)
  .use(hl7v2AnnotateProfileFields)
  .use(hl7v2LintExtraComponents)
  .process(message);

console.error(reporter([file]));
```

## API

### `unified().use(hl7v2LintExtraComponents)`

A `unified` lint rule plugin. Takes no options. Reports one message for each component beyond its datatype's last component, in each repetition.

```ts
import type { Plugin } from "unified";
import type { Root } from "@glion/ast";

declare const hl7v2LintExtraComponents: Plugin<[], Root>;
export default hl7v2LintExtraComponents;
```

## What it checks

This rule flags `^`-delimited components past the profile's defined range for a datatype. `PID-8` (Administrative Sex) is a primitive field in v2.5, so it allows exactly one component.

### Valid

`PID-8` has a single component (`F`), which matches the primitive limit:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^A01^ADT_A01|MSG00001|P|2.5
PID|1||PATID1234^^^HOSP^MR||DOE^JANE||19800101|F
```

### Invalid

`PID-8` has two components (`F^EXTRA`), which exceeds the v2.5 primitive limit of 1:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^A01^ADT_A01|MSG00001|P|2.5
PID|1||PATID1234^^^HOSP^MR||DOE^JANE||19800101|F^EXTRA
```

Reported message:

```
Component `PID-8.2` is present; datatype `IS` in HL7 v2.5 does not define it.
```

The datatype code (for example `IS`, `CX`, `XPN`) comes from the field's profile. A primitive datatype defines only component 1. A `CX` field in v2.5 defines 10 components, so an 11th is reported as:

```
Component `PID-3.11` is present; datatype `CX` in HL7 v2.5 does not define it.
```

## Part of Glion

`@glion/lint-profile-extra-components` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
