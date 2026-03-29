import type { Root } from "@rethinkhealth/hl7v2-ast";
import type { Definition } from "@rethinkhealth/hl7v2-profiles";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { value } from "@rethinkhealth/hl7v2-util-query";

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
 * **Resolution**: reads `MSH-9.3` (message structure) and `MSH-12`
 * (version) directly from the AST via `hl7v2-util-query`, then loads
 * the profile via `profiles.events.load(version, messageStructure)`.
 *
 * **No compensation**: if the message structure is not explicitly available
 * (e.g. MSH-9.3 is absent), this function returns `{ ok: false }` rather
 * than attempting naive concatenation.
 *
 * @param tree - The HL7v2 AST root node
 * @returns A result containing the definition, or a reason string on failure
 */
export async function resolveDefinition(tree: Root): Promise<ResolveResult> {
  const version = value(tree, "MSH-12.1")?.value || undefined;
  const messageStructure = value(tree, "MSH-9.3")?.value || undefined;

  if (!version || !messageStructure) {
    return {
      ok: false,
      reason:
        "Cannot validate segment order: missing version (MSH-12) or message structure (MSH-9.3)",
    };
  }

  // Load the profile definition (handles alias resolution internally)
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
