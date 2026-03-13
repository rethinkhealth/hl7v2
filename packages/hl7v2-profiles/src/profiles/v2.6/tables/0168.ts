// Generated table profile for 0168 (v2.6)

export const id = "0168";
export const description = "Processing priority";
export const type = "hl7";
export const codes = [
  {
    name: "A",
    description: "As soon as possible (a priority lower than stat)",
  },
  {
    name: "B",
    description: "Do at bedside or portable (may be used with other codes)",
  },
  {
    name: "C",
    description: "Measure continuously (e.g., arterial line blood pressure)",
  },
  { name: "P", description: "Preoperative (to be done prior to surgery)" },
  { name: "R", description: "Routine" },
  { name: "S", description: "Stat (do immediately)" },
  {
    name: "T",
    description: "Timing critical (do as near as possible to requested time)",
  },
] as const;
