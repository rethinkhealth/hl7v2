import { describe, expect, it } from 'vitest';
import {
  detectDelimiters,
  normalizeNewlines,
  runPreprocessors,
  stripBOM,
} from '../src/preprocessor';
import type { ParserContext } from '../src/types';

describe('preprocessor steps', () => {
  describe('stripBOM', () => {
    it('removes UTF-8 BOM at start of input', () => {
      const bomChar = '\uFEFF';
      const ctx: ParserContext = {
        input: `${bomChar}MSH|^~\\&`,
        options: {},
        metadata: {},
      };
      const result = stripBOM(ctx);
      expect(result.input).toBe('MSH|^~\\&');
    });

    it('leaves input unchanged if no BOM', () => {
      const ctx: ParserContext = {
        input: 'MSH|^~\\&',
        options: {},
        metadata: {},
      };
      const result = stripBOM(ctx);
      expect(result.input).toBe('MSH|^~\\&');
    });

    it('leaves input unchanged if BOM is not at start', () => {
      const ctx: ParserContext = {
        input: 'ABC\uFEFFMSH|^~\\&',
        options: {},
        metadata: {},
      };
      const result = stripBOM(ctx);
      expect(result.input).toBe('ABC\uFEFFMSH|^~\\&');
    });
  });

  describe('normalizeNewlines', () => {
    it('converts LF to CR', () => {
      const ctx: ParserContext = {
        input: 'MSH|A\nPID|B',
        options: {},
        metadata: {},
      };
      const result = normalizeNewlines(ctx);
      expect(result.input).toBe('MSH|A\rPID|B');
    });

    it('converts CRLF to CR', () => {
      const ctx: ParserContext = {
        input: 'MSH|A\r\nPID|B',
        options: {},
        metadata: {},
      };
      const result = normalizeNewlines(ctx);
      expect(result.input).toBe('MSH|A\rPID|B');
    });

    it('leaves CR untouched', () => {
      const ctx: ParserContext = {
        input: 'MSH|A\rPID|B',
        options: {},
        metadata: {},
      };
      const result = normalizeNewlines(ctx);
      expect(result.input).toBe('MSH|A\rPID|B');
    });
  });

  describe('detectDelimiters', () => {
    it('detects delimiters from MSH-1 and MSH-2', () => {
      // MSH-1: '*', MSH-2: %$#& etc.
      const ctx: ParserContext = {
        input: 'MSH*%$#&',
        options: {},
        metadata: {},
      };
      const result = detectDelimiters(ctx);
      expect(result.options.delimiters?.field).toBe('*');
      expect(result.options.delimiters?.component).toBe('%');
      expect(result.options.delimiters?.repetition).toBe('$');
      expect(result.options.delimiters?.escape).toBe('#');
      expect(result.options.delimiters?.subcomponent).toBe('&');
    });

    it('does not change delimiters if input does not start with MSH', () => {
      const ctx: ParserContext = {
        input: 'PID|123',
        options: {},
        metadata: {},
      };
      const result = detectDelimiters(ctx);
      expect(result.options.delimiters).toBeUndefined();
    });
  });
});

describe('runPreprocessors', () => {
  it('runs all default preprocessors in sequence', () => {
    const bomChar = '\uFEFF';
    const msg = 'MSH|^~\\&\nPID|123';
    const raw = bomChar + msg;

    const ctx = runPreprocessors(raw, {});
    expect(ctx.input).toBe('MSH|^~\\&\rPID|123');
    expect(ctx.options.delimiters?.field).toBe('|');
    expect(ctx.options.delimiters?.component).toBe('^');
  });

  it('respects custom step arrays', () => {
    const ctx = runPreprocessors('ABC\nXYZ', {}, [normalizeNewlines]);
    expect(ctx.input).toBe('ABC\rXYZ');
  });
});
