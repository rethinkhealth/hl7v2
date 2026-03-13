// Generated table profile for 0478 (v2.8.2)

export const id = "0478";
export const description = "Formulary Status";
export const type = "hl7";
export const codes = [
  {
    name: "G",
    description:
      "Pharmaceutical substance is in the formulary, but guidelines apply",
  },
  {
    name: "N",
    description: "Pharmaceutical substance is NOT in the formulary",
  },
  {
    name: "R",
    description:
      "Pharmaceutical substance is in the formulary, but restrictions apply",
  },
  { name: "Y", description: "Pharmaceutical substance is in the formulary" },
] as const;
