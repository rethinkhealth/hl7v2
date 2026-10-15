/**
 * How much of a date and time an HL7v2 value gives, from the year down to the
 * second. Digits after the second are carried by `fraction`.
 *
 * | Precision | DTM written as   | Example          |
 * | --------- | ---------------- | ---------------- |
 * | `year`    | `YYYY`           | `2026`           |
 * | `month`   | `YYYYMM`         | `202603`         |
 * | `day`     | `YYYYMMDD`       | `20260307`       |
 * | `hour`    | `YYYYMMDDHH`     | `2026030714`     |
 * | `minute`  | `YYYYMMDDHHMM`   | `202603071430`   |
 * | `second`  | `YYYYMMDDHHMMSS` | `20260307143045` |
 */
// oxlint-disable-next-line sort-keys
export const Precision = {
  Year: "year",
  Month: "month",
  Day: "day",
  Hour: "hour",
  Minute: "minute",
  Second: "second",
} as const;

export type Precision = (typeof Precision)[keyof typeof Precision];
