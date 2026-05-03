// Generated datatype profile for WVI (v2.8.2)

export const id = "WVI";
export const version = "2.8.2";
export const kind = "composite";
export const title = "Channel Identifier";
export const components = [
  { datatypeId: "NM", name: "Channel Number", required: true, sequence: 1 },
  { datatypeId: "ST", name: "Channel Name", required: false, sequence: 2 },
] as const;
