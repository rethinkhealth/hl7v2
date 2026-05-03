// Generated datatype profile for PN (v2.4)

export const id = "PN";
export const version = "2.4";
export const kind = "composite";
export const title = "person name";
export const components = [
  { datatypeId: "FN", name: "family name", required: false, sequence: 1 },
  { datatypeId: "ST", name: "given name", required: false, sequence: 2 },
  {
    datatypeId: "ST",
    name: "second and further given names or initials thereof",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "ST",
    name: "suffix (e.g., JR or III)",
    required: false,
    sequence: 4,
  },
  { datatypeId: "ST", name: "prefix (e.g., DR)", required: false, sequence: 5 },
  { datatypeId: "IS", name: "degree (e.g., MD)", required: false, sequence: 6 },
] as const;
