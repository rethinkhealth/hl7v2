// Generated datatype profile for CX (v2.5.1)

export const id = "CX";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Extended Composite ID with Check Digit";
export const components = [
  { datatypeId: "ST", name: "ID Number", required: false, sequence: 1 },
  { datatypeId: "ST", name: "Check Digit", required: false, sequence: 2 },
  {
    datatypeId: "ID",
    name: "Check Digit Scheme",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "HD",
    name: "Assigning Authority",
    required: false,
    sequence: 4,
  },
  {
    datatypeId: "ID",
    name: "Identifier Type Code",
    required: false,
    sequence: 5,
  },
  {
    datatypeId: "HD",
    name: "Assigning Facility",
    required: false,
    sequence: 6,
  },
  { datatypeId: "DT", name: "Effective Date", required: false, sequence: 7 },
  { datatypeId: "DT", name: "Expiration Date", required: false, sequence: 8 },
  {
    datatypeId: "CWE",
    name: "Assigning Jurisdiction",
    required: false,
    sequence: 9,
  },
  {
    datatypeId: "CWE",
    name: "Assigning Agency or Department",
    required: false,
    sequence: 10,
  },
] as const;
