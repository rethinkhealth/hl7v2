// Generated datatype profile for MSG (v2.5.1)

export const id = "MSG";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Message Type";
export const components = [
  { sequence: 1, name: "Message Code", datatypeId: "ID", required: false },
  { sequence: 2, name: "Trigger Event", datatypeId: "ID", required: false },
  { sequence: 3, name: "Message Structure", datatypeId: "ID", required: false },
] as const;
