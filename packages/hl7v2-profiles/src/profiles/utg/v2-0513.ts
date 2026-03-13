// Generated UTG code system profile for v2-0513

export const id = "v2-0513";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0513";
export const oid = "2.16.840.1.113883.18.335";
export const name = "BloodProductTransfusionDispositionStatus";
export const title = "bloodProductTransfusion-dispositionStatus";
export const codes = [
  { code: "RA", display: "Returned unused and unlinked", status: "active" },
  { code: "RL", display: "Returned unused but linked", status: "active" },
  { code: "TI", display: "Transfusion Interrupted", status: "N" },
  { code: "TR", display: "Transfusion Ended with Reactions", status: "active" },
  { code: "TS", display: "Transfusion Started", status: "N" },
  { code: "TX", display: "Transfusion Ended", status: "active" },
  { code: "WA", display: "Wasted", status: "active" },
] as const;
