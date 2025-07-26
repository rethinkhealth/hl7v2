import { DEFAULT_DELIMITERS, EMPTY_MESSAGE } from './constants';
import type { HL7v2Delimiters, HL7v2Node } from './types';
import { detectDelimitersFromMSH, splitByString } from './utils';

export interface ParseOptions {
  delimiters?: Partial<HL7v2Delimiters>;
  autoDetectDelimiters?: boolean;
}

/**
 * Parse an HL7v2 message into a Unist-compatible DOM tree.
 * Tracks lines/columns and preserves delimiters for round-tripping.
 */
export function parseHL7(
  rawMessage: string,
  options: ParseOptions = {}
): HL7v2Node {
  if (!rawMessage.trim()) {
    return EMPTY_MESSAGE;
  }

  // Merge user-defined delimiters with defaults
  const baseDelimiters: HL7v2Delimiters = {
    ...DEFAULT_DELIMITERS,
    ...options.delimiters,
  };

  // Auto-detect from MSH-2 if enabled
  let activeDelimiters = baseDelimiters;
  if (options.autoDetectDelimiters !== false) {
    const detected = detectDelimitersFromMSH(
      rawMessage,
      baseDelimiters.segment
    );
    activeDelimiters = { ...baseDelimiters, ...detected };
  }

  // Split into segments
  const segments = splitByString(rawMessage, activeDelimiters.segment);

  const messageNode: HL7v2Node = {
    type: 'message',
    children: [],
    position: {
      start: { line: 1, column: 1, offset: 0 },
      end: {
        line: segments.length,
        column: (segments.at(-1)?.value.length ?? 0) + 1,
        offset: rawMessage.length,
      },
    },
  };

  let currentLine = 1;
  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];

    if (!seg) {
      // TODO: Handle this case with a better error message
      throw new Error('Invalid message');
    }

    if (!seg.value.trim()) {
      currentLine++;
      continue;
    }

    const segmentNode = parseSegment(
      seg.value,
      seg.start,
      seg.end,
      currentLine,
      i,
      activeDelimiters
    );
    if (segmentNode) {
      if (!messageNode.children) {
        messageNode.children = [];
      }

      messageNode.children.push(segmentNode);
    }
    currentLine++;
  }

  return messageNode;
}

/**
 * Parse a single segment into fields and components
 */
function parseSegment(
  segmentText: string,
  segmentStart: number,
  segmentEnd: number,
  line: number,
  segmentIndex: number,
  delimiters: HL7v2Delimiters
): HL7v2Node | null {
  // 1. Split into fields
  const fields = splitByString(segmentText, delimiters.field);

  // 2. If no fields, return null
  if (!fields[0] || fields.length === 0) {
    return null;
  }

  const segmentNode: HL7v2Node = {
    type: 'segment',
    name: fields[0].value,
    index: segmentIndex,
    delimiter: delimiters.field,
    children: [],
    position: {
      start: { line, column: 1, offset: segmentStart },
      end: { line, column: segmentText.length + 1, offset: segmentEnd },
    },
  };

  for (let i = 0; i < fields.length; i++) {
    const f = fields[i];

    if (!f) {
      // TODO: Handle this case with a better error message
      throw new Error('Invalid message');
    }

    const fieldNode = createFieldNode(
      f.value,
      i,
      segmentStart + f.start,
      segmentStart + f.end,
      line,
      f.start + 1,
      delimiters
    );

    // biome-ignore lint/style/noNonNullAssertion: This is defined always
    segmentNode.children!.push(fieldNode);
  }

  return segmentNode;
}

/**
 * Create a field node, parsing components if needed
 */
function createFieldNode(
  fieldText: string,
  fieldIndex: number,
  fieldStart: number,
  fieldEnd: number,
  line: number,
  column: number,
  delimiters: HL7v2Delimiters
): HL7v2Node {
  const node: HL7v2Node = {
    type: 'field',
    index: fieldIndex,
    position: {
      start: { line, column, offset: fieldStart },
      end: { line, column: column + fieldText.length, offset: fieldEnd },
    },
  };

  if (fieldText.includes(delimiters.component)) {
    return {
      ...node,
      delimiter: delimiters.component,
      children: parseComponents(
        fieldText,
        fieldStart,
        line,
        column,
        delimiters
      ),
    };
  }

  return { ...node, value: fieldText };
}

/**
 * Parse components within a field
 */
function parseComponents(
  fieldText: string,
  fieldStart: number,
  line: number,
  column: number,
  delimiters: HL7v2Delimiters
): HL7v2Node[] {
  const comps = splitByString(fieldText, delimiters.component);
  const nodes: HL7v2Node[] = [];

  for (let i = 0; i < comps.length; i++) {
    const c = comps[i];

    if (!c) {
      // TODO: Handle this case with a better error message
      throw new Error('Invalid message');
    }

    const startColumn = column + c.start;
    const base: HL7v2Node = {
      type: 'component',
      index: i,
      position: {
        start: { line, column: startColumn, offset: fieldStart + c.start },
        end: {
          line,
          column: startColumn + c.value.length,
          offset: fieldStart + c.end,
        },
      },
    };

    if (c.value.includes(delimiters.subcomponent)) {
      nodes.push({
        ...base,
        delimiter: delimiters.subcomponent,
        children: parseSubcomponents(
          c.value,
          fieldStart + c.start,
          line,
          startColumn,
          delimiters
        ),
      });
    } else {
      nodes.push({ ...base, value: c.value });
    }
  }

  return nodes;
}

/**
 * Parse subcomponents within a component
 */
function parseSubcomponents(
  componentText: string,
  componentStart: number,
  line: number,
  column: number,
  delimiters: HL7v2Delimiters
): HL7v2Node[] {
  const subs = splitByString(componentText, delimiters.subcomponent);

  if (!subs[0]) {
    // TODO: Handle this case with a better error message
    throw new Error('Invalid message');
  }

  return subs.map((s, i) => ({
    type: 'subcomponent',
    index: i,
    value: s.value,
    position: {
      start: {
        line,
        column: column + s.start,
        offset: componentStart + s.start,
      },
      end: {
        line,
        column: column + s.start + s.value.length,
        offset: componentStart + s.end,
      },
    },
  }));
}
