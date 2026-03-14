import type { Nodes, Root, Segment } from "@rethinkhealth/hl7v2-ast";
import type { OnMissingProfile } from "@rethinkhealth/hl7v2-lint-profile-utils";
import {
  getFieldValue,
  resolveFieldDefinition,
  resolveVersion,
} from "@rethinkhealth/hl7v2-lint-profile-utils";
import { visit } from "@rethinkhealth/hl7v2-util-visit";
import { lintRule } from "unified-lint-rule";

export interface RequiredFieldsOptions {
  onMissingProfile?: OnMissingProfile;
}

const hl7v2LintRequiredFields = lintRule<Root, RequiredFieldsOptions>(
  {
    origin: "hl7v2-lint:required-fields",
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

      for (const sequence of fieldDef.requiredSequences) {
        const fieldNode = node.children[sequence - 1];
        const profile = fieldDef.bySequence.get(sequence);

        if (!fieldNode || !getFieldValue(fieldNode)) {
          const name = profile?.name ? ` (${profile.name})` : "";
          file.message(
            `Required field ${node.name}-${sequence}${name} is missing or empty`,
            {
              ancestors: [
                ...ancestors,
                node,
                ...(fieldNode ? [fieldNode] : []),
              ],
              place: fieldNode?.position ?? node.position,
            }
          );
        }
      }
    }
  }
);

export default hl7v2LintRequiredFields;
