# @glion/lint-profile-field-repetition

Lint rule that flags fields with more repetitions than HL7v2 allows.

## What it does

Flags a field whose number of repetitions (delimited by `~`) is greater than its RP/# column in the HL7v2 standard for the message's version: one for a field that does not repeat, or a number such as 2 for v2.6 `OBR-17`. A field whose repetitions are unbounded is never reported. The rule reads `repetitions` from `field.data`, so `@glion/annotate-profile-context` and `@glion/annotate-profile-fields` must run before it. Fields of segments without a known profile are skipped.

## Install

```bash
npm install @glion/lint-profile-field-repetition
```

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
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
  .use(hl7v2AnnotateProfileFields)
  .use(hl7v2LintFieldRepetition)
  .process(message);

console.error(reporter([file]));
```

## API

### `unified().use(hl7v2LintFieldRepetition)`

A `unified` lint rule plugin. Takes no options.

Reads `repetitions` from `field.data`. A field with more repetitions than that number gets one message, with the number of repetitions in `actual`.

```ts
import type { Plugin } from "unified";
import type { Root } from "@glion/ast";

declare const hl7v2LintFieldRepetition: Plugin<[], Root>;
export default hl7v2LintFieldRepetition;
```

## What it checks

This rule flags fields with more `~`-delimited repetitions than the standard allows. For example, `PID-7` (Date of Birth) does not repeat in v2.5.

### Valid

`PID-7` carries a single Date of Birth:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^A01^ADT_A01|MSG00001|P|2.5
PID|1||PATID1234^^^HOSP^MR||DOE^JANE||19800101|F
```

### Invalid

`PID-7` carries two `~`-separated values, which violates the v2.5 profile for the `PID-7` field:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^A01^ADT_A01|MSG00001|P|2.5
PID|1||PATID1234^^^HOSP^MR||DOE^JANE||19800101~19800102|F
```

Reported message:

```
Field `PID-7` (Date/Time of Birth) has 2 repetitions; it allows at most 1 repetition.
```

## Part of Glion

`@glion/lint-profile-field-repetition` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
