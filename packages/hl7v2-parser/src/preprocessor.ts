import { DEFAULT_DELIMITERS } from "@rethinkhealth/hl7v2-utils";
import type { ParserContext, PreprocessorStep } from "./types";

// PreprocessorStep is declared in `types.ts` to avoid circular imports

/**
 * Step: strip UTF-8 BOM.
 */
// biome-ignore lint/style/useNamingConvention: fine
export const stripBOM: PreprocessorStep = (ctx) => {
  if (ctx.input.charCodeAt(0) === 0xfe_ff) {
    ctx.input = ctx.input.slice(1);
  }
  return ctx;
};

/**
 * Step: normalize newlines to the default delimiters.
 */
export const normalizeNewlines: PreprocessorStep = (ctx) => {
  ctx.input = ctx.input.replace(/\r?\n/g, ctx.delimiters.segment);
  return ctx;
};

/**
 * Step: auto-detect delimiters from MSH.
 */
export const detectDelimiters: PreprocessorStep = (ctx) => {
  if (ctx.input.startsWith("MSH")) {
    const field = ctx.input.charAt(3) || DEFAULT_DELIMITERS.field;
    const enc = ctx.input.slice(4, 8);
    const component = enc.charAt(0) || DEFAULT_DELIMITERS.component;
    const repetition = enc.charAt(1) || DEFAULT_DELIMITERS.repetition;
    const _escape = enc.charAt(2) || DEFAULT_DELIMITERS.escape;
    const subcomponent = enc.charAt(3) || DEFAULT_DELIMITERS.subcomponent;
    const segment = DEFAULT_DELIMITERS.segment;

    ctx.delimiters = {
      field,
      component,
      repetition,
      escape: _escape,
      subcomponent,
      segment,
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
  ctx: ParserContext,
  steps: PreprocessorStep[]
): ParserContext {
  for (const step of steps) {
    // biome-ignore lint/style/noParameterAssign: this is necessary to keep no-copy
    ctx = step(ctx);
  }

  return ctx;
}
