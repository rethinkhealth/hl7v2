import type { Nodes, Root, RootData } from "@rethinkhealth/hl7v2-ast";
import type { MessageInfo } from "@rethinkhealth/hl7v2-util-message-info";
import { getMessageInfo } from "@rethinkhealth/hl7v2-util-message-info";
import { parse, satisfies } from "@rethinkhealth/hl7v2-util-semver";
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
        `Root node type must be 'root' — received '${tree.type}' instead`
      );
      return;
    }

    const rootTree = tree as Root;

    // 2. Extract message info from annotated data or parse from MSH segment.
    const annotatedMessageInfo = (
      rootTree.data as RootData & { messageInfo?: MessageInfo }
    )?.messageInfo;
    const messageInfo = annotatedMessageInfo ?? getMessageInfo(rootTree);

    // 3. Ensure version is present.
    if (!messageInfo?.version) {
      file.fail("Required MSH-12 (version) field is missing or empty");
      return;
    }

    // 4. Validate version string is a syntactically valid version.
    try {
      parse(messageInfo.version);
    } catch {
      file.fail(
        `MSH-12 (version) field value '${messageInfo.version}' is not a valid semver format`
      );
      return;
    }

    // 5. Ensure version satisfies allowed expression.
    const isValid = satisfies(messageInfo.version, options.expression);

    if (!isValid) {
      file.fail(
        `MSH-12 (version) field value '${messageInfo.version}' does not satisfy expression '${options.expression}'`
      );
    }
  }
);

export default hl7v2LintMessageVersion;
