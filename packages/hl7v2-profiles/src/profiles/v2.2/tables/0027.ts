// Generated table profile for 0027 (v2.2)

export const id = "0027";
export const description = "PRIORITY (COMPONENT 6 QTY/TIMING[735])";
export const type = "hl7";
export const codes = [
  {
    name: "A",
    description: "As soon as possible (a priority lower than stat)",
  },
  { name: "P", description: "Preoperative (to be done prior to surgery)" },
  { name: "R", description: "Routine (default)" },
  { name: "S", description: "Stat (do immediately)" },
  {
    name: "T",
    description: "Timing critical (do as near as possible to requested time)",
  },
] as const;
