// Generated table profile for 0202 (v2.3)

export const id = "0202";
export const description = "Telecommunication Equipment Type";
export const type = "hl7";
export const codes = [
  { name: "BP", description: "Beeper/Pager" },
  { name: "CP", description: "Cellular Phone" },
  { name: "FX", description: "Fax" },
  {
    name: "Internet",
    description:
      "Internet Address:  Use only if telecommunication use code is NET",
  },
  { name: "MD", description: "Modem" },
  { name: "PH", description: "Telephone" },
  {
    name: "X.400",
    description:
      "X.400 email address:  use only if telecommunication use code is NET",
  },
] as const;
