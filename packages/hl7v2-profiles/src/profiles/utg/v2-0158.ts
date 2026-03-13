// Generated UTG code system profile for v2-0158

export const id = "v2-0158";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0158";
export const oid = "2.16.840.1.113883.18.76";
export const name = "DateTimeSelectionQualifier";
export const title = "date-timeSelectionQualifier";
export const codes = [
  { code: "1ST", display: "First value within range", status: "active" },
  { code: "ALL", display: "All values within the range", status: "active" },
  { code: "LST", display: "Last value within the range", status: "active" },
  {
    code: "REV",
    display:
      "All values within the range returned in reverse chronological order (This is the default if not otherwise specified.)",
    status: "active",
  },
] as const;
