// Generated profile automaton for ORG_O20 (v2.5.1)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15,
]);
export const alphabet = new Set<string>([
  "CTI",
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "OBR",
  "ORC",
  "PID",
  "SAC",
  "SFT",
  "SPM",
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
      ["CTI", 9],
      ["NTE", 10],
      ["OBR", 11],
      ["ORC", 3],
      ["SPM", 8],
      ["TQ1", 12],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 13],
      ["ORC", 3],
    ]),
  ],
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
      ["ORC", 3],
      ["SAC", 14],
      ["SPM", 8],
    ]),
  ],
  [
    9,
    new Map([
      ["CTI", 9],
      ["ORC", 3],
      ["SPM", 8],
    ]),
  ],
  [
    10,
    new Map([
      ["CTI", 9],
      ["NTE", 10],
      ["ORC", 3],
      ["SPM", 8],
    ]),
  ],
  [
    11,
    new Map([
      ["CTI", 9],
      ["NTE", 10],
      ["ORC", 3],
      ["SPM", 8],
    ]),
  ],
  [
    12,
    new Map([
      ["CTI", 9],
      ["NTE", 10],
      ["OBR", 11],
      ["ORC", 3],
      ["SPM", 8],
      ["TQ1", 12],
      ["TQ2", 15],
    ]),
  ],
  [
    13,
    new Map([
      ["NTE", 13],
      ["ORC", 3],
    ]),
  ],
  [
    14,
    new Map([
      ["ORC", 3],
      ["SAC", 14],
      ["SPM", 8],
    ]),
  ],
  [
    15,
    new Map([
      ["CTI", 9],
      ["NTE", 10],
      ["OBR", 11],
      ["ORC", 3],
      ["SPM", 8],
      ["TQ1", 12],
      ["TQ2", 15],
    ]),
  ],
]);
export const effects = {
  "10:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "10:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "11:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "11:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "12:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "12:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "12:OBR": {
    groupsOpened: [],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "12:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "12:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "12:TQ1": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
  },
  "14:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "14:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "15:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "15:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "15:OBR": {
    groupsOpened: [],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "15:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "15:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "15:TQ1": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/ORDER"],
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
  },
  "2:PID": {
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "3:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "3:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "3:OBR": {
    groupsOpened: [],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "3:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "3:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "3:TQ1": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
  },
  "5:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/ORDER"],
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/ORDER"],
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/ORDER"],
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "8:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "9:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
