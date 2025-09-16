import { hl7v2Jsonify } from '@rethinkhealth/hl7v2-jsonify';
import { hl7v2Parser } from '@rethinkhealth/hl7v2-parser';
import { unified } from 'unified';
import { reporter } from 'vfile-reporter';
import { describe, expect, it } from 'vitest';
import hl7v2LintSegmentRequiredMessageHeader from '../src';

describe('hl7v2-lint:segment-required-message-header', () => {
  const parseHL7v2 = unified().use(hl7v2Parser).use(hl7v2Jsonify);

  it('should have no issues when message header MSH segment is present', async () => {
    const msg = [
      // MSH
      'MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5',
      // PID
      'PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC',
      // OBX
      'OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R',
    ].join('\r');

    const output = await parseHL7v2()
      .use(hl7v2LintSegmentRequiredMessageHeader)
      .process(msg);

    const report = reporter(output);

    expect(report).toEqual('no issues found');
  });

  it('warns when message header MSH segment is missing', async () => {
    const msg = [
      // PID
      'PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC',
      // OBX
      'OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R',
    ].join('\r');

    const file = await parseHL7v2()
      .use(hl7v2LintSegmentRequiredMessageHeader)
      .process(msg);

    const report = reporter(file);

    expect(report).not.toEqual('no issues found');
    expect(file.messages).toHaveLength(1);
    expect(file.messages[0].message).toEqual(
      'Message header (MSH) segment is required. Received PID instead.'
    );
  });

  it('warns with correct metadata', async () => {
    const msg = [
      // PID
      'PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC',
      // OBX
      'OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R',
    ].join('\r');

    const file = await parseHL7v2()
      .use(hl7v2LintSegmentRequiredMessageHeader)
      .process(msg);

    const report = reporter(file);

    expect(report).not.toEqual('no issues found');
    expect(file.messages).toHaveLength(1);
    // POSITION METADATA
    expect(file.messages[0].column).toEqual(1);
    expect(file.messages[0].line).toEqual(1);
    expect(file.messages[0].place).toEqual({
      end: {
        column: 245,
        line: 1,
        offset: 244,
      },
      start: {
        column: 1,
        line: 1,
        offset: 0,
      },
    });

    // RULE METADATA
    expect(file.messages[0].ruleId).toEqual('segment-required-message-header');
    expect(file.messages[0].source).toEqual('hl7v2-lint');
  });
});
