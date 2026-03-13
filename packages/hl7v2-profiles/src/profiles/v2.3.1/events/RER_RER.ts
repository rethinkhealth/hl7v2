// Generated profile automaton for RER_RER (v2.3.1)

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
  "2:QRD": {
    groupsOpened: ["RER_RER/DEFINITION"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["RER_RER/DEFINITION/ORDER"],
    groupsClosed: ["RER_RER/DEFINITION/PATIENT"],
  },
  "3:PID": {
    groupsOpened: ["RER_RER/DEFINITION/PATIENT"],
    groupsClosed: [],
  },
  "4:QRD": {
    groupsOpened: ["RER_RER/DEFINITION"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["RER_RER/DEFINITION/ORDER"],
    groupsClosed: ["RER_RER/DEFINITION/PATIENT"],
  },
  "7:ORC": {
    groupsOpened: ["RER_RER/DEFINITION/ORDER"],
    groupsClosed: ["RER_RER/DEFINITION/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["RER_RER/DEFINITION/PATIENT"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["RER_RER/DEFINITION/ORDER"],
    groupsClosed: ["RER_RER/DEFINITION/PATIENT"],
  },
  "10:ORC": {
    groupsOpened: ["RER_RER/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "10:QRD": {
    groupsOpened: ["RER_RER/DEFINITION"],
    groupsClosed: [],
  },
  "10:DSC": {
    groupsOpened: [],
    groupsClosed: ["RER_RER/DEFINITION", "RER_RER/DEFINITION/ORDER"],
  },
  "12:ORC": {
    groupsOpened: ["RER_RER/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "12:QRD": {
    groupsOpened: ["RER_RER/DEFINITION"],
    groupsClosed: [],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: ["RER_RER/DEFINITION", "RER_RER/DEFINITION/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
