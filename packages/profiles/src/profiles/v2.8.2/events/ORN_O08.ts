// Generated profile automaton for ORN_O08 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 7, 8, 9, 14, 15]);
export const alphabet = new Set<string>([
  "ARV",
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
  "PRT",
  "RQ1",
  "RQD",
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
      ["PRT", 11],
      ["RQD", 9],
      ["TQ1", 10],
    ]),
  ],
  [
    4,
    new Map([
      ["ARV", 13],
      ["NTE", 12],
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
      ["NTE", 14],
      ["ORC", 3],
      ["RQ1", 15],
    ]),
  ],
  [
    10,
    new Map([
      ["RQD", 9],
      ["TQ1", 10],
      ["TQ2", 16],
    ]),
  ],
  [
    11,
    new Map([
      ["PRT", 11],
      ["RQD", 9],
      ["TQ1", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 12],
      ["ORC", 3],
    ]),
  ],
  [
    13,
    new Map([
      ["ARV", 13],
      ["NTE", 12],
      ["ORC", 3],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 14],
      ["ORC", 3],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 14],
      ["ORC", 3],
    ]),
  ],
  [
    16,
    new Map([
      ["RQD", 9],
      ["TQ1", 10],
      ["TQ2", 16],
    ]),
  ],
]);
export const effects = {
  "10:RQD": {
    groupsClosed: ["ORN_O08/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORN_O08/RESPONSE/ORDER/TIMING"],
  },
  "11:RQD": {
    groupsClosed: ["ORN_O08/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORN_O08/RESPONSE/ORDER/TIMING"],
  },
  "12:ORC": {
    groupsClosed: ["ORN_O08/RESPONSE/PATIENT"],
    groupsOpened: ["ORN_O08/RESPONSE/ORDER"],
  },
  "13:ORC": {
    groupsClosed: ["ORN_O08/RESPONSE/PATIENT"],
    groupsOpened: ["ORN_O08/RESPONSE/ORDER"],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORN_O08/RESPONSE/ORDER"],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORN_O08/RESPONSE/ORDER"],
  },
  "16:RQD": {
    groupsClosed: ["ORN_O08/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "16:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORN_O08/RESPONSE/ORDER/TIMING"],
  },
  "2:ORC": {
    groupsClosed: ["ORN_O08/RESPONSE/PATIENT"],
    groupsOpened: ["ORN_O08/RESPONSE", "ORN_O08/RESPONSE/ORDER"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORN_O08/RESPONSE", "ORN_O08/RESPONSE/PATIENT"],
  },
  "3:RQD": {
    groupsClosed: ["ORN_O08/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "3:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORN_O08/RESPONSE/ORDER/TIMING"],
  },
  "4:ORC": {
    groupsClosed: ["ORN_O08/RESPONSE/PATIENT"],
    groupsOpened: ["ORN_O08/RESPONSE/ORDER"],
  },
  "5:ORC": {
    groupsClosed: ["ORN_O08/RESPONSE/PATIENT"],
    groupsOpened: ["ORN_O08/RESPONSE", "ORN_O08/RESPONSE/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORN_O08/RESPONSE", "ORN_O08/RESPONSE/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["ORN_O08/RESPONSE/PATIENT"],
    groupsOpened: ["ORN_O08/RESPONSE", "ORN_O08/RESPONSE/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORN_O08/RESPONSE", "ORN_O08/RESPONSE/PATIENT"],
  },
  "7:ORC": {
    groupsClosed: ["ORN_O08/RESPONSE/PATIENT"],
    groupsOpened: ["ORN_O08/RESPONSE", "ORN_O08/RESPONSE/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["ORN_O08/RESPONSE", "ORN_O08/RESPONSE/PATIENT"],
  },
  "8:ORC": {
    groupsClosed: ["ORN_O08/RESPONSE/PATIENT"],
    groupsOpened: ["ORN_O08/RESPONSE", "ORN_O08/RESPONSE/ORDER"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["ORN_O08/RESPONSE", "ORN_O08/RESPONSE/PATIENT"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORN_O08/RESPONSE/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
