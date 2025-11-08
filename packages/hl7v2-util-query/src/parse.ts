import type { GroupLocator, PathParts } from "./types";

/**
 * Regular expression for canonical HL7 paths.
 *
 * Format: [GROUP[N]-]...[GROUP[N]-]NAME[N][-FIELD[REPETITION][.COMPONENT[.SUBCOMPONENT]]]
 *
 * **Design Philosophy**: Groups vs Segments are distinguished by POSITION and USAGE, not name length:
 *
 * - **Navigation (Groups)**: Names appearing as prefixes (before the final name) are treated
 *   as group navigation: `ORDER-ORC`, `ORDER-TIMING-TQ1`
 *
 * - **Target (Segments)**: The final name in the path is the query target. Whether it's a
 *   segment or group is determined by:
 *   1. Field access (-.digit): Definitively a segment → `ORC-1`, `ORDER-ORC-1`
 *   2. No field access: Query the AST to see what exists → `ORC`, `ORDER`
 *
 * This approach:
 * - Makes no assumptions about name length (works with standard 3-char segments AND edge cases)
 * - Lets the path structure indicate intent (field access = segment internals)
 * - Allows the AST to be the source of truth for what exists
 *
 * Examples:
 * - `MSH-3` → MSH is segment (has field access)
 * - `ORDER-ORC` → ORDER is navigation, ORC is target (could be segment or nested group)
 * - `ORDER-ORC-1` → ORDER is navigation, ORC is segment (has field access)
 */
const PATH_REGEX =
  /^((?:[A-Z][A-Z0-9]*(?:\[\d+\])?-)*)([A-Z][A-Z0-9]*)(?:\[(\d+)\])?(?:-(\d+)(?:(?:\[(\d+)\])?(?:\.(\d+)(?:\.(\d+))?)?)?)?$/;

/**
 * Maximum number of entries to keep in the path parse cache.
 * Exported for transparency and testing.
 */
export const PARSE_CACHE_LIMIT = 1000;

/**
 * Cache for parsed paths to avoid re-parsing the same path multiple times.
 * Implements a simple LRU eviction strategy to avoid unbounded growth.
 */
const parseCache = new Map<string, PathParts>();

function getCachedPath(path: string): PathParts | undefined {
  const cached = parseCache.get(path);
  if (!cached) {
    return;
  }
  // Refresh position for LRU behavior
  parseCache.delete(path);
  parseCache.set(path, cached);
  return cached;
}

function setCachedPath(path: string, parts: PathParts): void {
  if (parseCache.has(path)) {
    parseCache.delete(path);
  }

  parseCache.set(path, parts);

  if (parseCache.size > PARSE_CACHE_LIMIT) {
    const oldestKey = parseCache.keys().next().value;
    if (oldestKey !== undefined) {
      parseCache.delete(oldestKey);
    }
  }
}

export function clearParseCache(): void {
  parseCache.clear();
}

export function getParseCacheSize(): number {
  return parseCache.size;
}

/**
 * Parse an HL7 path string into structured parts.
 * Results are memoized for performance.
 *
 * @param path - HL7 path string to parse
 * @returns Structured path components
 *
 * @example
 * ```typescript
 * parse('PID-5[1].2.1');
 * // {
 * //   segment: { name: 'PID' },
 * //   field: 5,
 * //   repetition: 1,
 * //   component: 2,
 * //   subcomponent: 1
 * // }
 * ```
 */
export function parse(path: string): PathParts {
  // Check cache first
  const cached = getCachedPath(path);
  if (cached) {
    return cached;
  }

  const result = parseImpl(path);
  setCachedPath(path, result);
  return result;
}

/**
 * Internal implementation of path parsing.
 */
// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: fine
function parseImpl(path: string): PathParts {
  if (!path || typeof path !== "string") {
    throw new Error(`Path must be a non-empty string, got: ${path}`);
  }

  const trimmed = path.trim();
  if (trimmed !== path) {
    throw new Error(`Path cannot contain leading/trailing spaces: "${path}"`);
  }

  const match = PATH_REGEX.exec(path);
  if (!match) {
    throw new Error(
      `Invalid HL7 path format: "${path}". Expected [GROUP[N]-]...NAME[N][-FIELD[REPETITION][.COMPONENT[.SUBCOMPONENT]]].`
    );
  }

  const [
    ,
    groupsRaw,
    segmentName,
    segmentRep,
    fieldStr,
    repetitionStr,
    componentStr,
    subcomponentStr,
  ] = match;

  if (!segmentName) {
    throw new Error(`Path must include a segment identifier: "${path}"`);
  }

  const parts: PathParts = {
    segment: { name: segmentName },
  };

  if (segmentRep) {
    const repetition = Number.parseInt(segmentRep, 10);
    if (repetition < 1) {
      throw new Error(
        `Segment repetition must be ≥1, got: ${segmentRep} in "${path}"`
      );
    }
    parts.segment.repetition = repetition;
  }

  if (groupsRaw) {
    const groups: GroupLocator[] = [];
    for (const groupMatch of groupsRaw.matchAll(
      /([A-Z][A-Z0-9]*)(?:\[(\d+)\])?-/g
    )) {
      const name = groupMatch[1];
      if (!name) {
        continue;
      }

      const repStr = groupMatch[2];
      const group: GroupLocator = { name };
      if (repStr) {
        const repetition = Number.parseInt(repStr, 10);
        if (repetition < 1) {
          throw new Error(
            `Group repetition must be ≥1, got: ${repStr} in "${path}"`
          );
        }
        group.repetition = repetition;
      }
      groups.push(group);
    }
    if (groups.length > 0) {
      parts.groups = groups;
    }
  }

  if (fieldStr) {
    const field = Number.parseInt(fieldStr, 10);
    if (field < 1) {
      throw new Error(`Field number must be ≥1, got: ${fieldStr}`);
    }
    parts.field = field;
  }

  if (repetitionStr) {
    const repetition = Number.parseInt(repetitionStr, 10);
    if (repetition < 1) {
      throw new Error(`Repetition number must be ≥1, got: ${repetitionStr}`);
    }
    parts.repetition = repetition;
  }

  if (componentStr) {
    const component = Number.parseInt(componentStr, 10);
    if (component < 1) {
      throw new Error(`Component number must be ≥1, got: ${componentStr}`);
    }
    parts.component = component;
  }

  if (subcomponentStr) {
    const subcomponent = Number.parseInt(subcomponentStr, 10);
    if (subcomponent < 1) {
      throw new Error(
        `Subcomponent number must be ≥1, got: ${subcomponentStr}`
      );
    }
    parts.subcomponent = subcomponent;
  }

  return parts;
}
