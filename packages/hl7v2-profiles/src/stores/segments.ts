import type { SegmentModule } from "../profiles/segment-manifest.js";
import { segmentImports } from "../profiles/segment-manifest.js";
import type { ProfileStoreConfig } from "../store.js";
import type { SegmentDefinition, SegmentProfile } from "./types.js";

/** Compile raw segment module into indexed definition. */
const compileSegments = (raw: SegmentModule): SegmentDefinition => {
  const byId = new Map<string, SegmentProfile>();

  for (const segment of raw.segments) {
    byId.set(segment.id, segment);
  }

  return { byId };
};

/** Store configuration for segment profiles. */
export const segmentsConfig: ProfileStoreConfig<
  SegmentModule,
  SegmentDefinition
> = {
  namespace: "segments",
  manifest: segmentImports,
  compile: compileSegments,
};
