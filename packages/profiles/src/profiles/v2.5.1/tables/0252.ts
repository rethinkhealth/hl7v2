// Generated table profile for 0252 (v2.5.1)

export const id = "0252";
export const description = "Causality Observations";
export const type = "hl7";
export const codes = [
  { description: "Abatement of event after product withdrawn", name: "AW" },
  { description: "Event recurred after product reintroduced", name: "BE" },
  { description: "Dose response observed", name: "DR" },
  {
    description: "Alternative explanations for the event available",
    name: "EX",
  },
  { description: "Event occurred after product introduced", name: "IN" },
  {
    description: "Literature reports association of product with event",
    name: "LI",
  },
  {
    description: "Occurrence of event was confirmed by objective evidence",
    name: "OE",
  },
  { description: "Other", name: "OT" },
  { description: "Effect observed when patient receives placebo", name: "PL" },
  { description: "Similar events in past for this patient", name: "SE" },
  {
    description: "Toxic levels of product documented in blood or body fluids",
    name: "TC",
  },
] as const;
