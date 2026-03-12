// Generated profile automaton for RAR_RAR (v2.5)

export const start = 0;
export const finals = new Set<number>([12, 14]);
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
  [
    6,
    new Map([
      ["RXA", 9],
      ["RXE", 10],
    ]),
  ],
  [
    7,
    new Map([
      ["NTE", 11],
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
  [
    9,
    new Map([
      ["RXA", 9],
      ["RXR", 12],
    ]),
  ],
  [10, new Map([["RXR", 13]])],
  [
    11,
    new Map([
      ["NTE", 11],
      ["ORC", 6],
    ]),
  ],
  [
    12,
    new Map([
      ["DSC", 14],
      ["ORC", 6],
      ["QRD", 3],
    ]),
  ],
  [
    13,
    new Map([
      ["RXA", 9],
      ["RXC", 15],
      ["RXR", 13],
    ]),
  ],
  [14, new Map([])],
  [
    15,
    new Map([
      ["RXA", 9],
      ["RXC", 15],
    ]),
  ],
]);
export const effects = {
  "11:ORC": {
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER"],
    groupsClosed: ["RAR_RAR/DEFINITION/PATIENT"],
  },
  "12:DSC": {
    groupsOpened: [],
    groupsClosed: ["RAR_RAR/DEFINITION", "RAR_RAR/DEFINITION/ORDER"],
  },
  "12:ORC": {
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER"],
    groupsClosed: [],
  },
  "12:QRD": {
    groupsOpened: ["RAR_RAR/DEFINITION"],
    groupsClosed: [],
  },
  "13:RXA": {
    groupsOpened: [],
    groupsClosed: ["RAR_RAR/DEFINITION/ORDER/ENCODING"],
  },
  "15:RXA": {
    groupsOpened: [],
    groupsClosed: ["RAR_RAR/DEFINITION/ORDER/ENCODING"],
  },
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
  "5:QRD": {
    groupsOpened: ["RAR_RAR/DEFINITION"],
    groupsClosed: [],
  },
  "6:RXA": {
    groupsOpened: [],
    groupsClosed: ["RAR_RAR/DEFINITION/ORDER/ENCODING"],
  },
  "6:RXE": {
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER/ENCODING"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER"],
    groupsClosed: ["RAR_RAR/DEFINITION/PATIENT"],
  },
  "8:ORC": {
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER"],
    groupsClosed: ["RAR_RAR/DEFINITION/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["RAR_RAR/DEFINITION/PATIENT"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
