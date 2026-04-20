// Generated UTG code system profile for v2-0230

export const id = "v2-0230";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0230";
export const oid = "2.16.840.1.113883.18.130";
export const name = "ProcedureFunctionalType";
export const title = "procedureFunctionalType";
export const codes = [
  { code: "A", display: "Anesthesia", status: "active" },
  { code: "D", display: "Diagnostic procedure", status: "active" },
  {
    code: "I",
    display:
      "Invasive procedure not classified elsewhere (e.g., IV, catheter, etc.)",
    status: "active",
  },
  {
    code: "P",
    display: "Procedure for treatment (therapeutic, including operations)",
    status: "active",
  },
] as const;
