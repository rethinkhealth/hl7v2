// Generated datatype profile for DDI (v2.3.1)

export const id = "DDI";
export const version = "2.3.1";
export const kind = "composite";
export const title = "daily deductible";
export const components = [
  { sequence: 1, name: "delay days", datatypeId: "NM", required: false },
  { sequence: 2, name: "amount", datatypeId: "NM", required: false },
  { sequence: 3, name: "number of days", datatypeId: "NM", required: false },
] as const;
