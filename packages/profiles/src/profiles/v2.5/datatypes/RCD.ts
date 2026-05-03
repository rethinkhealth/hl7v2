// Generated datatype profile for RCD (v2.5)

export const id = "RCD";
export const version = "2.5";
export const kind = "composite";
export const title = "Row Column Definition";
export const components = [
  {
    datatypeId: "ST",
    name: "Segment Field Name",
    required: false,
    sequence: 1,
  },
  { datatypeId: "ID", name: "HL7 Data Type", required: false, sequence: 2 },
  {
    datatypeId: "NM",
    name: "Maximum Column Width",
    required: false,
    sequence: 3,
  },
] as const;
