// Generated table profile for 0078 (v2.3)

export const id = "0078";
export const description = "Abnormal Flags";
export const type = "hl7";
export const codes = [
  { description: "Below absolute low-off instrument scale", name: "<" },
  { description: "Above absolute high-off instrument scale", name: ">" },
  { description: "Abnormal (applies to non-numeric results)", name: "A" },
  {
    description:
      "Very abnormal (applies to non-numeric units, analagous to panic limits for numeric units)",
    name: "AA",
  },
  { description: "Better--use when direction not relevant", name: "B" },
  { description: "Significant change down", name: "D" },
  { description: "Above high normal", name: "H" },
  { description: "Above upper panic limits", name: "HH" },
  { description: "Intermediate (microbiology sensitivies only)", name: "I" },
  { description: "Below low normal", name: "L" },
  { description: "Below lower panic limits", name: "LL" },
  {
    description: "Moderately sensitive (microbiology sensitivies only)",
    name: "MS",
  },
  { description: "Normal (applies to non-numeric results)", name: "N" },
  {
    description: "No range defined, or normal ranges don't apply",
    name: "null",
  },
  { description: "Resistant (microbiology sensitivies only)", name: "R" },
  { description: "Sensitive (microbiology sensitivies only)", name: "S" },
  { description: "Significant change up", name: "U" },
  { description: "Very sensitive (microbiology sensitivies only)", name: "VS" },
  { description: "Worse--use when direction not relevant", name: "W" },
] as const;
