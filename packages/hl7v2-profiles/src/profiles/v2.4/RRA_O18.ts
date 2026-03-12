// Generated profile automaton for RRA_O18 (v2.4)

export const start = 0;
export const finals = new Set<number>([2, 3, 5, 6, 9]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
  "RXA",
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
      ["RXA", 7],
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
  [
    7,
    new Map([
      ["RXA", 7],
      ["RXR", 9],
    ]),
  ],
  [
    8,
    new Map([
      ["NTE", 8],
      ["ORC", 3],
    ]),
  ],
  [9, new Map([["ORC", 3]])],
]);
export const effects = {
  "2:ORC": {
    groupsClosed: ["RRA_O18/RESPONSE/PATIENT"],
    groupsOpened: ["RRA_O18/RESPONSE", "RRA_O18/RESPONSE/ORDER"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["RRA_O18/RESPONSE", "RRA_O18/RESPONSE/PATIENT"],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRA_O18/RESPONSE/ORDER"],
  },
  "3:RXA": {
    groupsClosed: [],
    groupsOpened: ["RRA_O18/RESPONSE/ORDER/ADMINISTRATION"],
  },
  "4:ORC": {
    groupsClosed: ["RRA_O18/RESPONSE/PATIENT"],
    groupsOpened: ["RRA_O18/RESPONSE/ORDER"],
  },
  "5:ORC": {
    groupsClosed: ["RRA_O18/RESPONSE/PATIENT"],
    groupsOpened: ["RRA_O18/RESPONSE", "RRA_O18/RESPONSE/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["RRA_O18/RESPONSE", "RRA_O18/RESPONSE/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["RRA_O18/RESPONSE/PATIENT"],
    groupsOpened: ["RRA_O18/RESPONSE", "RRA_O18/RESPONSE/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["RRA_O18/RESPONSE", "RRA_O18/RESPONSE/PATIENT"],
  },
  "8:ORC": {
    groupsClosed: ["RRA_O18/RESPONSE/PATIENT"],
    groupsOpened: ["RRA_O18/RESPONSE/ORDER"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRA_O18/RESPONSE/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
