# @rethinkhealth/hl7v2-lint-message-structure

[![npm version](https://badge.fury.io/js/%40rethinkhealth%2Fhl7v2-lint-message-structure.svg)](https://www.npmjs.com/package/@rethinkhealth/hl7v2-lint-message-structure)

**[unified](https://github.com/unifiedjs/unified)** linter rule to warn when message structure (MSH-9.3) is missing.

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

This package is a [unified](https://github.com/unifiedjs/unified) linter rule that validates the presence of the message structure field (MSH-9.3) in HL7v2 messages.

Real-world HL7v2 messages often omit MSH-9.3, especially in older versions. This linter helps identify such messages for compliance or quality tracking.

## When should I use this?

Use this linter when:

* You need to ensure all messages include explicit message structure (MSH-9.3)
* You want to track or warn about messages with missing structure
* You're enforcing HL7v2 message quality standards

This linter validates the **source message**, not derived or inferred values. It works independently of plugins and is order-independent.

## Install

```bash
npm install @rethinkhealth/hl7v2-lint-message-structure
```

## Use

```typescript
import { unified } from 'unified';
import { hl7v2Parser } from '@rethinkhealth/hl7v2-parser';
import { hl7v2LintMessageStructure } from '@rethinkhealth/hl7v2-lint-message-structure';

const processor = unified()
  .use(hl7v2Parser)
  .use(hl7v2LintMessageStructure, ['warn']); // or ['error']

// Message without MSH-9.3
const message = 'MSH|^~\\&|SENDER||RECEIVER||20241201||ADT^A01|MSG123|P|2.5';

const result = await processor.process(message);

console.log(result.messages);
// [
//   {
//     message: 'Required MSH-9.3 (message structure) field is missing or empty',
//     source: 'hl7v2-lint',
//     ruleId: 'message-structure',
//     fatal: false
//   }
// ]
```

## API

This package exports the identifier `hl7v2LintMessageStructure`. There is no default export.

### `unified().use(hl7v2LintMessageStructure[, severity])`

Warn when message structure (MSH-9.3) is missing.

###### Parameters

* `severity` (`'warn'` or `'error'`, optional) — Severity level. Defaults to `'warn'`

###### Returns

Transformer (`function (Root, VFile) => void`)

## Examples

### Warn About Missing Structure

```typescript
import { unified } from 'unified';
import { hl7v2Parser } from '@rethinkhealth/hl7v2-parser';
import { hl7v2LintMessageStructure } from '@rethinkhealth/hl7v2-lint-message-structure';

const processor = unified()
  .use(hl7v2Parser)
  .use(hl7v2LintMessageStructure); // Defaults to 'warn'

const result = await processor.process(message);
// result.messages will contain warnings for missing MSH-9.3
```

### Error on Missing Structure

```typescript
const processor = unified()
  .use(hl7v2Parser)
  .use(hl7v2LintMessageStructure, ['error']);

try {
  await processor.process(message);
} catch (error) {
  console.error('Message validation failed:', error);
}
```

### Combined with Inference

```typescript
import { hl7v2AnnotateMessage } from '@rethinkhealth/hl7v2-annotate-message';
import { hl7v2AnnotateMessageStructure } from '@rethinkhealth/hl7v2-annotate-message-structure';

// Infer missing structure but still track warnings
const processor = unified()
  .use(hl7v2Parser)
  .use(hl7v2AnnotateMessage)
  .use(hl7v2AnnotateMessageStructure)  // Infers structure
  .use(hl7v2LintMessageStructure);     // Warns about missing source

const result = await processor.process(message);
// result.data.messageInfo.messageStructure will be "ADT_A01" (inferred)
// result.messages will contain warning about missing source MSH-9.3
```

## Behavior

### Order-Independent Validation

This linter **always validates the source AST** by querying MSH-9.3 directly, regardless of:

* Plugin execution order
* Inferred or annotated values in `tree.data.messageInfo`
* Other transformations

```typescript
// Both produce the same lint result:
.use(hl7v2AnnotateMessageStructure).use(hl7v2LintMessageStructure)
.use(hl7v2LintMessageStructure).use(hl7v2AnnotateMessageStructure)
```

### When Linter Fails

* MSH-9.3 is missing from the source
* MSH-9.3 is present but empty (`""`)
* Entire MSH-9 field is missing or empty

### When Linter Passes

* MSH-9.3 exists and has a non-empty value
* Example: `MSH|...|ADT^A01^ADT_A01|...`

## Integration with Presets

This linter is included in [`@rethinkhealth/hl7v2-preset-lint-recommended`](../hl7v2-preset-lint-recommended) with a default severity of `warn`:

```typescript
import { hl7v2PresetLintRecommended } from '@rethinkhealth/hl7v2-preset-lint-recommended';

const processor = unified()
  .use(hl7v2Parser)
  .use(hl7v2PresetLintRecommended);
// Includes hl7v2LintMessageStructure with 'warn' severity
```

You can override the severity:

```typescript
const processor = unified()
  .use(hl7v2Parser)
  .use(hl7v2PresetLintRecommended)
  .use(hl7v2LintMessageStructure, ['error']); // Override to 'error'
```

## Compatibility

* **Node.js**: 18+
* **TypeScript**: 5.0+
* **unified**: 11.0+

## Related

* [`@rethinkhealth/hl7v2-annotate-message-structure`](../hl7v2-annotate-message-structure) — Infer message structure when missing
* [`@rethinkhealth/hl7v2-preset-lint-recommended`](../hl7v2-preset-lint-recommended) — Recommended linter preset
* [`@rethinkhealth/hl7v2-util-query`](../hl7v2-util-query) — Query utilities used for AST validation

## License

MIT © [Melek Somai](https://github.com/meleksomai)

