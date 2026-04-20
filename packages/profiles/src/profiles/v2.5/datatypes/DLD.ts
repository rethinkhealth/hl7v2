// Generated datatype profile for DLD (v2.5)

export const id = "DLD";
export const version = "2.5";
export const kind = "composite";
export const title = "Discharge Location and Date";
export const components = [
  {
    sequence: 1,
    name: "Discharge Location",
    datatypeId: "IS",
    required: false,
  },
  { sequence: 2, name: "Effective Date", datatypeId: "TS", required: false },
] as const;
