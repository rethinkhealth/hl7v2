// Generated datatype profile for CNN (v2.4)

export const id = "CNN";
export const version = "2.4";
export const kind = "composite";
export const title = "composite ID number and name (special DT for NDL)";
export const components = [
  { datatypeId: "ST", name: "ID number (ST)", required: false, sequence: 1 },
  { datatypeId: "ST", name: "family name", required: false, sequence: 2 },
  { datatypeId: "ST", name: "given name", required: false, sequence: 3 },
  {
    datatypeId: "ST",
    name: "second and further given names or initials thereof",
    required: false,
    sequence: 4,
  },
  {
    datatypeId: "ST",
    name: "suffix (e.g., JR or III)",
    required: false,
    sequence: 5,
  },
  { datatypeId: "ST", name: "prefix (e.g., DR)", required: false, sequence: 6 },
  { datatypeId: "IS", name: "degree (e.g., MD)", required: false, sequence: 7 },
  { datatypeId: "IS", name: "source table", required: false, sequence: 8 },
  {
    datatypeId: "IS",
    name: "assigning authority namespace ID",
    required: false,
    sequence: 9,
  },
  {
    datatypeId: "ST",
    name: "assigning authority universal ID",
    required: false,
    sequence: 10,
  },
  {
    datatypeId: "ID",
    name: "assigning authority universal ID type",
    required: false,
    sequence: 11,
  },
] as const;
