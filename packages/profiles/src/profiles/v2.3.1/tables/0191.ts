// Generated table profile for 0191 (v2.3.1)

export const id = "0191";
export const description = "Type of referenced data";
export const type = "hl7";
export const codes = [
  {
    description:
      "Other application data, typically uninterpreted binary data  (new with HL7 v 2.3)",
    name: "AP",
  },
  {
    description:
      "Other application data, typically uninterpreted binary data  (HL7 V2.3 and later)",
    name: "Application",
  },
  { description: "Audio data  (new with HL7 v 2.3)", name: "AU" },
  { description: "Audio data  (HL7 V2.3 and later)", name: "Audio" },
  { description: "Formatted text (HL7 V2.2 only)", name: "FT" },
  { description: "Image data  (new  with HL7 v 2.3)", name: "IM" },
  { description: "Image data  (HL7 V2.3 and later)", name: "Image" },
  { description: "Non-scanned image (HL7 V2.2 only)", name: "NS" },
  { description: "Scanned document (HL7 V2.2 only)", name: "SD" },
  { description: "Scanned image (HL7 V2.2 only)", name: "SI" },
  {
    description: "Machine readable text document (HL7 V2.3.1 and later)",
    name: "TEXT",
  },
  { description: "Machine readable text document (HL7 V2.2 only)", name: "TX" },
] as const;
