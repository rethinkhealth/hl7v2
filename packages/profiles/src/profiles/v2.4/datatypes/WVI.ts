// Generated datatype profile for WVI (v2.4)

export const id = "WVI";
export const version = "2.4";
export const kind = "composite";
export const title = "channel identifier";
export const components = [
  { datatypeId: "NM", name: "Channel Number", required: false, sequence: 1 },
  { datatypeId: "ST", name: "Channel Name", required: false, sequence: 2 },
] as const;
