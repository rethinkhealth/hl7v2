// Generated table profile for 0180 (v2.5)

export const id = "0180";
export const description = "Record-level event code";
export const type = "hl7";
export const codes = [
  { name: "MAC", description: "Reactivate deactivated record" },
  { name: "MAD", description: "Add record to master file" },
  {
    name: "MDC",
    description:
      "Deactivate: discontinue using record in master file, but do not delete from database",
  },
  { name: "MDL", description: "Delete record from master file" },
  { name: "MUP", description: "Update record for master file" },
] as const;
