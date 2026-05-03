// Generated datatype profile for XPN (v2.3)

export const id = "XPN";
export const version = "2.3";
export const kind = "composite";
export const title = "extended person name";
export const components = [
  { datatypeId: "ST", name: "family name", required: false, sequence: 1 },
  { datatypeId: "ST", name: "given name", required: false, sequence: 2 },
  {
    datatypeId: "ST",
    name: "middle initial or name",
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
  { datatypeId: "ST", name: "degree (e.g., MD)", required: false, sequence: 6 },
  { datatypeId: "ID", name: "name type code", required: false, sequence: 7 },
  {
    datatypeId: "ID",
    name: "Name Representation code",
    required: false,
    sequence: 8,
  },
] as const;
