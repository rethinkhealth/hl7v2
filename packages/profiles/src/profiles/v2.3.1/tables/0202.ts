// Generated table profile for 0202 (v2.3.1)

export const id = "0202";
export const description = "Telecommunication equipment type";
export const type = "hl7";
export const codes = [
  { name: "BP", description: "Beeper" },
  { name: "CP", description: "Cellular Phone" },
  { name: "FX", description: "Fax" },
  {
    name: "Internet",
    description:
      "Internet Address: Use Only If Telecommunication Use Code Is NET",
  },
  { name: "MD", description: "Modem" },
  { name: "PH", description: "Telephone" },
  {
    name: "X.400",
    description:
      "X.400 email address: Use Only If Telecommunication Use Code Is NET",
  },
] as const;
