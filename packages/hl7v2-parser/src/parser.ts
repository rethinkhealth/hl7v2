import type { HL7v2Node } from '@rethinkhealth/hl7v2-ast';
import { EMPTY_MESSAGE } from './constants';
import { HL7MessageParser } from './pipeline/core/message';
import type { ParseContext, ParseOptions } from './pipeline/interfaces';

/**
 * Pipeline-based HL7v2 parser.
 *
 * This parser is a wrapper around the HL7MessageParser class.
 * It is used to parse HL7v2 messages into an AST.
 *
 * @param rawMessage - The HL7v2 message to parse.
 * @param options - The options for the parser.
 * @returns The parsed HL7v2 message.
 */
export function fromHL7v2Pipeline(
  rawMessage: string,
  options: ParseOptions = {}
): HL7v2Node {
  const parser = new HL7MessageParser(options);

  const result = parser.parse({
    type: 'message',
    text: rawMessage,
    start: 0,
    end: rawMessage.length,
    index: 0,
    context: {
      delimiters: options.delimiters || {},
      options,
      currentLine: 1,
      totalOffset: 0,
    } as ParseContext,
  });

  return result || EMPTY_MESSAGE;
}
