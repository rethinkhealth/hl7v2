// Generated table profile for 0190 (v2.4)

export const id = "0190";
export const description = "Address type";
export const type = "hl7";
export const codes = [
  { description: "Firm/Business", name: "B" },
  { description: "Bad address", name: "BA" },
  {
    description: "Birth delivery location (address where birth occurred)",
    name: "BDL",
  },
  {
    description: "Residence  at birth (home address at time of birth)",
    name: "BR",
  },
  { description: "Current Or Temporary", name: "C" },
  { description: "Country Of Origin", name: "F" },
  { description: "Home", name: "H" },
  { description: "Legal Address", name: "L" },
  { description: "Mailing", name: "M" },
  {
    description: "Birth (nee) (birth address, not otherwise specified)",
    name: "N",
  },
  { description: "Office", name: "O" },
  { description: "Permanent", name: "P" },
  {
    description:
      "Registry home.  Refers to the information system, typically managed by a public health agency, that stores patient information such as immunization histories or cancer data, regardless of where the patient obtains services.",
    name: "RH",
  },
] as const;
