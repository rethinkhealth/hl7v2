import type { GroupLocator, PathParts } from "./types";

/**
 * Canonical HL7 path grammar:
 *
 * NAVIGATION[-FIELD[REPETITION][.COMPONENT[.SUBCOMPONENT]]]
 *
 * NAVIGATION is `[GROUP[N].]...NAME[N]`: segment groups and the final name,
 * separated with `.`. A path holds at most one `-`, the boundary between a
 * segment and its field, so it splits on the last `-`. Names cannot contain
 * `-`, so the split is unambiguous.
 *
 * The final name is the query target. Field access (`-N`) makes it a segment
 * (`ORDER.ORC-1`); without it the AST decides whether it names a segment or a
 * group (`ORDER.ORC`, `ORDER`).
 */
const NAVIGATION_REGEX =
  /^[A-Z][A-Z0-9_]*(?:\[\d+\])?(?:\.[A-Z][A-Z0-9_]*(?:\[\d+\])?)*$/;

const NAVIGATION_STEP_REGEX = /([A-Z][A-Z0-9_]*)(?:\[(\d+)\])?/g;

const FIELD_REGEX = /^(\d+)(?:\[(\d+)\])?(?:\.(\d+)(?:\.(\d+))?)?$/;

/** A name after a `-`: a group path written with `-` between its steps. */
const NAME_AFTER_DASH_REGEX = /-([A-Z][A-Z0-9_]*)/;

const DASH_BEFORE_NAME_REGEX = /-(?=[A-Z])/g;

/**
 * Cache for parsed paths to avoid re-parsing the same path multiple times.
 * No eviction — the realistic set of unique paths in an application is
 * small (50-100 entries) and the memory cost is negligible.
 */
const parseCache = new Map<string, PathParts>();

export function clearParseCache(): void {
  parseCache.clear();
}

export function getParseCacheSize(): number {
  return parseCache.size;
}

/**
 * Pre-computed PathParts for frequently accessed MSH fields.
 *
 * Multiple plugins and lint rules read MSH-9 (message type) and MSH-12
 * (version) on every message. Skipping regex parsing and cache lookups
 * for these paths eliminates ~100ns per call.
 */
const HOT_PATHS: Record<string, PathParts> = {
  "MSH-10": { field: 10, segment: { name: "MSH" } },
  "MSH-12": { field: 12, segment: { name: "MSH" } },
  "MSH-3": { field: 3, segment: { name: "MSH" } },
  "MSH-4": { field: 4, segment: { name: "MSH" } },
  "MSH-5": { field: 5, segment: { name: "MSH" } },
  "MSH-6": { field: 6, segment: { name: "MSH" } },
  "MSH-9": { field: 9, segment: { name: "MSH" } },
  "MSH-9.1": { component: 1, field: 9, segment: { name: "MSH" } },
  "MSH-9.2": { component: 2, field: 9, segment: { name: "MSH" } },
  "MSH-9.3": { component: 3, field: 9, segment: { name: "MSH" } },
};

/**
 * Parse an HL7 path string into structured parts.
 * Results are memoized for performance. Common MSH paths use
 * pre-computed constants to skip parsing entirely.
 *
 * @example
 *   ```typescript
 *   parse("PID-5[1].2.1");
 *   // {
 *   //   segment: { name: 'PID' },
 *   //   field: 5,
 *   //   repetition: 1,
 *   //   component: 2,
 *   //   subcomponent: 1
 *   // }
 *   ```;
 *
 * @param path - HL7 path string to parse
 * @returns Structured path components
 */
export function parse(path: string): PathParts {
  // Hot path: pre-computed results for common MSH field reads
  const hot = HOT_PATHS[path];
  if (hot) {
    return hot;
  }

  // Check cache
  const cached = parseCache.get(path);
  if (cached) {
    return cached;
  }

  const result = parseImpl(path);
  parseCache.set(path, result);
  return result;
}

/**
 * Internal implementation of path parsing.
 */
// oxlint-disable-next-line complexity/complexity -- path grammar: one branch per optional path part
function parseImpl(path: string): PathParts {
  if (!path || typeof path !== "string") {
    throw new Error(`Path must be a non-empty string, got: ${path}`);
  }

  const trimmed = path.trim();
  if (trimmed !== path) {
    throw new Error(`Path cannot contain leading/trailing spaces: "${path}"`);
  }

  const misplaced = NAME_AFTER_DASH_REGEX.exec(path);
  if (misplaced) {
    throw new Error(
      `Path \`${path}\` names \`${misplaced[1]}\` after a \`-\`, and a \`-\` separates a segment from its field. Segment groups are separated with \`.\`, as in \`${path.replaceAll(DASH_BEFORE_NAME_REGEX, ".")}\`.`
    );
  }

  const dash = path.lastIndexOf("-");
  const navigation = dash === -1 ? path : path.slice(0, dash);
  const fieldMatch =
    // Stryker disable next-line ConditionalExpression,UnaryOperator: without a `-` the whole path starts with a letter, which FIELD_REGEX never matches
    dash === -1 ? null : FIELD_REGEX.exec(path.slice(dash + 1));
  if (!NAVIGATION_REGEX.test(navigation) || (dash !== -1 && !fieldMatch)) {
    throw new Error(
      `Invalid HL7 path format: "${path}". Expected [GROUP[N].]...NAME[N][-FIELD[REPETITION][.COMPONENT[.SUBCOMPONENT]]].`
    );
  }

  const steps = [...navigation.matchAll(NAVIGATION_STEP_REGEX)];
  const [, segmentName, segmentRep] = steps.pop() as RegExpExecArray;
  const parts: PathParts = { segment: { name: segmentName as string } };

  if (segmentRep) {
    const repetition = Number.parseInt(segmentRep, 10);
    if (repetition < 1) {
      throw new Error(
        `Segment repetition must be ≥1, got: ${segmentRep} in "${path}"`
      );
    }
    parts.segment.repetition = repetition;
  }

  if (steps.length > 0) {
    const groups: GroupLocator[] = [];
    for (const [, name, repStr] of steps) {
      const group: GroupLocator = { name: name as string };
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
    parts.groups = groups;
  }

  const [, fieldStr, repetitionStr, componentStr, subcomponentStr] =
    // Stryker disable next-line ArrayDeclaration: the destructure skips the first element
    fieldMatch ?? [];

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
