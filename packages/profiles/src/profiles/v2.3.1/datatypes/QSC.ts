// Generated datatype profile for QSC (v2.3.1)

export const id = "QSC";
export const version = "2.3.1";
export const kind = "composite";
export const title = "query selection criteria";
export const components = [
  {
    datatypeId: "ST",
    name: "segment field name",
    required: false,
    sequence: 1,
  },
  {
    datatypeId: "ID",
    name: "relational operator",
    required: false,
    sequence: 2,
  },
  { datatypeId: "ST", name: "Value", required: false, sequence: 3 },
  {
    datatypeId: "ID",
    name: "relational conjunction",
    required: false,
    sequence: 4,
  },
] as const;
