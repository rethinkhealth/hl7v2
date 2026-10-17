import type { Delimiters, Root } from "@glion/ast";
import { visit } from "@glion/util-visit";
import { DEFAULT_DELIMITERS, encodeEscapes } from "@glion/utils";
import type { Plugin } from "unified";
import type { VFile } from "vfile";

const ENCODING_CHARACTER_FIELDS = 2;

export interface HL7v2EncodeOptions {
  delimiters?: Partial<Delimiters>;
}

/**
 * Unified plugin to encode special characters as HL7v2 escape sequences in
 * subcomponent literals, for a tree that `@glion/to-hl7v2` writes with
 * `encodeEscapes: false`. MSH-1 and MSH-2 are left as they are.
 *
 * Delimiter resolution order:
 *
 * 1. `options.delimiters` (explicit override)
 * 2. `file.data.delimiters` (set by hl7v2-annotate-delimiters)
 * 3. `DEFAULT_DELIMITERS`
 */
export const hl7v2EncodeEscapes: Plugin<[HL7v2EncodeOptions?], Root, Root> =
  (options) => (tree: Root, file: VFile) => {
    const d = {
      ...((file.data.delimiters as Delimiters | undefined) ??
        DEFAULT_DELIMITERS),
      ...options?.delimiters,
    };

    visit(tree, "segment", (segment) => {
      const fields =
        segment.name === "MSH"
          ? segment.children.slice(ENCODING_CHARACTER_FIELDS)
          : segment.children;
      for (const field of fields) {
        visit(field, "subcomponent", (node) => {
          if (node.value !== undefined) {
            node.value = encodeEscapes(node.value, d);
          }
        });
      }
    });

    return tree;
  };
