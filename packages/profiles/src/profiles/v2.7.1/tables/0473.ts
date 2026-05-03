// Generated table profile for 0473 (v2.7.1)

export const id = "0473";
export const description = "Formulary Status";
export const type = "user";
export const codes = [
  {
    description:
      "This observation/service is on the formulary, and has guidelines",
    name: "G",
  },
  {
    description: "This observation/service is not on the formulary",
    name: "N",
  },
  {
    description:
      "This observation/service is on the formulary, but is restricted",
    name: "R",
  },
  { description: "This observation/service is on the formulary", name: "Y" },
] as const;
