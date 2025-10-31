import type { Nodes, Root } from "@rethinkhealth/hl7v2-ast";
import { find, value } from "@rethinkhealth/hl7v2-util-query";
import { parse, satisfies } from "@rethinkhealth/hl7v2-util-semver";
import { lintRule } from "unified-lint-rule";

export type MessageVersionLintOptions = {
  expression: string;
};

const defaultOptions: Required<MessageVersionLintOptions> = {
  expression: "<3.0.0 >=2.3",
};

const hl7v2LintMessageVersion = lintRule<Nodes, MessageVersionLintOptions>(
  {
    origin: "hl7v2-lint:message-version",
    url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-message-version#readme",
  },
  (tree, file, opts) => {
    const options = { ...defaultOptions, ...opts };

    // 1. Ensure the root node is a Root node.
    if (tree.type !== "root") {
      file.fail(
        `The root node is expected to be a Root node. Received ${tree.type} instead.`
      );
    }

    // 2. Ensure the MSH-12 segment is present.
    const msh12 = find(tree as Root, "MSH-12");

    if (!msh12) {
      file.fail("MSH-12 segment is missing.");
    }

    const versionStr = value(tree as Root, "MSH-12");

    if (!versionStr) {
      file.fail(
        "MSH-12 segment value is required. Received empty string instead."
      );
    }

    // 3. Ensure the MSH-12 segment value is a valid version.
    try {
      parse(versionStr ?? "");
    } catch (_err) {
      file.fail(
        `MSH-12 segment value is invalid. Received '${versionStr}' instead.`
      );
    }

    // 4. Ensure the MSH-12 segment value satisfies the expression.
    try {
      const isValid = satisfies(versionStr ?? "", options.expression);

      if (!isValid) {
        file.fail(
          `MSH-12 segment value is not supported. Received '${versionStr}' instead.`
        );
      }
    } catch (_err) {
      file.fail(
        `MSH-12 segment value is not supported. Received '${versionStr}' instead.`
      );
    }
  }
);

export default hl7v2LintMessageVersion;
