import type { Nodes, Root } from "@rethinkhealth/hl7v2-ast";
import { select, value } from "@rethinkhealth/hl7v2-util-query";
import { lintRule } from "unified-lint-rule";

/**
 * hl7v2-lint rule to warn when message structure (MSH-9.3) is missing.
 *
 * This rule validates that the MSH-9.3 field is present in the source message.
 * It queries the AST directly to ensure order-independent validation.
 *
 * Real-world HL7v2 messages often omit MSH-9.3, especially in older versions.
 * This linter helps identify such messages for compliance or quality tracking.
 *
 * @example
 * ```typescript
 * import { unified } from 'unified';
 * import { hl7v2Parser } from '@rethinkhealth/hl7v2-parser';
 * import { hl7v2LintMessageStructure } from '@rethinkhealth/hl7v2-lint-message-structure-missing';
 *
 * const processor = unified()
 *   .use(hl7v2Parser)
 *   .use(hl7v2LintMessageStructure, ['error']); // or ['warn']
 *
 * const result = await processor.process(message);
 * // Will fail if MSH-9.3 is missing
 * ```
 */
const hl7v2LintMessageStructure = lintRule<Nodes, undefined>(
  {
    origin: "hl7v2-lint:message-structure",
    url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-message-structure-missing#readme",
  },
  (tree, file) => {
    // Validate tree is a Root node
    if (tree.type !== "root") {
      file.fail(
        `Root node type must be 'root' — received '${tree.type}' instead`,
        {
          ancestors: [tree],
          place: tree.position,
        }
      );
      return;
    }

    const rootTree = tree as Root;

    // Query MSH-9.3 directly from the AST (order-independent, source validation)
    const result = value(rootTree, "MSH-9.3");

    // Fail if message structure is missing or empty
    if (!result?.value) {
      // Build the ancestor chain for precise error location
      const ancestors = result?.node
        ? [...result.ancestors, result.node]
        : [rootTree];

      // Use the node's position if available, otherwise fall back to root
      const place =
        result?.node?.position ||
        select(rootTree, "MSH-9")?.node.position ||
        select(rootTree, "MSH")?.node.position ||
        rootTree.position;

      file.fail("MSH-9.3 (message structure) field is missing or empty", {
        ancestors,
        place,
      });
    }
  }
);

export default hl7v2LintMessageStructure;
