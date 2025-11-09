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
