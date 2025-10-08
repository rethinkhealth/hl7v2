import type {
  Field,
  FieldRepetition,
  Group,
  Nodes,
  Root,
  Segment,
  SegmentHeader,
  Subcomponent,
} from "@rethinkhealth/hl7v2-ast";
import type { GroupLocator, PathParts } from "./types";

// -------------
// Path Parsing
// -------------

/**
 * Regular expression for canonical HL7 paths.
 *
 * Format: [GROUP[N]-]...[GROUP[N]-]SEGMENT[N][-FIELD[REPETITION][.COMPONENT[.SUBCOMPONENT]]]
 */
const PATH_REGEX =
  /^((?:[A-Z][A-Z0-9]*(?:\[\d+\])?-)*)([A-Z][A-Z0-9]{1,3})(?:\[(\d+)\])?(?:-(\d+)(?:(?:\[(\d+)\])?(?:\.(\d+)(?:\.(\d+))?)?)?)?$/;

/**
 * Parse an HL7 path string into structured parts.
 */
// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: fine
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
    throw new Error(
      `Invalid HL7 path format: "${path}". Expected [GROUP[N]-]...SEGMENT[N][-FIELD[REPETITION][.COMPONENT[.SUBCOMPONENT]]]`
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

// -------------
// Query Helpers
// -------------

/**
 * Find the node at the given path. Returns null when the path cannot be resolved.
 */
export function find<T extends Nodes = Nodes>(
  root: Root,
  path: string
): T | null {
  const parts = parse(path);

  const segment = locateSegment(root, parts);
  if (!segment) {
    return null;
  }

  if (parts.field === undefined) {
    return segment as T;
  }

  const fieldNode = locateField(segment, parts.field);
  if (!fieldNode) {
    return null;
  }

  if (
    parts.component === undefined &&
    parts.subcomponent === undefined &&
    parts.repetition === undefined
  ) {
    return fieldNode as T;
  }

  const repetitionNode = locateRepetition(fieldNode, parts.repetition ?? 1);
  if (!repetitionNode) {
    return null;
  }

  if (parts.component === undefined) {
    return repetitionNode as T;
  }

  const componentNode = locateComponent(repetitionNode, parts.component);
  if (!componentNode) {
    return null;
  }

  if (parts.subcomponent === undefined) {
    return componentNode as T;
  }

  const sub = locateSubcomponent(componentNode, parts.subcomponent);
  return (sub as T | null) ?? null;
}

/**
 * Returns true when the path resolves to an existing node.
 */
export function has(root: Root, path: string): boolean {
  return find(root, path) !== null;
}

/**
 * Returns the string value at the path, drilling down through single-child nodes when needed.
 */
export function value(root: Root, path: string): string | null {
  const node = find(root, path);
  if (!node) {
    return null;
  }

  let current: Nodes = node;
  while (current.type !== "subcomponent") {
    if (!("children" in current)) {
      return null;
    }

    if (!current.children || current.children.length === 0) {
      return null;
    }

    if (current.children.length > 1) {
      return null;
    }

    const next = current.children[0];
    if (!next) {
      return null;
    }
    current = next;
  }

  return (current as Subcomponent).value ?? null;
}

// -------------
// Internal
// -------------

function locateSegment(root: Root, parts: PathParts): Segment | null {
  const scope = followGroups(root, parts.groups ?? []);
  if (!scope) {
    return null;
  }

  const matches = collectSegments(scope, parts.segment.name);
  if (matches.length === 0) {
    return null;
  }

  const index = (parts.segment.repetition ?? 1) - 1;
  return matches[index] ?? null;
}

function followGroups(
  root: Root,
  groups: GroupLocator[]
): Array<Segment | Group> | null {
  let children = filterSegmentsAndGroups(root.children);

  for (const locator of groups) {
    const matches = children.filter(
      (node): node is Group =>
        node.type === "group" && node.name === locator.name
    );

    if (matches.length === 0) {
      return null;
    }

    const index = (locator.repetition ?? 1) - 1;
    const selected = matches[index];
    if (!selected) {
      return null;
    }

    children = filterSegmentsAndGroups(selected.children);
  }

  return children;
}

function collectSegments(
  nodes: Array<Segment | Group>,
  segmentName: string
): Segment[] {
  const result: Segment[] = [];

  for (const node of nodes) {
    if (node.type === "segment") {
      const name = getSegmentName(node);
      if (name === segmentName) {
        result.push(node);
      }
    }

    if (node.type === "group") {
      result.push(
        ...collectSegments(filterSegmentsAndGroups(node.children), segmentName)
      );
    }
  }

  return result;
}

function locateField(segment: Segment, field: number): Field | null {
  const fields = getFields(segment);
  return fields[field - 1] ?? null;
}

function locateRepetition(
  field: Field,
  repetition: number
): FieldRepetition | null {
  if (repetition < 1) {
    return null;
  }

  const node = field.children?.[repetition - 1];
  return (node as FieldRepetition | undefined) ?? null;
}

function locateComponent(
  repetition: FieldRepetition,
  component: number
): Nodes | null {
  if (component < 1) {
    return null;
  }

  return repetition.children?.[component - 1] ?? null;
}

function locateSubcomponent(
  component: Nodes,
  subcomponent: number
): Subcomponent | null {
  if (component.type !== "component" || subcomponent < 1) {
    return null;
  }

  const node = component.children?.[subcomponent - 1];
  return (node as Subcomponent | undefined) ?? null;
}

function getSegmentName(segment: Segment): string {
  const header = segment.children[0] as SegmentHeader | undefined;
  return header?.value ?? "";
}

function getFields(segment: Segment): Field[] {
  const [, ...rest] = segment.children as [SegmentHeader, ...Field[]];
  return rest;
}

function filterSegmentsAndGroups(nodes: Nodes[]): Array<Segment | Group> {
  return nodes.filter(
    (node): node is Segment | Group =>
      node.type === "segment" || node.type === "group"
  );
}
