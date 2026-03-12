// Generated profile automaton for RRA_O18 (v2.5)

export const start = 0;
export const finals = new Set<number>([2, 3, 5, 6, 7, 9, 11, 12]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
  "RXA",
  "RXR",
  "SFT",
  "TQ1",
  "TQ2",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 7],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 6],
    ]),
  ],
  [
    3,
    new Map([
      ["ORC", 3],
      ["RXA", 8],
      ["TQ1", 9],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 10],
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
      ["SFT", 6],
    ]),
  ],
  [
    7,
    new Map([
      ["ERR", 7],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["RXA", 8],
      ["RXR", 11],
    ]),
  ],
  [
    9,
    new Map([
      ["ORC", 3],
      ["RXA", 8],
      ["TQ1", 9],
      ["TQ2", 12],
    ]),
  ],
  [
    10,
    new Map([
      ["NTE", 10],
      ["ORC", 3],
    ]),
  ],
  [11, new Map([["ORC", 3]])],
  [
    12,
    new Map([
      ["ORC", 3],
      ["RXA", 8],
      ["TQ1", 9],
      ["TQ2", 12],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER"],
    groupsClosed: ["RRA_O18/RESPONSE/PATIENT"],
  },
  "11:ORC": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "12:RXA": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER/ADMINISTRATION"],
    groupsClosed: ["RRA_O18/RESPONSE/ORDER/TIMING"],
  },
  "12:TQ1": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
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
    groupsClosed: ["RRA_O18/RESPONSE/ORDER/TIMING"],
  },
  "3:TQ1": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER/TIMING"],
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
  "7:ORC": {
    groupsOpened: ["RRA_O18/RESPONSE", "RRA_O18/RESPONSE/ORDER"],
    groupsClosed: ["RRA_O18/RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["RRA_O18/RESPONSE", "RRA_O18/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "9:RXA": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER/ADMINISTRATION"],
    groupsClosed: ["RRA_O18/RESPONSE/ORDER/TIMING"],
  },
  "9:TQ1": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
