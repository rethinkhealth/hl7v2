// Generated datatype profile for FN (v2.5.1)

export const id = "FN";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Family Name";
export const components = [
  { datatypeId: "ST", name: "Surname", required: false, sequence: 1 },
  {
    datatypeId: "ST",
    name: "Own Surname Prefix",
    required: false,
    sequence: 2,
  },
  { datatypeId: "ST", name: "Own Surname", required: false, sequence: 3 },
  {
    datatypeId: "ST",
    name: "Surname Prefix From Partner/Spouse",
    required: false,
    sequence: 4,
  },
  {
    datatypeId: "ST",
    name: "Surname From Partner/Spouse",
    required: false,
    sequence: 5,
  },
] as const;
