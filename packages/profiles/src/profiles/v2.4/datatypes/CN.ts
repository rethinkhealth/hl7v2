// Generated datatype profile for CN (v2.4)

export const id = "CN";
export const version = "2.4";
export const kind = "composite";
export const title = "composite ID number and name";
export const components = [
  { datatypeId: "ST", name: "ID number (ST)", required: false, sequence: 1 },
  { datatypeId: "FN", name: "family name", required: false, sequence: 2 },
  { datatypeId: "ST", name: "given name", required: false, sequence: 3 },
  {
    datatypeId: "ST",
    name: "second and further given names or initials thereof",
    required: false,
    sequence: 4,
  },
  {
    datatypeId: "ST",
    name: "suffix (e.g., JR or III)",
    required: false,
    sequence: 5,
  },
  { datatypeId: "ST", name: "prefix (e.g., DR)", required: false, sequence: 6 },
  { datatypeId: "IS", name: "degree (e.g., MD)", required: false, sequence: 7 },
  { datatypeId: "IS", name: "source table", required: false, sequence: 8 },
  {
    datatypeId: "HD",
    name: "assigning authority",
    required: false,
    sequence: 9,
  },
] as const;
