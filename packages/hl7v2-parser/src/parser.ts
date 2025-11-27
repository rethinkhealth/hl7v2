import type { Root } from "@rethinkhealth/hl7v2-ast";
import { loadConfig } from "@rethinkhealth/hl7v2-config";
import { DEFAULT_DELIMITERS } from "@rethinkhealth/hl7v2-utils";
import type { Plugin, Processor } from "unified";
import { defaultPreprocessors, runPreprocessors } from "./preprocessor";
import { parseHL7v2FromIterator } from "./processor";
import { HL7v2Tokenizer } from "./tokenizer";
import type { ParseOptions, ParserContext, Token, Tokenizer } from "./types";

const { settings: DEFAULT_SETTINGS } = loadConfig();

function* iterateTokenizerSync(t: Tokenizer): Iterable<Token> {
  for (let tok = t.next(); tok; tok = t.next()) {
    yield tok;
  }
}

export function parseHL7v2(input: string, opts: ParseOptions = {}): Root {
  let ctx: ParserContext = {
    input,
    delimiters: {
      ...DEFAULT_DELIMITERS,
      ...opts.delimiters,
    },
    settings: {
      ...DEFAULT_SETTINGS,
      ...opts.settings,
    },
  };
  // Run preprocessing
  ctx = runPreprocessors(ctx, opts.preprocess || defaultPreprocessors);
  // Run tokenizer
  const tokenizer = new HL7v2Tokenizer();
  // Reset tokenizer.
  tokenizer.reset(ctx);
  // Parse
  return parseHL7v2FromIterator(iterateTokenizerSync(tokenizer), ctx);
}

const hl7v2Parser: Plugin<[ParseOptions?], string, Root> = function (
  this: Processor,
  options = {}
) {
  this.parser = (document: string) => {
    // Get settings from processor (populated by unified-args from config)
    const settings = this.data("settings");

    return parseHL7v2(document, {
      settings,
      ...options,
    });
  };
};

export default hl7v2Parser;
