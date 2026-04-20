import type { Root } from "@glion/ast";
import { delimiters } from "@glion/util-query";
import type { Plugin } from "unified";
import type { VFile } from "vfile";

/**
 * Unified plugin that derives delimiters from MSH-1/MSH-2
 * and stores them on `file.data.delimiters`.
 *
 * Run this early in the pipeline so downstream plugins
 * can read `file.data.delimiters` without re-deriving.
 */
export const hl7v2AnnotateDelimiters: Plugin<[], Root, Root> =
  () => (tree: Root, file: VFile) => {
    file.data.delimiters = delimiters(tree);
    return tree;
  };
