// Generated datatype profile for ELD (v2.5)

export const id = "ELD";
export const version = "2.5";
export const kind = "composite";
export const title = "Error Location and Description";
export const components = [
  { datatypeId: "ST", name: "Segment ID", required: false, sequence: 1 },
  { datatypeId: "NM", name: "Segment Sequence", required: false, sequence: 2 },
  { datatypeId: "NM", name: "Field Position", required: false, sequence: 3 },
  {
    datatypeId: "CE",
    name: "Code Identifying Error",
    required: false,
    sequence: 4,
  },
] as const;
