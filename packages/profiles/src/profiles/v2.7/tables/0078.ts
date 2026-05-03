// Generated table profile for 0078 (v2.7)

export const id = "0078";
export const description = "Interpretation Codes";
export const type = "user";
export const codes = [
  { description: "Below absolute low-off instrument scale", name: "<" },
  { description: "Above absolute high-off instrument scale", name: ">" },
  { description: "Abnormal (applies to non-numeric results)", name: "A" },
  {
    description:
      "Very abnormal (applies to non-numeric units, analogous to panic limits for numeric units)",
    name: "AA",
  },
  { description: "Anti-complementary substances present", name: "AC" },
  { description: "Better-use when direction not relevant", name: "B" },
  { description: "Significant change down", name: "D" },
  { description: "Detected", name: "DET" },
  { description: "Above high normal", name: "H" },
  { description: "Above upper panic limits", name: "HH" },
  {
    description:
      "Intermediate. Indicates for microbiology susceptibilities only.",
    name: "I",
  },
  { description: "Indeterminate", name: "IND" },
  { description: "Below low normal", name: "L" },
  { description: "Below lower panic limits", name: "LL" },
  {
    description:
      "Moderately susceptible. Indicates for microbiology susceptibilities only.",
    name: "MS",
  },
  { description: "Normal (applies to non-numeric results)", name: "N" },
  { description: "Not Detected", name: "ND" },
  { description: "Negative", name: "NEG" },
  { description: "Non-reactive", name: "NR" },
  {
    description: "No range defined, or normal ranges don't apply",
    name: "null",
  },
  { description: "Positive", name: "POS" },
  { description: "Quality Control Failure", name: "QCF" },
  {
    description: "Resistant. Indicates for microbiology susceptibilities only.",
    name: "R",
  },
  { description: "Reactive", name: "RR" },
  {
    description:
      "Susceptible. Indicates for microbiology susceptibilities only.",
    name: "S",
  },
  { description: "Cytotoxic substance present", name: "TOX" },
  { description: "Significant change up", name: "U" },
  {
    description:
      "Very susceptible. Indicates for microbiology susceptibilities only.",
    name: "VS",
  },
  { description: "Worse-use when direction not relevant", name: "W" },
  { description: "Weakly reactive", name: "WR" },
] as const;
