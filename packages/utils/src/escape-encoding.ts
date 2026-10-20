import type { Delimiters } from "@glion/ast";

import { EscapeSequenceError } from "./errors";

const HEX_RADIX = 16;
const HEX_PAIR_LENGTH = 2;
// A formatting command (`\H\`, `\N\`, `\.sp 2\`, but not `\.br\`), a locally
// defined sequence (`\Z…\`), or a character set switch (`\Cxxyy\`,
// `\Mxxyyzz\`): HL7v2 §2.7 sequences that are kept as they are written.
const VERBATIM_SEQUENCE =
  /^(?:H|N|\.(?!br)[a-z]{2} ?[+-]?\d*|Z\P{Cc}*|C[0-9A-Fa-f]{4}|M[0-9A-Fa-f]{4}(?:[0-9A-Fa-f]{2})?)$/u;
const SPACE = " ";
const UTF8_ENCODER = new TextEncoder();

// encodeEscapes writes the reverse of decodeEscapes, in escape-decoding.ts. It
// walks the value and asks escapeSequence how to write each character:
//
//   encodeEscapes          walks the value, skips sequences kept as written
//   └─ escapeSequence      picks the form for one character
//      ├─ escapeCode       the code HL7v2 names, such as `T` for `&`
//      ├─ holdsDelimiter   rejects a form the parser would split
//      └─ hexDigits        the `Xdd` form, used when the named code is rejected
//
// Every path keeps one rule: the output holds no delimiter. The parser splits
// a field at its delimiters before it decodes escape sequences, so a delimiter
// inside an escape sequence would cut it in two.
//
// With the usual delimiters `|^~\&`, the named code is always used:
//
//   SMITH&JONES  →  SMITH\T\JONES
//
// With `E` as the component separator and `<` as the escape character, the
// named code for `<` is `<E<`, which holds `E`, so the hex form is used:
//
//   a<b  →  a<X3C<b

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
  // Most values hold nothing to escape: return them without building a copy.
  if (!needsEncoding(value, d)) {
    return value;
  }

  // Plain characters are not appended one at a time. `copied` marks where the
  // run of plain characters not yet written starts; the run is copied in one
  // slice when an escape sequence follows it, or at the end.
  let encoded = "";
  let copied = 0;

  for (let i = 0; i < value.length; i += 1) {
    const ch = value.charAt(i);

    // A formatting command, `\Z…\`, or character set switch already in the
    // value is markup, not data: jump past it so it is copied as written.
    const verbatimEnd = ch === d.escape ? verbatimSequenceEnd(value, i, d) : -1;
    if (verbatimEnd !== -1) {
      i = verbatimEnd;
      continue;
    }

    // A character to escape: write the plain run before it, then its sequence.
    const sequence = escapeSequence(ch, d);
    if (sequence !== undefined) {
      encoded += value.slice(copied, i) + sequence;
      copied = i + 1;
    }
  }

  // Write the plain run after the last escape sequence.
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
  // Kept only when the text between the escape characters is a sequence HL7v2
  // defines and holds no delimiter. In `\Zfoo|bar\`, the `|` is data, so the
  // whole run is escaped character by character instead.
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
  // 1. Not a delimiter, the escape character, or a control character: it is
  //    written as it is.
  const code = escapeCode(ch, d);
  if (code === undefined) {
    return undefined;
  }

  // 2. The named code, when it holds no delimiter: `&` → `\T\`.
  if (!holdsDelimiter(code, d)) {
    return d.escape + code + d.escape;
  }

  // 3. Hex with uppercase digits: `<` → `<X3C<` when `E` is a delimiter.
  // 4. Hex with lowercase digits, when a delimiter is one of `A`–`F`:
  //    `~` → `~X7e~` when `E` is the field separator, since `X7E` holds `E`.
  const digits = hexDigits(ch);
  for (const hex of [`X${digits}`, `X${digits.toLowerCase()}`]) {
    if (!holdsDelimiter(hex, d)) {
      return d.escape + hex + d.escape;
    }
  }

  // 5. Every form holds a delimiter. With `X` and `S` both delimiters, `S`
  //    cannot be written: `\S\` holds `S`, and `\X53\` holds `X`.
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
      // A control character has no named code: a line feed is `X0A`.
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
