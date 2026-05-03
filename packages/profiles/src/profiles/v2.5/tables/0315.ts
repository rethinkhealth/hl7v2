// Generated table profile for 0315 (v2.5)

export const id = "0315";
export const description = "Living Will Code";
export const type = "user";
export const codes = [
  {
    description: "Yes, patient has a living will but it is not on file",
    name: "F",
  },
  {
    description:
      "No, patient does not have a living will but information was provided",
    name: "I",
  },
  {
    description:
      "No, patient does not have a living will and no information was provided",
    name: "N",
  },
  { description: "Unknown", name: "U" },
  { description: "Yes, patient has a living will", name: "Y" },
] as const;
