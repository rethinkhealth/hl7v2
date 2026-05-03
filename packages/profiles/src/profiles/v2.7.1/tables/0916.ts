// Generated table profile for 0916 (v2.7.1)

export const id = "0916";
export const description = "Relevant Clincial Information";
export const type = "hl7";
export const codes = [
  { description: "Patient was fasting prior to the procedure.", name: "F" },
  {
    description: "Fasting not asked of the patient at time of procedure.",
    name: "FNA",
  },
  {
    description:
      "The patient indicated they did not fast prior to the procedure.",
    name: "NF",
  },
  {
    description:
      "Not Given - Patient was not asked at the time of the procedure.",
    name: "NG",
  },
] as const;
