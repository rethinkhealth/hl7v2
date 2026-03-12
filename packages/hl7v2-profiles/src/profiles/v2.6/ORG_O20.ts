// Generated profile automaton for ORG_O20 (v2.6)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17,
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
  "ROL",
  "SAC",
  "SFT",
  "SPM",
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
      ["CTI", 10],
      ["NTE", 11],
      ["OBR", 12],
      ["ORC", 3],
      ["SPM", 9],
      ["TQ1", 13],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 14],
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
      ["ORC", 3],
      ["SAC", 15],
      ["SPM", 9],
    ]),
  ],
  [
    10,
    new Map([
      ["CTI", 10],
      ["ORC", 3],
      ["SPM", 9],
    ]),
  ],
  [
    11,
    new Map([
      ["CTI", 10],
      ["NTE", 11],
      ["ORC", 3],
      ["SPM", 9],
    ]),
  ],
  [
    12,
    new Map([
      ["CTI", 10],
      ["NTE", 11],
      ["ORC", 3],
      ["ROL", 16],
      ["SPM", 9],
    ]),
  ],
  [
    13,
    new Map([
      ["CTI", 10],
      ["NTE", 11],
      ["OBR", 12],
      ["ORC", 3],
      ["SPM", 9],
      ["TQ1", 13],
      ["TQ2", 17],
    ]),
  ],
  [
    14,
    new Map([
      ["NTE", 14],
      ["ORC", 3],
    ]),
  ],
  [
    15,
    new Map([
      ["ORC", 3],
      ["SAC", 15],
      ["SPM", 9],
    ]),
  ],
  [
    16,
    new Map([
      ["CTI", 10],
      ["NTE", 11],
      ["ORC", 3],
      ["ROL", 16],
      ["SPM", 9],
    ]),
  ],
  [
    17,
    new Map([
      ["CTI", 10],
      ["NTE", 11],
      ["OBR", 12],
      ["ORC", 3],
      ["SPM", 9],
      ["TQ1", 13],
      ["TQ2", 17],
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
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
  },
  "12:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
  },
  "12:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "12:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
  },
  "13:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
  },
  "13:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
  },
  "13:OBR": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "13:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "13:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
  },
  "13:TQ1": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "14:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
  },
  "15:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "15:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "16:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
  },
  "16:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
  },
  "16:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "16:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
  },
  "17:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
  },
  "17:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
  },
  "17:OBR": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "17:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "17:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
  },
  "17:TQ1": {
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
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
  },
  "3:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
  },
  "3:OBR": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "3:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "3:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
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
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/ORDER"],
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
  },
  "8:PID": {
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/PATIENT"],
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
