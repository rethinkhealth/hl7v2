// Generated datatype profile for DR (v2.5)

export const id = "DR";
export const version = "2.5";
export const kind = "composite";
export const title = "Date/Time Range";
export const components = [
  {
    datatypeId: "TS",
    name: "Range Start Date/Time",
    required: false,
    sequence: 1,
  },
  {
    datatypeId: "TS",
    name: "Range End Date/Time",
    required: false,
    sequence: 2,
  },
] as const;
