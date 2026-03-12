// Generated profile automaton for ROR_ROR (v2.3)

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
  "RXO",
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
  [5, new Map([["RXO", 8]])],
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
    groupsOpened: [],
    groupsClosed: ["ROR_ROR/DEFINITION", "ROR_ROR/DEFINITION/ORDER"],
  },
  "10:ORC": {
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "10:QRD": {
    groupsOpened: ["ROR_ROR/DEFINITION"],
    groupsClosed: [],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: ["ROR_ROR/DEFINITION", "ROR_ROR/DEFINITION/ORDER"],
  },
  "12:ORC": {
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "12:QRD": {
    groupsOpened: ["ROR_ROR/DEFINITION"],
    groupsClosed: [],
  },
  "2:QRD": {
    groupsOpened: ["ROR_ROR/DEFINITION"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
    groupsClosed: ["ROR_ROR/DEFINITION/PATIENT"],
  },
  "3:PID": {
    groupsOpened: ["ROR_ROR/DEFINITION/PATIENT"],
    groupsClosed: [],
  },
  "4:QRD": {
    groupsOpened: ["ROR_ROR/DEFINITION"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
    groupsClosed: ["ROR_ROR/DEFINITION/PATIENT"],
  },
  "7:ORC": {
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
    groupsClosed: ["ROR_ROR/DEFINITION/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["ROR_ROR/DEFINITION/PATIENT"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
    groupsClosed: ["ROR_ROR/DEFINITION/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
