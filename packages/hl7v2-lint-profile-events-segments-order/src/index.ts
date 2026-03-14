import type { Root } from "@rethinkhealth/hl7v2-ast";
import type { Definition } from "@rethinkhealth/hl7v2-profiles";
import { runner } from "@rethinkhealth/hl7v2-profiles";
import { EXIT, visit } from "@rethinkhealth/hl7v2-util-visit";
import { lintRule } from "unified-lint-rule";

import { resolveDefinition } from "./resolve";

export interface SegmentOrderOptions {
  definition?: Definition;
}

const hl7v2LintSegmentOrder = lintRule<Root, SegmentOrderOptions>(
  {
    origin: "hl7v2-lint:segment-order",
  },
  async (tree, file, options) => {
    const definition =
      options?.definition ?? (await resolveDefinition(tree, file));
    if (!definition) {
      return;
    }

    const automaton = runner(definition);
    let hasInvalidSegment = false;

    visit(tree, "segment", (node, parents) => {
      const symbol = node.name;
      if (!symbol) {
        return;
      }

      const result = automaton.consume(symbol);

      if (result.type === "invalid") {
        hasInvalidSegment = true;
        file.message(
          `Unexpected segment '${symbol}'. Expected: ${result.expected.join(", ")}`,
          { ancestors: [...parents, node], place: node.position }
        );
        return EXIT;
      }
    });

    if (!hasInvalidSegment && !automaton.accepted) {
      file.message(
        `Message ended prematurely. Expected: ${automaton.expected.join(", ")}`,
        { ancestors: [tree], place: tree.position }
      );
    }
  }
);

export default hl7v2LintSegmentOrder;
