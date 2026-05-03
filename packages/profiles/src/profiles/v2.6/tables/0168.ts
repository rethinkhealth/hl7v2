// Generated table profile for 0168 (v2.6)

export const id = "0168";
export const description = "Processing priority";
export const type = "hl7";
export const codes = [
  {
    description: "As soon as possible (a priority lower than stat)",
    name: "A",
  },
  {
    description: "Do at bedside or portable (may be used with other codes)",
    name: "B",
  },
  {
    description: "Measure continuously (e.g., arterial line blood pressure)",
    name: "C",
  },
  { description: "Preoperative (to be done prior to surgery)", name: "P" },
  { description: "Routine", name: "R" },
  { description: "Stat (do immediately)", name: "S" },
  {
    description: "Timing critical (do as near as possible to requested time)",
    name: "T",
  },
] as const;
