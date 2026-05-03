// Generated profile automaton for RER_RER (v2.4)

export const start = 0;
export const finals = new Set<number>([10, 11, 12]);
export const alphabet = new Set<string>([
  "DSC",
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
  "QRD",
  "QRF",
  "RXC",
  "RXE",
  "RXR",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 4],
      ["QRD", 3],
    ]),
  ],
  [
    3,
    new Map([
      ["ORC", 5],
      ["PID", 6],
      ["QRF", 7],
    ]),
  ],
  [4, new Map([["QRD", 3]])],
  [5, new Map([["RXE", 8]])],
  [
    6,
    new Map([
      ["NTE", 9],
      ["ORC", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["ORC", 5],
      ["PID", 6],
    ]),
  ],
  [8, new Map([["RXR", 10]])],
  [
    9,
    new Map([
      ["NTE", 9],
      ["ORC", 5],
    ]),
  ],
  [
    10,
    new Map([
      ["DSC", 11],
      ["ORC", 5],
      ["QRD", 3],
      ["RXC", 12],
      ["RXR", 10],
    ]),
  ],
  [11, new Map([])],
  [
    12,
    new Map([
      ["DSC", 11],
      ["ORC", 5],
      ["QRD", 3],
      ["RXC", 12],
    ]),
  ],
]);
export const effects = {
  "10:DSC": {
    groupsClosed: ["RER_RER/DEFINITION", "RER_RER/DEFINITION/ORDER"],
    groupsOpened: [],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["RER_RER/DEFINITION/ORDER"],
  },
  "10:QRD": {
    groupsClosed: [],
    groupsOpened: ["RER_RER/DEFINITION"],
  },
  "12:DSC": {
    groupsClosed: ["RER_RER/DEFINITION", "RER_RER/DEFINITION/ORDER"],
    groupsOpened: [],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["RER_RER/DEFINITION/ORDER"],
  },
  "12:QRD": {
    groupsClosed: [],
    groupsOpened: ["RER_RER/DEFINITION"],
  },
  "2:QRD": {
    groupsClosed: [],
    groupsOpened: ["RER_RER/DEFINITION"],
  },
  "3:ORC": {
    groupsClosed: ["RER_RER/DEFINITION/PATIENT"],
    groupsOpened: ["RER_RER/DEFINITION/ORDER"],
  },
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["RER_RER/DEFINITION/PATIENT"],
  },
  "4:QRD": {
    groupsClosed: [],
    groupsOpened: ["RER_RER/DEFINITION"],
  },
  "6:ORC": {
    groupsClosed: ["RER_RER/DEFINITION/PATIENT"],
    groupsOpened: ["RER_RER/DEFINITION/ORDER"],
  },
  "7:ORC": {
    groupsClosed: ["RER_RER/DEFINITION/PATIENT"],
    groupsOpened: ["RER_RER/DEFINITION/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["RER_RER/DEFINITION/PATIENT"],
  },
  "9:ORC": {
    groupsClosed: ["RER_RER/DEFINITION/PATIENT"],
    groupsOpened: ["RER_RER/DEFINITION/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
