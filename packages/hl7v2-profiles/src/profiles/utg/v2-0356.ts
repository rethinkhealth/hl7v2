// Generated UTG code system profile for v2-0356

export const id = "v2-0356";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0356";
export const oid = "2.16.840.1.113883.18.216";
export const name = "AlternateCharacterSetHandlingScheme";
export const title = "alternateCharacterSetHandlingScheme";
export const codes = [
  {
    code: "&lt;null&gt;",
    display:
      "This is the default, indicating that there is no character set switching occurring in this message.",
    status: "deprecated",
  },
  {
    code: "2.3",
    display:
      "The character set switching mode specified in HL7 2.5, section 2.7.2 and section 2.A.46, &quot;XPN - extended person name&quot;.",
    status: "active",
  },
  {
    code: "ISO 2022-1994",
    display:
      "This standard is titled &quot;Information Technology - Character Code Structure and Extension Technique&quot;. .",
    status: "active",
  },
] as const;
