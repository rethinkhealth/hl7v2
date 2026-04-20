// Generated profile automaton for ORS_O06 (v2.5.1)

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
  "2:ORC": {
    groupsOpened: ["ORS_O06/RESPONSE", "ORS_O06/RESPONSE/ORDER"],
    groupsClosed: ["ORS_O06/RESPONSE/PATIENT"],
  },
  "2:PID": {
    groupsOpened: ["ORS_O06/RESPONSE", "ORS_O06/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:RQD": {
    groupsOpened: [],
    groupsClosed: ["ORS_O06/RESPONSE/ORDER/TIMING"],
  },
  "3:TQ1": {
    groupsOpened: ["ORS_O06/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["ORS_O06/RESPONSE/ORDER"],
    groupsClosed: ["ORS_O06/RESPONSE/PATIENT"],
  },
  "5:ORC": {
    groupsOpened: ["ORS_O06/RESPONSE", "ORS_O06/RESPONSE/ORDER"],
    groupsClosed: ["ORS_O06/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["ORS_O06/RESPONSE", "ORS_O06/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["ORS_O06/RESPONSE", "ORS_O06/RESPONSE/ORDER"],
    groupsClosed: ["ORS_O06/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["ORS_O06/RESPONSE", "ORS_O06/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORS_O06/RESPONSE", "ORS_O06/RESPONSE/ORDER"],
    groupsClosed: ["ORS_O06/RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["ORS_O06/RESPONSE", "ORS_O06/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORS_O06/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "9:TQ1": {
    groupsOpened: ["ORS_O06/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:RQD": {
    groupsOpened: [],
    groupsClosed: ["ORS_O06/RESPONSE/ORDER/TIMING"],
  },
  "10:ORC": {
    groupsOpened: ["ORS_O06/RESPONSE/ORDER"],
    groupsClosed: ["ORS_O06/RESPONSE/PATIENT"],
  },
  "11:ORC": {
    groupsOpened: ["ORS_O06/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["ORS_O06/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "13:TQ1": {
    groupsOpened: ["ORS_O06/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "13:RQD": {
    groupsOpened: [],
    groupsClosed: ["ORS_O06/RESPONSE/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
