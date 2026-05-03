// Generated table profile for 0316 (v2.8)

export const id = "0316";
export const description = "Organ Donor Code";
export const type = "user";
export const codes = [
  {
    description:
      "Yes, patient is a documented donor, but documentation is not on file",
    name: "F",
  },
  {
    description:
      "No, patient is not a documented donor, but information was provided",
    name: "I",
  },
  { description: "No, patient has not agreed to be a donor", name: "N" },
  {
    description: "Patient leaves organ donation decision to a specific person",
    name: "P",
  },
  {
    description: "Patient leaves organ donation decision to relatives",
    name: "R",
  },
  { description: "Unknown", name: "U" },
  {
    description:
      "Yes, patient is a documented donor and documentation is on file",
    name: "Y",
  },
] as const;
