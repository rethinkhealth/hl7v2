// Generated table profile for 0925 (v2.8)

export const id = "0925";
export const description = "Phlebotomy Issue";
export const type = "hl7";
export const codes = [
  { name: "ACN", description: "Air Contamination" },
  { name: "CLT", description: "Clotted" },
  { name: "COL", description: "Collapse" },
  { name: "DAK", description: "Defective Apheresis Kit" },
  { name: "DBG", description: "Defective Bag" },
  { name: "DMT", description: "Defective Instrument" },
  { name: "DND", description: "Defective Needle" },
  { name: "INF", description: "Infiltration" },
  { name: "IPF", description: "Instrument Power Failure" },
  { name: "MIS", description: "Missed / in tissue" },
  {
    name: "NAD",
    description:
      "Needle adjustment (this may not end a procedure, if successful will impact component production)",
  },
  { name: "PFL", description: "Poor flow" },
  { name: "VSM", description: "Vein Spasm" },
] as const;
