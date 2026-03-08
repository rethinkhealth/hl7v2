/**
 * HL7v2 timestamp precision levels.
 *
 * Controls how much of the timestamp is included when formatting.
 * Precision is progressive — higher precision includes all lower levels.
 *
 * | Precision       | Format                  | Example            |
 * |-----------------|-------------------------|--------------------|
 * | `Year`          | `YYYY`                  | `2026`             |
 * | `Month`         | `YYYYMM`                | `202603`           |
 * | `Day`           | `YYYYMMDD`              | `20260307`         |
 * | `Hour`          | `YYYYMMDDHH`            | `2026030714`       |
 * | `Minute`        | `YYYYMMDDHHmm`          | `202603071430`     |
 * | `Second`        | `YYYYMMDDHHmmss`        | `20260307143000`   |
 * | `Millisecond`   | `YYYYMMDDHHmmss.SSSS`   | `20260307143000.1234` |
 */
// oxlint-disable-next-line sort-keys
export const Precision = {
  Year: "year",
  Month: "month",
  Day: "day",
  Hour: "hour",
  Minute: "minute",
  Second: "second",
  Millisecond: "millisecond",
} as const;

export type Precision = (typeof Precision)[keyof typeof Precision];
