import type { HL7v2Node } from '@rethinkhealth/hl7v2-ast';
import { FieldParser } from '../../../src/pipeline/core/parsers/field';
import type {
  ISegmentParser,
  SegmentParseInput,
} from '../../../src/pipeline/interfaces';
import { splitByString } from '../../../src/pipeline/utils';

/**
 * Example custom parser for PID (Patient Identification) segments
 * Demonstrates how to add custom validation and processing logic
 */
export class PIDSegmentParser implements ISegmentParser {
  segmentType = 'PID';
  private fieldParser = new FieldParser();

  canParse(input: SegmentParseInput): boolean {
    return input.type === 'segment' && input.segmentType === 'PID';
  }

  parse(input: SegmentParseInput): HL7v2Node | null {
    if (!this.canParse(input)) {
      return null;
    }

    const fields = splitByString(input.text, input.context.delimiters.field);

    // Validate minimum required fields for PID segment
    if (fields.length < 6) {
      throw new Error('PID segment must have at least 6 fields');
    }

    const segmentNode: HL7v2Node = {
      type: 'segment',
      name: 'PID',
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

    // Parse fields with custom logic
    segmentNode.children = this.parseFields(fields, input);

    // Add custom metadata for PID segment
    (segmentNode as unknown as Record<string, unknown>).metadata = {
      hasPatientId: (fields[3]?.value.trim().length ?? 0) > 0,
      hasPatientName: (fields[5]?.value.trim().length ?? 0) > 0,
      fieldCount: fields.length,
    };

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

      // Custom validation for specific PID fields
      if (i === 3 && !field.value.trim()) {
        // In a real implementation, you might want to collect these warnings
        // console.warn('PID-4 (Patient ID) is empty - this may cause processing issues');
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
        // Add field-specific metadata
        if (i === 5) {
          // Patient Name field
          (fieldNode as unknown as Record<string, unknown>).metadata = {
            fieldType: 'patientName',
          };
        } else if (i === 3) {
          // Patient ID field
          (fieldNode as unknown as Record<string, unknown>).metadata = {
            fieldType: 'patientId',
          };
        }

        children.push(fieldNode);
      }
    }

    return children;
  }
}
