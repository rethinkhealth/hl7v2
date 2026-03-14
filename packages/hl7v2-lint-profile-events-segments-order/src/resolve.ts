import type { Root, RootData } from "@rethinkhealth/hl7v2-ast";
import type { Definition } from "@rethinkhealth/hl7v2-profiles";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import type { MessageInfo } from "@rethinkhealth/hl7v2-util-message-info";
import {
  getMessageStructure,
  getVersion,
} from "@rethinkhealth/hl7v2-util-message-info";

/**
 * Discriminated result for definition resolution.
 *
 * Follows the Result pattern — either success with a definition,
 * or failure with a human-readable reason. The caller decides
 * how to handle the failure (report to VFile, throw, log, etc.).
 */
export type ResolveResult =
  | { ok: true; definition: Definition }
  | { ok: false; reason: string };

/**
 * Resolve an event profile definition from the tree.
 *
 * This is a **pure function** with no side effects — it does not report
 * to VFile or throw. It returns a {@link ResolveResult} that the caller
 * can handle as appropriate.
 *
 * **Resolution chain** (first match wins):
 * 1. `tree.data.messageInfo` — set by `hl7v2-annotate-message` and
 *    `hl7v2-annotate-message-structure` plugins in the unified pipeline
 * 2. `MSH-9.3` (message structure) and `MSH-12` (version) — read directly
 *    from the AST via `hl7v2-util-message-info`
 * 3. Load the profile via `profiles.events.load(version, messageStructure)`
 *
 * **No compensation**: if the message structure is not explicitly available
 * (e.g. MSH-9.3 is absent and the annotator hasn't run), this function
 * returns `{ ok: false }` rather than attempting naive concatenation.
 *
 * @param tree - The HL7v2 AST root node
 * @returns A result containing the definition, or a reason string on failure
 */
export async function resolveDefinition(tree: Root): Promise<ResolveResult> {
  // Step 1: Read from annotated tree data (if annotator plugins have run)
  const annotated = (tree.data as RootData & { messageInfo?: MessageInfo })
    ?.messageInfo;

  // Step 2: Fall back to reading MSH fields directly from the AST
  const version = annotated?.version ?? getVersion(tree);
  const messageStructure =
    annotated?.messageStructure ?? getMessageStructure(tree);

  if (!version || !messageStructure) {
    return {
      ok: false,
      reason:
        "Cannot validate segment order: missing version (MSH-12) or message structure (MSH-9.3)",
    };
  }

  // Step 3: Load the profile definition (handles alias resolution internally)
  try {
    const definition = await profiles.events.load(version, messageStructure);
    return { ok: true, definition };
  } catch {
    return {
      ok: false,
      reason: `Cannot validate segment order: no profile found for ${messageStructure} (v${version})`,
    };
  }
}
