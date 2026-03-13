// Generated datatype profile for RMC (v2.5)

export const id = "RMC";
export const version = "2.5";
export const kind = "composite";
export const title = "Room Coverage";
export const components = [
  { sequence: 1, name: "Room Type", datatypeId: "IS", required: false },
  { sequence: 2, name: "Amount Type", datatypeId: "IS", required: false },
  { sequence: 3, name: "Coverage Amount", datatypeId: "NM", required: false },
  {
    sequence: 4,
    name: "Money or Percentage",
    datatypeId: "MOP",
    required: false,
  },
] as const;
