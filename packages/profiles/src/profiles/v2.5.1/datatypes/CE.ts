// Generated datatype profile for CE (v2.5.1)

export const id = "CE";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Coded Element";
export const components = [
  { datatypeId: "ST", name: "Identifier", required: false, sequence: 1 },
  { datatypeId: "ST", name: "Text", required: false, sequence: 2 },
  {
    datatypeId: "ID",
    name: "Name of Coding System",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "ST",
    name: "Alternate Identifier",
    required: false,
    sequence: 4,
  },
  { datatypeId: "ST", name: "Alternate Text", required: false, sequence: 5 },
  {
    datatypeId: "ID",
    name: "Name of Alternate Coding System",
    required: false,
    sequence: 6,
  },
] as const;
