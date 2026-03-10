---
"@rethinkhealth/hl7v2-util-timestamp": patch
---

### New Package: `@rethinkhealth/hl7v2-util-timestamp`

An immutable, high-performance HL7v2 timestamp utility for parsing, formatting, and converting TS (Time Stamp) values.

**Features:**

- **Precision tracking** — 7 levels from year to millisecond. Parsing preserves the original precision so `Timestamp.parse("20260307").toString()` returns `"20260307"`, never `"20260307000000"`.
- **Correct timezone handling** — Timezone offsets are applied directly to the `Date` object via `Date.UTC()`, ensuring `toDate()` always returns the correct absolute moment regardless of server timezone. No separate `timezoneOffset` metadata to lose or forget.
- **Lossless round-trip** — Fractional seconds (up to 4 digits) are preserved exactly as parsed, even though JavaScript `Date` only supports 3-digit milliseconds.
- **High performance** — No regex, no intermediate arrays. Uses `codePointAt` arithmetic for parsing, pre-computed lookup tables for zero-padding, and `Map`-based O(1) precision lookups. Optimized for 100K+ messages/second.
- **Three creation methods** — `Timestamp.parse(str)` for HL7v2 strings, `Timestamp.from(date, options)` for `Date` objects, `Timestamp.now(options)` for current time.
- **Zero dependencies** — Pure computation, ESM-only, Node.js 18+.
