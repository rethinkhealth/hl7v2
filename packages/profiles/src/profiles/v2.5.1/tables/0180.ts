// Generated table profile for 0180 (v2.5.1)

export const id = "0180";
export const description = "Record-level event code";
export const type = "hl7";
export const codes = [
  { description: "Reactivate deactivated record", name: "MAC" },
  { description: "Add record to master file", name: "MAD" },
  {
    description:
      "Deactivate: discontinue using record in master file, but do not delete from database",
    name: "MDC",
  },
  { description: "Delete record from master file", name: "MDL" },
  { description: "Update record for master file", name: "MUP" },
] as const;
