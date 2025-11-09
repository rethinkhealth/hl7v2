import type { Nodes, Root } from "@rethinkhealth/hl7v2-ast";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { satisfies } from "@rethinkhealth/hl7v2-util-semver";
import { lintRule } from "unified-lint-rule";

export type MessageVersionLintOptions = {
  expression: string;
};

const defaultOptions = {
  expression: "<3.0.0 >=2.3",
} as const;

const hl7v2LintMessageVersion = lintRule<Nodes, MessageVersionLintOptions>(
  {
    origin: "hl7v2-lint:message-version",
    url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-message-version#readme",
  },
  (tree, file, opts) => {
    const options = { ...defaultOptions, ...opts };

    // 1. Validate tree is a Root node.
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

    // 2. Extract message info from annotated data or parse from MSH segment.
    const result = value(rootTree, "MSH-12");

    if (!result?.value || result.value === "") {
      file.fail("Required MSH-12 (version) field is missing or empty", {
        ancestors: result ? [...result.ancestors, result.node] : [rootTree],
        place:
          result?.node?.position ||
          result?.ancestors.at(-1)?.position ||
          rootTree.position,
      });
      return;
    }

    // 5. Ensure version satisfies allowed expression.
    const isValid = satisfies(result.value, options.expression);

    if (!isValid) {
      file.fail(
        `MSH-12 (version) field value '${result.value}' does not satisfy expression '${options.expression}'`,
        {
          ancestors: result ? [...result.ancestors, result.node] : [rootTree],
          place:
            result?.node?.position ||
            result?.ancestors.at(-1)?.position ||
            rootTree.position,
        }
      );
      return;
    }
  }
);

export default hl7v2LintMessageVersion;
