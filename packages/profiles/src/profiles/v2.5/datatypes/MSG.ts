// Generated datatype profile for MSG (v2.5)

export const id = "MSG";
export const version = "2.5";
export const kind = "composite";
export const title = "Message Type";
export const components = [
  { datatypeId: "ID", name: "Message Code", required: false, sequence: 1 },
  { datatypeId: "ID", name: "Trigger Event", required: false, sequence: 2 },
  { datatypeId: "ID", name: "Message Structure", required: false, sequence: 3 },
] as const;
