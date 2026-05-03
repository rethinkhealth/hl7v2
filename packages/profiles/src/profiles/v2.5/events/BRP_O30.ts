// Generated profile automaton for BRP_O30 (v2.5)

export const start = 0;
export const finals = new Set<number>([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
export const alphabet = new Set<string>([
  "BPO",
  "BPX",
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
      ["BPO", 9],
      ["BPX", 8],
      ["ORC", 7],
      ["TQ1", 10],
    ]),
  ],
  [
    8,
    new Map([
      ["BPX", 8],
      ["ORC", 7],
    ]),
  ],
  [
    9,
    new Map([
      ["BPX", 8],
      ["ORC", 7],
    ]),
  ],
  [
    10,
    new Map([
      ["BPO", 9],
      ["BPX", 8],
      ["ORC", 7],
      ["TQ1", 10],
      ["TQ2", 11],
    ]),
  ],
  [
    11,
    new Map([
      ["BPO", 9],
      ["BPX", 8],
      ["ORC", 7],
      ["TQ1", 10],
      ["TQ2", 11],
    ]),
  ],
]);
export const effects = {
  "10:BPO": {
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsOpened: [],
  },
  "10:BPX": {
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsOpened: [],
  },
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
  },
  "10:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "11:BPO": {
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsOpened: [],
  },
  "11:BPX": {
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsOpened: [],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
  },
  "11:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["BRP_O30/RESPONSE", "BRP_O30/RESPONSE/PATIENT"],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
  },
  "4:PID": {
    groupsClosed: [],
    groupsOpened: ["BRP_O30/RESPONSE", "BRP_O30/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["BRP_O30/RESPONSE", "BRP_O30/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["BRP_O30/RESPONSE", "BRP_O30/RESPONSE/PATIENT"],
  },
  "7:BPO": {
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsOpened: [],
  },
  "7:BPX": {
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsOpened: [],
  },
  "7:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
  },
  "7:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
