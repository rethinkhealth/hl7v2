import type { Node, Nodes, Root } from "@rethinkhealth/hl7v2-ast";
import type { Processor } from "unified";
import { toJsonRuntime } from "./runtime";
import type { Hl7v2JsonResult } from "./types";

export function hl7v2Jsonify(this: Processor) {
  const self = this as unknown as Processor<
    Node,
    undefined,
    undefined,
    Root,
    undefined
  >;

  function compiler(tree: Nodes): Hl7v2JsonResult {
    return toJsonRuntime(tree);
  }

  self.compiler = compiler as unknown as typeof self.compiler;
}
