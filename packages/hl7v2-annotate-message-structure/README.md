# @rethinkhealth/hl7v2-annotate-message-structure

**[unified](https://github.com/unifiedjs/unified)** plugin to infer HL7v2 message structure when MSH-9.3 is missing.

## Contents

* [What is this?](#what-is-this)
* [When should I use this?](#when-should-i-use-this)
* [Install](#install)
* [Use](#use)
* [API](#api)
* [Examples](#examples)
* [Compatibility](#compatibility)
* [Related](#related)

## What is this?

This package is a [unified](https://github.com/unifiedjs/unified) plugin that infers the message structure (MSH-9.3) from message code (MSH-9.1) and trigger event (MSH-9.2) when the structure field is not present in the HL7v2 message.

Real-world HL7v2 messages often omit MSH-9.3, especially in older versions. This plugin automatically infers the structure using the convention: `{messageCode}_{triggerEvent}`.

## When should I use this?

Use this plugin when:

* Processing HL7v2 messages that may not include MSH-9.3
* You want to normalize message metadata for downstream processing
* You need to ensure all messages have a message structure for routing or validation

**Note**: This plugin requires [`@rethinkhealth/hl7v2-annotate-message`](../hl7v2-annotate-message) to run first to extract message metadata.

## Install

```bash
npm install @rethinkhealth/hl7v2-annotate-message-structure
```

## Use

```typescript
import { unified } from 'unified';
import { hl7v2Parser } from '@rethinkhealth/hl7v2-parser';
import { hl7v2AnnotateMessage } from '@rethinkhealth/hl7v2-annotate-message';
import { hl7v2AnnotateMessageStructure } from '@rethinkhealth/hl7v2-annotate-message-structure';

const processor = unified()
  .use(hl7v2Parser)
  .use(hl7v2AnnotateMessage)
  .use(hl7v2AnnotateMessageStructure);

// Message without MSH-9.3
const message = 'MSH|^~\\&|SENDER||RECEIVER||20241201||ADT^A01|MSG123|P|2.5';

const tree = processor.parse(message);
await processor.run(tree);

console.log(tree.data.messageInfo);
// {
//   version: "2.5",
//   messageCode: "ADT",
//   triggerEvent: "A01",
//   messageStructure: "ADT_A01"  // ← Inferred!
// }
```

## API

This package exports the identifier `hl7v2AnnotateMessageStructure`. There is no default export.

### `unified().use(hl7v2AnnotateMessageStructure)`

Infer message structure from message code and trigger event.

This plugin:

1. Checks if `tree.data.messageInfo.messageStructure` is already set
2. If missing, checks for `messageCode` and `triggerEvent`
3. If both present, infers structure as `{messageCode}_{triggerEvent}`
4. Updates `tree.data.messageInfo.messageStructure` with inferred value

###### Parameters

* None

###### Returns

Transformer (`function (Root) => Root`)

## Examples

### Basic Inference

```typescript
import { unified } from 'unified';
import { hl7v2Parser } from '@rethinkhealth/hl7v2-parser';
import { hl7v2AnnotateMessage } from '@rethinkhealth/hl7v2-annotate-message';
import { hl7v2AnnotateMessageStructure } from '@rethinkhealth/hl7v2-annotate-message-structure';

const processor = unified()
  .use(hl7v2Parser)
  .use(hl7v2AnnotateMessage)
  .use(hl7v2AnnotateMessageStructure);

// MSH-9.3 is missing
const message = 'MSH|^~\\&|||||||VXU^V04|MSG001|P|2.5.1';
const tree = processor.parse(message);
await processor.run(tree);

console.log(tree.data.messageInfo.messageStructure); // "VXU_V04"
```

### Non-Destructive Behavior

```typescript
// If MSH-9.3 is already present, it won't be overwritten
const messageWithStructure = 
  'MSH|^~\\&|||||||ADT^A01^ADT_A01_CUSTOM|MSG001|P|2.5';

const tree = processor.parse(messageWithStructure);
await processor.run(tree);

console.log(tree.data.messageInfo.messageStructure); 
// "ADT_A01_CUSTOM" (original value preserved)
```

### Combined with Linting

```typescript
import { hl7v2LintMessageStructure } from '@rethinkhealth/hl7v2-lint-message-structure';

// Infer structure and warn about missing source values
const processor = unified()
  .use(hl7v2Parser)
  .use(hl7v2AnnotateMessage)
  .use(hl7v2AnnotateMessageStructure)  // Fix missing structure
  .use(hl7v2LintMessageStructure);     // Warn about missing source

const result = await processor.process(message);
// Will have messageStructure populated, but may have warnings
```

## Behavior

### When Structure is Inferred

* Both `messageCode` (MSH-9.1) and `triggerEvent` (MSH-9.2) must be present
* Structure is inferred as: `{messageCode}_{triggerEvent}`
* Examples:
  * `ADT` + `A01` → `ADT_A01`
  * `ORU` + `R01` → `ORU_R01`
  * `VXU` + `V04` → `VXU_V04`

### When Structure is NOT Inferred

* Message structure already exists (won't override)
* Message code is missing or empty
* Trigger event is missing or empty
* No `messageInfo` exists in tree data

## Compatibility

* **Node.js**: 18+
* **TypeScript**: 5.0+
* **unified**: 11.0+

## Related

* [`@rethinkhealth/hl7v2-annotate-message`](../hl7v2-annotate-message) — Extract message metadata (required before this plugin)
* [`@rethinkhealth/hl7v2-lint-message-structure`](../hl7v2-lint-message-structure) — Validate presence of MSH-9.3
* [`@rethinkhealth/hl7v2-util-message-info`](../hl7v2-util-message-info) — Low-level utilities for extracting message metadata


## Contributing

We welcome contributions! Please see our [Contributing Guide][github-contributing] for more details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code of Conduct

To ensure a welcoming and positive environment, we have a [Code of Conduct][github-code-of-conduct] that all contributors and participants are expected to adhere to.

## License

Copyright 2025 Rethink Health, SUARL. All rights reserved.

This program is licensed to you under the terms of the [MIT License](https://opensource.org/licenses/MIT). This program is distributed WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [LICENSE][github-license] file for details.

[github-code-of-conduct]: https://github.com/rethinkhealth/hl7v2/blob/main/CODE_OF_CONDUCT.md
[github-license]: https://github.com/rethinkhealth/hl7v2/blob/main/LICENSE
[github-contributing]: https://github.com/rethinkhealth/hl7v2/blob/main/CONTRIBUTING.md