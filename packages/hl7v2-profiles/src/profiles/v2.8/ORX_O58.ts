// Generated profile automaton for ORX_O58 (v2.8)

export const start = 0;
export const finals = new Set<number>([2, 5, 6, 7, 8, 9, 14]);
export const alphabet = new Set<string>([
  "ARV",
  "CTI",
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "ORC",
  "PID",
  "PRT",
  "SFT",
  "TXA",
  "UAC",
]);
export const transitions = new Map<number, Map<string, number>>([
  [0, new Map([["MSH", 1]])],
  [1, new Map([["MSA", 2]])],
  [
    2,
    new Map([
      ["ERR", 8],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [
    3,
    new Map([
      ["PRT", 10],
      ["TXA", 9],
    ]),
  ],
  [
    4,
    new Map([
      ["ARV", 11],
      ["NTE", 13],
      ["ORC", 3],
      ["PRT", 12],
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
    ]),
  ],
  [
    7,
    new Map([
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [
    8,
    new Map([
      ["ERR", 8],
      ["NTE", 5],
      ["ORC", 3],
      ["PID", 4],
      ["SFT", 7],
      ["UAC", 6],
    ]),
  ],
  [
    9,
    new Map([
      ["CTI", 14],
      ["ORC", 3],
    ]),
  ],
  [
    10,
    new Map([
      ["PRT", 10],
      ["TXA", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["ARV", 11],
      ["ORC", 3],
    ]),
  ],
  [
    12,
    new Map([
      ["ARV", 11],
      ["ORC", 3],
      ["PRT", 12],
    ]),
  ],
  [
    13,
    new Map([
      ["ARV", 11],
      ["NTE", 13],
      ["ORC", 3],
      ["PRT", 12],
    ]),
  ],
  [
    14,
    new Map([
      ["CTI", 14],
      ["ORC", 3],
    ]),
  ],
]);
export const effects = {
  "11:ORC": {
    groupsOpened: ["ORX_O58/RESPONSE/ORDER"],
    groupsClosed: ["ORX_O58/RESPONSE/PATIENT"],
  },
  "12:ORC": {
    groupsOpened: ["ORX_O58/RESPONSE/ORDER"],
    groupsClosed: ["ORX_O58/RESPONSE/PATIENT"],
  },
  "13:ORC": {
    groupsOpened: ["ORX_O58/RESPONSE/ORDER"],
    groupsClosed: ["ORX_O58/RESPONSE/PATIENT"],
  },
  "14:ORC": {
    groupsOpened: ["ORX_O58/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "2:ORC": {
    groupsOpened: ["ORX_O58/RESPONSE", "ORX_O58/RESPONSE/ORDER"],
    groupsClosed: ["ORX_O58/RESPONSE/PATIENT"],
  },
  "2:PID": {
    groupsOpened: ["ORX_O58/RESPONSE", "ORX_O58/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "4:ORC": {
    groupsOpened: ["ORX_O58/RESPONSE/ORDER"],
    groupsClosed: ["ORX_O58/RESPONSE/PATIENT"],
  },
  "5:ORC": {
    groupsOpened: ["ORX_O58/RESPONSE", "ORX_O58/RESPONSE/ORDER"],
    groupsClosed: ["ORX_O58/RESPONSE/PATIENT"],
  },
  "5:PID": {
    groupsOpened: ["ORX_O58/RESPONSE", "ORX_O58/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "6:ORC": {
    groupsOpened: ["ORX_O58/RESPONSE", "ORX_O58/RESPONSE/ORDER"],
    groupsClosed: ["ORX_O58/RESPONSE/PATIENT"],
  },
  "6:PID": {
    groupsOpened: ["ORX_O58/RESPONSE", "ORX_O58/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "7:ORC": {
    groupsOpened: ["ORX_O58/RESPONSE", "ORX_O58/RESPONSE/ORDER"],
    groupsClosed: ["ORX_O58/RESPONSE/PATIENT"],
  },
  "7:PID": {
    groupsOpened: ["ORX_O58/RESPONSE", "ORX_O58/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "8:ORC": {
    groupsOpened: ["ORX_O58/RESPONSE", "ORX_O58/RESPONSE/ORDER"],
    groupsClosed: ["ORX_O58/RESPONSE/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["ORX_O58/RESPONSE", "ORX_O58/RESPONSE/PATIENT"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["ORX_O58/RESPONSE/ORDER"],
    groupsClosed: [],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
