import type { HL7v2Node } from '@rethinkhealth/hl7v2-ast';
import type {
  ISubcomponentParser,
  SubcomponentParseInput,
} from '../../interfaces';

/**
 * Default subcomponent parser - leaf level parser
 */
export class SubcomponentParser implements ISubcomponentParser {
  canParse(input: SubcomponentParseInput): boolean {
    return input.type === 'subcomponent';
  }

  parse(input: SubcomponentParseInput): HL7v2Node | null {
    if (!this.canParse(input)) {
      return null;
    }

    return {
      type: 'subcomponent',
      index: input.subcomponentIndex,
      value: input.text,
      position: {
        start: { line: input.line, column: input.column, offset: input.start },
        end: {
          line: input.line,
          column: input.column + input.text.length,
          offset: input.end,
        },
      },
    };
  }
}
