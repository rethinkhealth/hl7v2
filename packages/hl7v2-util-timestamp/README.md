# @rethinkhealth/hl7v2-util-timestamp

An immutable, high-performance HL7v2 timestamp utility with precision tracking. Parses, formats, and converts HL7v2 TS (Time Stamp) values while preserving precision for lossless round-tripping.

## Features

- **Precision tracking** - 7 levels from year to millisecond, never loses or adds detail
- **Lossless round-trip** - `Timestamp.parse(str).toString() === str` for all valid inputs
- **High performance** - No regex, no intermediate arrays, pre-computed lookup tables
- **Type safe** - Full TypeScript support with const enums and union types
- **Zero dependencies** - Pure computation, no runtime dependencies

## Installation

```bash
npm install @rethinkhealth/hl7v2-util-timestamp
```

## Quick Start

```typescript
import { Timestamp, Precision } from "@rethinkhealth/hl7v2-util-timestamp";

// Parse an HL7v2 timestamp string
const ts = Timestamp.parse("20260307143045-0500");
ts.precision; // "second"
ts.toDate(); // Date representing 2026-03-07T19:30:45.000Z
ts.toString(); // "20260307143045-0500"

// Create from a JavaScript Date
const ts2 = Timestamp.from(new Date(), { precision: "day" });
ts2.toString(); // "20260307"

// Current time
const now = Timestamp.now({ precision: "second", timezone: true });
now.toString(); // "20260307143045+0000"
```

## API Reference

### `Timestamp.parse(value: string): Timestamp`

Parses an HL7v2 timestamp string into a `Timestamp` instance.

Accepts the full HL7v2 TS format: `YYYY[MM[DD[HH[MM[SS[.S[S[S[S]]]]]]]]][+/-ZZZZ]`

```typescript
Timestamp.parse("2026"); // year precision
Timestamp.parse("202603"); // month precision
Timestamp.parse("20260307"); // day precision
Timestamp.parse("2026030714"); // hour precision
Timestamp.parse("202603071430"); // minute precision
Timestamp.parse("20260307143045"); // second precision
Timestamp.parse("20260307143045.1234"); // millisecond precision (4-digit fractional)
Timestamp.parse("20260307143045-0500"); // with timezone offset
Timestamp.parse("20260307143045.12+0000"); // fractional + timezone
```

**Throws:** `TypeError` if the string is not a valid HL7v2 timestamp.

### `Timestamp.from(date: Date, options?: TimestampOptions): Timestamp`

Creates a `Timestamp` from a JavaScript `Date` object.

```typescript
const date = new Date(2026, 2, 7, 14, 30, 45, 123);

Timestamp.from(date).toString(); // "20260307143045"
Timestamp.from(date, { precision: "day" }).toString(); // "20260307"
Timestamp.from(date, { precision: "millisecond" }).toString(); // "20260307143045.123"
Timestamp.from(date, { timezone: true }).toString(); // "20260307143045+0000"
```

**Throws:** `TypeError` if the `Date` is invalid (`NaN`).

### `Timestamp.now(options?: TimestampOptions): Timestamp`

Creates a `Timestamp` for the current time.

```typescript
Timestamp.now().toString(); // "20260307143045"
Timestamp.now({ precision: "day" }).toString(); // "20260307"
Timestamp.now({ precision: "minute" }).toString(); // "202603071430"
Timestamp.now({ timezone: true }).toString(); // "20260307143045+0000"
```

### Instance Properties

#### `precision: Precision`

The precision level of the timestamp. One of: `"year"`, `"month"`, `"day"`, `"hour"`, `"minute"`, `"second"`, `"millisecond"`.

### Instance Methods

#### `toString(): string`

Formats the timestamp as an HL7v2 string, respecting the precision level.

```typescript
Timestamp.parse("20260307").toString(); // "20260307" (not "20260307000000")
```

#### `toDate(): Date`

Returns a copy of the underlying `Date` object. Each call returns a new copy to preserve immutability.

### `TimestampOptions`

```typescript
interface TimestampOptions {
  /** Precision level for formatting. Default: "second" */
  precision?: Precision;

  /** Include local timezone offset. Only applies at "hour" precision or finer. Default: false */
  timezone?: boolean;
}
```

