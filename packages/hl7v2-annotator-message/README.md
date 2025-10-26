# @rethinkhealth/hl7v2-annotator-message

A [unified](https://github.com/unifiedjs/unified) plugin that extracts HL7v2 message identifiers from the MSH segment and makes them available as structured metadata for downstream processors and annotators.

## Features

- Extracts message **version** (MSH-12), **code** (MSH-9.1), **event** (MSH-9.2), and **structure** (MSH-9.3)
- Automatically derives missing MSH-9.3 from message code and trigger event (configurable)
- Emits informational or error diagnostics based on configuration
- Stores metadata on `file.data` for easy access by other plugins
- Supports strict mode to enforce HL7v2 v2.5+ compliance

## Install

```bash
pnpm add @rethinkhealth/hl7v2-annotator-message
```

## Quick Start

```ts
import { unified } from 'unified';
import { messageAnnotator } from '@rethinkhealth/hl7v2-annotator-message';

const file = new VFile();
const processor = unified().use(messageAnnotator);
await processor.run(tree, file);

// Message metadata is now available on file.data
console.log(file.data.message);
// Output: { version: '2.5', code: 'ADT', event: 'A01', structure: 'ADT_A01' }
```

## API

### Plugin Export

```ts
export const messageAnnotator: Plugin<[MessageAnnotatorOptions?], Root>
```

### Options

#### `strict?: boolean` (default: `false`)

**When `false` (default):**
- Derives missing MSH-9.3 as `{code}_{event}` from MSH-9.1 and MSH-9.2
- Emits an informational diagnostic (`info: ...`)
- Useful for processing messages that don't explicitly include the message structure

**When `true`:**
- Requires explicit MSH-9.3 per HL7v2 v2.5+ specification
- Emits an error diagnostic if MSH-9.3 is missing
- Marked as fatal to enforce compliance
- Useful for validating spec-compliant message construction

**Example:**

```ts
// Permissive (default)
unified().use(messageAnnotator);

// Strict enforcement
unified().use(messageAnnotator, { strict: true });
```

## Output

### Metadata Structure

After processing, `file.data.message` contains:

```ts
export type MessageDetails = {
  /** HL7 version from MSH-12 (e.g., "2.5", "2.6"). */
  version?: string;
  
  /** Message code from MSH-9.1 (e.g., "ADT", "ORU"). */
  code?: string;
  
  /** Trigger event from MSH-9.2 (e.g., "A01", "R01"). */
  event?: string;
  
  /** Message structure from MSH-9.3 (e.g., "ADT_A01").
   *  May be derived from code + event if not explicitly present.
   */
  structure?: string;
};
```

## Diagnostics

### Default Mode (Non-Strict)

When MSH-9.3 is missing but code and event are present:

```txt
info: MSH-9.3 missing, derived structure 'ADT_A01' from ADT^A01. 
      Some trigger events share structures (e.g., ADT^A04 uses ADT_A01). 
      Consider adding explicit MSH-9.3 per HL7v2 v2.5+ spec.
```

| Property | Value |
|----------|-------|
| Code | `msh9_derived` |
| Severity | `info` |
| Fatal | `false` |

### Strict Mode

When MSH-9.3 is missing but code and event are present:

```txt
error: MSH-9.3 (message structure) is required in strict mode. 
       Found MSH-9 with only ADT^A01. 
       Add explicit MSH-9.3 component per HL7v2 v2.5+ spec 
       (e.g., ADT^A01^ADT_A01).
```

| Property | Value |
|----------|-------|
| Code | `msh9_missing` |
| Severity | `error` |
| Fatal | `true` |

## Notes

- **MSH-9.3 Derivation**: Some HL7v2 trigger events share the same message structure. For example, `ADT^A04` actually uses the `ADT_A01` structure, not `ADT_A04`. When relying on derivation, the annotator may identify the wrong profile. For robust operation, **always include explicit MSH-9.3** in your messages.

- **Read-Only**: This annotator only reads from the AST; it never mutates message values.

- **Downstream Usage**: Downstream plugins can access message metadata via `file.data.message` to load appropriate DFA profiles or customize validation behavior.

## License

See LICENSE file in repository root.
