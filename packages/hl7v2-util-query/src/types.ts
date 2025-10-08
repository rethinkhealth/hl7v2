export type GroupLocator = {
  name: string;
  repetition?: number;
};

export type SegmentLocator = {
  name: string;
  repetition?: number;
};

export type PathParts = {
  groups?: GroupLocator[];
  segment: SegmentLocator;
  field?: number;
  repetition?: number;
  component?: number;
  subcomponent?: number;
};
