import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { toHl7v2 } from '@rethinkhealth/hl7v2-to-hl7v2';
import { describe, expect, it } from 'vitest';
import { c, f, m, r, s } from '../src';

describe('builder', () => {
  describe('root', () => {
    it('should build a simple root', () => {
      const root = m();
      expect(root).toEqual({
        type: 'root',
        children: [],
      });
    });

    it('should build a root with a single segment', () => {
      const root = m(s('MSH', f('another value')));
      expect(root).toEqual({
        type: 'root',
        children: [
          {
            type: 'segment',
            children: [
              {
                type: 'field',
                children: [
                  {
                    type: 'field-repetition',
                    children: [
                      {
                        type: 'component',
                        children: [{ type: 'subcomponent', value: 'MSH' }],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'field',
                children: [
                  {
                    type: 'field-repetition',
                    children: [
                      {
                        type: 'component',
                        children: [
                          { type: 'subcomponent', value: 'another value' },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });
    });

    it('should build a root with a multiple segments', () => {
      const root = m([s('MSH', f('another value')), s('PID', f('12345'))]);
      expect(root).toEqual({
        type: 'root',
        children: [
          {
            type: 'segment',
            children: [
              {
                type: 'field',
                children: [
                  {
                    type: 'field-repetition',
                    children: [
                      {
                        type: 'component',
                        children: [{ type: 'subcomponent', value: 'MSH' }],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'field',
                children: [
                  {
                    type: 'field-repetition',
                    children: [
                      {
                        type: 'component',
                        children: [
                          { type: 'subcomponent', value: 'another value' },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'segment',
            children: [
              {
                type: 'field',
                children: [
                  {
                    type: 'field-repetition',
                    children: [
                      {
                        type: 'component',
                        children: [{ type: 'subcomponent', value: 'PID' }],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'field',
                children: [
                  {
                    type: 'field-repetition',
                    children: [
                      {
                        type: 'component',
                        children: [{ type: 'subcomponent', value: '12345' }],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });
    });
  });

  describe('segment', () => {
    it('should build a segment with a single-value field', () => {
      const segment = s('MSH', f('another value'));

      expect(segment).toEqual({
        type: 'segment',
        children: [
          {
            type: 'field',
            children: [
              {
                type: 'field-repetition',
                children: [
                  {
                    type: 'component',
                    children: [{ type: 'subcomponent', value: 'MSH' }],
                  },
                ],
              },
            ],
          },
          {
            type: 'field',
            children: [
              {
                type: 'field-repetition',
                children: [
                  {
                    type: 'component',
                    children: [
                      { type: 'subcomponent', value: 'another value' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });
    });

    it('should build a segment with an array of fields', () => {
      const segment = s('MSH', [f('another value'), f('another value 2')]);
      expect(segment).toEqual({
        type: 'segment',
        children: [
          {
            type: 'field',
            children: [
              {
                type: 'field-repetition',
                children: [
                  {
                    type: 'component',
                    children: [{ type: 'subcomponent', value: 'MSH' }],
                  },
                ],
              },
            ],
          },
          {
            type: 'field',
            children: [
              {
                type: 'field-repetition',
                children: [
                  {
                    type: 'component',
                    children: [
                      { type: 'subcomponent', value: 'another value' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'field',
            children: [
              {
                type: 'field-repetition',
                children: [
                  {
                    type: 'component',
                    children: [
                      { type: 'subcomponent', value: 'another value 2' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });
    });
  });

  describe('field', () => {
    it('should build an empty field', () => {
      const field = f();
      expect(field).toEqual({
        type: 'field',
        children: [
          {
            type: 'field-repetition',
            children: [
              {
                type: 'component',
                children: [{ type: 'subcomponent', value: '' }],
              },
            ],
          },
        ],
      });
    });

    it('should build a single value field', () => {
      const field = f('hello world');
      expect(field).toEqual({
        type: 'field',
        children: [
          {
            type: 'field-repetition',
            children: [
              {
                type: 'component',
                children: [{ type: 'subcomponent', value: 'hello world' }],
              },
            ],
          },
        ],
      });
    });

    it('should build a field with a single component', () => {
      const field = f(c('hello world!'));
      expect(field).toEqual({
        type: 'field',
        children: [
          {
            type: 'field-repetition',
            children: [
              {
                type: 'component',
                children: [{ type: 'subcomponent', value: 'hello world!' }],
              },
            ],
          },
        ],
      });
    });

    it('should build a field with an array of components', () => {
      const field = f([c('A'), c('B'), c('C')]);

      expect(field).toEqual({
        type: 'field',
        children: [
          {
            type: 'field-repetition',
            children: [
              {
                type: 'component',
                children: [{ type: 'subcomponent', value: 'A' }],
              },
              {
                type: 'component',
                children: [{ type: 'subcomponent', value: 'B' }],
              },
              {
                type: 'component',
                children: [{ type: 'subcomponent', value: 'C' }],
              },
            ],
          },
        ],
      });
    });

    it('should build a field with an array of repeated components (field repetition)', () => {
      // Given
      const field = f([
        r([c('A'), c(['B.1', 'B.2'])]),
        r([c('C')]),
        r([c('D')]),
      ]);

      // Then
      expect(field).toEqual({
        type: 'field',
        children: [
          {
            type: 'field-repetition',
            children: [
              {
                type: 'component',
                children: [{ type: 'subcomponent', value: 'A' }],
              },
              {
                type: 'component',
                children: [
                  { type: 'subcomponent', value: 'B.1' },
                  { type: 'subcomponent', value: 'B.2' },
                ],
              },
            ],
          },
          {
            type: 'field-repetition',
            children: [
              {
                type: 'component',
                children: [{ type: 'subcomponent', value: 'C' }],
              },
            ],
          },
          {
            type: 'field-repetition',
            children: [
              {
                type: 'component',
                children: [{ type: 'subcomponent', value: 'D' }],
              },
            ],
          },
        ],
      });
    });
  });

  describe('component', () => {
    it('should build an empty component', () => {
      const component = c();
      expect(component).toEqual({
        type: 'component',
        children: [{ type: 'subcomponent', value: '' }],
      });
    });

    it('should build a component with a single value', () => {
      const component = c('hello world!');
      expect(component).toEqual({
        type: 'component',
        children: [{ type: 'subcomponent', value: 'hello world!' }],
      });
    });

    it('should build a component with an array of values', () => {
      const component = c(['hello world!', 'hello world 2!']);
      expect(component).toEqual({
        type: 'component',
        children: [
          { type: 'subcomponent', value: 'hello world!' },
          { type: 'subcomponent', value: 'hello world 2!' },
        ],
      });
    });
  });

  describe('complex scenarios', () => {
    it('should build a segment with an array of fields, each with an array of components', () => {
      const message = m([
        // MSH Segment
        s('MSH', [
          f(),
          f(),
          f('1234'),
          f([c(['A', 'A.2', 'A.3']), c('B'), c('C')]),
        ]),
        // PID Segment
        s('PID', [f('12345'), f([c('DOE'), c('JOHN')])]),
      ]);

      expect(message).toMatchSnapshot();
    });

    it('should build a message from a fixture', () => {
      const original = readFileSync(
        join(__dirname, 'fixtures', 'sample.hl7v2'),
        'utf8'
      );

      const constructed = m([
        s('MSH', [
          f('|'),
          f('^~\\&'),
          f([r([c('SNDAPP'), c('COMP')])]),
          f('SNDFAC'),
          f('RCVAPP'),
          f('RCVFAC'),
          f('20250205123045-0500'),
          f(),
          f([r([c('ORU'), c('R01'), c('ORU_R01')])]),
          f('MSG12345'),
          f('P'),
          f('2.5.1'),
          f(),
          f(),
          f('AL'),
          f('AL'),
        ]),
        s('EVN', [f('R01'), f('202502051229'), f(), f(), f()]),
        s('PID', [
          f('1'),
          f(),
          f([
            r([c('123456'), c(), c(), c('HOSP'), c('MR')]),
            r([c('A123456'), c(), c(), c('HOSP'), c('AN')]),
          ]),
          f(),
          f([r([c('Doe'), c('John'), c('A'), c('III'), c(), c('L')])]),
          f(),
          f('19800101'),
          f('M'),
          f(),
          f(),
          f([
            r([
              c('123 Main St'),
              c(),
              c('Metropolis'),
              c('NY'),
              c('10101'),
              c('USA'),
              c('H'),
              c('BLD'),
              c(),
              c(),
              c(),
            ]),
          ]),
          f([
            r([c(), c(), c(), c('NY'), c('10001')]),
            r([c(), c(), c(), c('NY'), c('10002')]),
          ]),
          f(),
          f('EN'),
          f('S'),
          f('123456789'),
          f([r([c('987654'), c(), c(), c('SSA'), c('SS')])]),
          f(),
          f('EN'),
          f('C'),
          f('USA'),
          f([r([c('N'), c('Not Hispanic'), c(), c('HL70189')])]),
          f('Y'),
          f('Y'),
          f(),
          f(),
          f([r([c('20250101120000-0500')]), r([c('20250102120000-0500')])]),
          f(),
          f(),
          f(),
        ]),
        s('PD1', [
          f(),
          f(),
          f([
            r([
              c('PCP'),
              c('Primary'),
              c('Physician'),
              c('MD'),
              c(),
              c(),
              c(['NPI', '1234567890', 'NPI']),
            ]),
          ]),
          f(),
          f(),
          f(),
          f(),
          f(),
          f(),
          f('20241231'),
        ]),
        s('OBX', [
          f('1'),
          f('ST'),
          f([r([c('88304'), c('Pathology Test'), c('CPT')])]),
          f('1'),
          f('Sample text with escaped\\F\\ pipe'),
          f('mg/dL'),
          f('70-110'),
          f('H'),
          f('A'),
          f('F'),
          f(),
          f(),
          f('202502041900'),
          f([r([c('RX'), c('Pharmacy'), c('HL70369')])]),
        ]),
        s('OBX', [
          f('2'),
          f('CWE'),
          f([r([c('2345-7'), c('Result Code'), c('LN')])]),
          f('1'),
          f([
            r([c('A'), c('Alpha&Primary')]),
            r([c('B'), c('Beta\\R\\Return')]),
          ]),
          f([r([c(), c(), c(), c()])]),
          f([r([c(), c(), c(), c()])]),
          f('N'),
          f(),
          f(),
          f('F'),
          f(),
          f(),
          f('202502041905'),
        ]),
        s('ZPD', [
          f('1'),
          f([r([c('Consent'), c('Signed')])]),
          f('20240115'),
          f([
            r([
              c('Note'),
              c('Parent'),
              c('signature'),
              c('captured'),
              c('via'),
              c(['tablet', 'ModelX', 'HW']),
            ]),
          ]),
        ]),
      ]);

      // When
      const compiled = toHl7v2(constructed, {
        component: '^',
        subcomponent: '&',
        repetition: '~',
        escape: '\\',
        segment: '\n',
        field: '|',
      });

      // Then
      expect(compiled).toEqual(original);
    });
  });
});
