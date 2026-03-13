// Generated table profile for 0359 (v2.3.1)

export const id = "0359";
export const description = "Diagnosis priority";
export const type = "hl7";
export const codes = [
  { name: "0", description: "not included in diagnosis ranking" },
  { name: "1", description: "the primary diagnosis" },
  { name: "2 and higher", description: "for ranked secondary diagnoses" },
] as const;
