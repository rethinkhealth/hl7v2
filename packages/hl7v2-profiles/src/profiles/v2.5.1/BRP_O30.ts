// Generated profile automaton for BRP_O30 (v2.5.1)

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
    groupsOpened: [],
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "10:BPX": {
    groupsOpened: [],
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "10:ORC": {
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "10:TQ1": {
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
  "11:BPO": {
    groupsOpened: [],
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "11:BPX": {
    groupsOpened: [],
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "11:ORC": {
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "11:TQ1": {
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
  "2:PID": {
    groupsOpened: ["BRP_O30/RESPONSE", "BRP_O30/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:ORC": {
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "4:PID": {
    groupsOpened: ["BRP_O30/RESPONSE", "BRP_O30/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "5:PID": {
    groupsOpened: ["BRP_O30/RESPONSE", "BRP_O30/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:PID": {
    groupsOpened: ["BRP_O30/RESPONSE", "BRP_O30/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:BPO": {
    groupsOpened: [],
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "7:BPX": {
    groupsOpened: [],
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "7:ORC": {
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "7:TQ1": {
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
