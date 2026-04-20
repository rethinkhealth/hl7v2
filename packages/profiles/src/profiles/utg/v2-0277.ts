// Generated UTG code system profile for v2-0277

export const id = "v2-0277";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0277";
export const oid = "2.16.840.1.113883.18.170";
export const name = "AppointmentType";
export const title = "appointmentType";
export const codes = [
  {
    code: "Complete",
    display:
      "A request to add a completed appointment, used to maintain records of completed appointments that did not appear in the schedule (e.g., STAT, walk-in, etc.)",
    status: "active",
  },
  {
    code: "COMPLETE",
    display:
      "A request to add a completed appointment, used to maintain records of completed appointments that did not appear in the schedule (e.g., STAT, walk-in, etc.)",
    status: "active",
  },
  {
    code: "Normal",
    display: "Routine schedule request type &#x2013; default if not valued",
    status: "active",
  },
  {
    code: "NORMAL",
    display: "Routine schedule request type - default if not valued",
    status: "active",
  },
  {
    code: "Tentative",
    display:
      "A request for a tentative (e.g., &#x201C;penciled in&#x201D;) appointment",
    status: "active",
  },
  {
    code: "TENTATIVE",
    display:
      "A request for a tentative (e.g., &#x201C;penciled in&#x201D;) appointment",
    status: "active",
  },
] as const;
