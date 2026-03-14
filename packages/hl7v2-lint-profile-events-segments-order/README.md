# @rethinkhealth/hl7v2-lint-profile-events-segments-order

**[unified](https://github.com/unifiedjs/unified)** lint rule that validates HL7v2 segment order against message structure profiles.

## What is this?

This package is a lint rule that validates segments appear in the correct order according to HL7v2 message structure definitions. It uses the DFA (Deterministic Finite Automaton) runner from `@rethinkhealth/hl7v2-profiles` for efficient, stateful validation.

## When should I use this?

Use this rule when:

- You need to validate that segments follow the structure defined by the HL7v2 specification
- You want to catch segment ordering errors before downstream processing
- You're building a validation pipeline for HL7v2 messages

## Install

```bash
npm install @rethinkhealth/hl7v2-lint-profile-events-segments-order
```

## Use

### With explicit definition

```typescript
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import hl7v2LintSegmentOrder from "@rethinkhealth/hl7v2-lint-profile-events-segments-order";
import { unified } from "unified";
import { VFile } from "vfile";

const definition = await profiles.events.load("2.5", "ADT_A01");

const processor = unified().use(hl7v2LintSegmentOrder, { definition });

const file = new VFile();
await processor.run(tree, file);

console.log(file.messages);
```

### With automatic profile loading

When no `definition` is provided, the rule resolves the profile from:

1. `tree.data.messageInfo` (set by `@rethinkhealth/hl7v2-annotate-message` + `@rethinkhealth/hl7v2-annotate-message-structure`)
2. MSH-9.3 (message structure) and MSH-12 (version) fields directly from the AST

```typescript
import { hl7v2AnnotateMessage } from "@rethinkhealth/hl7v2-annotate-message";
import { hl7v2AnnotateMessageStructure } from "@rethinkhealth/hl7v2-annotate-message-structure";
import { hl7v2Parser } from "@rethinkhealth/hl7v2-parser";
import hl7v2LintSegmentOrder from "@rethinkhealth/hl7v2-lint-profile-events-segments-order";
import { unified } from "unified";

const processor = unified()
  .use(hl7v2Parser)
  .use(hl7v2AnnotateMessage)
  .use(hl7v2AnnotateMessageStructure)
  .use(hl7v2LintSegmentOrder);

const result = await processor.process(message);
console.log(result.messages);
```

## API

### `unified().use(hl7v2LintSegmentOrder[, options])`

Validate segment order against a message structure profile.

###### Parameters

- `options` (`SegmentOrderOptions`, optional)
  - `definition` (`Definition`) — Pre-loaded DFA definition. If not provided, the rule loads it from message metadata.

###### Messages

- **Unexpected segment** — A segment appears that is not valid in the current state. Reports the expected segments.
- **Message ended prematurely** — The message ends before reaching a valid final state. Reports the expected next segments.
- **Cannot validate** — Version or message structure is missing, or no profile was found.

## Behavior

- Stops at the first invalid segment (the DFA cannot recover from an invalid state)
- Does not report premature end when an invalid segment was already found
- Severity is controlled by the consumer via standard unified-lint configuration

## Compatibility

- **Node.js**: 18+
- **TypeScript**: 5.0+
- **unified**: 11.0+

## Related

- [`@rethinkhealth/hl7v2-profiles`](../hl7v2-profiles) — Profile definitions and DFA runner
- [`@rethinkhealth/hl7v2-annotate-message`](../hl7v2-annotate-message) — Extract message metadata
- [`@rethinkhealth/hl7v2-annotate-message-structure`](../hl7v2-annotate-message-structure) — Resolve message structure

## License

Copyright 2025 Rethink Health, SUARL. All rights reserved.

This program is licensed to you under the terms of the [MIT License](https://opensource.org/licenses/MIT).

[github-contributing]: https://github.com/rethinkhealth/hl7v2/blob/main/CONTRIBUTING.md
