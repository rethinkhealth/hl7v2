import { VersionParseError } from "./errors";
import type { Hl7Version } from "./types";
import { MAX_SAFE_VERSION_COMPONENT, MAX_VERSION_STRING_LENGTH } from "./types";

// Regex for parsing version strings
const VERSION_RE = /^\s*(\d+)(?:\.(\d+))?(?:\.(\d+))?\s*$/;

/**
 * Parses a version string into a structured version object.
 *
 * @param input - Version string to parse (e.g., "2.5.1", "2.3", "2")
 * @returns Structured version with major, minor, and patch components
 * @throws {VersionParseError} If the input format is invalid or exceeds safety limits
 *
 * @example
 * ```typescript
 * const v = parse("2.5.1");
 * // => { major: 2, minor: 5, patch: 1 }
 *
 * parse("2");
 * // => { major: 2, minor: 0, patch: 0 }
 *
 * parse("HELLO");
 * // => throws VersionParseError
 * ```
 */
export function parse(input: string): Hl7Version {
  // Length check to prevent ReDoS attacks
  if (input.length > MAX_VERSION_STRING_LENGTH) {
    throw new VersionParseError(
      `${input.slice(0, 50)}...`,
      `version string too long (max ${MAX_VERSION_STRING_LENGTH} characters)`
    );
  }

  const match = VERSION_RE.exec(input);
  if (!match) {
    throw new VersionParseError(
      input,
      "expected format: major.minor.patch (e.g., '2.5.1' or '2.3')"
    );
  }

  // Regex ensures digits-only, Number() on digits always yields valid integers
  const major = Number(match[1]);
  const minor = match[2] === undefined ? 0 : Number(match[2]);
  const patch = match[3] === undefined ? 0 : Number(match[3]);

  // Validate range to prevent integer overflow and ensure interoperability
  if (major > MAX_SAFE_VERSION_COMPONENT) {
    throw new VersionParseError(
      input,
      `major version ${major} exceeds maximum ${MAX_SAFE_VERSION_COMPONENT}`
    );
  }
  if (minor > MAX_SAFE_VERSION_COMPONENT) {
    throw new VersionParseError(
      input,
      `minor version ${minor} exceeds maximum ${MAX_SAFE_VERSION_COMPONENT}`
    );
  }
  if (patch > MAX_SAFE_VERSION_COMPONENT) {
    throw new VersionParseError(
      input,
      `patch version ${patch} exceeds maximum ${MAX_SAFE_VERSION_COMPONENT}`
    );
  }

  return { major, minor, patch };
}

/**
 * Converts a version string to canonical format (major.minor.patch).
 *
 * @param input - Version string to clean
 * @returns Canonical version string
 * @throws {VersionParseError} If the input format is invalid
 *
 * @example
 * ```typescript
 * clean("2");      // => "2.0.0"
 * clean("2.5");    // => "2.5.0"
 * clean(" 2.5 ");  // => "2.5.0"
 * ```
 */
export function clean(input: string): string {
  const v = parse(input);
  return `${v.major}.${v.minor}.${v.patch}`;
}

/**
 * Checks if a string is a valid version format.
 * This function never throws - use it for validation.
 *
 * @param input - Version string to validate
 * @returns true if valid, false otherwise
 *
 * @example
 * ```typescript
 * valid("2.5.1");  // => true
 * valid("2");      // => true
 * valid("HELLO");  // => false
 * valid("2.");     // => false
 * ```
 */
export function valid(input: string): boolean {
  try {
    parse(input);
    return true;
  } catch {
    return false;
  }
}

/**
 * Internal helper to ensure a value is a parsed Hl7Version object.
 * Parses strings, returns objects as-is.
 *
 * @internal
 */
export function ensure(v: string | Hl7Version): Hl7Version {
  if (typeof v === "string") {
    return parse(v);
  }
  return v;
}

/**
 * Increments a version component and resets all lower components to zero.
 *
 * @param version - Version string to increment
 * @param release - Component to increment: 'major', 'minor', or 'patch'
 * @returns New version string with incremented component
 * @throws {VersionParseError} If version string is invalid
 *
 * @example
 * ```typescript
 * increment("2.5.1", "major");  // => "3.0.0"
 * increment("2.5.1", "minor");  // => "2.6.0"
 * increment("2.5.1", "patch");  // => "2.5.2"
 *
 * // Works with partial versions too
 * increment("2", "minor");      // => "2.1.0"
 * increment("2.5", "patch");    // => "2.5.1"
 * ```
 */
export function increment(
  version: string,
  release: "major" | "minor" | "patch"
): string {
  const v = parse(version);

  switch (release) {
    case "major":
      return `${v.major + 1}.0.0`;
    case "minor":
      return `${v.major}.${v.minor + 1}.0`;
    case "patch":
      return `${v.major}.${v.minor}.${v.patch + 1}`;
  }
}
