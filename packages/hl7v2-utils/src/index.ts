/**
 * HL7v2 Delimiters type
 */
export interface HL7v2Delimiters {
  field: string;
  component: string;
  subcomponent: string;
  repetition: string;
  escape: string;
  segment: string; // now always a string
}

export const DEFAULT_DELIMITERS = {
  field: '|',
  component: '^',
  repetition: '~',
  subcomponent: '&',
  escape: '\\',
};
