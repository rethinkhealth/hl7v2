# @rethinkhealth/hl7v2-annotate-message

**[unified](https://unifiedjs.com/)** plugin to annotate HL7v2 AST with message metadata (version, type, structure).

## What is this?

`@rethinkhealth/hl7v2-annotate-message` is a [unified](https://unifiedjs.com/) plugin that extracts message metadata from the MSH segment and stores it in `Root.data.messageInfo`. This makes the metadata easily accessible to all downstream plugins without redundant parsing.

The plugin extracts:
* **MSH-12** (Version ID) — e.g., "2.5"
* **MSH-9.1** (Message Code) — e.g., "ADT"
* **MSH-9.2** (Trigger Event) — e.g., "A01"
* **MSH-9.3** (Message Structure) — e.g., "ADT_A01"

## When should I use this?

Use this plugin when you:

* Want downstream plugins to access message metadata without parsing MSH fields
* Need version-specific transformations in a unified pipeline
* Are building a plugin suite that needs consistent access to message metadata
* Want to avoid redundant MSH field extraction across multiple plugins

If you only need to extract metadata occasionally or outside a unified pipeline, use [`@rethinkhealth/hl7v2-util-message-info`](../hl7v2-util-message-info) instead.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 16+), install with npm:

```bash
npm install @rethinkhealth/hl7v2-annotate-message
```

## Use

### Basic Usage

```typescript
import { unified } from 'unified';
import { hl7v2Parser } from '@rethinkhealth/hl7v2-parser';
import { hl7v2AnnotateMessage } from '@rethinkhealth/hl7v2-annotate-message';
import { hl7v2ToHl7v2 } from '@rethinkhealth/hl7v2-to-hl7v2';

const message = `MSH|^~\\&|SENDER||RECEIVER||20241201||ADT^A01^ADT_A01|MSG123|P|2.5`;

const file = await unified()
  .use(hl7v2Parser)
  .use(hl7v2AnnotateMessage)  // Annotate early in pipeline
  .use(myCustomPlugin)         // Access tree.data.messageInfo
  .use(hl7v2ToHl7v2)
  .process(message);
```

### Access Annotated Metadata in Plugins

```typescript
import type { Plugin } from 'unified';
import type { Root } from '@rethinkhealth/hl7v2-ast';

const myVersionSpecificPlugin: Plugin<[], Root, Root> = () => {
  return (tree: Root) => {
    // Access pre-extracted metadata
    const info = tree.data?.messageInfo;
    
    if (!info) {
      throw new Error('Message not annotated. Use hl7v2AnnotateMessage plugin first.');
    }
    
    console.log(`Processing ${info.messageCode}^${info.triggerEvent} v${info.version}`);
    
    if (info.version === '2.5') {
      // Apply 2.5-specific transformations
    }
    
    return tree;
  };
};
```

### Type-Safe Access

The plugin augments the `RootData` interface, enabling type-safe access to `messageInfo`:

```typescript
import type { Root } from '@rethinkhealth/hl7v2-ast';

function processMessage(tree: Root) {
  // TypeScript knows about messageInfo
  const version: string | undefined = tree.data?.messageInfo?.version;
  const messageCode: string | undefined = tree.data?.messageInfo?.messageCode;
  
  console.log(`Version: ${version}, Type: ${messageCode}`);
}
```

### Fallback Pattern

Plugins can work with or without the annotator:

```typescript
import { getMessageInfo } from '@rethinkhealth/hl7v2-util-message-info';

const myPlugin: Plugin<[], Root, Root> = () => {
  return (tree: Root) => {
    // Use annotated data if available, otherwise extract on-demand
    const info = tree.data?.messageInfo ?? getMessageInfo(tree);
    
    // Now you have metadata either way
    console.log(info.version);
    
    return tree;
  };
};
```

## API

### `unified().use(hl7v2AnnotateMessage)`

Annotate HL7v2 AST with message metadata.

###### Parameters

There are no options.

###### Returns

Transform (`Transformer<Root, Root>`)

## Features

* **Performance**: Extracts metadata once, reused by all downstream plugins
* **Type Safety**: Full TypeScript support via module augmentation
* **Non-Destructive**: Preserves existing `Root.data` properties (e.g., `delimiters`)
* **Graceful**: Handles missing or partial MSH segments without errors
* **Standards-Aligned**: Follows unified/unist patterns (similar to delimiters storage)

## Metadata Schema

The plugin stores data in `Root.data.messageInfo`:

```typescript
interface MessageInfo {
  version?: string;           // MSH-12: "2.5", "2.3.1", etc.
  messageCode?: string;       // MSH-9.1: "ADT", "ORU", "VXU", etc.
  triggerEvent?: string;      // MSH-9.2: "A01", "R01", "V04", etc.
  messageStructure?: string;  // MSH-9.3: "ADT_A01", "ORU_R01", etc.
}
```

All fields are optional because:
* MSH segments may be incomplete
* Some messages omit MSH-9.3 (older versions)
* Malformed messages may lack these fields

## Examples

### Version-Specific Pipeline

```typescript
const processMessage = (version: string) => {
  return unified()
    .use(hl7v2Parser)
    .use(hl7v2AnnotateMessage)
    .use(function versionGuard() {
      return (tree: Root) => {
        if (tree.data?.messageInfo?.version !== version) {
          throw new Error(`Expected version ${version}, got ${tree.data?.messageInfo?.version}`);
        }
        return tree;
      };
    })
    .use(hl7v2ToHl7v2);
};

// Process only 2.5 messages
await processMessage('2.5').process(message);
```

### Message Type Router

```typescript
import { hl7v2AnnotateMessage } from '@rethinkhealth/hl7v2-annotate-message';

const messageRouter: Plugin<[], Root, Root> = () => {
  return async (tree: Root, file) => {
    const messageCode = tree.data?.messageInfo?.messageCode;
    
    switch (messageCode) {
      case 'ADT':
        await unified().use(handleADT).run(tree, file);
        break;
      case 'ORU':
        await unified().use(handleORU).run(tree, file);
        break;
      case 'VXU':
        await unified().use(handleVXU).run(tree, file);
        break;
      default:
        file.message(`Unknown message type: ${messageCode}`);
    }
    
    return tree;
  };
};
```

### Conditional Linting

```typescript
const versionSpecificLint: Plugin<[], Root, Root> = () => {
  return (tree: Root, file) => {
    const version = tree.data?.messageInfo?.version;
    
    if (!version) {
      file.message('MSH-12 (version) is required');
      return tree;
    }
    
    // Apply version-specific lint rules
    if (version.startsWith('2.3')) {
      // Check 2.3-specific constraints
    } else if (version.startsWith('2.5')) {
      // Check 2.5-specific constraints
    }
    
    return tree;
  };
};
```

### Statistics Gathering

```typescript
const messageStats = new Map<string, number>();

const statsCollector: Plugin<[], Root, Root> = () => {
  return (tree: Root) => {
    const info = tree.data?.messageInfo;
    const key = `${info?.messageCode}^${info?.triggerEvent} v${info?.version}`;
    
    messageStats.set(key, (messageStats.get(key) || 0) + 1);
    
    return tree;
  };
};

// After processing many messages
console.log('Message type distribution:', Object.fromEntries(messageStats));
```

## Architecture Decision

This plugin stores metadata in `Root.data` (not `VFile.data`) following the same pattern as delimiter storage. This design decision ensures:

1. **Standalone Compatibility**: Code that only has the tree (not VFile) can access metadata
2. **Serialization Support**: Tools like `toHl7v2()` can access metadata from the tree alone
3. **Consistency**: Follows the established pattern for document-intrinsic metadata

For the full rationale, see [ADR: Message Metadata Storage](../../docs/adr/0002-message-metadata-storage.md).

## Related

* [`@rethinkhealth/hl7v2-util-message-info`](../hl7v2-util-message-info) — Utility functions for on-demand extraction
* [`@rethinkhealth/hl7v2-parser`](../hl7v2-parser) — Parse HL7v2 messages to AST
* [`@rethinkhealth/hl7v2-lint-message-version`](../hl7v2-lint-message-version) — Example of using annotated metadata

## Contributing

We welcome contributions! Please see our [Contributing Guide][github-contributing] for more details.

## License

Copyright 2025 Rethink Health, SUARL. All rights reserved.

This program is licensed to you under the terms of the [MIT License](https://opensource.org/licenses/MIT).

[github-contributing]: https://github.com/rethinkhealth/hl7v2/blob/main/CONTRIBUTING.md

