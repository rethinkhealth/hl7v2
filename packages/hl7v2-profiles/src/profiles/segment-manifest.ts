// Generated root segment manifest

import type { SegmentModule } from "../stores/types.js";

type SegmentImportFactory = () => Promise<SegmentModule>;

export const segmentImports: Record<string, SegmentImportFactory> = {
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.1": () => import("./v2.1/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.2": () => import("./v2.2/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.3": () => import("./v2.3/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.3.1": () => import("./v2.3.1/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.4": () => import("./v2.4/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.5": () => import("./v2.5/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.5.1": () => import("./v2.5.1/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.6": () => import("./v2.6/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.7": () => import("./v2.7/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.7.1": () => import("./v2.7.1/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.8": () => import("./v2.8/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.8.1": () => import("./v2.8.1/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.8.2": () => import("./v2.8.2/segments.js"),
};
