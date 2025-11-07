import type {
  Component,
  Field,
  FieldRepetition,
  Group,
  Nodes,
  Root,
  Segment,
  SegmentHeader,
  Subcomponent,
} from "@rethinkhealth/hl7v2-ast";
import type { GroupLocator, InferNodeType, PathParts } from "./types";

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
 * Find the node at the given path and return it with its ancestor chain.
 *
 * @param root - The root node to search from
 * @param path - The HL7 path string
 * @returns Object containing the node and its ancestors, or null if not found
 *
 * @example
 * ```typescript
 * const result = find(root, "PID-5");
 * if (result) {
 *   result.node; // Type: Field
 *   result.ancestors; // [Root, Segment]
 * }
 * ```
 */
export function find<Path extends string>(
  root: Root,
  path: Path
): { node: InferNodeType<Path>; ancestors: Nodes[] } | null {
  const parts = parse(path);

  const segmentResult = locateSegment(root, parts);
  if (!segmentResult) {
    return null;
  }
  const [segment, segmentAncestors] = segmentResult;

  if (parts.field === undefined) {
    return {
      node: segment as InferNodeType<Path>,
      ancestors: segmentAncestors,
    };
  }

  const fieldResult = locateField(segment, parts.field, segmentAncestors);
  if (!fieldResult) {
    return null;
  }
  const [field, fieldAncestors] = fieldResult;

  if (
    parts.component === undefined &&
    parts.subcomponent === undefined &&
    parts.repetition === undefined
  ) {
    return {
      node: field as InferNodeType<Path>,
      ancestors: fieldAncestors,
    };
  }

  const repetitionResult = locateRepetition(
    field,
    parts.repetition ?? 1,
    fieldAncestors
  );
  if (!repetitionResult) {
    return null;
  }
  const [repetitionNode, repetitionAncestors] = repetitionResult;

  if (parts.component === undefined) {
    return {
      node: repetitionNode as InferNodeType<Path>,
      ancestors: repetitionAncestors,
    };
  }

  const componentResult = locateComponent(
    repetitionNode,
    parts.component,
    repetitionAncestors
  );
  if (!componentResult) {
    return null;
  }
  const [componentNode, componentAncestors] = componentResult;

  if (parts.subcomponent === undefined) {
    return {
      node: componentNode as InferNodeType<Path>,
      ancestors: componentAncestors,
    };
  }

  const subResult = locateSubcomponent(
    componentNode,
    parts.subcomponent,
    componentAncestors
  );
  if (!subResult) {
    return null;
  }

  return {
    node: subResult[0] as InferNodeType<Path>,
    ancestors: subResult[1],
  };
}

/**
 * Returns the string value at the path, drilling down through single-child nodes when needed.
 * Also returns the node and ancestor chain for context.
 *
 * @param root - The root node to search from
 * @param path - The HL7 path string
 * @returns Object containing the value, node, and ancestors, or null if not found
 *
 * @example
 * ```typescript
 * const result = value(root, "PID-5.1");
 * if (result) {
 *   console.log(result.value); // string
 *   console.log(result.node.type); // 'subcomponent'
 *   console.log(result.ancestors); // [Root, Segment, Field, ...]
 * }
 * ```
 */
export function value(
  root: Root,
  path: string
): { value: string; node: Nodes; ancestors: Nodes[] } | null {
  const findResult = find(root, path);
  if (!findResult) {
    return null;
  }

  let node: Nodes = findResult.node;
  let ancestors: Nodes[] = findResult.ancestors;

  // Drill down through single children until we reach a subcomponent
  while (node.type !== "subcomponent") {
    // Segments, segment-headers, and groups can't be drilled down
    if (
      node.type === "segment" ||
      node.type === "segment-header" ||
      node.type === "group" ||
      node.type === "root"
    ) {
      return null;
    }

    // Type guard: at this point, node must be Field | FieldRepetition | Component
    if (!("children" in node && node.children)) {
      return null;
    }

    if (node.children.length === 0) {
      return null;
    }

    if (node.children.length > 1) {
      return null;
    }

    const next = node.children[0] as Nodes | undefined;
    if (!next) {
      return null;
    }

    ancestors = [...ancestors, node];
    node = next;
  }

  // At this point, node.type === "subcomponent" is guaranteed
  return {
    value: node.value ?? "",
    node,
    ancestors,
  };
}

// -------------
// Internal
// -------------

function locateSegment(
  root: Root,
  parts: PathParts
): [Segment, Nodes[]] | null {
  const ancestors: Nodes[] = [root];
  const scope = followGroups(root, parts.groups ?? [], ancestors);
  if (!scope) {
    return null;
  }

  const matches = collectSegments(scope, parts.segment.name);
  if (matches.length === 0) {
    return null;
  }

  const index = (parts.segment.repetition ?? 1) - 1;
  const segment = matches[index];
  if (!segment) {
    return null;
  }

  return [segment, ancestors];
}

function followGroups(
  root: Root,
  groups: GroupLocator[],
  ancestors: Nodes[]
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

    ancestors.push(selected);
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

function locateField(
  segment: Segment,
  fieldNum: number,
  parentAncestors: Nodes[]
): [Field, Nodes[]] | null {
  const fields = getFields(segment);
  const field = fields[fieldNum - 1];
  if (!field) {
    return null;
  }

  return [field, [...parentAncestors, segment]];
}

function locateRepetition(
  field: Field,
  repetition: number,
  parentAncestors: Nodes[]
): [FieldRepetition, Nodes[]] | null {
  if (repetition < 1) {
    return null;
  }

  const node = field.children?.[repetition - 1];
  if (!node) {
    return null;
  }

  return [node as FieldRepetition, [...parentAncestors, field]];
}

function locateComponent(
  repetition: FieldRepetition,
  componentNum: number,
  parentAncestors: Nodes[]
): [Component, Nodes[]] | null {
  if (componentNum < 1) {
    return null;
  }

  const component = repetition.children?.[componentNum - 1];
  if (!component) {
    return null;
  }

  return [component as Component, [...parentAncestors, repetition]];
}

function locateSubcomponent(
  component: Component,
  subcomponentNum: number,
  parentAncestors: Nodes[]
): [Subcomponent, Nodes[]] | null {
  if (subcomponentNum < 1) {
    return null;
  }

  const node = component.children?.[subcomponentNum - 1];
  if (!node) {
    return null;
  }

  return [node as Subcomponent, [...parentAncestors, component]];
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
