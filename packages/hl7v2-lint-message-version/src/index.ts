import type { Node, Root } from "@rethinkhealth/hl7v2-ast";
import { find, value } from "@rethinkhealth/hl7v2-util-query";
import { parse, satisfies } from "@rethinkhealth/hl7v2-util-semver";
import { lintRule } from "unified-lint-rule";

const hl7v2LintMessageVersion = lintRule<Node, undefined>(
  {
    origin: "hl7v2-lint:message-version",
    url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-message-version#readme",
  },
  (tree, file) => {
    if (tree.type !== "root") {
      file.fail(
        `The root node is expected to be a message. Received ${tree.type} instead.`,
        {
          ancestors: [tree],
          place: tree.position,
        }
      );
      return;
    }

    const msh12 = find(tree as Root, "MSH-12");
    const place = msh12?.position ?? tree.position;

    if (!msh12) {
      file.fail("Message version (MSH.12) is not present.", {
        ancestors: [tree],
        place,
      });
      return;
    }

    const versionStr = value(tree as Root, "MSH-12");

    if (!versionStr) {
      file.fail(
        "Unexpected value `undefined` for `MSH-12`, expected `string`",
        {
          ancestors: [tree, msh12],
          place,
        }
      );
      return;
    }

    const version = parse(versionStr);

    if (!version) {
      file.fail("The message version is not valid.", {
        ancestors: [tree, msh12],
        place,
      });
      return;
    }

    if (!satisfies(versionStr, "<3.0.0 >=2.3")) {
      file.fail("Message version is not supported.", {
        ancestors: [tree, msh12],
        place,
      });
      return;
    }
  }
);

export default hl7v2LintMessageVersion;
