import type { HL7v2Node } from '@rethinkhealth/hl7v2-ast';
import type { Processor } from 'unified';
import { fromHL7v2 } from './parser';
import type { ParseOptions } from './types';

export default function hl7v2Parser(
  this: Processor,
  options: ParseOptions = {}
): void {
  function parser(this: unknown, value: string): HL7v2Node {
    return fromHL7v2(value, options);
  }

  this.parser = parser;
}
