// Generated datatype profile for CP (v2.3)

export const id = "CP";
export const version = "2.3";
export const kind = "composite";
export const title = "Composite Price";
export const components = [
  { sequence: 1, name: "price", datatypeId: "MO", required: false },
  { sequence: 2, name: "price type", datatypeId: "ID", required: false },
  { sequence: 3, name: "from value", datatypeId: "NM", required: false },
  { sequence: 4, name: "to value", datatypeId: "NM", required: false },
  { sequence: 5, name: "range units", datatypeId: "CE", required: false },
  { sequence: 6, name: "range type", datatypeId: "ID", required: false },
] as const;
