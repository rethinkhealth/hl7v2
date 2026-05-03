// Generated table profile for 0078 (v2.8.2)

export const id = "0078";
export const description = "Interpretation Codes";
export const type = "hl7";
export const codes = [
  { description: "Off scale low", name: "<" },
  { description: "Off scale high", name: ">" },
  { description: "Abnormal", name: "A" },
  { description: "Critically abnormal", name: "AA" },
  { description: "Anti-complementary substances present", name: "AC" },
  { description: "Better", name: "B" },
  { description: "Significant change down", name: "D" },
  { description: "Detected", name: "DET" },
  { description: "High", name: "H" },
  { description: "Critically high", name: "HH" },
  { description: "Hold for Medical Review", name: "HM" },
  { description: "Very high", name: "HU" },
  { description: "Intermediate", name: "I" },
  { description: "Insufficient evidence", name: "IE" },
  { description: "Low", name: "L" },
  { description: "Critically low", name: "LL" },
  { description: "Very low", name: "LU" },
  {
    description:
      "Moderately susceptible. Indicates for microbiology susceptibilities only.",
    name: "MS",
  },
  { description: "Normal", name: "N" },
  { description: "Not Detected", name: "ND" },
  { description: "Negative", name: "NEG" },
  { description: "Non-reactive", name: "NR" },
  { description: "Non-susceptible", name: "NS" },
  {
    description: "No range defined, or normal ranges don't apply",
    name: "null",
  },
  {
    description: "Interpretation qualifiers in separate OBX segments",
    name: "OBX",
  },
  { description: "Positive", name: "POS" },
  { description: "Quality Control Failure", name: "QCF" },
  { description: "Resistant", name: "R" },
  { description: "Reactive", name: "RR" },
  { description: "Susceptible", name: "S" },
  { description: "Susceptible-dose dependent", name: "SDD" },
  { description: "Synergy - resistant", name: "SYN-R" },
  { description: "Synergy - susceptible", name: "SYN-S" },
  { description: "Cytotoxic substance present", name: "TOX" },
  { description: "Significant change up", name: "U" },
  {
    description:
      "Very susceptible. Indicates for microbiology susceptibilities only.",
    name: "VS",
  },
  { description: "Worse", name: "W" },
  { description: "Weakly reactive", name: "WR" },
] as const;
