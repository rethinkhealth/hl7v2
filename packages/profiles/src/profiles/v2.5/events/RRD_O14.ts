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
  "10:ORC": {
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
  },
  "13:RXD": {
    groupsClosed: ["RRD_O14/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/DISPENSE"],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/TIMING"],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
  },
  "2:ORC": {
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/ORDER"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/PATIENT"],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
  },
  "3:RXD": {
    groupsClosed: ["RRD_O14/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/DISPENSE"],
  },
  "3:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/TIMING"],
  },
  "4:ORC": {
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
  },
  "5:ORC": {
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/PATIENT"],
  },
  "7:ORC": {
    groupsClosed: ["RRD_O14/RESPONSE/PATIENT"],
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE", "RRD_O14/RESPONSE/PATIENT"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER"],
  },
  "9:RXD": {
    groupsClosed: ["RRD_O14/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/DISPENSE"],
  },
  "9:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRD_O14/RESPONSE/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
