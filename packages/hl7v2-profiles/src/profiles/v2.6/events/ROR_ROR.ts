// Generated profile automaton for ROR_ROR (v2.6)

export const start = 0;
export const finals = new Set<number>([12, 13, 14]);
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
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 6],
      ["QRD", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["ORC", 7],
      ["PID", 8],
      ["QRF", 9],
    ]),
  ],
  [4, new Map([["QRD", 3]])],
  [
    5,
    new Map([
      ["QRD", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["ERR", 6],
      ["QRD", 3],
      ["SFT", 5],
      ["UAC", 4],
    ]),
  ],
  [7, new Map([["RXO", 10]])],
  [
    8,
    new Map([
      ["NTE", 11],
      ["ORC", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["ORC", 7],
      ["PID", 8],
    ]),
  ],
  [10, new Map([["RXR", 12]])],
  [
    11,
    new Map([
      ["NTE", 11],
      ["ORC", 7],
    ]),
  ],
  [
    12,
    new Map([
      ["DSC", 13],
      ["ORC", 7],
      ["QRD", 3],
      ["RXC", 14],
      ["RXR", 12],
    ]),
  ],
  [13, new Map([])],
  [
    14,
    new Map([
      ["DSC", 13],
      ["ORC", 7],
      ["QRD", 3],
      ["RXC", 14],
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
  "6:QRD": {
    groupsOpened: ["ROR_ROR/DEFINITION"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
    groupsClosed: ["ROR_ROR/DEFINITION/PATIENT"],
  },
  "9:ORC": {
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
    groupsClosed: ["ROR_ROR/DEFINITION/PATIENT"],
  },
  "9:PID": {
    groupsOpened: ["ROR_ROR/DEFINITION/PATIENT"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
    groupsClosed: ["ROR_ROR/DEFINITION/PATIENT"],
  },
  "12:ORC": {
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "12:QRD": {
    groupsOpened: ["ROR_ROR/DEFINITION"],
    groupsClosed: [],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: ["ROR_ROR/DEFINITION", "ROR_ROR/DEFINITION/ORDER"],
  },
  "14:ORC": {
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "14:QRD": {
    groupsOpened: ["ROR_ROR/DEFINITION"],
    groupsClosed: [],
  },
  "14:DSC": {
    groupsOpened: [],
    groupsClosed: ["ROR_ROR/DEFINITION", "ROR_ROR/DEFINITION/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
