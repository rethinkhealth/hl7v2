// Generated datatype profile for QSC (v2.5)

export const id = "QSC";
export const version = "2.5";
export const kind = "composite";
export const title = "Query Selection Criteria";
export const components = [
  {
    sequence: 1,
    name: "Segment Field Name",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 2,
    name: "Relational Operator",
    datatypeId: "ID",
    required: false,
  },
  { sequence: 3, name: "Value", datatypeId: "ST", required: false },
  {
    sequence: 4,
    name: "Relational Conjunction",
    datatypeId: "ID",
    required: false,
  },
] as const;
