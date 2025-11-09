import { compare } from "./compare";
import { RangeParseError } from "./errors";
import { parse } from "./parse";
import type { Comparator } from "./types";
import { MAX_RANGE_STRING_LENGTH } from "./types";

// Regex for parsing range tokens
const RANGE_TOKEN_RE = /^(<=|>=|<|>|=)?\s*(\d+(?:\.\d+){0,2})$/;

// Whitespace splitter for range expressions
const WS_RE = /\s+/;

/**
 * Splits a range string into individual tokens.
 * @internal
 */
function splitTokens(range: string): string[] {
  const trimmed = range.trim();
  return trimmed.length === 0 ? [] : trimmed.split(WS_RE);
}

/**
 * Parses a single range token into a comparator.
 * @internal
 */
function parseToken(token: string): Comparator {
  const m = RANGE_TOKEN_RE.exec(token);
  if (!m) {
    throw new RangeParseError(
      token,
      "expected format: [operator]version (e.g., '>=2.5' or '2.3')"
    );
  }

  // m[1] is optional operator, m[2] is required version (guaranteed by regex)
  const op = (m[1] || "=") as Comparator["op"];
  // biome-ignore lint/style/noNonNullAssertion: Non-null assertion safe: regex guarantees m[2] exists
  const v = parse(m[2]!);
  return { op, v };
}

/**
 * Maps comparison operators to test functions.
 * @internal
 */
const OP_TEST: Record<Comparator["op"], (cmp: number) => boolean> = {
  "=": (c) => c === 0,
  "<": (c) => c < 0,
  "<=": (c) => c <= 0,
  ">": (c) => c > 0,
  ">=": (c) => c >= 0,
};

/**
 * Checks if a version satisfies a range expression.
 *
 * Range expressions consist of one or more space-separated comparators.
 * Each comparator is an optional operator followed by a version.
 *
 * Supported operators:
 * - `=` (or no operator): exact match
 * - `<`: less than
 * - `<=`: less than or equal
 * - `>`: greater than
 * - `>=`: greater than or equal
 *
 * Multiple comparators create AND conditions - all must be satisfied.
 *
 * @param version - Version string to test
 * @param range - Range expression (e.g., ">=2.3 <2.6", "2.5", ">=2.0")
 * @returns true if version satisfies all comparators, false for empty range
 * @throws {VersionParseError} If version string is invalid
 * @throws {RangeParseError} If range expression is invalid or exceeds length limit
 *
 * @example
 * ```typescript
 * satisfies("2.5.1", ">=2.0 <3.0");  // => true
 * satisfies("2.5.1", "2.5.1");       // => true (exact match)
 * satisfies("2.5.1", ">=2.6");       // => false
 * satisfies("2.5.1", "");            // => false (empty range)
 *
 * // Multiple conditions (AND)
 * satisfies("2.5.1", ">=2.3 <2.6 !=2.4");  // => true
 * ```
 */
export function satisfies(version: string, range: string): boolean {
  // Length check for range string to prevent ReDoS attacks
  if (range.length > MAX_RANGE_STRING_LENGTH) {
    throw new RangeParseError(
      `${range.slice(0, 50)}...`,
      `range string too long (max ${MAX_RANGE_STRING_LENGTH} characters)`
    );
  }

  const tokens = splitTokens(range);
  if (tokens.length === 0) {
    return false;
  }

  const comps = tokens.map(parseToken);
  const v = parse(version);

  for (const c of comps) {
    const cmp = compare(v, c.v);
    if (!OP_TEST[c.op](cmp)) {
      return false;
    }
  }

  return true;
}
