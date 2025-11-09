---
"@rethinkhealth/hl7v2-util-semver": minor
---

Major refactoring for better performance, type safety, security, and error handling:

## Performance
- Removed redundant `Number.isInteger()` checks in `parse()`
- Optimized `splitTokens()` to avoid unnecessary `.filter()` calls
- Optimized `satisfies()` to parse version once upfront
- Simplified `compare()` function with elegant loop over fields

## Security & Input Validation
- **ReDoS Protection**: Maximum input length of 100 characters for versions, 1000 for ranges
- **Integer Overflow Protection**: Version components capped at 2^31-1 (max safe int32) for cross-platform interoperability
- **Input Sanitization**: Comprehensive validation rejects malformed input early
- All security validations throw descriptive `VersionParseError` or `RangeParseError`

## Type Safety & Error Handling (BREAKING CHANGES)

### Structured Error Types
- **New exports**: `VersionParseError` and `RangeParseError` classes
- Errors now include structured data for programmatic handling:
  ```typescript
  try {
    parse("HELLO");
  } catch (e) {
    if (e instanceof VersionParseError) {
      console.log(e.input);  // "HELLO"
      console.log(e.reason); // "expected format: ..."
    }
  }
  ```

### Consistent Error Handling
- **Validation functions** (never throw): `valid(input): boolean`
- **Operation functions** (throw on invalid input): `parse()`, `clean()`, `compare()`, `satisfies()`

**BREAKING**: `clean()` now throws instead of returning `null`:
```typescript
// Before
const result = clean("HELLO"); // returned null

// After
const result = clean("HELLO"); // throws VersionParseError
// Use valid() first if you need to check:
if (valid(input)) {
  const result = clean(input);
}
```

**BREAKING**: `satisfies()` now throws for invalid input:
```typescript
satisfies("HELLO", ">=2.0"); // throws VersionParseError (was: false)
satisfies("2.3", "INVALID");  // throws RangeParseError (was: false)
```

### Error Messages (ADR 0003 Compliance)
- Format: `<what happened> (<where/why>) — <next step>`
- Example: `"Invalid version format ('HELLO') — expected format: major.minor.patch (e.g., '2.5.1' or '2.3')"`
- Provides clear context and actionable guidance

## New Operations

Added essential operations found in mature semver libraries:

### Collection Operations
- **`sort(versions: string[])`**: Sort versions in ascending order
- **`maxSatisfying(versions: string[], range: string)`**: Find highest version matching a range
- **`minSatisfying(versions: string[], range: string)`**: Find lowest version matching a range

### Version Manipulation
- **`increment(version: string, release: 'major' | 'minor' | 'patch')`**: Increment a version component

### Version Analysis
- **`diff(v1: string, v2: string)`**: Determine which component differs between versions

```typescript
// Examples
sort(["2.5", "2.3.1", "2.10.0"]);           // => ["2.3.1", "2.5", "2.10.0"]
maxSatisfying(["2.3", "2.5", "3.0"], ">=2.0 <3.0"); // => "2.5"
minSatisfying(["2.3", "2.5", "3.0"], ">=2.0 <3.0"); // => "2.3"
increment("2.5.1", "minor");                 // => "2.6.0"
diff("2.5.1", "2.6.0");                     // => "minor"
```

## Architecture Improvements

Reorganized package with modular structure for better maintainability:

- **`types.ts`**: Type definitions and constants
- **`errors.ts`**: Structured error classes
- **`parse.ts`**: Version parsing and validation
- **`compare.ts`**: Comparison operations and diff
- **`range.ts`**: Range parsing and matching
- **`collection.ts`**: Operations on version arrays
- **`index.ts`**: Clean public API exports

This separation of concerns makes the codebase easier to navigate, test, and extend.
