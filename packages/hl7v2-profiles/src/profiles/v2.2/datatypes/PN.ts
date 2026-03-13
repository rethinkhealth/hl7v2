// Generated datatype profile for PN (v2.2)

export const id = "PN";
export const version = "2.2";
export const kind = "composite";
export const title = "person name";
export const components = [
  { sequence: 1, name: "familiy name", datatypeId: "ST", required: false },
  { sequence: 2, name: "given name", datatypeId: "ST", required: false },
  {
    sequence: 3,
    name: "middle initial or name",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 4,
    name: "suffix (e.g. JR or III)",
    datatypeId: "ST",
    required: false,
  },
  { sequence: 5, name: "prefix (e.g. DR)", datatypeId: "ST", required: false },
  { sequence: 6, name: "degree (e.g. MD)", datatypeId: "ST", required: false },
] as const;
