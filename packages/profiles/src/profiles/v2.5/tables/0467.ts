// Generated table profile for 0467 (v2.5)

export const id = "0467";
export const description = "Modifier Edit Code";
export const type = "hl7";
export const codes = [
  { name: "0", description: "Modifier does NOT exist" },
  { name: "1", description: "Modifier present, no errors" },
  { name: "2", description: "Modifier invalid" },
  { name: "3", description: "Modifier NOT approved for ASC/HOPD use" },
  {
    name: "4",
    description: "Modifier approved for ASC/HOPD use, inappropriate for code",
  },
  { name: "U", description: "Modifier edit code unknown" },
] as const;
