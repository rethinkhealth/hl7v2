---
"@rethinkhealth/hl7v2-util-semver": patch
---

Refactored semver utility for better performance, elegance, and clearer error handling:

- **Performance**: Removed redundant `Number.isInteger()` checks in `parse()`, optimized `splitTokens()` to avoid unnecessary `.filter()` calls, and optimized `satisfies()` to parse version once upfront
- **Elegance**: Simplified `compare()` function with elegant loop over fields, streamlined `parseToken()` by removing redundant checks
- **Error handling**: **BREAKING BEHAVIOR** - `satisfies()` now throws errors for invalid input instead of silently returning `false`:
  - `satisfies("HELLO", ">=2.0")` now throws (previously returned `false`)
  - `satisfies("2.3", "INVALID")` now throws (previously returned `false`)
  - This makes it easier to catch programming errors while maintaining `false` for legitimate "doesn't satisfy" cases
  - Use `valid()` to check if a version string is valid before calling `satisfies()` if needed
- **Error messages**: Updated to follow ADR 0003 standard with actionable guidance:
  - Format: `<what happened> (<where/why>) — <next step>`
  - Example: `"Invalid version format ('HELLO') — expected format: major.minor.patch (e.g., '2.5.1' or '2.3')"`
  - Provides clear context and examples for how to fix the issue
