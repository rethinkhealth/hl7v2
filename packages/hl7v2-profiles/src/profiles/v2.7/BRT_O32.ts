// Generated profile automaton for BRT_O32 (v2.7)

export const start = 0;
export const finals = new Set<number>([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
export const alphabet = new Set<string>([
  "BPO",
  "BTX",
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
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
      ["BPO", 10],
      ["BTX", 9],
      ["ORC", 3],
      ["TQ1", 11],
    ]),
  ],
  [4, new Map([["ORC", 3]])],
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
      ["BTX", 9],
      ["ORC", 3],
    ]),
  ],
  [
    10,
    new Map([
      ["BTX", 9],
      ["ORC", 3],
    ]),
  ],
  [
    11,
    new Map([
      ["BPO", 10],
      ["BTX", 9],
      ["ORC", 3],
      ["TQ1", 11],
      ["TQ2", 12],
    ]),
  ],
  [
    12,
    new Map([
      ["BPO", 10],
      ["BTX", 9],
      ["ORC", 3],
      ["TQ1", 11],
      ["TQ2", 12],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "11:BPO": {
    groupsOpened: [],
    groupsClosed: ["BRT_O32/RESPONSE/ORDER/TIMING"],
  },
  "11:BTX": {
    groupsOpened: [],
    groupsClosed: ["BRT_O32/RESPONSE/ORDER/TIMING"],
  },
  "11:ORC": {
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "11:TQ1": {
    groupsOpened: ["BRT_O32/RESPONSE/ORDER/TIMING"],
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
    groupsOpened: ["BRT_O32/RESPONSE", "BRT_O32/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "5:PID": {
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
  "7:ORC": {
    groupsOpened: ["BRT_O32/RESPONSE", "BRT_O32/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "7:PID": {
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
  "9:ORC": {
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
