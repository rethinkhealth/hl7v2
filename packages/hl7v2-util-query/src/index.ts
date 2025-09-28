import type {
  Field,
  FieldRepetition,
  Nodes,
  Root,
  Segment,
} from "@rethinkhealth/hl7v2-ast";
import { getSegmentId, type PathParts } from "@rethinkhealth/hl7v2-utils";

// -------------
// Types
// -------------

/**
 * Result of a query operation.
 */
export type QueryResult<T extends Nodes = Nodes> = {
  /** The found node, or null if not found */
  node: T | null;
  /** The path that was queried */
  path: string;
  /** Whether the node was found */
  found: boolean;
};

/**
 * Options for query operations.
 */
export type QueryOptions = {
  /** If true, return the first matching segment even if field/component path doesn't exist */
  allowPartialMatch?: boolean;
  /** If true, create missing intermediate nodes (for future write operations) */
  createMissing?: boolean;
};

// -------------
// Path Parsing
// -------------

/**
 * Regular expression for parsing HL7 path strings.
 * Matches: SEGMENT-FIELD[REPETITION].COMPONENT.SUBCOMPONENT
 * Examples: "PID", "PID-5", "PID-5[1]", "PID-5[1].2", "PID-5[1].2.1"
 * Note: Components require repetition to be specified
 */
const PATH_REGEX =
  /^([A-Z0-9]{2,4})(?:-(\d+)(?:\[(\d+)\](?:\.(\d+)(?:\.(\d+))?)?)?)?$/;

/**
 * Parses an HL7 path string into its component parts.
 *
 * Supports the canonical HL7 path format:
 * - `SEGMENT` - Segment only (e.g., "PID")
 * - `SEGMENT-FIELD` - Field path (e.g., "PID-5")
 * - `SEGMENT-FIELD[REPETITION]` - With repetition (e.g., "PID-5[1]")
 * - `SEGMENT-FIELD[REPETITION].COMPONENT` - With component (e.g., "PID-5[1].2")
 * - `SEGMENT-FIELD[REPETITION].COMPONENT.SUBCOMPONENT` - Full path (e.g., "PID-5[1].2.1")
 *
 * All numeric components are 1-based following HL7 conventions.
 *
 * @param path - The HL7 path string to parse
 * @returns Parsed path components
 * @throws {Error} If the path format is invalid
 *
 * @example
 * ```ts
 * parsePath('PID'); // { segmentId: 'PID' }
 * parsePath('PID-5'); // { segmentId: 'PID', field: 5 }
 * parsePath('PID-5[1].2.1'); // { segmentId: 'PID', field: 5, repetition: 1, component: 2, subcomponent: 1 }
 * ```
 */
// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: fine
export function parsePath(path: string): Partial<PathParts> {
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
      `Invalid HL7 path format: "${path}". Expected format: SEGMENT[-FIELD[REPETITION][.COMPONENT[.SUBCOMPONENT]]]`
    );
  }

  const [, segmentId, fieldStr, repetitionStr, componentStr, subcomponentStr] =
    match;

  // Validate that components require repetition
  if (componentStr && !repetitionStr) {
    throw new Error(
      `Component paths require repetition to be specified: "${path}"`
    );
  }

  const result: Partial<PathParts> = { segmentId: segmentId ?? "" };

  if (fieldStr) {
    const field = Number.parseInt(fieldStr, 10);
    if (field < 1) {
      throw new Error(`Field number must be ≥1, got: ${field}`);
    }
    result.field = field;
  }

  if (repetitionStr) {
    const repetition = Number.parseInt(repetitionStr, 10);
    if (repetition < 1) {
      throw new Error(`Repetition number must be ≥1, got: ${repetition}`);
    }
    result.repetition = repetition;
  }

  if (componentStr) {
    const component = Number.parseInt(componentStr, 10);
    if (component < 1) {
      throw new Error(`Component number must be ≥1, got: ${component}`);
    }
    result.component = component;
  }

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
 * // Allow partial matches
 * const result = query(root, 'PID-99[1].1.1', { allowPartialMatch: true });
 * if (result.found && result.node?.type === 'segment') {
 *   console.log('Found PID segment, but field 99 does not exist');
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

  if (!parsedPath.segmentId) {
    return result;
  }

  // Find the target segment
  const segment = findSegment(root, parsedPath.segmentId);
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
  parsedPath: Partial<PathParts>,
  result: QueryResult<T>,
  options: QueryOptions
): QueryResult<T> {
  const fieldIndex = (parsedPath.field ?? 1) - 1;
  const field = segment.children[fieldIndex];
  if (!field) {
    if (options.allowPartialMatch) {
      result.node = segment as T;
      result.found = true;
    }
    return result;
  }

  if (parsedPath.repetition === undefined) {
    result.node = field as T;
    result.found = true;
    return result;
  }

  return queryRepetition(field, parsedPath, result, options);
}

/**
 * Helper function to query repetition and deeper levels.
 */
function queryRepetition<T extends Nodes>(
  field: Field,
  parsedPath: Partial<PathParts>,
  result: QueryResult<T>,
  options: QueryOptions
): QueryResult<T> {
  const repetitionIndex = (parsedPath.repetition ?? 1) - 1;
  const fieldRepetition = field.children[repetitionIndex];
  if (!fieldRepetition) {
    if (options.allowPartialMatch) {
      result.node = field as T;
      result.found = true;
    }
    return result;
  }

  if (parsedPath.component === undefined) {
    result.node = fieldRepetition as T;
    result.found = true;
    return result;
  }

  return queryComponent(fieldRepetition, parsedPath, result, options);
}

/**
 * Helper function to query component and subcomponent levels.
 */
function queryComponent<T extends Nodes>(
  fieldRepetition: FieldRepetition,
  parsedPath: Partial<PathParts>,
  result: QueryResult<T>,
  options: QueryOptions
): QueryResult<T> {
  const componentIndex = (parsedPath.component ?? 1) - 1;
  const component = fieldRepetition.children[componentIndex];
  if (!component) {
    if (options.allowPartialMatch) {
      result.node = fieldRepetition as T;
      result.found = true;
    }
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
    if (options.allowPartialMatch) {
      result.node = component as T;
      result.found = true;
    }
    return result;
  }

  result.node = subcomponent as T;
  result.found = true;
  return result;
}

/**
 * Finds a segment in the AST by its ID.
 *
 * @param root - The root AST node
 * @param segmentId - The segment ID to find (e.g., 'PID', 'MSH')
 * @returns The segment node, or null if not found
 */
// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: fine
function findSegment(root: Root, segmentId: string): Segment | null {
  for (const child of root.children) {
    if (child.type === "segment") {
      const id = getSegmentId(child);
      if (id === segmentId) {
        return child;
      }
    }
    // Handle groups recursively
    if (child.type === "group") {
      for (const groupChild of child.children) {
        if (groupChild.type === "segment") {
          const id = getSegmentId(groupChild);
          if (id === segmentId) {
            return groupChild;
          }
        }
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
 * Convenience function to extract the string value from a subcomponent node.
 * Returns null if the node is not a subcomponent or doesn't exist.
 *
 * @param result - The query result
 * @returns The text value, or null if not available
 *
 * @example
 * ```ts
 * const result = query(root, 'PID-5[1].1.1');
 * const lastName = getValue(result); // "Smith" or null
 * ```
 */
export function getValue(result: QueryResult): string | null {
  if (!(result.found && result.node)) {
    return null;
  }
  if (result.node.type === "subcomponent") {
    return result.node.value ?? null;
  }
  return null;
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
