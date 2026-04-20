// Generated datatype profile for ELD (v2.6)

export const id = "ELD";
export const version = "2.6";
export const kind = "composite";
export const title = "Error Location and Description";
export const components = [
  { sequence: 1, name: "Segment ID", datatypeId: "ST", required: false },
  { sequence: 2, name: "Segment Sequence", datatypeId: "NM", required: false },
  { sequence: 3, name: "Field Position", datatypeId: "NM", required: false },
  {
    sequence: 4,
    name: "Code Identifying Error",
    datatypeId: "CWE",
    required: false,
  },
] as const;
