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
 * Cache for parsed paths to avoid re-parsing the same path multiple times.
 */
const parseCache = new Map<string, PathParts>();

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

// -------------
// Query API
// -------------

/**
 * Select the first node at the given path and return it with its ancestor chain.
 *
 * This function finds the first matching node for the given path. For paths that
 * can match multiple nodes (e.g., "PID" when multiple PID segments exist), use
 * {@link selectAll} to retrieve all matches.
 *
 * @param root - The root node to search from
 * @param path - The HL7 path string
 * @returns Object containing the node and its ancestors, or null if not found
 *
 * @example
 * ```typescript
 * const result = select(root, "PID-5");
 * if (result) {
 *   result.node; // Type: Field
 *   result.ancestors; // [Root, Segment]
 * }
 * ```
 */
export function select<Path extends string>(
  root: Root,
  path: Path
): { node: InferNodeType<Path>; ancestors: Nodes[] } | null {
  const parts = parse(path);

  // If no field access, we might be selecting a segment OR a group
  if (parts.field === undefined) {
    const result = locateSegmentOrGroup(root, parts);
    if (!result) {
      return null;
    }
    return {
      node: result[0] as unknown as InferNodeType<Path>,
      ancestors: result[1],
    };
  }

  // Field access means we're definitely accessing a segment
  const segmentResult = locateSegment(root, parts);
  if (!segmentResult) {
    return null;
  }
  const [segment, segmentAncestors] = segmentResult;

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
      node: field as unknown as InferNodeType<Path>,
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
      node: repetitionNode as unknown as InferNodeType<Path>,
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
      node: componentNode as unknown as InferNodeType<Path>,
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
    node: subResult[0] as unknown as InferNodeType<Path>,
    ancestors: subResult[1],
  };
}

/**
 * Select all nodes that match the given path.
 *
 * This function returns all matching nodes for paths that can match multiple elements.
 * For example, "PID" will return all PID segments in the message, and "OBX-5" will
 * return all observation values.
 *
 * @param root - The root node to search from
 * @param path - The HL7 path string (must not include repetition index)
 * @returns Array of objects containing nodes and their ancestor chains
 *
 * @example
 * ```typescript
 * // Get all OBX segments
 * const results = selectAll(root, "OBX");
 * for (const { node } of results) {
 *   console.log(node.type); // 'segment'
 * }
 *
 * // Get all patient name fields
 * const names = selectAll(root, "PID-5");
 * ```
 */
// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: fine
export function selectAll<Path extends string>(
  root: Root,
  path: Path
): Array<{ node: InferNodeType<Path>; ancestors: Nodes[] }> {
  const parts = parse(path);

  // If path includes a specific repetition, delegate to select()
  if (
    parts.segment.repetition !== undefined ||
    parts.repetition !== undefined
  ) {
    const result = select(root, path);
    return result ? [result] : [];
  }

  const results: Array<{ node: InferNodeType<Path>; ancestors: Nodes[] }> = [];

  // Get all matching segments from all possible scopes
  const scopes = collectAllScopes(root, parts.groups ?? []);
  const segments: Array<{ segment: Segment; ancestors: Nodes[] }> = [];
  const includeGroups = parts.field === undefined;
  const groups: Array<{ group: Group; ancestors: Nodes[] }> = [];

  for (const { scope, ancestors } of scopes) {
    const matchingSegments = collectSegments(
      scope,
      parts.segment.name,
      ancestors
    );
    segments.push(...matchingSegments);

    if (includeGroups) {
      const matchingGroups = collectGroups(scope, parts.segment.name);
      for (const group of matchingGroups) {
        groups.push({ group, ancestors: [...ancestors] });
      }
    }
  }

  // If path is segment-only, return all matching segments and groups
  if (parts.field === undefined) {
    for (const { segment, ancestors } of segments) {
      results.push({
        node: segment as InferNodeType<Path>,
        ancestors,
      });
    }

    for (const { group, ancestors } of groups) {
      results.push({
        node: group as InferNodeType<Path>,
        ancestors,
      });
    }
    return results;
  }

  // For each segment, try to get the field/component/subcomponent
  for (const { segment, ancestors: segmentAncestors } of segments) {
    const fieldResult = locateField(segment, parts.field, segmentAncestors);
    if (!fieldResult) {
      continue;
    }
    const [field, fieldAncestors] = fieldResult;

    if (
      parts.component === undefined &&
      parts.subcomponent === undefined &&
      parts.repetition === undefined
    ) {
      results.push({
        node: field as unknown as InferNodeType<Path>,
        ancestors: fieldAncestors,
      });
      continue;
    }

    // For field repetitions, components, and subcomponents,
    // we need to iterate through all repetitions
    if (!field.children) {
      continue;
    }

    for (const repetitionNode of field.children) {
      const repetitionAncestors = [...fieldAncestors, field];

      if (parts.component === undefined) {
        results.push({
          node: repetitionNode as unknown as InferNodeType<Path>,
          ancestors: repetitionAncestors,
        });
        continue;
      }

      const componentResult = locateComponent(
        repetitionNode,
        parts.component,
        repetitionAncestors
      );
      if (!componentResult) {
        continue;
      }
      const [componentNode, componentAncestors] = componentResult;

      if (parts.subcomponent === undefined) {
        results.push({
          node: componentNode as unknown as InferNodeType<Path>,
          ancestors: componentAncestors,
        });
        continue;
      }

      const subResult = locateSubcomponent(
        componentNode,
        parts.subcomponent,
        componentAncestors
      );
      if (subResult) {
        results.push({
          node: subResult[0] as unknown as InferNodeType<Path>,
          ancestors: subResult[1],
        });
      }
    }
  }

  return results;
}

