import type { Root } from "@rethinkhealth/hl7v2-ast";
import type { Definition } from "@rethinkhealth/hl7v2-profiles";
import { profiles, runner } from "@rethinkhealth/hl7v2-profiles";
import { getMessageInfo } from "@rethinkhealth/hl7v2-util-message-info";
import { EXIT, visit } from "@rethinkhealth/hl7v2-util-visit";
import { lintRule } from "unified-lint-rule";

const hl7v2LintSegmentOrder = lintRule<
  Root,
  {
    definition?: Definition;
  }
>(
  {
    origin: "hl7v2-lint:segment-order",
  },
  async (tree, file, options) => {
    let definition = options?.definition;
    if (!definition) {
      try {
        const info = getMessageInfo(tree);
        const version = info.version;
        let messageStructure = info.messageStructure;
        if (!messageStructure && info.messageCode && info.triggerEvent) {
          messageStructure = `${info.messageCode}_${info.triggerEvent}`;
        }
        if (!(version && messageStructure)) {
          return;
        }
        definition = await profiles.events.load(version, messageStructure);
      } catch {
        return;
      }
    }

    const automaton = runner(definition);

    visit(tree, "segment", (node, parents) => {
      const symbol = node.name;
      if (!symbol) {
        return;
      }
      const result = automaton.consume(symbol);

      if (result.type === "invalid") {
        const expected = [...result.expected];
        file.fail(
          `Segment '${symbol}' is not allowed at the order defined by the profile. Expected: ${expected.join(", ")}`,
          {
            ancestors: [node, ...parents],
            place: node.position,
          }
        );
        return EXIT;
      }
    });

    if (!automaton.accepted) {
      const nextStates = [...automaton.expected];
      file.fail(
        `Message ended prematurely. Required segments missing: ${nextStates.join(", ")}`,
        {
          ancestors: [tree],
        }
      );
    }
  }
);

export default hl7v2LintSegmentOrder;
