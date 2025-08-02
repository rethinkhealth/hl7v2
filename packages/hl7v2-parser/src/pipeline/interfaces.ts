import type { HL7v2Node } from '@rethinkhealth/hl7v2-ast';
import type { HL7v2Delimiters } from '../types';

/**
 * Context passed between pipeline stages
 */
export interface ParseContext {
  delimiters: HL7v2Delimiters;
  options: ParseOptions;
  currentLine: number;
  totalOffset: number;
}

/**
 * Parse options for the pipeline
 */
export interface ParseOptions {
  delimiters?: Partial<HL7v2Delimiters>;
  autoDetectDelimiters?: boolean;
  customParsers?: Map<string, ISegmentParser>;
  validationHooks?: ValidationHook[];
}

/**
 * Input for any parser stage
 */
export interface ParseInput {
  text: string;
  start: number;
  end: number;
  index: number;
  context: ParseContext;
}

/**
 * Base interface for all parsers
 */
export interface Parser<TInput extends ParseInput, TOutput extends HL7v2Node> {
  parse(input: TInput): TOutput | null;
  canParse(input: TInput): boolean;
}

/**
 * Message-level parser interface
 */
export interface IMessageParser extends Parser<MessageParseInput, HL7v2Node> {}

export interface MessageParseInput extends ParseInput {
  type: 'message';
}

/**
 * Segment-level parser interface
 */
export interface ISegmentParser extends Parser<SegmentParseInput, HL7v2Node> {
  segmentType: string;
}

export interface SegmentParseInput extends ParseInput {
  type: 'segment';
  segmentType: string;
  line: number;
}

/**
 * Field-level parser interface
 */
export interface IFieldParser extends Parser<FieldParseInput, HL7v2Node> {}

export interface FieldParseInput extends ParseInput {
  type: 'field';
  fieldIndex: number;
  line: number;
  column: number;
  isEncodingField?: boolean;
}

/**
 * Component-level parser interface
 */
export interface IComponentParser
  extends Parser<ComponentParseInput, HL7v2Node> {}

export interface ComponentParseInput extends ParseInput {
  type: 'component';
  componentIndex: number;
  line: number;
  column: number;
}

/**
 * Subcomponent-level parser interface
 */
export interface ISubcomponentParser
  extends Parser<SubcomponentParseInput, HL7v2Node> {}

export interface SubcomponentParseInput extends ParseInput {
  type: 'subcomponent';
  subcomponentIndex: number;
  line: number;
  column: number;
}

/**
 * Validation hook interface
 */
export interface ValidationHook {
  validate(node: HL7v2Node, context: ParseContext): ValidationResult;
}

export interface ValidationResult {
  isValid: boolean;
  warnings?: string[];
  errors?: string[];
}

/**
 * Pipeline stage interface
 */
export interface PipelineStage<
  TInput extends ParseInput,
  TOutput extends HL7v2Node,
> {
  process(input: TInput): TOutput | null;
  name: string;
}
