import type { GroupLocator, PathParts } from "./types";

/**
 * Canonical HL7 path grammar, every step separated with `.`:
 *
 * [GROUP[N].]...NAME[N][.FIELD[REPETITION][.COMPONENT[.SUBCOMPONENT]]]
 *
 * Names start with a letter and field references are numbers, so the first
 * numeric step is the field. The final name is the query target. Field
 * access makes it a segment (`ORDER.ORC.1`); without it the AST decides
 * whether it names a segment or a group (`ORDER.ORC`, `ORDER`).
 */
const PATH_REGEX =
  /^([A-Z][A-Z0-9_]*(?:\[\d+\])?(?:\.[A-Z][A-Z0-9_]*(?:\[\d+\])?)*)(?:\.(\d+)(?:\[(\d+)\])?(?:\.(\d+)(?:\.(\d+))?)?)?$/;

const NAVIGATION_STEP_REGEX = /([A-Z][A-Z0-9_]*)(?:\[(\d+)\])?/g;

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
// oxlint-disable-next-line complexity/complexity -- path grammar: one branch per optional path part
export function parse(path: string): PathParts {
  if (!path || typeof path !== "string") {
    throw new Error(`Path must be a non-empty string, got: ${path}`);
  }

  const trimmed = path.trim();
  if (trimmed !== path) {
    throw new Error(`Path cannot contain leading/trailing spaces: "${path}"`);
  }

  const match = PATH_REGEX.exec(path);
  if (!match) {
    const dotted = path.replaceAll("-", ".");
    if (PATH_REGEX.test(dotted)) {
      throw new Error(
        `Path \`${path}\` separates its steps with \`-\`; a path separates segment groups, the segment, and its field with \`.\`, as in \`${dotted}\`.`
      );
    }
    throw new Error(
      `Invalid HL7 path format: "${path}". Expected [GROUP[N].]...NAME[N][.FIELD[REPETITION][.COMPONENT[.SUBCOMPONENT]]].`
    );
  }

  const [
    ,
    // Stryker disable next-line StringLiteral: the first capture group is set whenever PATH_REGEX matches
    navigation = "",
    fieldStr,
    repetitionStr,
    componentStr,
    subcomponentStr,
  ] = match;

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
