// Generated datatype profile for PI (v2.3.1)

export const id = "PI";
export const version = "2.3.1";
export const kind = "composite";
export const title = "person identifier";
export const components = [
  { sequence: 1, name: "ID number (ST)", datatypeId: "ST", required: false },
  {
    sequence: 2,
    name: "type of ID number (IS)",
    datatypeId: "IS",
    required: false,
  },
  {
    sequence: 3,
    name: "other qualifying info",
    datatypeId: "ST",
    required: false,
  },
] as const;
