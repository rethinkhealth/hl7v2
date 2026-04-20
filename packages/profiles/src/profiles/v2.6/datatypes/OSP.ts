// Generated datatype profile for OSP (v2.6)

export const id = "OSP";
export const version = "2.6";
export const kind = "composite";
export const title = "Occurrence Span Code and Date";
export const components = [
  {
    sequence: 1,
    name: "Occurrence Span Code",
    datatypeId: "CNE",
    required: true,
  },
  {
    sequence: 2,
    name: "Occurrence Span Start Date",
    datatypeId: "DT",
    required: false,
  },
  {
    sequence: 3,
    name: "Occurrence Span Stop Date",
    datatypeId: "DT",
    required: false,
  },
] as const;
