import type { HL7v2Node } from '@rethinkhealth/hl7v2-ast';
import { DEFAULT_DELIMITERS, EMPTY_MESSAGE } from '../../constants';
import type { HL7v2Delimiters } from '../../types';
import type {
  IMessageParser,
  MessageParseInput,
  ParseContext,
  ParseOptions,
} from '../interfaces';
import { detectDelimitersFromMSH, splitByString } from '../utils';
import { SegmentParserRegistry } from './registry';

/**
 * Main message parser that orchestrates the parsing pipeline
 */
export class HL7MessageParser implements IMessageParser {
  private segmentRegistry: SegmentParserRegistry;

  private options: ParseOptions;

  constructor(options: ParseOptions = {}) {
    this.options = options;
    this.segmentRegistry = new SegmentParserRegistry(options.customParsers);
  }

  canParse(input: MessageParseInput): boolean {
    return input.type === 'message' && input.text.trim().length > 0;
  }

  parse(input: MessageParseInput): HL7v2Node | null {
    if (!this.canParse(input)) {
      return EMPTY_MESSAGE;
    }

    const context = this.createParseContext(input.text);
    const segments = splitByString(input.text, context.delimiters.segment);

    const messageNode: HL7v2Node = {
      type: 'root',
      delimiter: context.delimiters.segment,
      children: [],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: {
          line: segments.length,
          column: (segments.at(-1)?.value.length ?? 0) + 1,
          offset: input.text.length,
        },
      },
    };

    let currentLine = 1;
    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i];
      const hasContent = seg?.value.trim();
      if (!seg) {
        currentLine++;
        continue;
      }
      if (!hasContent) {
        currentLine++;
        continue;
      }

      const segmentNode = this.parseSegment(seg, currentLine, i, context);
      if (segmentNode) {
        messageNode.children = messageNode.children || [];
        messageNode.children.push(segmentNode);
      }
      currentLine++;
    }

    return this.applyValidationHooks(messageNode, context);
  }

  private createParseContext(rawMessage: string): ParseContext {
    // Merge user-defined delimiters with defaults
    const baseDelimiters: HL7v2Delimiters = {
      ...DEFAULT_DELIMITERS,
      ...this.options.delimiters,
    };

    // Auto-detect from MSH-2 if enabled
    let activeDelimiters = baseDelimiters;
    if (this.options.autoDetectDelimiters !== false) {
      const detected = detectDelimitersFromMSH(
        rawMessage,
        baseDelimiters.segment
      );
      activeDelimiters = { ...baseDelimiters, ...detected };
    }

    return {
      delimiters: activeDelimiters,
      options: this.options,
      currentLine: 1,
      totalOffset: 0,
    };
  }

  private parseSegment(
    segment: { value: string; start: number; end: number },
    line: number,
    index: number,
    context: ParseContext
  ): HL7v2Node | null {
    const segmentType = segment.value.slice(0, 3);
    const parser = this.segmentRegistry.getParser(segmentType);

    return parser.parse({
      type: 'segment',
      text: segment.value,
      start: segment.start,
      end: segment.end,
      index,
      segmentType,
      line,
      context,
    });
  }

  private applyValidationHooks(
    node: HL7v2Node,
    context: ParseContext
  ): HL7v2Node {
    if (!this.options.validationHooks) {
      return node;
    }

    for (const hook of this.options.validationHooks) {
      const result = hook.validate(node, context);
      if (!result.isValid) {
        // TODO: Handle validation errors
        throw new Error(result.errors?.[0] ?? 'Validation error');
      }
    }

    return node;
  }
}
