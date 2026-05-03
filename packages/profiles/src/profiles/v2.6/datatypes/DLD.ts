// Generated datatype profile for DLD (v2.6)

export const id = "DLD";
export const version = "2.6";
export const kind = "composite";
export const title = "Discharge to Location and Date";
export const components = [
  {
    datatypeId: "CWE",
    name: "Discharge to Location",
    required: true,
    sequence: 1,
  },
  { datatypeId: "DTM", name: "Effective Date", required: false, sequence: 2 },
] as const;
