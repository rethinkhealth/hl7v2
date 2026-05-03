// Generated datatype profile for DR (v2.3)

export const id = "DR";
export const version = "2.3";
export const kind = "composite";
export const title = "Date Time Range";
export const components = [
  {
    datatypeId: "TS",
    name: "range start date/time",
    required: false,
    sequence: 1,
  },
  {
    datatypeId: "TS",
    name: "range end date/time",
    required: false,
    sequence: 2,
  },
] as const;
