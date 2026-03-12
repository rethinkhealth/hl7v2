// Generated profile automaton for ORB_O28 (v2.8)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
]);
export const alphabet = new Set<string>([
  "ARV",
  "BPO",
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
      ["ERR", 7],
      ["NTE", 4],
      ["PID", 3],
      ["SFT", 6],
      ["UAC", 5],
    ]),
  ],
  [
    3,
    new Map([
      ["ARV", 9],
      ["ORC", 8],
      ["PRT", 10],
    ]),
  ],
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
      ["BPO", 11],
      ["ORC", 8],
      ["PRT", 13],
      ["TQ1", 12],
    ]),
  ],
  [
    9,
    new Map([
      ["ARV", 9],
      ["ORC", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["ARV", 9],
      ["ORC", 8],
      ["PRT", 10],
    ]),
  ],
  [11, new Map([["ORC", 8]])],
  [
    12,
    new Map([
      ["BPO", 11],
      ["ORC", 8],
      ["TQ1", 12],
      ["TQ2", 14],
    ]),
  ],
  [
    13,
    new Map([
      ["BPO", 11],
      ["ORC", 8],
      ["PRT", 13],
      ["TQ1", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["BPO", 11],
      ["ORC", 8],
      ["TQ1", 12],
      ["TQ2", 14],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "12:BPO": {
    groupsOpened: [],
    groupsClosed: ["ORB_O28/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "12:ORC": {
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "12:TQ1": {
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
  "13:BPO": {
    groupsOpened: [],
    groupsClosed: ["ORB_O28/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "13:ORC": {
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "13:TQ1": {
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
  "14:BPO": {
    groupsOpened: [],
    groupsClosed: ["ORB_O28/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "14:ORC": {
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "14:TQ1": {
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
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
  "7:PID": {
    groupsOpened: ["ORB_O28/RESPONSE", "ORB_O28/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:BPO": {
    groupsOpened: [],
    groupsClosed: ["ORB_O28/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "8:ORC": {
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "8:TQ1": {
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["ORB_O28/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
