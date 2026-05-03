// Generated table profile for 0078 (v2.1)

export const id = "0078";
export const description = "ABNORMAL FLAGS";
export const type = "hl7";
export const codes = [
  { description: "Below absolute low-off instrument scale", name: "<" },
  { description: "Abnormal (applies to non-numeric results)", name: "A" },
  { description: "Very abnormal", name: "AA" },
  { description: "Significant change down", name: "D" },
  { description: "Above high normal", name: "H" },
  { description: "Above upper panic limits", name: "HH" },
  { description: "Interval", name: "I" },
  { description: "Below lower panic limits", name: "LL" },
  { description: "Moderately sensitive", name: "MS" },
  {
    description: "No range defined,or normal ranges don't apply",
    name: "null",
  },
  { description: "Resists", name: "R" },
  { description: "Sensitive", name: "S" },
  { description: "Significant change up", name: "U" },
  { description: "Very sensitive", name: "VS" },
] as const;
