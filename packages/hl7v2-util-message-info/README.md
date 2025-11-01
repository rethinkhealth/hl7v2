# @rethinkhealth/hl7v2-util-message-info

**Utility library** to extract HL7v2 message metadata (version, type, structure) from MSH segments.

## What is this?

`@rethinkhealth/hl7v2-util-message-info` provides utility functions to extract message metadata from the MSH segment of HL7v2 messages. It parses MSH-9 (message type, trigger event, structure) and MSH-12 (version) fields into a structured format.

This is a low-level utility. For automatic annotation of AST trees, see [`@rethinkhealth/hl7v2-annotate-message`](../hl7v2-annotate-message).

## When should I use this?

Use this utility when you need to:

* Extract message metadata on-demand from an HL7v2 AST
* Build custom plugins that need message type/version information
* Implement version-specific logic in transformers
* Query message metadata without using the annotator plugin

If you're using `unified` pipelines, consider using [`@rethinkhealth/hl7v2-annotate-message`](../hl7v2-annotate-message) instead, which pre-extracts and caches this information in `Root.data`.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 16+), install with npm:

```bash
npm install @rethinkhealth/hl7v2-util-message-info
```

## Use

### Basic Usage

```typescript
import { parseHL7v2 } from '@rethinkhealth/hl7v2-parser';
import { getMessageInfo } from '@rethinkhealth/hl7v2-util-message-info';

const message = `MSH|^~\\&|SENDER||RECEIVER||20241201||ADT^A01^ADT_A01|MSG123|P|2.5`;
const tree = parseHL7v2(message);

const info = getMessageInfo(tree);
console.log(info);
// {
//   version: "2.5",
//   messageCode: "ADT",
//   triggerEvent: "A01",
//   messageStructure: "ADT_A01"
// }
```

### Extract Specific Fields

```typescript
import { 
  getVersion, 
  getMessageCode, 
  getTriggerEvent, 
  getMessageStructure 
} from '@rethinkhealth/hl7v2-util-message-info';

const version = getVersion(tree);           // "2.5"
const messageCode = getMessageCode(tree);   // "ADT"
const triggerEvent = getTriggerEvent(tree); // "A01"
const structure = getMessageStructure(tree); // "ADT_A01"
```

### Check if Message Has Metadata

```typescript
import { hasMessageInfo } from '@rethinkhealth/hl7v2-util-message-info';

if (hasMessageInfo(tree)) {
  // MSH segment exists with at least version or message code
  const info = getMessageInfo(tree);
}
```

### Use in Custom Plugins

```typescript
import type { Plugin } from 'unified';
import type { Root } from '@rethinkhealth/hl7v2-ast';
import { getMessageInfo } from '@rethinkhealth/hl7v2-util-message-info';

const myVersionSpecificPlugin: Plugin<[], Root, Root> = () => {
  return (tree: Root) => {
    const info = getMessageInfo(tree);
    
    if (info.version === '2.5') {
      // Apply 2.5-specific transformations
    } else if (info.version === '2.3.1') {
      // Apply 2.3.1-specific transformations
    }
    
    return tree;
  };
};
```

## API

### `getMessageInfo(tree)`

Extract all message metadata from the MSH segment.

###### Parameters

* `tree` (`Root`) — The HL7v2 AST root node

###### Returns

`MessageInfo` object containing:
* `version` (`string | undefined`) — MSH-12 (e.g., "2.5")
* `messageCode` (`string | undefined`) — MSH-9.1 (e.g., "ADT")
* `triggerEvent` (`string | undefined`) — MSH-9.2 (e.g., "A01")
* `messageStructure` (`string | undefined`) — MSH-9.3 (e.g., "ADT_A01")

### `getVersion(tree)`

Extract message version from MSH-12.

###### Parameters

* `tree` (`Root`) — The HL7v2 AST root node

###### Returns

Version string (`string | undefined`)

### `getMessageCode(tree)`

Extract message code from MSH-9.1.

###### Parameters

* `tree` (`Root`) — The HL7v2 AST root node

###### Returns

Message code (`string | undefined`)

### `getTriggerEvent(tree)`

Extract trigger event from MSH-9.2.

###### Parameters

* `tree` (`Root`) — The HL7v2 AST root node

###### Returns

Trigger event (`string | undefined`)

### `getMessageStructure(tree)`

Extract message structure from MSH-9.3.

###### Parameters

* `tree` (`Root`) — The HL7v2 AST root node

###### Returns

Message structure (`string | undefined`)

### `hasMessageInfo(tree)`

Check if the tree has message metadata.

###### Parameters

* `tree` (`Root`) — The HL7v2 AST root node

###### Returns

`true` if MSH segment exists with at least version or message code (`boolean`)

## Types

```typescript
interface MessageInfo {
  version?: string;           // MSH-12
  messageCode?: string;       // MSH-9.1
  triggerEvent?: string;      // MSH-9.2
  messageStructure?: string;  // MSH-9.3
}
```

## Examples

### Version-Based Routing

```typescript
const info = getMessageInfo(tree);

switch (info.version) {
  case '2.3':
  case '2.3.1':
    routeToLegacySystem(tree);
    break;
  case '2.5':
  case '2.5.1':
    routeToModernSystem(tree);
    break;
  default:
    throw new Error(`Unsupported version: ${info.version}`);
}
```

### Message Type Handling

```typescript
const info = getMessageInfo(tree);

if (info.messageCode === 'ADT') {
  handleAdmitDischargeTransfer(tree);
} else if (info.messageCode === 'ORU') {
  handleObservationResults(tree);
} else if (info.messageCode === 'VXU') {
  handleVaccinationUpdate(tree);
}
```

### Structure Validation

```typescript
const info = getMessageInfo(tree);

const expectedStructure = `${info.messageCode}_${info.triggerEvent}`;
if (info.messageStructure !== expectedStructure) {
  console.warn(
    `Message structure mismatch: expected ${expectedStructure}, got ${info.messageStructure}`
  );
}
```

## Performance

The utility functions query the AST on every call. For better performance in unified pipelines, use [`@rethinkhealth/hl7v2-annotate-message`](../hl7v2-annotate-message) which extracts metadata once and caches it in `Root.data.messageInfo`.

## Related

* [`@rethinkhealth/hl7v2-annotate-message`](../hl7v2-annotate-message) — Plugin to pre-extract and cache message metadata
* [`@rethinkhealth/hl7v2-util-query`](../hl7v2-util-query) — Query HL7v2 AST nodes by location paths
* [`@rethinkhealth/hl7v2-parser`](../hl7v2-parser) — Parse HL7v2 messages to AST

## Contributing

We welcome contributions! Please see our [Contributing Guide][github-contributing] for more details.

## License

Copyright 2025 Rethink Health, SUARL. All rights reserved.

This program is licensed to you under the terms of the [MIT License](https://opensource.org/licenses/MIT).

[github-contributing]: https://github.com/rethinkhealth/hl7v2/blob/main/CONTRIBUTING.md

