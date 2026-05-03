// Generated table profile for 0528 (v2.8)

export const id = "0528";
export const description = "Event Related Period";
export const type = "hl7";
export const codes = [
  { description: "before meal (from lat. ante cibus)", name: "AC" },
  { description: "before lunch (from lat. ante cibus diurnus)", name: "ACD" },
  {
    description: "before breakfast (from lat. ante cibus matutinus)",
    name: "ACM",
  },
  {
    description: "before dinner (from lat. ante cibus vespertinus)",
    name: "ACV",
  },
  { description: "the hour of sleep (e.g., H18-22)", name: "HS" },
  { description: "between meals (from lat. inter cibus)", name: "IC" },
  { description: "between lunch and dinner", name: "ICD" },
  { description: "between breakfast and lunch", name: "ICM" },
  { description: "between dinner and the hour of sleep", name: "ICV" },
  { description: "after meal (from lat. post cibus)", name: "PC" },
  { description: "after lunch (from lat. post cibus diurnus)", name: "PCD" },
  {
    description: "after breakfast (from lat. post cibus matutinus)",
    name: "PCM",
  },
  {
    description: "after dinner (from lat. post cibus vespertinus)",
    name: "PCV",
  },
] as const;
