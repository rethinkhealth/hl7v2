// Generated table profile for 0200 (v2.5.1)

export const id = "0200";
export const description = "Name type";
export const type = "hl7";
export const codes = [
  { name: "A", description: "Alias Name" },
  { name: "B", description: "Name at Birth" },
  { name: "C", description: "Adopted Name" },
  { name: "D", description: "Display Name" },
  { name: "I", description: "Licensing Name" },
  { name: "L", description: "Legal Name" },
  { name: "M", description: "Maiden Name" },
  { name: "N", description: 'Nickname /"Call me"" Name/Street Name"' },
  {
    name: "P",
    description:
      "Name of Partner/Spouse (retained for backward compatibility only)",
  },
  { name: "R", description: "Registered Name (animals only)" },
  { name: "S", description: "Coded Pseudo-Name to ensure anonymity" },
  { name: "T", description: "Indigenous/Tribal/Community Name" },
  { name: "U", description: "Unspecified" },
] as const;
