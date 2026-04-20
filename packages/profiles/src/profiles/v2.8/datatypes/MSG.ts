// Generated datatype profile for MSG (v2.8)

export const id = "MSG";
export const version = "2.8";
export const kind = "composite";
export const title = "Message Type";
export const components = [
  { sequence: 1, name: "Message Code", datatypeId: "ID", required: true },
  { sequence: 2, name: "Trigger Event", datatypeId: "ID", required: true },
  { sequence: 3, name: "Message Structure", datatypeId: "ID", required: true },
] as const;
