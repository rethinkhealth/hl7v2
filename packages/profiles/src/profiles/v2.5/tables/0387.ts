// Generated table profile for 0387 (v2.5)

export const id = "0387";
export const description = "Command response";
export const type = "user";
export const codes = [
  {
    name: "ER",
    description: "Command cannot be completed because of error condition",
  },
  { name: "OK", description: "Command completed successfully" },
  {
    name: "ST",
    description:
      "Command cannot be completed because of the status of the requested equipment",
  },
  {
    name: "TI",
    description: "Command cannot be completed within requested completion time",
  },
  {
    name: "UN",
    description: "Command cannot be completed for unknown reasons",
  },
] as const;
