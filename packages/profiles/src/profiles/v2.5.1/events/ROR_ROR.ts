// Generated profile automaton for ROR_ROR (v2.5.1)

export const start = 0;
export const finals = new Set<number>([11, 12, 13]);
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
  "SFT",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 5],
      ["QRD", 3],
      ["SFT", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["ORC", 6],
      ["PID", 7],
      ["QRF", 8],
    ]),
  ],
  [
    4,
    new Map([
      ["QRD", 3],
      ["SFT", 4],
    ]),
  ],
  [
    5,
    new Map([
      ["ERR", 5],
      ["QRD", 3],
      ["SFT", 4],
    ]),
  ],
  [6, new Map([["RXO", 9]])],
  [
    7,
    new Map([
      ["NTE", 10],
      ["ORC", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["ORC", 6],
      ["PID", 7],
    ]),
  ],
  [9, new Map([["RXR", 11]])],
  [
    10,
    new Map([
      ["NTE", 10],
      ["ORC", 6],
    ]),
  ],
  [
    11,
    new Map([
      ["DSC", 12],
      ["ORC", 6],
      ["QRD", 3],
      ["RXC", 13],
      ["RXR", 11],
    ]),
  ],
  [12, new Map([])],
  [
    13,
    new Map([
      ["DSC", 12],
      ["ORC", 6],
      ["QRD", 3],
      ["RXC", 13],
    ]),
  ],
]);
export const effects = {
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
  "5:QRD": {
    groupsOpened: ["ROR_ROR/DEFINITION"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
    groupsClosed: ["ROR_ROR/DEFINITION/PATIENT"],
  },
  "8:ORC": {
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
    groupsClosed: ["ROR_ROR/DEFINITION/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["ROR_ROR/DEFINITION/PATIENT"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
    groupsClosed: ["ROR_ROR/DEFINITION/PATIENT"],
  },
  "11:ORC": {
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "11:QRD": {
    groupsOpened: ["ROR_ROR/DEFINITION"],
    groupsClosed: [],
  },
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: ["ROR_ROR/DEFINITION", "ROR_ROR/DEFINITION/ORDER"],
  },
  "13:ORC": {
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "13:QRD": {
    groupsOpened: ["ROR_ROR/DEFINITION"],
    groupsClosed: [],
  },
  "13:DSC": {
    groupsOpened: [],
    groupsClosed: ["ROR_ROR/DEFINITION", "ROR_ROR/DEFINITION/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
