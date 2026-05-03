// Generated datatype profile for FN (v2.8.1)

export const id = "FN";
export const version = "2.8.1";
export const kind = "composite";
export const title = "Family Name";
export const components = [
  { datatypeId: "ST", name: "Surname", required: true, sequence: 1 },
  {
    datatypeId: "ST",
    name: "Own Surname Prefix",
    required: false,
    sequence: 2,
  },
  { datatypeId: "ST", name: "Own Surname", required: false, sequence: 3 },
  {
    datatypeId: "ST",
    name: "Surname Prefix from Partner/Spouse",
    required: false,
    sequence: 4,
  },
  {
    datatypeId: "ST",
    name: "Surname from Partner/Spouse",
    required: false,
    sequence: 5,
  },
] as const;
