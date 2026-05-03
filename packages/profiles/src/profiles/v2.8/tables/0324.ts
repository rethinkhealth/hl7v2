// Generated table profile for 0324 (v2.8)

export const id = "0324";
export const description = "Location Characteristic ID";
export const type = "user";
export const codes = [
  { description: "Gender of patient(s)", name: "GEN" },
  {
    description: "Implant: can be used for radiation implant patients",
    name: "IMP",
  },
  {
    description: "Infectious disease: this location can be used for isolation",
    name: "INF",
  },
  { description: "Level of care", name: "LCR" },
  { description: "Licensed", name: "LIC" },
  { description: "Overflow", name: "OVR" },
  {
    description:
      "Privacy level: indicating the level of private versus non-private room",
    name: "PRL",
  },
  { description: "Bed is set up", name: "SET" },
  {
    description:
      "Shadow: a temporary holding location that does not physically exist",
    name: "SHA",
  },
  { description: "Smoking", name: "SMK" },
  { description: "Bed is staffed", name: "STF" },
  { description: "Teaching location", name: "TEA" },
] as const;
