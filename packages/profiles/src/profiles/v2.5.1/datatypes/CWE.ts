// Generated datatype profile for CWE (v2.5.1)

export const id = "CWE";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Coded with Exceptions";
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
  {
    datatypeId: "ST",
    name: "Coding System Version ID",
    required: false,
    sequence: 7,
  },
  {
    datatypeId: "ST",
    name: "Alternate Coding System Version ID",
    required: false,
    sequence: 8,
  },
  { datatypeId: "ST", name: "Original Text", required: false, sequence: 9 },
] as const;
