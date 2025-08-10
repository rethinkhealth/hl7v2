import type { Root } from '@rethinkhealth/hl7v2-ast';
import type { Plugin } from 'unified';
import { parseHL7v2FromIterator } from './processor';
import { HL7v2Tokenizer } from './tokenizer';
import type { ParseOptions } from './types';
import { iterateTokenizerSync } from './utils';

// Back-compat convenience API: parse from string using the built-in tokenizer (sync)
export function parseHL7v2(input: string, opts: ParseOptions): Root {
  const tokenizer = new HL7v2Tokenizer();
  tokenizer.reset(input, opts);
  return parseHL7v2FromIterator(iterateTokenizerSync(tokenizer));
}

const hl7v2Parser: Plugin<[ParseOptions?], string, Root> = function (
  options = {}
) {
  const self = this as { parser?: (value: string) => Root };
  self.parser = (value: string) => parseHL7v2(value, options);
};

export default hl7v2Parser;