/**
 * Get the string value at the path, drilling down through single-child nodes when needed.
 * Also returns the node and ancestor chain for context.
 *
 * This is a convenience function that automatically traverses through single-child
 * container nodes (Field → FieldRepetition → Component → Subcomponent) to extract
 * the final string value.
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
  const selectResult = select(root, path);
  if (!selectResult) {
    return null;
  }

  let node: Nodes = selectResult.node;
  let ancestors: Nodes[] = selectResult.ancestors;

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

    const next = node.children[0] as Nodes;
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

/**
 * Check if a node exists at the given path.
 *
 * This is a convenience function equivalent to `select(root, path) !== null`,
 * but more semantically clear for existence checks.
 *
 * @param root - The root node to search from
 * @param path - The HL7 path string
 * @returns true if the path resolves to a node, false otherwise
 *
 * @example
 * ```typescript
 * if (matches(root, "PID-5")) {
 *   console.log("Patient has a name field");
 * }
 *
 * if (!matches(root, "OBX-5")) {
 *   throw new Error("Missing observation value");
 * }
 * ```
 */
export function matches(root: Root, path: string): boolean {
  return select(root, path) !== null;
}

// -------------
// Internal Helpers
// -------------

function locateSegmentOrGroup(
  root: Root,
  parts: PathParts
): [Segment | Group, Nodes[]] | null {
  const ancestors: Nodes[] = [root];
  const scope = followGroups(root, parts.groups ?? [], ancestors);
  if (!scope) {
    return null;
  }

  const targetName = parts.segment.name;
  const targetRepetition = parts.segment.repetition;

  // Try to find a segment first
  const matchedSegments = collectSegments(scope, targetName, ancestors);
  if (matchedSegments.length > 0) {
    const index = (targetRepetition ?? 1) - 1;
    const match = matchedSegments[index];
    if (match) {
      return [match.segment, match.ancestors];
    }
  }

  // If no segment found, try to find a group
  const matchedGroups = collectGroups(scope, targetName);
  if (matchedGroups.length > 0) {
    const index = (targetRepetition ?? 1) - 1;
    const group = matchedGroups[index];
    if (group) {
      return [group, ancestors];
    }
  }

  return null;
}

function locateSegment(
  root: Root,
  parts: PathParts
): [Segment, Nodes[]] | null {
  const ancestors: Nodes[] = [root];
  const scope = followGroups(root, parts.groups ?? [], ancestors);
  if (!scope) {
    return null;
  }

  const matchedSegments = collectSegments(scope, parts.segment.name, ancestors);
  if (matchedSegments.length === 0) {
    return null;
  }

  const index = (parts.segment.repetition ?? 1) - 1;
  const match = matchedSegments[index];
  if (!match) {
    return null;
  }

  return [match.segment, match.ancestors];
}

function followGroups(
  root: Root,
  groups: GroupLocator[],
  ancestorChain: Nodes[]
): Array<Segment | Group> | null {
  let children = filterSegmentsAndGroups(root.children);

  for (const locator of groups) {
    const matchedGroups = children.filter(
      (node): node is Group =>
        node.type === "group" && node.name === locator.name
    );

    if (matchedGroups.length === 0) {
      return null;
    }

    const index = (locator.repetition ?? 1) - 1;
    const selected = matchedGroups[index];
    if (!selected) {
      return null;
    }

    ancestorChain.push(selected);
    children = filterSegmentsAndGroups(selected.children);
  }

  return children;
}

