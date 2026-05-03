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
  "11:ORC": {
    groupsClosed: ["ROR_ROR/DEFINITION/PATIENT"],
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
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
  "14:DSC": {
    groupsClosed: ["ROR_ROR/DEFINITION", "ROR_ROR/DEFINITION/ORDER"],
    groupsOpened: [],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
  },
  "14:QRD": {
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
  "6:QRD": {
    groupsClosed: [],
    groupsOpened: ["ROR_ROR/DEFINITION"],
  },
  "8:ORC": {
    groupsClosed: ["ROR_ROR/DEFINITION/PATIENT"],
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
  },
  "9:ORC": {
    groupsClosed: ["ROR_ROR/DEFINITION/PATIENT"],
    groupsOpened: ["ROR_ROR/DEFINITION/ORDER"],
  },
  "9:PID": {
    groupsClosed: [],
    groupsOpened: ["ROR_ROR/DEFINITION/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
