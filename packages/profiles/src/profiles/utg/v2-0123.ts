// Generated UTG code system profile for v2-0123

export const id = "v2-0123";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0123";
export const oid = "2.16.840.1.113883.18.51";
export const name = "ResultStatus";
export const title = "resultStatus";
export const codes = [
  {
    code: "A",
    display: "Some, but not all, results available",
    status: "active",
  },
  { code: "C", display: "Corrected, final", status: "active" },
  { code: "F", display: "Final results", status: "active" },
  {
    code: "I",
    display: "No results available; specimen received, procedure incomplete",
    status: "active",
  },
  { code: "M", display: "Corrected, not final", status: "active" },
  {
    code: "N",
    display: "Procedure completed, results pending",
    status: "active",
  },
  {
    code: "O",
    display: "Order received; specimen not yet received",
    status: "active",
  },
  { code: "P", display: "Preliminary", status: "active" },
  { code: "R", display: "Results stored; not yet verified", status: "active" },
  {
    code: "S",
    display: "No results available; procedure scheduled, but not done",
    status: "active",
  },
  {
    code: "X",
    display: "No results available; Order canceled",
    status: "active",
  },
  { code: "Y", display: "No order on record for this test", status: "active" },
  { code: "Z", display: "No record of this patient", status: "active" },
] as const;
