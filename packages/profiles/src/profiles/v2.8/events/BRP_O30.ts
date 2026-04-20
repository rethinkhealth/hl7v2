// Generated profile automaton for BRP_O30 (v2.8)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
]);
export const alphabet = new Set<string>([
  "ARV",
  "BPO",
  "BPX",
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
      ["BPO", 12],
      ["BPX", 11],
      ["ORC", 8],
      ["PRT", 14],
      ["TQ1", 13],
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
  [
    11,
    new Map([
      ["BPX", 11],
      ["ORC", 8],
    ]),
  ],
  [
    12,
    new Map([
      ["BPX", 11],
      ["ORC", 8],
    ]),
  ],
  [
    13,
    new Map([
      ["BPO", 12],
      ["BPX", 11],
      ["ORC", 8],
      ["TQ1", 13],
      ["TQ2", 15],
    ]),
  ],
  [
    14,
    new Map([
      ["BPO", 12],
      ["BPX", 11],
      ["ORC", 8],
      ["PRT", 14],
      ["TQ1", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["BPO", 12],
      ["BPX", 11],
      ["ORC", 8],
      ["TQ1", 13],
      ["TQ2", 15],
    ]),
  ],
]);
export const effects = {
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
  "7:PID": {
    groupsOpened: ["BRP_O30/RESPONSE", "BRP_O30/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "8:BPX": {
    groupsOpened: [],
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "8:BPO": {
    groupsOpened: [],
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "8:TQ1": {
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "10:ORC": {
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "12:ORC": {
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "13:TQ1": {
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "13:BPX": {
    groupsOpened: [],
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "13:BPO": {
    groupsOpened: [],
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "14:ORC": {
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "14:BPX": {
    groupsOpened: [],
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "14:BPO": {
    groupsOpened: [],
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "14:TQ1": {
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
  "15:TQ1": {
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["BRP_O30/RESPONSE/PATIENT/ORDER"],
    groupsClosed: [],
  },
  "15:BPX": {
    groupsOpened: [],
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
  },
  "15:BPO": {
    groupsOpened: [],
    groupsClosed: ["BRP_O30/RESPONSE/PATIENT/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
