// Generated datatype profile for CE (v2.5.1)

export const id = "CE";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Coded Element";
export const components = [
  { sequence: 1, name: "Identifier", datatypeId: "ST", required: false },
  { sequence: 2, name: "Text", datatypeId: "ST", required: false },
  {
    sequence: 3,
    name: "Name of Coding System",
    datatypeId: "ID",
    required: false,
  },
  {
    sequence: 4,
    name: "Alternate Identifier",
    datatypeId: "ST",
    required: false,
  },
  { sequence: 5, name: "Alternate Text", datatypeId: "ST", required: false },
  {
    sequence: 6,
    name: "Name of Alternate Coding System",
    datatypeId: "ID",
    required: false,
  },
] as const;
