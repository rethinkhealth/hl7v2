// Generated table profile for 0228 (v2.8.1)

export const id = "0228";
export const description = "Diagnosis Classification";
export const type = "user";
export const codes = [
  { name: "C", description: "Consultation" },
  { name: "D", description: "Diagnosis" },
  {
    name: "I",
    description:
      "Invasive procedure not classified elsewhere (I.V., catheter, etc.)",
  },
  { name: "M", description: "Medication (antibiotic)" },
  { name: "O", description: "Other" },
  { name: "R", description: "Radiological scheduling (not using ICDA codes)" },
  { name: "S", description: "Sign and symptom" },
  { name: "T", description: "Tissue diagnosis" },
] as const;
