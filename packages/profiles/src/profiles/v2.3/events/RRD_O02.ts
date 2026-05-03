// Generated profile automaton for RRD_O02 (v2.3)

export const start = 0;
export const finals = new Set<number>([2, 3, 5, 6, 9, 10]);
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
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 6],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["ORC", 3],
      ["RXD", 7],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 8],
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
  [7, new Map([["RXR", 9]])],
  [
    8,
    new Map([
      ["NTE", 8],
      ["ORC", 3],
    ]),
  ],
  [
    9,
    new Map([
      ["ORC", 3],
      ["RXC", 10],
      ["RXR", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["ORC", 3],
      ["RXC", 10],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRD_O02/PATIENT/ORDER"],
  },
  "2:ORC": {
    groupsClosed: ["RRD_O02/PATIENT/RESPONSE"],
    groupsOpened: ["RRD_O02/PATIENT", "RRD_O02/PATIENT/ORDER"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["RRD_O02/PATIENT", "RRD_O02/PATIENT/RESPONSE"],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRD_O02/PATIENT/ORDER"],
  },
  "3:RXD": {
    groupsClosed: [],
    groupsOpened: ["RRD_O02/PATIENT/ORDER/DISPENSE"],
  },
  "4:ORC": {
    groupsClosed: ["RRD_O02/PATIENT/RESPONSE"],
    groupsOpened: ["RRD_O02/PATIENT/ORDER"],
  },
  "5:ORC": {
    groupsClosed: ["RRD_O02/PATIENT/RESPONSE"],
    groupsOpened: ["RRD_O02/PATIENT", "RRD_O02/PATIENT/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["RRD_O02/PATIENT", "RRD_O02/PATIENT/RESPONSE"],
  },
  "6:ORC": {
    groupsClosed: ["RRD_O02/PATIENT/RESPONSE"],
    groupsOpened: ["RRD_O02/PATIENT", "RRD_O02/PATIENT/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["RRD_O02/PATIENT", "RRD_O02/PATIENT/RESPONSE"],
  },
  "8:ORC": {
    groupsClosed: ["RRD_O02/PATIENT/RESPONSE"],
    groupsOpened: ["RRD_O02/PATIENT/ORDER"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRD_O02/PATIENT/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
