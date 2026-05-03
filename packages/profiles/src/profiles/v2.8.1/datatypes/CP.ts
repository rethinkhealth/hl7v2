// Generated datatype profile for CP (v2.8.1)

export const id = "CP";
export const version = "2.8.1";
export const kind = "composite";
export const title = "Composite Price";
export const components = [
  { datatypeId: "MO", name: "Price", required: true, sequence: 1 },
  { datatypeId: "ID", name: "Price Type", required: false, sequence: 2 },
  { datatypeId: "NM", name: "From Value", required: false, sequence: 3 },
  { datatypeId: "NM", name: "To Value", required: false, sequence: 4 },
  { datatypeId: "CWE", name: "Range Units", required: false, sequence: 5 },
  { datatypeId: "ID", name: "Range Type", required: false, sequence: 6 },
] as const;
