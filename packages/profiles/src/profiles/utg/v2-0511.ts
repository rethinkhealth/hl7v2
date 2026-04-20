// Generated UTG code system profile for v2-0511

export const id = "v2-0511";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0511";
export const oid = "2.16.840.1.113883.18.334";
export const name = "BpObservationStatusCodesInterpretation";
export const title = "bpObservationStatusCodesInterpretation";
export const codes = [
  {
    code: "C",
    display:
      "Record coming over is a correction and thus replaces a final status",
    status: "active",
  },
  { code: "D", display: "Deletes the BPX record", status: "active" },
  {
    code: "F",
    display: "Final status; Can only be changed with a corrected status",
    status: "active",
  },
  {
    code: "O",
    display: "Order detail description only (no status)",
    status: "active",
  },
  { code: "P", display: "Preliminary status", status: "active" },
  {
    code: "W",
    display: "Post original as wrong, e.g., transmitted for wrong patient",
    status: "active",
  },
] as const;
