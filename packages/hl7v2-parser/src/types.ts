import type { Delimiters } from "@rethinkhealth/hl7v2-ast";
import type { HL7v2Settings } from "@rethinkhealth/hl7v2-config";

// Forward declaration to avoid circular import at runtime
// Consumers provide functions with compatible signature from `preprocessor.ts`
export type PreprocessorStep = (ctx: ParserContext) => ParserContext;

export type ParseOptions = {
  /**
   * Custom delimiters to use instead of the HL7 standard defaults.
   */
  delimiters?: Partial<Delimiters>;
  /**
   * Optional preprocessing steps to apply to the input before parsing.
   */
  preprocess?: PreprocessorStep[];
  /**
   * Feature flags for experimental parser behaviors.
   *
   * This API is experimental and may change in future releases.
   */
  settings?: HL7v2Settings;
};

export type ParserContext = {
  input: string;
  delimiters: Delimiters;
  metadata?: Record<string, unknown>;
  settings: HL7v2Settings;
};

// ---- Tokens (minimal) ----
export type Position = {
  start: { offset: number; line: number; column: number };
  end: { offset: number; line: number; column: number };
};

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
