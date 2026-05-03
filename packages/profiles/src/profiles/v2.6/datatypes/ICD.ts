// Generated datatype profile for ICD (v2.6)

export const id = "ICD";
export const version = "2.6";
export const kind = "composite";
export const title = "Insurance Certification Definition";
export const components = [
  {
    datatypeId: "IS",
    name: "Certification Patient Type",
    required: false,
    sequence: 1,
  },
  {
    datatypeId: "ID",
    name: "Certification Required",
    required: true,
    sequence: 2,
  },
  {
    datatypeId: "DTM",
    name: "Date/Time Certification Required",
    required: false,
    sequence: 3,
  },
] as const;
