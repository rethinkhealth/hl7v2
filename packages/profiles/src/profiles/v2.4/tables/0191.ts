// Generated table profile for 0191 (v2.4)

export const id = "0191";
export const description = "Type of referenced data";
export const type = "hl7";
export const codes = [
  {
    description:
      "Other application data, typically uninterpreted binary data  (HL7 V2.3 and later)",
    name: "AP",
  },
  { description: "Audio data  (HL7 V2.3 and later)", name: "AU" },
  { description: "Formatted text (HL7 V2.2 only)", name: "FT" },
  { description: "Image data  (HL7 V2.3 and later)", name: "IM" },
  { description: "MIME multipart package", name: "multipart" },
  { description: "Non-scanned image (HL7 V2.2 only)", name: "NS" },
  { description: "Scanned document (HL7 V2.2 only)", name: "SD" },
  { description: "Scanned image (HL7 V2.2 only)", name: "SI" },
  {
    description: "Machine readable text document (HL7 V2.3.1 and later)",
    name: "TEXT",
  },
  { description: "Machine readable text document (HL7 V2.2 only)", name: "TX" },
] as const;
