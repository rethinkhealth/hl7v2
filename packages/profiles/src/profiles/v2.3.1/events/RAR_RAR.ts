// Generated profile automaton for RAR_RAR (v2.3.1)

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
  "10:ORC": {
    groupsClosed: ["RAR_RAR/DEFINITION/PATIENT"],
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER"],
  },
  "11:DSC": {
    groupsClosed: ["RAR_RAR/DEFINITION", "RAR_RAR/DEFINITION/ORDER"],
    groupsOpened: [],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER"],
  },
  "11:QRD": {
    groupsClosed: [],
    groupsOpened: ["RAR_RAR/DEFINITION"],
  },
  "12:RXA": {
    groupsClosed: ["RAR_RAR/DEFINITION/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "14:RXA": {
    groupsClosed: ["RAR_RAR/DEFINITION/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "2:QRD": {
    groupsClosed: [],
    groupsOpened: ["RAR_RAR/DEFINITION"],
  },
  "3:ORC": {
    groupsClosed: ["RAR_RAR/DEFINITION/PATIENT"],
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER"],
  },
  "3:PID": {
    groupsClosed: [],
    groupsOpened: ["RAR_RAR/DEFINITION/PATIENT"],
  },
  "4:QRD": {
    groupsClosed: [],
    groupsOpened: ["RAR_RAR/DEFINITION"],
  },
  "5:RXA": {
    groupsClosed: ["RAR_RAR/DEFINITION/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "5:RXE": {
    groupsClosed: [],
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER/ENCODING"],
  },
  "6:ORC": {
    groupsClosed: ["RAR_RAR/DEFINITION/PATIENT"],
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER"],
  },
  "7:ORC": {
    groupsClosed: ["RAR_RAR/DEFINITION/PATIENT"],
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["RAR_RAR/DEFINITION/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
