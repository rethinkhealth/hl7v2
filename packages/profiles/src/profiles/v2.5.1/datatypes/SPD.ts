// Generated datatype profile for SPD (v2.5.1)

export const id = "SPD";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Specialty Description";
export const components = [
  { sequence: 1, name: "Specialty Name", datatypeId: "ST", required: false },
  { sequence: 2, name: "Governing Board", datatypeId: "ST", required: false },
  {
    sequence: 3,
    name: "Eligible or Certified",
    datatypeId: "ID",
    required: false,
  },
  {
    sequence: 4,
    name: "Date of Certification",
    datatypeId: "DT",
    required: false,
  },
] as const;
