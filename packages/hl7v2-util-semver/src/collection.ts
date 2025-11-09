import { compare } from "./compare";
import { satisfies } from "./range";

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
 * @param range - Range expression to match against
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
 * maxSatisfying([], ">=2.0");
 * // => null (empty array)
 * ```
 */
export function maxSatisfying(
  versions: string[],
  range: string
): string | null {
  const matching = versions.filter((v) => satisfies(v, range));
  if (matching.length === 0) {
    return null;
  }

  // Sort and return the last (highest) version
  const sorted = sort(matching);
  return sorted.at(-1) ?? null;
}

/**
 * Finds the lowest version that satisfies a range.
 *
 * @param versions - Array of version strings to search
 * @param range - Range expression to match against
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
 * minSatisfying([], ">=2.0");
 * // => null (empty array)
 * ```
 */
export function minSatisfying(
  versions: string[],
  range: string
): string | null {
  const matching = versions.filter((v) => satisfies(v, range));
  if (matching.length === 0) {
    return null;
  }

  // Sort and return the first (lowest) version
  const sorted = sort(matching);
  return sorted[0] ?? null;
}
