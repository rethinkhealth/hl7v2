// Generated table profile for 0907 (v2.7)

export const id = "0907";
export const description = "Confidentiality";
export const type = "user";
export const codes = [
  {
    description:
      "Business - Since the service class can represent knowledge structures that may be considered a trade or business secret, there is sometimes (though rarely) the need to flag those items as of business level confidentiality.  However, no patient related inf",
    name: "B",
  },
  {
    description:
      "Celebrity - Celebrities are people of public interest (VIP) including employees, whose information require special protection.",
    name: "C",
  },
  {
    description:
      "Clinician - Only clinicians may see this item, billing and administration persons can not access this item without special permission.",
    name: "D",
  },
  {
    description: "Substance abuse related - Alcohol/drug-abuse related item",
    name: "ETH",
  },
  { description: "HIV Related - HIV and AIDS related item", name: "HIV" },
  {
    description:
      "Individual - Access only to individual persons who are mentioned explicitly as actors of this service and whose actor type warrants that access (cf. to actor typed code).",
    name: "I",
  },
  {
    description:
      "Low - No patient record item can be of low confidentiality.  However, some service objects are not patient related and therefore may have low confidentiality.",
    name: "L",
  },
  {
    description:
      "Normal - Normal confidentiality rules (according to good health care practice) apply, that is, only authorized individuals with a legitimate medical or business need may access this item.",
    name: "N",
  },
  { description: "Psychiatry related - Psychiatry related item", name: "PSY" },
  {
    description:
      "Restricted - Restricted access, e.g. only to providers having a current care relationship to the patient.",
    name: "R",
  },
  {
    description:
      "Sensitive - Information for which the patient seeks heightened confidentiality.  Sensitive information is not to be shared with family members.  Information reported by the patient about family members is sensitive by default.  Flag can be set or cleared",
    name: "S",
  },
  {
    description:
      "Sexual and domestic violence related - Sexual assault / domestic violence related item",
    name: "SDV",
  },
  {
    description:
      "Taboo - Information not to be disclosed or discussed with patient except through physician assigned to patient in this case.  This is usually a temporary constraint only; example use is a new fatal diagnosis or finding, such as malignancy or HIV.",
    name: "T",
  },
  {
    description:
      "Very restricted - Very restricted access as declared by the Privacy Officer of the record holder.",
    name: "V",
  },
] as const;
