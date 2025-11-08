---
"@rethinkhealth/hl7v2-util-query": patch
---

We've polished the query API to be more consistent, concise, and delightful to use!

## Breaking Change

**Renamed:** `getValue()` → `value()`

```typescript
// Before (verbose)
import { getValue } from '@rethinkhealth/hl7v2-util-query';
const result = getValue(root, "PID-5");

// After (clean!)
import { value } from '@rethinkhealth/hl7v2-util-query';
const result = value(root, "PID-5");
```

## Why This Change?

Your API now follows a consistent pattern of **simple verbs**:

- `select()` — get a single node
- `selectAll()` — get multiple nodes
- `value()` — extract string value
- `matches()` — check existence
- `parse()` — parse path syntax

Notice the pattern? **No "get" prefixes.** Just clear, direct verbs. This makes your code read like natural language:

```typescript
// Reads beautifully 📖
const lastName = value(root, "PID-5[1].1")?.value;
const segment = select(root, "PID");
const allObs = selectAll(root, "OBX");

if (matches(root, "PID-5")) {
  // Patient has a name
}
```

## Migration Guide

**Find and Replace:**

- `getValue` → `value` (in imports and usage)

That's it! The function signature and return type are identical.

## Benefits

- ✅ **shorter** — `value` vs `getValue` (5 vs 8 characters)
- ✅ **Consistent API** — all simple verbs, no prefixes
- ✅ **Better readability** — less visual noise in your code
- ✅ **Industry alignment** — follows conventions from DOM, lodash, and other query libraries

## What Else Changed?

Under the hood, we also:

- ✅ Added **parse memoization** for better performance
- ✅ Implemented `selectAll()` to properly handle multiple groups
- ✅ Added `matches()` for cleaner existence checks
- ✅ Enhanced TypeScript type inference

## Full Example

```typescript
import { select, selectAll, value, matches, parse } from '@rethinkhealth/hl7v2-util-query';

// Extract patient demographics
const lastName = value(ast, 'PID-5[1].1.1')?.value;
const firstName = value(ast, 'PID-5[1].2.1')?.value;

// Get all observations
const observations = selectAll(ast, 'OBX');
for (const { node } of observations) {
  const code = value(node, 'OBX-3.1')?.value;
  const result = value(node, 'OBX-5.1')?.value;
  console.log(`${code}: ${result}`);
}

// Validate message structure
if (!matches(ast, 'MSH') || !matches(ast, 'PID')) {
  throw new Error('Invalid message structure');
}
```
