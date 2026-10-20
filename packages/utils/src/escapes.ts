import type { Delimiters } from "@glion/ast";

import { EscapeSequenceError } from "./errors";

const HEX_RADIX = 16;
const HEX_PAIR_LENGTH = 2;
const HEX_PAIRS = /^(?:[0-9a-f]{2})+$/i;
// A formatting command (`\H\`, `\N\`, `\.sp 2\`, but not `\.br\`), a locally
// defined sequence (`\Z…\`), or a character set switch (`\Cxxyy\`,
// `\Mxxyyzz\`): HL7v2 §2.7 sequences that are kept as they are written.
const VERBATIM_SEQUENCE =
  /^(?:H|N|\.(?!br)[a-z]{2} ?[+-]?\d*|Z\P{Cc}*|C[0-9A-Fa-f]{4}|M[0-9A-Fa-f]{4}(?:[0-9A-Fa-f]{2})?)$/u;
const SPACE = " ";
const UTF8_DECODER = new TextDecoder("utf-8", { fatal: true });
const UTF8_ENCODER = new TextEncoder();

// ---------------------------------------------------------------------------
// Decoding
// ---------------------------------------------------------------------------

/**
 * The value `value` carries once its HL7v2 escape sequences are decoded.
 *
 * Decodes `\F\`, `\S\`, `\R\`, `\T\`, and `\E\` to the delimiter each stands
 * for, `\.br\` to the segment delimiter, and `\Xdd…\` to the characters its
 * bytes, named by pairs of hexadecimal digits, encode in UTF-8. Leaves a
 * formatting command (`\H\`, `\N\`, `\.sp\`, …), a locally defined sequence
 * (`\Z…\`), a character set switch (`\Cxxyy\`, `\Mxxyyzz\`), any other
 * sequence, an `\X…\` whose content is not pairs of hexadecimal digits or
 * whose bytes are not UTF-8, and an escape character without a closing one,
 * as it is.
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
    if (value[i] !== d.escape) {
      decoded += value[i];
      i += 1;
      continue;
    }

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
        decoded += decodeOtherSequence(code, d);
        break;
      }
    }
    i = end + 1;
  }

  return decoded;
}

/**
 * The characters an `\Xdd…\` with escape code `code` stands for, or the
 * sequence `code` names written as it is.
 */
function decodeOtherSequence(code: string, d: Delimiters): string {
  if (code.startsWith("X") && HEX_PAIRS.test(code.slice(1))) {
    const characters = decodeHexDigits(code.slice(1));
    if (characters !== undefined) {
      return characters;
    }
  }
  return d.escape + code + d.escape;
}

/**
 * The characters the bytes `hex` names encode in UTF-8, or `undefined` when
 * they are not UTF-8.
 */
function decodeHexDigits(hex: string): string | undefined {
  const bytes = new Uint8Array(hex.length / HEX_PAIR_LENGTH);
  for (let i = 0; i < bytes.length; i += 1) {
    const pair = hex.slice(i * HEX_PAIR_LENGTH, (i + 1) * HEX_PAIR_LENGTH);
    bytes[i] = Number.parseInt(pair, HEX_RADIX);
  }
  try {
    return UTF8_DECODER.decode(bytes);
  } catch {
    // The message is UTF-8 (#659); bytes that are not stay as the sender wrote them.
    return undefined;
  }
}

// ---------------------------------------------------------------------------
// Encoding
// ---------------------------------------------------------------------------

/**
 * The value `value` takes on the wire, with every character that cannot
 * appear in a value written as an HL7v2 escape sequence.
 *
 * Writes the field, component, repetition, subcomponent, and escape
 * delimiters as `\F\`, `\S\`, `\R\`, `\T\`, and `\E\`, the segment delimiter
 * as `\.br\`, and any other character below U+0020 as `\Xdd\`. A character
 * whose escape code holds a delimiter, such as `\E\` when `E` is the
 * component separator, is written as `\Xdd\`, the hexadecimal escape of its
 * UTF-8 bytes, with lowercase digits when an uppercase digit is a delimiter. A
 * formatting command (`\H\`, `\N\`, `\.sp 2\`, `\.in+4\`, …), a locally
 * defined sequence (`\Z…\`), and a character set switch (`\Cxxyy\`,
 * `\Mxxyyzz\`) are written as they are.
 *
 * The encoded value holds no field, component, repetition, subcomponent, or
 * segment delimiter, and `decodeEscapes(encodeEscapes(value, d), d)` is
 * `value`.
 *
 * @param value - The value to write.
 * @param d - The delimiters of the message.
 * @returns The encoded value.
 * @throws {EscapeSequenceError} When a character must be escaped and a
 *   delimiter appears in its escape code and in both forms of its hexadecimal
 *   escape.
 */
