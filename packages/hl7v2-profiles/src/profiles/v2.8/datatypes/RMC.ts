// Generated datatype profile for RMC (v2.8)

export const id = "RMC";
export const version = "2.8";
export const kind = "composite";
export const title = "Room Coverage";
export const components = [
  { sequence: 1, name: "Room Type", datatypeId: "CWE", required: true },
  { sequence: 2, name: "Amount Type", datatypeId: "CWE", required: false },
  {
    sequence: 4,
    name: "Money or Percentage",
    datatypeId: "MOP",
    required: true,
  },
] as const;
