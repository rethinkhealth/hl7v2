// Generated UTG code system profile for v2-0027

export const id = "v2-0027";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0027";
export const oid = "2.16.840.1.113883.18.15";
export const name = "Priority";
export const title = "priority";
export const codes = [
  {
    code: "A",
    display: "As soon as possible (a priority lower than stat)",
    status: "active",
  },
  {
    code: "P",
    display: "Preoperative (to be done prior to surgery)",
    status: "active",
  },
  { code: "R", display: "Routine", status: "active" },
  { code: "S", display: "Stat (do immediately)", status: "active" },
  {
    code: "T",
    display: "Timing critical (do as near as possible to requested time)",
    status: "active",
  },
] as const;
