// Generated profile automaton for ORI_O24 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 7, 11]);
export const alphabet = new Set<string>([
  "ERR",
  "IPC",
  "MSA",
  "MSH",
  "NTE",
  "OBR",
  "ORC",
  "PID",
  "SFT",
  "TQ1",
  "TQ2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 7],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 6],
    ]),
  ],
  [
    3,
    new Map([
      ["OBR", 8],
      ["TQ1", 9],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 10],
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
      ["SFT", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["ERR", 7],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["IPC", 11],
      ["NTE", 12],
    ]),
  ],
  [
    9,
    new Map([
      ["OBR", 8],
      ["TQ1", 9],
      ["TQ2", 13],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 10],
      ["ORC", 3],
    ]),
  ],
  [
    11,
    new Map([
      ["IPC", 11],
      ["ORC", 3],
    ]),
  ],
  [
    12,
    new Map([
      ["IPC", 11],
      ["NTE", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["OBR", 8],
      ["TQ1", 9],
      ["TQ2", 13],
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
  "9:TQ1": {
    groupsOpened: ["ORI_O24/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:OBR": {
    groupsOpened: [],
    groupsClosed: ["ORI_O24/RESPONSE/ORDER/TIMING"],
  },
  "10:ORC": {
    groupsOpened: ["ORI_O24/RESPONSE/ORDER"],
    groupsClosed: ["ORI_O24/RESPONSE/PATIENT"],
  },
  "11:ORC": {
    groupsOpened: ["ORI_O24/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "13:TQ1": {
    groupsOpened: ["ORI_O24/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "13:OBR": {
    groupsOpened: [],
    groupsClosed: ["ORI_O24/RESPONSE/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
