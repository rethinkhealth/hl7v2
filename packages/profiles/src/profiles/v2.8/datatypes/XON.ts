// Generated datatype profile for XON (v2.8)

export const id = "XON";
export const version = "2.8";
export const kind = "composite";
export const title =
  "Extended Composite Name and Identification Number for Organizations";
export const components = [
  { datatypeId: "ST", name: "Organization Name", required: false, sequence: 1 },
  {
    datatypeId: "CWE",
    name: "Organization Name Type Code",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "HD",
    name: "Assigning Authority",
    required: false,
    sequence: 6,
  },
  {
    datatypeId: "ID",
    name: "Identifier Type Code",
    required: false,
    sequence: 7,
  },
  {
    datatypeId: "HD",
    name: "Assigning Facility",
    required: false,
    sequence: 8,
  },
  {
    datatypeId: "ID",
    name: "Name Representation Code",
    required: false,
    sequence: 9,
  },
  {
    datatypeId: "ST",
    name: "Organization Identifier",
    required: false,
    sequence: 10,
  },
] as const;
