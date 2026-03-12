// Generated profile automaton for BRT_O32 (v2.8.2)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
]);
export const alphabet = new Set<string>([
  "ARV",
  "BPO",
  "BTX",
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
  "PRT",
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
      ["ARV", 4],
      ["ERR", 9],
      ["NTE", 6],
      ["ORC", 3],
      ["PID", 5],
      ["SFT", 8],
      ["UAC", 7],
    ]),
  ],
  [
    3,
    new Map([
      ["BPO", 11],
      ["BTX", 10],
      ["ORC", 3],
      ["PRT", 13],
      ["TQ1", 12],
    ]),
  ],
  [
    4,
    new Map([
      ["ARV", 4],
      ["ORC", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["ARV", 4],
      ["ORC", 3],
    ]),
  ],
  [
    6,
    new Map([
      ["ARV", 4],
      ["NTE", 6],
      ["ORC", 3],
      ["PID", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["ARV", 4],
      ["NTE", 6],
      ["ORC", 3],
      ["PID", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["ARV", 4],
      ["NTE", 6],
      ["ORC", 3],
      ["PID", 5],
      ["SFT", 8],
      ["UAC", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["ARV", 4],
      ["ERR", 9],
      ["NTE", 6],
      ["ORC", 3],
      ["PID", 5],
      ["SFT", 8],
      ["UAC", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["BTX", 10],
      ["ORC", 3],
    ]),
  ],
  [
    11,
    new Map([
      ["BTX", 10],
      ["ORC", 3],
    ]),
  ],
  [
    12,
    new Map([
      ["BPO", 11],
      ["BTX", 10],
      ["ORC", 3],
      ["TQ1", 12],
      ["TQ2", 14],
    ]),
  ],
  [
    13,
    new Map([
      ["BPO", 11],
      ["BTX", 10],
      ["ORC", 3],
      ["PRT", 13],
      ["TQ1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["BPO", 11],
      ["BTX", 10],
      ["ORC", 3],
      ["TQ1", 12],
      ["TQ2", 14],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "12:BPO": {
    groupsOpened: [],
    groupsClosed: ["BRT_O32/RESPONSE/ORDER/TIMING"],
  },
  "12:BTX": {
    groupsOpened: [],
    groupsClosed: ["BRT_O32/RESPONSE/ORDER/TIMING"],
  },
  "12:ORC": {
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "12:TQ1": {
    groupsOpened: ["BRT_O32/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "13:BPO": {
    groupsOpened: [],
    groupsClosed: ["BRT_O32/RESPONSE/ORDER/TIMING"],
  },
  "13:BTX": {
    groupsOpened: [],
    groupsClosed: ["BRT_O32/RESPONSE/ORDER/TIMING"],
  },
  "13:ORC": {
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "13:TQ1": {
    groupsOpened: ["BRT_O32/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "14:BPO": {
    groupsOpened: [],
    groupsClosed: ["BRT_O32/RESPONSE/ORDER/TIMING"],
  },
  "14:BTX": {
    groupsOpened: [],
    groupsClosed: ["BRT_O32/RESPONSE/ORDER/TIMING"],
  },
  "14:ORC": {
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "14:TQ1": {
    groupsOpened: ["BRT_O32/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "2:ARV": {
    groupsOpened: ["BRT_O32/RESPONSE"],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: ["BRT_O32/RESPONSE", "BRT_O32/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "2:PID": {
    groupsOpened: ["BRT_O32/RESPONSE"],
    groupsClosed: [],
  },
  "3:BPO": {
    groupsOpened: [],
    groupsClosed: ["BRT_O32/RESPONSE/ORDER/TIMING"],
  },
  "3:BTX": {
    groupsOpened: [],
    groupsClosed: ["BRT_O32/RESPONSE/ORDER/TIMING"],
  },
  "3:ORC": {
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "3:TQ1": {
    groupsOpened: ["BRT_O32/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "5:ORC": {
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "6:ARV": {
    groupsOpened: ["BRT_O32/RESPONSE"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["BRT_O32/RESPONSE", "BRT_O32/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "6:PID": {
    groupsOpened: ["BRT_O32/RESPONSE"],
    groupsClosed: [],
  },
  "7:ARV": {
    groupsOpened: ["BRT_O32/RESPONSE"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["BRT_O32/RESPONSE", "BRT_O32/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "7:PID": {
    groupsOpened: ["BRT_O32/RESPONSE"],
    groupsClosed: [],
  },
  "8:ARV": {
    groupsOpened: ["BRT_O32/RESPONSE"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["BRT_O32/RESPONSE", "BRT_O32/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "8:PID": {
    groupsOpened: ["BRT_O32/RESPONSE"],
    groupsClosed: [],
  },
  "9:ARV": {
    groupsOpened: ["BRT_O32/RESPONSE"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["BRT_O32/RESPONSE", "BRT_O32/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "9:PID": {
    groupsOpened: ["BRT_O32/RESPONSE"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
