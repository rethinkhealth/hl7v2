// Generated table profile for 0316 (v2.7.1)

export const id = "0316";
export const description = "Organ Donor Code";
export const type = "user";
export const codes = [
  {
    name: "F",
    description:
      "Yes, patient is a documented donor, but documentation is not on file",
  },
  {
    name: "I",
    description:
      "No, patient is not a documented donor, but information was provided",
  },
  { name: "N", description: "No, patient has not agreed to be a donor" },
  {
    name: "P",
    description: "Patient leaves organ donation decision to a specific person",
  },
  {
    name: "R",
    description: "Patient leaves organ donation decision to relatives",
  },
  { name: "U", description: "Unknown" },
  {
    name: "Y",
    description:
      "Yes, patient is a documented donor and documentation is on file",
  },
] as const;
