// Generated datatype profile for WVI (v2.7.1)

export const id = "WVI";
export const version = "2.7.1";
export const kind = "composite";
export const title = "Channel Identifier";
export const components = [
  { sequence: 1, name: "Channel Number", datatypeId: "NM", required: true },
  { sequence: 2, name: "Channel Name", datatypeId: "ST", required: false },
] as const;
