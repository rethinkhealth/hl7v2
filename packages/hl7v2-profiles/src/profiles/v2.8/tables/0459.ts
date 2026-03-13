// Generated table profile for 0459 (v2.8)

export const id = "0459";
export const description = "Reimbursement Action Code";
export const type = "user";
export const codes = [
  {
    name: "0",
    description: "OCE line item denial or rejection is not ignored",
  },
  { name: "1", description: "OCE line item denial or rejection is ignored" },
  {
    name: "2",
    description:
      "External line item denial. Line item is denied even if no OCE edits",
  },
  {
    name: "3",
    description:
      "External line item rejection. Line item is rejected even if no OCE edits",
  },
] as const;
