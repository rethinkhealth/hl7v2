// Generated table profile for 0359 (v2.5.1)

export const id = "0359";
export const description = "Diagnosis Priority";
export const type = "hl7";
export const codes = [
  { name: "0", description: "Not included in diagnosis ranking" },
  { name: "1", description: "The primary diagnosis" },
  { name: "2 ...", description: "For ranked secondary diagnoses" },
] as const;
