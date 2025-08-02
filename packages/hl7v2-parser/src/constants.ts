import type { HL7v2Node } from '@rethinkhealth/hl7v2-ast';
import type { HL7v2Delimiters } from './types';

/**
 * Default HL7v2 delimiters
 */
export const DEFAULT_DELIMITERS: HL7v2Delimiters = {
  field: '|',
  component: '^',
  subcomponent: '&',
  repetition: '~',
  escape: '\\',
  segment: '\r', // default to \r
};

/**
 * Empty message node
 */
export const EMPTY_MESSAGE: HL7v2Node = {
  type: 'root',
  delimiter: DEFAULT_DELIMITERS.segment,
  children: [],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1, column: 1, offset: 0 },
  },
};
