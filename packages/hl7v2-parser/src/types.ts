import type { Delimiters } from "@rethinkhealth/hl7v2-ast";
import type { Position } from "unist";

// Forward declaration to avoid circular import at runtime
// Consumers provide functions with compatible signature from `preprocessor.ts`
export type PreprocessorStep = (ctx: ParserContext) => ParserContext;

export type ParseOptions = {
  /**
   * Optional preprocessing steps to apply to the input before parsing.
   */
  preprocess?: PreprocessorStep[];
};

export type ParserContext = {
  input: string;
  delimiters: Delimiters;
  metadata?: Record<string, unknown>;
  emptyMode?: "legacy" | "empty";
};

// ---- Tokens (minimal) ----
export type Token = {
  type: TokenType;
  value?: string; // TEXT or 3-char seg name
  position: Position;
};

// ---- Tokenizer interface ----
export type TokenType =
  | "SEGMENT_END"
  | "FIELD_DELIM"
  | "REPETITION_DELIM"
  | "COMPONENT_DELIM"
  | "SUBCOMP_DELIM"
  | "TEXT";

export type Tokenizer = {
  reset(ctx: ParserContext): void;
  next(): Token | null;
};
