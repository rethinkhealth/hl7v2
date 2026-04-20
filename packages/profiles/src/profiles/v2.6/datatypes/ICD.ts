// Generated datatype profile for ICD (v2.6)

export const id = "ICD";
export const version = "2.6";
export const kind = "composite";
export const title = "Insurance Certification Definition";
export const components = [
  {
    sequence: 1,
    name: "Certification Patient Type",
    datatypeId: "IS",
    required: false,
  },
  {
    sequence: 2,
    name: "Certification Required",
    datatypeId: "ID",
    required: true,
  },
  {
    sequence: 3,
    name: "Date/Time Certification Required",
    datatypeId: "DTM",
    required: false,
  },
] as const;
