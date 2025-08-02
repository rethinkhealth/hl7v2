import type { HL7v2Node } from '@rethinkhealth/hl7v2-ast';
import { DEFAULT_DELIMITERS, EMPTY_MESSAGE } from './constants';
import type { HL7v2Delimiters, ParseOptions } from './types';
import { detectDelimitersFromMSH, splitByString } from './utils';

/**
 * Parse an HL7v2 message into a Unist-compatible DOM tree.
 * Tracks lines/columns and preserves delimiters for round-tripping.
 */
export function fromHL7v2(
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
    type: 'root',
    delimiter: activeDelimiters.segment,
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
  if (segmentText.startsWith('MSH')) {
    return parseMSHSegment(
      segmentText,
      segmentStart,
      segmentEnd,
      line,
      segmentIndex,
      delimiters
    );
  }
  return parseDefaultSegment(
    segmentText,
    segmentStart,
    segmentEnd,
    line,
    segmentIndex,
    delimiters
  );
}

function parseDefaultSegment(
  segmentText: string,
  segmentStart: number,
  segmentEnd: number,
  line: number,
  segmentIndex: number,
  delimiters: HL7v2Delimiters
): HL7v2Node | null {
  const fields = splitByString(segmentText, delimiters.field);
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
  segmentNode.children = buildSegmentChildren(
    fields,
    segmentStart,
    line,
    delimiters
  );
  return segmentNode;
}

function buildSegmentChildren(
  fields: Array<{
    value: string;
    start: number;
    end: number;
    isEncodingField?: boolean;
  }>,
  segmentStart: number,
  line: number,
  delimiters: HL7v2Delimiters
): HL7v2Node[] {
  const children: HL7v2Node[] = [];
  for (let i = 0; i < fields.length; i++) {
    const f = fields[i];
    if (!f) {
      throw new Error('Invalid message');
    }
    children.push(makeSegmentChildNode(f, i, segmentStart, line, delimiters));
  }
  return children;
}

function makeSegmentChildNode(
  f: { value: string; start: number; end: number; isEncodingField?: boolean },
  i: number,
  segmentStart: number,
  line: number,
  delimiters: HL7v2Delimiters
): HL7v2Node {
  if (i === 0) {
    return createHeaderNode(
      f.value ?? '',
      i,
      segmentStart + (f.start ?? 0),
      segmentStart + (f.end ?? 0),
      line,
      (f.start ?? 0) + 1
    );
  }
  if (f.isEncodingField) {
    // MSH-2: treat as literal, no component/subcomponent parsing
    return {
      type: 'field',
      index: i,
      value: f.value ?? '',
      position: {
        start: {
          line,
          column: (f.start ?? 0) + 1,
          offset: segmentStart + (f.start ?? 0),
        },
        end: {
          line,
          column: (f.end ?? 0) + 1,
          offset: segmentStart + (f.end ?? 0),
        },
      },
    } as HL7v2Node;
  }
  return createFieldNode(
    f.value ?? '',
    i,
    segmentStart + (f.start ?? 0),
    segmentStart + (f.end ?? 0),
    line,
    (f.start ?? 0) + 1,
    delimiters
  );
}

function parseMSHSegment(
  segmentText: string,
  segmentStart: number,
  segmentEnd: number,
  line: number,
  segmentIndex: number,
  delimiters: HL7v2Delimiters
): HL7v2Node {
  const msh1 = segmentText[3] ?? '';
  const msh2 = segmentText.slice(4, 8) ?? '';
  const rest = segmentText.slice(8);
  const restFields = splitByString(rest, delimiters.field);
  const fields = [
    { value: 'MSH', start: 0, end: 3 },
    { value: msh1, start: 3, end: 4 },
    { value: msh2, start: 4, end: 8, isEncodingField: true },
    ...restFields.map((f) => ({
      value: f.value ?? '',
      start: 8 + (f.start ?? 0),
      end: 8 + (f.end ?? 0),
    })),
  ];
  const segmentNode: HL7v2Node = {
    type: 'segment',
    name: 'MSH',
    index: segmentIndex,
    delimiter: delimiters.field,
    children: buildSegmentChildren(fields, segmentStart, line, delimiters),
    position: {
      start: { line, column: 1, offset: segmentStart },
      end: { line, column: segmentText.length + 1, offset: segmentEnd },
    },
  };
  return segmentNode;
}

/**
 * Create a header node for segment identifiers
 */
function createHeaderNode(
  headerText: string,
  headerIndex: number,
  headerStart: number,
  headerEnd: number,
  line: number,
  column: number
): HL7v2Node {
  return {
    type: 'header',
    index: headerIndex,
    position: {
      start: { line, column, offset: headerStart },
      end: { line, column: column + headerText.length, offset: headerEnd },
    },
    value: headerText,
  };
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
