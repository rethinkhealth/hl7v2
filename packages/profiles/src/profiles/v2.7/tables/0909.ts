// Generated table profile for 0909 (v2.7)

export const id = "0909";
export const description = "Patient Results Release Categorization Scheme";
export const type = "hl7";
export const codes = [
  {
    description:
      "Share In1 Day -<p>Share result regardless of reference/therapeutic range after 1 or more business day as agreed to by the systems in play.",
    name: "SID",
  },
  {
    description:
      "Share in 1 Day Conditionally -<p>Share result in reference ranges/therapeutic with patient after 1 or more business day as agreed to by the systems in play.<p>Withhold result out of reference/therapeutic range until physician release",
    name: "SIDC",
  },
  {
    description: "Share Immediately -<p>Share result with patient immediately",
    name: "SIMM",
  },
  {
    description: "Share To Be Determined -<p>Category to be determined",
    name: "STBD",
  },
  {
    description:
      "Share Within Normal Limits -<p>Share result in reference/therapeutic range with patient immediately<p>Share result out of reference/therapeutic ranges with patient after 1 or more business day as agreed to by the systems in play.",
    name: "SWNL",
  },
  {
    description:
      "Share Withhold -<p>Withhold result regardless of reference/therapeutic ranges",
    name: "SWTH",
  },
] as const;
