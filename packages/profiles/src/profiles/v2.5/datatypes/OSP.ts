// Generated datatype profile for OSP (v2.5)

export const id = "OSP";
export const version = "2.5";
export const kind = "composite";
export const title = "Occurrence Span Code and Date";
export const components = [
  {
    datatypeId: "CNE",
    name: "Occurrence Span Code",
    required: false,
    sequence: 1,
  },
  {
    datatypeId: "DT",
    name: "Occurrence Span Start Date",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "DT",
    name: "Occurrence Span Stop Date",
    required: false,
    sequence: 3,
  },
] as const;
