// Generated table profile for 0161 (v2.5)

export const id = "0161";
export const description = "Allow Substitution";
export const type = "hl7";
export const codes = [
  { description: "Allow generic substitutions.", name: "G" },
  {
    description:
      "Substitutions are NOT authorized.  (This is the default - null.)",
    name: "N",
  },
  { description: "Allow therapeutic substitutions", name: "T" },
] as const;
