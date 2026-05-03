// Generated table profile for 0925 (v2.8)

export const id = "0925";
export const description = "Phlebotomy Issue";
export const type = "hl7";
export const codes = [
  { description: "Air Contamination", name: "ACN" },
  { description: "Clotted", name: "CLT" },
  { description: "Collapse", name: "COL" },
  { description: "Defective Apheresis Kit", name: "DAK" },
  { description: "Defective Bag", name: "DBG" },
  { description: "Defective Instrument", name: "DMT" },
  { description: "Defective Needle", name: "DND" },
  { description: "Infiltration", name: "INF" },
  { description: "Instrument Power Failure", name: "IPF" },
  { description: "Missed / in tissue", name: "MIS" },
  {
    description:
      "Needle adjustment (this may not end a procedure, if successful will impact component production)",
    name: "NAD",
  },
  { description: "Poor flow", name: "PFL" },
  { description: "Vein Spasm", name: "VSM" },
] as const;
