// Generated datatype profile for XON (v2.8.1)

export const id = "XON";
export const version = "2.8.1";
export const kind = "composite";
export const title =
  "Extended Composite Name and Identification Number for Organizations";
export const components = [
  { sequence: 1, name: "Organization Name", datatypeId: "ST", required: false },
  {
    sequence: 2,
    name: "Organization Name Type Code",
    datatypeId: "CWE",
    required: false,
  },
  {
    sequence: 6,
    name: "Assigning Authority",
    datatypeId: "HD",
    required: false,
  },
  {
    sequence: 7,
    name: "Identifier Type Code",
    datatypeId: "ID",
    required: false,
  },
  {
    sequence: 8,
    name: "Assigning Facility",
    datatypeId: "HD",
    required: false,
  },
  {
    sequence: 9,
    name: "Name Representation Code",
    datatypeId: "ID",
    required: false,
  },
  {
    sequence: 10,
    name: "Organization Identifier",
    datatypeId: "ST",
    required: false,
  },
] as const;
