import { c, f, m, r, s } from '@rethinkhealth/hl7v2-builder';
import { unified } from 'unified';
import { VFile } from 'vfile';
import { describe, expect, it } from 'vitest';
import { messageAnnotator } from '../src';

describe('messageAnnotator', () => {
  it('extracts message identifiers via query utility', async () => {
    const tree = m(
      s(
        'MSH',
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(r(c('ADT'), c('A01'), c('ADT_A01'))),
        f(''),
        f(''),
        f('2.5.1')
      ),
      s('PID')
    );
    const processor = unified().use(messageAnnotator);
    const file = new VFile();
    await processor.run(tree, file);

    expect(file.data).toMatchObject({
      message: {
        version: '2.5.1',
        code: 'ADT',
        event: 'A01',
        structure: 'ADT_A01',
      },
    });
  });

  it('extracts message partial identifiers if full identifiers are not present (strict mode)', async () => {
    const tree = m(
      s(
        'MSH',
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(c('ADT'), c('A01')),
        f(''),
        f(''),
        f('2.5.1')
      ),
      s('PID')
    );

    const file = new VFile();
    const processor = unified().use(messageAnnotator, {
      strict: true,
    });
    await processor.run(tree, file);

    expect(file.data).toMatchObject({
      message: {
        version: '2.5.1',
        code: 'ADT',
        event: 'A01',
        structure: undefined,
      },
    });
  });

  it('derives structure from code and event when MSH-9.3 is missing', async () => {
    const tree = m(
      s(
        'MSH',
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(r(c('ADT'), c('A04'))),
        f(''),
        f(''),
        f('2.5')
      ),
      s('EVN'),
      s('PID')
    );
    const processor = unified().use(messageAnnotator);
    const file = new VFile();

    await processor.run(tree, file);

    expect(file.data).toMatchObject({
      message: {
        version: '2.5',
        code: 'ADT',
        event: 'A04',
        structure: 'ADT_A04',
      },
    });

    // Verify diagnostic was emitted
    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]?.ruleId).toBe('annotator:message:msh9_derived');
    expect(file.messages[0]?.message).toContain(
      'MSH-9.3 (message structure) is derived from MSH-9.1 and MSH-9.2. Found MSH-9 with only ADT^A04. Add explicit MSH-9.3 component per HL7v2 v2.5+ spec (e.g., ADT^A04^ADT_A04).'
    );
  });

  it('does not derive when MSH-9.3 is explicitly provided', async () => {
    const tree = m(
      s(
        'MSH',
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(r(c('ADT'), c('A04'), c('ADT_A01'))),
        f(''),
        f(''),
        f('2.5')
      ),
      s('EVN'),
      s('PID')
    );
    const processor = unified().use(messageAnnotator);
    const file = new VFile();

    await processor.run(tree, file);

    expect(file.data).toMatchObject({
      message: {
        version: '2.5',
        code: 'ADT',
        event: 'A04',
        structure: 'ADT_A01',
      },
    });

    // No diagnostic should be emitted since MSH-9.3 was explicit
    expect(file.messages).toHaveLength(0);
  });

  it('does not derive when code is missing', async () => {
    const tree = m(
      s(
        'MSH',
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(r(c(''), c('A04'))),
        f(''),
        f(''),
        f('2.5')
      ),
      s('PID')
    );
    const processor = unified().use(messageAnnotator);
    const file = new VFile();

    await processor.run(tree, file);

    expect(file.data).toMatchObject({
      message: {
        version: '2.5',
        code: undefined,
        event: 'A04',
        structure: undefined,
      },
    });

    // No diagnostic should be emitted since code is missing
    expect(file.messages).toHaveLength(0);
  });

  it('does not derive when event is missing', async () => {
    const tree = m(
      s(
        'MSH',
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(r(c('ADT'), c(''))),
        f(''),
        f(''),
        f('2.5')
      ),
      s('PID')
    );
    const processor = unified().use(messageAnnotator);
    const file = new VFile();

    await processor.run(tree, file);

    expect(file.data).toMatchObject({
      message: {
        version: '2.5',
        code: 'ADT',
        event: undefined,
        structure: undefined,
      },
    });

    // No diagnostic should be emitted since event is missing
    expect(file.messages).toHaveLength(0);
  });

  it('does not derive in strict mode and emits error when MSH-9.3 is missing', async () => {
    const tree = m(
      s(
        'MSH',
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(r(c('ADT'), c('A04'))),
        f(''),
        f(''),
        f('2.5')
      ),
      s('EVN'),
      s('PID')
    );
    const processor = unified().use(messageAnnotator, {
      strict: true,
    });
    const file = new VFile();

    await processor.run(tree, file);

    expect(file.data).toMatchObject({
      message: {
        version: '2.5',
        code: 'ADT',
        event: 'A04',
        structure: undefined,
      },
    });

    // Error diagnostic should be emitted in strict mode
    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]?.ruleId).toBe('annotator:message:msh9_missing');
    expect(file.messages[0]?.fatal).toBe(true);
    expect(file.messages[0]?.message).toContain(
      'MSH-9.3 (message structure) is required in strict mode'
    );
  });

  it('does not emit error in strict mode when MSH-9.3 is explicitly provided', async () => {
    const tree = m(
      s(
        'MSH',
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(r(c('ADT'), c('A04'), c('ADT_A01'))),
        f(''),
        f(''),
        f('2.5')
      ),
      s('EVN'),
      s('PID')
    );
    const processor = unified().use(messageAnnotator, {
      strict: true,
    });
    const file = new VFile();

    await processor.run(tree, file);

    expect(file.data).toMatchObject({
      message: {
        version: '2.5',
        code: 'ADT',
        event: 'A04',
        structure: 'ADT_A01',
      },
    });

    // No error diagnostic should be emitted since MSH-9.3 is explicit
    expect(file.messages).toHaveLength(0);
  });

  it('derives in non-strict mode (default)', async () => {
    const tree = m(
      s(
        'MSH',
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(''),
        f(r(c('ORU'), c('R01'))),
        f(''),
        f(''),
        f('2.5')
      ),
      s('PID')
    );
    const processor = unified().use(messageAnnotator, {
      strict: false,
    });
    const file = new VFile();

    await processor.run(tree, file);

    expect(file.data).toMatchObject({
      message: {
        version: '2.5',
        code: 'ORU',
        event: 'R01',
        structure: 'ORU_R01',
      },
    });

    // Diagnostic should be emitted
    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]?.ruleId).toBe('annotator:message:msh9_derived');
  });
});
