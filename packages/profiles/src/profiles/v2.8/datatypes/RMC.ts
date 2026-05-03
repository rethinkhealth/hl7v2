// Generated datatype profile for RMC (v2.8)

export const id = "RMC";
export const version = "2.8";
export const kind = "composite";
export const title = "Room Coverage";
export const components = [
  { datatypeId: "CWE", name: "Room Type", required: true, sequence: 1 },
  { datatypeId: "CWE", name: "Amount Type", required: false, sequence: 2 },
  {
    datatypeId: "MOP",
    name: "Money or Percentage",
    required: true,
    sequence: 4,
  },
] as const;
