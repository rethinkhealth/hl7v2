# @glion/lint-profile-required-components

Lint rule to validate required components in composite datatype fields.

## What it does

Flags composite fields whose required components (optionality `R` in the datatype profile for the message's version) are missing or empty in any repetition. Components marked `RE`, `C`, `B`, or `W` are not checked, and before v2.5 the standard records no component optionality, so no component is required. The rule reads each field's `id` and `datatype` from `field.data`, so `@glion/annotate-profile-context` and `@glion/annotate-profile-fields` must run before it, and checks the required components on every repetition. Empty fields, primitive datatypes, and fields of segments without a known profile are skipped.

## Install

```bash
npm install @glion/lint-profile-required-components
```

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import { hl7v2Parser } from "@glion/parser";
import hl7v2LintRequiredComponents from "@glion/lint-profile-required-components";
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
  .use(hl7v2LintRequiredComponents)
  .process(message);

console.error(reporter([file]));
```

## API

### `unified().use(hl7v2LintRequiredComponents)`

A `unified` lint rule plugin. Takes no options.

Reads `id` and `datatype` from `field.data` and the datatype's required components from `file.data.profile`. For every repetition of a non-empty field, reports each required component that is not present or is empty.

```ts
import type { Plugin } from "unified";
import type { Root } from "@glion/ast";

declare const hl7v2LintRequiredComponents: Plugin<[], Root>;
export default hl7v2LintRequiredComponents;
```

## What it checks

This rule flags missing required components on composite fields. The classic case is `MSH-9` (Message Type), where the `MSG` datatype requires the message code (`.1`) and trigger event (`.2`) components.

### Valid

`MSH-9` carries message code, trigger event, and message structure:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^A01^ADT_A01|MSG00001|P|2.5
PID|1||PATID1234^^^HOSP^MR||DOE^JANE||19800101|F
```

### Invalid

`MSH-9.2` (Trigger Event) is empty and `MSH-9.3` (Message Structure) is not present; v2.5 requires both:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^|MSG00001|P|2.5
PID|1||PATID1234^^^HOSP^MR||DOE^JANE||19800101|F
```

Reported messages:

```
Component `MSH-9.2` (Trigger Event) is empty; it is required.
Component `MSH-9.3` (Message Structure) is not present; it is required.
```

One message is reported per required component per repetition.

## Part of Glion

`@glion/lint-profile-required-components` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
