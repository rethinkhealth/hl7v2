// Generated profile automaton for RRA_O18 (v2.8.2)

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
    groupsClosed: [],
    groupsOpened: ["RRA_O18/RESPONSE/ORDER"],
  },
  "10:RXA": {
    groupsClosed: ["RRA_O18/RESPONSE/ORDER/TIMING"],
    groupsOpened: [
      "RRA_O18/RESPONSE/ORDER/ADMINISTRATION",
      "RRA_O18/RESPONSE/ORDER/ADMINISTRATION/TREATMENT",
    ],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRA_O18/RESPONSE/ORDER/TIMING"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRA_O18/RESPONSE/ORDER"],
  },
  "11:RXA": {
    groupsClosed: ["RRA_O18/RESPONSE/ORDER/TIMING"],
    groupsOpened: [
      "RRA_O18/RESPONSE/ORDER/ADMINISTRATION",
      "RRA_O18/RESPONSE/ORDER/ADMINISTRATION/TREATMENT",
    ],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRA_O18/RESPONSE/ORDER/TIMING"],
  },
  "12:ORC": {
    groupsClosed: ["RRA_O18/RESPONSE/PATIENT"],
    groupsOpened: ["RRA_O18/RESPONSE/ORDER"],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRA_O18/RESPONSE/ORDER"],
  },
  "14:RXA": {
    groupsClosed: [],
    groupsOpened: ["RRA_O18/RESPONSE/ORDER/ADMINISTRATION/TREATMENT"],
  },
  "14:RXR": {
    groupsClosed: ["RRA_O18/RESPONSE/ORDER/ADMINISTRATION/TREATMENT"],
    groupsOpened: [],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["RRA_O18/RESPONSE/ORDER"],
  },
  "15:RXA": {
    groupsClosed: ["RRA_O18/RESPONSE/ORDER/TIMING"],
    groupsOpened: [
      "RRA_O18/RESPONSE/ORDER/ADMINISTRATION",
      "RRA_O18/RESPONSE/ORDER/ADMINISTRATION/TREATMENT",
    ],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRA_O18/RESPONSE/ORDER/TIMING"],
  },
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
    groupsClosed: ["RRA_O18/RESPONSE/ORDER/TIMING"],
    groupsOpened: [
      "RRA_O18/RESPONSE/ORDER/ADMINISTRATION",
      "RRA_O18/RESPONSE/ORDER/ADMINISTRATION/TREATMENT",
    ],
  },
  "3:TQ1": {
    groupsClosed: [],
    groupsOpened: ["RRA_O18/RESPONSE/ORDER/TIMING"],
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
  "7:ORC": {
    groupsClosed: ["RRA_O18/RESPONSE/PATIENT"],
    groupsOpened: ["RRA_O18/RESPONSE", "RRA_O18/RESPONSE/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["RRA_O18/RESPONSE", "RRA_O18/RESPONSE/PATIENT"],
  },
  "8:ORC": {
    groupsClosed: ["RRA_O18/RESPONSE/PATIENT"],
    groupsOpened: ["RRA_O18/RESPONSE", "RRA_O18/RESPONSE/ORDER"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["RRA_O18/RESPONSE", "RRA_O18/RESPONSE/PATIENT"],
  },
  "9:RXA": {
    groupsClosed: [],
    groupsOpened: ["RRA_O18/RESPONSE/ORDER/ADMINISTRATION/TREATMENT"],
  },
  "9:RXR": {
    groupsClosed: ["RRA_O18/RESPONSE/ORDER/ADMINISTRATION/TREATMENT"],
    groupsOpened: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
