// Generated datatype profile for DDI (v2.8.1)

export const id = "DDI";
export const version = "2.8.1";
export const kind = "composite";
export const title = "Daily Deductible Information";
export const components = [
  { sequence: 1, name: "Delay Days", datatypeId: "NM", required: false },
  { sequence: 2, name: "Monetary Amount", datatypeId: "MO", required: true },
  { sequence: 3, name: "Number of Days", datatypeId: "NM", required: false },
] as const;
