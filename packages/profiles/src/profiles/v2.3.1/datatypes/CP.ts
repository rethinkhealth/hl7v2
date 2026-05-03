// Generated datatype profile for CP (v2.3.1)

export const id = "CP";
export const version = "2.3.1";
export const kind = "composite";
export const title = "composite price";
export const components = [
  { datatypeId: "MO", name: "price", required: false, sequence: 1 },
  { datatypeId: "ID", name: "price type", required: false, sequence: 2 },
  { datatypeId: "NM", name: "from value", required: false, sequence: 3 },
  { datatypeId: "NM", name: "to value", required: false, sequence: 4 },
  { datatypeId: "CE", name: "range units", required: false, sequence: 5 },
  { datatypeId: "ID", name: "range type", required: false, sequence: 6 },
] as const;
