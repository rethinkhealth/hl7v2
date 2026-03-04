export type FieldJson = string | string[];

export interface SegmentJson {
  segment: string;
  fields: (FieldJson | FieldJson[])[]; // Nested arrays for fields/repetitions/components
}

export interface GroupJson {
  group: string;
  children: Array<SegmentJson | GroupJson>; // Groups can contain segments and nested groups
}

export type Hl7v2JsonResult = (SegmentJson | GroupJson)[];
