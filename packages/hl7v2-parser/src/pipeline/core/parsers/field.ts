import type { HL7v2Node } from '@rethinkhealth/hl7v2-ast';
import type { FieldParseInput, IFieldParser } from '../../interfaces';
import { ComponentParser } from './component';

/**
 * Default field parser that handles components
 */
export class FieldParser implements IFieldParser {
  private componentParser = new ComponentParser();

  canParse(input: FieldParseInput): boolean {
    return input.type === 'field';
  }

  parse(input: FieldParseInput): HL7v2Node | null {
    if (!this.canParse(input)) {
      return null;
    }

    const baseNode: HL7v2Node = {
      type: input.fieldIndex === 0 ? 'header' : 'field',
      index: input.fieldIndex,
      position: {
        start: { line: input.line, column: input.column, offset: input.start },
        end: {
          line: input.line,
          column: input.column + input.text.length,
          offset: input.end,
        },
      },
    };

    // Handle encoding field (MSH-2) - no component parsing
    if (input.isEncodingField) {
      return { ...baseNode, value: input.text };
    }

    // Handle header (first field of segment)
    if (input.fieldIndex === 0) {
      return { ...baseNode, value: input.text };
    }

    // Check if field contains components
    if (input.text.includes(input.context.delimiters.component)) {
      return {
        ...baseNode,
        delimiter: input.context.delimiters.component,
        children: this.parseComponents(input),
      };
    }

    return { ...baseNode, value: input.text };
  }

  private parseComponents(input: FieldParseInput): HL7v2Node[] {
    const components = this.splitByDelimiter(
      input.text,
      input.context.delimiters.component
    );
    const nodes: HL7v2Node[] = [];

    for (let i = 0; i < components.length; i++) {
      const comp = components[i];
      if (!comp) {
        continue;
      }

      const componentNode = this.componentParser.parse({
        type: 'component',
        text: comp.value,
        start: input.start + comp.start,
        end: input.start + comp.end,
        index: i,
        componentIndex: i,
        line: input.line,
        column: input.column + comp.start,
        context: input.context,
      });

      if (componentNode) {
        nodes.push(componentNode);
      }
    }

    return nodes;
  }

  private splitByDelimiter(
    text: string,
    delimiter: string
  ): Array<{ value: string; start: number; end: number }> {
    const result: { value: string; start: number; end: number }[] = [];
    let lastIndex = 0;
    let index = text.indexOf(delimiter);

    while (index !== -1) {
      result.push({
        value: text.slice(lastIndex, index),
        start: lastIndex,
        end: index,
      });
      lastIndex = index + delimiter.length;
      index = text.indexOf(delimiter, lastIndex);
    }

    result.push({
      value: text.slice(lastIndex),
      start: lastIndex,
      end: text.length,
    });

    return result;
  }
}
