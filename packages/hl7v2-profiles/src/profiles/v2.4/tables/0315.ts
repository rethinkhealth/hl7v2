// Generated table profile for 0315 (v2.4)

export const id = "0315";
export const description = "Living will code";
export const type = "user";
export const codes = [
  {
    name: "F",
    description: "Yes, patient has a living will but it is not on file",
  },
  {
    name: "I",
    description:
      "No, patient does not have a living will but information was provided",
  },
  {
    name: "N",
    description:
      "No, patient does not have a living will and no information was provided",
  },
  { name: "U", description: "Unknown" },
  { name: "Y", description: "Yes, patient has a living will" },
] as const;
