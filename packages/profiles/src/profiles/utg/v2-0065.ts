// Generated UTG code system profile for v2-0065

export const id = "v2-0065";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0065";
export const oid = "2.16.840.1.113883.18.25";
export const name = "SpecimenAction";
export const title = "specimenAction";
export const codes = [
  {
    code: "A",
    display: "Add ordered tests to the existing specimen",
    status: "active",
  },
  {
    code: "C",
    display: "Cancel order for battery or tests named",
    status: "active",
  },
  { code: "G", display: "Generated order; reflex order", status: "active" },
  {
    code: "L",
    display: "Lab to obtain specimen from patient",
    status: "active",
  },
  {
    code: "O",
    display: "Specimen obtained by service other than Lab",
    status: "active",
  },
  {
    code: "P",
    display: "Pending specimen; Order sent prior to delivery",
    status: "active",
  },
  { code: "R", display: "Revised order", status: "active" },
  {
    code: "S",
    display: "Schedule the tests specified below",
    status: "active",
  },
] as const;
