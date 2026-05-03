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
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
  },
  "10:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
  },
  "11:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
  },
  "11:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
  },
  "12:CTI": {
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "12:NTE": {
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "12:OBR": {
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "12:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
  },
  "12:SPM": {
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
  },
  "12:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "13:ORC": {
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
  },
  "14:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
  },
  "14:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
  },
  "15:CTI": {
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "15:NTE": {
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "15:OBR": {
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "15:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
  },
  "15:SPM": {
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
  },
  "15:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "2:ORC": {
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/ORDER"],
  },
  "2:PID": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/PATIENT"],
  },
  "3:CTI": {
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "3:NTE": {
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "3:OBR": {
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
    groupsOpened: [],
  },
  "3:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
  },
  "3:SPM": {
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
  },
  "3:TQ1": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "4:ORC": {
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
  },
  "5:ORC": {
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/ORDER"],
  },
  "5:PID": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/PATIENT"],
  },
  "6:ORC": {
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/ORDER"],
  },
  "6:PID": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/PATIENT"],
  },
  "7:ORC": {
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/ORDER"],
  },
  "7:PID": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/PATIENT"],
  },
  "8:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
  },
  "8:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
  },
  "9:ORC": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
  },
  "9:SPM": {
    groupsClosed: [],
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
