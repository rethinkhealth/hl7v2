// Generated table profile for 0301 (v2.6)

export const id = "0301";
export const description = "Universal ID type";
export const type = "hl7";
export const codes = [
  {
    name: "DNS",
    description: "An Internet dotted name. Either in ASCII or as integers",
  },
  { name: "GUID", description: "Same as UUID." },
  {
    name: "HCD",
    description:
      "The CEN Healthcare Coding Scheme Designator. (Identifiers used in DICOM follow this assignment scheme.)",
  },
  { name: "HL7", description: "Reserved for future HL7 registration schemes" },
  {
    name: "ISO",
    description: "An International Standards Organization Object Identifier",
  },
  { name: "L", description: "" },
  {
    name: "L,M,N",
    description: "These are reserved for locally defined coding schemes.",
  },
  { name: "M", description: "" },
  { name: "N", description: "" },
  {
    name: "Random",
    description:
      " from a combination of random bits and system names. Obviously",
  },
  { name: "URI", description: "Uniform Resource Identifier" },
  { name: "UUID", description: "The DCE Universal Unique Identifier" },
  { name: "x400", description: "An X.400 MHS format identifier" },
  { name: "x500", description: "An X.500 directory name" },
] as const;
