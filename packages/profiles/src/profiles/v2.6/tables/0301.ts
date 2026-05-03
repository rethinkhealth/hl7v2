// Generated table profile for 0301 (v2.6)

export const id = "0301";
export const description = "Universal ID type";
export const type = "hl7";
export const codes = [
  {
    description: "An Internet dotted name. Either in ASCII or as integers",
    name: "DNS",
  },
  { description: "Same as UUID.", name: "GUID" },
  {
    description:
      "The CEN Healthcare Coding Scheme Designator. (Identifiers used in DICOM follow this assignment scheme.)",
    name: "HCD",
  },
  { description: "Reserved for future HL7 registration schemes", name: "HL7" },
  {
    description: "An International Standards Organization Object Identifier",
    name: "ISO",
  },
  { description: "", name: "L" },
  {
    description: "These are reserved for locally defined coding schemes.",
    name: "L,M,N",
  },
  { description: "", name: "M" },
  { description: "", name: "N" },
  {
    description:
      " from a combination of random bits and system names. Obviously",
    name: "Random",
  },
  { description: "Uniform Resource Identifier", name: "URI" },
  { description: "The DCE Universal Unique Identifier", name: "UUID" },
  { description: "An X.400 MHS format identifier", name: "x400" },
  { description: "An X.500 directory name", name: "x500" },
] as const;
