import type { Segment } from "@rethinkhealth/hl7v2-ast";

export function getSegmentId(seg: Segment): string | null {
  return seg.children[0]?.children[0]?.children[0]?.children[0]?.value ?? null;
}
