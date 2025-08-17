import type { HL7v2Delimiters } from '@rethinkhealth/hl7v2-utils';

// Forward declaration to avoid circular import at runtime
// Consumers provide functions with compatible signature from `preprocessor.ts`
export type PreprocessorStep = (ctx: ParserContext) => ParserContext;

export type ParseOptions = {
  delimiters?: HL7v2Delimiters;
  // Configure the preprocessing pipeline.
  preprocess?: PreprocessorStep[];
};

export type ParserContext = {
  input: string;
  delimiters: HL7v2Delimiters;
  metadata?: Record<string, unknown>;
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
  | 'SEGMENT_START'
  | 'SEGMENT_END'
  | 'FIELD_DELIM'
  | 'REPETITION_DELIM'
  | 'COMPONENT_DELIM'
  | 'SUBCOMP_DELIM'
  | 'TEXT';

export type Tokenizer = {
  reset(ctx: ParserContext): void;
  next(): Token | null;
};

// The parser operates over synchronous iterables of tokens only.
