// Generated table profile for 0467 (v2.7)

export const id = "0467";
export const description = "Modifier Edit Code";
export const type = "user";
export const codes = [
  { description: "Modifier does NOT exist", name: "0" },
  { description: "Modifier present, no errors", name: "1" },
  { description: "Modifier invalid", name: "2" },
  { description: "Modifier NOT approved for ASC/HOPD use", name: "3" },
  {
    description: "Modifier approved for ASC/HOPD use, inappropriate for code",
    name: "4",
  },
  { description: "Modifier edit code unknown", name: "U" },
] as const;
