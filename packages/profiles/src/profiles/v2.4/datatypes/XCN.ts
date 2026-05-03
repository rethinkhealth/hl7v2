// Generated datatype profile for XCN (v2.4)

export const id = "XCN";
export const version = "2.4";
export const kind = "composite";
export const title = "extended composite ID number and name for persons";
export const components = [
  { datatypeId: "ST", name: "ID number (ST)", required: false, sequence: 1 },
  { datatypeId: "FN", name: "family name", required: false, sequence: 2 },
  { datatypeId: "ST", name: "given name", required: false, sequence: 3 },
  {
    datatypeId: "ST",
    name: "second and further given names or initials thereof",
    required: false,
    sequence: 4,
  },
  {
    datatypeId: "ST",
    name: "suffix (e.g., JR or III)",
    required: false,
    sequence: 5,
  },
  { datatypeId: "ST", name: "prefix (e.g., DR)", required: false, sequence: 6 },
  { datatypeId: "IS", name: "degree (e.g., MD)", required: false, sequence: 7 },
  { datatypeId: "IS", name: "source table", required: false, sequence: 8 },
  {
    datatypeId: "HD",
    name: "assigning authority",
    required: false,
    sequence: 9,
  },
  { datatypeId: "ID", name: "name type code", required: false, sequence: 10 },
  {
    datatypeId: "ST",
    name: "identifier check digit",
    required: false,
    sequence: 11,
  },
  {
    datatypeId: "ID",
    name: "code identifying the check digit scheme employed",
    required: false,
    sequence: 12,
  },
  {
    datatypeId: "IS",
    name: "identifier type code (IS)",
    required: false,
    sequence: 13,
  },
  {
    datatypeId: "HD",
    name: "assigning facility",
    required: false,
    sequence: 14,
  },
  {
    datatypeId: "ID",
    name: "Name Representation code",
    required: false,
    sequence: 15,
  },
  { datatypeId: "CE", name: "name context", required: false, sequence: 16 },
  {
    datatypeId: "DR",
    name: "name validity range",
    required: false,
    sequence: 17,
  },
  {
    datatypeId: "ID",
    name: "name assembly order",
    required: false,
    sequence: 18,
  },
] as const;
