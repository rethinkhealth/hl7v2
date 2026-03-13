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
    groupsOpened: ["RRA_O18/RESPONSE", "RRA_O18/RESPONSE/ORDER"],
    groupsClosed: ["RRA_O18/RESPONSE/PATIENT"],
  },
  "2:PID": {
    groupsOpened: ["RRA_O18/RESPONSE", "RRA_O18/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "3:RXA": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER/ADMINISTRATION"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER"],
    groupsClosed: ["RRA_O18/RESPONSE/PATIENT"],
  },
  "5:ORC": {
    groupsOpened: ["RRA_O18/RESPONSE", "RRA_O18/RESPONSE/ORDER"],
    groupsClosed: ["RRA_O18/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["RRA_O18/RESPONSE", "RRA_O18/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["RRA_O18/RESPONSE", "RRA_O18/RESPONSE/ORDER"],
    groupsClosed: ["RRA_O18/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["RRA_O18/RESPONSE", "RRA_O18/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER"],
    groupsClosed: ["RRA_O18/RESPONSE/PATIENT"],
  },
  "9:ORC": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
