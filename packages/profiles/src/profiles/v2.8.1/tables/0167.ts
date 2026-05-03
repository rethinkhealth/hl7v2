// Generated table profile for 0167 (v2.8.1)

export const id = "0167";
export const description = "Substitution Status";
export const type = "hl7";
export const codes = [
  { description: "No product selection indicated", name: "0" },
  { description: "Substitution not allowed by prescriber", name: "1" },
  {
    description: "Substitution allowed - patient requested product dispensed",
    name: "2",
  },
  {
    description: "Substitution allowed - pharmacist selected product dispensed",
    name: "3",
  },
  {
    description: "Substitution allowed - generic drug not in stock",
    name: "4",
  },
  {
    description: "Substitution allowed - brand drug dispensed as a generic",
    name: "5",
  },
  {
    description: "Substitution not allowed - brand drug mandated by law",
    name: "7",
  },
  {
    description:
      "Substitution allowed - generic drug not available in marketplace",
    name: "8",
  },
  { description: "A generic substitution was dispensed.", name: "G" },
  {
    description:
      "No substitute was dispensed.  This is equivalent to the default (null) value.",
    name: "N",
  },
  { description: "A therapeutic substitution was dispensed.", name: "T" },
] as const;
