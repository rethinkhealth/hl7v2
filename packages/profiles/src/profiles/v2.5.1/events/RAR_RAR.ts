// Generated profile automaton for RAR_RAR (v2.5.1)

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
    groupsClosed: ["RAR_RAR/DEFINITION/PATIENT"],
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER"],
  },
  "12:DSC": {
    groupsClosed: ["RAR_RAR/DEFINITION", "RAR_RAR/DEFINITION/ORDER"],
    groupsOpened: [],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER"],
  },
  "12:QRD": {
    groupsClosed: [],
    groupsOpened: ["RAR_RAR/DEFINITION"],
  },
  "13:RXA": {
    groupsClosed: ["RAR_RAR/DEFINITION/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "15:RXA": {
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
  "6:RXA": {
    groupsClosed: ["RAR_RAR/DEFINITION/ORDER/ENCODING"],
    groupsOpened: [],
  },
  "6:RXE": {
    groupsClosed: [],
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER/ENCODING"],
  },
  "7:ORC": {
    groupsClosed: ["RAR_RAR/DEFINITION/PATIENT"],
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER"],
  },
  "8:ORC": {
    groupsClosed: ["RAR_RAR/DEFINITION/PATIENT"],
    groupsOpened: ["RAR_RAR/DEFINITION/ORDER"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["RAR_RAR/DEFINITION/PATIENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
