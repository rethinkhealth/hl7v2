// Generated table profile for 0175 (v2.3)

export const id = "0175";
export const description = "Master File Identifier Code";
export const type = "hl7";
export const codes = [
  {
    description: "Charge description master file (see Chapter 6, Appendix)",
    name: "CDM",
  },
  { description: "Clinical study master", name: "CM0" },
  { description: "Clinical study phase master", name: "CM1" },
  { description: "Clinical study Data Schedule Master", name: "CM2" },
  {
    description: "Location master file (see Chapter 3, Appendix)",
    name: "LOC",
  },
  {
    description:
      "Observation text master file segments (e.g., Lab) (see Chapter 87, Appendix B):",
    name: "OM1",
  },
  {
    description:
      "Observation text master file segments (e.g., Lab) (see Chapter 87, Appendix B):",
    name: "OM1-OM6",
  },
  {
    description:
      "Observation text master file segments (e.g., Lab) (see Chapter 87, Appendix B):",
    name: "OM2",
  },
  {
    description:
      "Observation text master file segments (e.g., Lab) (see Chapter 87, Appendix B):",
    name: "OM3",
  },
  {
    description:
      "Observation text master file segments (e.g., Lab) (see Chapter 87, Appendix B):",
    name: "OM4",
  },
  {
    description:
      "Observation text master file segments (e.g., Lab) (see Chapter 87, Appendix B):",
    name: "OM5",
  },
  {
    description:
      "Observation text master file segments (e.g., Lab) (see Chapter 87, Appendix B):",
    name: "OM6",
  },
  {
    description: "Practitioner master file (see Chapter 8, Appendix)",
    name: "PRA",
  },
  { description: "Staff Master File (see Chapter 8, Appendix)", name: "STF" },
] as const;
