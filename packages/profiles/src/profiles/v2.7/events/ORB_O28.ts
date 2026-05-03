// Generated profile automaton for ORB_O28 (v2.7)

export const start = 0;
export const finals = new Set<number>([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
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
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 7],
      ["NTE", 4],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [3, new Map([["ORC", 8]])],
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
    ]),
  ],
  [
    6,
    new Map([
      ["NTE", 4],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    7,
    new Map([
      ["ERR", 7],
      ["NTE", 4],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    8,
    new Map([
      ["BPO", 9],
      ["ORC", 8],
      ["TQ1", 10],
    ]),
  ],
  [9, new Map([["ORC", 8]])],
  [
    10,
    new Map([
      ["BPO", 9],
      ["ORC", 8],
      ["TQ1", 10],
      ["TQ2", 11],
    ]),
  ],
  [
    11,
    new Map([
      ["BPO", 9],
      ["ORC", 8],
      ["TQ1", 10],
      ["TQ2", 11],
    ]),
  ],
]);
export const effects = {
  "10:BPO": {
    groupsClosed: ["ORB_O28/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsOpened: [],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "11:BPO": {
    groupsClosed: ["ORB_O28/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsOpened: [],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORB_O28/RESPONSE", "ORB_O28/RESPONSE/PATIENT"],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["ORB_O28/RESPONSE", "ORB_O28/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORB_O28/RESPONSE", "ORB_O28/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORB_O28/RESPONSE", "ORB_O28/RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["ORB_O28/RESPONSE", "ORB_O28/RESPONSE/PATIENT"],
  },
  "8:BPO": {
    groupsClosed: ["ORB_O28/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsOpened: [],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER"],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
