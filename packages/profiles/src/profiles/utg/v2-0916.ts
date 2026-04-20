// Generated UTG code system profile for v2-0916

export const id = "v2-0916";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0916";
export const oid = "2.16.840.1.113883.18.422";
export const name = "RelevantClincialInformation";
export const title = "relevantClincialInformation";
export const codes = [
  {
    code: "F",
    display: "Patient was fasting prior to the procedure.",
    status: "active",
  },
  {
    code: "FNA",
    display: "Fasting not asked of the patient at time of procedure.",
    status: "active",
  },
  {
    code: "NF",
    display: "The patient indicated they did not fast prior to the procedure.",
    status: "active",
  },
  {
    code: "NG",
    display: "Not Given - Patient was not asked at the time of the procedure.",
    status: "active",
  },
] as const;
