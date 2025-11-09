# @rethinkhealth/hl7v2-util-semver

A tiny, fast, and secure version utility for HL7v2-like version strings. Intentionally simplified for our ecosystem while maintaining excellent performance and type safety.

## Features

✨ **Simple & Elegant** - Clean API, no unnecessary complexity
⚡ **High Performance** - O(n) algorithms, Range caching for hot paths
🔒 **Secure** - ReDoS protection, integer overflow guards
📘 **Type Safe** - Full TypeScript support with structured errors
🪶 **Tiny** - ~6KB, zero dependencies

## Installation

```bash
npm install @rethinkhealth/hl7v2-util-semver
```

## Quick Start

```typescript
import {
  parse,
  clean,
  compare,
  satisfies,
  sort,
  maxSatisfying,
  increment,
  diff,
  Range,
} from "@rethinkhealth/hl7v2-util-semver";

// Parse versions
parse("2.3");              // { major: 2, minor: 3, patch: 0 }
clean("2");                // "2.0.0"
valid("2.5.1");            // true

// Compare versions
compare("2.3.1", "2.4");   // -1 (less than)
eq("2.5.0", "2.5");        // true
gt("2.5.1", "2.5.0");      // true

// Version ranges
satisfies("2.5.1", ">=2.0 <3.0");  // true
satisfies("2.5.1", "2.5.1");       // true (exact match)

// Collection operations
sort(["2.5", "2.3.1", "2.10"]);    // ["2.3.1", "2.5", "2.10"]
maxSatisfying(["2.3", "2.5", "3.0"], ">=2.0 <3.0");  // "2.5"
minSatisfying(["2.3", "2.5", "3.0"], ">=2.0 <3.0");  // "2.3"

// Version manipulation
increment("2.5.1", "minor");  // "2.6.0"
diff("2.5.1", "2.6.0");       // "minor"
```

## API Reference

### Parsing & Validation

#### `parse(version: string): Hl7Version`

Parses a version string into a structured object.

```typescript
parse("2.5.1");  // { major: 2, minor: 5, patch: 1 }
parse("2.3");    // { major: 2, minor: 3, patch: 0 }
parse("2");      // { major: 2, minor: 0, patch: 0 }
```

**Throws:** `VersionParseError` if invalid format

#### `clean(version: string): string`

Converts a version to canonical format (major.minor.patch).

```typescript
clean("2");      // "2.0.0"
clean("2.5");    // "2.5.0"
clean(" 2.5 ");  // "2.5.0"
```

**Throws:** `VersionParseError` if invalid format

#### `valid(version: string): boolean`

Checks if a string is a valid version. Never throws.

```typescript
valid("2.5.1");  // true
valid("2");      // true
valid("HELLO");  // false
```

### Comparison

#### `compare(a, b): -1 | 0 | 1`

Compares two versions.

```typescript
compare("2.3.1", "2.4");    // -1 (a < b)
compare("2.5.1", "2.5.1");  // 0  (a = b)
compare("2.6", "2.5.9");    // 1  (a > b)
```

#### Comparison Operators

- `eq(a, b)` - Equal to
- `lt(a, b)` - Less than
- `lte(a, b)` - Less than or equal
- `gt(a, b)` - Greater than
- `gte(a, b)` - Greater than or equal

```typescript
eq("2.5.0", "2.5");   // true
lt("2.3", "2.4");     // true
gte("2.5.1", "2.5");  // true
```

### Range Matching

#### `satisfies(version, range): boolean`

Checks if a version satisfies a range expression.

**Range Syntax:**
- Operators: `=`, `<`, `<=`, `>`, `>=`
- Multiple comparators: Space-separated (AND logic)
- Default operator: `=` (exact match)

```typescript
satisfies("2.5.1", ">=2.0 <3.0");  // true
satisfies("2.5.1", "2.5.1");       // true (exact match)
satisfies("2.5.1", ">=2.6");       // false
```

**Performance Tip:** Use `Range` objects for repeated checks:

```typescript
// Slow: Parse range every time
for (const version of versions) {
  if (satisfies(version, ">=2.0 <3.0")) { /* ... */ }
}

// Fast: Parse once, reuse many times
const range = new Range(">=2.0 <3.0");
for (const version of versions) {
  if (satisfies(version, range)) { /* ... */ }
}
```

#### `Range` Class

Pre-parsed range for efficient reuse.

```typescript
const range = new Range(">=2.0 <3.0");
range.test("2.5.1");  // true
range.test("3.0.0");  // false

// Works with all range functions
satisfies("2.5.1", range);
maxSatisfying(versions, range);
minSatisfying(versions, range);
```

### Collection Operations

#### `sort(versions: string[]): string[]`

Sorts versions in ascending order. Returns new array (does not mutate).

```typescript
sort(["2.5", "2.3.1", "2.10.0"]);
// => ["2.3.1", "2.5", "2.10.0"]
```

#### `maxSatisfying(versions, range): string | null`

Finds the highest version that satisfies a range.

```typescript
maxSatisfying(["2.3.0", "2.5.1", "3.0.0"], ">=2.0 <3.0");
// => "2.5.1"

maxSatisfying(["2.3.0", "2.5.1"], ">=3.0");
// => null (no matches)
```

