// Generated table profile for 0276 (v2.7)

export const id = "0276";
export const description = "Appointment reason codes";
export const type = "user";
export const codes = [
  {
    name: "CHECKUP",
    description: "A routine check-up, such as an annual physical",
  },
  { name: "EMERGENCY", description: "Emergency appointment" },
  {
    name: "FOLLOWUP",
    description: "A follow up visit from a previous appointment",
  },
  {
    name: "ROUTINE",
    description: "Routine appointment - default if not valued",
  },
  { name: "WALKIN", description: "A previously unscheduled walk-in visit" },
] as const;
