import type { HL7v2Node } from '@rethinkhealth/hl7v2-ast';
import type { ComponentParseInput, IComponentParser } from '../../interfaces';
import { SubcomponentParser } from './subcomponent';

/**
 * Default component parser that handles subcomponents
 */
export class ComponentParser implements IComponentParser {
  private subcomponentParser = new SubcomponentParser();

  canParse(input: ComponentParseInput): boolean {
    return input.type === 'component';
  }

  parse(input: ComponentParseInput): HL7v2Node | null {
    if (!this.canParse(input)) {
      return null;
    }

    const baseNode: HL7v2Node = {
      type: 'component',
      index: input.componentIndex,
      position: {
        start: { line: input.line, column: input.column, offset: input.start },
        end: {
          line: input.line,
          column: input.column + input.text.length,
          offset: input.end,
        },
      },
    };

    // Check if component contains subcomponents
    if (input.text.includes(input.context.delimiters.subcomponent)) {
      return {
        ...baseNode,
        delimiter: input.context.delimiters.subcomponent,
        children: this.parseSubcomponents(input),
      };
    }

    return { ...baseNode, value: input.text };
  }

  private parseSubcomponents(input: ComponentParseInput): HL7v2Node[] {
    const subcomponents = this.splitByDelimiter(
      input.text,
      input.context.delimiters.subcomponent
    );
    const nodes: HL7v2Node[] = [];

    for (let i = 0; i < subcomponents.length; i++) {
      const sub = subcomponents[i];
      if (!sub) {
        continue;
      }

      const subNode = this.subcomponentParser.parse({
        type: 'subcomponent',
        text: sub.value,
        start: input.start + sub.start,
        end: input.start + sub.end,
        index: i,
        subcomponentIndex: i,
        line: input.line,
        column: input.column + sub.start,
        context: input.context,
      });

      if (subNode) {
        nodes.push(subNode);
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
