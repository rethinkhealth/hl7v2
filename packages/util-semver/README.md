# @glion/util-semver

Parser, comparators, and range matcher for HL7v2-style numeric version strings.

## What it does

Parses, compares, and matches HL7v2 versions like `2.5.1` or `2.3`. Supports the `=`, `<`, `<=`, `>`, `>=` comparators and AND-combined ranges (`">=2.0 <3.0"`), plus helpers for sorting, increment, diff, and finding max/min versions that satisfy a range. Intentionally narrower than full semver: no prerelease, build metadata, wildcards, or `^`/`~` operators. Versions are capped at int32 and input lengths are bounded to protect against malformed input.

## Install

```bash
npm install @glion/util-semver
```

## Use

```typescript
import {
  parse,
  clean,
  valid,
  compare,
  eq,
  gt,
  satisfies,
  sort,
  maxSatisfying,
  minSatisfying,
  increment,
  diff,
  Range,
} from "@glion/util-semver";

// Parse versions
parse("2.3"); // { major: 2, minor: 3, patch: 0 }
clean("2"); // "2.0.0"
valid("2.5.1"); // true

// Compare versions
compare("2.3.1", "2.4"); // -1
eq("2.5.0", "2.5"); // true
gt("2.5.1", "2.5.0"); // true

// Ranges
satisfies("2.5.1", ">=2.0 <3.0"); // true
satisfies("2.5.1", "2.5.1"); // true (exact match)

// Collection operations
sort(["2.5", "2.3.1", "2.10"]); // ["2.3.1", "2.5", "2.10"]
maxSatisfying(["2.3", "2.5", "3.0"], ">=2.0 <3.0"); // "2.5"
minSatisfying(["2.3", "2.5", "3.0"], ">=2.0 <3.0"); // "2.3"

// Manipulation
increment("2.5.1", "minor"); // "2.6.0"
diff("2.5.1", "2.6.0"); // "minor"
```

## API

### Parsing and validation

#### `parse(version: string): Hl7Version`

Parses a version string into a structured object.

```typescript
parse("2.5.1"); // { major: 2, minor: 5, patch: 1 }
parse("2.3"); // { major: 2, minor: 3, patch: 0 }
parse("2"); // { major: 2, minor: 0, patch: 0 }
```

Throws `VersionParseError` if the format is invalid.

#### `clean(version: string): string`

Converts a version to canonical `major.minor.patch` format.

```typescript
clean("2"); // "2.0.0"
clean("2.5"); // "2.5.0"
clean(" 2.5 "); // "2.5.0"
```

Throws `VersionParseError` if the format is invalid.

#### `valid(version: string): boolean`

Checks if a string is a valid version. Never throws.

```typescript
valid("2.5.1"); // true
valid("2"); // true
valid("HELLO"); // false
```

### Comparison

#### `compare(a, b): -1 | 0 | 1`

Compares two versions.

```typescript
compare("2.3.1", "2.4"); // -1 (a < b)
compare("2.5.1", "2.5.1"); // 0  (a = b)
compare("2.6", "2.5.9"); // 1  (a > b)
```

#### Comparison operators

- `eq(a, b)` — equal to
- `lt(a, b)` — less than
- `lte(a, b)` — less than or equal
- `gt(a, b)` — greater than
- `gte(a, b)` — greater than or equal

```typescript
eq("2.5.0", "2.5"); // true
lt("2.3", "2.4"); // true
gte("2.5.1", "2.5"); // true
```

### Range matching

#### `satisfies(version, range): boolean`

Checks if a version satisfies a range expression.

```typescript
satisfies("2.5.1", ">=2.0 <3.0"); // true
satisfies("2.5.1", "2.5.1"); // true (exact match)
satisfies("2.5.1", ">=2.6"); // false
```

For repeated checks, use a `Range` object to avoid re-parsing:

```typescript
const range = new Range(">=2.0 <3.0");
for (const version of versions) {
  if (satisfies(version, range)) {
    /* ... */
  }
}
```

#### `Range` class

Pre-parsed range for efficient reuse.

```typescript
const range = new Range(">=2.0 <3.0");
range.test("2.5.1"); // true
range.test("3.0.0"); // false

// Works with all range functions
satisfies("2.5.1", range);
maxSatisfying(versions, range);
minSatisfying(versions, range);
```

### Collection operations

#### `sort(versions: string[]): string[]`

Sorts versions in ascending order. Returns a new array; does not mutate.

```typescript
sort(["2.5", "2.3.1", "2.10.0"]);
// ["2.3.1", "2.5", "2.10.0"]
```

#### `maxSatisfying(versions, range): string | null`

Finds the highest version that satisfies a range.

```typescript
maxSatisfying(["2.3.0", "2.5.1", "3.0.0"], ">=2.0 <3.0"); // "2.5.1"
maxSatisfying(["2.3.0", "2.5.1"], ">=3.0"); // null
```

#### `minSatisfying(versions, range): string | null`

Finds the lowest version that satisfies a range.

```typescript
minSatisfying(["2.3.0", "2.5.1", "3.0.0"], ">=2.0 <3.0"); // "2.3.0"
```

### Version manipulation

#### `increment(version, release): string`

Increments a version component. Lower components reset to zero.

```typescript
increment("2.5.1", "major"); // "3.0.0"
increment("2.5.1", "minor"); // "2.6.0"
increment("2.5.1", "patch"); // "2.5.2"
```

#### `diff(v1, v2): 'major' | 'minor' | 'patch' | null`

Determines which component differs between versions.

```typescript
diff("2.5.1", "3.0.0"); // "major"
diff("2.5.1", "2.6.0"); // "minor"
diff("2.5.1", "2.5.2"); // "patch"
diff("2.5.1", "2.5.1"); // null
```

### Errors

```typescript
import { VersionParseError, RangeParseError } from "@glion/util-semver";

try {
  parse("INVALID");
} catch (e) {
  if (e instanceof VersionParseError) {
    console.log(e.input); // "INVALID"
    console.log(e.reason); // "expected format: major.minor.patch..."
  }
}

try {
  satisfies("2.5.1", "INVALID_RANGE");
} catch (e) {
  if (e instanceof RangeParseError) {
    console.log(e.token);
    console.log(e.reason);
  }
}
```

- `valid(version)` never throws — returns `false` for invalid input.
- `parse()`, `clean()`, `compare()`, `satisfies()`, etc. throw on invalid input.

## Version comparison rules

### Version format

- Generic numeric versions: `major[.minor][.patch]`.
- Missing components default to 0: `"2"` → `{ major: 2, minor: 0, patch: 0 }`.
- Whitespace is trimmed: `" 2.5.1 "` → `"2.5.1"`.
- No prerelease or build metadata.
- No wildcards, hyphen ranges, or `^`/`~` operators.

### Range syntax

Operators:

- `=` or omitted — exact match
- `<` — less than
- `<=` — less than or equal
- `>` — greater than
- `>=` — greater than or equal

Multiple comparators are space-separated with AND semantics — all must be satisfied:

```typescript
"2.5.1"; // Exact match
">=2.0"; // Greater than or equal to 2.0
">=2.0 <3.0"; // Between 2.0 (inclusive) and 3.0 (exclusive)
">=2.3 <2.6 >2.4"; // Multiple AND conditions
```

### Input limits

- Versions are capped at 100 characters; ranges at 1000 characters. Longer inputs throw `VersionParseError` or `RangeParseError`.
- Version components are capped at 2³¹−1; overflow throws `VersionParseError`.

## Part of Glion

`@glion/util-semver` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
