// Generated table profile for 0038 (v2.8.1)

export const id = "0038";
export const description = "Order status";
export const type = "hl7";
export const codes = [
  { description: "Some, but not all, results available", name: "A" },
  { description: "Order was canceled", name: "CA" },
  { description: "Order is completed", name: "CM" },
  { description: "Order was discontinued", name: "DC" },
  { description: "Error, order not found", name: "ER" },
  { description: "Order is on hold", name: "HD" },
  { description: "In process, unspecified", name: "IP" },
  { description: "Order has been replaced", name: "RP" },
  { description: "In process, scheduled", name: "SC" },
] as const;
