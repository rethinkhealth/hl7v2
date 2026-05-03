// Generated datatype profile for FN (v2.4)

export const id = "FN";
export const version = "2.4";
export const kind = "composite";
export const title = "familiy name";
export const components = [
  { datatypeId: "ST", name: "surname", required: false, sequence: 1 },
  {
    datatypeId: "ST",
    name: "own surname prefix",
    required: false,
    sequence: 2,
  },
  { datatypeId: "ST", name: "own surname", required: false, sequence: 3 },
  {
    datatypeId: "ST",
    name: "surname prefix from partner/spouse",
    required: false,
    sequence: 4,
  },
  {
    datatypeId: "ST",
    name: "surname from partner/spouse",
    required: false,
    sequence: 5,
  },
] as const;
