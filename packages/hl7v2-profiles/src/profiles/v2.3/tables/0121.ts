// Generated table profile for 0121 (v2.3)

export const id = "0121";
export const description = "Response Flag";
export const type = "hl7";
export const codes = [
  { name: "D", description: "Same as R, also other associated segments" },
  { name: "E", description: "Report exceptions only" },
  { name: "F", description: "Same as D, plus confirmations explicitly" },
  { name: "N", description: "Only the MSA segment is returned" },
  { name: "R", description: "Same as E, also Replacement and Parent-Child" },
] as const;
