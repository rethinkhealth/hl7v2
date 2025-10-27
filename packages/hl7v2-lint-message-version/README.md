# hl7v2-lint-max-message-version

> hl7v2-lint rule to warn when message version exceeds the maximum allowed version.

## Installation

```bash
npm install @rethinkhealth/hl7v2-lint-max-message-version
```

## Usage

```typescript
import { hl7v2Parser } from "@rethinkhealth/hl7v2-parser";
import hl7v2LintMaxMessageVersion from "@rethinkhealth/hl7v2-lint-max-message-version";
import { unified } from "unified";

const message = `MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01^ADT_A01|MSG00001|P|2.5
PID|||PATID1234^^^MR||EVERYMAN^ADAM^A^III||19610615|M`;

const processor = unified()
  .use(hl7v2Parser)
  .use(hl7v2LintMaxMessageVersion, { version: "2.5" });

processor.process(message);
```

## Options

### `version` (required)

**Type:** `string`  

The maximum allowed HL7v2 version (e.g., `"2.5"`, `"2.8"`). Messages with versions above this will trigger a warning.

## Description

This rule ensures that all HL7v2 messages do not exceed a maximum version limit. This is useful for:

- Maintaining backward compatibility with legacy systems
- Restricting features to specific version ranges
- Enforcing system constraints and requirements

## Examples

### ✅ Valid: Version within maximum limit

```
MSH|^~\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01^ADT_A01|MSG00001|P|2.5
```
When configured with `{ version: "2.5" }`

### ✅ Valid: Version below maximum

```
MSH|^~\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01^ADT_A01|MSG00001|P|2.3
```
When configured with `{ version: "2.5" }`

### ❌ Invalid: Version exceeds maximum

```
MSH|^~\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01^ADT_A01|MSG00001|P|2.7
```
When configured with `{ version: "2.5" }`
