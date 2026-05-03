// Generated table profile for 0175 (v2.3.1)

export const id = "0175";
export const description = "Master file identifier code";
export const type = "hl7";
export const codes = [
  { description: "Charge description master file", name: "CDM" },
  {
    description: "Clinical study with phases and scheduled master file",
    name: "CMA",
  },
  {
    description: "Clinical study without phases but with scheduled master file",
    name: "CMB",
  },
  { description: "Location master file", name: "LOC" },
  { description: "Numerical observation master file", name: "OMA" },
  { description: "Categorical observation master file", name: "OMB" },
  { description: "Observation batteries master file", name: "OMC" },
  { description: "Calculated observations master file", name: "OMD" },
  { description: "Practitioner master file", name: "PRA" },
  { description: "Staff master file", name: "STF" },
] as const;
