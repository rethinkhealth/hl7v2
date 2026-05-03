// Generated datatype profile for XON (v2.3)

export const id = "XON";
export const version = "2.3";
export const kind = "composite";
export const title =
  "Extended Composite Name and ID for organizations (2.8.47)";
export const components = [
  { datatypeId: "ST", name: "organization name", required: false, sequence: 1 },
  {
    datatypeId: "IS",
    name: "organization name type code",
    required: false,
    sequence: 2,
  },
  { datatypeId: "NM", name: "ID number (NM)", required: false, sequence: 3 },
  { datatypeId: "ST", name: "check digit", required: false, sequence: 4 },
  {
    datatypeId: "ID",
    name: "code identifying the check digit scheme employed",
    required: false,
    sequence: 5,
  },
  {
    datatypeId: "HD",
    name: "assigning authority",
    required: false,
    sequence: 6,
  },
  {
    datatypeId: "IS",
    name: "identifier type code",
    required: false,
    sequence: 7,
  },
  {
    datatypeId: "HD",
    name: "assigning facility ID",
    required: false,
    sequence: 8,
  },
] as const;
