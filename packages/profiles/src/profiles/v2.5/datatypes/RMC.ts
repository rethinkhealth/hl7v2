// Generated datatype profile for RMC (v2.5)

export const id = "RMC";
export const version = "2.5";
export const kind = "composite";
export const title = "Room Coverage";
export const components = [
  { datatypeId: "IS", name: "Room Type", required: false, sequence: 1 },
  { datatypeId: "IS", name: "Amount Type", required: false, sequence: 2 },
  { datatypeId: "NM", name: "Coverage Amount", required: false, sequence: 3 },
  {
    datatypeId: "MOP",
    name: "Money or Percentage",
    required: false,
    sequence: 4,
  },
] as const;
