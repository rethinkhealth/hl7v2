// Generated table profile for 0181 (v2.5)

export const id = "0181";
export const description = "MFN record-level error return";
export const type = "user";
export const codes = [
  {
    name: "S",
    description: "Successful posting of the record defined by the MFE segment",
  },
  {
    name: "U",
    description:
      "Unsuccessful posting of the record defined by the MFE segment",
  },
] as const;
