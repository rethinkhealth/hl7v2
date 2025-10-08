import type {
  Field,
  FieldRepetition,
  Group,
  Nodes,
  Root,
  Segment,
} from "@rethinkhealth/hl7v2-ast";
import type { QueryOptions, QueryPathParts, QueryResult } from "./types";

// -------------
// Path Parsing
// -------------

/**
 * Regular expression for parsing HL7 path strings with optional group prefixes.
 *
 * Format: [GROUP[N]-]...[GROUP[N]-]SEGMENT[N]-FIELD[REP].COMP.SUBCOMP
 *
 * Examples:
 * - "PID" - Simple segment
 * - "PID-5" - Segment and field
 * - "PID-5[1].2.1" - Full path with repetition
 * - "ORDERS[3]-PID-5" - Group with repetition, then segment
 * - "ORDERS-PID-5" - Group (implicit [1]), then segment
 * - "ORDERS[2]-RESULT[1]-OBX-5" - Nested groups
 * - "PID[2]-5" - Segment repetition (2nd PID segment)
 */
const PATH_REGEX =
  /^((?:[A-Z][A-Z0-9]*(?:\[\d+\])?-)*)([A-Z][A-Z0-9]{1,3})(?:\[(\d+)\])?(?:-(\d+)(?:(?:\[(\d+)\])?(?:\.(\d+)(?:\.(\d+))?)?)?)?$/;

/**
 * Parses an HL7 path string into its component parts.
 *
 * Supports the canonical HL7 path format with optional group prefixes:
 * - `SEGMENT` - Segment only (e.g., "PID")
 * - `SEGMENT-FIELD` - Field path (e.g., "PID-5")
 * - `SEGMENT-FIELD[REPETITION]` - With repetition (e.g., "PID-5[1]")
 * - `SEGMENT-FIELD[REPETITION].COMPONENT` - With component (e.g., "PID-5[1].2")
 * - `SEGMENT-FIELD[REPETITION].COMPONENT.SUBCOMPONENT` - Full path (e.g., "PID-5[1].2.1")
 * - `GROUP[N]-SEGMENT-FIELD` - With group (e.g., "ORDERS[3]-PID-5")
 * - `GROUP[N]-GROUP[M]-SEGMENT-FIELD` - Nested groups (e.g., "ORDERS[2]-RESULT[1]-OBX-5")
 * - `SEGMENT[N]-FIELD` - Segment repetition (e.g., "PID[2]-5" for 2nd PID segment)
 *
 * All numeric components are 1-based following HL7 conventions.
 *
 * @param path - The HL7 path string to parse
 * @returns Parsed path components
 * @throws {Error} If the path format is invalid
 *
 * @example
 * ```ts
 * parsePath('PID'); // { segment: { name: 'PID' } }
 * parsePath('PID-5'); // { segment: { name: 'PID' }, field: 5 }
 * parsePath('PID-5[1].2.1'); // { segment: { name: 'PID' }, field: 5, repetition: 1, component: 2, subcomponent: 1 }
 * parsePath('ORDERS[3]-PID-5'); // { groups: [{ name: 'ORDERS', repetition: 3 }], segment: { name: 'PID' }, field: 5 }
 * parsePath('ORDERS[2]-RESULT[1]-OBX-5'); // { groups: [{ name: 'ORDERS', repetition: 2 }, { name: 'RESULT', repetition: 1 }], segment: { name: 'OBX' }, field: 5 }
 * ```
 */
// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: Complex path parsing requires multiple checks
export function parsePath(path: string): QueryPathParts {
  if (!path || typeof path !== "string") {
    throw new Error(`Path must be a non-empty string, got: ${path}`);
  }

  const trimmedPath = path.trim();
  if (trimmedPath !== path) {
    throw new Error(
      `Path cannot have leading/trailing whitespace, got: "${path}"`
    );
  }

  const match = PATH_REGEX.exec(path);
  if (!match) {
    throw new Error(
      `Invalid HL7 path format: "${path}". Expected format: [GROUP[N]-]...[GROUP[N]-]SEGMENT[N][-FIELD[REPETITION][.COMPONENT[.SUBCOMPONENT]]]`
    );
  }

  const [
    ,
    groupsStr,
    segmentId,
    segmentRepetitionStr,
    fieldStr,
    fieldRepetitionStr,
    componentStr,
    subcomponentStr,
  ] = match;

  const segment: { name: string; repetition?: number } = {
    name: segmentId ?? "",
  };

  // Parse segment repetition if present
  if (segmentRepetitionStr) {
    const segmentRepetition = Number.parseInt(segmentRepetitionStr, 10);
    if (segmentRepetition < 1) {
      throw new Error(
        `Segment repetition number must be ≥1, got: ${segmentRepetition}`
      );
    }
    segment.repetition = segmentRepetition;
  }

  const result: QueryPathParts = { segment };

  // Parse groups if present
  if (groupsStr) {
    const groups: Array<{ name: string; repetition?: number }> = [];
    // Match each GROUP[N]- pattern
    const groupMatches = groupsStr.matchAll(/([A-Z][A-Z0-9]*)(?:\[(\d+)\])?-/g);
    for (const groupMatch of groupMatches) {
      const groupName = groupMatch[1];
      const groupRepStr = groupMatch[2];
      if (groupName) {
        const group: { name: string; repetition?: number } = {
          name: groupName,
        };
        if (groupRepStr) {
          const repetition = Number.parseInt(groupRepStr, 10);
          if (repetition < 1) {
            throw new Error(
              `Group repetition number must be ≥1, got: ${repetition}`
            );
          }
          group.repetition = repetition;
        }
        groups.push(group);
      }
    }
    if (groups.length > 0) {
      result.groups = groups;
    }
  }

  // Parse field if present
  if (fieldStr) {
    const field = Number.parseInt(fieldStr, 10);
    if (field < 1) {
      throw new Error(`Field number must be ≥1, got: ${field}`);
    }
    result.field = field;
  }

  // Parse field repetition if present
  if (fieldRepetitionStr) {
    const repetition = Number.parseInt(fieldRepetitionStr, 10);
    if (repetition < 1) {
      throw new Error(`Repetition number must be ≥1, got: ${repetition}`);
    }
    result.repetition = repetition;
  }

  // Parse component if present
  if (componentStr) {
    const component = Number.parseInt(componentStr, 10);
    if (component < 1) {
      throw new Error(`Component number must be ≥1, got: ${component}`);
    }
    result.component = component;
  }

  // Parse subcomponent if present
  if (subcomponentStr) {
    const subcomponent = Number.parseInt(subcomponentStr, 10);
    if (subcomponent < 1) {
      throw new Error(`Subcomponent number must be ≥1, got: ${subcomponent}`);
    }
    result.subcomponent = subcomponent;
  }

  return result;
}

// -------------
// Query Implementation
// -------------

