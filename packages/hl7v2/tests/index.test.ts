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

  it('parses multiple segments with MSH as the first segment', async () => {
    const msg = [
      // MSH
      'MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5',
      // PID
      'PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC',
      // OBX
      'OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R',
    ].join('\r');

    const file = await parseHL7v2.process(msg);
    expect(file.value).toMatchSnapshot();
  });

  it('parses multiple segments without MSH as the first segment', async () => {
    const msg = [
      // PID
      'PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC',
      // OBX
      'OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R',
    ].join('\r');

    const file = await parseHL7v2.process(msg);

    expect(file.value).toMatchSnapshot();
  });

  it('parses correctly similar messages with different carriage returns', async () => {
    const msg_with_cr = [
      // PID
      'PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC',
      // OBX
      'OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R',
    ].join('\r');

    const msg_with_lf = [
      // PID
      'PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC',
      // OBX
      'OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R',
    ].join('\n');

    const file_cr = await parseHL7v2.process(msg_with_cr);
    const file_lf = await parseHL7v2.process(msg_with_lf);

    expect(file_cr.value).toEqual(file_lf.value);
  });

  it('parses correctly similar messages with or without trailing field separators', async () => {
    const msg_with_trailing_field_separator = [
      // PID
      'PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC|',
      // OBX
      'OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R|',
    ].join('\r');

    const msg_without_trailing_field_separator = [
      // PID
      'PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC',
      // OBX
      'OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R',
    ].join('\r');

    const file_cr = await parseHL7v2.process(msg_with_trailing_field_separator);
    const file_lf = await parseHL7v2.process(
      msg_without_trailing_field_separator
    );

    expect(file_cr.value).toEqual(file_lf.value);
  });

  it('parses correctly similar messages with or without trailing field separators and empty last field', async () => {
    const msg_with_trailing_field_separator = [
      // PID
      'PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC|',
      // OBX
      'OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^|',
    ].join('\r');

    const msg_without_trailing_field_separator = [
      // PID
      'PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC',
      // OBX
      'OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^',
    ].join('\r');

    const file_cr = await parseHL7v2.process(msg_with_trailing_field_separator);
    const file_lf = await parseHL7v2.process(
      msg_without_trailing_field_separator
    );

    expect(file_cr.value).toEqual(file_lf.value);
  });
});
