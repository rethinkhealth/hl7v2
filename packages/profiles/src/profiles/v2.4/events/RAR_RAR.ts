// Generated profile automaton for RAR_RAR (v2.4)

export const start = 0;
export const finals = new Set<number>([11, 13]);
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
  "RXA",
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
  [
    5,
    new Map([
      ["RXA", 8],
      ["RXE", 9],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 10],
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
  [
    8,
    new Map([
      ["RXA", 8],
      ["RXR", 11],
    ]),
  ],
  [9, new Map([["RXR", 12]])],
  [
    10,
    new Map([
      ["NTE", 10],
      ["ORC", 5],
    ]),
  ],
  [
    11,
    new Map([
      ["DSC", 13],
      ["ORC", 5],
      ["QRD", 3],
    ]),
  ],
  [
    12,
    new Map([
      ["RXA", 8],
      ["RXC", 14],
      ["RXR", 12],
    ]),
  ],
  [13, new Map([])],
  [
    14,
    new Map([
      ["RXA", 8],
      ["RXC", 14],
    ]),
  ],
]);
export const effects = {
  "2:QRD": {
    groupsOpened: ["RAR_RAR/DEFINITION"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER"],
    groupsClosed: ["RAR_RAR/DEFINITION/PATIENT"],
  },
  "3:PID": {
    groupsOpened: ["RAR_RAR/DEFINITION/PATIENT"],
    groupsClosed: [],
  },
  "4:QRD": {
    groupsOpened: ["RAR_RAR/DEFINITION"],
    groupsClosed: [],
  },
  "5:RXA": {
    groupsOpened: [],
    groupsClosed: ["RAR_RAR/DEFINITION/ORDER/ENCODING"],
  },
  "5:RXE": {
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER/ENCODING"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER"],
    groupsClosed: ["RAR_RAR/DEFINITION/PATIENT"],
  },
  "7:ORC": {
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER"],
    groupsClosed: ["RAR_RAR/DEFINITION/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["RAR_RAR/DEFINITION/PATIENT"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER"],
    groupsClosed: ["RAR_RAR/DEFINITION/PATIENT"],
  },
  "11:ORC": {
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "11:QRD": {
    groupsOpened: ["RAR_RAR/DEFINITION"],
    groupsClosed: [],
  },
  "11:DSC": {
    groupsOpened: [],
    groupsClosed: ["RAR_RAR/DEFINITION", "RAR_RAR/DEFINITION/ORDER"],
  },
  "12:RXA": {
    groupsOpened: [],
    groupsClosed: ["RAR_RAR/DEFINITION/ORDER/ENCODING"],
  },
  "14:RXA": {
    groupsOpened: [],
    groupsClosed: ["RAR_RAR/DEFINITION/ORDER/ENCODING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
