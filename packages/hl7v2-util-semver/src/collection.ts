import { compare } from "./compare";
import { type Range, satisfies } from "./range";

/**
 * Sorts an array of version strings in ascending order.
 *
 * @param versions - Array of version strings to sort
 * @returns New sorted array (does not mutate input)
 * @throws {VersionParseError} If any version string is invalid
 *
 * @example
 * ```typescript
 * sort(["2.5", "2.3.1", "2.10.0"]);
 * // => ["2.3.1", "2.5", "2.10.0"]
 *
 * sort(["2.10", "2.9", "2.8"]);
 * // => ["2.8", "2.9", "2.10"]
 * ```
 */
export function sort(versions: string[]): string[] {
  return [...versions].sort((a, b) => compare(a, b));
}

/**
 * Finds the highest version that satisfies a range.
 *
 * @param versions - Array of version strings to search
 * @param range - Range expression string or pre-parsed Range object
 * @returns Highest matching version, or null if none match
 * @throws {VersionParseError} If any version string is invalid
 * @throws {RangeParseError} If range expression is invalid
 *
 * @example
 * ```typescript
 * maxSatisfying(["2.3.0", "2.5.1", "3.0.0"], ">=2.0 <3.0");
 * // => "2.5.1"
 *
 * maxSatisfying(["2.3.0", "2.5.1"], ">=3.0");
 * // => null (no matches)
 *
 * // Use Range object for better performance with many versions
 * const range = new Range(">=2.0 <3.0");
 * maxSatisfying(["2.3.0", "2.5.1", "3.0.0"], range);
 * // => "2.5.1"
 * ```
 */
export function maxSatisfying(
  versions: string[],
  range: string | Range
): string | null {
  let max: string | null = null;

  for (const version of versions) {
    if (
      satisfies(version, range) &&
      (max === null || compare(version, max) === 1)
    ) {
      max = version;
    }
  }

  return max;
}

/**
 * Finds the lowest version that satisfies a range.
 *
 * @param versions - Array of version strings to search
 * @param range - Range expression string or pre-parsed Range object
 * @returns Lowest matching version, or null if none match
 * @throws {VersionParseError} If any version string is invalid
 * @throws {RangeParseError} If range expression is invalid
 *
 * @example
 * ```typescript
 * minSatisfying(["2.3.0", "2.5.1", "3.0.0"], ">=2.0 <3.0");
 * // => "2.3.0"
 *
 * minSatisfying(["2.3.0", "2.5.1"], ">=3.0");
 * // => null (no matches)
 *
 * // Use Range object for better performance with many versions
 * const range = new Range(">=2.0 <3.0");
 * minSatisfying(["2.3.0", "2.5.1", "3.0.0"], range);
 * // => "2.3.0"
 * ```
 */
export function minSatisfying(
  versions: string[],
  range: string | Range
): string | null {
  let min: string | null = null;

  for (const version of versions) {
    if (
      satisfies(version, range) &&
      (min === null || compare(version, min) === -1)
    ) {
      min = version;
    }
  }

  return min;
}
