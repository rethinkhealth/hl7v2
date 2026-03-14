import type { Root, RootData } from "@rethinkhealth/hl7v2-ast";
import type { Definition } from "@rethinkhealth/hl7v2-profiles";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import type { MessageInfo } from "@rethinkhealth/hl7v2-util-message-info";
import {
  getMessageStructure,
  getVersion,
} from "@rethinkhealth/hl7v2-util-message-info";
import type { VFile } from "vfile";

/**
 * Resolve an event profile definition from the tree.
 *
 * Resolution chain:
 * 1. `tree.data.messageInfo` (set by annotator plugins)
 * 2. MSH-9.3 (message structure) and MSH-12 (version) directly from the AST
 * 3. Load the profile via `profiles.events.load()`
 *
 * Reports a diagnostic and returns `undefined` if resolution fails at any step.
 * No compensation logic — if the message structure is not explicitly available,
 * this function does not attempt to infer it.
 */
export async function resolveDefinition(
  tree: Root,
  file: VFile
): Promise<Definition | undefined> {
  const annotated = (tree.data as RootData & { messageInfo?: MessageInfo })
    ?.messageInfo;

  const version = annotated?.version ?? getVersion(tree);
  const messageStructure =
    annotated?.messageStructure ?? getMessageStructure(tree);

  if (!version || !messageStructure) {
    file.message(
      "Cannot validate segment order: missing version (MSH-12) or message structure (MSH-9.3)",
      { ancestors: [tree], place: tree.position }
    );
    return undefined;
  }

  try {
    return await profiles.events.load(version, messageStructure);
  } catch {
    file.message(
      `Cannot validate segment order: no profile found for ${messageStructure} (v${version})`,
      { ancestors: [tree], place: tree.position }
    );
    return undefined;
  }
}
