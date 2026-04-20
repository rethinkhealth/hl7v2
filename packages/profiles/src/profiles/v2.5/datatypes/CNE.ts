// Generated datatype profile for CNE (v2.5)

export const id = "CNE";
export const version = "2.5";
export const kind = "composite";
export const title = "Coded with No Exceptions";
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
  {
    sequence: 7,
    name: "Coding System Version ID",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 8,
    name: "Alternate Coding System Version ID",
    datatypeId: "ST",
    required: false,
  },
  { sequence: 9, name: "Original Text", datatypeId: "ST", required: false },
] as const;
