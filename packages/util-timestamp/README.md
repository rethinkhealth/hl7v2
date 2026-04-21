# @glion/util-timestamp

HL7v2 timestamp parser, formatter, and converter with precision tracking.

## What it does

Parses, formats, and converts HL7v2 TS (Time Stamp) values across seven precision levels — year, month, day, hour, minute, second, millisecond — so that `Timestamp.parse(str).toString() === str` for any valid input. Timezone offsets are applied during parsing so `toDate()` returns the correct absolute moment, and reconstructed during formatting so the original local-time representation round-trips exactly regardless of the server's timezone. Pure computation, zero runtime dependencies.

## Install

```bash
npm install @glion/util-timestamp
```

## Use

```typescript
import { Timestamp, Precision } from "@glion/util-timestamp";

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

## API

### `Timestamp.parse(value: string): Timestamp`

Parses an HL7v2 timestamp string into a `Timestamp` instance.

Accepts the full HL7v2 TS format: `YYYY[MM[DD[HH[MM[SS[.S[S[S[S]]]]]]]]][+/-ZZZZ]`.

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

Throws `TypeError` if the string is not a valid HL7v2 timestamp.

### `Timestamp.from(date: Date, options?: TimestampOptions): Timestamp`

Creates a `Timestamp` from a JavaScript `Date` object.

```typescript
const date = new Date(2026, 2, 7, 14, 30, 45, 123);

Timestamp.from(date).toString(); // "20260307143045"
Timestamp.from(date, { precision: "day" }).toString(); // "20260307"
Timestamp.from(date, { precision: "millisecond" }).toString(); // "20260307143045.123"
Timestamp.from(date, { timezone: true }).toString(); // "20260307143045+0000"
```

Throws `TypeError` if the `Date` is invalid (`NaN`).

### `Timestamp.now(options?: TimestampOptions): Timestamp`

Creates a `Timestamp` for the current time.

```typescript
Timestamp.now().toString(); // "20260307143045"
Timestamp.now({ precision: "day" }).toString(); // "20260307"
Timestamp.now({ precision: "minute" }).toString(); // "202603071430"
Timestamp.now({ timezone: true }).toString(); // "20260307143045+0000"
```

### Instance properties

#### `precision: Precision`

The precision level of the timestamp. One of: `"year"`, `"month"`, `"day"`, `"hour"`, `"minute"`, `"second"`, `"millisecond"`.

### Instance methods

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
import { Precision } from "@glion/util-timestamp";

Precision.Year; // "year"        → YYYY
Precision.Month; // "month"       → YYYYMM
Precision.Day; // "day"         → YYYYMMDD
Precision.Hour; // "hour"        → YYYYMMDDHH
Precision.Minute; // "minute"      → YYYYMMDDHHmm
Precision.Second; // "second"      → YYYYMMDDHHmmss
Precision.Millisecond; // "millisecond" → YYYYMMDDHHmmss.SSSS
```

### Error handling

All invalid input throws `TypeError` with a descriptive message:

```typescript
Timestamp.parse(""); // TypeError: Invalid HL7v2 timestamp: ""
Timestamp.parse("not-a-timestamp"); // TypeError: Invalid HL7v2 timestamp: "not-a-timestamp"
Timestamp.parse("20263"); // TypeError: Invalid HL7v2 timestamp: "20263"
Timestamp.from(new Date("invalid")); // TypeError: Invalid Date provided to Timestamp.from
```

## Precision model

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

### Timezone handling

Timezone information is embedded directly in the `Date` object — not stored as separate public metadata. This ensures `toDate()` always returns the correct absolute moment, and `toString()` always reproduces the original timezone for lossless round-tripping.

When an HL7v2 timestamp includes a timezone offset (`+/-ZZZZ`), the offset is applied during parsing to construct a `Date` with the correct UTC instant:

```typescript
// 14:30:45 in UTC-5 → Date stores 19:30:45 UTC
Timestamp.parse("20260307143045-0500").toDate().toISOString();
// "2026-03-07T19:30:45.000Z"

// 14:30:45 in UTC+5:30 → Date stores 09:00:45 UTC
Timestamp.parse("20260307143045+0530").toDate().toISOString();
// "2026-03-07T09:00:45.000Z"

// Midnight in UTC+5:30 → previous day in UTC
Timestamp.parse("20260101000000+0530").toDate().toISOString();
// "2025-12-31T18:30:00.000Z"
```

Parsed timestamps with timezone offsets round-trip exactly, regardless of the server's timezone:

```typescript
Timestamp.parse("20260307143045-0500").toString(); // "20260307143045-0500"
Timestamp.parse("20260307143045+0530").toString(); // "20260307143045+0530"
Timestamp.parse("20261231235959.999-0800").toString(); // "20261231235959.999-0800"
```

When using `from()` or `now()` with `{ timezone: true }`, the runtime's local timezone offset is captured at creation time:

```typescript
const ts = Timestamp.from(new Date(), { timezone: true });
ts.toString(); // "20260307143045-0500" (on a UTC-5 server)
```

Timestamps without a timezone offset are treated as local time — no UTC conversion is applied:

```typescript
const ts = Timestamp.parse("20260307143045");
// Date is constructed with new Date(2026, 2, 7, 14, 30, 45) — local time
```

### Precision gate on timezone

Timezone is only included at `"hour"` precision or finer. Coarser precisions (`"year"`, `"month"`, `"day"`) never carry a timezone suffix:

```typescript
Timestamp.from(date, { precision: "day", timezone: true }).toString();
// "20260307" — no timezone (day precision is too coarse)

Timestamp.from(date, { precision: "hour", timezone: true }).toString();
// "2026030714-0500" — timezone included
```

## Part of Glion

`@glion/util-timestamp` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
