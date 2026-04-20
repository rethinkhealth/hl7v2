// Generated table profile for 0167 (v2.3)

export const id = "0167";
export const description = "Substitution Status";
export const type = "hl7";
export const codes = [
  { name: "G", description: "A generic substitution was dispensed" },
  {
    name: "N",
    description:
      "No substitute was dispensed.  This is equivalent to the default (null) value.",
  },
  { name: "T", description: "A therapeutic substitution was dispensed" },
] as const;
