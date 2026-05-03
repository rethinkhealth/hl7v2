// Generated table profile for 0734 (v2.8.2)

export const id = "0734";
export const description = "Grouper Status";
export const type = "user";
export const codes = [
  { description: "Normal grouping", name: "0" },
  { description: "Invalid or missing primary diagnosis", name: "1" },
  { description: "Diagnosis is not allowed to be primary", name: "2" },
  { description: "Data does not fulfill DRG criteria", name: "3" },
  {
    description: "Invalid age, admission date, date of birth or discharge date",
    name: "4",
  },
  { description: "Invalid gender", name: "5" },
  { description: "Invalid discharge status", name: "6" },
  { description: "Invalid weight ad admission", name: "7" },
  { description: "Invalid length of stay", name: "8" },
  { description: 'Invalid field "same day"""', name: "9" },
] as const;