/**
 * Queries an HL7v2 AST for a node at the specified path.
 *
 * This is the main query function that provides an elegant interface for
 * finding nodes in an HL7v2 AST using canonical path strings.
 *
 * **Path Format:**
 * - `SEGMENT` - Find segment (e.g., "PID")
 * - `SEGMENT-FIELD` - Find field (e.g., "PID-5")
 * - `SEGMENT-FIELD[REPETITION]` - Find field repetition (e.g., "PID-5[1]")
 * - `SEGMENT-FIELD[REPETITION].COMPONENT` - Find component (e.g., "PID-5[1].2")
 * - `SEGMENT-FIELD[REPETITION].COMPONENT.SUBCOMPONENT` - Find subcomponent (e.g., "PID-5[1].2.1")
 * - `GROUP[N]-SEGMENT-FIELD` - Find field in group (e.g., "ORDERS[3]-PID-5")
 * - `GROUP[N]-GROUP[M]-SEGMENT-FIELD` - Nested groups (e.g., "ORDERS[2]-RESULT[1]-OBX-5")
 * - `SEGMENT[N]-FIELD` - Segment repetition (e.g., "PID[2]-5")
 *
 * **Indexing:** All numbers in paths are 1-based following HL7 conventions.
 *
 * @param root - The HL7v2 AST root node to search
 * @param path - The canonical HL7 path string
 * @param options - Query options
 * @returns Query result with the found node (or null)
 *
 * @example
 * ```ts
 * // Find a segment
 * const pidSegment = query(root, 'PID');
 * if (pidSegment.found) {
 *   console.log('Found PID segment:', pidSegment.node);
 * }
 *
 * // Find a specific field
 * const patientName = query(root, 'PID-5');
 * if (patientName.found) {
 *   console.log('Patient name field:', patientName.node);
 * }
 *
 * // Find a specific subcomponent value
 * const lastName = query(root, 'PID-5[1].1.1');
 * if (lastName.found && lastName.node?.type === 'subcomponent') {
 *   console.log('Last name:', lastName.node.value);
 * }
 *
 * // Query within a group
 * const orderPID = query(root, 'ORDERS[3]-PID-5[1].1.1');
 * if (orderPID.found && orderPID.node?.type === 'subcomponent') {
 *   console.log('Patient name in 3rd order:', orderPID.node.value);
 * }
 * ```
 */
export function query<T extends Nodes = Nodes>(
  root: Root,
  path: string,
  options: QueryOptions = {}
): QueryResult<T> {
  const parsedPath = parsePath(path);
  const result: QueryResult<T> = {
    node: null,
    path,
    found: false,
  };

  if (!parsedPath.segment.name) {
    return result;
  }

  // Find the target segment
  const segment = findSegment(root, parsedPath);
  if (!segment) {
    return result;
  }

  // If only segment is requested, return it
  if (parsedPath.field === undefined) {
    result.node = segment as T;
    result.found = true;
    return result;
  }

  return queryField(segment, parsedPath, result, options);
}

/**
 * Helper function to query field and deeper levels.
 */
function queryField<T extends Nodes>(
  segment: Segment,
  parsedPath: QueryPathParts,
  result: QueryResult<T>,
  _options: QueryOptions
): QueryResult<T> {
  const fields = getSegmentFields(segment);
  // Field numbering is 1-based in HL7v2, so field 1 is at index 0 of the fields array
  const fieldIndex = (parsedPath.field ?? 1) - 1;
  const field = fields[fieldIndex];
  if (!field) {
    return result;
  }

  // If no component/subcomponent specified, return the field node
  if (
    parsedPath.component === undefined &&
    parsedPath.subcomponent === undefined &&
    parsedPath.repetition === undefined
  ) {
    result.node = field as T;
    result.found = true;
    return result;
  }

  // If component/subcomponent specified but no repetition, check if we can infer [1]
  if (
    parsedPath.repetition === undefined &&
    (parsedPath.component !== undefined ||
      parsedPath.subcomponent !== undefined)
  ) {
    // Check if field has exactly one repetition
    if (field.children.length === 1) {
      // Implicitly use [1] - create new path object with repetition set
      const pathWithRepetition = { ...parsedPath, repetition: 1 };
      return queryRepetition(field, pathWithRepetition, result, _options);
    }

    if (field.children.length > 1) {
      throw new Error(
        `Path "${result.path}" is ambiguous: field has ${field.children.length} repetitions. Please specify repetition explicitly (e.g., "${parsedPath.segment.name}-${parsedPath.field}[1].${parsedPath.component ?? parsedPath.subcomponent}")`
      );
    }

    // No repetitions at all
    return result;
  }

  return queryRepetition(field, parsedPath, result, _options);
}

