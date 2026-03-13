// Generated datatype profile for CP (v2.8.2)

export const id = "CP";
export const version = "2.8.2";
export const kind = "composite";
export const title = "Composite Price";
export const components = [
  { sequence: 1, name: "Price", datatypeId: "MO", required: true },
  { sequence: 2, name: "Price Type", datatypeId: "ID", required: false },
  { sequence: 3, name: "From Value", datatypeId: "NM", required: false },
  { sequence: 4, name: "To Value", datatypeId: "NM", required: false },
  { sequence: 5, name: "Range Units", datatypeId: "CWE", required: false },
  { sequence: 6, name: "Range Type", datatypeId: "ID", required: false },
] as const;
