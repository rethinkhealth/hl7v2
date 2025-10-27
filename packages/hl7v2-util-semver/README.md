# @rethinkhealth/hl7v2-util-semver

A tiny, fast version utility for HL7v2-like version strings, inspired by semver but intentionally simplified for our ecosystem.

- Basic comparators only: `=`, `<`, `<=`, `>`, `>=`
- AND-only ranges via whitespace: ">=2.3 <3.0"
- Generic numeric versions: `major[.minor][.patch]`
- No prerelease/build, no OR (`||`), no hyphen ranges, no wildcards, no `^`/`~`

## Installation

```bash
npm install @rethinkhealth/hl7v2-util-semver
```

## Quick start

```ts
import { parse, clean, compare, satisfies } from "@rethinkhealth/hl7v2-util-semver";

parse("2.3"); // { major: 2, minor: 3, patch: 0 }
clean("2");   // "2.0.0"
compare("2.3.1", "2.4"); // -1
satisfies("2.5", ">=2.3 <3.0"); // true
```

## API

- `parse(version)` → `{ major, minor, patch }` (throws on invalid)
- `clean(version)` → canonical `x.y.z` or `null`
- `compare(a, b)` → `-1 | 0 | 1`
- `eq/lt/lte/gt/gte(a, b)` → boolean
- `valid(version)` → boolean
- `satisfies(version, range)` → AND-only ranges

## Notes

- Versions are generic; we do not validate against official HL7 release lists.
- Missing parts default to 0 (e.g., `2` → `2.0.0`).
- Designed to be dependency-free and extremely small.

## License

MIT © Rethink Health
