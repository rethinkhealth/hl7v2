// Generated table profile for 0123 (v2.1)

export const id = "0123";
export const description = "RESULT STATUS - OBR";
export const type = "hl7";
export const codes = [
  { description: "Correction of previously transmitted results", name: "C" },
  { description: "Final results - results stored & verified", name: "F" },
  { description: "Specimen in lab, not yet processed.", name: "I" },
  { description: "Preliminary results", name: "P" },
  { description: "Results stored - not yet verified", name: "R" },
  { description: "Procedure scheduled, not done", name: "S" },
  { description: "No order on record for this test", name: "Y" },
  { description: "No record of this patient", name: "Z" },
] as const;
