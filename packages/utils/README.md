# @glion/utils

Shared primitives for HL7v2 AST work — emptiness, length and byte-length measurement, and conformance checks.

## What it does

Exports the low-level utilities that the rest of the Glion ecosystem depends on: `isEmptyNode` for HL7v2 emptiness semantics, `getLength` and `getByteLength` for measuring any AST node without serializing it, and the stateless conformance validators `checkOptionality`, `checkCardinality`, and `checkLength`. Also exports the `DEFAULT_DELIMITERS` constant and the `OptionalityCode` enumeration of HL7v2 usage codes.

## Install

```bash
npm install @glion/utils
```

## Use

```typescript
import {
  checkCardinality,
  checkOptionality,
  getByteLength,
  isEmptyNode,
} from "@glion/utils";

isEmptyNode(fieldNode); // true | false
getByteLength(segmentNode); // number of UTF-8 bytes
checkCardinality(fieldNode, 1, 5); // { ok: true } | { ok: false, error }
checkOptionality(fieldNode, "R"); // { ok: true } | { ok: false, error }
```

## API

### `isEmptyNode(node)`

Returns `true` when the node is `null`, `undefined`, missing a value, or has no descendant subcomponent with a non-empty string. Whitespace is treated as data and is therefore not empty.

```typescript
import { isEmptyNode } from "@glion/utils";

isEmptyNode({ type: "subcomponent", value: "" }); // true
isEmptyNode({ type: "subcomponent", value: " " }); // false
```

### `getLength(node)`

Returns the JavaScript string length (UTF-16 code units) of the node's content, recursively summing children. Delimiters are not included. For UTF-8 byte length, use `getByteLength`.

```typescript
import { getLength } from "@glion/utils";

getLength({ type: "subcomponent", value: "café" }); // 4
```

### `getByteLength(node)`

Returns the UTF-8 byte length of the node's content, recursively summing children. Delimiters are not included.

```typescript
import { getByteLength } from "@glion/utils";

getByteLength({ type: "subcomponent", value: "café" }); // 5
```

### `checkOptionality(node, code)`

Validates a node against an HL7v2 usage code (`OptionalityCode` or its string form). Returns `{ ok: true }` when the constraint is satisfied; otherwise returns `{ ok: false, error }` with an error code of `MISSING`, `EMPTY`, or `UNEXPECTED_CONTENT`.

```typescript
import { checkOptionality } from "@glion/utils";

checkOptionality(undefined, "R"); // { ok: false, error: { code: "MISSING", ... } }
checkOptionality(populatedNode, "X"); // { ok: false, error: { code: "UNEXPECTED_CONTENT", ... } }
```

### `checkCardinality(node, min, max)`

Validates that a `Field` has between `min` and `max` repetitions. `max` accepts `"*"` for unbounded. Returns `{ ok: true }` or `{ ok: false, error }` with an error code of `CARDINALITY_UNDERFLOW` or `CARDINALITY_OVERFLOW`. Throws when `min` or `max` is negative or when `min > max`.

```typescript
import { checkCardinality } from "@glion/utils";

checkCardinality(field, 1, 5);
checkCardinality(field, 1, "*");
```

### `checkLength(node, max, min?)`

Validates that the recursive string length of a node falls within `[min, max]`. `min` defaults to `0`. Returns `{ ok: true }` or `{ ok: false, error }` with an error code of `LENGTH_UNDERFLOW` or `LENGTH_OVERFLOW`. Throws when `min` or `max` is negative or when `min > max`.

```typescript
import { checkLength } from "@glion/utils";

checkLength(node, 10); // 0..10
checkLength(node, 10, 1); // 1..10
```

### `OptionalityCode`

An object of HL7v2 usage codes plus a matching union type.

| Code | Constant             | Meaning                  |
| ---- | -------------------- | ------------------------ |
| `R`  | `Required`           | Required                 |
| `RE` | `RequiredOrEmpty`    | Required, may be empty   |
| `O`  | `Optional`           | Optional                 |
| `C`  | `Conditional`        | Conditional / undeclared |
| `X`  | `NotSupported`       | Not supported            |
| `B`  | `BackwardCompatible` | Backward-compatible      |
| `W`  | `Withdrawn`          | Withdrawn                |

```typescript
import { OptionalityCode } from "@glion/utils";

OptionalityCode.Required; // "R"
```

### `DEFAULT_DELIMITERS`

The HL7v2 default delimiters as derived from `MSH-1` and `MSH-2`.

```typescript
import { DEFAULT_DELIMITERS } from "@glion/utils";

DEFAULT_DELIMITERS;
// {
//   field: "|", component: "^", repetition: "~",
//   subcomponent: "&", escape: "\\", segment: "\r"
// }
```

### `ValidationResult`

The discriminated union returned by all conformance checks.

```typescript
type ValidationResult =
  | { ok: true }
  | {
      ok: false;
      error: {
        code: ValidationErrorCode;
        message: string;
        expected?: string | number | Array<string | number>;
        actual?: string | number | Array<string | number>;
      };
    };
```

`ValidationErrorCode` is one of: `MISSING`, `EMPTY`, `UNEXPECTED_CONTENT`, `CARDINALITY_UNDERFLOW`, `CARDINALITY_OVERFLOW`, `LENGTH_UNDERFLOW`, `LENGTH_OVERFLOW`, `VALUE_NOT_IN_TABLE`.

## Part of Glion

`@glion/utils` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
