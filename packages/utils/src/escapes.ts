import type { Delimiters } from "@glion/ast";

const HEX_RADIX = 16;
const HEX_PAIR_LENGTH = 2;
const HEX_DIGITS = /^[0-9a-f]+$/i;
const VERBATIM_SEQUENCE =
  /^(?:H|N|\.[a-z]{2} ?[+-]?\d*|Z[^]*|C[0-9a-f]{4}|M[0-9a-f]{4}(?:[0-9a-f]{2})?)$/i;
const CONTROL_CHARACTER_LIMIT = 0x20;

/**
 * The value `value` carries once its HL7v2 escape sequences are decoded.
 *
 * Decodes `\F\`, `\S\`, `\R\`, `\T\`, and `\E\` to the delimiter each stands
 * for, `\.br\` to the segment delimiter, and `\Xdd…\` to the characters its
 * pairs of hexadecimal digits name. Leaves a formatting command (`\H\`, `\N\`,
 * `\.sp\`, …), a locally defined sequence (`\Z…\`), a character set switch
 * (`\Cxxyy\`, `\Mxxyyzz\`), any other sequence, an `\X…\` whose content is not
 * hexadecimal digits, and an escape character without a closing one, as it is.
 *
 * @param value - The value as it is on the wire.
 * @param d - The delimiters of the message.
 * @returns The decoded value.
 */
export function decodeEscapes(value: string, d: Delimiters): string {
  // Stryker disable next-line ConditionalExpression, BlockStatement: a value without the escape character decodes to itself through the loop as well; the return skips the loop
  if (!value.includes(d.escape)) {
    return value;
  }

  let decoded = "";
  let i = 0;

  while (i < value.length) {
    if (value[i] === d.escape) {
      const end = value.indexOf(d.escape, i + 1);
      if (end === -1) {
        decoded += value.slice(i);
        break;
      }

      const code = value.slice(i + 1, end);

      switch (code) {
        case "F": {
          decoded += d.field;
          break;
        }
        case "S": {
          decoded += d.component;
          break;
        }
        case "R": {
          decoded += d.repetition;
          break;
        }
        case "T": {
          decoded += d.subcomponent;
          break;
        }
        case "E": {
          decoded += d.escape;
          break;
        }
        case ".br": {
          decoded += d.segment;
          break;
        }
        default: {
          decoded +=
            code.startsWith("X") && HEX_DIGITS.test(code.slice(1))
              ? decodeHexSequence(code.slice(1))
              : d.escape + code + d.escape;
          break;
        }
      }

      i = end + 1;
    } else {
      // oxlint-disable-next-line no-plusplus
      decoded += value[i++];
    }
  }

  return decoded;
}

function decodeHexSequence(hex: string): string {
  let result = "";
  for (let i = 0; i < hex.length; i += HEX_PAIR_LENGTH) {
    result += String.fromCodePoint(
      Number.parseInt(hex.slice(i, i + HEX_PAIR_LENGTH), HEX_RADIX)
    );
  }
  return result;
}

/**
 * The value `value` takes on the wire, with every character that cannot
 * appear in a value written as an HL7v2 escape sequence.
 *
 * Writes the field, component, repetition, subcomponent, and escape
 * delimiters as `\F\`, `\S\`, `\R\`, `\T\`, and `\E\`, the segment delimiter
 * as `\.br\`, and any other character below U+0020 as `\Xdd\`. A formatting
 * command (`\H\`, `\N\`, `\.sp 2\`, `\.in+4\`, …), a locally defined sequence
 * (`\Z…\`), and a character set switch (`\Cxxyy\`, `\Mxxyyzz\`) are written as
 * they are.
 * `decodeEscapes(encodeEscapes(value, d), d)` is `value` unless `value` holds
 * a literal `\.br\`.
 *
 * @param value - The value to write.
 * @param d - The delimiters of the message.
 * @returns The encoded value.
 */
export function encodeEscapes(value: string, d: Delimiters): string {
  let encoded = "";
  let copied = 0;

  for (let i = 0; i < value.length; i += 1) {
    const sequenceEnd = verbatimSequenceEnd(value, i, d);
    if (sequenceEnd !== -1) {
      i = sequenceEnd;
      continue;
    }
    const sequence = escapeSequence(value, i, d);
    if (sequence !== undefined) {
      encoded += value.slice(copied, i) + sequence;
      copied = i + 1;
    }
  }

  return copied === 0 ? value : encoded + value.slice(copied);
}

/**
 * The index of the escape character that closes the formatting command,
 * locally defined sequence, or character set switch starting at `index`, or
 * `-1` when none starts there.
 */
function verbatimSequenceEnd(
  value: string,
  index: number,
  d: Delimiters
): number {
  if (value[index] !== d.escape) {
    return -1;
  }
  const end = value.indexOf(d.escape, index + 1);
  if (end === -1) {
    return -1;
  }
  return VERBATIM_SEQUENCE.test(value.slice(index + 1, end)) ? end : -1;
}

/**
 * The escape sequence for the character at `index`, or `undefined` when it is
 * written as it is.
 */
function escapeSequence(
  value: string,
  index: number,
  d: Delimiters
): string | undefined {
  const ch = value[index];
  switch (ch) {
    case d.escape: {
      return `${d.escape}E${d.escape}`;
    }
    case d.field: {
      return `${d.escape}F${d.escape}`;
    }
    case d.component: {
      return `${d.escape}S${d.escape}`;
    }
    case d.repetition: {
      return `${d.escape}R${d.escape}`;
    }
    case d.subcomponent: {
      return `${d.escape}T${d.escape}`;
    }
    case d.segment: {
      return `${d.escape}.br${d.escape}`;
    }
    default: {
      const code = value.codePointAt(index);
      if (code !== undefined && code < CONTROL_CHARACTER_LIMIT) {
        const hex = code
          .toString(HEX_RADIX)
          .toUpperCase()
          .padStart(HEX_PAIR_LENGTH, "0");
        return `${d.escape}X${hex}${d.escape}`;
      }
      return undefined;
    }
  }
}
