// Generated profile automaton for ORG_O20 (v2.7)

export const start = 0;
export const finals = new Set<number>([
  2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18,
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
      ["OBR", 13],
      ["ORC", 3],
      ["PRT", 12],
      ["SPM", 9],
      ["TQ1", 14],
    ]),
  ],
  [
    4,
    new Map([
      ["NTE", 16],
      ["ORC", 3],
      ["PRT", 15],
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
      ["SAC", 17],
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
      ["PRT", 12],
      ["SPM", 9],
    ]),
  ],
  [
    13,
    new Map([
      ["CTI", 10],
      ["NTE", 11],
      ["ORC", 3],
      ["PRT", 12],
      ["SPM", 9],
    ]),
  ],
  [
    14,
    new Map([
      ["CTI", 10],
      ["NTE", 11],
      ["OBR", 13],
      ["ORC", 3],
      ["PRT", 12],
      ["SPM", 9],
      ["TQ1", 14],
      ["TQ2", 18],
    ]),
  ],
  [
    15,
    new Map([
      ["ORC", 3],
      ["PRT", 15],
    ]),
  ],
  [
    16,
    new Map([
      ["NTE", 16],
      ["ORC", 3],
      ["PRT", 15],
    ]),
  ],
  [
    17,
    new Map([
      ["ORC", 3],
      ["SAC", 17],
      ["SPM", 9],
    ]),
  ],
  [
    18,
    new Map([
      ["CTI", 10],
      ["NTE", 11],
      ["OBR", 13],
      ["ORC", 3],
      ["PRT", 12],
      ["SPM", 9],
      ["TQ1", 14],
      ["TQ2", 18],
    ]),
  ],
]);
export const effects = {
  "2:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/ORDER"],
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
  },
  "2:PID": {
    groupsOpened: ["ORG_O20/RESPONSE", "ORG_O20/RESPONSE/PATIENT"],
    groupsClosed: [],
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
  "3:PRT": {
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
  "9:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "9:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
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
  "12:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "12:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "13:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "13:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
  },
  "13:CTI": {
    groupsOpened: [],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
  },
  "13:NTE": {
    groupsOpened: [],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
  },
  "13:PRT": {
    groupsOpened: [],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
  },
  "14:TQ1": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
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
  "14:PRT": {
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
  "15:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
  },
  "16:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: ["ORG_O20/RESPONSE/PATIENT"],
  },
  "17:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [],
  },
  "17:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "18:TQ1": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/TIMING"],
    groupsClosed: [],
  },
  "18:ORC": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER"],
    groupsClosed: [],
  },
  "18:SPM": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/SPECIMEN"],
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
  },
  "18:CTI": {
    groupsOpened: [],
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
  },
  "18:NTE": {
    groupsOpened: [],
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
  },
  "18:PRT": {
    groupsOpened: [],
    groupsClosed: [
      "ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP",
      "ORG_O20/RESPONSE/ORDER/TIMING",
    ],
  },
  "18:OBR": {
    groupsOpened: ["ORG_O20/RESPONSE/ORDER/OBSERVATION_GROUP"],
    groupsClosed: ["ORG_O20/RESPONSE/ORDER/TIMING"],
  },
} satisfies Readonly<
  Record<
    string,
    { groupsOpened: readonly string[]; groupsClosed: readonly string[] }
  >
>;
