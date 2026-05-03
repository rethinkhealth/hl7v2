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
  "10:OBR": {
    groupsClosed: ["ORI_O24/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORI_O24/RESPONSE/ORDER/TIMING"],
  },
  "11:OBR": {
    groupsClosed: ["ORI_O24/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORI_O24/RESPONSE/ORDER/TIMING"],
  },
  "12:ORC": {
    groupsClosed: ["ORI_O24/RESPONSE/PATIENT"],
    groupsOpened: ["ORI_O24/RESPONSE/ORDER"],
  },
  "13:ORC": {
    groupsClosed: ["ORI_O24/RESPONSE/PATIENT"],
    groupsOpened: ["ORI_O24/RESPONSE/ORDER"],
  },
  "14:ORC": {
    groupsClosed: ["ORI_O24/RESPONSE/PATIENT"],
    groupsOpened: ["ORI_O24/RESPONSE/ORDER"],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORI_O24/RESPONSE/ORDER"],
  },
  "18:OBR": {
    groupsClosed: ["ORI_O24/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "18:TQ1": {
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
