// Generated profile automaton for RER_RER (v2.6)

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
  "RXE",
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
  [7, new Map([["RXE", 10]])],
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
    groupsClosed: ["RER_RER/DEFINITION/PATIENT"],
    groupsOpened: ["RER_RER/DEFINITION/ORDER"],
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
  "14:DSC": {
    groupsClosed: ["RER_RER/DEFINITION", "RER_RER/DEFINITION/ORDER"],
    groupsOpened: [],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["RER_RER/DEFINITION/ORDER"],
  },
  "14:QRD": {
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
  "5:QRD": {
    groupsClosed: [],
    groupsOpened: ["RER_RER/DEFINITION"],
  },
  "6:QRD": {
    groupsClosed: [],
    groupsOpened: ["RER_RER/DEFINITION"],
  },
  "8:ORC": {
    groupsClosed: ["RER_RER/DEFINITION/PATIENT"],
    groupsOpened: ["RER_RER/DEFINITION/ORDER"],
  },
  "9:ORC": {
    groupsClosed: ["RER_RER/DEFINITION/PATIENT"],
    groupsOpened: ["RER_RER/DEFINITION/ORDER"],
  },
  "9:PID": {
    groupsClosed: [],
    groupsOpened: ["RER_RER/DEFINITION/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
