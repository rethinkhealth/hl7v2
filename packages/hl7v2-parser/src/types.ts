import type { Delimiters } from "@rethinkhealth/hl7v2-ast";

// Forward declaration to avoid circular import at runtime
// Consumers provide functions with compatible signature from `preprocessor.ts`
export type PreprocessorStep = (ctx: ParserContext) => ParserContext;

export type ExperimentalFeatures = {
  /**
   * Controls how empty fields/components are represented in the AST.
   *
   * - 'legacy': Empty fields create full structure (Field → Rep → Comp → Sub with value: "")
   * - 'empty-array': Empty fields have no children (Field with children: [])
   *
   * @default 'legacy'
   * @experimental This option is experimental and will become the default in v3.0.0
   */
  emptyMode: "legacy" | "empty";
};

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
  experimental?: ExperimentalFeatures;
};

export type ParserContext = {
  input: string;
  delimiters: Delimiters;
  metadata?: Record<string, unknown>;
  experimental: ExperimentalFeatures;
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
