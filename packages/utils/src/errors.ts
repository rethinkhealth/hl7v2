import type { Delimiters } from "@glion/ast";

/**
 * A character {@link encodeEscapes} cannot write: a delimiter appears in its
 * escape code and in its hexadecimal escape (`\Xdd\`) with uppercase and with
 * lowercase digits.
 */
export class EscapeSequenceError extends Error {
  override readonly name = "EscapeSequenceError";
  /** The character that cannot be written. */
  readonly character: string;
  /** The delimiters it was written with. */
  readonly delimiters: Delimiters;

  constructor(character: string, delimiters: Delimiters) {
    super(
      "The value holds a character that no escape sequence can write, because a delimiter appears in both its escape code and its hexadecimal escape; use delimiters that are not letters or digits."
    );
    this.character = character;
    this.delimiters = delimiters;
  }
}
