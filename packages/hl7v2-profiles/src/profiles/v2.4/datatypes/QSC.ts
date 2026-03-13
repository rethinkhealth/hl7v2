// Generated datatype profile for QSC (v2.4)

export const id = "QSC";
export const version = "2.4";
export const kind = "composite";
export const title = "query selection criteria";
export const components = [
  {
    sequence: 1,
    name: "segment field name",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 2,
    name: "relational operator",
    datatypeId: "ID",
    required: false,
  },
  { sequence: 3, name: "Value", datatypeId: "ST", required: false },
  {
    sequence: 4,
    name: "relational conjunction",
    datatypeId: "ID",
    required: false,
  },
] as const;
