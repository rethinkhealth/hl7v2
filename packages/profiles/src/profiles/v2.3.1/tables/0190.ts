// Generated table profile for 0190 (v2.3.1)

export const id = "0190";
export const description = "Address type";
export const type = "hl7";
export const codes = [
  { name: "B", description: "Firm/Business" },
  { name: "BA", description: "Bad address" },
  {
    name: "BDL",
    description: "Birth delivery location (address where birth occurred)",
  },
  {
    name: "BR",
    description: "Residence  at birth (home address at time of birth)",
  },
  { name: "C", description: "Current Or Temporary" },
  { name: "F", description: "Country Of Origin" },
  { name: "H", description: "Home" },
  { name: "L", description: "Legal Address" },
  { name: "M", description: "Mailing" },
  {
    name: "N",
    description: "Birth (nee) (birth address, not otherwise specified)",
  },
  { name: "O", description: "Office" },
  { name: "P", description: "Permanent" },
  {
    name: "RH",
    description:
      "Registry home.  Refers to the information system, typically managed by a public health agency, that  stores patient information such as immunization histories or cancer data, regardless of where the patient obtains services.",
  },
] as const;
