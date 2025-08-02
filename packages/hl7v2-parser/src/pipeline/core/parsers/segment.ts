import type { HL7v2Node } from '@rethinkhealth/hl7v2-ast';
import type { ISegmentParser, SegmentParseInput } from '../../interfaces';
import { splitByString } from '../../utils';
import { FieldParser } from './field';

/**
 * Default segment parser for standard HL7v2 segments
 */
export class SegmentParser implements ISegmentParser {
  segmentType = 'DEFAULT';
  private fieldParser = new FieldParser();

  canParse(input: SegmentParseInput): boolean {
    return input.type === 'segment' && input.text.trim().length > 0;
  }

  parse(input: SegmentParseInput): HL7v2Node | null {
    if (!this.canParse(input)) {
      return null;
    }

    const fields = splitByString(input.text, input.context.delimiters.field);
    if (!fields[0] || fields.length === 0) {
      return null;
    }

    const segmentNode: HL7v2Node = {
      type: 'segment',
      name: fields[0].value,
      index: input.index,
      delimiter: input.context.delimiters.field,
      children: [],
      position: {
        start: { line: input.line, column: 1, offset: input.start },
        end: {
          line: input.line,
          column: input.text.length + 1,
          offset: input.end,
        },
      },
    };

    segmentNode.children = this.parseFields(fields, input);
    return segmentNode;
  }

  private parseFields(
    fields: Array<{ value: string; start: number; end: number }>,
    input: SegmentParseInput
  ): HL7v2Node[] {
    const children: HL7v2Node[] = [];

    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      if (!field) {
        continue;
      }

      const fieldNode = this.fieldParser.parse({
        type: 'field',
        text: field.value,
        start: input.start + field.start,
        end: input.start + field.end,
        index: i,
        fieldIndex: i,
        line: input.line,
        column: field.start + 1,
        context: input.context,
      });

      if (fieldNode) {
        children.push(fieldNode);
      }
    }

    return children;
  }
}
