// Generated profile automaton for ORN_O08 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 7, 8, 11, 12]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
  "RQ1",
  "RQD",
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
      ["RQD", 8],
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
      ["NTE", 11],
      ["ORC", 3],
      ["RQ1", 12],
    ]),
  ],
  [
    9,
    new Map([
      ["RQD", 8],
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
      ["NTE", 11],
      ["ORC", 3],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 11],
      ["ORC", 3],
    ]),
  ],
  [
    13,
    new Map([
      ["RQD", 8],
      ["TQ1", 9],
      ["TQ2", 13],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: ["ORN_O08/RESPONSE/PATIENT"],
    groupsOpened: ["ORN_O08/RESPONSE/ORDER"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORN_O08/RESPONSE/ORDER"],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORN_O08/RESPONSE/ORDER"],
  },
  "13:RQD": {
    groupsClosed: ["ORN_O08/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "13:TQ1": {
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
    groupsClosed: [],
    groupsOpened: ["ORN_O08/RESPONSE/ORDER"],
  },
  "9:RQD": {
    groupsClosed: ["ORN_O08/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORN_O08/RESPONSE/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
