// Generated root segment manifest

export interface SegmentModule {
  readonly segments: readonly {
    readonly id: string;
    readonly title: string;
  }[];
}

type SegmentImportFactory = () => Promise<SegmentModule>;

export const segmentImports: Record<string, SegmentImportFactory> = {
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.1/_all": () => import("./v2.1/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.2/_all": () => import("./v2.2/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.3/_all": () => import("./v2.3/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.3.1/_all": () => import("./v2.3.1/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.4/_all": () => import("./v2.4/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.5/_all": () => import("./v2.5/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.5.1/_all": () => import("./v2.5.1/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.6/_all": () => import("./v2.6/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.7/_all": () => import("./v2.7/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.7.1/_all": () => import("./v2.7.1/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.8/_all": () => import("./v2.8/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.8.1/_all": () => import("./v2.8.1/segments.js"),
  // @ts-expect-error — Resolved by bundler; tsc build excludes profile data for performance
  "v2.8.2/_all": () => import("./v2.8.2/segments.js"),
};
