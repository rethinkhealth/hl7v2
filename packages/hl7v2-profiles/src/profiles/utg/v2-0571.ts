// Generated UTG code system profile for v2-0571

export const id = "v2-0571";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0571";
export const oid = "2.16.840.1.113883.18.371";
export const name = "InvoiceProcessingResultsStatus";
export const title = "invoiceProcessingResultsStatus";
export const codes = [
  { code: "ACK", display: "Acknowledge", status: "active" },
  { code: "ADJ", display: "Adjudicated with Adjustments", status: "active" },
  { code: "ADJSUB", display: "Adjudicated as Submitted", status: "active" },
  { code: "ADJZER", display: "Adjudicated to Zero", status: "active" },
  { code: "PAID", display: "Paid", status: "active" },
  { code: "PEND", display: "Pending", status: "active" },
  { code: "PRED", display: "Pre-Determination", status: "active" },
  { code: "REJECT", display: "Reject", status: "active" },
] as const;
