// Generated datatype profile for FN (v2.6)

export const id = "FN";
export const version = "2.6";
export const kind = "composite";
export const title = "Family Name";
export const components = [
  { sequence: 1, name: "Surname", datatypeId: "ST", required: true },
  {
    sequence: 2,
    name: "Own Surname Prefix",
    datatypeId: "ST",
    required: false,
  },
  { sequence: 3, name: "Own Surname", datatypeId: "ST", required: false },
  {
    sequence: 4,
    name: "Surname Prefix from Partner/Spouse",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 5,
    name: "Surname from Partner/Spouse",
    datatypeId: "ST",
    required: false,
  },
] as const;
