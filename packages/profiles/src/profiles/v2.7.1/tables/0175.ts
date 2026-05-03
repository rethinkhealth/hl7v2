// Generated table profile for 0175 (v2.7.1)

export const id = "0175";
export const description = "Master File Identifier Code";
export const type = "hl7";
export const codes = [
  { description: "Charge description master file", name: "CDM" },
  { description: "Clinic master file", name: "CLN" },
  {
    description: "Clinical study with phases and scheduled master file",
    name: "CMA",
  },
  {
    description: "Clinical study without phases but with scheduled master file",
    name: "CMB",
  },
  { description: "Inventory master file", name: "INV" },
  { description: "Location master file", name: "LOC" },
  { description: "Numerical observation master file", name: "OMA" },
  { description: "Categorical observation master file", name: "OMB" },
  { description: "Observation batteries master file", name: "OMC" },
  { description: "Calculated observations master file", name: "OMD" },
  { description: "Other Observation/Service Item master file", name: "OME" },
  { description: "Practitioner master file", name: "PRA" },
  { description: "Staff master file", name: "STF" },
] as const;
