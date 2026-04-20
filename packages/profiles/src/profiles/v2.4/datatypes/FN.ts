// Generated datatype profile for FN (v2.4)

export const id = "FN";
export const version = "2.4";
export const kind = "composite";
export const title = "familiy name";
export const components = [
  { sequence: 1, name: "surname", datatypeId: "ST", required: false },
  {
    sequence: 2,
    name: "own surname prefix",
    datatypeId: "ST",
    required: false,
  },
  { sequence: 3, name: "own surname", datatypeId: "ST", required: false },
  {
    sequence: 4,
    name: "surname prefix from partner/spouse",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 5,
    name: "surname from partner/spouse",
    datatypeId: "ST",
    required: false,
  },
] as const;
