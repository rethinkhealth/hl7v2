import type {
  Field,
  FieldRepetition,
  Nodes,
  Root,
  Segment,
} from "@rethinkhealth/hl7v2-ast";
import type { OnMissingDefinition } from "@rethinkhealth/hl7v2-lint-profile-utils";
import {
  getRepetitionValue,
  resolveDatatypeDefinition,
  resolveFieldDefinition,
} from "@rethinkhealth/hl7v2-lint-profile-utils";
import type {
  DatatypeDefinition,
  FieldProfile,
} from "@rethinkhealth/hl7v2-profiles";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { visit } from "@rethinkhealth/hl7v2-util-visit";
import { lintRule } from "unified-lint-rule";
import type { VFile } from "vfile";

/**
 * Options for the required-components lint rule.
 */
export interface RequiredComponentsOptions {
  /**
   * Controls behavior when a field or datatype definition cannot be found.
   * Default: `"warn"`.
   */
  onMissingDefinition?: OnMissingDefinition;
}

interface RepetitionContext {
  segmentName: string;
  seq: number;
  fieldProfile: FieldProfile;
  fieldNode: Field;
  ancestors: Nodes[];
}

/**
 * Check a single repetition for required components.
 */
function checkRepetition(
  ctx: RepetitionContext,
  repetition: FieldRepetition,
  datatypeDef: DatatypeDefinition,
  file: VFile
): void {
  for (const compSeq of datatypeDef.requiredSequences) {
    const componentNode = repetition.children[compSeq - 1];
    const compProfile = datatypeDef.componentsBySequence.get(compSeq);
    const compName = compProfile?.name ?? `component ${compSeq}`;

    if (!componentNode) {
      file.message(
        `Required component ${ctx.segmentName}-${ctx.seq}.${compSeq} (${compName}) is missing`,
        {
          ancestors: [...ctx.ancestors, ctx.fieldNode, repetition],
          place: repetition.position,
        }
      );
      continue;
    }

    const subcomponent = componentNode.children[0];
    if (!subcomponent || !subcomponent.value) {
      file.message(
        `Required component ${ctx.segmentName}-${ctx.seq}.${compSeq} (${compName}) is empty`,
        {
          ancestors: [
            ...ctx.ancestors,
            ctx.fieldNode,
            repetition,
            componentNode,
          ],
          place: componentNode.position,
        }
      );
    }
  }
}

/**
 * Lint rule that validates required components are present in composite
 * datatype fields based on HL7v2 datatype profiles.
 *
 * For each field, loads the datatype definition and checks that all
 * required components (by sequence number) have non-empty values.
 * Skips non-composite datatypes and empty fields.
 *
 * @example
 * ```typescript
 * unified().use(hl7v2LintRequiredComponents);
 * ```
 */
const hl7v2LintRequiredComponents = lintRule<Root, RequiredComponentsOptions>(
  {
    origin: "hl7v2-lint:required-components",
  },
  async (tree, file, options) => {
    const version = value(tree, "MSH-12")?.value || undefined;
    if (!version) {
      return;
    }

    const onMissing = options?.onMissingDefinition ?? "warn";
    const segments: { node: Segment; parents: Nodes[] }[] = [];

    visit(tree, "segment", (node, parents) => {
      segments.push({ node, parents: [...parents] });
    });

    for (const { node, parents } of segments) {
      if (!node.name) {
        continue;
      }

      const fieldResult = await resolveFieldDefinition(version, node.name);

      if (!fieldResult.ok) {
        if (onMissing === "skip") {
          continue;
        }
        if (onMissing === "fail") {
          file.fail(fieldResult.reason, {
            ancestors: [...parents, node],
            place: node.position,
          });
        }
        file.message(fieldResult.reason, {
          ancestors: [...parents, node],
          place: node.position,
        });
        continue;
      }

      const fieldDef = fieldResult.value;

      for (let i = 0; i < node.children.length; i++) {
        const fieldNode = node.children[i];
        if (!fieldNode) {
          continue;
        }

        const seq = i + 1;
        const fieldProfile = fieldDef.bySequence.get(seq);
        if (!fieldProfile) {
          continue;
        }

        // Skip empty fields — nothing to validate
        if (!getRepetitionValue(fieldNode.children[0])) {
          continue;
        }

        const dtResult = await resolveDatatypeDefinition(
          version,
          fieldProfile.datatype
        );

        if (!dtResult.ok) {
          if (onMissing !== "skip") {
            file.message(dtResult.reason, {
              ancestors: [...parents, node, fieldNode],
              place: fieldNode.position,
            });
          }
          continue;
        }

        const datatypeDef = dtResult.value;

        // Skip non-composite datatypes (primitives have no required components)
        if (
          datatypeDef.kind !== "composite" ||
          datatypeDef.requiredSequences.size === 0
        ) {
          continue;
        }

        const ctx: RepetitionContext = {
          segmentName: node.name,
          seq,
          fieldProfile,
          fieldNode,
          ancestors: [...parents, node],
        };

        for (const repetition of fieldNode.children) {
          checkRepetition(ctx, repetition, datatypeDef, file);
        }
      }
    }
  }
);

export default hl7v2LintRequiredComponents;
