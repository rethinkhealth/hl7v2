import { parseHL7v2 } from '@rethinkhealth/hl7v2';
import { describe, expect, it } from 'vitest';
import hl7v2PresetLintRecommended from '../src/index';

describe('HL7v2 lint preset', () => {
  it('errors when segment header length is invalid', async () => {
    // GIVEN
    const msg = [
      // MSH
      'MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5',
      // PID with invalid header length
      'PIDTOOLONG|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC',
      // OBX
      'OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R',
    ].join('\r');

    // WHEN
    const file = await parseHL7v2()
      .use(hl7v2PresetLintRecommended)
      .process(msg);

    // THEN
    expect(file.messages).toHaveLength(1);
    expect(file.messages[0].message).toBe(
      'Unexpected 10 header length, expected 3 characters, remove 7 characters'
    );

    expect(file.messages[0].fatal).toBe(true);
  });

  it('errors when segment header is missing', async () => {
    // GIVEN
    const msg = [
      // MSH
      // 'MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5',
      // PID with invalid header length
      'PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC',
      // OBX
      'OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R',
    ].join('\r');

    // WHEN
    const file = await parseHL7v2()
      .use(hl7v2PresetLintRecommended)
      .process(msg);

    // THEN
    expect(file.messages).toHaveLength(1);
    expect(file.messages[0].message).toBe(
      'Message header (MSH) segment is required. Received PID instead.'
    );

    expect(file.messages[0].fatal).toBe(true);
  });
});
