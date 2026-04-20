// Generated table profile for 0324 (v2.3)

export const id = "0324";
export const description = "Location Characteristic ID";
export const type = "user";
export const codes = [
  { name: "GEN", description: "Gender of patient(s)" },
  {
    name: "IMP",
    description: "Implant: can be used for radiation implant patients",
  },
  {
    name: "INF",
    description: "Infectious disease: this location can be used for isolation",
  },
  { name: "LCR", description: "Level of care" },
  { name: "LIC", description: "Licensed" },
  { name: "OVR", description: "Overflow" },
  {
    name: "PRL",
    description:
      "Private Level: indicating a level of private versus non-private room",
  },
  { name: "SET", description: "Bed is set up" },
  {
    name: "SHA",
    description:
      "Shadow: a temporary holding location that does not physically exist",
  },
  { name: "SMK", description: "Smoking" },
  { name: "STF", description: "Bed is staffed" },
  { name: "TEA", description: "Teaching location" },
] as const;
