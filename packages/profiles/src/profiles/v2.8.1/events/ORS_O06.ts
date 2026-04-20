// Generated profile automaton for ORS_O06 (v2.8.1)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 7, 8, 9, 15, 16]);
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
      ["PRT", 14],
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
      ["NTE", 15],
      ["ORC", 3],
      ["RQ1", 16],
    ]),
  ],
  [
    10,
    new Map([
      ["RQD", 9],
      ["TQ1", 10],
      ["TQ2", 17],
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
      ["ARV", 13],
      ["NTE", 12],
      ["ORC", 3],
      ["PRT", 14],
    ]),
  ],
  [
    15,
    new Map([
      ["NTE", 15],
      ["ORC", 3],
    ]),
  ],
  [
    16,
    new Map([
      ["NTE", 15],
      ["ORC", 3],
    ]),
  ],
  [
    17,
    new Map([
      ["RQD", 9],
      ["TQ1", 10],
      ["TQ2", 17],
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
  "11:RQD": {
    groupsOpened: [],
    groupsClosed: ["ORS_O06/RESPONSE/ORDER/TIMING"],
  },
  "11:TQ1": {
    groupsOpened: ["ORS_O06/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["ORS_O06/RESPONSE/ORDER"],
    groupsClosed: ["ORS_O06/RESPONSE/PATIENT"],
  },
  "13:ORC": {
    groupsOpened: ["ORS_O06/RESPONSE/ORDER"],
    groupsClosed: ["ORS_O06/RESPONSE/PATIENT"],
  },
  "14:ORC": {
    groupsOpened: ["ORS_O06/RESPONSE/ORDER"],
    groupsClosed: ["ORS_O06/RESPONSE/PATIENT"],
  },
  "15:ORC": {
    groupsOpened: ["ORS_O06/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "16:ORC": {
    groupsOpened: ["ORS_O06/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "17:TQ1": {
    groupsOpened: ["ORS_O06/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "17:RQD": {
    groupsOpened: [],
    groupsClosed: ["ORS_O06/RESPONSE/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
