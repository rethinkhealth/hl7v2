# @rethinkhealth/hl7v2-lint-segment-order

Unified plugin that validates HL7v2 segment order using DFA (Deterministic Finite Automaton) tables compiled from message structure profiles.

## Overview

This package provides a unified plugin that validates segments appear in the correct order according to HL7v2 message structure definitions. It uses pre-compiled DFA tables for efficient, stateful validation of segment sequences.

### Key Features

- **DFA-based validation**: Efficient segment order validation using compiled finite automata
- **Automatic profile loading**: Profiles can be loaded automatically from message metadata or provided explicitly
- **Clear diagnostics**: Detailed error messages indicating which segments are invalid or missing
- **Unified plugin**: Integrates seamlessly with [unified](https://github.com/unifiedjs/unified) processing pipelines
- **TypeScript support**: Full type safety for options and tree transformations

## Installation

```bash
pnpm add @rethinkhealth/hl7v2-lint-segment-order unified vfile
```

## Quick Start

```typescript
import { unified } from "unified";
import { segmentOrderValidator } from "@rethinkhealth/hl7v2-lint-segment-order";
import { VFile } from "vfile";

// Parse your HL7v2 message into an AST first
import { parse } from "@rethinkhealth/hl7v2-parser";
const tree = parse("MSH|^~\\&|...|EVN|...|PID|...");

// Option 1: With explicit DFA definition
import { loadProfile } from "@rethinkhealth/hl7v2-profile-segments";
const definition = await loadProfile({ version: "2.5", structure: "ADT_A01" });

const processor = unified().use(segmentOrderValidator, { definition });

const file = new VFile();
await processor.run(tree, file);

if (file.messages.length > 0) {
  console.error("Validation errors:", file.messages);
}

// Option 2: With automatic profile loading from metadata
const treeWithMetadata = parse("MSH|...");
treeWithMetadata.data = {
  message: {
    version: "2.5",
    messageStructure: "ADT_A01",
    messageCode: "ADT",
    triggerEvent: "A01",
  },
};

const processor2 = unified().use(segmentOrderValidator); // No definition needed

await processor2.run(treeWithMetadata, file);
```

## Usage

### Basic Validation

```typescript
import { unified } from "unified";
import { segmentOrderValidator } from "@rethinkhealth/hl7v2-lint-segment-order";
import { loadProfile } from "@rethinkhealth/hl7v2-profile-segments";
import { VFile } from "vfile";

// Load the DFA definition
const definition = await loadProfile({
  version: "2.5",
  structure: "ADT_A01",
});

// Create processor with the validator
const processor = unified().use(segmentOrderValidator, { definition });

// Validate
const file = new VFile();
await processor.run(tree, file);

// Check results
console.log(`Messages: ${file.messages.length}`);
file.messages.forEach((msg) => {
  console.log(`[${msg.ruleId}] ${msg.message}`);
});
```

### With Message Metadata (Automatic Profile Loading)

If your tree has message metadata attached (e.g., from `@rethinkhealth/hl7v2-annotator-message`), the validator can load the profile automatically:

```typescript
import { unified } from "unified";
import { segmentOrderValidator } from "@rethinkhealth/hl7v2-lint-segment-order";

// Assuming tree.data.message contains:
// { version: '2.5', messageStructure: 'ADT_A01', messageCode: 'ADT', triggerEvent: 'A01' }

const processor = unified().use(segmentOrderValidator); // No definition needed

const file = new VFile();
await processor.run(tree, file);
```

### In a Processing Pipeline

```typescript
import { unified } from "unified";
import { segmentOrderValidator } from "@rethinkhealth/hl7v2-lint-segment-order";
import { loadProfile } from "@rethinkhealth/hl7v2-profile-segments";

const definition = await loadProfile({ version: "2.5", structure: "ADT_A01" });

const processor = unified()
  .use(segmentOrderValidator, { definition })
  .use(otherPlugin1)
  .use(otherPlugin2);

const file = new VFile();
const result = await processor.run(tree, file);

// Process messages
file.messages.forEach((msg) => {
  if (msg.ruleId?.includes("segment_order")) {
    // Handle order validation errors
  }
});
```

## API Reference

### `segmentOrderValidator`

A unified plugin that validates segment order in HL7v2 messages.

**Type:**

```typescript
Plugin<[SegmentOrderValidatorOptions?], Root>;
```

**Options:**

```typescript
type SegmentOrderValidatorOptions = {
  definition?: Definition;
};
```

- `definition` (optional): Pre-loaded DFA definition for the message structure. If not provided, the plugin attempts to load it automatically from tree metadata.

**Returns:** A transformer function that validates segments and reports diagnostics to the file.

**Behavior:**

1. If `definition` is provided, uses it directly
2. If not provided, attempts to load from `tree.data.message` metadata
3. If loading fails, reports `error_loading_definition` and returns tree unchanged
4. Validates segment sequence using DFA runner
5. Reports any validation errors as diagnostics

### Diagnostic Rules

All diagnostics follow the pattern `validator:order:*`.

#### `invalid_segment_order`

- **Code:** `validator:order:invalid_segment_order`
- **Severity:** error
- **Fatal:** true
- **Message:** `Segment 'XXX' is not allowed at the order defined by the profile. Expected: YYY, ZZZ`
- **Occurs when:** A segment appears that is not expected in the current state

**Example:**

```
Tree: MSH → INVALID → PID
Profile: MSH → EVN → PID

Error: Segment 'INVALID' is not allowed at the order defined by the profile. Expected: EVN
```

#### `missing_segments`

- **Code:** `validator:order:missing_segments`
- **Severity:** error
- **Fatal:** true
- **Message:** `Message ended prematurely. Required segments missing: XXX, YYY`
- **Occurs when:** The message ends but required segments are still expected

**Example:**

```
Tree: MSH → PID (ends)
Profile: MSH → EVN → PID → NK1 → PV1

Error: Message ended prematurely. Required segments missing: EVN, NK1, PV1
```

#### `error_loading_definition`

- **Code:** `validator:order:error_loading_definition`
- **Severity:** error
- **Fatal:** true
- **Message:** `An error occurred while loading the definition.`
- **Occurs when:** Profile loading fails (invalid version/structure or missing metadata)

#### `missing_message_metadata`

- **Code:** `validator:order:missing_message_metadata`
- **Severity:** error
- **Fatal:** true
- **Message:** `Message is missing required message metadata.`
- **Occurs when:** No definition provided and tree lacks required metadata

## How It Works

1. **Parse HL7v2 message** into AST tree
2. **Optionally attach metadata** with version and message structure
3. **Load DFA definition** (automatically or provide explicitly)
4. **Extract segments** from tree using unist traversal
5. **Run DFA state machine** on segment symbols
6. **Report diagnostics** for any validation failures

The validator uses the `@rethinkhealth/hl7v2-automata` runner to track state and detect:

- Invalid segment symbols (not expected in current state)
- Missing required segments (premature message termination)

## Integration Examples

### With Type/Version Annotator

```typescript
import { unified } from "unified";
import { segmentOrderValidator } from "@rethinkhealth/hl7v2-lint-segment-order";

const processor = unified().use(segmentOrderValidator); // Uses metadata for automatic profile loading

await processor.run(tree, file);
```

### Error Handling Pipeline

```typescript
import { unified } from "unified";
import { segmentOrderValidator } from "@rethinkhealth/hl7v2-lint-segment-order";
import { loadProfile } from "@rethinkhealth/hl7v2-profile-segments";

const definition = await loadProfile({ version: "2.5", structure: "ADT_A01" });

const processor = unified()
  .use(segmentOrderValidator, { definition })
  .use(messageHandler);

const messageHandler = () => (tree, file) => {
  const validationErrors = file.messages.filter((msg) =>
    msg.ruleId?.startsWith("validator:order:")
  );

  if (validationErrors.length > 0) {
    console.error("Validation failed:", validationErrors);
    return null; // Prevent further processing
  }

  return tree;
};
```

## Related Packages

- [`@rethinkhealth/hl7v2-profile-segments`](../hl7v2-profiles-segments) - Profile loader (`load`)
- [`@rethinkhealth/hl7v2-automata`](../hl7v2-automata) - DFA/NFA engine
- [`@rethinkhealth/hl7v2-annotator-message`](../hl7v2-annotator-message) - Message metadata annotator
- [`@rethinkhealth/hl7v2-parser`](https://github.com/rethinkhealth/hl7v2-parser) - HL7v2 message parser

## Performance Considerations

- **DFA compilation**: Pre-compiled DFA tables (no runtime parsing overhead)
- **Memory**: DFA definitions are cached by `loadProfile`
- **Throughput**: Single-pass validation using state machine runner
- **Latency**: ~1-5ms per message (depending on segment count)

For high-scale applications, preload DFA tables during startup:

```typescript
import { loadProfile } from "@rethinkhealth/hl7v2-profile-segments";

// Warm up cache
await Promise.all([
  loadProfile({ version: "2.5", structure: "ADT_A01" }),
  loadProfile({ version: "2.5", structure: "ORU_R01" }),
  loadProfile({ version: "2.6", structure: "ADT_A01" }),
]);
```

## Testing

Tests are located in `tests/validator.test.ts` and cover:

- Valid segment sequences
- Invalid segment order
- Missing required segments
- Repeating segments
- Empty messages
- Automatic profile loading from metadata

Run tests with:

```bash
pnpm test
pnpm test:coverage
```

## License

MIT
