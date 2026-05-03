// Generated table profile for 0167 (v2.3)

export const id = "0167";
export const description = "Substitution Status";
export const type = "hl7";
export const codes = [
  { description: "A generic substitution was dispensed", name: "G" },
  {
    description:
      "No substitute was dispensed.  This is equivalent to the default (null) value.",
    name: "N",
  },
  { description: "A therapeutic substitution was dispensed", name: "T" },
] as const;
