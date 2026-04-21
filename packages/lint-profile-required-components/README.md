# @glion/lint-profile-required-components

> Lint rule to validate required components in composite datatype fields.

## What it does

Flags composite fields whose required components (as declared by the
datatype profile for the message's version) are missing or empty in any
repetition. The rule reads profile context attached by
`@glion/annotate-profile-context`, resolves each field's datatype, and
checks the required components on every repetition. Empty fields,
primitive datatypes, and segments without a known profile are skipped.

## Install

```bash
pnpm add @glion/lint-profile-required-components
```

> Using npm? `npm install @glion/lint-profile-required-components`

## Use

```ts
import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
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
  .use(hl7v2LintRequiredComponents)
  .process(message);

console.error(reporter([file]));
```

## API

### `unified().use(hl7v2LintRequiredComponents)`

A `unified` lint rule plugin. Takes no options.

Reads `file.data.profile`. For each non-empty field, resolves the datatype
definition from the field profile and iterates
`dtDef.requiredSequences`. For every field repetition, checks that each
required component is present with a non-empty first subcomponent value.

```ts
import type { Plugin } from "unified";
import type { Root } from "@glion/ast";

declare const hl7v2LintRequiredComponents: Plugin<[], Root>;
export default hl7v2LintRequiredComponents;
```

## What it checks

This rule flags missing required components on composite fields. The
classic case is `MSH-9` (Message Type), where the `MSG` datatype requires
the message code (`.1`) and trigger event (`.2`) components.

### Valid

`MSH-9` carries message code, trigger event, and message structure:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^A01^ADT_A01|MSG00001|P|2.5
PID|1||PATID1234^^^HOSP^MR||DOE^JANE||19800101|F
```

### Invalid

`MSH-9.2` (Trigger Event) is empty, which violates the `MSG` datatype
profile in v2.5:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^|MSG00001|P|2.5
PID|1||PATID1234^^^HOSP^MR||DOE^JANE||19800101|F
```

Reported message:

```
Required component MSH-9.2 (Trigger Event) is missing or empty
```

When the component name is available in the datatype profile it appears
in parentheses. One message is reported per missing required component
per repetition.

## Part of Glion

`@glion/lint-profile-required-components` is part of **[Glion]**, the application framework for HL7v2.
See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
