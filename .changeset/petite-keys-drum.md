---
"@rethinkhealth/hl7v2-util-semver": patch
---

Refactored semver utility for better performance, elegance, and simpler error handling:

- **Performance**: Removed redundant `Number.isInteger()` checks in `parse()`, optimized `splitTokens()` to avoid unnecessary `.filter()` calls, and optimized `satisfies()` to parse version once upfront
- **Elegance**: Simplified `compare()` function with elegant loop over fields, streamlined `parseToken()` by removing redundant checks
- **Error handling**: Simplified error handling in `satisfies()` to return `false` for invalid input instead of throwing, making the API more forgiving
