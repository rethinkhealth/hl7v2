// Generated table profile for 0478 (v2.5)

export const id = "0478";
export const description = "Formulary Status";
export const type = "hl7";
export const codes = [
  {
    description:
      "Pharmaceutical substance is in the formulary, but guidelines apply",
    name: "G",
  },
  {
    description: "Pharmaceutical substance is NOT in the formulary",
    name: "N",
  },
  {
    description:
      "Pharmaceutical substance is in the formulary, but restrictions apply",
    name: "R",
  },
  { description: "Pharmaceutical substance is in the formulary", name: "Y" },
] as const;
