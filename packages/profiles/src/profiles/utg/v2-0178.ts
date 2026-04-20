// Generated UTG code system profile for v2-0178

export const id = "v2-0178";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0178";
export const oid = "2.16.840.1.113883.18.93";
export const name = "FileLevelEvent";
export const title = "file-levelEvent";
export const codes = [
  {
    code: "REP",
    display:
      "Replace current version of this master file with the version contained in this message",
    status: "active",
  },
  {
    code: "UPD",
    display:
      "Change file records as defined in the record-level event codes for each record that follows",
    status: "active",
  },
] as const;