#### `minSatisfying(versions, range): string | null`

Finds the lowest version that satisfies a range.

```typescript
minSatisfying(["2.3.0", "2.5.1", "3.0.0"], ">=2.0 <3.0");
// => "2.3.0"
```

### Version Manipulation

#### `increment(version, release): string`

Increments a version component. Lower components reset to zero.

```typescript
increment("2.5.1", "major");  // "3.0.0"
increment("2.5.1", "minor");  // "2.6.0"
increment("2.5.1", "patch");  // "2.5.2"
```

#### `diff(v1, v2): 'major' | 'minor' | 'patch' | null`

Determines which component differs between versions.

```typescript
diff("2.5.1", "3.0.0");  // "major"
diff("2.5.1", "2.6.0");  // "minor"
diff("2.5.1", "2.5.2");  // "patch"
diff("2.5.1", "2.5.1");  // null (equal)
```

## Error Handling

All parsing/operation functions throw structured errors for invalid input:

```typescript
import { VersionParseError, RangeParseError } from "@rethinkhealth/hl7v2-util-semver";

try {
  parse("INVALID");
} catch (e) {
  if (e instanceof VersionParseError) {
    console.log(e.input);   // "INVALID"
    console.log(e.reason);  // "expected format: major.minor.patch..."
    console.log(e.message); // Full formatted message
  }
}

try {
  satisfies("2.5.1", "INVALID_RANGE");
} catch (e) {
  if (e instanceof RangeParseError) {
    console.log(e.token);   // "INVALID_RANGE"
    console.log(e.reason);  // "expected format: [operator]version..."
  }
}
```

**Validation functions never throw:**
- `valid(version)` - Returns `false` for invalid input

**Operation functions throw on invalid input:**
- `parse()`, `clean()`, `compare()`, `satisfies()`, etc.

## Performance

### Algorithm Complexity

- `parse()`, `compare()`: O(1)
- `sort()`: O(n log n)
- `maxSatisfying()`, `minSatisfying()`: O(n) - optimized to avoid full sort
- Range parsing: O(k) where k = number of comparators

### Optimization Tips

**1. Reuse Range objects**

```typescript
// ❌ Slow: Parse range on every call
for (const version of manyVersions) {
  if (satisfies(version, ">=2.0 <3.0")) { /* ... */ }
}

// ✅ Fast: Parse once, reuse unlimited times
const range = new Range(">=2.0 <3.0");
for (const version of manyVersions) {
  if (satisfies(version, range)) { /* ... */ }
}
```

**2. Use appropriate algorithms**

```typescript
// ❌ Unnecessary: Full sort just to find max
const sorted = sort(versions);
const max = sorted[sorted.length - 1];

// ✅ Efficient: O(n) instead of O(n log n)
const max = maxSatisfying(versions, ">=0.0.0");
```

## Security

Built-in protections against common vulnerabilities:

**ReDoS Protection:**
- Maximum input length: 100 chars (versions), 1000 chars (ranges)
- Throws `VersionParseError` or `RangeParseError` if exceeded

**Integer Overflow Protection:**
- Version components capped at 2³¹-1 (max safe int32)
- Ensures cross-platform interoperability
- Throws `VersionParseError` if exceeded

**Input Sanitization:**
- Comprehensive validation rejects malformed input early
- Structured errors for debugging

## Version Format

- **Generic numeric versions:** `major[.minor][.patch]`
- **Missing components default to 0:** `"2"` → `{ major: 2, minor: 0, patch: 0 }`
- **Whitespace is trimmed:** `" 2.5.1 "` → `"2.5.1"`
- **No prerelease/build metadata**
- **No wildcards, hyphen ranges, or `^`/`~` operators**

## Range Syntax

**Operators:**
- `=` or omitted - Exact match
- `<` - Less than
- `<=` - Less than or equal
- `>` - Greater than
- `>=` - Greater than or equal

**Multiple comparators:**
- Space-separated for AND logic: `">=2.3 <3.0"`
- All comparators must be satisfied

**Examples:**
```typescript
"2.5.1"           // Exact match
">=2.0"           // Greater than or equal to 2.0
">=2.0 <3.0"      // Between 2.0 (inclusive) and 3.0 (exclusive)
">=2.3 <2.6 >2.4" // Multiple AND conditions
```

## Contributing

We welcome contributions! Please see our [Contributing Guide][github-contributing] for more details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code of Conduct

To ensure a welcoming and positive environment, we have a [Code of Conduct][github-code-of-conduct] that all contributors and participants are expected to adhere to.

## License

Copyright 2025 Rethink Health, SUARL. All rights reserved.

This program is licensed to you under the terms of the [MIT License](https://opensource.org/licenses/MIT). This program is distributed WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [LICENSE][github-license] file for details.

[github-code-of-conduct]: https://github.com/rethinkhealth/hl7v2/blob/main/CODE_OF_CONDUCT.md
[github-license]: https://github.com/rethinkhealth/hl7v2/blob/main/LICENSE
[github-contributing]: https://github.com/rethinkhealth/hl7v2/blob/main/CONTRIBUTING.md