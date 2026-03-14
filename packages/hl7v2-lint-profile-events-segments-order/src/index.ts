import type { Root } from "@rethinkhealth/hl7v2-ast";
import type { Definition } from "@rethinkhealth/hl7v2-profiles";
import { runner } from "@rethinkhealth/hl7v2-profiles";
import { EXIT, visit } from "@rethinkhealth/hl7v2-util-visit";
import { lintRule } from "unified-lint-rule";

import { resolveDefinition } from "./resolve";

export type { ResolveResult } from "./resolve";

export interface SegmentOrderOptions {
  definition?: Definition;
}

const hl7v2LintSegmentOrder = lintRule<Root, SegmentOrderOptions>(
  {
    origin: "hl7v2-lint:segment-order",
  },
  async (tree, file, options) => {
    let definition = options?.definition;

    if (!definition) {
      const result = await resolveDefinition(tree);
      if (!result.ok) {
        file.message(result.reason, {
          ancestors: [tree],
          place: tree.position,
        });
        return;
      }
      definition = result.definition;
    }

    const automaton = runner(definition);
    let aborted = false;

    visit(tree, "segment", (node, parents) => {
      const symbol = node.name;
      if (!symbol) {
        aborted = true;
        file.message("Segment has empty segment name at this position", {
          ancestors: [...parents, node],
          place: node.position,
        });
        return EXIT;
      }

      const result = automaton.consume(symbol);

      if (result.type === "invalid") {
        aborted = true;
        file.message(
          `Unexpected segment '${symbol}'. Expected: ${result.expected.join(", ")}`,
          { ancestors: [...parents, node], place: node.position }
        );
        return EXIT;
      }
    });

    if (!aborted && !automaton.accepted) {
      file.message(
        `Message ended prematurely. Expected: ${automaton.expected.join(", ")}`,
        { ancestors: [tree], place: tree.position }
      );
    }
  }
);

export default hl7v2LintSegmentOrder;
