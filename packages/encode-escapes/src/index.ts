import type { Delimiters, Nodes, Root } from "@glion/ast";
import { selectAll } from "@glion/util-query";
import { visit } from "@glion/util-visit";
import { DEFAULT_DELIMITERS, encodeEscapes } from "@glion/utils";
import type { Plugin } from "unified";
import type { VFile } from "vfile";

export interface HL7v2EncodeOptions {
  delimiters?: Partial<Delimiters>;
}

/**
 * Unified plugin to encode special characters as HL7v2 escape sequences in
 * subcomponent literals, for a tree that `@glion/to-hl7v2` writes with
 * `encodeEscapes: false`. MSH-1 and MSH-2 are left as they are. A character
 * whose escape code holds a delimiter is written as `\Xdd\`.
 *
 * Delimiter resolution order:
 *
 * 1. `options.delimiters` (explicit override)
 * 2. `file.data.delimiters` (set by hl7v2-annotate-delimiters)
 * 3. `DEFAULT_DELIMITERS`
 *
 * @throws {EscapeSequenceError} When a value holds a character that no escape
 *   sequence can write with the delimiters.
 */
export const hl7v2EncodeEscapes: Plugin<[HL7v2EncodeOptions?], Root, Root> =
  (options) => (tree: Root, file: VFile) => {
    const d = {
      ...((file.data.delimiters as Delimiters | undefined) ??
        DEFAULT_DELIMITERS),
      ...options?.delimiters,
    };

    const encodingCharacters = new Set<Nodes>(
      [...selectAll(tree, "MSH.1"), ...selectAll(tree, "MSH.2")].map(
        (match) => match.node
      )
    );

    visit(tree, "subcomponent", (node, ancestors) => {
      if (
        node.value === undefined ||
        ancestors.some((ancestor) => encodingCharacters.has(ancestor))
      ) {
        return;
      }
      node.value = encodeEscapes(node.value, d);
    });

    return tree;
  };
