import { QueryError } from "./errors";
import type { GroupLocator, PathParts, SegmentLocator } from "./types";

/**
 * Canonical HL7 path grammar, every step separated with `.`:
 *
 * [GROUP[N].]...NAME[N][.FIELD[REPETITION][.COMPONENT[.SUBCOMPONENT]]]
 *
 * Names start with a letter and positions are numbers from 1, so the first
 * numeric step is the field. The final name is the query target. Field
 * access makes it a segment (`ORDER.ORC.1`); without it the AST decides
 * whether it names a segment or a group (`ORDER.ORC`, `ORDER`).
 */
const PATH_REGEX =
  /^([A-Z][A-Z0-9_]*(?:\[[1-9]\d*\])?(?:\.[A-Z][A-Z0-9_]*(?:\[[1-9]\d*\])?)*)(?:\.([1-9]\d*)(?:\[([1-9]\d*)\])?(?:\.([1-9]\d*)(?:\.([1-9]\d*))?)?)?$/;

const NAVIGATION_STEP_REGEX = /([A-Z][A-Z0-9_]*)(?:\[(\d+)\])?/g;

/** Parts of the MSH paths that plugins and lint rules read on every message. */
const PRECOMPUTED_PATHS = new Map<string, () => PathParts>([
  ["MSH.3", () => ({ field: 3, segment: { name: "MSH" } })],
  ["MSH.4", () => ({ field: 4, segment: { name: "MSH" } })],
  ["MSH.5", () => ({ field: 5, segment: { name: "MSH" } })],
  ["MSH.6", () => ({ field: 6, segment: { name: "MSH" } })],
  ["MSH.9", () => ({ field: 9, segment: { name: "MSH" } })],
  ["MSH.9.1", () => ({ component: 1, field: 9, segment: { name: "MSH" } })],
  ["MSH.9.2", () => ({ component: 2, field: 9, segment: { name: "MSH" } })],
  ["MSH.9.3", () => ({ component: 3, field: 9, segment: { name: "MSH" } })],
  ["MSH.10", () => ({ field: 10, segment: { name: "MSH" } })],
  ["MSH.12", () => ({ field: 12, segment: { name: "MSH" } })],
  ["MSH.12.1", () => ({ component: 1, field: 12, segment: { name: "MSH" } })],
]);

/**
 * Parse an HL7 path string into structured parts.
 *
 * Returns a new object on every call.
 *
 * @example
 *   ```typescript
 *   parse("PID.5[1].2.1");
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
  const precomputed = PRECOMPUTED_PATHS.get(path);
  // Stryker disable next-line ConditionalExpression,BlockStatement: the grammar parses a precomputed path to the same parts
  if (precomputed) {
    return precomputed();
  }

  if (path === "") {
    throw new QueryError("EMPTY_PATH", path);
  }

  const match = PATH_REGEX.exec(path);
  if (!match) {
    throw new QueryError("INVALID_PATH", path);
  }

  const [, navigation, field, repetition, component, subcomponent] = match;
  const steps: GroupLocator[] = [];
  for (const [, name, position] of (navigation as string).matchAll(
    NAVIGATION_STEP_REGEX
  )) {
    steps.push(
      position === undefined
        ? { name: name as string }
        : { name: name as string, repetition: Number(position) }
    );
  }

  const parts: PathParts = { segment: steps.pop() as SegmentLocator };
  if (steps.length > 0) {
    parts.groups = steps;
  }
  if (field !== undefined) {
    parts.field = Number(field);
  }
  if (repetition !== undefined) {
    parts.repetition = Number(repetition);
  }
  if (component !== undefined) {
    parts.component = Number(component);
  }
  if (subcomponent !== undefined) {
    parts.subcomponent = Number(subcomponent);
  }
  return parts;
}
