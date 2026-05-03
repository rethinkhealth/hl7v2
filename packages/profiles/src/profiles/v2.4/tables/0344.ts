// Generated table profile for 0344 (v2.4)

export const id = "0344";
export const description = "Patient's relationship to insured";
export const type = "user";
export const codes = [
  { description: "Patient is insured", name: "01" },
  { description: "Spouse", name: "02" },
  { description: "Natural child/insured financial responsibility", name: "03" },
  {
    description: "Natural child/Insured does not have financial responsibility",
    name: "04",
  },
  { description: "Step child", name: "05" },
  { description: "Foster child", name: "06" },
  { description: "Ward of the court", name: "07" },
  { description: "Employee", name: "08" },
  { description: "Unknown", name: "09" },
  { description: "Handicapped dependent", name: "10" },
  { description: "Organ donor", name: "11" },
  { description: "Cadaver donor", name: "12" },
  { description: "Grandchild", name: "13" },
  { description: "Niece/nephew", name: "14" },
  { description: "Injured plaintiff", name: "15" },
  { description: "Sponsored dependent", name: "16" },
  { description: "Minor dependent of a minor dependent", name: "17" },
  { description: "Parent", name: "18" },
  { description: "Grandparent", name: "19" },
] as const;
