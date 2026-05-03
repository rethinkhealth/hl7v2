// Generated datatype profile for RMC (v2.3.1)

export const id = "RMC";
export const version = "2.3.1";
export const kind = "composite";
export const title = "Room Coverage";
export const components = [
  { datatypeId: "IS", name: "room type", required: false, sequence: 1 },
  { datatypeId: "IS", name: "amount type", required: false, sequence: 2 },
  { datatypeId: "NM", name: "coverage amount", required: false, sequence: 3 },
] as const;
