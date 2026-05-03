// Generated table profile for 0202 (v2.3)

export const id = "0202";
export const description = "Telecommunication Equipment Type";
export const type = "hl7";
export const codes = [
  { description: "Beeper/Pager", name: "BP" },
  { description: "Cellular Phone", name: "CP" },
  { description: "Fax", name: "FX" },
  {
    description:
      "Internet Address:  Use only if telecommunication use code is NET",
    name: "Internet",
  },
  { description: "Modem", name: "MD" },
  { description: "Telephone", name: "PH" },
  {
    description:
      "X.400 email address:  use only if telecommunication use code is NET",
    name: "X.400",
  },
] as const;
