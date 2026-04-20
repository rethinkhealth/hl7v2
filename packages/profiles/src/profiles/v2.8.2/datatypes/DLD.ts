// Generated datatype profile for DLD (v2.8.2)

export const id = "DLD";
export const version = "2.8.2";
export const kind = "composite";
export const title = "Discharge to Location and Date";
export const components = [
  {
    sequence: 1,
    name: "Discharge to Location",
    datatypeId: "CWE",
    required: true,
  },
  { sequence: 2, name: "Effective Date", datatypeId: "DTM", required: false },
] as const;
