// Generated table profile for 0277 (v2.3.1)

export const id = "0277";
export const description = "Appointment type codes";
export const type = "user";
export const codes = [
  {
    name: "Complete",
    description:
      "A request to add a completed appointment, used to maintain records of completed appointments",
  },
  {
    name: "Normal",
    description: "Routine schedule request type - default if not valued",
  },
  {
    name: "Tentative",
    description: "A request for a tentative (e.g., “penciled in”) appointment",
  },
] as const;
