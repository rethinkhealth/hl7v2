// Generated table profile for 0121 (v2.1)

export const id = "0121";
export const description = "RESPONSE FLAG";
export const type = "hl7";
export const codes = [
  { description: "Same as R, also other associated segments.", name: "D" },
  { description: "Report exceptions only.", name: "E" },
  { description: "Same as D, plus confirmations explicitly.", name: "F" },
  { description: "Only the MSA segment is returned.", name: "N" },
] as const;
