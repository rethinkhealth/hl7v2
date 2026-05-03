// Generated datatype profile for CE (v2.3.1)

export const id = "CE";
export const version = "2.3.1";
export const kind = "composite";
export const title = "coded element";
export const components = [
  { datatypeId: "ST", name: "identifier", required: false, sequence: 1 },
  { datatypeId: "ST", name: "text", required: false, sequence: 2 },
  {
    datatypeId: "ST",
    name: "name of coding system",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "ST",
    name: "alternate identifier",
    required: false,
    sequence: 4,
  },
  { datatypeId: "ST", name: "alternate text", required: false, sequence: 5 },
  {
    datatypeId: "ST",
    name: "name of alternate coding system",
    required: false,
    sequence: 6,
  },
] as const;
