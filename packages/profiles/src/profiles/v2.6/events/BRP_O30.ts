// Generated profile automaton for BRP_O30 (v2.6)

export const start = 0;
export const finals = new Set<number>([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
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
      ["BPO", 10],
      ["BPX", 9],
      ["ORC", 8],
      ["TQ1", 11],
    ]),
  ],
  [
    9,
    new Map([
      ["BPX", 9],
      ["ORC", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["BPX", 9],
      ["ORC", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["BPO", 10],
      ["BPX", 9],
      ["ORC", 8],
      ["TQ1", 11],
      ["TQ2", 12],
    ]),
  ],
  [
    12,
    new Map([
      ["BPO", 10],
      ["BPX", 9],
      ["ORC", 8],
      ["TQ1", 11],
      ["TQ2", 12],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
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
  "12:BPO": {
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsOpened: [],
  },
  "12:BPX": {
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsOpened: [],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
  },
  "12:TQ1": {
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
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["BRP_O30/RESPONSE", "BRP_O30/RESPONSE/PATIENT"],
  },
  "8:BPO": {
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsOpened: [],
  },
  "8:BPX": {
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsOpened: [],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
  },
  "8:TQ1": {
    groupsClosed: [],
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
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
