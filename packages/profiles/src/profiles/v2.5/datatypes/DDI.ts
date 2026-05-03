// Generated datatype profile for DDI (v2.5)

export const id = "DDI";
export const version = "2.5";
export const kind = "composite";
export const title = "Daily Deductible Information";
export const components = [
  { datatypeId: "NM", name: "Delay Days", required: false, sequence: 1 },
  { datatypeId: "MO", name: "Monetary Amount", required: false, sequence: 2 },
  { datatypeId: "NM", name: "Number of Days", required: false, sequence: 3 },
] as const;
