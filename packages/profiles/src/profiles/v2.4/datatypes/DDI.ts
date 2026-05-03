// Generated datatype profile for DDI (v2.4)

export const id = "DDI";
export const version = "2.4";
export const kind = "composite";
export const title = "daily deductible";
export const components = [
  { datatypeId: "NM", name: "delay days", required: false, sequence: 1 },
  { datatypeId: "NM", name: "amount", required: false, sequence: 2 },
  { datatypeId: "NM", name: "number of days", required: false, sequence: 3 },
] as const;