/**
 * Collect all possible scopes when groups can match multiple instances.
 * Used by selectAll to find nodes across all matching groups.
 */
function collectAllScopes(
  root: Root,
  groups: GroupLocator[]
): Array<{ scope: Array<Segment | Group>; ancestors: Nodes[] }> {
  if (groups.length === 0) {
    return [
      { scope: filterSegmentsAndGroups(root.children), ancestors: [root] },
    ];
  }

  const results: Array<{ scope: Array<Segment | Group>; ancestors: Nodes[] }> =
    [];
  const firstLocator = groups[0];
  const remainingGroups = groups.slice(1);

  if (!firstLocator) {
    return [
      { scope: filterSegmentsAndGroups(root.children), ancestors: [root] },
    ];
  }

  const children = filterSegmentsAndGroups(root.children);
  const matchingGroups = children.filter(
    (node): node is Group =>
      node.type === "group" && node.name === firstLocator.name
  );

  // If a specific repetition is requested, only follow that one
  if (firstLocator.repetition !== undefined) {
    const index = firstLocator.repetition - 1;
    const selected = matchingGroups[index];
    if (!selected) {
      return [];
    }
    const ancestors = [root, selected];
    return collectAllScopesRecursive(
      selected.children,
      remainingGroups,
      ancestors
    );
  }

  // Otherwise, follow ALL matching groups
  for (const group of matchingGroups) {
    const ancestors = [root, group];
    const subScopes = collectAllScopesRecursive(
      group.children,
      remainingGroups,
      ancestors
    );
    results.push(...subScopes);
  }

  return results;
}

function collectAllScopesRecursive(
  children: Nodes[],
  groups: GroupLocator[],
  ancestors: Nodes[]
): Array<{ scope: Array<Segment | Group>; ancestors: Nodes[] }> {
  if (groups.length === 0) {
    return [{ scope: filterSegmentsAndGroups(children), ancestors }];
  }

  const results: Array<{ scope: Array<Segment | Group>; ancestors: Nodes[] }> =
    [];
  const firstLocator = groups[0];
  const remainingGroups = groups.slice(1);

  if (!firstLocator) {
    return [{ scope: filterSegmentsAndGroups(children), ancestors }];
  }

  const filteredChildren = filterSegmentsAndGroups(children);
  const matchingGroups = filteredChildren.filter(
    (node): node is Group =>
      node.type === "group" && node.name === firstLocator.name
  );

  // If a specific repetition is requested, only follow that one
  if (firstLocator.repetition !== undefined) {
    const index = firstLocator.repetition - 1;
    const selected = matchingGroups[index];
    if (!selected) {
      return [];
    }
    const newAncestors = [...ancestors, selected];
    return collectAllScopesRecursive(
      selected.children,
      remainingGroups,
      newAncestors
    );
  }

  // Otherwise, follow ALL matching groups
  for (const group of matchingGroups) {
    const newAncestors = [...ancestors, group];
    const subScopes = collectAllScopesRecursive(
      group.children,
      remainingGroups,
      newAncestors
    );
    results.push(...subScopes);
  }

  return results;
}

function collectSegments(
  nodes: Array<Segment | Group>,
  targetSegmentName: string,
  ancestors: Nodes[]
): Array<{ segment: Segment; ancestors: Nodes[] }> {
  const result: Array<{ segment: Segment; ancestors: Nodes[] }> = [];

  for (const node of nodes) {
    if (node.type === "segment") {
      const name = getSegmentName(node);
      if (name === targetSegmentName) {
        result.push({ segment: node, ancestors: [...ancestors] });
      }
    }

    if (node.type === "group") {
      const nextAncestors = [...ancestors, node];
      result.push(
        ...collectSegments(
          filterSegmentsAndGroups(node.children),
          targetSegmentName,
          nextAncestors
        )
      );
    }
  }

  return result;
}

function collectGroups(
  nodes: Array<Segment | Group>,
  targetGroupName: string
): Group[] {
  const result: Group[] = [];

  for (const node of nodes) {
    if (node.type === "group" && node.name === targetGroupName) {
      result.push(node);
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
