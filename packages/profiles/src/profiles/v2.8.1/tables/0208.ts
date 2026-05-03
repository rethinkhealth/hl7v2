// Generated table profile for 0208 (v2.8.1)

export const id = "0208";
export const description = "Query Response Status";
export const type = "hl7";
export const codes = [
  { description: "Application error", name: "AE" },
  { description: "Application reject", name: "AR" },
  { description: "No data found, no errors", name: "NF" },
  { description: "Data found, no errors (this is the default)", name: "OK" },
] as const;
