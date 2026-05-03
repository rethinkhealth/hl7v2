// Generated profile automaton for BRT_O32 (v2.7.1)

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
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
  },
  "11:BPO": {
    groupsClosed: ["BRT_O32/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "11:BTX": {
    groupsClosed: ["BRT_O32/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE/ORDER/TIMING"],
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
    groupsOpened: ["BRT_O32/RESPONSE", "BRT_O32/RESPONSE/ORDER"],
  },
  "5:PID": {
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
  "7:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE", "BRT_O32/RESPONSE/ORDER"],
  },
  "7:PID": {
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
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
