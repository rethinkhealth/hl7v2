// Generated table profile for 0369 (v2.7.1)

export const id = "0369";
export const description = "Specimen Role";
export const type = "user";
export const codes = [
  { description: "Blind Sample", name: "B" },
  {
    description: "Calibrator, used for initial setting of calibration",
    name: "C",
  },
  {
    description:
      "Electronic QC, used with manufactured reference providing signals that simulate QC results",
    name: "E",
  },
  {
    description:
      "Specimen used for testing proficiency of the organization performing the testing (Filler)",
    name: "F",
  },
  {
    description:
      "Group (where a specimen consists of multiple individual elements that are not individually identified)",
    name: "G",
  },
  {
    description:
      "Pool (aliquots of individual specimens combined to form a single specimen representing all of the components.)",
    name: "L",
  },
  { description: "Specimen used for testing Operator Proficiency", name: "O" },
  { description: "Patient (default if blank component value)", name: "P" },
  { description: "Control specimen", name: "Q" },
  { description: "Replicate (of patient sample as a control)", name: "R" },
  {
    description: "Verifying Calibrator, used for periodic calibration checks",
    name: "V",
  },
] as const;
