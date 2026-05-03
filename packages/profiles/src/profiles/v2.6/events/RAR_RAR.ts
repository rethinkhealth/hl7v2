// Generated profile automaton for RAR_RAR (v2.6)

export const start = 0;
export const finals = new Set<number>([13, 15]);
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
  [
    7,
    new Map([
      ["RXA", 10],
      ["RXE", 11],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 12],
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
  [
    10,
    new Map([
      ["RXA", 10],
      ["RXR", 13],
    ]),
  ],
  [11, new Map([["RXR", 14]])],
  [
    12,
    new Map([
      ["NTE", 12],
      ["ORC", 7],
    ]),
  ],
  [
    13,
    new Map([
      ["DSC", 15],
      ["ORC", 7],
      ["QRD", 3],
    ]),
  ],
  [
    14,
    new Map([
      ["RXA", 10],
      ["RXC", 16],
      ["RXR", 14],
    ]),
  ],
  [15, new Map([])],
  [
    16,
    new Map([
      ["RXA", 10],
      ["RXC", 16],
    ]),
  ],
]);
export const effects = {
  "12:ORC": {
    groupsClosed: ["RAR_RAR/DEFINITION/PATIENT"],
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER"],
  },
  "13:DSC": {
    groupsClosed: ["RAR_RAR/DEFINITION", "RAR_RAR/DEFINITION/ORDER"],
    groupsOpened: [],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER"],
  },
  "13:QRD": {
    groupsClosed: [],
    groupsOpened: ["RAR_RAR/DEFINITION"],
  },
  "14:RXA": {
    groupsClosed: ["RAR_RAR/DEFINITION/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "16:RXA": {
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
  "5:QRD": {
    groupsClosed: [],
    groupsOpened: ["RAR_RAR/DEFINITION"],
  },
  "6:QRD": {
    groupsClosed: [],
    groupsOpened: ["RAR_RAR/DEFINITION"],
  },
  "7:RXA": {
    groupsClosed: ["RAR_RAR/DEFINITION/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "7:RXE": {
    groupsClosed: [],
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER/ENCODING"],
  },
  "8:ORC": {
    groupsClosed: ["RAR_RAR/DEFINITION/PATIENT"],
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER"],
  },
  "9:ORC": {
    groupsClosed: ["RAR_RAR/DEFINITION/PATIENT"],
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER"],
  },
  "9:PID": {
    groupsClosed: [],
    groupsOpened: ["RAR_RAR/DEFINITION/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
