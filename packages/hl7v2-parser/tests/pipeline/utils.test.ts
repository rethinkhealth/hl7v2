import { describe, expect, it } from 'vitest';
import {
  detectDelimitersFromMSH,
  splitByString,
} from '../../src/pipeline/utils';

describe('detectDelimitersFromMSH', () => {
  it('should detect default delimiters from MSH segment', () => {
    const delimiters = detectDelimitersFromMSH(
      'MSH|^~\\&|SYSTEM|SENDER|RECEIVER|DESTINATION|20240101120000||ADT^A01|MSG001|P|2.5',
      '\r'
    );

    expect(delimiters).toEqual({
      field: '|',
      component: '^',
      subcomponent: '&',
      repetition: '~',
      escape: '\\',
      segment: '\r',
    });
  });

  it('should detect custom field delimiter from MSH segment', () => {
    const delimiters = detectDelimitersFromMSH(
      'MSH*^~\\&*SYSTEM*SENDER*RECEIVER*DESTINATION*20240101120000*ADT^A01*MSG001*P*2.5',
      '\r'
    );

    expect(delimiters).toEqual({
      field: '*',
      component: '^',
      subcomponent: '&',
      repetition: '~',
      escape: '\\',
      segment: '\r',
    });
  });

  it('should detect custom encoding characters from MSH segment', () => {
    const delimiters = detectDelimitersFromMSH(
      'MSH|^?\\&|SYSTEM|SENDER|RECEIVER|DESTINATION|20240101120000||ADT^A01|MSG001|P|2.5',
      '\r'
    );

    expect(delimiters).toEqual({
      field: '|',
      component: '^',
      subcomponent: '&',
      repetition: '?',
      escape: '\\',
      segment: '\r',
    });
  });

  it('should return empty object if MSH segment is not found', () => {
    const delimiters = detectDelimitersFromMSH(
      'PID|1||12345^^^HOSP^MR||DOE^JOHN^M||19800101|M|||123 MAIN ST^^CITY^ST^12345',
      '\r'
    );

    expect(delimiters).toEqual({});
  });
});

describe('splitByString', () => {
  it('should split text by string delimiter', () => {
    const result = splitByString('Hello, world!', ' ');
    expect(result).toEqual([
      {
        start: 0,
        end: 6,
        value: 'Hello,',
      },
      {
        start: 7,
        end: 13,
        value: 'world!',
      },
    ]);
  });

  it('should split text by string delimiter', () => {
    const result = splitByString('hello*world', '*');
    expect(result).toEqual([
      {
        start: 0,
        end: 5,
        value: 'hello',
      },
      {
        start: 6,
        end: 11,
        value: 'world',
      },
    ]);
  });

  it('should return single item if delimiter is not found', () => {
    const result = splitByString('hello', '*');
    expect(result).toEqual([
      {
        start: 0,
        end: 5,
        value: 'hello',
      },
    ]);
  });
});
