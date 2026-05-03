// Generated datatype profile for RFR (v2.3.1)

export const id = "RFR";
export const version = "2.3.1";
export const kind = "composite";
export const title = "reference range";
export const components = [
  { datatypeId: "NR", name: "numeric range", required: false, sequence: 1 },
  {
    datatypeId: "IS",
    name: "administrative sex",
    required: false,
    sequence: 2,
  },
  { datatypeId: "NR", name: "age range", required: false, sequence: 3 },
  {
    datatypeId: "NR",
    name: "gestational age range",
    required: false,
    sequence: 4,
  },
  { datatypeId: "TX", name: "species", required: false, sequence: 5 },
  { datatypeId: "ST", name: "race/subspecies", required: false, sequence: 6 },
  { datatypeId: "TX", name: "conditions", required: false, sequence: 7 },
] as const;