### `Precision`

```typescript
import { Precision } from "@rethinkhealth/hl7v2-util-timestamp";

Precision.Year; // "year"        → YYYY
Precision.Month; // "month"       → YYYYMM
Precision.Day; // "day"         → YYYYMMDD
Precision.Hour; // "hour"        → YYYYMMDDHH
Precision.Minute; // "minute"      → YYYYMMDDHHmm
Precision.Second; // "second"      → YYYYMMDDHHmmss
Precision.Millisecond; // "millisecond" → YYYYMMDDHHmmss.SSSS
```

## Precision Tracking

Precision is a first-class concept. The timestamp remembers exactly how much detail was provided, so formatting never inflates or truncates:

```typescript
// Parsing preserves precision
Timestamp.parse("20260307").toString(); // "20260307" — not "20260307000000"
Timestamp.parse("202603071430").toString(); // "202603071430" — not "20260307143000"

// Fractional seconds are preserved exactly (even 4-digit)
Timestamp.parse("20260307143045.1234").toString(); // "20260307143045.1234"

// from() uses the requested precision
Timestamp.from(date, { precision: "day" }).toString(); // "20260307"
Timestamp.from(date, { precision: "minute" }).toString(); // "202603071430"
```

## Timezone Management

### Parsing: Timezone Applied to the Date

When an HL7v2 timestamp includes a timezone offset (`+/-ZZZZ`), the offset is applied during parsing to construct a `Date` with the correct UTC instant:

```typescript
// 14:30:45 in UTC-5 → Date stores 19:30:45 UTC
const ts = Timestamp.parse("20260307143045-0500");
ts.toDate().toISOString(); // "2026-03-07T19:30:45.000Z"

// 14:30:45 in UTC+5:30 → Date stores 09:00:45 UTC
const ts2 = Timestamp.parse("20260307143045+0530");
ts2.toDate().toISOString(); // "2026-03-07T09:00:45.000Z"

// Midnight in UTC+5:30 → previous day in UTC
const ts3 = Timestamp.parse("20260101000000+0530");
ts3.toDate().toISOString(); // "2025-12-31T18:30:00.000Z"
```

### Formatting: Runtime Timezone

When `toString()` outputs a timezone suffix, it uses the runtime's `Date.getTimezoneOffset()` — the actual timezone of the environment:

```typescript
// toString() appends the runtime's local offset when the timestamp was created with timezone
const ts = Timestamp.from(new Date(), { timezone: true });
ts.toString(); // "20260307143045-0500" (on a UTC-5 server)
```

### Without Timezone

Timestamps without a timezone offset are treated as local time — no UTC conversion is applied:

```typescript
const ts = Timestamp.parse("20260307143045");
// Date is constructed with new Date(2026, 2, 7, 14, 30, 45) — local time
```

### Precision Gate

Timezone is only included at `"hour"` precision or finer. Coarser precisions (`"year"`, `"month"`, `"day"`) never carry a timezone suffix:

```typescript
Timestamp.from(date, { precision: "day", timezone: true }).toString();
// "20260307" — no timezone (day precision is too coarse)

Timestamp.from(date, { precision: "hour", timezone: true }).toString();
// "2026030714+0000" — timezone included
```

## Performance

Optimized for high-throughput streaming processors handling 100K+ messages per second:

- **No regex** — manual character-based parsing via `codePointAt` arithmetic
- **No intermediate arrays** — direct string concatenation in `toString()`
- **Pre-computed lookup table** — zero-padded strings for 0-99
- **O(1) precision lookups** — `Map` instead of `Array.indexOf()`
- **Zero allocations in hot paths** — no substring extraction or `Number()` conversions

## Error Handling

All invalid input throws `TypeError` with a descriptive message:

```typescript
Timestamp.parse(""); // TypeError: Invalid HL7v2 timestamp: ""
Timestamp.parse("not-a-timestamp"); // TypeError: Invalid HL7v2 timestamp: "not-a-timestamp"
Timestamp.parse("20263"); // TypeError: Invalid HL7v2 timestamp: "20263"
Timestamp.from(new Date("invalid")); // TypeError: Invalid Date provided to Timestamp.from
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
