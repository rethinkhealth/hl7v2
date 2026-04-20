// Generated table profile for 0175 (v2.8)

export const id = "0175";
export const description = "Master File Identifier Code";
export const type = "hl7";
export const codes = [
  { name: "CDM", description: "Charge description master file" },
  { name: "CLN", description: "Clinic master file" },
  {
    name: "CMA",
    description: "Clinical study with phases and scheduled master file",
  },
  {
    name: "CMB",
    description: "Clinical study without phases but with scheduled master file",
  },
  { name: "INV", description: "Inventory master file" },
  { name: "LOC", description: "Location master file" },
  { name: "OMA", description: "Numerical observation master file" },
  { name: "OMB", description: "Categorical observation master file" },
  { name: "OMC", description: "Observation batteries master file" },
  { name: "OMD", description: "Calculated observations master file" },
  { name: "OME", description: "Other Observation/Service Item master file" },
  { name: "PRA", description: "Practitioner master file" },
  { name: "STF", description: "Staff master file" },
] as const;
