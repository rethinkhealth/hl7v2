// Generated profile automaton for RRE_O12 (v2.4)

export const start = 0;
export const finals = new Set<number>([2, 3, 5, 6, 9, 10]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
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
      ["ERR", 6],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    3,
    new Map([
      ["ORC", 3],
      ["RXE", 7],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 8],
      ["ORC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
    ]),
  ],
  [7, new Map([["RXR", 9]])],
  [
    8,
    new Map([
      ["NTE", 8],
      ["ORC", 3],
    ]),
  ],
  [
    9,
    new Map([
      ["ORC", 3],
      ["RXC", 10],
      ["RXR", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["ORC", 3],
      ["RXC", 10],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
  },
  "2:ORC": {
    groupsClosed: ["RRE_O12/RESPONSE/PATIENT"],
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/ORDER"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/PATIENT"],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
  },
  "3:RXE": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER/ENCODING"],
  },
  "4:ORC": {
    groupsClosed: ["RRE_O12/RESPONSE/PATIENT"],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
  },
  "5:ORC": {
    groupsClosed: ["RRE_O12/RESPONSE/PATIENT"],
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["RRE_O12/RESPONSE/PATIENT"],
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE", "RRE_O12/RESPONSE/PATIENT"],
  },
  "8:ORC": {
    groupsClosed: ["RRE_O12/RESPONSE/PATIENT"],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRE_O12/RESPONSE/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
