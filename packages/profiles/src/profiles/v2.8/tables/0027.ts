// Generated table profile for 0027 (v2.8)

export const id = "0027";
export const description = "Priority";
export const type = "hl7";
export const codes = [
  {
    description: "As soon as possible (a priority lower than stat)",
    name: "A",
  },
  { description: "Preoperative (to be done prior to surgery)", name: "P" },
  { description: "Routine", name: "R" },
  { description: "Stat (do immediately)", name: "S" },
  {
    description: "Timing critical (do as near as possible to requested time)",
    name: "T",
  },
] as const;
