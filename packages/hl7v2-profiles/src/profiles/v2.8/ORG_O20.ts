// Generated profile automaton for ORG_O20 (v2.8)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 18, 19, 20,
]);
export const alphabet = new Set<string>([
  "ARV",
  "CTI",
  "ERR",
  "MSA",
  "MSH",
  "NTE",
  "OBR",
  "ORC",
  "PID",
  "PRT",
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
      ["PRT", 14],
      ["SPM", 9],
      ["TQ1", 13],
    ]),
  ],
  [
    4,
    new Map([
      ["ARV", 15],
      ["NTE", 17],
      ["ORC", 3],
      ["PRT", 16],
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
      ["SAC", 18],
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
      ["PRT", 19],
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
      ["TQ2", 20],
    ]),
  ],
  [
    14,
    new Map([
      ["CTI", 10],
      ["NTE", 11],
      ["OBR", 12],
      ["ORC", 3],
      ["PRT", 14],
      ["SPM", 9],
      ["TQ1", 13],
    ]),
  ],
  [
    15,
    new Map([
      ["ARV", 15],
      ["ORC", 3],
    ]),
  ],
  [
    16,
    new Map([
      ["ARV", 15],
      ["ORC", 3],
      ["PRT", 16],
    ]),
  ],
  [
    17,
    new Map([
      ["ARV", 15],
      ["NTE", 17],
      ["ORC", 3],
      ["PRT", 16],
    ]),
  ],
  [
    18,
    new Map([
      ["ORC", 3],
      ["SAC", 18],
      ["SPM", 9],
    ]),
  ],
  [
    19,
    new Map([
      ["CTI", 10],
      ["NTE", 11],
      ["ORC", 3],
      ["PRT", 19],
      ["SPM", 9],
    ]),
  ],
  [
    20,
    new Map([
      ["CTI", 10],
      ["NTE", 11],
      ["OBR", 12],
      ["ORC", 3],
      ["SPM", 9],
      ["TQ1", 13],
      ["TQ2", 20],
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
  "14:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
  },
  "14:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
  },
  "14:OBR": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "14:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "14:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
  },
  "14:TQ1": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "15:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
  },
  "16:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
  },
  "17:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
  },
  "18:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "18:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "19:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
  },
  "19:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
  },
  "19:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "19:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
  },
  "20:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
  },
  "20:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
  },
  "20:OBR": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
  "20:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "20:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
  },
  "20:TQ1": {
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
