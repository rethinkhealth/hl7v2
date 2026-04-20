// Generated datatype profile for RMC (v2.3.1)

export const id = "RMC";
export const version = "2.3.1";
export const kind = "composite";
export const title = "Room Coverage";
export const components = [
  { sequence: 1, name: "room type", datatypeId: "IS", required: false },
  { sequence: 2, name: "amount type", datatypeId: "IS", required: false },
  { sequence: 3, name: "coverage amount", datatypeId: "NM", required: false },
] as const;
