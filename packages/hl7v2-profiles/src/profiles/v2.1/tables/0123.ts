// Generated table profile for 0123 (v2.1)

export const id = "0123";
export const description = "RESULT STATUS - OBR";
export const type = "hl7";
export const codes = [
  { name: "C", description: "Correction of previously transmitted results" },
  { name: "F", description: "Final results - results stored & verified" },
  { name: "I", description: "Specimen in lab, not yet processed." },
  { name: "P", description: "Preliminary results" },
  { name: "R", description: "Results stored - not yet verified" },
  { name: "S", description: "Procedure scheduled, not done" },
  { name: "Y", description: "No order on record for this test" },
  { name: "Z", description: "No record of this patient" },
] as const;
