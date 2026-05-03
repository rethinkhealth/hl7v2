// Generated datatype profile for DLD (v2.5.1)

export const id = "DLD";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Discharge Location and Date";
export const components = [
  {
    datatypeId: "IS",
    name: "Discharge Location",
    required: false,
    sequence: 1,
  },
  { datatypeId: "TS", name: "Effective Date", required: false, sequence: 2 },
] as const;
