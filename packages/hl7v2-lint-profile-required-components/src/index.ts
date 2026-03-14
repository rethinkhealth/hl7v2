import type {
  Field,
  FieldRepetition,
  Nodes,
  Root,
  Segment,
} from "@rethinkhealth/hl7v2-ast";
import type { OnMissingProfile } from "@rethinkhealth/hl7v2-lint-profile-utils";
import {
  getFieldValue,
  resolveDatatypeDefinition,
  resolveFieldDefinition,
  resolveVersion,
} from "@rethinkhealth/hl7v2-lint-profile-utils";
import type { DatatypeDefinition } from "@rethinkhealth/hl7v2-profiles";
import { visit } from "@rethinkhealth/hl7v2-util-visit";
import { lintRule } from "unified-lint-rule";
import type { VFile } from "vfile";

export interface RequiredComponentsOptions {
  onMissingProfile?: OnMissingProfile;
}

/** Check a single field repetition for missing required components. */
function checkRepetition(
  file: VFile,
  dtDef: DatatypeDefinition,
  repetition: FieldRepetition,
  segmentName: string,
  sequence: number,
  ancestors: Nodes[],
  node: Segment,
  fieldNode: Field
): void {
  for (const compSeq of dtDef.requiredSequences) {
    const component = repetition.children[compSeq - 1];

    const hasValue =
      component?.children?.[0]?.value !== undefined &&
      component.children[0].value.length > 0;

    if (!hasValue) {
      const compProfile = dtDef.componentsBySequence.get(compSeq);
      const compName = compProfile?.name ? ` (${compProfile.name})` : "";
      file.message(
        `Required component ${segmentName}-${sequence}.${compSeq}${compName} is missing or empty`,
        {
          ancestors: [
            ...ancestors,
            node,
            fieldNode,
            repetition,
            ...(component ? [component] : []),
          ],
          place:
            component?.position ?? repetition.position ?? fieldNode.position,
        }
      );
    }
  }
}

const hl7v2LintRequiredComponents = lintRule<Root, RequiredComponentsOptions>(
  {
    origin: "hl7v2-lint:required-components",
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
      const fieldResult = await resolveFieldDefinition(tree, node.name);

      if (!fieldResult.ok) {
        if (onMissing === "warn") {
          file.message(fieldResult.reason, {
            ancestors: [...ancestors, node],
            place: node.position,
          });
        } else if (onMissing === "fail") {
          file.fail(fieldResult.reason, {
            ancestors: [...ancestors, node],
            place: node.position,
          });
        }
        continue;
      }

      const fieldDef = fieldResult.value;

      for (let i = 0; i < node.children.length; i++) {
        const fieldNode = node.children[i]!;
        const sequence = i + 1;
        const fieldProfile = fieldDef.bySequence.get(sequence);

        if (!fieldProfile || !getFieldValue(fieldNode)) {
          continue;
        }

        const dtResult = await resolveDatatypeDefinition(
          tree,
          fieldProfile.datatype
        );
        if (!dtResult.ok || dtResult.value.kind !== "composite") {
          continue;
        }

        for (const repetition of fieldNode.children) {
          checkRepetition(
            file,
            dtResult.value,
            repetition,
            node.name,
            sequence,
            ancestors,
            node,
            fieldNode
          );
        }
      }
    }
  }
);

export default hl7v2LintRequiredComponents;