/**
 * Returns the list of fields for a segment, skipping the segment-header literal when present.
 */
function getSegmentFields(segment: Segment): Field[] {
  const children = segment.children ?? [];
  if (children.length === 0) {
    return [];
  }

  const startIndex = children[0]?.type === "segment-header" ? 1 : 0;
  return children.slice(startIndex) as Field[];
}

/**
 * Helper function to query repetition and deeper levels.
 */
function queryRepetition<T extends Nodes>(
  field: Field,
  parsedPath: QueryPathParts,
  result: QueryResult<T>,
  _options: QueryOptions
): QueryResult<T> {
  const repetitionIndex = (parsedPath.repetition ?? 1) - 1;
  const fieldRepetition = field.children[repetitionIndex];
  if (!fieldRepetition) {
    return result;
  }

  if (parsedPath.component === undefined) {
    result.node = fieldRepetition as T;
    result.found = true;
    return result;
  }

  return queryComponent(fieldRepetition, parsedPath, result, _options);
}

/**
 * Helper function to query component and subcomponent levels.
 */
function queryComponent<T extends Nodes>(
  fieldRepetition: FieldRepetition,
  parsedPath: QueryPathParts,
  result: QueryResult<T>,
  _options: QueryOptions
): QueryResult<T> {
  const componentIndex = (parsedPath.component ?? 1) - 1;
  const component = fieldRepetition.children[componentIndex];
  if (!component) {
    return result;
  }

  if (parsedPath.subcomponent === undefined) {
    result.node = component as T;
    result.found = true;
    return result;
  }

  const subcomponentIndex = (parsedPath.subcomponent ?? 1) - 1;
  const subcomponent = component.children[subcomponentIndex];
  if (!subcomponent) {
    return result;
  }

  result.node = subcomponent as T;
  result.found = true;
  return result;
}

/**
 * Finds a segment in the AST following the group path.
 *
 * This function traverses the AST following the group hierarchy specified in parsedPath,
 * handling nested groups and repetitions, and returns the target segment.
 *
 * @param root - The root AST node
 * @param parsedPath - Parsed path with groups and segment information
 * @returns The segment node, or null if not found
 */
// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: Complex traversal logic requires multiple checks
function findSegment(root: Root, parsedPath: QueryPathParts): Segment | null {
  let currentChildren: Array<Segment | Group> = root.children.filter(
    (child): child is Segment | Group =>
      child.type === "segment" || child.type === "group"
  );

  // Traverse through groups if specified
  if (parsedPath.groups && parsedPath.groups.length > 0) {
    for (const groupSpec of parsedPath.groups) {
      const matchingGroups: Group[] = [];

      // Find all groups with the specified name
      for (const child of currentChildren) {
        if (child.type === "group" && child.name === groupSpec.name) {
          matchingGroups.push(child);
        }
      }

      if (matchingGroups.length === 0) {
        return null; // Group not found
      }

      // Select the specific repetition (1-based)
      const repetitionIndex = (groupSpec.repetition ?? 1) - 1;
      const selectedGroup = matchingGroups[repetitionIndex];

      if (!selectedGroup) {
        return null; // Specified repetition doesn't exist
      }

      // Move into this group's children for the next iteration
      currentChildren = selectedGroup.children;
    }
  }

  // Now find the segment in the current scope
  const matchingSegments: Segment[] = [];
  for (const child of currentChildren) {
    if (child.type === "segment") {
      const id = child.children[0].value;
      if (id === parsedPath.segment.name) {
        matchingSegments.push(child);
      }
    }
    // Also check nested groups at this level (for segments not in the path but in unnamed groups)
    if (child.type === "group" && !parsedPath.groups) {
      const segmentInGroup = findSegmentInGroup(child, parsedPath.segment.name);
      if (segmentInGroup) {
        matchingSegments.push(segmentInGroup);
      }
    }
  }

  if (matchingSegments.length === 0) {
    return null; // Segment not found
  }

  // Handle segment repetition (1-based)
  const segmentIndex = (parsedPath.segment.repetition ?? 1) - 1;
  return matchingSegments[segmentIndex] ?? null;
}

