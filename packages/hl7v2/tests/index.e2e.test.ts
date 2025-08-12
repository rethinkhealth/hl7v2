import { describe, expect, it } from 'vitest';
import { parseHL7v2 } from '../src';

describe('parseHL7v2 (holistic)', () => {
  it('parses MSH + PID and decodes escapes, then stringifies to JSON', async () => {
    const msg = [
      // MSH with delimiters and sender
      'MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5',
      // PID with components, repetitions and escapes (\S\ for ^)
      'PID|1||12345^^^HOSP^MR||DOE\\S\\JOHN^A&J|19700101|M',
    ].join('\r');

    const file = await parseHL7v2.process(msg);

    expect(file.value).toMatchSnapshot();
  });

  it('handles trailing delimiters and preserves empty structures appropriately', async () => {
    const msg = 'PID|A^B&|C~|';
    const file = await parseHL7v2.process(msg);

    expect(file.value).toMatchSnapshot();
  });

  it('handles decoding escapes', async () => {
    const msg = 'PID|1|Value\\F\\More\\S\\Stuff\\R\\Again\\T\\Sub\\E\\Escaped|';
    const file = await parseHL7v2.process(msg);

    expect(file.value).toMatchSnapshot();
  });
});
