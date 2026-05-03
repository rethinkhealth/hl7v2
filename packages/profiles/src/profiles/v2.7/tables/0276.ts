// Generated table profile for 0276 (v2.7)

export const id = "0276";
export const description = "Appointment reason codes";
export const type = "user";
export const codes = [
  {
    description: "A routine check-up, such as an annual physical",
    name: "CHECKUP",
  },
  { description: "Emergency appointment", name: "EMERGENCY" },
  {
    description: "A follow up visit from a previous appointment",
    name: "FOLLOWUP",
  },
  {
    description: "Routine appointment - default if not valued",
    name: "ROUTINE",
  },
  { description: "A previously unscheduled walk-in visit", name: "WALKIN" },
] as const;
