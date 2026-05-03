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
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
  },
  "12:BPO": {
    groupsClosed: ["BRT_O32/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "12:BTX": {
    groupsClosed: ["BRT_O32/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE/ORDER/TIMING"],
  },
  "13:BPO": {
    groupsClosed: ["BRT_O32/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "13:BTX": {
    groupsClosed: ["BRT_O32/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "13:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
  },
  "13:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE/ORDER/TIMING"],
  },
  "14:BPO": {
    groupsClosed: ["BRT_O32/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "14:BTX": {
    groupsClosed: ["BRT_O32/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
  },
  "14:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE/ORDER/TIMING"],
  },
  "2:ARV": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE"],
  },
  "2:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE", "BRT_O32/RESPONSE/ORDER"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE"],
  },
  "3:BPO": {
    groupsClosed: ["BRT_O32/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "3:BTX": {
    groupsClosed: ["BRT_O32/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
  },
  "3:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE/ORDER/TIMING"],
  },
  "4:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
  },
  "5:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
  },
  "6:ARV": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE"],
  },
  "6:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE", "BRT_O32/RESPONSE/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE"],
  },
  "7:ARV": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE"],
  },
  "7:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE", "BRT_O32/RESPONSE/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE"],
  },
  "8:ARV": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE"],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE", "BRT_O32/RESPONSE/ORDER"],
  },
  "8:PID": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE"],
  },
  "9:ARV": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE", "BRT_O32/RESPONSE/ORDER"],
  },
  "9:PID": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
