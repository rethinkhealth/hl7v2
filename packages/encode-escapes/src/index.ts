import type { Delimiters, Root, Segment, Subcomponent } from "@glion/ast";
import { DEFAULT_DELIMITERS, encodeEscapes } from "@glion/utils";
import type { Plugin } from "unified";
import { SKIP, visit } from "unist-util-visit";
import type { VFile } from "vfile";

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

    visit(tree, (node, index, parent) => {
      // Skip MSH-1 (index 0) and MSH-2 (index 1) — they define delimiters
      if (
        node.type === "field" &&
        index !== undefined &&
        index < 2 &&
        parent?.type === "segment" &&
        (parent as Segment).name === "MSH"
      ) {
        return SKIP;
      }

      if (node.type === "subcomponent") {
        (node as Subcomponent).value = encodeEscapes(
          (node as Subcomponent).value,
          d
        );
      }
    });

    return tree;
  };
