// Generated datatype profile for CE (v2.2)

export const id = "CE";
export const version = "2.2";
export const kind = "composite";
export const title = "coded element";
export const components = [
  { sequence: 1, name: "identifier", datatypeId: "ID", required: false },
  { sequence: 2, name: "text", datatypeId: "ST", required: false },
  {
    sequence: 3,
    name: "name of coding system",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 4,
    name: "alternate identifier",
    datatypeId: "ST",
    required: false,
  },
  { sequence: 5, name: "alternate text", datatypeId: "ST", required: false },
  {
    sequence: 6,
    name: "name of alternate coding system",
    datatypeId: "ST",
    required: false,
  },
] as const;
