import type { Root, RootData } from "@rethinkhealth/hl7v2-ast";
import type { Definition } from "@rethinkhealth/hl7v2-profiles";
import { profiles, runner } from "@rethinkhealth/hl7v2-profiles";
import type { MessageInfo } from "@rethinkhealth/hl7v2-util-message-info";
import {
  getMessageStructure,
  getVersion,
} from "@rethinkhealth/hl7v2-util-message-info";
import { EXIT, visit } from "@rethinkhealth/hl7v2-util-visit";
import { lintRule } from "unified-lint-rule";

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
      // 1. Try annotated data from tree.data.messageInfo
      const annotated = (tree.data as RootData & { messageInfo?: MessageInfo })
        ?.messageInfo;
      const version = annotated?.version ?? getVersion(tree);
      const messageStructure =
        annotated?.messageStructure ?? getMessageStructure(tree);

      if (!version || !messageStructure) {
        file.message(
          "Cannot validate segment order: missing version (MSH-12) or message structure (MSH-9.3)",
          { ancestors: [tree], place: tree.position }
        );
        return;
      }

      try {
        definition = await profiles.events.load(version, messageStructure);
      } catch {
        file.message(
          `Cannot validate segment order: no profile found for ${messageStructure} (v${version})`,
          { ancestors: [tree], place: tree.position }
        );
        return;
      }
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
