// Generated table profile for 0175 (v2.3.1)

export const id = "0175";
export const description = "Master file identifier code";
export const type = "hl7";
export const codes = [
  { name: "CDM", description: "Charge description master file" },
  {
    name: "CMA",
    description: "Clinical study with phases and scheduled master file",
  },
  {
    name: "CMB",
    description: "Clinical study without phases but with scheduled master file",
  },
  { name: "LOC", description: "Location master file" },
  { name: "OMA", description: "Numerical observation master file" },
  { name: "OMB", description: "Categorical observation master file" },
  { name: "OMC", description: "Observation batteries master file" },
  { name: "OMD", description: "Calculated observations master file" },
  { name: "PRA", description: "Practitioner master file" },
  { name: "STF", description: "Staff master file" },
] as const;
