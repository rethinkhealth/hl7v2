import type { Nodes, Root, Segment } from "@rethinkhealth/hl7v2-ast";
import type { OnMissingProfile } from "@rethinkhealth/hl7v2-lint-profile-utils";
import {
  resolveFieldDefinition,
  resolveVersion,
} from "@rethinkhealth/hl7v2-lint-profile-utils";
import { visit } from "@rethinkhealth/hl7v2-util-visit";
import { lintRule } from "unified-lint-rule";

export interface FieldRepetitionOptions {
  onMissingProfile?: OnMissingProfile;
}

const hl7v2LintFieldRepetition = lintRule<Root, FieldRepetitionOptions>(
  {
    origin: "hl7v2-lint:field-repetition",
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
      segments.push({ node, ancestors: [...parents] });
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

        if (!profile) {continue;}
        if (profile.repeatable) {continue;}

        const repetitionCount = fieldNode.children.length;
        if (repetitionCount > 1) {
          const name = profile.name ? ` (${profile.name})` : "";
          file.message(
            `Field ${node.name}-${sequence}${name} is not repeatable but has ${repetitionCount} repetitions`,
            {
              ancestors: [...ancestors, node, fieldNode],
              place: fieldNode.position,
            }
          );
        }
      }
    }
  }
);

export default hl7v2LintFieldRepetition;
