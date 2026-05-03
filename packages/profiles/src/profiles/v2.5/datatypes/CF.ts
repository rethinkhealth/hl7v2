// Generated datatype profile for CF (v2.5)

export const id = "CF";
export const version = "2.5";
export const kind = "composite";
export const title = "Coded Element with Formatted Values";
export const components = [
  { datatypeId: "ST", name: "Identifier", required: false, sequence: 1 },
  { datatypeId: "FT", name: "Formatted Text", required: false, sequence: 2 },
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
  {
    datatypeId: "FT",
    name: "Alternate Formatted Text",
    required: false,
    sequence: 5,
  },
  {
    datatypeId: "ID",
    name: "Name of Alternate Coding System",
    required: false,
    sequence: 6,
  },
] as const;
