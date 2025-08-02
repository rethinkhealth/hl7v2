import type { HL7v2Node } from '@rethinkhealth/hl7v2-ast';
import type { ISegmentParser, SegmentParseInput } from '../../interfaces';
import { splitByString } from '../../utils';
import { FieldParser } from './field';

/**
 * Specialized parser for MSH segments with special field handling
 */
export class MSHSegmentParser implements ISegmentParser {
  segmentType = 'MSH';
  private fieldParser = new FieldParser();

  canParse(input: SegmentParseInput): boolean {
    return input.type === 'segment' && input.segmentType === 'MSH';
  }

  parse(input: SegmentParseInput): HL7v2Node | null {
    if (!this.canParse(input)) {
      return null;
    }

    const fields = this.extractMSHFields(
      input.text,
      input.context.delimiters.field
    );

    const segmentNode: HL7v2Node = {
      type: 'segment',
      name: 'MSH',
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

  private extractMSHFields(
    segmentText: string,
    fieldDelimiter: string
  ): Array<{
    value: string;
    start: number;
    end: number;
    isEncodingField?: boolean;
  }> {
    const msh1 = segmentText[3] ?? '';
    const msh2 = segmentText.slice(4, 8) ?? '';
    const rest = segmentText.slice(9); // Skip the field delimiter at position 8
    const restFields = splitByString(rest, fieldDelimiter);

    return [
      { value: 'MSH', start: 0, end: 3 },
      { value: msh1, start: 3, end: 4 },
      { value: msh2, start: 4, end: 8, isEncodingField: true },
      ...restFields.map((f) => ({
        value: f.value ?? '',
        start: 9 + (f.start ?? 0),
        end: 9 + (f.end ?? 0),
      })),
    ];
  }

  private parseFields(
    fields: Array<{
      value: string;
      start: number;
      end: number;
      isEncodingField?: boolean;
    }>,
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
        isEncodingField: field.isEncodingField,
        context: input.context,
      });

      if (fieldNode) {
        children.push(fieldNode);
      }
    }

    return children;
  }
}
