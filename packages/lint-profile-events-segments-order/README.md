# @glion/lint-profile-events-segments-order

Validate HL7v2 segment order against the message structure defined by the profile.

|                      |                                                     |
| -------------------- | --------------------------------------------------- |
| **Recommended**      | ❌                                                  |
| **Profile-aware**    | ✅ part of `@glion/preset-lint-profile-recommended` |
| **Default severity** | `warning`                                           |
| **Requires**         | `@glion/parser`                                     |
| **Since**            | `@glion/lint-profile-events-segments-order@0.6.0`   |

## What it does

Walks the parsed tree segment-by-segment, feeding each segment name into a DFA (Deterministic Finite Automaton) built from the message structure definition in `@glion/profiles`. Reports one message for the first segment that is not valid at its position, or for a message that ends before reaching an accepting state. When no explicit `definition` option is provided, the rule resolves one from `MSH-9.3` (or `MSH-9.1` + `MSH-9.2` via the event map) and `MSH-12.1`. When resolution fails, the rule exits silently.

## Install

```bash
npm install @glion/lint-profile-events-segments-order
```

## Use

```ts
import { hl7v2Parser } from "@glion/parser";
import hl7v2LintSegmentOrder from "@glion/lint-profile-events-segments-order";
import { unified } from "unified";
import { reporter } from "vfile-reporter";

const message = [
  "MSH|^~\\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^A01^ADT_A01|MSG00001|P|2.5",
  "PID|1||PATID1234^^^HOSP^MR||DOE^JANE||19800101|F",
].join("\r");

const file = await unified()
  .use(hl7v2Parser)
  .use(hl7v2LintSegmentOrder)
  .process(message);

console.error(reporter([file]));
```

## Options

| Option       | Type         | Default     | Description                                                                                                         |
| ------------ | ------------ | ----------- | ------------------------------------------------------------------------------------------------------------------- |
| `definition` | `Definition` | `undefined` | Pre-loaded DFA definition. When provided, the rule uses it directly and skips automatic resolution from MSH fields. |

```ts
import { profiles } from "@glion/profiles";
import { hl7v2Parser } from "@glion/parser";
import hl7v2LintSegmentOrder from "@glion/lint-profile-events-segments-order";
import { unified } from "unified";

const definition = await profiles.events.load("2.5", "ADT_A01");

const processor = unified()
  .use(hl7v2Parser)
  .use(hl7v2LintSegmentOrder, { definition });
```

## API

### `unified().use(hl7v2LintSegmentOrder[, options])`

A `unified` lint rule plugin. Visits each `segment` node, drives a DFA built from the resolved (or supplied) message structure, and emits one diagnostic at the first invalid transition or one diagnostic at the end of the message when the DFA has not reached an accepting state.

```ts
import type { Plugin } from "unified";
import type { Root } from "@glion/ast";
import type { Definition } from "@glion/profiles";

export interface SegmentOrderOptions {
  definition?: Definition;
}

declare const hl7v2LintSegmentOrder: Plugin<[SegmentOrderOptions?], Root>;
export default hl7v2LintSegmentOrder;
```

Messages use `ruleId: "segment-order"` and `source: "hl7v2-lint"`. The rule stops at the first error because a rejected DFA transition leaves the automaton in an undefined state.

## What it checks

Segments must appear in an order that the message structure DFA accepts, and the message must end in an accepting state. Three diagnostic shapes are emitted: an unexpected segment, a premature end, and an empty segment name.

### Valid

An `ADT_A01` message whose segments follow the structure defined for v2.5:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^A01^ADT_A01|MSG00001|P|2.5
EVN|A01|20250601120000
PID|1||PATID1234^^^HOSP^MR||DOE^JANE||19800101|F
```

### Invalid

`PID` appears before `EVN` in an `ADT_A01`:

```hl7
MSH|^~\&|SENDER|FAC|RECV|RFAC|20250601120000||ADT^A01^ADT_A01|MSG00001|P|2.5
PID|1||PATID1234^^^HOSP^MR||DOE^JANE||19800101|F
```

Reported message:

```
Unexpected segment 'PID'. Expected: EVN, SFT
```

The offending segment name and the comma-separated set of segments the DFA expected at that position are interpolated.

A message that ends before satisfying the DFA reports:

```
Message ended prematurely. Expected: PV1, PV2
```

The list is the set of segments that would have advanced the DFA toward an accepting state. This diagnostic is only emitted when no other validation error fired.

A `segment` node with an empty or undefined `name` reports:

```
Segment has empty segment name at this position
```

## Part of Glion

`@glion/lint-profile-events-segments-order` is part of **[Glion]**, the application framework for HL7v2.
See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
