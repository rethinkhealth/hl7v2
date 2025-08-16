import { parseHL7v2 } from '@rethinkhealth/hl7v2';
import { reporter } from 'vfile-reporter';
import { describe, expect, it } from 'vitest';
import hl7v2LintSegmentHeaderLength from '../src';

describe('hl7v2-lint:segment-header-length', () => {
  it('should have no issues when segment header length is valid', async () => {
    const hl7v2 = 'MSH|^~\\&';

    const output = await parseHL7v2()
      .use(hl7v2LintSegmentHeaderLength)
      .process(hl7v2);

    const report = reporter(output);

    expect(report).toEqual('no issues found');
  });

  it('should warn when segment header length is invalid - more than 3 characters', async () => {
    const hl7v2 = 'PID_ADDED|^~\\&';

    const output = await parseHL7v2()
      .use(hl7v2LintSegmentHeaderLength)
      .process(hl7v2);

    const report = reporter(output);

    expect(report).not.toEqual('no issues found');
    expect(output.messages.length).toEqual(1);
    expect(output.messages[0]).toMatchObject({
      message:
        'Unexpected 9 header length, expected 3 characters, remove 6 characters',
      name: '1:1-1:15',
      ruleId: 'segment-header-length',
      source: 'hl7v2-lint',
      url: 'https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-segment-header-length#readme',
    });
  });

  it('should warn when segment header length is invalid - less than 3 characters', async () => {
    const hl7v2 = 'PI|^~\\&';

    const output = await parseHL7v2()
      .use(hl7v2LintSegmentHeaderLength)
      .process(hl7v2);

    const report = reporter(output);

    expect(report).not.toEqual('no issues found');
    expect(output.messages.length).toEqual(1);
    expect(output.messages[0]).toMatchObject({
      message:
        'Unexpected 2 header length, expected 3 characters, add 1 character',
      name: '1:1-1:8',
    });
  });

  it('shoud not warn when multiple segments are present', async () => {
    const hl7v2 =
      'PID|1|John Doe|Doe|John|19900101|M|||\r\nPID|2|Jane Doe|Doe|Jane|19900101|F|||\r\n';

    const output = await parseHL7v2()
      .use(hl7v2LintSegmentHeaderLength)
      .process(hl7v2);

    const report = reporter(output);

    expect(report).toEqual('no issues found');
    expect(output.messages.length).toEqual(0);
  });

  // biome-ignore lint/suspicious/noSkippedTests: wip
  it.skip('shoud warn when multiple segments are present - first segment is invalid', async () => {
    const msg = [
      'PID|1||12345^^^HOSP^MR||DOE\\S\\JOHN^A&J|19700101|M',
      // PID with components, repetitions and escapes (\S\ for ^)
      'NK1|1||12345^^^HOSP^MR||DOE\\S\\JOHN^A&J|19700101|M',
    ].join('\r');

    const output = await parseHL7v2()
      .use(hl7v2LintSegmentHeaderLength)
      .process(msg);

    const report = reporter(output);

    expect(report).not.toEqual('no issues found');
    expect(output.messages.length).toEqual(1);
    expect(output.messages[0]).toMatchObject({
      message:
        'Unexpected 9 header length, expected 3 characters, remove 6 characters',
      name: '1:1-1:15',
    });
  });
});
