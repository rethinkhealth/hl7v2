// Generated datatype profile for RFR (v2.3.1)

export const id = "RFR";
export const version = "2.3.1";
export const kind = "composite";
export const title = "reference range";
export const components = [
  { sequence: 1, name: "numeric range", datatypeId: "NR", required: false },
  {
    sequence: 2,
    name: "administrative sex",
    datatypeId: "IS",
    required: false,
  },
  { sequence: 3, name: "age range", datatypeId: "NR", required: false },
  {
    sequence: 4,
    name: "gestational age range",
    datatypeId: "NR",
    required: false,
  },
  { sequence: 5, name: "species", datatypeId: "TX", required: false },
  { sequence: 6, name: "race/subspecies", datatypeId: "ST", required: false },
  { sequence: 7, name: "conditions", datatypeId: "TX", required: false },
] as const;
