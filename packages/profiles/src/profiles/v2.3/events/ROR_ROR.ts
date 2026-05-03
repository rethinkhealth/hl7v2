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
    groupsClosed: ["ROR_ROR/DEFINITION", "ROR_ROR/DEFINITION/ORDER"],
    groupsOpened: [],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
  },
  "10:QRD": {
    groupsClosed: [],
    groupsOpened: ["ROR_ROR/DEFINITION"],
  },
  "12:DSC": {
    groupsClosed: ["ROR_ROR/DEFINITION", "ROR_ROR/DEFINITION/ORDER"],
    groupsOpened: [],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
  },
  "12:QRD": {
    groupsClosed: [],
    groupsOpened: ["ROR_ROR/DEFINITION"],
  },
  "2:QRD": {
    groupsClosed: [],
    groupsOpened: ["ROR_ROR/DEFINITION"],
  },
  "3:ORC": {
    groupsClosed: ["ROR_ROR/DEFINITION/PATIENT"],
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
  },
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["ROR_ROR/DEFINITION/PATIENT"],
  },
  "4:QRD": {
    groupsClosed: [],
    groupsOpened: ["ROR_ROR/DEFINITION"],
  },
  "6:ORC": {
    groupsClosed: ["ROR_ROR/DEFINITION/PATIENT"],
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
  },
  "7:ORC": {
    groupsClosed: ["ROR_ROR/DEFINITION/PATIENT"],
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["ROR_ROR/DEFINITION/PATIENT"],
  },
  "9:ORC": {
    groupsClosed: ["ROR_ROR/DEFINITION/PATIENT"],
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
