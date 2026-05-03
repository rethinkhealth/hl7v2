// Generated table profile for 0359 (v2.4)

export const id = "0359";
export const description = "Diagnosis priority";
export const type = "hl7";
export const codes = [
  { description: "Not included in diagnosis ranking", name: "0" },
  { description: "The primary diagnosis", name: "1" },
  { description: "For ranked secondary diagnoses", name: "2 ..." },
] as const;
