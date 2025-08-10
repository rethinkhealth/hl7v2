import type { ParseOptions, ParserContext } from './types';

/**
 * A preprocessing step: takes a ParserContext, mutates or replaces it.
 */
export type PreprocessorStep = (ctx: ParserContext) => ParserContext;

/**
 * Step: strip UTF-8 BOM.
 */
export const stripBOM: PreprocessorStep = (ctx) => {
  if (ctx.input.charCodeAt(0) === 0xfe_ff) {
    ctx.input = ctx.input.slice(1);
  }
  return ctx;
};

/**
 * Step: normalize newlines to CR (\r).
 */
export const normalizeNewlines: PreprocessorStep = (ctx) => {
  ctx.input = ctx.input.replace(/\r?\n/g, '\r');
  return ctx;
};

/**
 * Step: auto-detect delimiters from MSH.
 */
export const detectDelimiters: PreprocessorStep = (ctx) => {
  if (ctx.input.startsWith('MSH')) {
    const fieldDelim = ctx.input.charAt(3) || '|';
    const enc = ctx.input.slice(4, 8);
    const component = enc.charAt(0) || '^';
    const repetition = enc.charAt(1) || '~';
    const _escape = enc.charAt(2) || '\\';
    const subcomponent = enc.charAt(3) || '&';

    ctx.options.delimiters = {
      field: fieldDelim,
      component,
      repetition,
      escape: _escape,
      subcomponent,
      segment: '\r',
    };
  }
  return ctx;
};

/**
 * Default preprocessing pipeline.
 */
export const defaultPreprocessors: PreprocessorStep[] = [
  stripBOM,
  normalizeNewlines,
  detectDelimiters,
];

/**
 * Run the pipeline to initialize ParserContext.
 */
export function runPreprocessors(
  raw: string,
  opts: ParseOptions = {},
  steps: PreprocessorStep[] = defaultPreprocessors
): ParserContext {
  let ctx: ParserContext = {
    input: raw,
    options: opts,
    metadata: {},
  };

  for (const step of steps) {
    ctx = step(ctx);
  }

  return ctx;
}
