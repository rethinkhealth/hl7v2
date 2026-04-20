// Generated UTG code system profile for v2-0935

export const id = "v2-0935";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0935";
export const oid = "2.16.840.1.113883.18.435";
export const name = "ProcessInterruptionReason";
export const title = "processInterruptionReason";
export const codes = [
  { code: "ASC", display: "Apheresis Software Crash", status: "active" },
  { code: "BSC", display: "Manufacturing Software Crash", status: "active" },
  {
    code: "CFT",
    display: "Couldn&#39;t follow through with donation (scared)",
    status: "active",
  },
  { code: "DBB", display: "Bathroom", status: "active" },
  { code: "DCW", display: "Couldn&#39;t wait", status: "active" },
  { code: "DNI", display: "Phlebotomy Issue", status: "active" },
  { code: "GFE", display: "General Facility Emergency", status: "active" },
  {
    code: "NRG",
    display: "No reason given, donor decided to stop without giving a reason",
    status: "active",
  },
  { code: "PCD", display: "Phone Call-Donor", status: "active" },
] as const;
