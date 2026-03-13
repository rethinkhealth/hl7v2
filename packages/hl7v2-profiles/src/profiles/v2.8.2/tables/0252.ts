// Generated table profile for 0252 (v2.8.2)

export const id = "0252";
export const description = "Causality Observations";
export const type = "hl7";
export const codes = [
  { name: "AW", description: "Abatement of event after product withdrawn" },
  { name: "BE", description: "Event recurred after product reintroduced" },
  { name: "DR", description: "Dose response observed" },
  {
    name: "EX",
    description: "Alternative explanations for the event available",
  },
  { name: "IN", description: "Event occurred after product introduced" },
  {
    name: "LI",
    description: "Literature reports association of product with event",
  },
  {
    name: "OE",
    description: "Occurrence of event was confirmed by objective evidence",
  },
  { name: "OT", description: "Other" },
  { name: "PL", description: "Effect observed when patient receives placebo" },
  { name: "SE", description: "Similar events in past for this patient" },
  {
    name: "TC",
    description: "Toxic levels of product documented in blood or body fluids",
  },
] as const;
