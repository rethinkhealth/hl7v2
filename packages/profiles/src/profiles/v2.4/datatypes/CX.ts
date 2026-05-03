// Generated datatype profile for CX (v2.4)

export const id = "CX";
export const version = "2.4";
export const kind = "composite";
export const title = "extended composite ID with check digit";
export const components = [
  { datatypeId: "ST", name: "ID", required: false, sequence: 1 },
  { datatypeId: "ST", name: "check digit (ST)", required: false, sequence: 2 },
  {
    datatypeId: "ID",
    name: "code identifying the check digit scheme employed",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "HD",
    name: "assigning authority",
    required: false,
    sequence: 4,
  },
  {
    datatypeId: "ID",
    name: "identifier type code (ID)",
    required: false,
    sequence: 5,
  },
  {
    datatypeId: "HD",
    name: "assigning facility",
    required: false,
    sequence: 6,
  },
  {
    datatypeId: "DT",
    name: "effective date (DT)",
    required: false,
    sequence: 7,
  },
  { datatypeId: "DT", name: "expiration date", required: false, sequence: 8 },
] as const;
