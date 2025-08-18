import { parseHL7v2 } from '@rethinkhealth/hl7v2';
import { reporter } from 'vfile-reporter';
import { describe, expect, it } from 'vitest';
import hl7v2LintNoTrailingFieldSeparator from '../src';

describe('hl7v2-lint:no-trailing-field-separator', () => {
  it('does not warn for a single segment message with no trailing field separators', async () => {
    const msg =
      'MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5';

    const file = await parseHL7v2()
      .use(hl7v2LintNoTrailingFieldSeparator)
      .process(msg);

    const report = reporter(file);

    expect(report).toEqual('no issues found');
  });

  it('no warns for a message with an end field with components', async () => {
    const msg =
      'OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R';

    const file = await parseHL7v2()
      .use(hl7v2LintNoTrailingFieldSeparator)
      .process(msg);

    // console.log(JSON.stringify(file.messages, null, 2));

    const report = reporter(file);

    expect(report).toEqual('no issues found');
  });

  it('no warns for a message with an end field with empty components', async () => {
    const msg = 'OBR|1||200202150930|||^^^^^';

    const file = await parseHL7v2()
      .use(hl7v2LintNoTrailingFieldSeparator)
      .process(msg);

    const report = reporter(file);

    expect(report).toEqual('no issues found');
  });

  it('no warns for a message with end field with multiple components', async () => {
    const msg = 'OBR|||^^^^^';

    const file = await parseHL7v2()
      .use(hl7v2LintNoTrailingFieldSeparator)
      .process(msg);

    const report = reporter(file);

    expect(report).toEqual('no issues found');
  });

  it('no warns for a message with end field with multiple repetitions', async () => {
    const msg = 'OBR|||~^^';

    const file = await parseHL7v2()
      .use(hl7v2LintNoTrailingFieldSeparator)
      .process(msg);

    const report = reporter(file);

    expect(report).toEqual('no issues found');
  });

  it('no warns for a message with a single trailing field separators', async () => {
    const msg = [
      // MSH
      'MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5|', // trailing field separator
      // PID
    ].join('\r');

    const file = await parseHL7v2()
      .use(hl7v2LintNoTrailingFieldSeparator)
      .process(msg);

    const report = reporter(file);

    expect(report).toEqual('no issues found');
    expect(file.messages.length).toEqual(0);
  });
});
