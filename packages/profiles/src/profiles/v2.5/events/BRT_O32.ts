// Generated profile automaton for BRT_O32 (v2.5)

export const start = 0;
export const finals = new Set<number>([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
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
      ["BPO", 9],
      ["BTX", 8],
      ["ORC", 3],
      ["TQ1", 10],
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
      ["BTX", 8],
      ["ORC", 3],
    ]),
  ],
  [
    9,
    new Map([
      ["BTX", 8],
      ["ORC", 3],
    ]),
  ],
  [
    10,
    new Map([
      ["BPO", 9],
      ["BTX", 8],
      ["ORC", 3],
      ["TQ1", 10],
      ["TQ2", 11],
    ]),
  ],
  [
    11,
    new Map([
      ["BPO", 9],
      ["BTX", 8],
      ["ORC", 3],
      ["TQ1", 10],
      ["TQ2", 11],
    ]),
  ],
]);
export const effects = {
  "10:BPO": {
    groupsClosed: ["BRT_O32/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "10:BTX": {
    groupsClosed: ["BRT_O32/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BRT_O32/RESPONSE/ORDER/TIMING"],
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
    groupsOpened: ["BRT_O32/RESPONSE/ORDER"],
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
