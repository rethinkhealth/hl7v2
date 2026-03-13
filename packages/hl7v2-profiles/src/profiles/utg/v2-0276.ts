// Generated UTG code system profile for v2-0276

export const id = "v2-0276";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0276";
export const oid = "2.16.840.1.113883.18.169";
export const name = "AppointmentReason";
export const title = "appointmentReason";
export const codes = [
  {
    code: "CHECKUP",
    display: "A routine check-up, such as an annual physical",
    status: "active",
  },
  { code: "EMERGENCY", display: "Emergency appointment", status: "active" },
  {
    code: "FOLLOWUP",
    display: "A follow up visit from a previous appointment",
    status: "active",
  },
  {
    code: "ROUTINE",
    display: "Routine appointment - default if not valued",
    status: "active",
  },
  {
    code: "WALKIN",
    display: "A previously unscheduled walk-in visit",
    status: "active",
  },
] as const;
