// Generated UTG code system profile for v2-0759

export const id = "v2-0759";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0759";
export const oid = "2.16.840.1.113883.18.399";
export const name = "DrgstatusAdmission";
export const title = "drgstatusAdmission";
export const codes = [
  {
    code: "0",
    display: "Admission status is valid; used for grouping",
    status: "active",
  },
  {
    code: "1",
    display: "Admission status is valid; not used for grouping",
    status: "active",
  },
  {
    code: "2",
    display: "Admission status is invalid; not used for grouping",
    status: "active",
  },
  {
    code: "3",
    display: "Admission status is invalid; default value used for grouping",
    status: "active",
  },
] as const;
