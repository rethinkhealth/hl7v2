// test/tokenizer.msh-file-start.test.ts

import type { HL7v2Delimiters } from '@rethinkhealth/hl7v2-utils';
import { describe, expect, it } from 'vitest';
import { HL7v2Tokenizer } from '../src/tokenizer';
import type { Token } from '../src/types';

const delims: HL7v2Delimiters = {
  field: '|',
  component: '^',
  repetition: '~',
  escape: '\\',
  subcomponent: '&',
  segment: '\r',
};

function toks(input: string): Token[] {
  const t = new HL7v2Tokenizer();
  t.reset(input, { delimiters: delims });
  const out: Token[] = [];
  // biome-ignore lint/style/useBlockStatements: Unit test
  for (let k = t.next(); k; k = t.next()) out.push(k);
  return out;
}

describe('MSH bootstrap only at file start', () => {
  it('emits MSH, MSH.1, MSH.2 as TEXT for first segment only', () => {
    const out = toks('MSH|^~\\&|SENDER\rPID|1\rMSH|^~\\&|AGAIN'); // later MSH should NOT be bootstrapped
    expect(out[0]).toMatchObject({ type: 'TEXT', value: 'MSH' });
    expect(out[1]).toMatchObject({ type: 'TEXT', value: '|' });
    expect(out[2]).toMatchObject({ type: 'TEXT', value: '^~\\&' });

    expect(out).toMatchSnapshot();
  });

  it('does not bootstrap when file does not start with MSH', () => {
    const out = toks('PID|1\rMSH|^~\\&|SENDER');
    // No special tokens up front—just TEXT('PID') then delimiters
    expect(out[0]).toMatchObject({ type: 'TEXT', value: 'PID' });
    expect(out).toMatchSnapshot();
  });
});
