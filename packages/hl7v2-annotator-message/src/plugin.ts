import type { Root } from "@rethinkhealth/hl7v2-ast";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { report } from "@rethinkhealth/hl7v2-utils";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import { diagnostics } from "./diagnostics";
import type { MessageAnnotatorOptions, MessageDetails } from "./types";

export const messageAnnotator: Plugin<[MessageAnnotatorOptions?], Root> = (
  options
) => {
  const { strict = false } = options ?? {};

  return (tree, file) => {
    // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: visit is a simple visitor pattern
    visit(tree, "root", (node) => {
      const messageCode = value(node, "MSH-9.1") || undefined;
      const triggerEvent = value(node, "MSH-9.2") || undefined;
      let messageStructure = value(node, "MSH-9.3") || undefined;
      const version = value(node, "MSH-12") || undefined;

      if (!version) {
        report(file, diagnostics.msh12_missing, {
          context: { version },
        });
      }

      // Derive MSH-9.3 from MSH-9.1 and MSH-9.2 if missing (unless in strict mode)
      const canDerive = !messageStructure && messageCode && triggerEvent;
      if (!strict && canDerive) {
        messageStructure = `${messageCode}_${triggerEvent}`;

        report(file, diagnostics.msh9_3_derived, {
          context: {
            messageCode,
            triggerEvent,
            messageStructure,
          },
        });
      } else if (strict && canDerive) {
        // In strict mode, emit error when MSH-9.3 is missing
        report(file, diagnostics.msh9_3_missing, {
          context: {
            messageCode,
            triggerEvent,
            messageStructure,
          },
        });
      }

      file.data.message = {
        version,
        code: messageCode,
        event: triggerEvent,
        structure: messageStructure,
      } satisfies MessageDetails;
    });

    return tree;
  };
};
