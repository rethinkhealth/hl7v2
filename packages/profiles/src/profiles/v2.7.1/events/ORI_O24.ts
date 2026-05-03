// Generated profile automaton for ORI_O24 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 7, 8, 13]);
export const alphabet = new Set<string>([
  "ERR",
  "IPC",
  "MSA",
  "MSH",
  "NTE",
  "OBR",
  "ORC",
  "PID",
  "PRT",
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
      ["NTE", 12],
      ["ORC", 3],
      ["PRT", 11],
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
      ["IPC", 13],
      ["NTE", 15],
      ["PRT", 14],
    ]),
  ],
  [
    10,
    new Map([
      ["OBR", 9],
      ["TQ1", 10],
      ["TQ2", 16],
    ]),
  ],
  [
    11,
    new Map([
      ["ORC", 3],
      ["PRT", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 12],
      ["ORC", 3],
      ["PRT", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["IPC", 13],
      ["ORC", 3],
    ]),
  ],
  [
    14,
    new Map([
      ["IPC", 13],
      ["PRT", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["IPC", 13],
      ["NTE", 15],
      ["PRT", 14],
    ]),
  ],
  [
    16,
    new Map([
      ["OBR", 9],
      ["TQ1", 10],
      ["TQ2", 16],
    ]),
  ],
]);
export const effects = {
  "10:OBR": {
    groupsClosed: ["ORI_O24/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORI_O24/RESPONSE/ORDER/TIMING"],
  },
  "11:ORC": {
    groupsClosed: ["ORI_O24/RESPONSE/PATIENT"],
    groupsOpened: ["ORI_O24/RESPONSE/ORDER"],
  },
  "12:ORC": {
    groupsClosed: ["ORI_O24/RESPONSE/PATIENT"],
    groupsOpened: ["ORI_O24/RESPONSE/ORDER"],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORI_O24/RESPONSE/ORDER"],
  },
  "16:OBR": {
    groupsClosed: ["ORI_O24/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORI_O24/RESPONSE/ORDER/TIMING"],
  },
  "2:ORC": {
    groupsClosed: ["ORI_O24/RESPONSE/PATIENT"],
    groupsOpened: ["ORI_O24/RESPONSE", "ORI_O24/RESPONSE/ORDER"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORI_O24/RESPONSE", "ORI_O24/RESPONSE/PATIENT"],
  },
  "3:OBR": {
    groupsClosed: ["ORI_O24/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "3:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORI_O24/RESPONSE/ORDER/TIMING"],
  },
  "4:ORC": {
    groupsClosed: ["ORI_O24/RESPONSE/PATIENT"],
    groupsOpened: ["ORI_O24/RESPONSE/ORDER"],
  },
  "5:ORC": {
    groupsClosed: ["ORI_O24/RESPONSE/PATIENT"],
    groupsOpened: ["ORI_O24/RESPONSE", "ORI_O24/RESPONSE/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORI_O24/RESPONSE", "ORI_O24/RESPONSE/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["ORI_O24/RESPONSE/PATIENT"],
    groupsOpened: ["ORI_O24/RESPONSE", "ORI_O24/RESPONSE/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORI_O24/RESPONSE", "ORI_O24/RESPONSE/PATIENT"],
  },
  "7:ORC": {
    groupsClosed: ["ORI_O24/RESPONSE/PATIENT"],
    groupsOpened: ["ORI_O24/RESPONSE", "ORI_O24/RESPONSE/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["ORI_O24/RESPONSE", "ORI_O24/RESPONSE/PATIENT"],
  },
  "8:ORC": {
    groupsClosed: ["ORI_O24/RESPONSE/PATIENT"],
    groupsOpened: ["ORI_O24/RESPONSE", "ORI_O24/RESPONSE/ORDER"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["ORI_O24/RESPONSE", "ORI_O24/RESPONSE/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
