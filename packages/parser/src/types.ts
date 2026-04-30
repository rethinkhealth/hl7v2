import type { Delimiters } from "@glion/ast";
import type { Position } from "unist";

// Forward declaration to avoid circular import at runtime
// Consumers provide functions with compatible signature from `preprocessor.ts`
export type PreprocessorStep = (ctx: ParserContext) => ParserContext;

export interface ParseOptions {
  /**
   * Optional preprocessing steps to apply to the input before parsing.
   */
  preprocess?: PreprocessorStep[];
}

export interface ParserContext {
  input: string;
  delimiters: Delimiters;
  metadata?: Record<string, unknown>;
}

// ---- Tokens (minimal) ----
export interface Token {
  type: TokenType;
  value?: string; // TEXT or 3-char seg name
  position: Position;
}

// ---- Tokenizer interface ----
export type TokenType =
  | "SEGMENT_END"
  | "FIELD_DELIM"
  | "REPETITION_DELIM"
  | "COMPONENT_DELIM"
  | "SUBCOMP_DELIM"
  | "TEXT";

export interface Tokenizer {
  reset(ctx: ParserContext): void;
  next(): Token | null;
}
