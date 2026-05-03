// Generated table profile for 0359 (v2.3.1)

export const id = "0359";
export const description = "Diagnosis priority";
export const type = "hl7";
export const codes = [
  { description: "not included in diagnosis ranking", name: "0" },
  { description: "the primary diagnosis", name: "1" },
  { description: "for ranked secondary diagnoses", name: "2 and higher" },
] as const;
