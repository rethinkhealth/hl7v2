// Generated table profile for 0228 (v2.5)

export const id = "0228";
export const description = "Diagnosis Classification";
export const type = "user";
export const codes = [
  { description: "Consultation", name: "C" },
  { description: "Diagnosis", name: "D" },
  {
    description:
      "Invasive procedure not classified elsewhere (I.V., catheter, etc.)",
    name: "I",
  },
  { description: "Medication (antibiotic)", name: "M" },
  { description: "Other", name: "O" },
  { description: "Radiological scheduling (not using ICDA codes)", name: "R" },
  { description: "Sign and symptom", name: "S" },
  { description: "Tissue diagnosis", name: "T" },
] as const;
