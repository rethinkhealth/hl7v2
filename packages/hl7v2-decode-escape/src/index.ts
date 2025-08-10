import type { Root, Subcomponent } from '@rethinkhealth/hl7v2-ast';
import {
  DEFAULT_DELIMITERS,
  type HL7v2Delimiters,
} from '@rethinkhealth/hl7v2-utils';
import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';

export interface HL7v2DecodeOptions {
  delimiters?: Partial<HL7v2Delimiters>;
}

/**
 * Unified plugin to decode HL7v2 escape sequences in subcomponent literals.
 *
 * - Decodes \F\, \S\, \T\, \R\, \E\
 * - Decodes \Xdddd\ hex escapes
 * - Handles \.br\ line breaks
 * - Uses delimiters from Root.data.delimiters if available
 */
export const hl7v2DecodeEscapes: Plugin<[HL7v2DecodeOptions?], Root> = (
  options
) => {
  return (tree: Root) => {
    const delimiters =
      (tree.data as { delimiters?: Partial<HL7v2Delimiters> })?.delimiters ||
      options?.delimiters;

    visit(tree, 'subcomponent', (node: Subcomponent) => {
      const raw = node.value;
      node.value = decode(raw, {
        ...DEFAULT_DELIMITERS,
        ...delimiters,
      });
    });
  };
};

/**
 * Decode HL7v2 escape sequences according to HL7 v2.8 spec.
 *
 * @param value - The value to decode.
 * @param d - The delimiters to use.
 * @returns The decoded value.
 */
// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: this function must handle multiple HL7v2 escape cases and is as simple as possible given the requirements
function decode(value: string, d: typeof DEFAULT_DELIMITERS): string {
  if (!value?.includes(d.escape)) {
    return value;
  }

  let decoded = '';
  let i = 0;

  while (i < value.length) {
    if (value[i] === d.escape) {
      const end = value.indexOf(d.escape, i + 1);
      if (end === -1) {
        decoded += value.slice(i); // unterminated escape
        break;
      }

      const code = value.slice(i + 1, end);

      switch (code) {
        case 'F':
          decoded += d.field;
          break;
        case 'S':
          decoded += d.component;
          break;
        case 'R':
          decoded += d.repetition;
          break;
        case 'T':
          decoded += d.subcomponent;
          break;
        case 'E':
          decoded += d.escape;
          break;
        case '.br':
          decoded += '\r'; // or '\n' if you prefer LF
          break;
        case 'H':
        case 'N':
          // Highlight start/end: ignored for now
          break;
        default:
          if (code.startsWith('X') && code.length > 1) {
            decoded += decodeHexSequence(code.slice(1));
          } else {
            // Unknown escape: preserve as-is
            decoded += d.escape + code + d.escape;
          }
          break;
      }

      i = end + 1;
    } else {
      decoded += value[i++];
    }
  }

  return decoded;
}

/**
 * Decode HL7 \Xdddd\ hexadecimal escape sequences into characters.
 */
function decodeHexSequence(hex: string): string {
  let result = '';
  for (let i = 0; i < hex.length; i += 2) {
    const byte = hex.slice(i, i + 2);
    const codePoint = Number.parseInt(byte, 16);
    if (!Number.isNaN(codePoint)) {
      result += String.fromCharCode(codePoint);
    }
  }
  return result;
}
