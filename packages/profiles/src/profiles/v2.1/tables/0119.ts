// Generated table profile for 0119 (v2.1)

export const id = "0119";
export const description = "ORDER CONTROL";
export const type = "hl7";
export const codes = [
  { description: "Cancel order request", name: "CA" },
  { description: "Child order", name: "CH" },
  { description: "Combined result", name: "CN" },
  { description: "Discontinue order request", name: "DC" },
  { description: "Data Errors", name: "DE" },
  { description: "Discontinued as requested", name: "DR" },
  { description: "Hold order request", name: "HD" },
  { description: "On hold as requested", name: "HR" },
  { description: "Number assigned            T", name: "NA" },
  { description: "New order                  T", name: "NW" },
  { description: "Order discontinued", name: "OD" },
  { description: "Order accepted and OK", name: "OK" },
  { description: "Released as requested", name: "OR" },
  { description: "Parent order", name: "PA" },
  { description: "Observations to follow", name: "RE" },
  { description: "Replacement order", name: "RO" },
  { description: "Order replace request", name: "RP" },
  { description: "Request received", name: "RR" },
  { description: "Replaced unsolicited", name: "RU" },
  { description: "Send filler number            F         I", name: "SN" },
  { description: "Send order status request", name: "SS" },
  { description: "Unable to discontinue", name: "UD" },
  { description: "Unable to put on hold", name: "UH" },
  { description: "Unable to release", name: "UR" },
  { description: "Unable to change", name: "UX" },
  { description: "Changed as requested", name: "XR" },
  { description: "Order changed, unsolicited", name: "XX" },
] as const;
