// Generated table profile for 0316 (v2.3.1)

export const id = "0316";
export const description = "Organ donor";
export const type = "user";
export const codes = [
  {
    description: "Yes, patient is a donor, but card is not on file",
    name: "F",
  },
  {
    description:
      "No, patient does not have a living will but information was provided",
    name: "I",
  },
  { description: "Unknown", name: "U" },
  { description: "Yes, patient is a donor and card is on file", name: "Y" },
] as const;
