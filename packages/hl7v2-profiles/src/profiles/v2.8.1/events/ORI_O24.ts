// Generated profile automaton for ORI_O24 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 7, 8, 15]);
export const alphabet = new Set<string>([
  "ARV",
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
      ["PRT", 11],
      ["TQ1", 10],
    ]),
  ],
  [
    4,
    new Map([
      ["ARV", 14],
      ["NTE", 13],
      ["ORC", 3],
      ["PRT", 12],
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
      ["IPC", 15],
      ["NTE", 17],
      ["PRT", 16],
    ]),
  ],
  [
    10,
    new Map([
      ["OBR", 9],
      ["TQ1", 10],
      ["TQ2", 18],
    ]),
  ],
  [
    11,
    new Map([
      ["OBR", 9],
      ["PRT", 11],
      ["TQ1", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["ORC", 3],
      ["PRT", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 13],
      ["ORC", 3],
      ["PRT", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["ARV", 14],
      ["NTE", 13],
      ["ORC", 3],
      ["PRT", 12],
    ]),
  ],
  [
    15,
    new Map([
      ["IPC", 15],
      ["ORC", 3],
    ]),
  ],
  [
    16,
    new Map([
      ["IPC", 15],
      ["PRT", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["IPC", 15],
      ["NTE", 17],
      ["PRT", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["OBR", 9],
      ["TQ1", 10],
      ["TQ2", 18],
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
  "11:OBR": {
    groupsOpened: [],
    groupsClosed: ["ORI_O24/RESPONSE/ORDER/TIMING"],
  },
  "11:TQ1": {
    groupsOpened: ["ORI_O24/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["ORI_O24/RESPONSE/ORDER"],
    groupsClosed: ["ORI_O24/RESPONSE/PATIENT"],
  },
  "13:ORC": {
    groupsOpened: ["ORI_O24/RESPONSE/ORDER"],
    groupsClosed: ["ORI_O24/RESPONSE/PATIENT"],
  },
  "14:ORC": {
    groupsOpened: ["ORI_O24/RESPONSE/ORDER"],
    groupsClosed: ["ORI_O24/RESPONSE/PATIENT"],
  },
  "15:ORC": {
    groupsOpened: ["ORI_O24/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "18:TQ1": {
    groupsOpened: ["ORI_O24/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "18:OBR": {
    groupsOpened: [],
    groupsClosed: ["ORI_O24/RESPONSE/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
