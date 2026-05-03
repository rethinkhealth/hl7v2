// Generated datatype profile for CNN (v2.8)

export const id = "CNN";
export const version = "2.8";
export const kind = "composite";
export const title = "Composite ID Number and Name Simplified";
export const components = [
  { datatypeId: "ST", name: "ID Number", required: false, sequence: 1 },
  { datatypeId: "ST", name: "Family Name", required: false, sequence: 2 },
  { datatypeId: "ST", name: "Given Name", required: false, sequence: 3 },
  {
    datatypeId: "ST",
    name: "Second and Further Given Names or Initials Thereof",
    required: false,
    sequence: 4,
  },
  {
    datatypeId: "ST",
    name: "Suffix (e.g., JR or III)",
    required: false,
    sequence: 5,
  },
  { datatypeId: "ST", name: "Prefix (e.g., DR)", required: false, sequence: 6 },
  { datatypeId: "IS", name: "Degree (e.g., MD)", required: false, sequence: 7 },
  { datatypeId: "IS", name: "Source Table", required: false, sequence: 8 },
  {
    datatypeId: "IS",
    name: "Assigning Authority   - Namespace ID",
    required: false,
    sequence: 9,
  },
  {
    datatypeId: "ST",
    name: "Assigning Authority  - Universal ID",
    required: false,
    sequence: 10,
  },
  {
    datatypeId: "ID",
    name: "Assigning Authority  - Universal ID Type",
    required: false,
    sequence: 11,
  },
] as const;
