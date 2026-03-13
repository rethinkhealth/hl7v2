// Generated datatype profile for ICD (v2.5.1)

export const id = "ICD";
export const version = "2.5.1";
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
    required: false,
  },
  {
    sequence: 3,
    name: "Date/Time Certification Required",
    datatypeId: "TS",
    required: false,
  },
] as const;
