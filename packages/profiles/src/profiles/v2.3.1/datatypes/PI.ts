// Generated datatype profile for PI (v2.3.1)

export const id = "PI";
export const version = "2.3.1";
export const kind = "composite";
export const title = "person identifier";
export const components = [
  { datatypeId: "ST", name: "ID number (ST)", required: false, sequence: 1 },
  {
    datatypeId: "IS",
    name: "type of ID number (IS)",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "ST",
    name: "other qualifying info",
    required: false,
    sequence: 3,
  },
] as const;
