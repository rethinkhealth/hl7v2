// Generated datatype profile for XCN (v2.3)

export const id = "XCN";
export const version = "2.3";
export const kind = "composite";
export const title = "Extended Composite ID number and name (2.8.46)";
export const components = [
  { datatypeId: "ST", name: "ID number (ST)", required: false, sequence: 1 },
  { datatypeId: "ST", name: "family name", required: false, sequence: 2 },
  { datatypeId: "ST", name: "given name", required: false, sequence: 3 },
  {
    datatypeId: "ST",
    name: "middle initial or name",
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
  { datatypeId: "ST", name: "degree (e.g., MD)", required: false, sequence: 7 },
  { datatypeId: "ID", name: "source table", required: false, sequence: 8 },
  {
    datatypeId: "HD",
    name: "assigning authority",
    required: false,
    sequence: 9,
  },
  { datatypeId: "ID", name: "name type", required: false, sequence: 10 },
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
    name: "identifier type code",
    required: false,
    sequence: 13,
  },
  {
    datatypeId: "HD",
    name: "assigning facility ID",
    required: false,
    sequence: 14,
  },
] as const;
