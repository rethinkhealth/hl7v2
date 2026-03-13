// Generated datatype profile for DR (v2.3)

export const id = "DR";
export const version = "2.3";
export const kind = "composite";
export const title = "Date Time Range";
export const components = [
  {
    sequence: 1,
    name: "range start date/time",
    datatypeId: "TS",
    required: false,
  },
  {
    sequence: 2,
    name: "range end date/time",
    datatypeId: "TS",
    required: false,
  },
] as const;
