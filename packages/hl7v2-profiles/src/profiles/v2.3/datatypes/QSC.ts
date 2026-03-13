// Generated datatype profile for QSC (v2.3)

export const id = "QSC";
export const version = "2.3";
export const kind = "composite";
export const title = "query selection criteria";
export const components = [
  { sequence: 1, name: "name of field", datatypeId: "ST", required: false },
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
