// Generated table profile for 0202 (v2.5)

export const id = "0202";
export const description = "Telecommunication equipment type";
export const type = "hl7";
export const codes = [
  { description: "Beeper", name: "BP" },
  { description: "Cellular Phone", name: "CP" },
  { description: "Fax", name: "FX" },
  {
    description:
      "Internet Address: Use Only If Telecommunication Use Code Is NET",
    name: "Internet",
  },
  { description: "Modem", name: "MD" },
  { description: "Telephone", name: "PH" },
  { description: "Telecommunications Device for the Deaf", name: "TDD" },
  { description: "Teletypewriter", name: "TTY" },
  {
    description:
      "X.400 email address: Use Only If Telecommunication Use Code Is NET",
    name: "X.400",
  },
] as const;
