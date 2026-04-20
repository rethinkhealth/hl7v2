// Generated datatype profile for RCD (v2.5)

export const id = "RCD";
export const version = "2.5";
export const kind = "composite";
export const title = "Row Column Definition";
export const components = [
  {
    sequence: 1,
    name: "Segment Field Name",
    datatypeId: "ST",
    required: false,
  },
  { sequence: 2, name: "HL7 Data Type", datatypeId: "ID", required: false },
  {
    sequence: 3,
    name: "Maximum Column Width",
    datatypeId: "NM",
    required: false,
  },
] as const;
