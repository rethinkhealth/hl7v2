// Generated datatype profile for RFR (v2.8)

export const id = "RFR";
export const version = "2.8";
export const kind = "composite";
export const title = "Reference Range";
export const components = [
  { datatypeId: "NR", name: "Numeric Range", required: true, sequence: 1 },
  {
    datatypeId: "CWE",
    name: "Administrative Sex",
    required: false,
    sequence: 2,
  },
  { datatypeId: "NR", name: "Age Range", required: false, sequence: 3 },
  {
    datatypeId: "NR",
    name: "Gestational Age Range",
    required: false,
    sequence: 4,
  },
  { datatypeId: "ST", name: "Species", required: false, sequence: 5 },
  { datatypeId: "ST", name: "Race/subspecies", required: false, sequence: 6 },
  { datatypeId: "TX", name: "Conditions", required: false, sequence: 7 },
] as const;
