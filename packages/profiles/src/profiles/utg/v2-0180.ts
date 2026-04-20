// Generated UTG code system profile for v2-0180

export const id = "v2-0180";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0180";
export const oid = "2.16.840.1.113883.18.95";
export const name = "MasterfileActionCode";
export const title = "masterfileActionCode";
export const codes = [
  { code: "MAC", display: "Reactivate deactivated record", status: "active" },
  { code: "MAD", display: "Add record to master file", status: "active" },
  {
    code: "MDC",
    display:
      "Deactivate: discontinue using record in master file, but do not delete from database",
    status: "active",
  },
  { code: "MDL", display: "Delete record from master file", status: "active" },
  { code: "MUP", display: "Update record for master file", status: "active" },
] as const;
