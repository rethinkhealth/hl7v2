// Generated table profile for 0528 (v2.5)

export const id = "0528";
export const description = "Event related period";
export const type = "hl7";
export const codes = [
  { name: "AC", description: "before meal (from lat. ante cibus)" },
  { name: "ACD", description: "before lunch (from lat. ante cibus diurnus)" },
  {
    name: "ACM",
    description: "before breakfast (from lat. ante cibus matutinus)",
  },
  {
    name: "ACV",
    description: "before dinner (from lat. ante cibus vespertinus)",
  },
  { name: "HS", description: "the hour of sleep (e.g., H18-22)" },
  { name: "IC", description: "between meals (from lat. inter cibus)" },
  { name: "ICD", description: "between lunch and dinner" },
  { name: "ICM", description: "between breakfast and lunch" },
  { name: "ICV", description: "between dinner and the hour of sleep" },
  { name: "PC", description: "after meal (from lat. post cibus)" },
  { name: "PCD", description: "after lunch (from lat. post cibus diurnus)" },
  {
    name: "PCM",
    description: "after breakfast (from lat. post cibus matutinus)",
  },
  {
    name: "PCV",
    description: "after dinner (from lat. post cibus vespertinus)",
  },
] as const;
