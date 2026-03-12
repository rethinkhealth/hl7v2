// Generated profile automaton for RRA_O18 (v2.7.1)

export const start = 0;
export const finals = new Set<number>([2, 3, 5, 6, 7, 8, 10, 11, 13, 15]);
export const alphabet = new Set<string>([
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
  "PRT",
  "RXA",
  "RXR",
  "SFT",
  "TQ1",
  "TQ2",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 8],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [
    3,
    new Map([
      ["ORC", 3],
      ["PRT", 11],
      ["RXA", 9],
      ["TQ1", 10],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 12],
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
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["ERR", 8],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["PRT", 14],
      ["RXA", 9],
      ["RXR", 13],
    ]),
  ],
  [
    10,
    new Map([
      ["ORC", 3],
      ["RXA", 9],
      ["TQ1", 10],
      ["TQ2", 15],
    ]),
  ],
  [
    11,
    new Map([
      ["ORC", 3],
      ["PRT", 11],
      ["RXA", 9],
      ["TQ1", 10],
    ]),
  ],
  [
    12,
    new Map([
      ["NTE", 12],
      ["ORC", 3],
    ]),
  ],
  [13, new Map([["ORC", 3]])],
  [
    14,
    new Map([
      ["PRT", 14],
      ["RXA", 9],
      ["RXR", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["ORC", 3],
      ["RXA", 9],
      ["TQ1", 10],
      ["TQ2", 15],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "10:RXA": {
    groupsOpened: [
      "RRA_O18/RESPONSE/ORDER/ADMINISTRATION",
      "RRA_O18/RESPONSE/ORDER/ADMINISTRATION/TREATMENT",
    ],
    groupsClosed: ["RRA_O18/RESPONSE/ORDER/TIMING"],
  },
  "10:TQ1": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "11:RXA": {
    groupsOpened: [
      "RRA_O18/RESPONSE/ORDER/ADMINISTRATION",
      "RRA_O18/RESPONSE/ORDER/ADMINISTRATION/TREATMENT",
    ],
    groupsClosed: ["RRA_O18/RESPONSE/ORDER/TIMING"],
  },
  "11:TQ1": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER"],
    groupsClosed: ["RRA_O18/RESPONSE/PATIENT"],
  },
  "13:ORC": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "14:RXA": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER/ADMINISTRATION/TREATMENT"],
    groupsClosed: [],
  },
  "14:RXR": {
    groupsOpened: [],
    groupsClosed: ["RRA_O18/RESPONSE/ORDER/ADMINISTRATION/TREATMENT"],
  },
  "15:ORC": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "15:RXA": {
    groupsOpened: [
      "RRA_O18/RESPONSE/ORDER/ADMINISTRATION",
      "RRA_O18/RESPONSE/ORDER/ADMINISTRATION/TREATMENT",
    ],
    groupsClosed: ["RRA_O18/RESPONSE/ORDER/TIMING"],
  },
  "15:TQ1": {
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
    groupsOpened: [
      "RRA_O18/RESPONSE/ORDER/ADMINISTRATION",
      "RRA_O18/RESPONSE/ORDER/ADMINISTRATION/TREATMENT",
    ],
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
  "8:ORC": {
    groupsOpened: ["RRA_O18/RESPONSE", "RRA_O18/RESPONSE/ORDER"],
    groupsClosed: ["RRA_O18/RESPONSE/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["RRA_O18/RESPONSE", "RRA_O18/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "9:RXA": {
    groupsOpened: ["RRA_O18/RESPONSE/ORDER/ADMINISTRATION/TREATMENT"],
    groupsClosed: [],
  },
  "9:RXR": {
    groupsOpened: [],
    groupsClosed: ["RRA_O18/RESPONSE/ORDER/ADMINISTRATION/TREATMENT"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
