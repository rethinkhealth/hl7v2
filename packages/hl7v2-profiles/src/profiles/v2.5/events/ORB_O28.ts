// Generated profile automaton for ORB_O28 (v2.5)

export const start = 0;
export const finals = new Set<number>([2, 3, 4, 5, 6, 7, 8, 9, 10]);
export const alphabet = new Set<string>([
  "BPO",
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
      ["ERR", 6],
      ["NTE", 4],
      ["PID", 3],
      ["SFT", 5],
    ]),
  ],
  [3, new Map([["ORC", 7]])],
  [
    4,
    new Map([
      ["NTE", 4],
      ["PID", 3],
    ]),
  ],
  [
    5,
    new Map([
      ["NTE", 4],
      ["PID", 3],
      ["SFT", 5],
    ]),
  ],
  [
    6,
    new Map([
      ["ERR", 6],
      ["NTE", 4],
      ["PID", 3],
      ["SFT", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["BPO", 8],
      ["ORC", 7],
      ["TQ1", 9],
    ]),
  ],
  [8, new Map([["ORC", 7]])],
  [
    9,
    new Map([
      ["BPO", 8],
      ["ORC", 7],
      ["TQ1", 9],
      ["TQ2", 10],
    ]),
  ],
  [
    10,
    new Map([
      ["BPO", 8],
      ["ORC", 7],
      ["TQ1", 9],
      ["TQ2", 10],
    ]),
  ],
]);
export const effects = {
  "2:PID": {
    groupsOpened: ["ORB_O28/RESPONSE", "ORB_O28/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: ["ORB_O28/RESPONSE", "ORB_O28/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "5:PID": {
    groupsOpened: ["ORB_O28/RESPONSE", "ORB_O28/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:PID": {
    groupsOpened: ["ORB_O28/RESPONSE", "ORB_O28/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "7:BPO": {
    groupsOpened: [],
    groupsClosed: ["ORB_O28/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "7:TQ1": {
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "9:TQ1": {
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "9:BPO": {
    groupsOpened: [],
    groupsClosed: ["ORB_O28/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "10:TQ1": {
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "10:BPO": {
    groupsOpened: [],
    groupsClosed: ["ORB_O28/RESPONSE/PATIENT/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
