// Generated table profile for 0200 (v2.6)

export const id = "0200";
export const description = "Name type";
export const type = "hl7";
export const codes = [
  { description: "Alias Name", name: "A" },
  { description: "Name at Birth", name: "B" },
  { description: "Adopted Name", name: "C" },
  { description: "Display Name", name: "D" },
  { description: "Licensing Name", name: "I" },
  { description: "Artist Name", name: "K" },
  { description: "Legal Name", name: "L" },
  { description: "Maiden Name", name: "M" },
  { description: 'Nickname /"Call me"" Name/Street Name"', name: "N" },
  {
    description:
      "Name of Partner/Spouse (retained for backward compatibility only)",
    name: "P",
  },
  { description: "Registered Name (animals only)", name: "R" },
  { description: "Coded Pseudo-Name to ensure anonymity", name: "S" },
  { description: "Indigenous/Tribal/Community Name", name: "T" },
  { description: "Unspecified", name: "U" },
] as const;
