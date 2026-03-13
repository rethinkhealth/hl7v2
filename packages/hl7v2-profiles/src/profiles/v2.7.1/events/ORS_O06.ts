// Generated profile automaton for ORS_O06 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 7, 8, 9, 12, 13]);
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
      ["RQD", 9],
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
      ["NTE", 12],
      ["ORC", 3],
      ["RQ1", 13],
    ]),
  ],
  [
    10,
    new Map([
      ["RQD", 9],
      ["TQ1", 10],
      ["TQ2", 14],
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
      ["NTE", 12],
      ["ORC", 3],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 12],
      ["ORC", 3],
    ]),
  ],
  [
    14,
    new Map([
      ["RQD", 9],
      ["TQ1", 10],
      ["TQ2", 14],
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
    groupsOpened: ["ORS_O06/RESPONSE", "ORS_O06/RESPONSE/ORDER"],
    groupsClosed: ["ORS_O06/RESPONSE/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["ORS_O06/RESPONSE", "ORS_O06/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["ORS_O06/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "10:TQ1": {
    groupsOpened: ["ORS_O06/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "10:RQD": {
    groupsOpened: [],
    groupsClosed: ["ORS_O06/RESPONSE/ORDER/TIMING"],
  },
  "11:ORC": {
    groupsOpened: ["ORS_O06/RESPONSE/ORDER"],
    groupsClosed: ["ORS_O06/RESPONSE/PATIENT"],
  },
  "12:ORC": {
    groupsOpened: ["ORS_O06/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["ORS_O06/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "14:TQ1": {
    groupsOpened: ["ORS_O06/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "14:RQD": {
    groupsOpened: [],
    groupsClosed: ["ORS_O06/RESPONSE/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
