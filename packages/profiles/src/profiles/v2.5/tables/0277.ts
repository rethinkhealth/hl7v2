// Generated table profile for 0277 (v2.5)

export const id = "0277";
export const description = "Appointment Type Codes";
export const type = "user";
export const codes = [
  {
    description:
      "A request to add a completed appointment, used to maintain records of completed appointments that did not appear in the schedule (e.g., STAT, walk-in, etc.)",
    name: "Complete",
  },
  {
    description: "Routine schedule request type - default if not valued",
    name: "Normal",
  },
  {
    description:
      'A request for a tentative (e.g., "penciled in"") appointment"',
    name: "Tentative",
  },
] as const;
