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
  "10:ORC": {
    groupsClosed: ["ROR_ROR/DEFINITION/PATIENT"],
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
  },
  "11:DSC": {
    groupsClosed: ["ROR_ROR/DEFINITION", "ROR_ROR/DEFINITION/ORDER"],
    groupsOpened: [],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
  },
  "11:QRD": {
    groupsClosed: [],
    groupsOpened: ["ROR_ROR/DEFINITION"],
  },
  "13:DSC": {
    groupsClosed: ["ROR_ROR/DEFINITION", "ROR_ROR/DEFINITION/ORDER"],
    groupsOpened: [],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
  },
  "13:QRD": {
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
  "5:QRD": {
    groupsClosed: [],
    groupsOpened: ["ROR_ROR/DEFINITION"],
  },
  "7:ORC": {
    groupsClosed: ["ROR_ROR/DEFINITION/PATIENT"],
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
  },
  "8:ORC": {
    groupsClosed: ["ROR_ROR/DEFINITION/PATIENT"],
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["ROR_ROR/DEFINITION/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
