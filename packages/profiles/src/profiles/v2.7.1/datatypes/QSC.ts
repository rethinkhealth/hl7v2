// Generated datatype profile for QSC (v2.7.1)

export const id = "QSC";
export const version = "2.7.1";
export const kind = "composite";
export const title = "Query Selection Criteria";
export const components = [
  { datatypeId: "ST", name: "Segment Field Name", required: true, sequence: 1 },
  {
    datatypeId: "ID",
    name: "Relational Operator",
    required: false,
    sequence: 2,
  },
  { datatypeId: "ST", name: "Value", required: false, sequence: 3 },
  {
    datatypeId: "ID",
    name: "Relational Conjunction",
    required: false,
    sequence: 4,
  },
] as const;
