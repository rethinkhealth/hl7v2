// Generated table profile for 0384 (v2.4)

export const id = "0384";
export const description = "Substance type";
export const type = "hl7";
export const codes = [
  { description: "Control", name: "CO" },
  { description: "Diluent", name: "DI" },
  { description: "Measurable Liquid Item", name: "LI" },
  { description: "Liquid Waste", name: "LW" },
  {
    description:
      "Multiple Test Reagent (consumption cannot be tied to orders for single test)",
    name: "MR",
  },
  { description: "Other", name: "OT" },
  { description: "Pretreatment", name: "PT" },
  { description: "Purified Water", name: "PW" },
  { description: "Reagent Calibrator", name: "RC" },
  { description: "Countable Solid Item (e.g., Tip, etc.)", name: "SC" },
  { description: "Single Test Reagent", name: "SR" },
  { description: "Solid Waste", name: "SW" },
] as const;
