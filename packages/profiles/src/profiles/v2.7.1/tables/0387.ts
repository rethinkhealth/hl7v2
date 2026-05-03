// Generated table profile for 0387 (v2.7.1)

export const id = "0387";
export const description = "Command Response";
export const type = "user";
export const codes = [
  {
    description: "Command cannot be completed because of error condition",
    name: "ER",
  },
  { description: "Command completed successfully", name: "OK" },
  {
    description:
      "Command cannot be completed because of the status of the requested equipment",
    name: "ST",
  },
  {
    description: "Command cannot be completed within requested completion time",
    name: "TI",
  },
  {
    description: "Command cannot be completed for unknown reasons",
    name: "UN",
  },
] as const;
