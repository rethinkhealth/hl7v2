export type FieldJson = string | string[];

export type SegmentJson = {
  segment: string;
  fields: (FieldJson | FieldJson[])[]; // Nested arrays for fields/repetitions/components
};

export type GroupJson = {
  group: string;
  children: Array<SegmentJson | GroupJson>; // Groups can contain segments and nested groups
};

export type Hl7v2JsonResult = Array<SegmentJson | GroupJson>;
