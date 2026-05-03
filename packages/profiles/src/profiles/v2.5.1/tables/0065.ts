// Generated table profile for 0065 (v2.5.1)

export const id = "0065";
export const description = "Specimen Action Code";
export const type = "hl7";
export const codes = [
  { description: "Add ordered tests to the existing specimen", name: "A" },
  { description: "Generated order; reflex order", name: "G" },
  { description: "Lab to obtain specimen from patient", name: "L" },
  { description: "Specimen obtained by service other than Lab", name: "O" },
  { description: "Pending specimen; Order sent prior to delivery", name: "P" },
  { description: "Revised order", name: "R" },
  { description: "Schedule the tests specified below", name: "S" },
] as const;
