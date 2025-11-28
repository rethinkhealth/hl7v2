import type { Root } from "@rethinkhealth/hl7v2-ast";
import type { HL7v2Settings } from "@rethinkhealth/hl7v2-config";
import { DEFAULT_DELIMITERS } from "@rethinkhealth/hl7v2-utils";
import type { Plugin, Processor } from "unified";
import { defaultPreprocessors, runPreprocessors } from "./preprocessor";
import { parseHL7v2FromIterator } from "./processor";
import { HL7v2Tokenizer } from "./tokenizer";
import type { ParseOptions, ParserContext, Token, Tokenizer } from "./types";

function* iterateTokenizerSync(t: Tokenizer): Iterable<Token> {
  for (let tok = t.next(); tok; tok = t.next()) {
    yield tok;
  }
}

export function parseHL7v2(
  input: string,
  opts: ParseOptions = {},
  settings?: HL7v2Settings
): Root {
  // Merge settings: defaults < provided settings
  // Note: MSH auto-detection (via detectDelimiters preprocessor) runs after this
  // and will override delimiters if the message starts with MSH

  let ctx: ParserContext = {
    input,
    delimiters: {
      ...DEFAULT_DELIMITERS,
      ...settings?.delimiters,
    },
    emptyMode: settings?.experimental?.emptyMode,
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

    return parseHL7v2(document, options, settings);
  };
};

export default hl7v2Parser;
