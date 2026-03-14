import type { Nodes, Root, Segment } from "@rethinkhealth/hl7v2-ast";
import type { OnMissingProfile } from "@rethinkhealth/hl7v2-lint-profile-utils";
import {
  getRepetitionValue,
  resolveFieldDefinition,
  resolveVersion,
} from "@rethinkhealth/hl7v2-lint-profile-utils";
import { visit } from "@rethinkhealth/hl7v2-util-visit";
import { lintRule } from "unified-lint-rule";

export interface FieldMaxLengthOptions {
  onMissingProfile?: OnMissingProfile;
}

const hl7v2LintFieldMaxLength = lintRule<Root, FieldMaxLengthOptions>(
  {
    origin: "hl7v2-lint:field-max-length",
  },
  async (tree, file, options) => {
    const versionResult = resolveVersion(tree);
    if (!versionResult.ok) {
      file.message(versionResult.reason, {
        ancestors: [tree],
        place: tree.position,
      });
      return;
    }

    const onMissing = options?.onMissingProfile ?? "skip";

    const segments: { node: Segment; ancestors: Nodes[] }[] = [];
    visit(tree, "segment", (node, parents) => {
      segments.push({
        node: node as Segment,
        ancestors: [...parents] as Nodes[],
      });
    });

    for (const { node, ancestors } of segments) {
      const result = await resolveFieldDefinition(tree, node.name);

      if (!result.ok) {
        if (onMissing === "warn") {
          file.message(result.reason, {
            ancestors: [...ancestors, node],
            place: node.position,
          });
        } else if (onMissing === "fail") {
          file.fail(result.reason, {
            ancestors: [...ancestors, node],
            place: node.position,
          });
        }
        continue;
      }

      const fieldDef = result.value;

      for (let i = 0; i < node.children.length; i++) {
        const fieldNode = node.children[i]!;
        const sequence = i + 1;
        const profile = fieldDef.bySequence.get(sequence);

        if (!profile?.maxLength) {
          continue;
        }

        for (const repetition of fieldNode.children) {
          const val = getRepetitionValue(repetition);
          if (!val) {
            continue;
          }

          if (val.length > profile.maxLength) {
            file.message(
              `Field ${node.name}-${sequence} exceeds max length of ${profile.maxLength} (actual: ${val.length})`,
              {
                ancestors: [...ancestors, node, fieldNode, repetition],
                place: repetition.position ?? fieldNode.position,
              }
            );
          }
        }
      }
    }
  }
);

export default hl7v2LintFieldMaxLength;
