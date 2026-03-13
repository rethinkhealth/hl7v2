// Generated table profile for 0119 (v2.1)

export const id = "0119";
export const description = "ORDER CONTROL";
export const type = "hl7";
export const codes = [
  { name: "CA", description: "Cancel order request" },
  { name: "CH", description: "Child order" },
  { name: "CN", description: "Combined result" },
  { name: "DC", description: "Discontinue order request" },
  { name: "DE", description: "Data Errors" },
  { name: "DR", description: "Discontinued as requested" },
  { name: "HD", description: "Hold order request" },
  { name: "HR", description: "On hold as requested" },
  { name: "NA", description: "Number assigned            T" },
  { name: "NW", description: "New order                  T" },
  { name: "OD", description: "Order discontinued" },
  { name: "OK", description: "Order accepted and OK" },
  { name: "OR", description: "Released as requested" },
  { name: "PA", description: "Parent order" },
  { name: "RE", description: "Observations to follow" },
  { name: "RO", description: "Replacement order" },
  { name: "RP", description: "Order replace request" },
  { name: "RR", description: "Request received" },
  { name: "RU", description: "Replaced unsolicited" },
  { name: "SN", description: "Send filler number            F         I" },
  { name: "SS", description: "Send order status request" },
  { name: "UD", description: "Unable to discontinue" },
  { name: "UH", description: "Unable to put on hold" },
  { name: "UR", description: "Unable to release" },
  { name: "UX", description: "Unable to change" },
  { name: "XR", description: "Changed as requested" },
  { name: "XX", description: "Order changed, unsolicited" },
] as const;
