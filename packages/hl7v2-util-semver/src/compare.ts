import { ensure } from "./parse";
import type { ComparisonResult, Hl7Version } from "./types";

/**
 * Compares two versions and returns their relationship.
 *
 * @param a - First version (string or parsed object)
 * @param b - Second version (string or parsed object)
 * @returns -1 if a < b, 0 if a = b, 1 if a > b
 * @throws {VersionParseError} If either input is an invalid version string
 *
 * @example
 * ```typescript
 * compare("2.5.1", "2.5.0");  // => 1
 * compare("2.3", "2.5");      // => -1
 * compare("2.5.1", "2.5.1");  // => 0
 *
 * // Works with parsed versions too
 * const v1 = parse("2.5.1");
 * const v2 = parse("2.5.0");
 * compare(v1, v2);  // => 1
 * ```
 */
export function compare(
  a: string | Hl7Version,
  b: string | Hl7Version
): ComparisonResult {
  const va = ensure(a);
  const vb = ensure(b);

  // Compare in order: major, minor, patch
  for (const key of ["major", "minor", "patch"] as const) {
    if (va[key] !== vb[key]) {
      return va[key] < vb[key] ? -1 : 1;
    }
  }
  return 0;
}

/**
 * Checks if two versions are equal.
 *
 * @param a - First version (string or parsed object)
 * @param b - Second version (string or parsed object)
 * @returns true if versions are equal, false otherwise
 * @throws {VersionParseError} If either input is an invalid version string
 *
 * @example
 * ```typescript
 * eq("2.5.1", "2.5.1");  // => true
 * eq("2.5", "2.5.0");    // => true (normalized)
 * eq("2.5.1", "2.5.0");  // => false
 * ```
 */
export function eq(a: string | Hl7Version, b: string | Hl7Version): boolean {
  return compare(a, b) === 0;
}

/**
 * Checks if first version is less than second version.
 *
 * @param a - First version (string or parsed object)
 * @param b - Second version (string or parsed object)
 * @returns true if a < b, false otherwise
 * @throws {VersionParseError} If either input is an invalid version string
 *
 * @example
 * ```typescript
 * lt("2.3.0", "2.5.1");  // => true
 * lt("2.5.1", "2.5.1");  // => false
 * lt("2.5.1", "2.3.0");  // => false
 * ```
 */
export function lt(a: string | Hl7Version, b: string | Hl7Version): boolean {
  return compare(a, b) === -1;
}

/**
 * Checks if first version is less than or equal to second version.
 *
 * @param a - First version (string or parsed object)
 * @param b - Second version (string or parsed object)
 * @returns true if a <= b, false otherwise
 * @throws {VersionParseError} If either input is an invalid version string
 *
 * @example
 * ```typescript
 * lte("2.3.0", "2.5.1");  // => true
 * lte("2.5.1", "2.5.1");  // => true
 * lte("2.5.1", "2.3.0");  // => false
 * ```
 */
export function lte(a: string | Hl7Version, b: string | Hl7Version): boolean {
  return compare(a, b) !== 1;
}

/**
 * Checks if first version is greater than second version.
 *
 * @param a - First version (string or parsed object)
 * @param b - Second version (string or parsed object)
 * @returns true if a > b, false otherwise
 * @throws {VersionParseError} If either input is an invalid version string
 *
 * @example
 * ```typescript
 * gt("2.5.1", "2.3.0");  // => true
 * gt("2.5.1", "2.5.1");  // => false
 * gt("2.3.0", "2.5.1");  // => false
 * ```
 */
export function gt(a: string | Hl7Version, b: string | Hl7Version): boolean {
  return compare(a, b) === 1;
}

/**
 * Checks if first version is greater than or equal to second version.
 *
 * @param a - First version (string or parsed object)
 * @param b - Second version (string or parsed object)
 * @returns true if a >= b, false otherwise
 * @throws {VersionParseError} If either input is an invalid version string
 *
 * @example
 * ```typescript
 * gte("2.5.1", "2.3.0");  // => true
 * gte("2.5.1", "2.5.1");  // => true
 * gte("2.3.0", "2.5.1");  // => false
 * ```
 */
export function gte(a: string | Hl7Version, b: string | Hl7Version): boolean {
  return compare(a, b) !== -1;
}

/**
 * Determines the highest-level component that differs between two versions.
 *
 * @param v1 - First version (string or parsed object)
 * @param v2 - Second version (string or parsed object)
 * @returns 'major', 'minor', 'patch', or null if versions are equal
 * @throws {VersionParseError} If either input is an invalid version string
 *
 * @example
 * ```typescript
 * diff("2.5.1", "3.0.0");  // => "major"
 * diff("2.5.1", "2.6.0");  // => "minor"
 * diff("2.5.1", "2.5.2");  // => "patch"
 * diff("2.5.1", "2.5.1");  // => null (equal)
 *
 * // Works with partial versions
 * diff("2", "2.0.0");      // => null (normalized to same)
 * diff("2.5", "2.6");      // => "minor"
 * ```
 */
export function diff(
  v1: string | Hl7Version,
  v2: string | Hl7Version
): "major" | "minor" | "patch" | null {
  const a = ensure(v1);
  const b = ensure(v2);

  if (a.major !== b.major) {
    return "major";
  }
  if (a.minor !== b.minor) {
    return "minor";
  }
  if (a.patch !== b.patch) {
    return "patch";
  }
  return null;
}
