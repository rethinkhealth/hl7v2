// Generated profile automaton for RRD_O14 (v2.5)

export const start = 0;
export const finals = new Set<number>([2, 3, 5, 6, 7, 9, 11, 13, 14]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
  "RXC",
  "RXD",
  "RXR",
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
      ["ORC", 3],
      ["RXD", 8],
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
      ["NTE", 12],
      ["RXR", 11],
    ]),
  ],
  [
    9,
    new Map([
      ["ORC", 3],
      ["RXD", 8],
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
      ["ORC", 3],
      ["RXC", 14],
      ["RXR", 11],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 12],
      ["RXR", 11],
    ]),
  ],
  [
    13,
    new Map([
      ["ORC", 3],
      ["RXD", 8],
      ["TQ1", 9],
      ["TQ2", 13],
    ]),
  ],
  [
    14,
    new Map([
      ["ORC", 3],
      ["RXC", 14],
    ]),
  ],
]);
export const effects = {
  "2:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/ORDER"],
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
  },
  "2:PID": {
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "3:RXD": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/DISPENSE"],
    groupsClosed: ["RRD_O14/RESPONSE/ORDER/TIMING"],
  },
  "3:TQ1": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
  },
  "5:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/ORDER"],
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/ORDER"],
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/ORDER"],
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "9:TQ1": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "9:RXD": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/DISPENSE"],
    groupsClosed: ["RRD_O14/RESPONSE/ORDER/TIMING"],
  },
  "10:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
  },
  "11:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "13:TQ1": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "13:RXD": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/DISPENSE"],
    groupsClosed: ["RRD_O14/RESPONSE/ORDER/TIMING"],
  },
  "14:ORC": {
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
