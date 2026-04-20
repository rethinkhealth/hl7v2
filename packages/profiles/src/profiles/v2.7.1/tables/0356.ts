// Generated table profile for 0356 (v2.7.1)

export const id = "0356";
export const description = "Alternate Character Set Handling Scheme";
export const type = "hl7";
export const codes = [
  {
    name: "<null>",
    description:
      "This is the default, indicating that there is no character set switching occurring in this message.",
  },
  {
    name: "2.3",
    description:
      'The character set switching mode specified in HL7 2.5, section 2.7.2 and section 2.A.46, "XPN - extended person name""."',
  },
  {
    name: "ISO 2022-1994",
    description:
      'This standard is titled "Information Technology - Character Code Structure and Extension Technique"". ."',
  },
] as const;
