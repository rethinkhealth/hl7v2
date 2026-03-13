// Generated table profile for 0038 (v2.5)

export const id = "0038";
export const description = "Order status";
export const type = "hl7";
export const codes = [
  { name: "A", description: "Some, but not all, results available" },
  { name: "CA", description: "Order was canceled" },
  { name: "CM", description: "Order is completed" },
  { name: "DC", description: "Order was discontinued" },
  { name: "ER", description: "Error, order not found" },
  { name: "HD", description: "Order is on hold" },
  { name: "IP", description: "In process, unspecified" },
  { name: "RP", description: "Order has been replaced" },
  { name: "SC", description: "In process, scheduled" },
] as const;
