// Generated profile automaton for ORI_O24 (v2.6)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 7, 8, 12]);
export const alphabet = new Set<string>([
  "ERR",
  "IPC",
  "MSA",
  "MSH",
  "NTE",
  "OBR",
  "ORC",
  "PID",
  "ROL",
  "SFT",
  "TQ1",
  "TQ2",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 8],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [
    3,
    new Map([
      ["OBR", 9],
      ["TQ1", 10],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 11],
      ["ORC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    7,
    new Map([
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["ERR", 8],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["IPC", 12],
      ["NTE", 14],
      ["ROL", 13],
    ]),
  ],
  [
    10,
    new Map([
      ["OBR", 9],
      ["TQ1", 10],
      ["TQ2", 15],
    ]),
  ],
  [
    11,
    new Map([
      ["NTE", 11],
      ["ORC", 3],
    ]),
  ],
  [
    12,
    new Map([
      ["IPC", 12],
      ["ORC", 3],
    ]),
  ],
  [
    13,
    new Map([
      ["IPC", 12],
      ["ROL", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["IPC", 12],
      ["NTE", 14],
      ["ROL", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["OBR", 9],
      ["TQ1", 10],
      ["TQ2", 15],
    ]),
  ],
]);
export const effects = {
  "2:ORC": {
    groupsOpened: ["ORI_O24/RESPONSE", "ORI_O24/RESPONSE/ORDER"],
    groupsClosed: ["ORI_O24/RESPONSE/PATIENT"],
  },
  "2:PID": {
    groupsOpened: ["ORI_O24/RESPONSE", "ORI_O24/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:OBR": {
    groupsOpened: [],
    groupsClosed: ["ORI_O24/RESPONSE/ORDER/TIMING"],
  },
  "3:TQ1": {
    groupsOpened: ["ORI_O24/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["ORI_O24/RESPONSE/ORDER"],
    groupsClosed: ["ORI_O24/RESPONSE/PATIENT"],
  },
  "5:ORC": {
    groupsOpened: ["ORI_O24/RESPONSE", "ORI_O24/RESPONSE/ORDER"],
    groupsClosed: ["ORI_O24/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["ORI_O24/RESPONSE", "ORI_O24/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["ORI_O24/RESPONSE", "ORI_O24/RESPONSE/ORDER"],
    groupsClosed: ["ORI_O24/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["ORI_O24/RESPONSE", "ORI_O24/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORI_O24/RESPONSE", "ORI_O24/RESPONSE/ORDER"],
    groupsClosed: ["ORI_O24/RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["ORI_O24/RESPONSE", "ORI_O24/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORI_O24/RESPONSE", "ORI_O24/RESPONSE/ORDER"],
    groupsClosed: ["ORI_O24/RESPONSE/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["ORI_O24/RESPONSE", "ORI_O24/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "10:TQ1": {
    groupsOpened: ["ORI_O24/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "10:OBR": {
    groupsOpened: [],
    groupsClosed: ["ORI_O24/RESPONSE/ORDER/TIMING"],
  },
  "11:ORC": {
    groupsOpened: ["ORI_O24/RESPONSE/ORDER"],
    groupsClosed: ["ORI_O24/RESPONSE/PATIENT"],
  },
  "12:ORC": {
    groupsOpened: ["ORI_O24/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "15:TQ1": {
    groupsOpened: ["ORI_O24/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "15:OBR": {
    groupsOpened: [],
    groupsClosed: ["ORI_O24/RESPONSE/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
