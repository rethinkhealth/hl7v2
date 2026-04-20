// Generated table profile for 0734 (v2.6)

export const id = "0734";
export const description = "Grouper Status";
export const type = "user";
export const codes = [
  { name: "0", description: "Normal grouping" },
  { name: "1", description: "Invalid or missing primary diagnosis" },
  { name: "2", description: "Diagnosis is not allowed to be primary" },
  { name: "3", description: "Data does not fulfill DRG criteria" },
  {
    name: "4",
    description: "Invalid age, admission date, date of birth or discharge date",
  },
  { name: "5", description: "Invalid gender" },
  { name: "6", description: "Invalid discharge status" },
  { name: "7", description: "Invalid weight ad admission" },
  { name: "8", description: "Invalid length of stay" },
  { name: "9", description: 'Invalid field "same day"""' },
] as const;
