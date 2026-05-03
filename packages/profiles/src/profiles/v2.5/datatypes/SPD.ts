// Generated datatype profile for SPD (v2.5)

export const id = "SPD";
export const version = "2.5";
export const kind = "composite";
export const title = "Specialty Description";
export const components = [
  { datatypeId: "ST", name: "Specialty Name", required: false, sequence: 1 },
  { datatypeId: "ST", name: "Governing Board", required: false, sequence: 2 },
  {
    datatypeId: "ID",
    name: "Eligible or Certified",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "DT",
    name: "Date of Certification",
    required: false,
    sequence: 4,
  },
] as const;
