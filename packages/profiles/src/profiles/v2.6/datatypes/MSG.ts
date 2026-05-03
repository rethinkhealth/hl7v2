// Generated datatype profile for MSG (v2.6)

export const id = "MSG";
export const version = "2.6";
export const kind = "composite";
export const title = "Message Type";
export const components = [
  { datatypeId: "ID", name: "Message Code", required: true, sequence: 1 },
  { datatypeId: "ID", name: "Trigger Event", required: true, sequence: 2 },
  { datatypeId: "ID", name: "Message Structure", required: true, sequence: 3 },
] as const;
