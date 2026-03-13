// Generated UTG code system profile for v2-0441

export const id = "v2-0441";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0441";
export const oid = "2.16.840.1.113883.18.281";
export const name = "ImmunizationRegistryStatus";
export const title = "immunizationRegistryStatus";
export const codes = [
  { code: "A", display: "Active", status: "active" },
  { code: "I", display: "Inactive", status: "active" },
  {
    code: "L",
    display: "Inactive - Lost to follow-up (cancel contract)",
    status: "active",
  },
  {
    code: "M",
    display: "Inactive - Moved or gone elsewhere (cancel contract)",
    status: "active",
  },
  { code: "O", display: "Other", status: "active" },
  {
    code: "P",
    display:
      "Inactive - Permanently inactive (Do not reactivate or add new entries to the record)",
    status: "active",
  },
  { code: "U", display: "Unknown", status: "active" },
] as const;
