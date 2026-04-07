// oxlint-disable-next-line no-unused-vars -- triggers VFile DataMap augmentation
import type { ProfileContext } from "@rethinkhealth/hl7v2-annotate-profile-context";
import type { Root } from "@rethinkhealth/hl7v2-ast";
import { visit } from "@rethinkhealth/hl7v2-util-visit";
import type { Plugin } from "unified";
import type { VFile } from "vfile";

declare module "@rethinkhealth/hl7v2-ast" {
  interface SegmentData {
    /**
     * Human-readable segment title from the HL7v2 specification (e.g., "Message
     * Header").
     */
    title?: string | undefined;
  }
}

/**
 * Unified plugin that annotates Segment nodes with their title from the
 * HL7v2 specification profile.
 *
 * Reads segment definitions from `file.data.profile.segments` (populated by
 * `@rethinkhealth/hl7v2-annotate-profile-context`) and sets
 * `segment.data.title` on each segment node.
 *
 * Unknown segments (Z-segments) and unsupported versions are silently skipped.
 */
export const hl7v2AnnotateProfileSegments: Plugin<[], Root, Root> =
  () => (tree: Root, file: VFile) => {
    const ctx = file.data.profile;
    if (!ctx) {
      return tree;
    }

    const { segments } = ctx;

    visit(tree, "segment", (node) => {
      const profile = segments.byId.get(node.name);
      if (!profile) {
        return;
      }

      if (!node.data) {
        node.data = {};
      }

      node.data.title = profile.title;
    });

    return tree;
  };

export default hl7v2AnnotateProfileSegments;
