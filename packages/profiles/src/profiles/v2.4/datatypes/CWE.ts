// Generated datatype profile for CWE (v2.4)

export const id = "CWE";
export const version = "2.4";
export const kind = "composite";
export const title = "coded with exceptions";
export const components = [
  { datatypeId: "ST", name: "identifier (ST)", required: false, sequence: 1 },
  { datatypeId: "ST", name: "text", required: false, sequence: 2 },
  {
    datatypeId: "IS",
    name: "name of coding system",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "ST",
    name: "alternate identifier (ST)",
    required: false,
    sequence: 4,
  },
  { datatypeId: "ST", name: "alternate text", required: false, sequence: 5 },
  {
    datatypeId: "IS",
    name: "name of alternate coding system",
    required: false,
    sequence: 6,
  },
  {
    datatypeId: "ST",
    name: "coding system version ID",
    required: false,
    sequence: 7,
  },
  {
    datatypeId: "ST",
    name: "alternate coding system version ID",
    required: false,
    sequence: 8,
  },
  { datatypeId: "ST", name: "original text", required: false, sequence: 9 },
] as const;
