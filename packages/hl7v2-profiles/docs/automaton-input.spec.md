# Automaton Input

_Date_: 10-13-2025

`RunnerInput` is the input token type accepted by `Runner.run()`. The type offers two shapes so callers
can choose between convenience and richer diagnostic context.

```ts
export type RunnerInput =
  | string
  | Readonly<{
      symbol: string;
      index?: number | null;
    }>;
```

## Why two shapes?

### 1. Plain strings for the common path

Most HL7 use cases just need to walk the DFA with the segment identifier in sequence order. Passing bare strings keeps the call site terse:

```ts
runner(definition)
  .onStep((event) => console.log(event))
  .run(["MSH", "PID", "PV1"]);
```

The runner internally assigns a monotonically increasing index (starting at 0) so the resulting
event indices stay stable for diagnostics and test fixtures.

### 2. Structured objects when you have metadata

If you already know the segment's ordinal position (for example, when iterating over a parsed AST with explicit indices), pass the object form:

```ts
runner(definition)
  .onStep((event) => console.log(event))
  .run([
    { symbol: "MSH", index: 0 },
    { symbol: "OBX", index: 17 },
    { symbol: "OBX", index: 18 },
  ]);
```

- `symbol` is required and must be a non-empty string.
- `index` is optional; when omitted, `null`, or non-finite (e.g., `NaN`, `Infinity`), the runner
  falls back to the same auto-incremented counter it uses for plain strings.

Supplying the index upfront means downstream consumers can surface precise locations without re-deriving them.

## Normalization rules

- `null` or `undefined` inputs are skipped entirely.
- Empty strings or whitespace-only strings are skipped.
- Objects with missing, empty, or whitespace-only `symbol` fields are skipped.
- Objects with non-string `symbol` fields are skipped.
- Non-finite indices (e.g., `NaN`, `Infinity`, `-Infinity`) are treated as if no index was provided, triggering the fallback counter.
- The fallback index starts at 0 and increments by 1 after each consumed symbol (whether from a string or object input).
- When an object provides a valid explicit index, the fallback counter is updated to `index + 1` so subsequent auto-generated indices continue from there.

These rules let callers mix string and object forms: the runner always produces consistent event indices and skips invalid inputs without affecting state.

## FAQs

### What is the `index` used for?

The runner never uses the index to drive state transitions—it's purely diagnostic. When processing input:

- Each input is normalized; if you provided a valid `index`, that value becomes the event's index. Otherwise the runner uses the internal fallback counter (starting at 0).
- The index is included in `RunnerStepEvent.index` for successful transitions and in `RunnerInvalidEvent.index` when the DFA rejects a symbol.
- When an explicit index is provided, the fallback counter is updated to `index + 1` so subsequent auto-generated indices continue monotonically.
- Aside from being included in events, the index isn't used anywhere else—no branching, no lookups. It just preserves the caller's notion of "position" for logs, tests, and unified diagnostics.

### Can I mix string and object inputs?

Yes! The runner handles both forms seamlessly:

```ts
runner(definition)
  .onStep((event) => console.log(event.index, event.symbol))
  .run([
    "MSH", // index: 0 (auto)
    { symbol: "EVN", index: 5 }, // index: 5 (explicit)
    "PID", // index: 6 (auto, continues from 5+1)
    { symbol: "PV1" }, // index: 7 (auto, no explicit index provided)
    "OBX", // index: 8 (auto)
  ]);
```

The fallback index counter ensures a consistent, monotonically increasing sequence even when explicit indices are interspersed.
