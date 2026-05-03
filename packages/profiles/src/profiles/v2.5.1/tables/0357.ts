// Generated table profile for 0357 (v2.5.1)

export const id = "0357";
export const description = "Message error condition codes";
export const type = "hl7";
export const codes = [
  { description: "Message accepted", name: "0" },
  { description: "Segment sequence error", name: "100" },
  { description: "Required field missing", name: "101" },
  { description: "Data type error", name: "102" },
  { description: "Table value not found", name: "103" },
  { description: "Unsupported message type", name: "200" },
  { description: "Unsupported event code", name: "201" },
  { description: "Unsupported processing id", name: "202" },
  { description: "Unsupported version id", name: "203" },
  { description: "Unknown key identifier", name: "204" },
  { description: "Duplicate key identifier", name: "205" },
  { description: "Application record locked", name: "206" },
  { description: "Application internal error", name: "207" },
] as const;