export function encodeEscapes(value: string, d: Delimiters): string {
  if (!needsEncoding(value, d)) {
    return value;
  }

  let encoded = "";
  let copied = 0;

  for (let i = 0; i < value.length; i += 1) {
    const ch = value.charAt(i);

    const verbatimEnd = ch === d.escape ? verbatimSequenceEnd(value, i, d) : -1;
    if (verbatimEnd !== -1) {
      i = verbatimEnd;
      continue;
    }

    const sequence = escapeSequence(ch, d);
    if (sequence !== undefined) {
      encoded += value.slice(copied, i) + sequence;
      copied = i + 1;
    }
  }

  return encoded + value.slice(copied);
}

/**
 * Whether `value` holds a delimiter, the escape character, or a character below
 * U+0020.
 */
function needsEncoding(value: string, d: Delimiters): boolean {
  for (let i = 0; i < value.length; i += 1) {
    const ch = value.charAt(i);
    if (
      ch === d.field ||
      ch === d.component ||
      ch === d.repetition ||
      ch === d.subcomponent ||
      ch === d.escape ||
      ch === d.segment ||
      ch < SPACE
    ) {
      return true;
    }
  }
  return false;
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
  const end = value.indexOf(d.escape, index + 1);
  if (end === -1) {
    return -1;
  }
  const code = value.slice(index + 1, end);
  return VERBATIM_SEQUENCE.test(code) && !holdsDelimiter(code, d) ? end : -1;
}

/**
 * The escape sequence that writes `ch`, or `undefined` when `ch` is written as
 * it is.
 *
 * Writes the escape code HL7v2 names for `ch`, or, when that code holds a
 * delimiter, the hexadecimal escape of `ch` with uppercase digits, then with
 * lowercase digits: the first that holds no delimiter.
 *
 * @throws {EscapeSequenceError} When all of them hold a delimiter.
 */
function escapeSequence(ch: string, d: Delimiters): string | undefined {
  const code = escapeCode(ch, d);
  if (code === undefined) {
    return undefined;
  }
  if (!holdsDelimiter(code, d)) {
    return d.escape + code + d.escape;
  }

  const digits = hexDigits(ch);
  for (const hex of [`X${digits}`, `X${digits.toLowerCase()}`]) {
    if (!holdsDelimiter(hex, d)) {
      return d.escape + hex + d.escape;
    }
  }
  throw new EscapeSequenceError(ch, d);
}

/**
 * The escape code for `ch`: the one HL7v2 names for a delimiter or the escape
 * character, `Xdd` for a character below U+0020, or `undefined` when `ch` is
 * written as it is.
 */
function escapeCode(ch: string, d: Delimiters): string | undefined {
  switch (ch) {
    case d.escape: {
      return "E";
    }
    case d.field: {
      return "F";
    }
    case d.component: {
      return "S";
    }
    case d.repetition: {
      return "R";
    }
    case d.subcomponent: {
      return "T";
    }
    case d.segment: {
      return ".br";
    }
    default: {
      return ch < SPACE ? `X${hexDigits(ch)}` : undefined;
    }
  }
}

/**
 * Whether `code` holds a delimiter or the escape character, which the parser
 * would read as the end of the escape sequence or of the value.
 */
function holdsDelimiter(code: string, d: Delimiters): boolean {
  return (
    code.includes(d.field) ||
    code.includes(d.component) ||
    code.includes(d.repetition) ||
    code.includes(d.subcomponent) ||
    code.includes(d.segment) ||
    code.includes(d.escape)
  );
}

/** The UTF-8 bytes of `ch` as pairs of uppercase hexadecimal digits. */
function hexDigits(ch: string): string {
  let digits = "";
  for (const byte of UTF8_ENCODER.encode(ch)) {
    digits += byte
      .toString(HEX_RADIX)
      .toUpperCase()
      .padStart(HEX_PAIR_LENGTH, "0");
  }
  return digits;
}
