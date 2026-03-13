// Generated table profile for 0473 (v2.8)

export const id = "0473";
export const description = "Formulary Status";
export const type = "user";
export const codes = [
  {
    name: "G",
    description:
      "This observation/service is on the formulary, and has guidelines",
  },
  {
    name: "N",
    description: "This observation/service is not on the formulary",
  },
  {
    name: "R",
    description:
      "This observation/service is on the formulary, but is restricted",
  },
  { name: "Y", description: "This observation/service is on the formulary" },
] as const;
