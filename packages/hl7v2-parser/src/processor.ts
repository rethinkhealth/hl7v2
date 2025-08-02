import type { HL7v2Node } from '@rethinkhealth/hl7v2-ast';
import type { Plugin } from 'unified';
import { fromHL7v2Pipeline } from './parser';
import type { ParseOptions } from './types';

const hl7v2Parser: Plugin<[ParseOptions?], undefined, HL7v2Node> = function (
  options: ParseOptions = {}
): void {
  // biome-ignore lint/complexity/noUselessThisAlias: this is a plugin
  const self = this;

  function parser(this: unknown, value: string): HL7v2Node {
    return fromHL7v2Pipeline(value, options);
  }

  self.parser = parser;
};

export default hl7v2Parser;
