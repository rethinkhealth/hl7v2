import type { Node, Root } from "@glion/ast";
import { select, value } from "@glion/util-query";
import { satisfies } from "@glion/util-semver";
import ensureError from "ensure-error";
import { lintRule } from "unified-lint-rule";

export interface MessageVersionLintOptions {
  expression: string;
}

const defaultOptions = {
  expression: "<3.0.0 >=2.3",
} as const;

const messages = {
  emptyVersion:
    "The version is empty; a message must declare its HL7v2 version.",
  missingVersion:
    "The message has no `MSH-12` (Version ID); a message must declare its HL7v2 version.",
  notMessage: (kind: string) =>
    `The input is a ${kind}; the version can be read only from \`MSH-12\` (Version ID) of a whole message.`,
  unparsableVersion:
    "The version is not a version number; a version must be numbers separated by dots, such as `2.5` or `2.5.1`.",
  unsupportedVersion: (expression: string) =>
    `The version is outside the supported range; it must satisfy \`${expression}\`.`,
} as const;

const isMessage = (node: Node): node is Root => node.type === "root";

const hl7v2LintMessageVersion = lintRule<Node, MessageVersionLintOptions>(
  {
    origin: "hl7v2-lint:message-version",
    url: "https://github.com/rethinkhealth/glion/tree/main/packages/lint-message-version#readme",
  },
  (tree, file, opts) => {
    const options = { ...defaultOptions, ...opts };

    if (!isMessage(tree)) {
      file.message(messages.notMessage(tree.type), {
        ancestors: [tree],
        place: tree.position,
      });
      return;
    }

    const field = select(tree, "MSH.12");

    if (!field) {
      file.message(messages.missingVersion, {
        ancestors: [tree],
        place: tree.position,
      });
      return;
    }

    const result = value(tree, "MSH.12.1");

    if (!result?.value) {
      const message = file.message(messages.emptyVersion, {
        ancestors: [...field.ancestors, field.node],
        place: field.node.position,
      });
      message.actual = "";
      return;
    }

    const ancestors = [...result.ancestors, result.node];
    const place = result.node.position;

    let isValid: boolean;
    try {
      isValid = satisfies(result.value, options.expression);
    } catch (caughtError) {
      const message = file.message(messages.unparsableVersion, {
        ancestors,
        cause: ensureError(caughtError),
        place,
      });
      message.actual = result.value;
      return;
    }

    if (!isValid) {
      const message = file.message(
        messages.unsupportedVersion(options.expression),
        { ancestors, place }
      );
      message.actual = result.value;
      message.expected = [options.expression];
    }
  }
);

export default hl7v2LintMessageVersion;
