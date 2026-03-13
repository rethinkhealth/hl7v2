// Generated table profile for 0717 (v2.7)

export const id = "0717";
export const description = "Access Restriction Value";
export const type = "user";
export const codes = [
  { name: "ALL", description: "All" },
  { name: "DEM", description: "All demographic data" },
  { name: "DRG", description: "Drug" },
  { name: "HIV", description: "HIV status and results" },
  { name: "LOC", description: "Patient Location" },
  { name: "NO", description: "None" },
  { name: "OI", description: "Opt in all registries (HIPAA)" },
  { name: "OO", description: "Opt out all registries (HIPAA)" },
  { name: "PID-17", description: "Religion" },
  { name: "PID-7", description: "Date of Birth" },
  { name: "PSY", description: "Psychiatric Mental health" },
  { name: "SMD", description: "Sensitive medical data" },
  { name: "STD", description: "Sexually transmitted diseases" },
] as const;