/**
 * Helper function to find a segment within a group (recursive for nested groups).
 *
 * @param group - The group to search in
 * @param segmentId - The segment ID to find
 * @returns The first matching segment, or null if not found
 */
function findSegmentInGroup(group: Group, segmentId: string): Segment | null {
  for (const child of group.children) {
    if (child.type === "segment") {
      const id = child.children[0].value;
      if (id === segmentId) {
        return child;
      }
    }
    if (child.type === "group") {
      const found = findSegmentInGroup(child, segmentId);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

// -------------
// Convenience Functions
// -------------

/**
 * Gets the text value from a query result.
 *
 * Convenience function to extract the string value from a node.
 * Automatically drills down to the subcomponent if there's only one path:
 * - If node is a subcomponent, returns its value
 * - If node is a component with exactly one subcomponent, returns that subcomponent's value
 * - If node is a field-repetition with one component with one subcomponent, returns that value
 * - If node is a field with one repetition with one component with one subcomponent, returns that value
 *
 * Returns null if the node doesn't exist or there are multiple paths (ambiguous).
 *
 * @param result - The query result
 * @returns The text value, or null if not available or ambiguous
 *
 * @example
 * ```ts
 * // Direct subcomponent access
 * const result = query(root, 'PID-5[1].1.1');
 * const lastName = getValue(result); // "Smith" or null
 *
 * // Automatic drill-down (if PID-5 has only one repetition, component, and subcomponent)
 * const result2 = query(root, 'PID-5');
 * const value = getValue(result2); // "Smith" or null (if unambiguous)
 * ```
 */
export function getValue(result: QueryResult): string | null {
  if (!(result.found && result.node)) {
    return null;
  }

  let node = result.node;

  // Drill down through single-child paths until we reach a subcomponent or ambiguity
  while (node.type !== "subcomponent") {
    if (!("children" in node && node.children) || node.children.length === 0) {
      return null;
    }

    // If there are multiple children, it's ambiguous
    if (node.children.length > 1) {
      return null;
    }

    // Move to the single child
    const child = node.children[0];
    if (!child) {
      return null;
    }
    node = child;
  }

  // We've reached a subcomponent
  return node.value ?? null;
}

/**
 * Queries for a value directly, returning the string content.
 *
 * Convenience function that combines query() and getValue().
 *
 * @param root - The HL7v2 AST root node
 * @param path - The canonical HL7 path string
 * @param options - Query options
 * @returns The string value, or null if not found
 *
 * @example
 * ```ts
 * const lastName = queryValue(root, 'PID-5[1].1.1'); // "Smith" or null
 * const sendingApp = queryValue(root, 'MSH-3[1].1.1'); // "MyApp" or null
 * ```
 */
export function queryValue(
  root: Root,
  path: string,
  options: QueryOptions = {}
): string | null {
  const result = query(root, path, options);
  return getValue(result);
}

/**
 * Checks if a path exists in the AST.
 *
 * Convenience function to test for the existence of a path without
 * retrieving the actual node.
 *
 * @param root - The HL7v2 AST root node
 * @param path - The canonical HL7 path string
 * @param options - Query options
 * @returns True if the path exists, false otherwise
 *
 * @example
 * ```ts
 * if (exists(root, 'PID-5')) {
 *   console.log('Patient has a name field');
 * }
 *
 * if (exists(root, 'OBX-5[1].1.1')) {
 *   console.log('First observation has a value');
 * }
 * ```
 */
export function exists(
  root: Root,
  path: string,
  options: QueryOptions = {}
): boolean {
  const result = query(root, path, options);
  return result.found;
}
