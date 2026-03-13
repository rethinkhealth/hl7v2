// Generated datatype profile for RFR (v2.7.1)

export const id = "RFR";
export const version = "2.7.1";
export const kind = "composite";
export const title = "Reference Range";
export const components = [
  { sequence: 1, name: "Numeric Range", datatypeId: "NR", required: true },
  {
    sequence: 2,
    name: "Administrative Sex",
    datatypeId: "CWE",
    required: false,
  },
  { sequence: 3, name: "Age Range", datatypeId: "NR", required: false },
  {
    sequence: 4,
    name: "Gestational Age Range",
    datatypeId: "NR",
    required: false,
  },
  { sequence: 5, name: "Species", datatypeId: "ST", required: false },
  { sequence: 6, name: "Race/subspecies", datatypeId: "ST", required: false },
  { sequence: 7, name: "Conditions", datatypeId: "TX", required: false },
] as const;
