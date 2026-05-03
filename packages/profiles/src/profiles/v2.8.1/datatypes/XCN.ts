// Generated datatype profile for XCN (v2.8.1)

export const id = "XCN";
export const version = "2.8.1";
export const kind = "composite";
export const title = "Extended Composite ID Number and Name for Persons";
export const components = [
  { datatypeId: "ST", name: "Person Identifier", required: false, sequence: 1 },
  { datatypeId: "FN", name: "Family Name", required: false, sequence: 2 },
  { datatypeId: "ST", name: "Given Name", required: false, sequence: 3 },
  {
    datatypeId: "ST",
    name: "Second and Further Given Names or Initials Thereof",
    required: false,
    sequence: 4,
  },
  {
    datatypeId: "ST",
    name: "Suffix (e.g., JR or III)",
    required: false,
    sequence: 5,
  },
  { datatypeId: "ST", name: "Prefix (e.g., DR)", required: false, sequence: 6 },
  { datatypeId: "CWE", name: "Source Table", required: false, sequence: 8 },
  {
    datatypeId: "HD",
    name: "Assigning Authority",
    required: false,
    sequence: 9,
  },
  { datatypeId: "ID", name: "Name Type Code", required: false, sequence: 10 },
  {
    datatypeId: "ST",
    name: "Identifier Check Digit",
    required: false,
    sequence: 11,
  },
  {
    datatypeId: "ID",
    name: "Check Digit Scheme",
    required: false,
    sequence: 12,
  },
  {
    datatypeId: "ID",
    name: "Identifier Type Code",
    required: false,
    sequence: 13,
  },
  {
    datatypeId: "HD",
    name: "Assigning Facility",
    required: false,
    sequence: 14,
  },
  {
    datatypeId: "ID",
    name: "Name Representation Code",
    required: false,
    sequence: 15,
  },
  { datatypeId: "CWE", name: "Name Context", required: false, sequence: 16 },
  {
    datatypeId: "ID",
    name: "Name Assembly Order",
    required: false,
    sequence: 18,
  },
  { datatypeId: "DTM", name: "Effective Date", required: false, sequence: 19 },
  { datatypeId: "DTM", name: "Expiration Date", required: false, sequence: 20 },
  {
    datatypeId: "ST",
    name: "Professional Suffix",
    required: false,
    sequence: 21,
  },
  {
    datatypeId: "CWE",
    name: "Assigning Jurisdiction",
    required: false,
    sequence: 22,
  },
  {
    datatypeId: "CWE",
    name: "Assigning Agency or Department",
    required: false,
    sequence: 23,
  },
  { datatypeId: "ST", name: "Security Check", required: false, sequence: 24 },
  {
    datatypeId: "ID",
    name: "Security Check Scheme",
    required: false,
    sequence: 25,
  },
] as const;
