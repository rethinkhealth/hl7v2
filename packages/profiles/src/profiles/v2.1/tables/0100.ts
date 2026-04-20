// Generated table profile for 0100 (v2.1)

export const id = "0100";
export const description = "WHEN TO CHARGE";
export const type = "hl7";
export const codes = [
  { name: "D", description: "On discharge" },
  { name: "O", description: "On receipt of order" },
  { name: "R", description: "At time service is completed" },
  { name: "S", description: "At time service is started" },
  { name: "T", description: "At a designated date / time" },
] as const;
