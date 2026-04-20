// Generated datatype profile for CN (v2.3.1)

export const id = "CN";
export const version = "2.3.1";
export const kind = "composite";
export const title = "composite ID number and name";
export const components = [
  { sequence: 1, name: "ID number (ST)", datatypeId: "ST", required: false },
  { sequence: 2, name: "family name", datatypeId: "ST", required: false },
  { sequence: 3, name: "given name", datatypeId: "ST", required: false },
  {
    sequence: 4,
    name: "middle initial or name",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 5,
    name: "suffix (e.g., JR or III)",
    datatypeId: "ST",
    required: false,
  },
  { sequence: 6, name: "prefix (e.g., DR)", datatypeId: "ST", required: false },
  { sequence: 7, name: "degree (e.g., MD)", datatypeId: "IS", required: false },
  { sequence: 8, name: "source table", datatypeId: "IS", required: false },
  {
    sequence: 9,
    name: "assigning authority",
    datatypeId: "HD",
    required: false,
  },
] as const;
