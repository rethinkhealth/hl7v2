// Generated table profile for 0161 (v2.4)

export const id = "0161";
export const description = "Allow substitution";
export const type = "hl7";
export const codes = [
  { name: "G", description: "Allow generic substitutions." },
  {
    name: "N",
    description:
      "Substitutions are NOT authorized.  (This is the default - null.)",
  },
  { name: "T", description: "Allow therapeutic substitutions" },
] as const;
